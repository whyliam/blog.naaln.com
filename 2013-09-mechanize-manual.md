---
layout: post
title: Mechanize使用手册
date: 2013/09/10 20:09:00
categories:
  - 技术
tags:
  - Mechanize
  - Ruby
  - WebScraping
  - Form
  - Hpricot
description: 本教程教你使用WWWMechanize库进行网页抓取，包括获取页面、遍历链接、点击链接、填写表单并提交，演示高级表单技巧如密码框、文本区、下拉列表、复选框、单选框和文件上传，最后介绍利用Hpricot解析HTML抽取数据的常用方法，适合初学者快速上手自动化数据采集。
---

开始使用 [WWW::Mechanize](http://mechanize.rubyforge.org/mechanize/classes/WWW/Mechanize.html)

本教程的目的是帮助你开始使用 Mechanize。读完这篇教程之后，你将可以抓取页面，点击链接，填写和提交 form，抽取数据和其他一些可能有用的事情。此教程仅仅只是涉及到了非常粗浅的功能，但因该已经足够帮助你起步了。

让我们抓取一个页面

你要做得第一件事情就是在代码里引用 mechanize，然后初始化一个新的 mechanize 实例：

```
   require 'rubygems'
   require 'mechanize'
   agent = WWW::Mechanize.new
```

现在我们将使用刚刚创建的 agent 来抓取一个页面。就拿 Google 开刀吧：

```
   page = agent.get('http://google.com/')
```

发生了什么事情？我们让 mechanize 去抓取 Google 的主页。Mechanize 会自动存贮相关的 cookie，甚至会跟踪 Google 发过来的自动跳转。Agent 会帮我们抓回来一个页面，我们可以用来抽取数据，找到并且点击链接或者填写一个 form.

接下来，让我们找一些链接出来点点看。

找到链接

---

当你抓取页面、提交数据或者提交一个 form 的时候 mechanzie 都回返回一个 page，agent 将会解析抓取到的页面并且把一系列的链接放进 page 里面。

现在让我们尝试从刚才拿到的 google 主页上找出所有的链接：

```
   page.links.each do |link| puts link.text end
```

我们能列出所有的链接，但是 mechanize 提供了几个更加方便的捷径帮我们找到一个链接并且点击它。假设我们需要找到一个 text 属性是』News』的链接并且点击。一般来说，我们会这样做：

```
   page = agent.click page.links.find { |l| l.text == 'News' }
```

但是 mechanize 提供了捷径，所以我们可以这样做：

```
   page = agent.click page.links.text('News')
```

这个捷径表示「找到所有 text 为』News』的链接」。你也许已经想到了「可能存在很多符合这个条件的链接」，没错！如果你把一组链接发送给「click」方法，mechanize 只会点击第一个。如果你想要点击第二个，那你应该这样做：

```
   agent.click page.links.text('News')[1]
```

我们甚至可以找到一个包含特定 href 的链接：
	 page.links.href('/something')

或者把它们连起来，找到一个包含特定 text 和 href 的链接：
	 page.links.text('News').href('/something')

Mechanize 提供的这些捷径可以用在任意一组你找到的东西上面，例如一组 frame、iframe 或者 form。现在你应该已经知道如何找到并且点击链接了，让我们试试更加复杂的事情，比如填写一个 form。

填写 Form

---

让我们继续 Google 的例子。当前我们有了一下代码：

```
   require 'rubygems'
   require 'mechanize'
   agent = WWW::Mechanize.new
   page = agent.get('http://google.com/')
```

如果我们打印这个页面的源代码，就会发现有一个 form 叫做』f'，它包含几个按钮和几个要填写的域：

```
   pp page
```

现在我们知道了这个 form 的名字，让我们把它抓出来：

```
   google_form = page.form('f')
```

Mechanize 可以让你通过几种不同的方式访问 form 里面可以输入的域，但是最方便的方式就是把输入域当作 form 的一个属性来访问。所以让我们把一个叫做』q' 的域的值设置成』ruby mechanize』:

```
   google_form.q = 'ruby mechanize'
```

为了确保我们设置了这个值，让我们打印这个 form，然后你应该能看到一行类似的代码：

```
   #<www::Mechanize::Field:0x1403488 @name="q", @value="ruby mechanize">
```

如果你看到』q' 的值变了，说明你成功了！现在我们可以提交这个 form，』点击』提交按钮和打印结果：

```
   page = agent.submit(google_form, google_form.buttons.first) pp page
```

我们刚刚做得事情等同于在 google 的搜索框里填写了』ruby mechanize』然后点击』Google Search』按钮。如果我们没有点击那个按钮而直接提交 form，就等同于填写值之后按回车键。

让我们看看到现在为止写的代码：

```
   require 'rubygems'
   require 'mechanize'
   agent = WWW::Mechanize.new
   page = agent.get('http://google.com/')
   google_form = page.form('f')
   google_form.q = 'ruby mechanize'
   page = agent.submit(google_form)
   pp page
```

在开始抓抽取数据之前，让我们深入了解一下 form。除非你对数据抓取实在感兴趣。

高级 form 技巧

---

在这一节里，我想试试 form 里面可能包含的各种输入控件。Password 和 Textarea 可以直接当作 text 控件来处理。Select 非常类似 text，但是它会包含很多相关的子选项。如果你选择了一个 option，mechanize 会取消其他 option 的选择（除非允许多选！）。

例如，在一个列表里面选择一个 option：

```
   form.fields.name('list').options[0].select
```

现在让我们来看看 checkbox 和 radio button。要选择一个 checkbox，只需要这样做：

```
   form.checkboxes.name('box').check
```

Radio button 和 checkbox 很像，但是在选择一个 radio button 之后其他同名的 radio button 都会被取消选择。像操作 checkbox 一样操作 radio button。

```
   form.radiobuttons.name('box')[1].check
```

Mechanize 同样可以轻易支持文件上传！只需要找到上传文件的控件，然后告诉它你想要上传的文件名：

```
   form.file_uploads.file_name = "somefile.jpg"
```

抽取数据

---

Mechanize 使用 hpricot 来解析 html。这代表了什么？你可以把 mechanize 的 page 当作一个 hpricot 对象。在你用 machanize 找到目标页面之后，就可以使用 [hpricot](http://code.whytheluckystiff.net /hpricot/) 的方法来抽取上面的任何东西：
	 agent.get('http://someurl.com/').search("//p[@class='posted']")

更多关于这个强悍的数据抽取器的信息，请参考 [HpricotBasics](http://code.whytheluckystiff.net/hpricot/wiki/HpricotBasics).
