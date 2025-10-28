---
layout: post
title: Ruby on Rails  简介及配置（ppt）
date: 2013/05/19 08:20:00
categories:
- 技术
tags:
- Rails
- Ruby
- Web开发
- MVC架构
- 演讲
description: Ruby on Rails框架深度介绍，包含Rails的设计理念、MVC架构解析和配置方法。文章阐述了Rails的核心精神"惯例优于配置"（Convention over Configuration），详细解释了MVC开发架构的三个组成部分：模型（Model）通过Active Record模式处理数据关系，控制器（Controller）协调用户界面和数据模型，视图（View）负责展示数据。追溯了Rails从2004年David Heinemeier Hanson从Basecamp分离并开源的历史，强调Rails作为"opinionated software"如何简化开发流程，提升开发效率。
---

##一、Ruby on Rails 介绍

Ruby on Rails 是一种结合 Ruby 语言与 Rails 平台的一种网页编程语言，Ruby 语言以自然、简洁、快速著称，全面支援面向对象程序设计，而 Rails 则是 Ruby 广泛应用方式之一，在 Rails 平台上设计出一套独特的 MVC 开发架构，采取模型（Model）、视图（View）、控制器（Controller）分离的开发方式，不但减少了开发中的问题，更简化了许多繁复的动作。

##二、Ruby on Rails 历史

于 2004 年 7 月，Rails 的创始人<a title="http://en.wikipedia.org/wiki/David_Heinemeier_Hansson" href="http://en.wikipedia.org/wiki/David_Heinemeier_Hansson" rel="nofollow">David Heinemeier Hanson</a>从 37signals 公司的项目管理工具 Basecamp 里面分离出 Ruby on Rails，并且以开源方式发布。

Rails 在发布以后的短短的时间内就迅速获得很多开发人员欢迎，David 认为这归功于 Rails 设计为 opinionated software。Rails 当中有很多规矩从一开始就按照 David 的意见制定好了，所以在 Rails 上开发应用程序时，开发人员可以专注于应用程序自身的设计，省却那些花在了解及配置基础框架上面的时间。这也正是 Rails 很重要的精神「惯例优于配置」（Convention over Configuration），开发人员遵照 Rails 本身的惯例便可以省却配置组态档的时间；此外，Rails 虽然强调惯例的重要及便利性，但针对不同的需求，Rails 也提供修改的空间让开发人员可以进行自订的组态。

##三、Ruby on Rails 的 MVC 架构

Ruby on Rails 的**模型 - 视图 - 控制器**架构由以下各部分组成：

###模型

模型包含着应用的状态，状态可能是临时的也可能是长久性保存在数据库中的。需要注意的是模型不仅包含数据，而且包含数据代表的逻辑。在 Rails 中，模型通常是由一些代表关系数据库中 RDBMS 表的类组成的。在 RoR 中，模型类是通过 Active Record 模式进行处理的。一般来说，程序员要做的是继承

`ActiveRecord` 类，同时程序会自动计算出要使用哪个 RDBMS 表，这个表有哪些列。表与表之间的关系通过简单的命令来指明。

###控制器

控制器将用户界面和数据模型关联起来，并充当协调运作的角色。它接收各种用户操作，更新数据模型，并用合适的 view 展示结果给用户。象他的名字一样，可以说应用的主要控制中心就是各个控制器。

###视图

View 负责根据 Model 中的数据显示用户界面。作为 web 应用，Rails 里的 View 通常是生成整个或者部分网页。当然可以是 XML 或者甚至是 JavaScript 代码。表现为使用内嵌 Ruby 的 HTML／XML／JavaScript 模板

<script async class="speakerdeck-embed" data-id="1571cdc0a28d01304f490a5b3f65930d" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>
