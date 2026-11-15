# blog.naaln.com

Hexo 8 站点。主题与自维护插件均使用发布到 npm 的版本，由 `package-lock.json` 锁定；文章继续保留在 `source/_posts` 子模块。

## 本地构建

推荐 Node.js 24（`.nvmrc` 与 CI 一致）；依赖的最低要求为 20.19。已验证 Node 24 和 26。

```sh
git submodule update --init source/_posts
npm ci
npm run clean
npm run build
npm run test:build-plugins
npm run test:site-output
npm run server
```

不要恢复 `themes/aether` 目录：Hexo 会优先选择本地主题而忽略 npm 版本。迁移时保留的 `themes/aether.source-backup` 仅供本机恢复，不参与构建或版本控制。个人内容和主题参数继续放在 `_config.aether.yml`，升级主题时不要用默认配置覆盖它。

## npm 依赖与更新

- `hexo-theme-aether`
- `@whyliam/hexo-algoliasearch`
- `@whyliam/hexo-deployer-upyun`
- `@whyliam/hexo-reference`
- `hexo-smart-seo`

Hexo 直接支持这些 scoped 插件，无需 GitHub 依赖或 npm alias。升级时修改明确的 npm 版本并提交锁文件，然后重新执行上面的构建和检查；不要在生产机器直接运行不受锁文件约束的更新。

## 索引与部署

凭据来自本机环境变量或 GitHub Actions secrets，不写入站点配置：

- `ALGOLIA_ADMIN_API_KEY`：私有索引写入凭据；前端 search-only key 与它不同。
- `UPYUN_OPERATOR`、`UPYUN_PASSWORD`：存储部署凭据。
- `BAIDU_TOKEN`、`BING_TOKEN`：搜索引擎 URL 提交。

```sh
npx hexo algolia --dry-run
# 确认计划后写入 Algolia；默认通过临时索引安全替换。
npx hexo algolia
# 更新 UPYUN 和提交 URL，属于真实远端操作。
npm run deploy
```

UPYUN dry run 请在 `_config.yml` 对应的 `deploy` 配置中临时设置 `dry_run: true`；该选项只作用于 UPYUN，其他 URL 提交 deployer 不受它控制。`force` 仅全量上传，不会清除未知远端文件。不要并行运行多个生产部署。

CI 只对 `master` 的推送和每日计划构建部署，使用串行生产队列防止 manifest 互相覆盖。主题从 npm 锁文件安装；定时构建可以获取文章子模块的新内容。

## 验证范围

- `test:build-plugins`：HTML/CSS/JS/图片优化、URL 提交和原生 UPYUN 签名行为的隔离测试。
- `test:site-output`：生成 CSS 是否存在且有效、每个 HTML 的唯一绝对 canonical、有效 JSON-LD、本地脚注样式与脚注 ID 唯一性。
- 这些测试不向真实 Algolia 或 UPYUN 写入内容；部署在检查通过后由 CI 执行。

依赖审计残留低危项来自 Hexo/hexo-util 的上游 `deepmerge` 链。不要使用 `npm audit fix --force` 把核心包降到不兼容旧版本。

## 图标

站点保留 W 标识，图标源来自 `source/images/favicon/logo.svg`。运行 `npm run build:icons` 可重新生成自适应明暗 SVG、16/32 PNG、Apple、192/512 应用图标、maskable 图标和多尺寸 ICO。`_config.aether.yml` 的 `favicon` 显式覆盖主题的通用图标；`site.webmanifest` 由主题按站点标题和根路径生成。它只提供安装元数据，不提供离线缓存。新增图标检查已包含在 `npm run test:site-output` 中。
