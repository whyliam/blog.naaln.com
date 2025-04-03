---
layout: post
title: OmniFocus 自动化流程
date: 2020/02/23 20:00:00
categories:
- 技术
tags:
- 自动化
---

使用 GTD 的软件已经有一段时间了，GTD 是什么可以参考这本书 [《搞定》](https://blog.naaln.com/2020/01/gtd/)。

> GTD（Getting Things Done / 尽管去做），是一种行为管理的方法。GTD 的主要原则在于一个人需要通过记录的方式把头脑中的各种任务移出来。通过这样的方式，头脑可以不用塞满各种需要完成的事情，而集中精力在正在完成的事情。

![GTD的流程](https://pics.naaln.com/blog/2022-02-08-46726f.jpg-basicBlog)
*GTD 的核心流程*

---

#### OmniFocus 管理

在 GTD 的管理上，最好的软件是 OmniFocus，我暂时还没有找到其他可以有效代替的软件。

下面是我正在使用的项目：

![](http://pics.naaln.com/blog/2020-02-23-095512.png-basicBlog)

我的项目大致分为以下几类：

- Misc
- Work
- Learning
- Life
- Hobby
- System（定期任务）

新建的任务都会创建到以上的项目中。

**标签：**

![](https://pics.naaln.com/blog/2022-02-08-ac8bf0.png-basicBlog-basicBlog)

目前的标签我做了几个分类：

- Energy：按消耗精力分类
- 优先级和紧急程度分分类
- schedule：按完成日期分类
- 按项目分类

**透视：**

使用 OmniFocus 的同学都会很频繁的使用透视功能。我比较常用的是以下「透视」：

- 收件箱：新建的任务
- 项目：按项目展示任务
- 标签：按标签展示任务
- 预测：按日期展示任务，并预测任务完成情况
- 检查：定时检查任务的完成情况
- TO-DO：展示将要完成的任务
- Today：展示今天需要做的任务
- Routine：展示定期要完成的任务

#### OmniFocus 任务输入

为了让 任务 可以快速输入，我使用了 [Alfred](https://www.alfredapp.com/) 做联动。

[下载](https://github.com/JamesHopbourn/Apple-Automation/raw/master/Alfed/Create%20OmniFocus%20Task.alfredworkflow)

```
todo 任务名称 [@due(18:00)] [@estimate(01 min)] [@context(Communicate)] [@defer(20:00) [@flagged]

[] 内为常用的可选参数，建议使用 TextExpander、aText 此类软件输入。

⚠️ 如果 TextExpander、aText 这类软件在 Alfred 输入框中无法正常使用，请下载 TE_ExpandAllLangCodes 程序并执行后即可正常使用。
```

#### 自动周报 Hazel

[Hazel](https://www.noodlesoft.com/) 是一款可以自动监控并整理文件夹的工具，其官网的介绍就是简单的一句话：Automated Organization for Your Mac。

![](http://pics.naaln.com/blog/2020-02-23-101321.png-basicBlog)

我做了以下的报告：

**[日报：](https://github.com/whyliam/hazel-script/tree/master/OmniFocus)**

每日截取昨日完成的项目，并保存到 evertone。

**[周报/月报：](https://github.com/whyliam/hazel-script/tree/master/OmniFocus)**

每周/月截取上个周期完成的项目，并保存的 [TaskPaper](https://www.taskpaper.com/)

> TaskPaper 为了简约是基于文本文件，然后提供一些格式化和组织工具。

下面是周报的例子：

```
杂项: @Misc
- 22:37:13 -- 用Hazel导出Omnifocus为周报
接口开放平台: @ZheJiang_Daily
- 22:56:04 -- 代码交接
数据化决策: @ZheJiang_Daily
- 22:10:39 -- 数据化决策的帮助中心的材料
```
