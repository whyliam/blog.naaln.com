/* global hexo */
'use strict';

// Existing Baidu/Bing submission contract, using Node's bounded native fetch.
const fs = require('node:fs/promises');
const path = require('node:path');
const cfg = hexo.config.hexo_submit_urls_to_search_engine;

if (cfg) {
  hexo.extend.generator.register('cjh_url_generator', function(locals) {
    const posts = locals.posts.toArray().sort((a, b) => (b.updated || b.date) - (a.updated || a.date));
    const selected = cfg.submit_condition === 'period'
      ? posts.filter(post => Date.now() - (post.updated || post.date).valueOf() < cfg.period * 1000)
      : posts.slice(0, cfg.count || 10);
    const urls = selected.map(post => cfg.replace === 1
      ? post.permalink.replace(cfg.find_what, cfg.replace_with)
      : post.permalink);
    return { path: cfg.txt_path || 'submit_urls.txt', data: urls.join('\n') };
  });

  async function urls(context) {
    const text = await fs.readFile(path.join(context.public_dir, cfg.txt_path || 'submit_urls.txt'), 'utf8');
    const origin = new URL(hexo.config.url).origin;
    return text.split(/\r?\n/).filter(Boolean).filter(url => new URL(url).origin === origin);
  }

  async function post(endpoint, body, type) {
    let response;
    try {
      response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': type }, body,
        signal: AbortSignal.timeout(15000), redirect: 'error'
      });
    } catch {
      throw new Error('Search submission transport failed');
    }
    // Do not log endpoint URLs or raw responses: API credentials can appear there.
    const text = await response.text();
    let data;
    try { data = text ? JSON.parse(text) : {}; } catch {
      throw new Error('Search service returned an invalid response');
    }
    const code = Number(data.error || data.ErrorCode);
    const message = String(data.message || '').trim().toLowerCase();
    if (endpoint.hostname === 'data.zz.baidu.com' && code === 400 && message === 'over quota') {
      return { deferred: true };
    }
    if (!response.ok) {
      const reason = ['over quota', 'site error', 'site init fail', 'token error'].includes(message) ? message : 'unrecognized response';
      throw new Error(`Search submission failed (HTTP ${response.status}, service ${Number.isFinite(code) ? code : 'unknown'}, ${reason})`);
    }
    if (data.error || data.ErrorCode) throw new Error('Search service rejected the submission');
    return data;
  }

  hexo.extend.deployer.register('cjh_baidu_url_submitter', async function() {
    if (cfg.baidu !== 1) return;
    const token = cfg.baidu_token && cfg.baidu_token !== 0 ? cfg.baidu_token : process.env.BAIDU_TOKEN;
    if (!token) throw new Error('BAIDU_TOKEN is required for enabled Baidu submission');
    const list = await urls(this);
    if (!list.length) return;
    const endpoint = new URL('http://data.zz.baidu.com/urls');
    const site = cfg.baidu_host || hexo.config.url;
    const parsed = new URL(site);
    if (!['http:', 'https:'].includes(parsed.protocol) || parsed.search || parsed.hash) {
      throw new Error('Baidu site must be an HTTP(S) URL without query or fragment');
    }
    // Preserve the documented Baidu query format and the previous working client.
    endpoint.search = `site=${site}&token=${encodeURIComponent(token)}`;
    const result = await post(endpoint, list.join('\n'), 'text/plain');
    if (result.deferred) {
      this.log.warn('Baidu daily submission quota exhausted; deferred until the next scheduled deployment');
      return;
    }
    this.log.info(`Baidu accepted a batch of ${list.length} URLs`);
  });

  hexo.extend.deployer.register('cjh_bing_url_submitter', async function() {
    if (cfg.bing !== 1) return;
    const token = cfg.bing_token && cfg.bing_token !== 0 ? cfg.bing_token : process.env.BING_TOKEN;
    if (!token) throw new Error('BING_TOKEN is required for enabled Bing submission');
    const list = await urls(this);
    if (!list.length) return;
    const endpoint = new URL('https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch');
    endpoint.searchParams.set('apikey', token);
    await post(endpoint, JSON.stringify({ siteUrl: cfg.bing_host || hexo.config.url, urlList: list }), 'application/json');
    this.log.info(`Bing accepted a batch of ${list.length} URLs`);
  });
}
