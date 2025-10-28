---
layout: post
title: Echoprint  Server （翻译）
date: 2013/06/17 12:07:00
categories:
- 技术
tags:
- echoprint
- 翻译
- 服务器
- Solr
- Tokyo Tyrant
- 音乐识别
- 索引
- 存储
- Apache2.0
- bigeval
description: Echoprint服务器组件翻译介绍，详解音乐识别系统的核心架构。服务器基于Apache Solr搜索引擎构建，集成Tokyo Tyrant快速键值存储，实现百万级音轨的快速匹配。技术架构：1）核心组件——基于Solr的Python粘合代码和匹配逻辑，以及Solr扩展；2）数据索引——使用倒排索引存储每个音轨的指纹代码，实现快速查找；3）评估工具——集成bigeval软件评估指纹识别准确性；4）许可协议——Echoprint服务器代码采用Apache2.0许可（Solr和Tokyo Tyrant分别采用Apache和LGPL许可）。文档说明正常使用中无需自建Echoprint服务器，可直接使用Echo Nest的识别API，但提供服务器源码供有需要的开发者自行部署和扩展。体现开源系统的灵活性和可扩展性。
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

![](http://pics.naaln.com/blog/2019-05-14-123230.jpg-basicBlog)

## 服务 Echoprint

服务器可以通过 Echoprint 代码插入或者查询百万个音轨来匹配歌曲。它是基于 [Apache Solr](http://lucene.apache.org/solr/)，并且也可以使用 [Tokyo Tyrant](http://fallabs.com/tokyotyrant/)，一个快速的 key-value 存储模式。

Echoprint 的服务器代码（Python 的粘合和匹配的代码以及 Solr 的扩展）是根据 Apache2.0 许可。Solr 和 Tokyo Tyrant 是单独授权的 (分别为 Apache 和 LGPL。) 该服务器还包括 bigeval，用于评估指纹识别的准确性。需要注意的是在正常使用中，你不需要引导 Echoprint 服务器。只要你的 Echoprint 服务器已经启动，就可以使用 [Echo Nest](http://developer.echonest.com/docs/v4/song.html#identify) 歌曲/识别。随着时间的推移，别人也将可以使用服务器的镜像 Echoprint 数据。

Visit the echoprint-server GitHub page for the source and installation instructions.

访问 [echoprint-server](https://github.com/echonest/echoprint-server) GitHub page 查看源码和安装介绍。

原文: [http://echoprint.me/server](http://echoprint.me/server)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-server-translation/)
