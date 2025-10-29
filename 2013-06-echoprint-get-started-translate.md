---
layout: post
title: Echoprint Get started（翻译）
date: 2013/06/17 12:04:00
categories:
  - 技术
tags:
  - 音乐识别
  - 重复删除
  - iOS
  - 开源
  - 系统
description: "Echoprint 开源音乐识别系统用于在应用中构建指纹识别。支持个人电脑或服务器歌曲识别、音乐库重复删除、iOS 平台歌曲识别、自有数据识别。提供 GitHub 下载、服务器说明、iOS 示例、数据访问等资源，建议加入 Echoprint 谷歌小组。"
---

欢迎来到 EchoprintEchoprint 是一个开源的音乐是识别系统，他允许任何人在他们自己的应用上构建音乐指纹识别系统。感谢 [The Echo Nest](http://the.echonest.com/) 的技术支持，以及 [Musicbrainz](http://musicbrainz.org/) 的合作。

→ [Home / FAQ](https://blog.naaln.com/2013/06/echoprint-home-faq-translations/)
→ [Download from GitHub](http://github.com/echonest/)
→ [How it works](https://blog.naaln.com/2013/06/echoprint-how-it-works-translation/)
→ [Get started](https://blog.naaln.com/2013/06/echoprint-get-started-translate/)
→ [Contact / Support](http://echoprint.me/contact)
→ [Data access](https://blog.naaln.com/2013/06/echoprint-data-access-translation/)
→ [Server](https://blog.naaln.com/2013/06/echoprint-server-translation/)
→ [Codegen](https://blog.naaln.com/2013/06/echoprint-codegen-translation/)
→ [Twitter - @echonest](http://twitter.com/echonest)

![](http://pics.naaln.com/blog/2019-05-14-123358.jpg-basicBlog)

# 开始

让我帮助你开始使用 Echoprint！
我想要在我的电脑或者服务器上识别一首歌
我想要在一个音乐库中删除重复的歌曲
我想要在 iOS 平台上识别一首歌曲
我想要运行 Echoprint 来识别自己的数据

如果你想要很好的使用 Echoprint，加入 Echoprint [Google](https://groups.google.com/forum/?fromgroups#!forum/echoprint) 小组是一个很好的方法。

## 我想要在我的电脑或者服务器上识别一首歌

很好！阅读 codegen [readme](https://github.com/whyliam/echoprint-codegen/blob/master/README.md)，你可以在 GitHub 中获取。在你自己的平台中安装（你必须把所有的文件编译，否着还有缺少文件的报告）。<br />你可以通过刚才的代码进行 Echo Nest 的音乐识别。

## 我想要在一个音乐库中删除重复的歌曲

第一步查阅 [server README](https://github.com/echonest/echoprint-server/blob/master/README.md)。你需要作的是启动本地的服务器（不需要 Solr 或在 Tokyo Tyrant ）或者启动整个堆栈，取决于你要去重复的数据的大小。第二步，用 fp.ingest 提取这个目录，接着用 fp.query_fp() 对每个轨道进行查询。

## 我想要在 iOS 平台上识别一首歌曲

最简单的方法是启动 [echoprint-ios-sample](https://github.com/echonest/echoprint-ios-sample)，但是这离一个产品 app 有很大的距离——这只是一个演示。但是它包含关于如何计算从麦克风输入或文件在用户的 iPod 音乐库中，以及如何查询歌曲/识别服务的信息。

## 我想要运行 Echoprint 来识别自己的数据

查阅 [server README](https://github.com/echonest/echoprint-server/blob/master/README.md) ，[fastingest](https://github.com/echonest/echoprint-server/blob/master/util/fastingest.py) 阅读。获取 [data](http://echoprint.me/data)。

原文: [http://echoprint.me/](http://echoprint.me/start)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-get-started-translate/)
