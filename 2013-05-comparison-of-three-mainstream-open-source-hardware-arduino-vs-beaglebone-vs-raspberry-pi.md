---
layout: post
title: 三大主流开源硬件对比：Arduino vs BeagleBone vs Raspberry Pi
date: 2013/05/11 01:50:00
categories:
- 技术
tags:
- arduino
---

软硬件整合是今年一再被提及的话题，如今我们也可以看到不少硬件创业的成功案例，比如Jawbone Up、Pebble手表等可穿戴设备，它们可与用户的手机同步，实现软件与硬件的结合。通过硬件创新与软件整合的概念还有许多。但是如何将创意变为现实，是一个难题。许多大公司均选择硬件闭源，从而形成的技术壁垒与专利版权，阻碍着小规模创新者的发展。而开源硬件，让创业者可以更轻松地将创意转化为现实。

这篇文章由[Roger Meike](https://plus.google.com/110958667007088273579/about)撰写，并在发布于[Digital Dinner](http://digitaldiner.blogspot.com/)上。文中对比了三款最流行的，也是最具代表意义的开源硬件平台Arduino Uno、BeagleBone和Raspberry Pi。Roger从性能以及可扩展性等方面对它们进行对比，帮助开发者了解如何选择适合自己的开源硬件平台。

以下是译文：

![](http://pics.naaln.com/blog/2019-01-14-85007.jpg-basicBlog) 

从左到右: Arduino Uno, BeagleBone, Raspberry Pi

我们喜欢在Digital Dinner制作一些新奇玩意。这里总是时刻进行着各种项目。这些天以来，我们大部分的项目都包含了一种电子零件——微控制器。如果你还没被「创客」（Maker）灵魂附体，我们强烈建议你动起手来试一试，它会让你非常有成就感！如果本身在编程方面有一定基础，那么一些网站、平台和工具可以帮助你获得硬件开发的所需知识，逐步让你可以使用按钮、旋钮和从动系统，做出实际可用的产品。软件开发固然乐趣无穷，但如果能将你的创意变为实际产品就更赞了！

然而，目前有许多优秀的平台可供创造数字设备，这让我们有些举棋不定。举例来说，现在我们正在制作一个「水培花园」项目，需要一款控制器来驱动水泵、读取传感器数据。但是，现在有许多种选择都可以实现这些功能。而这对于初步接触开源硬件的开发者来说，可能会有些无所适从。所以我们选择其中三款最流行的开源电子原型平台，加以对比，希望可以便于大家选择，当然，这三款平台都非常值得推荐。

三款开源平台分别是Arduino、BeagleBone和Raspberry Pi。之所以选择他们，原因在于他们唾手可得，价格实惠，而且大小规格相似（大约2*3寸），更重要的是，他们可以广泛应用于电子产品开发工作中。在比较前，我们先进行简单的介绍。

![](http://pics.naaln.com/blog/2019-01-14-085007.jpg-basicBlog) 

Arduino Uno在Maker的圈子里很常见。Arduino有许多不同尺寸和特性，但是在此我们选择Arduino Uno作为其中的代表。它是一个非常易于开发的平台，有很多开发者也都选择它作为开发环境，而且它的设计让它易于和其他设备相连。

![](http://pics.naaln.com/blog/2019-01-14-085008.jpg-basicBlog) 

与Arduino相比，Raspberry Pi是一个比较新的成员。它实际上是一个嵌入式电脑。它也是一个并不昂贵的全功能桌面电脑。它是一个准系统，而作为$35的电脑，它在很多项目中都是一个很好的平台。

![](http://pics.naaln.com/blog/2019-01-14-085009.jpg-basicBlog) 

BeagleBone可能是三个平台中最鲜为人知的一种，但它有很好的兼容性，许多项目都可使用。它是一款强大的Linux电脑，而且可以安装到Altoid』s的容器中。

![](http://pics.naaln.com/blog/2019-01-14-085009.jpg-basicBlog) 

Arduino背面

![](http://pics.naaln.com/blog/2019-01-14-085011.jpg-basicBlog) 

Raspberry Pi背面

![](http://pics.naaln.com/blog/2019-01-14-085012.jpg-basicBlog) 

BeagleBone背面

这三款平台各有所长，对于爱好者来说都非常有价值。下表是三款平台的规格与特色。

![](http://pics.naaln.com/blog/2019-01-14-85013.jpg-basicBlog) 

首先，Arduino和Raspberry Pi非常便宜，不到40美元，BeagleBone的价值几乎是Arduino Uno的三倍，而Arduino的每秒周转速率大约比另外两款慢40倍，RAM则是其他两款的1/128000。从中你可以发现他们的差异逐渐产生了，Arduino和Raspberry Pi价格较低，而Rasphberry Pi与BeagleBone功能较强。从这点来看的话Rasphberry Pi似乎是最好的选择，但事情没有这么简单。首先它的价格并不如第一眼看到的那么美好，因为运行Raspberry Pi，你需要提供SD卡，而这额外增加了5%到10%的成本。

此外，抛开每秒运转速率的相似性能不谈，在我们的测试中，BeagleBone的运转速度几乎是Raspberry Pi的两倍。也许有悖常理，对于初学者来说，Arduino也许性能更好。这是因为Raspberry Pi和BeagleBone都是基于Linux系统。这个系统让它们可以在小型电脑上，运行多个程序，并支持使用多语言编程。Arduino的设计非常简单，它一次只能运行一个程序，而且只支持低阶的C++语言编程。

BeagleBone和Raspberry Pi还有一个有意思的特性，就是他们可以在Flash卡上运行（Raspberry Pi使用SD卡，BeagleBone使用microSD）。这就意味着，你可以通过换存储卡来实现系统移植。在不同的储存卡上，你可以储存不同的设定值，只要更换储存卡，你就可以继续之前正在开发的项目。因为这两个板非常的复杂，这意味着你可以通过换卡而轻松的换操作系统。

