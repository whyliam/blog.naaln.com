---
layout: post
title: Echoprint Get started（翻译）
date: 2013/06/17 12:04:00
categories:
- 技术
tags:
- echoprint
- 翻译
---

欢迎来到EchoprintEchoprint 是一个开源的音乐是识别系统，他允许任何人在他们自己的应用上构建音乐指纹识别系统。感谢[The Echo Nest](http://the.echonest.com/)的技术支持，以及[Musicbrainz](http://musicbrainz.org/)的合作。

→ [Home / FAQ](https://blog.naaln.com/2013/06/echoprint-home-faq-translations)

→ [Download from GitHub](http://github.com/echonest/)

→ [How it works](https://blog.naaln.com/2013/06/echoprint-how-it-works-translation)

→ [Get started](https://blog.naaln.com/2013/06/echoprint-get-started-translate)

→ [Contact / Support](http://echoprint.me/contact)

→ [Data access](https://blog.naaln.com/2013/06/echoprint-data-access-translation)

→ [Server](https://blog.naaln.com/2013/06/echoprint-server-translation)

→ [Codegen](https://blog.naaln.com/2013/06/echoprint-codegen-translation)

→ [Twitter - @echonest](http://twitter.com/echonest)

![](http://pics.naaln.com/blog/2019-05-14-123358.jpg-basicBlog)

# 开始

让我帮助你开始使用Echoprint！

-
我想要在我的电脑或者服务器上识别一首歌

-
我想要在一个音乐库中删除重复的歌曲

-
我想要在iOS 平台上识别一首歌曲

-
我想要运行Echoprint来识别自己的数据

如果你想要很好的使用Echoprint，加入Echoprint [Google](https://groups.google.com/forum/?fromgroups#!forum/echoprint) 小组是一个很好的方法。

## 我想要在我的电脑或者服务器上识别一首歌

很好！阅读 codegen [readme](https://github.com/whyliam/echoprint-codegen/blob/master/README.md)，你可以在GitHub中获取。在你自己的平台中安装（你必须把所有的文件编译，否着还有缺少文件的报告）。<br />你可以通过刚才的代码进行Echo Nest的音乐识别。

## 我想要在一个音乐库中删除重复的歌曲

第一步查阅 [server README](https://github.com/echonest/echoprint-server/blob/master/README.md) 。你需要作的是启动本地的服务器（不需要Solr或在Tokyo Tyrant ）或者启动整个堆栈，取决于你要去重复的数据的大小。第二步，用fp.ingest提取这个目录，接着用fp.query_fp() 对每个轨道进行查询。

## 我想要在iOS 平台上识别一首歌曲

最简单的方法是启动 [echoprint-ios-sample](https://github.com/echonest/echoprint-ios-sample)，但是这离一个产品app有很大的距离——这只是一个演示。但是它包含关于如何计算从麦克风输入或文件在用户的iPod音乐库中，以及如何查询歌曲/识别服务的信息。

## 我想要运行Echoprint来识别自己的数据

查阅[server README](https://github.com/echonest/echoprint-server/blob/master/README.md) ，[fastingest](https://github.com/echonest/echoprint-server/blob/master/util/fastingest.py) 阅读。获取[data](http://echoprint.me/data)。

原文: [http://echoprint.me/](http://echoprint.me/start)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-get-started-translate)
