---
layout: post
title: Android 微信的 UI 永远和 iOS 一样
date: 2015/04/21 21:57:00
categories:
- 产品
tags:
- Android
---

首先我们要承认微信安卓版并没有自己的一套 UI。腾讯会优先在 iOS 上先做新功能，做的过程中会有很多的 UI 上的反复修改，很耗时。而 android 版本只需要移植，使得跟进速度非常快。

> 微信的头几个 android 版本，是单独做了一套符合 android 规范的 UI 的。但是几个版本下来，很难让我们自己觉得满意。android 的 UI 规范，确实稍嫌混乱，各种 app 也都是大胆自己发挥。我们自认为以我们现有的 UI 人手，专门针对 android 做一套令我们自己满意的 UI，而且还要跟上 iOS 版本的快速迭代节奏，很困难，所以才决定直接移植 iOS 的微信 UI。

> －－ allenzhang（现任腾讯副总裁，腾讯广州研发部总经理，微信、QQ 邮箱产品经理）

微信的设计团队已经在 5.2 版本中尝试了 Android Design，但是在最近的 6.x 中又恢复使用了 iOS 的 UI。（其实是在 5.4 之后）

我们来看一下 Android 版微信 5.2。主界面去除了底部的 Tab Bar，在顶部则使用了 Action Bar，并用 Tab Host 来组织内部界面。用户通过手势滑动可以轻松来回切换「聊天」、「发现」、「通讯录」这几个高频功能界面。

![](https://pics.naaln.com/blog/2022-02-08-984c7d.png-basicBlog-basicBlog)

但是在个引起了一大波用户的差评：

» [差评都是咎由自取 锋客网][2]

附一张 UI 中国 设计的 `WeChat for Android L`

不知道这是不是你心中的 `微信`

![](https://pics.naaln.com/blog/2022-02-08-5d5ac9.png-basicBlog)

[2]: http://www.phonekr.com/blame-yourselves-for-poor-ratings/
