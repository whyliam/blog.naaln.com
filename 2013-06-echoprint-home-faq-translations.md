---
layout: post
title: Echoprint Home / FAQ （翻译）
date: 2013/06/17 12:01:00
categories:
  - 技术
tags:
  - 音乐识别
  - 开源项目
  - 码生成
  - 数据库
  - 接口
description: "Echoprint 是开源音乐指纹识别系统，数据库由 EchoNest 提供，已更新至 4.12 编码器，新增百万歌曲列表；提供 GitHub 下载、服务器数据页面、Codegen 编译指南；FAQ 包括商业使用、OTA 麦克风识别、文件扫描、匹配性能、最佳匹配；系统可扩展至每秒 50 查询，适用于去重、版权检测等场景。"
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

![](http://pics.naaln.com/blog/2019-05-14-123222.jpg-basicBlog)

## 更新 Echoprint 的数据库托管在 The Echo Nest

我们已经更新 `The Echo Nest` 的数据库，更新了超过一百万首新的歌曲的 Echo Nest 识别的 API： [http://developer.echonest.com/docs/v4/song.html#identify](http://developer.echonest.com/docs/v4/song.html#identify)

确保你机器上 `Echoprint codegen` 的版本为「version=4.1x」（现在是 4.12）

我们提供了一个人们可以阅读的所有歌曲的列表，在这个数据库中你可以测试或评估： [http://echoprint-data.s3.amazonaws.com/list_of_songs.txt](http://echoprint-data.s3.amazonaws.com/list_of_songs.txt) [警告：大小为 109 MB]

列表中的每一行都有以下的格式：

Echo Nest 的歌曲 ID —- 歌手的名字 —- 歌曲的名字 Echo Nest 的歌曲 ID 指向 The Echo Nest API，在评估的时候十分的有用。

## 可读的音轨列表

我已经在 Echoprint 的数据库服务器中上传了一个轨道列表，你可以通过 [http://echoprint.me/data](http://echoprint.me/data) 检查。（就人们而言，这个相对与原始 JSON 格式更容易看懂，而且它只有 11MB.）

## Echoprint Codegen 4.12 的发布

最新发布的 Echoprint Codegen 是版本 4.12，现在已经可以下载了。

这是一个稳定的修改版，包括 bug 的修复以及文档的更新。没有改变 codegen 生成的音乐指纹代码。它允许被下载通过 GitHub 在「release-4.12」的分支 [https://github.com/whyliam/echoprint-codegen/tree/release-4.12](https://github.com/whyliam/echoprint-codegen/tree/release-4.12)

按照以下的命令行用 git 下载 Echoprint Codegen ：

```
$ git clone -b release-4.12 git@github.com:echonest/echoprint-codegen.git
```

这个方法克隆仓库，然后切换到 release-4.12 的分支。根据 README.md 中的介绍，这个软件将会被编译和安装。

另外，可能会简单一点，你可以下载独立的 zip 压缩包或者 tar 压缩包，从 [http://github.com/whyliam/echoprint-codegen/tags](http://github.com/whyliam/echoprint-codegen/tags) 这个标签是「v4.12」。这样下载软件不需要 git。

## 欢迎来到 Echoprint/问答

我们十分的兴奋向世界宣布 Echoprint。Echoprint 还在初期。我们准备向世界发布它的反馈和一般用途

## FAQ

### 它是什么？

Echoprint 是音乐指纹或音乐识别系统。它可以接受音乐信号，然后告诉你播放的是什么音乐。它依靠一个强大的音乐数据库，由音乐社区构成，并且将会有进一步的合作。在项目启动的时候，我们已经和 Musicbrainz 合作了。

### 它的对象是？

Echoprint 对于开发者或者音乐产业是一个十分合适的工具。目前在 App 商店中还没有 Echoprint 应用，即使我们确定在一个星期以内将会有。这是一个给开发者的音乐应用软件。如果你有做手机音乐软件的经验，你将会想要用它，或者你将坐拥一个巨大的音乐数据库。或者你想要删除重复的数据，作版权的探测，拆分你的用户目录。

### 准备开源？我可以用于商业化吗？

是的，可以。代码开发者是 MIT，服务器是 Apache 2.。在你的应用中当然没有限制来使用代码生成器或者服务器。在 Github 中检出，如果你使用我们的数据，你需要阅读 [数据许可](https://echoprint.me/data/)——但是它只是说了加入你收集到新的指纹时，你需要向社区贡献它。

### 它可以「OTA」吗？通过麦克风识别歌曲？

是的， Echoprint 的设计已经从硬件到 OTA，我们非正式的测试已经证明成功，取得了很多可人的成果。系统还需要多一点调音，然而，正在不断的改进中，以进一步提高精度和性能。

### 可以扫描文件，得到正确的元数据吗？

可以。从任何地方得到数据，最少需要 20 秒的音乐信号。

### 它可以使用了吗？它是成熟的吗？我怎么相信你们？

它已经可以使用了，查看我们的 [状态页](http://echoprint.me/post/6824417079/echoprint-status)，有一些重要的东西需要注意。一个主要的警告： OTA eval 还没完全的完成，但是它是有希望完成的。我们已经在严格的开发指标下运行音乐指纹。现在，我们的客户已经超过一年了。我们知道所有的问题和规模需求。Echo Nest 的商业化使人们的生活更加出色的。

### 它可以扩展吗？

可以， Echoprint 的闭源的兄弟 ENMFP，已经被广泛的使用 2 年多了，并且已经拥有 6 千万个轨道在一个服务器上。Echoprint 使用相同的背景。取决于你的架构，一个窗口每秒钟可以匹配 50 个查询。开发者构建的服务器十分的快，你可以扫描足够多的音乐在一次查询中所花的时间少于 10 分之 1 秒。

### 我现在应该干什么？

加入我们的讨论组。从 GitHub 上下载 codegen 或者服务，并安装它。

### MusicBrainz 的这是怎么回事？

Musicbrainz 将会整合 Echoprint 到他们的世界音轨中。他们已经测试了系统，并且知道 Echoprint 的代码。

### 这是太棒了/我想帮助你们

好！检出代码和文件，上传需求和问题。在 Echo Nest 获取工作。（我们雇佣极客。）

## Echoprint 状态

我们将会定期更新这个页面

### 数据状态

目前，我们从我们数据转储的一个小的数据库中提供一部分数据，大约 15 万首歌曲的流行音乐。外部目录同步机制正在开发中。

### 质量保证/ 评估状态

请参考我们「bigeval」的指标，关于它是怎么工作的。Echoprint 在文件匹配，去重复上几乎是一个完美的。我们还没有充分评估 OTA 现场测试超过几十个性能的。请在 Github 中提交问题，如果发现系统问题。所有进一步 QA 会留在服务器匹配阶段。

### Codegen 状态

Codegen 4.12 is「gold」—— 一个重大的版本，直到没有进一步的算法出炉。我们欢迎提交 CODEGEN 编译和速度优化的要求和问题。

### 服务状态

Echoprint— 服务主要在 Echo Nest 上启用和服务于查询歌曲的识别。我们将会改变 best_match_for_query 对于 OTA 的修复，但和这个服务已经可以使用了。

9:55 pm | February 7 2012 | 更新

原文: [http://echoprint.me/](http://echoprint.me/)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-home-faq-translations/)
