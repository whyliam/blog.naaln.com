---
layout: post
title: Surge 3 试用
date: 2019/06/07 20:00:00
categories:
- 技术
tags:
---

对于出国的方案，之前用的一直都是 `ClashX`，在正常的使用情况下完全够用。但是现在遇到了一个问题，想修改系统的网络请求。

由于最近人人影视更新了，之前的去广告方案已经失效 [去除人人影视广告](https://blog.naaln.com/2018/06/crack-yyets/)。经过一轮分析，发现人人影视的广告信息和影片的信息在一个接口里面，很难通过屏蔽一个接口的方式来屏蔽广告。于是我想要修改一个接口里面的数据，来劫持广告。

具体过程就不描述了，这次的重点是 `Surge 3`。

我一直是 `Surge 3` 的粉丝，但是他的定价已经吓退了我好几次。其实这篇文章就是为 Surge 准备的。[Libfaketime 改变软件的运行时间](https://blog.naaln.com/2019/04/change-software-time/)。但是这个方法只适用于 Surge-2.5.1-528.zip 之前的版本，而现在 Surge 已经到 3 了。

这次修改的原理其实是一样的。

1. 下载官方的试用版本，放到任意文件夹中
2. 启动，选择试用，并进去主界面，然后退出
3. 修改系统的时间，并运行 Surge。见 [surge.sh](https://gist.github.com/whyliam/a27bae053207dcb4c46bb5c9cf8ef274)

### 附加内容

cat73 尝试并找到了其试用期保存的文件，但内容中有签名，于是就放弃尝试修改了

这个文件在: `~/Library/Application Support/com.nssurge.surge-mac`

查看方式为: `xattr -l ~/Library/Application\ Support/com.nssurge.surge-mac`

会看到类似这样的信息：

```
com.nssurge.surge-mac.nsa.3: {"policy":"eyJkZXZpY2VJRCI6ImMxYyoqKioqKioqKioqKioqKioqKioqKioqKioqMDc2IiwidHlwZSI6InRyaWFsIiwiZXhwaXJlc09uRGF0ZSI6MTU2MDA4NjQ0MiwiaXNzdWVEYXRlIjoxNTU4ODg4ODg4fQ==","sign":"srtc*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************TA=="}
```

`Base64` 解码 `policy` 后内容如下：

```
{"deviceID":"c1c**************************076","type":"trial","expiresOnDate":1560086442,"issueDate":1558888888}
```

有兴趣也有能力的大佬可以尝试下破解

思路大概有下面几种：

1. 替换证书，然后自己签一个几十年后的过期时间
2. 让软件检测到错误的机器码，并清除这个目录的附加信息，这样软件会重新去服务器查询过期时间，且可以重新试用 14 天
3. 让软件检测到错误 (过期时间前) 的时间，从而避免修改系统时间

参考：

1. [Libfaketime 改变软件的运行时间](https://blog.naaln.com/2019/04/change-software-time/)
2. [Surge Mac 3 无限试用方案](https://blog.cat73.org/20190528/2019052801.surge3-crack/)
