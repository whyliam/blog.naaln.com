---
layout: post
title: Ruby中爬虫的实现
date: 2013/09/10 20:02:00
categories:
- 技术
tags:
- Ruby
---

Ruby中实现网页抓取，一般用的是mechanize，使用非常简单。 安装

```
   sudo gem install mechanize
```

### 抓取网页

```
   require 'rubygems'
   require 'mechanize'
   agent = Mechanize.new
   page = agent.get('http://google.com/')
```

### 模拟点击事件

```
   page = agent.page.link_with(:text => 'News').click
```

### 模拟表单提交

```
   google_form = page.form('f')
   google_form["q"] = 'ruby mechanize'
   page = agent.submit(google_form, google_form.buttons.first)
   pp page
```

分析页面，mechanize用的是nokogiri解析网页的，所以可以参照nokogiri的文档

```
   table = page.search('a')
   text = table.inner_text
   puts text
```

有几点注意的地方： 如果需要先登录的网页，那么可以在网站先登录，登录后记录JSESSIONID，然后赋值给agent

```
   cookie = Mechanize::Cookie.new("JSESSIONID", "BA58528B76124698AD033EE6DF12B986:-1")
   cookie.domain = "datamirror.csdb.cn"
   cookie.path = "/"
   agent.cookie_jar.add!(cookie)
```

如果需要保存网页，使用。save_as，(或许save也可以，我没试过)例如

```
   agent.get("http://google.com").save_as
```