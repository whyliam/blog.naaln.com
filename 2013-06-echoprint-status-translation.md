---
layout: post
title: Echoprint Status （翻译）
date: 2013/06/17 12:02:00
categories:
- 技术
tags:
- echoprint
- 翻译
---

欢迎来到 EchoprintEchoprint 是一个开源的音乐是识别系统，他允许任何人在他们自己的应用上构建音乐指纹识别系统。感谢 [The Echo Nest](http://the.echonest.com/) 的技术支持，以及 [Musicbrainz](http://musicbrainz.org/) 的合作。

→ [Home / FAQ](https://blog.naaln.com/2013/06/echoprint-home-faq-translations)

→ [Download from GitHub](http://github.com/echonest/)

→ [How it works](https://blog.naaln.com/2013/06/echoprint-how-it-works-translation)

→ [Get started](https://blog.naaln.com/2013/06/echoprint-get-started-translate)

→ [Contact / Support](http://echoprint.me/contact)

→ [Data access](https://blog.naaln.com/2013/06/echoprint-data-access-translation)

→ [Server](https://blog.naaln.com/2013/06/echoprint-server-translation)

→ [Codegen](https://blog.naaln.com/2013/06/echoprint-codegen-translation)

→ [Twitter - @echonest](http://twitter.com/echonest)

![](http://pics.naaln.com/blog/2019-05-14-123209.jpg-basicBlog)

## Echoprint 状态

我们将会定期更新这个页面

### 数据状态

目前，我们从我们数据转储的一个小的数据库中提供一部分数据，大约 15 万首歌曲的流行音乐。外部目录同步机制正在开发中。

### 质量保证/ 评估状态

请参考我们「bigeval」的指标，关于它是怎么工作的。

Echoprint 在文件匹配，去重复上几乎是一个完美的。我们还没有充分评估 OTA 现场测试超过几十个性能的。请在 Github 中提交问题，如果发现系统问题。所有进一步 QA 会留在服务器匹配阶段。

### Codegen 状态

Codegen 4.12 is「gold」—— 一个重大的版本，直到没有进一步的算法出炉。我们欢迎提交 CODEGEN 编译和速度优化的要求和问题。

### 服务状态 Echoprint—

服务主要在 Echo Nest 上启用和服务于查询歌曲的识别。我们将会改变 best_match_for_query 对于 OTA 的修复，但和这个服务已经可以使用了。

原文: [http://echoprint.me/](http://echoprint.me/post/6824417079/echoprint-status)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-status-translation)
