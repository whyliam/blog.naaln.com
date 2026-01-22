---
layout: post
title: 移动前端不得不了解的html5 head 头标签
date: 2015/09/24 13:21:00
categories:
  - 技术
tags:
  - HTML
  - meta
  - 移动端
  - SEO
  - iOS
description: 该文系统阐述了HTML头部关键标签与meta信息，包括DOCTYPE、字符编码、lang属性、IE/Chrome兼容性、360极速核、百度禁止转码、SEO优化、viewport配置、iOS设备标识、图标和启动画面、Android主题色、Windows磁贴、RSS订阅、favicon以及关闭Google翻译插件等功能，并提供了完整的移动端头部示例，适用于前端开发者快速规范网页头部配置。
---

本文主要内容来自一丝的常用的 [HTML 头部标签](https://github.com/yisibl/blog/issues/1) 和百度 FEX 的 [HTML head 头标签](http://fex.baidu.com/blog/2014/10/html-head-tags/)。

移动端的工作已经越来越成为前端工作的重要内容，除了平常的项目开发，HTML 头部标签功能，特别是 meta 标签显得非常重要。

### DOCTYPE

DOCTYPE(Document Type)，该声明位于文档中最前面的位置，处于 `html` 标签之前，此标签告知浏览器文档使用哪种 HTML 或者 XHTML 规范。

使用 HTML5 doctype，不区分大小写：

```html
<!DOCTYPE html>
```



### Charset

声明文档使用的字符编码：

```html
<meta charset="utf-8">
```

html5 之前网页中会这样写：

```html
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
```

这两个是等效的，具体可移步阅读：[`<meta charset='utf-8'>` vs `<meta http-equiv='Content-Type'>`](http://stackoverflow.com/questions/4696499/meta-charset-utf-8-vs-meta-http-equiv-content-type)，所以建议使用较短的，易于记忆。

### Lang 属性

更加标准的 lang 属性写法：[http://zhi.hu/XyIa](http://zhi.hu/XyIa)

**简体中文**

```html
<html lang="zh-cmn-Hans">
```

**繁体中文**

```html
<html lang="zh-cmn-Hant">
```

很少情况才需要加地区代码，通常是为了强调不同地区汉语使用差异，例如：

```html
<p lang="zh-cmn-Hans">
<p lang="zh-cmn-Hans">
<strong lang="zh-cmn-Hans-CN">菠萝</strong>和<strong lang="zh-cmn-Hant-TW">鳳梨</strong>其实是同一种水果。只是大陆和台湾称谓不同，且新加坡、马来西亚一带的称谓也是不同的，称之为<strong lang="zh-cmn-Hans-SG">黄梨</strong>。
</p>
```

为什么 `lang="zh-cmn-Hans"` 而不是我们通常写的 `lang="zh-CN"` 呢，请移步阅读：[页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"](http://zhi.hu/XyIa)。

### 优先使用 IE 最新版本和 Chrome

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

### 360 使用 Google Chrome Frame

```html
<meta name="renderer" content="webkit">
```

360 浏览器就会在读取到这个标签后，立即切换对应的极速核。另外为了保险起见再加入：

```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
```

这样写可以达到的效果是如果安装了 Google Chrome Frame，则使用 GCF 来渲染页面，如果没有安装 GCF，则使用最高版本的 IE 内核进行渲染。

相关链接：[浏览器内核控制 Meta 标签说明文档](http://se.360.cn/v6/help/meta.html)

### 百度禁止转码

通过百度手机打开网页时，百度可能会对你的网页进行转码，脱下你的衣服，往你的身上贴狗皮膏药的广告，为此可在 head 内添加：

```html
<meta http-equiv="Cache-Control" content="no-siteapp" />
```

相关链接：[SiteApp 转码声明](http://m.baidu.com/pub/help.php?pn=22&ssid=0&from=844b&bd_page_type=1)

### SEO 优化部分

**页面标题 `<title>` 标签（head 头部必须）**

```html
<title>your title</title>
```

**页面关键词 keywords**

```html
<meta name="keywords" content="your keywords">
```

**页面描述内容 description**

```html
<meta name="description" content="your description">
```

**定义网页作者 author**

```html
<meta name="author" content="author,email address">
```

**定义网页搜索引擎索引方式**

robotterms 是一组使用英文逗号「,」分割的值，通常有如下几种取值：none，noindex，nofollow，all，index 和 follow。

```html
<meta name="robots" content="index,follow">
```

相关链接：[WEB1038 – 标记包含无效的值](http://msdn.microsoft.com/zh-cn/library/ff724037(v=expression.40).aspx)

相关链接：[WEB1038 – 标记包含无效的值](http://msdn.microsoft.com/zh-cn/library/ff724037(v=expression.40).aspx)

### 为移动设备添加 Viewport

`viewport` 可以让布局在移动浏览器上显示的更好。通常会写：

```html
<meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
```

> **注意**：`width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边。参考：[http://bigc.at/ios-webapp-viewport-meta.orz](http://bigc.at/ios-webapp-viewport-meta.orz)

content 参数：

- width viewport 宽度 (数值/device-width)
- height viewport 高度 (数值/device-height)
- initial-scale 初始缩放比例
- maximum-scale 最大缩放比例
- minimum-scale 最小缩放比例
- user-scalable 是否允许用户缩放 (yes/no)
- minimal-ui iOS 7.1 beta 2 中新增属性（注意：iOS8 中已经删除），可以在页面加载时最小化上下状态栏。

```html
<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
```

而如果你的网站不是响应式的，请不要使用 initial-scale 或者禁用缩放：

```html
<meta name="viewport" content="width=device-width,user-scalable=yes">
```

相关链接：[非响应式设计的 viewport](http://www.qianduan.net/non-responsive-design-viewport.html)

适配 iPhone 6 和 iPhone 6plus：

```html
<meta name="viewport" content="width=375">
<meta name="viewport" content="width=414">
```

大部分 4.7~5 寸的安卓设备的 viewport 宽设为 360px，iPhone 6 上却是 375px，大部分 5.5 寸安卓机器（比如说三星 Note）的 viewport 宽为 400，iPhone 6 plus 上是 414px。

### Ios 设备

添加到主屏后的标题（iOS 6 新增）：

```html
<meta name="apple-mobile-web-app-title" content="标题">
```

是否启用 WebApp 全屏模式：

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
```

设置状态栏的背景颜色：

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

只有在「apple-mobile-web-app-capable」content=」yes」时生效。

content 参数：

- default 默认值。
- black 状态栏背景是黑色。
- black-translucent 状态栏背景是黑色半透明。如果设置为 default 或 black,网页内容从状态栏底部开始。如果设置为 black-translucent,网页内容充满整个屏幕，顶部会被状态栏遮挡。

禁止数字识自动别为电话号码：

```html
<meta name="format-detection" content="telephone=no" />
```

### iOS 图标

rel 参数：apple-touch-icon 图片自动处理成圆角和高光等效果；apple-touch-icon-precomposed 禁止系统自动添加效果，直接显示设计原图。

**iPhone 和 iTouch（57×57 像素，必须有）**

```html
<link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png" />
```

**iPad（72×72 像素，可以没有，但推荐有）**

```html
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/apple-touch-icon-72x72-precomposed.png" />
```

**Retina iPhone 和 Retina iTouch（114×114 像素，可以没有，但推荐有）**

```html
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png" />
```

**Retina iPad（144×144 像素，可以没有，但推荐有）**

```html
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png" />
```

IOS 图标大小在 iPhone 6 plus 上是 180×180，iPhone 6 是 120×120。适配 iPhone 6 plus：

```html
<link rel="apple-touch-icon-precomposed" sizes="180x180" href="retinahd_icon.png">
```

### iOS 启动画面

官方文档：[https://developer.apple.com/library/ios/qa/qa1686/_index.html](https://developer.apple.com/library/ios/qa/qa1686/_index.html) 参考文章：[http://wxd.ctrip.com/blog/2013/09/ios7-hig-24/](http://wxd.ctrip.com/blog/2013/09/ios7-hig-24/)

iPad 的启动画面是不包括状态栏区域的。

**iPad 竖屏 768 x 1004（标准分辨率）**

```html
<link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png" />
```

**iPad 竖屏 1536×2008（Retina）**

```html
<link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png" />
```

**iPad 横屏 1024×748（标准分辨率）**

```html
<link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png" />
```

**iPad 横屏 2048×1496（Retina）**

```html
<link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png" />
```

iPhone 和 iPod touch 的启动画面是包含状态栏区域的。

**iPhone/iPod Touch 竖屏 320×480 (标准分辨率)**

```html
<link rel="apple-touch-startup-image" href="/splash-screen-320x480.png" />
```

**iPhone/iPod Touch 竖屏 640×960 (Retina)**

```html
<link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png" />
```

**iPhone 5/iPod Touch 5 竖屏 640×1136 (Retina)**

```html
<link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png" />
```

添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）：

```html
<meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
```

iPhone 6 对应的图片大小是 750×1294，iPhone 6 Plus 对应的是 1242×2148。

```html
<link rel="apple-touch-startup-image" href="launch6.png" media="(device-width: 375px)">
<link rel="apple-touch-startup-image" href="launch6plus.png" media="(device-width: 414px)">
```

### Android

Android Lollipop 中的 Chrome 39 增加 theme-color meta 标签，用来控制选项卡颜色。

[http://updates.html5rocks.com/2014/11/Support-for-theme-color-in-Chrome-39-for-Android](http://updates.html5rocks.com/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)

![theme-color](http://pics.naaln.com/blog/2019-01-14-061011.jpg-basicBlog)

```html
<meta name="theme-color" content="#db5945">
```

### Windows 8

### Windows 8 磁贴颜色

```html
<meta name="msapplication-TileImage" content="icon.png"/> <!-- Windows 8 磁贴图标 -->
```

Windows 8 磁贴图标

```html
<meta name="msapplication-TileImage" content="icon.png"/> <!-- Windows 8 磁贴图标 -->
```

### Rss 订阅

```html
<link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml" />
```

### Favicon Icon

```html
<link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
```

比较详细的 favicon 介绍可参考 [https://github.com/audreyr/favicon-cheat-sheet](https://github.com/audreyr/favicon-cheat-sheet)

### 关闭 Chrome 浏览器下翻译插件

有些时候感觉 chrome 浏览器下翻译插件很烦人，可以通过下面的代码禁用它。

```html
<meta name="google" value="notranslate" />
```

![Chrome 翻译禁用](http://pics.naaln.com/blog/2019-01-14-061012.jpg-basicBlog)

### 移动端的头部标签和 Meta

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="description" content="不超过150个字符"/>
  <meta name="keywords" content=""/>
  <meta name="author" content="name, email@gmail.com"/>
  <meta name="robots" content="index,follow"/>
  <meta name="viewport" content="initial-scale=1, maximum-scale=3, minimum-scale=1, user-scalable=no">
  <meta name="apple-mobile-web-app-title" content="标题">
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-itunes-app" content="app-id=myAppStoreID, affiliate-data=myAffiliateData, app-argument=myURL">
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="format-detection" content="telphone=no, email=no"/>
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="HandheldFriendly" content="true">
  <meta name="MobileOptimized" content="320">
  <meta name="screen-orientation" content="portrait">
  <meta name="x5-orientation" content="portrait">
  <meta name="full-screen" content="yes">
  <meta name="x5-fullscreen" content="true">
  <meta name="browsermode" content="application">
  <meta name="x5-page-mode" content="app">
  <meta name="msapplication-tap-highlight" content="no">
  <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-57x57-precomposed.png"/>
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/apple-touch-icon-114x114-precomposed.png"/>
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/apple-touch-icon-144x144-precomposed.png"/>
  <link rel="apple-touch-startup-image" sizes="768x1004" href="/splash-screen-768x1004.png"/>
  <link rel="apple-touch-startup-image" sizes="1536x2008" href="/splash-screen-1536x2008.png"/>
  <link rel="apple-touch-startup-image" sizes="1024x748" href="/Default-Portrait-1024x748.png"/>
  <link rel="apple-touch-startup-image" sizes="2048x1496" href="/splash-screen-2048x1496.png"/>
  <link rel="apple-touch-startup-image" href="/splash-screen-320x480.png"/>
  <link rel="apple-touch-startup-image" sizes="640x960" href="/splash-screen-640x960.png"/>
  <link rel="apple-touch-startup-image" sizes="640x1136" href="/splash-screen-640x1136.png"/>
  <meta name="msapplication-TileColor" content="#000"/>
  <meta name="msapplication-TileImage" content="icon.png"/>
  <link rel="alternate" type="application/rss+xml" title="RSS" href="/rss.xml"/>
  <link rel="shortcut icon" type="image/ico" href="/favicon.ico"/>
  <title>标题</title>
</head>
```

更多的 meta 标签参考

- [COMPLETE LIST OF HTML META TAGS](http://code.lancepollard.com/complete-list-of-html-meta-tags/)
- [18 Meta Tags Every Webpage Should Have in 2013](http://www.iacquire.com/blog/18-meta-tags-every-webpage-should-have-in-2013)

参考文章：

- [常用的 HTML 头部标签](https://github.com/yisibl/blog/issues/1)
- [html5_header](https://gist.github.com/paddingme/6182708733917ae36331)
- [amazeui css](http://amazeui.org/css/)
- [DOCTYPE](http://www.douban.com/note/170560091/)
- [WEB 工程师和设计师必学的 10 个 IOS 8 新鲜改变](http://www.uisdc.com/ios8-ten-new-feature)
