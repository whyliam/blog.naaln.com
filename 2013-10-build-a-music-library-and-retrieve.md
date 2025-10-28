---
layout: post
title: 构建音乐库并进行检索
date: 2013/10/04 21:00:00
categories:
- 技术
tags:
- echoprint
- 音乐检索
- 音频识别
- 数据库
description: 使用Echoprint构建本地音乐库并进行歌曲检索的实战教程。介绍如何将音乐文件放置在codegen目录，使用echoprint-server进行库构建，配置simplejson依赖。提供完整的Python代码示例，展示如何读取音频文件、生成指纹、存储到数据库。讲解如何将构建好的音乐库保存到disk.pki文件中，并进行歌曲匹配测试。实际测试使用林志炫的凤凰花开的路口片段进行识别验证。包含库构建和检索两个主要阶段的完整流程，为音乐识别系统开发提供实用参考。
---

这里介绍使用 echoprint 的库构建方法在本地建立一个音乐库的过程。

首先将要建库的音乐放在 codegen.exe 目录的 music 文件夹下，文件名暂时只能用英文，中文会悲剧，后面再想办法。

在这里 [https://github.com/echonest](https://github.com/echonest) 下载 echoprint-server，解压，将 API 文件夹的文件拷贝到 C:\Python27\Lib\site-packages 下。

在 python 的网站上下载 simplejson 并安装，网站：

[https://pypi.python.org/pypi/simplejson/1.3](https://pypi.python.org/pypi/simplejson/1.3)

下面是参考例子的一个 demo，不上传文件，上传截图吧

![](http://pics.naaln.com/blog/2019-05-14-123353.jpg-basicBlog)

![](http://pics.naaln.com/blog/2019-05-14-123356.jpg-basicBlog)

最下面注释掉的内容是在库中检索的时候用的，在这里先是构建库。

运行后建立了库，所有的信息都保存在 disk.pkl 文件中，在这里只有十首歌建了个库，disk.pkl 文件为 3.45M

接下来将最后注释掉的语句恢复，将 build_database("music") 注释掉，注意这里检索的文件名是 test.3gpp，如果你想识别的片段音乐是 mp3 格式，将其改为 test.mp3，将要识别的音频也该为此名，然后运行看看。这里截取了林志炫的凤凰花开的路口的第 60 秒到第 90 秒片段，识别得到正确的结果。

![](http://pics.naaln.com/blog/2019-05-14-123357.jpg-basicBlog)

如果识别的时库里没有的歌，会返回 score 比较高的结果，还有其他接口是没有匹配时返回无匹配的。先记录这么多吧。

via: [http://blog.sina.com.cn/s/blog_7985987f010197ol.html](http://blog.sina.com.cn/s/blog_7985987f010197ol.html)
