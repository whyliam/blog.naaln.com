---
layout: post
title: 用户分析RFM模型
date: 2019/07/24 20:00:00
categories:
  - 产品
tags:
  - RFM模型
  - 客户价值
  - Recency
  - Frequency
  - Monetary
description: 
  介绍了RFM模型用于衡量客户价值的三个维度：最近一次消费时间（Recency）、消费频率（Frequency）和消费金额（Monetary），并将每个维度划分为四个等级形成从零到四的细分，评估用户的活跃度、忠诚度和消费能力；通过minmax标准化处理各维度数据，使其成为无纲量以进行统一比较。
---

提到如何衡量客户价值，RFM 基本上是头脑中第一个想到的模型，也是大部分运营人员都会接触到的。根据 Arthur Hughes 的研究，发现客户的数据中有三个非常重要的指标：

最近一次消费频率（Recency）
消费频率（Frequency）
消费金额（Monetary）

这三个指标非常有意思，我们可以从中将用户的活跃度，忠诚度和消费能力评估出来，如下图：

![](http://pics.naaln.com/blog/2019-07-24-124121.jpg-basicBlog)

按照案例中的情况，我们分别将 R\F\M 三个值都再细分成了 4 个等级，现在大家可以思考一下：000 代表了什么客户，她与 004 的区别在哪里？她们的价值是否不同，是否要区分维护？

在下面的表格里，我会列举当中一些具有明显特征的用户价值细分，大家可以好好体会一下：

![](http://pics.naaln.com/blog/2019-07-24-124127.jpg-basicBlog)

### 标准化

由于数据的维度不一样，需要将数据转成无量纲量。

最简单的就是 `min-max标准化`

![](http://pics.naaln.com/blog/2019-07-24-124805.jpg-basicBlog)
