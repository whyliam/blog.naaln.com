---
layout: post
title: 清理迅雷的各种垃圾功能
date: 2019/10/07 20:00:00
categories:
- 技术
tags:
-
---

Mac上的迅雷越来越臃肿，加入了很多广告或者是一些不必要的功能。所以，下面介绍的就是如何去除这一些内容。

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