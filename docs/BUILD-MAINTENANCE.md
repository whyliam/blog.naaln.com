# Blog build maintenance

The theme revision and its configuration are committed together. The deployment workflow runs the build-plugin checks before generating and deploying the static site.

## Dependencies

The old all-in-one minifier, old Baidu sitemap generator, autonofollow plugin and search-submission plugin were replaced. `scripts/minify.js` uses current HTML/CSS/JS optimizers and Sharp/SVGO, retaining the existing `all_minifier` switches. Images are replaced only when the result is smaller. `hexo-filter-nofollow` retains the existing nofollow configuration. The current sitemap generator emits both `sitemap.xml` and `baidusitemap.xml`.

`scripts/search-submit.js` keeps the latest-updated URL list and the enabled Baidu/Bing deployers, with bounded requests and redacted errors. The unused Google submission configuration was removed (it was disabled). Bing uses its documented batch API. Baidu's existing documented API is HTTP; its HTTPS hostname currently has a certificate mismatch. No TLS verification is disabled. Tokens continue to come from GitHub Actions secrets.

A scoped override pins UPYUN's Axios dependency to the patched 0.34 series, retaining its 0.x adapter API. The integration check exercises actual signed upload, download, directory creation and deletion against a local HTTP fixture using test credentials.

Run:

```sh
npm ci
npm run test:build-plugins
npm audit --omit=dev --registry=https://registry.npmjs.org
```

On 2026-11-11 the runtime audit reported 0 critical, 0 high, 0 moderate and 10 low entries. The remaining entries are the unpatched `deepmerge` dependency and the Hexo packages that inherit that low-severity finding. Do not use `npm audit fix --force` to downgrade core packages merely to alter audit totals.

## Browser caching

For the UPYUN `naaln-blog` service, browser cache rules must cover directory URLs as well as literal `.html` files. The intended rules are `*/`, `*.html` and `*.json`, each five minutes. A rule for `*.html` alone misses `/`, `/archives/` and `/visuals/`. Verify the actual production Cache-Control response after changing rules and after deployment. Already cached responses in a visitor's browser may still require a forced reload during migration.

Versioned asset URLs use the `v` parameter. If query-parameter caching is enabled in the CDN console, preserve this version parameter so a new release can request fresh CSS/JS.
