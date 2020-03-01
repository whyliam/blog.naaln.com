---
layout: post
title: Echoprint Codegen （翻译）
date: 2013/06/17 12:08:00
categories:
- 技术
tags:
- echoprint
- 翻译
---

欢迎来到EchoprintEchoprint 是一个开源的音乐是识别系统，他允许任何人在他们自己的应用上构建音乐指纹识别系统。感谢[The Echo Nest](http://the.echonest.com/)的技术支持，以及[Musicbrainz](http://musicbrainz.org/)的合作。

→ [Home / FAQ](http://blog.naaln.com/2013/06/echoprint-home-faq-translations)

→ [Download from GitHub](http://github.com/echonest/)

→ [How it works](http://blog.naaln.com/2013/06/echoprint-how-it-works-translation)

→ [Get started](http://blog.naaln.com/2013/06/echoprint-get-started-translate)

→ [Contact / Support](http://echoprint.me/contact)

→ [Data access](http://blog.naaln.com/2013/06/echoprint-data-access-translation)

→ [Server](http://blog.naaln.com/2013/06/echoprint-server-translation)

→ [Codegen](http://blog.naaln.com/2013/06/echoprint-codegen-translation)

→ [Twitter - @echonest](http://twitter.com/echonest)

![](http://pics.naaln.com/blog/2019-05-14-123113.jpg-basicBlog)

##Codegen

Echoprint  「编码」（一系列的哈希值和时间戳记），音频可以通过文件读取或现场麦克风输入。这是用C + +写的，可以运行在几乎所有的硬件上：服务器，台式机，手机，嵌入式。

Echoprint 的代码生成器是麻省理工学院的许可。

CODEGEN Echoprint 的操作模式有两种：

-
代码生成器库（libcodegen）是指被链接到，传递给它的PCM数据的缓冲，将输出的代码串的代码。

-
代码生成的二进制文件独立运行，接受文件名作为输入并运行在多线程工人模式。

访问GitHub的网页，最新的开发源代码或最新的稳定版本（4.12版）。

原文: [http://echoprint.me/](http://echoprint.me/codegen)

翻译: [Liam](http://blog.naaln.com/2013/06/echoprint-codegen-translation)
