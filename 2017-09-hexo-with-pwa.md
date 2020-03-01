---
title: 让PWA支持HEXO
categories:
  - 技术
date: 2017-09-11 20:34:56
tags:
  - hexo
---

先说一下说明是PWA，

> PWA(Progressive Web Apps) 是 Google 提出的用前沿的 Web 技术为网页提供 App 般使用体验的一系列方案。

> PWA 本质上是 Web App，借助一些新技术也具备了 Native App 的一些特性，兼具 Web App 和 Native App 的优点。

> PWA 的主要特点包括下面三点：

> * 可靠 - 即使在不稳定的网络环境下，也能瞬间加载并展现
> * 体验 - 快速响应，并且有平滑的动画响应用户的操作
> * 粘性 - 像设备上的原生应用，具有沉浸式的用户体验，用户可以添加到桌面

![](http://pics.naaln.com/blog/2019-01-14-032001.gif-basicBlog)

简单的说就是让网页像APP一样使用，听着是不是很像微信小程序。其实小程序就是PWA的一个变种。传统的PWA需要依托 Chrome 来使用，而小程序则依托于微信。

那么如何快速使 blog 支持 PWA 呢？

## 支持 HTTPS

PWA依赖 HTTPS ，增加离线化能力。

首先需要使网站支持 Https，就像我的网站，有 secure 标志。

![](http://pics.naaln.com/blog/2019-01-14-032013.jpg-basicBlog)

我是部署在 Coding 的，直接支持 Https，具体使用我就不展开说了。

## 支持 PWA

首先在自己博客的根目录，安装 [hexo-offline](https://www.npmjs.com/package/hexo-offline)

> hexo-offline is intended to provide offline experience for hexo built static website. It uses ServiceWorker under the hood. Simply install this plugin to your website and it should be offline ready by caching most of static assets.
> hexo-offline 是一个 hexo 用来让博客拥有 Service Worker 功能的插件，能够默认的把站点中 public 内的所有静态资源包括 html 文件缓存起来，达到离线可访问的效果

```
npm i hexo-offline --save
```

安装插件后，直接配置 _config.yml 文件如下就可以了：

```
# offline config passed to sw-precache.
service_worker:
  maximumFileSizeToCacheInBytes: 5242880
  staticFileGlobs:
  - public/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}
  stripPrefix: public
  verbose: true
```

以上配置是缓存 public 文件夹下面的指定静态资源和静态 html 页面的。

如果除了自身博客项目的静态资源需要缓存以外，还有第三方 CDN 静态资源的缓存需求的话，例如：

```
- https://cdn.some.com/some/path/some-script.js
- http://cdn.some-else.org/some/path/deeply/some-style.css
```

这种需求也可以通过配置 _config.yml 完成，在 servcie_worker 的配置后面补全下面格式的配置即可：

```
service_worker:
  runtimeCaching:
    - urlPattern: /*
      handler: cacheFirst
      options:
        origin: cdn.some.com
    - urlPattern: /*
      handler: cacheFirst
      options:
        origin: cdn.some-else.org
```

生成 `manifest.json`文件，你需要将创建这个文件到source目录下。比如我的配置

```
{
  "name": "Why·Liam·Blog",
  "short_name": "Why·Liam",
  "theme_color": "#2196f3",
  "background_color": "#2196f3",
  "display": "fullscreen",
  "orientation": "portrait",
  "Scope": "/",
  "start_url": "/",
  "icons": [
    {
      "src": "images/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    }
  ],
  "splash_pages": null
}
```

相关的icon图片放在博客的`source/images/icons`目录下，记得要和`manifest.json`中的icon路径匹配。

当然可以快速的配置，直接无脑生成[App Manifest Generator](https://app-manifest.firebaseapp.com/)

还有重要的一个环节，引入`manifest.json`

```
<link rel="manifest" href="/manifest.json">
```

比如我使用了 [hexo-theme-next](https://github.com/iissnan/hexo-theme-next)的主题，在`layout/_custom/header.swig` 中引用了`manifest.json`。

接下开就看效果吧!