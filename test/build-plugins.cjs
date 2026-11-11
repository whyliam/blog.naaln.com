'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const http = require('node:http');
const crypto = require('node:crypto');
const { Readable } = require('node:stream');
const { createRequire } = require('node:module');
const sharp = require('sharp');

async function load(name, config, extra = {}) {
  const hooks = { filter: new Map(), generator: new Map(), deployer: new Map() };
  const hexo = {
    config, log: { info() {}, warn() {} },
    extend: Object.fromEntries(Object.entries(hooks).map(([key, map]) => [key, { register: (id, fn) => map.set(id, fn) }]))
  };
  const file = path.resolve(__dirname, '../scripts', name);
  vm.runInNewContext(await fs.readFile(file, 'utf8'), {
    hexo, require: createRequire(file), Buffer, URL, AbortSignal, process: { env: {} }, ...extra
  }, { filename: file });
  return { hooks, hexo };
}

test('HTML optimization preserves code whitespace, search JSON and semantic buttons', async () => {
  const { hooks } = await load('minify.js', { all_minifier: { enable: true } });
  const source = '<!-- removable --> <pre><code>const x = 1;\n  x++;</code></pre><button type="button" data-settings="{&quot;root&quot;:&quot;/journal/&quot;}" aria-label="复制代码">Copy</button>';
  const result = await hooks.filter.get('after_render:html')(source);
  assert.ok(!result.includes('removable'));
  assert.ok(result.includes('const x = 1;\n  x++;'));
  assert.ok(result.includes('aria-label="复制代码"'));
  assert.ok(result.includes('/journal/'));
  const css = hooks.filter.get('after_render:css')('a { color: red; margin: 0px; }');
  assert.ok(css.length < 35 && css.includes('color:red'));
  const js = await hooks.filter.get('after_render:js')('export const value = 1 + 2;', { path: 'scene.mjs' });
  assert.match(js, /export/);
});

test('image optimization preserves decoded PNG pixels and SVG viewBox', async () => {
  const original = await sharp({ create: { width: 40, height: 30, channels: 4, background: '#618975' } }).png({ compressionLevel: 0 }).toBuffer();
  const routes = new Map([['sample.png', original], ['sample.svg', Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30"><rect width="40" height="30" fill="#618975"/></svg>')]]);
  const { hooks, hexo } = await load('minify.js', { all_minifier: { enable: true } });
  hexo.route = { list: () => [...routes.keys()], get: key => Readable.from([routes.get(key)]), set: (key, value) => routes.set(key, value) };
  await hooks.filter.get('after_generate').call(hexo);
  assert.ok(routes.get('sample.png').length < original.length);
  assert.deepEqual(await sharp(routes.get('sample.png')).raw().toBuffer(), await sharp(original).raw().toBuffer());
  assert.match(routes.get('sample.svg').toString(), /viewBox="0 0 40 30"/);
});

test('disabling optimization registers no modifying filters', async () => {
  const { hooks } = await load('minify.js', { all_minifier: { enable: false } });
  assert.equal(hooks.filter.size, 0);
});

test('search submission sorts updated posts, limits URLs and sends native Baidu/Bing requests', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'aether-submit-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  const calls = [];
  const cfg = { count: 2, baidu: 1, bing: 1, baidu_token: 'test-token', bing_token: 'test-token' };
  const { hooks, hexo } = await load('search-submit.js', { url: 'https://blog.example', hexo_submit_urls_to_search_engine: cfg }, {
    fetch: async (url, options) => { calls.push({ url: new URL(url), options }); return { ok: true, text: async () => '{"d":null}' }; }
  });
  const posts = [{ permalink: 'https://blog.example/old/', date: 1 }, { permalink: 'https://blog.example/new/', date: 2 }, { permalink: 'https://blog.example/revised/', date: 0, updated: 3 }];
  const generated = hooks.generator.get('cjh_url_generator')({ posts: { toArray: () => posts } });
  assert.equal(generated.data, 'https://blog.example/revised/\nhttps://blog.example/new/');
  await fs.writeFile(path.join(dir, 'submit_urls.txt'), generated.data + '\nhttps://foreign.example/');
  hexo.public_dir = dir;
  await hooks.deployer.get('cjh_baidu_url_submitter').call(hexo);
  await hooks.deployer.get('cjh_bing_url_submitter').call(hexo);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].url.hostname, 'data.zz.baidu.com');
  assert.equal(calls[0].options.body, generated.data);
  assert.equal(calls[1].url.pathname, '/webmaster/api.svc/json/SubmitUrlBatch');
  assert.equal(JSON.parse(calls[1].options.body).urlList.length, 2);
  assert.ok(calls.every(call => call.options.redirect === 'error' && call.options.signal));
});

