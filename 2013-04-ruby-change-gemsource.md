---
layout: post
title: Ruby更改gem source
date: 2013/04/03 20:00:00
categories:
- 技术
tags:
- ruby
---

**为什么有这个？**

由于国内网络原因（你懂的），导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。所以你会与遇到 gem install rack 或 bundle install 的时候半天没有响应，具体可以用 gem install rails -V 来查看执行过程。

这是一个完整 rubygems.org 镜像，你可以用此代替官方版本，同步频率目前为15分钟一次以保证尽量与官方服务同步。

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

   ...

