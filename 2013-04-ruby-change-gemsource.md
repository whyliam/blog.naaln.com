---
layout: post
title: Ruby更改gem source
date: 2013/04/03 20:00:00
categories:
- 技术
tags:
- Ruby
- gem
- 镜像源
- 淘宝
- 开发环境
- Bundler
description: Ruby gem源切换实用教程，解决中国大陆网络环境下gem安装缓慢或失败问题。详细介绍了ruby.taobao.org镜像源的使用方法，该镜像每15分钟同步一次rubygems.org资源。教程提供了完整的操作步骤：移除官方源（gem sources --remove）、添加淘宝镜像（gem sources -a）、列出当前源验证配置（gem sources -l）、使用新源安装gem等。同时提供了Bundle配置方式，在Gemfile中直接指定镜像源。为Ruby和Rails开发者在中国大陆快速搭建开发环境提供实用解决方案，显著提升gem安装速度。
---

**为什么有这个？**

由于国内网络原因（你懂的），导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。所以你会与遇到 gem install rack 或 bundle install 的时候半天没有响应，具体可以用 gem install rails -V 来查看执行过程。

这是一个完整 rubygems.org 镜像，你可以用此代替官方版本，同步频率目前为 15 分钟一次以保证尽量与官方服务同步。

**如何使用？**

	 $ gem sources --remove https://rubygems.org/

	 $ gem sources -a https://ruby.taobao.org/

	 $ gem sources -l

	 *** CURRENT SOURCES ***



	 https://ruby.taobao.org

# 请确保只有 ruby.taobao.org

	 $ gem install rails

**如果你是用 Bundle (Rails 项目)**

	 source 'https://ruby.taobao.org/'

	 gem 'rails', '4.1.0'

	 …
