---
layout: post
title: Echoprint  Server （翻译）
date: 2013/06/17 12:07:00
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

![](http://pics.naaln.com/blog/2019-05-14-123230.jpg-basicBlog)

## 服务 Echoprint

服务器可以通过Echoprint代码插入或者查询百万个音轨来匹配歌曲。它是基于[Apache Solr](http://lucene.apache.org/solr/)，并且也可以使用[Tokyo Tyrant](http://fallabs.com/tokyotyrant/)，一个快速的key-value存储模式。

Echoprint的服务器代码（Python的粘合和匹配的代码以及Solr的扩展）是根据Apache2.0许可。Solr 和Tokyo Tyrant 是单独授权的 (分别为Apache 和 LGPL 。) 该服务器还包括bigeval，用于评估指纹识别的准确性。 需要注意的是在正常使用中，你不需要引导Echoprint服务器。只要你的Echoprint服务器已经启动，就可以使用[Echo Nest ](http://developer.echonest.com/docs/v4/song.html#identify)歌曲/识别。随着时间的推移，别人也将可以使用服务器的镜像Echoprint数据。

Visit the echoprint-server GitHub page for the source and installation instructions.

访问 [echoprint-server](https://github.com/echonest/echoprint-server) GitHub page查看源码和安装介绍。

原文: [http://echoprint.me/server](http://echoprint.me/server)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-server-translation)
