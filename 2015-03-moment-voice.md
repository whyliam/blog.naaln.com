---
layout: post
title: 关于朋友圈语音
date: 2015/03/05 02:51:00
categories:
- 技术
tags:
- 微信
---

今日微信 朋友圈语音 又爆红了朋友圈。

![](http://pics.naaln.com/blog/2019-01-14-061052.jpg-basicBlog)

起先我以为是官方的版本，因为如上图片所示，左上角只有返回按钮，右上角并没有分享按钮。

![](http://pics.naaln.com/blog/2019-01-14-061053.jpg-basicBlog)

并且他还有个超级超级山寨的 `公众号`！！！（帐号是：wxexpand）一不小心就以为是腾讯新的功能。

后来发现 他只是一个网页的连接，定向到一个 `http://voice.wx7plus.com/wx` 的网站。 该网站是一个名为 微裂变 的网站，具体不知道还有什么其他功能。并且採用的是一套名为 [微擎][1] 的开源系统。

如我们所知，微信的朋友圈的信息传递一般侷限于朋友之间。但是这种方式发起的 朋友圈语音 很容易造成信息的泄漏，如这条信息是朋友发，但是我可以分享给所有人。[链接][2]

ps.这个链接做了限制，必须在手机查看。可以使用手机浏览器查看。

----------

![](http://pics.naaln.com/blog/2019-01-14-61054.jpg-basicBlog) 

![](http://pics.naaln.com/blog/2019-01-14-061054.jpg-basicBlog)

类似的应用还有很多，但是这个是做的最逼真的一个。

不过这种要到新网页听语音的方式还是挺反人类的，腾讯怎么可能干这种事情。

----------

如果你还要继续往下看，简单的说一下原理。

它使用了微信公共帐号一些简单的 [微信SDK][3]

> 这里的SDK，简单的说就是微信已经写好的一些接口，开发者可以按照要求的格式直接使用，不是什麽黑科技，却为开发者带来了许多便利。

1. 录音&播放

   ![](http://pics.naaln.com/blog/2019-01-14-061056.jpg-basicBlog)

2. 隐藏右上角菜单

   ![](http://pics.naaln.com/blog/2019-01-14-61057.jpg-basicBlog)

3. 微信扫一扫

   ![](http://pics.naaln.com/blog/2019-01-14-061058.jpg-basicBlog)

4. 分享

   ![](http://pics.naaln.com/blog/2019-01-14-61059.jpg-basicBlog)

5. 自定义菜单

   ![](http://pics.naaln.com/blog/2019-01-14-061059.jpg-basicBlog)

有这几个SDK足以欺骗大部分人。

[1]: http://www.we7.cc/

[2]: http://voice.wx7plus.com/wx/timelineplay.html?serverId=MPbNr-j9UgqRtLDvs79Vdd-YcWDAuVkgcXjdWwpebkoTUM-aJOJymTp9r2vASGO0&date=2:5:14:42:4:1425537722679&recordtime=4&from=timeline&isappinstalled=0

[3]: http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
