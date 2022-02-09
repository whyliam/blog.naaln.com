---
layout: post
title: Android 微信的 UI 永远和 iOS 一样
date: 2015/04/21 21:57:00
categories:
- 产品
tags:
- Android
---

首先我们要承认微信安卓版并没有自己的一套UI。腾讯会优先在iOS上先做新功能，做的过程中会有很多的UI上的反复修改，很耗时。而android版本只需要移植，使得跟进速度非常快。

> 微信的头几个android版本，是单独做了一套符合android规范的UI的。但是几个版本下来，很难让我们自己觉得满意。android的UI规范，确实稍嫌混乱，各种app也都是大胆自己发挥。我们自认为以我们现有的UI人手，专门针对android做一套令我们自己满意的UI，而且还要跟上iOS版本的快速迭代节奏，很困难，所以才决定直接移植iOS的微信UI。

> －－ allenzhang（现任腾讯副总裁，腾讯广州研发部总经理，微信、QQ邮箱产品经理）

微信的设计团队已经在5.2版本中尝试了Android Design，但是在最近的6.x中又恢复使用了iOS的UI。（其实是在5.4之后）

我们来看一下Android版微信5.2。主界面去除了底部的Tab Bar，在顶部则使用了Action Bar，并用Tab Host来组织内部界面。用户通过手势滑动可以轻松来回切换「聊天」、「发现」、「通讯录」这几个高频功能界面。

![](https://pics.naaln.com/blog/2022-02-08-984c7d.png-basicBlog-basicBlog)

但是在个引起了一大波用户的差评：

» [差评都是咎由自取 锋客网][2]

附一张 UI中国 设计的 `WeChat for Android L`

不知道这是不是你心中的 `微信`

![](https://pics.naaln.com/blog/2022-02-08-5d5ac9.png-basicBlog)

[2]: http://www.phonekr.com/blame-yourselves-for-poor-ratings/

