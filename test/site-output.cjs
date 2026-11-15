'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {Parser} = require('htmlparser2');
const css = require('@adobe/css-tools');
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');
const stylesheet = fs.readFileSync(path.join(publicDir, 'css/main.css'), 'utf8');
assert.ok(stylesheet.length > 1000 && stylesheet.includes('aether'), 'Aether CSS is missing');
assert.doesNotThrow(() => css.parse(stylesheet), 'Generated CSS must parse');
assert.ok(fs.existsSync(path.join(publicDir, 'css/hexo-reference.css')), 'Local footnote stylesheet is missing');
let documents = 0;
let graphs = 0;
for (const filename of fs.readdirSync(publicDir, {recursive: true}).filter(file => file.endsWith('.html'))) {
  const html = fs.readFileSync(path.join(publicDir, filename), 'utf8');
  if (!/<head[\s>]/i.test(html)) continue;
  documents++;
  let inHead = false;
  let json = null;
  const canonicals = [];
  const footnoteIds = new Set();
  const parser = new Parser({
    onopentag(name, attrs) {
      if (name === 'head') inHead = true;
      if (inHead && name === 'link' && (attrs.rel || '').split(/\s+/).includes('canonical')) canonicals.push(attrs.href);
      if (inHead && name === 'script' && attrs['data-hexo-smart-seo'] === 'jsonld') json = '';
      if (attrs.id && /^fn-[a-f0-9]+(?:ref)?:/.test(attrs.id)) {
        assert.ok(!footnoteIds.has(attrs.id), `${filename}: duplicate footnote ID ${attrs.id}`);
        footnoteIds.add(attrs.id);
      }
    },
    ontext(text) {if (json !== null) json += text;},
    onclosetag(name) {
      if (name === 'head') inHead = false;
      if (name === 'script' && json !== null) {
        assert.doesNotThrow(() => JSON.parse(json), `${filename}: invalid plugin JSON-LD`);
        graphs++; json = null;
      }
    }
  }, {decodeEntities: true});
  parser.end(html);
  assert.equal(canonicals.length, 1, `${filename}: expected exactly one canonical`);
  assert.ok(/^https?:\/\//.test(canonicals[0]), `${filename}: canonical must be absolute`);
  assert.ok(!html.includes('cdnjs.cloudflare.com/ajax/libs/hint.css'), `${filename}: old tooltip CDN remains`);
}
assert.ok(documents > 0 && graphs > 0, 'No generated HTML/JSON-LD was checked');
console.log(`Site output passed: ${documents} HTML documents, ${graphs} JSON-LD graphs, CSS, canonicals and footnote IDs.`);
const home = fs.readFileSync(path.join(publicDir, 'index.html'), 'utf8');
assert.ok(home.includes('aether-icon-search') && home.includes('aether-icon-sun') && home.includes('aether-icon-moon'), 'Critical controls need font-independent SVGs');
const manifest = JSON.parse(fs.readFileSync(path.join(publicDir, 'site.webmanifest'), 'utf8'));
assert.equal(manifest.start_url, '/');
assert.ok(manifest.icons.some(icon => icon.purpose === 'maskable'));
for (const icon of manifest.icons) {
  const data = fs.readFileSync(path.join(publicDir, icon.src.replace(/^\//, '')));
  const expected = Number(icon.sizes.split('x')[0]);
  assert.equal(data.readUInt32BE(16), expected);
  assert.equal(data.readUInt32BE(20), expected);
}
const ico = fs.readFileSync(path.join(publicDir, 'favicon.ico'));
assert.equal(ico.readUInt16LE(2), 1);
assert.ok(ico.readUInt16LE(4) >= 3, 'ICO needs multiple sizes');
assert.ok(ico.length < 10000, 'ICO should stay small');
const adaptive = fs.readFileSync(path.join(publicDir, 'images/favicon/favicon.svg'), 'utf8');
assert.ok(adaptive.includes('prefers-color-scheme:dark'));
assert.ok(!adaptive.includes('<!DOCTYPE'), 'SVG should not rely on external DTDs');
console.log('Icons passed: adaptive SVG, multi-size ICO, app/maskable dimensions, manifest and inline controls.');