test('submission refuses missing credentials and redacts transport errors', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'aether-submit-error-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'submit_urls.txt'), 'https://blog.example/new/');
  const cfg = { baidu: 1 };
  const { hooks, hexo } = await load('search-submit.js', { url: 'https://blog.example', hexo_submit_urls_to_search_engine: cfg }, {
    fetch: async () => { throw Error('private token in transport error'); }
  });
  hexo.public_dir = dir;
  const send = hooks.deployer.get('cjh_baidu_url_submitter').bind(hexo);
  await assert.rejects(send, /BAIDU_TOKEN is required/);
  cfg.baidu_token = 'test-token';
  await assert.rejects(send, error => error.message === 'Search submission transport failed');
});

test('only confirmed Baidu daily quota exhaustion is deferred; invalid credentials still fail', async t => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'aether-submit-quota-'));
  t.after(() => fs.rm(dir, { recursive: true, force: true }));
  await fs.writeFile(path.join(dir, 'submit_urls.txt'), 'https://blog.example/new/');
  let body = { error: 400, message: 'over quota' };
  const { hooks, hexo } = await load('search-submit.js', {
    url: 'https://blog.example', hexo_submit_urls_to_search_engine: { baidu: 1, baidu_token: 'test-token' }
  }, { fetch: async () => ({ ok: false, status: 400, text: async () => JSON.stringify(body) }) });
  let warnings = 0;
  hexo.public_dir = dir;
  hexo.log.warn = () => { warnings++; };
  const send = hooks.deployer.get('cjh_baidu_url_submitter').bind(hexo);
  await send();
  assert.equal(warnings, 1);
  body = { error: 401, message: 'token invalid' };
  await assert.rejects(send, /Search submission failed/);
  assert.equal(warnings, 1);
});

test('patched UPYUN SDK preserves signed upload/download/directory/delete behavior', async t => {
  const UpYun = require('upyun');
  const isUploadResult = require('hexo-deployer-upyun/lib/upload-result');
  const requests = [];
  const server = http.createServer(async (req, res) => {
    const parts = [];
    for await (const part of req) parts.push(part);
    requests.push({ method: req.method, path: req.url, headers: req.headers, body: Buffer.concat(parts).toString() });
    res.writeHead(200, req.url.endsWith('.png')
      ? { 'x-upyun-file-type': 'PNG', 'x-upyun-width': '16', 'x-upyun-height': '16' }
      : { 'Content-Type': 'application/json' });
    res.end(req.method === 'GET' ? '[{"file":"index.html"}]' : '');
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const service = new UpYun.Service('test-bucket', 'test-operator', 'test-password');
  const client = new UpYun.Client(service, { protocol: 'http', domain: `127.0.0.1:${server.address().port}`, proxy: false });
  assert.ok(await client.putFile('目录/index.html', Buffer.from('fixture')));
  assert.equal((await client.getFile('.file_list.json'))[0].file, 'index.html');
  assert.ok(await client.makeDir('new-directory'));
  assert.ok(await client.deleteFile('old.html'));
  const image = await client.putFile('image.png', Buffer.from('image fixture'));
  assert.equal(typeof image, 'object');
  assert.equal(isUploadResult(image), true);
  assert.equal(isUploadResult({ error: 'failed' }), false);
  assert.equal(requests.length, 5);
  for (const req of requests) {
    const digest = crypto.createHash('md5').update('test-password').digest('hex');
    const expected = crypto.createHmac('sha1', digest).update(`${req.method}&${req.path}&${req.headers['x-date']}`).digest('base64');
    assert.equal(req.headers.authorization, `UPYUN test-operator:${expected}`);
  }
  assert.equal(requests[0].body, 'fixture');
  assert.equal(requests[2].headers.folder, 'true');
});
