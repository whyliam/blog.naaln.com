---
layout: post
title: 清理迅雷的各种垃圾功能
date: 2019/10/07 20:00:00
categories:
  - 技术
tags:
  - Thunder
  - Mac
  - 插件
  - 去广告
  - 权限
description: 
  通过修改Thunder应用程序的插件权限，去除所有插件执行权，仅保留下载历史、会员中心、偏好设置、字幕、登录、会员任务、内置浏览器等必要插件，以实现去除广告、反馈、主页、软件管家等垃圾功能的目的，建议保留宽带提速、离线空间、会员任务等辅助插件，并避免删除应用程序、详情、在线更新、搜索任务、设置等核心插件以免应用异常。
---

Mac 上的迅雷越来越臃肿，加入了很多广告或者是一些不必要的功能。所以，下面介绍的就是如何去除这一些内容。

之前有文章介绍过直接删除相关的文件，但是迅雷可能会加入相应的文件检查机制。

![](http://pics.naaln.com/blog/2019-10-07-143415.png-basicBlog)

这次的方法是直接禁止执行相关的垃圾程序。简单的说就是，去除所有功能的执行权限，只允许 登入，VIP，下载历史等非垃圾功能。

以下是代码：

```
chmod a-x /Applications/Thunder.app/Contents/PlugIns/*.xlplugin

chmod a+x /Applications/Thunder.app/Contents/PlugIns/downloadhistory.xlplugin
chmod a+x /Applications/Thunder.app/Contents/PlugIns/myvip.xlplugin
chmod a+x /Applications/Thunder.app/Contents/PlugIns/preferences.xlplugin
chmod a+x /Applications/Thunder.app/Contents/PlugIns/subtitle.xlplugin
chmod a+x /Applications/Thunder.app/Contents/PlugIns/userlogin.xlplugin
chmod a+x /Applications/Thunder.app/Contents/PlugIns/viptask.xlplugin
chmod a+x /Applications/Thunder.app/Contents/PlugIns/xlbrowser.xlplugin
```

![](http://pics.naaln.com/blog/2019-10-07-143241.jpg-basicBlog)

---

建议去除的插件包括：

```
advertising（广告）
featuredpage（主页）
feedback（反馈）
iOSThunder（手机迅雷）
myvip（会员中心）
softmanager（软件管家）
viprenew（会员开通）
viptips（会员提示）
xlbrowser（内置浏览器）
xlplayer（迅雷影音）
```

针对不同的需求，可以酌情处理以下插件：

```
需要使用迅雷快鸟进行宽带提速的，请保留 bbassistant 插件，不需要的可以删除；
需要使用迅雷离线空间的，请保留 lixianspace 插件，不需要的可以删除；
需要使用会员权限的，请保留 viptask 插件，不需要的可以删除；
需要登陆迅雷账户的，请保留 userlogin 插件，不需要的可以删除；
需要使用内置的字幕下载功能的，请保留 subtitle 插件，不需要的可以删除；
需要搭配浏览器使用的，请保留 browserhelper 插件，不需要的可以删除；
下载宝（或玩客云）用户请保留 xiazaibao 插件，不需要的可以删除。
```

以下插件请勿随意删除，否则可能对 app 正常工作产生较大影响：

```
applications 插件：提供除了下载之外的所有迅雷功能的主入口；
details 插件：提供任务详情页面；
liveupdate 插件：提供在线更新服务（后文将会用到）；
searchtask 插件：提供任务搜索功能；
settings 插件：提供偏好设置面板。
```
