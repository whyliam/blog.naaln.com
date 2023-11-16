---
layout: post
title: Mechanize使用手册
date: 2013/09/10 20:09:00
categories:
- 技术
tags:
- Mechanize
---

开始使用 [WWW::Mechanize](http://mechanize.rubyforge.org/mechanize/classes/WWW/Mechanize.html)

本教程的目的是帮助你开始使用Mechanize。读完这篇教程之后，你将可以抓取页面，点击链接，填写和提交form，抽取数据和其他一些可能有用的事情。此教程仅仅只是涉及到了非常粗浅的功能，但因该已经足够帮助你起步了。

让我们抓取一个页面

你要做得第一件事情就是在代码里引用mechanize，然后初始化一个新的mechanize实例：
```
   require 'rubygems'
   require 'mechanize'
   agent = WWW::Mechanize.new
```

现在我们将使用刚刚创建的agent来抓取一个页面。就拿Google开刀吧：
```
   page = agent.get('http://google.com/')
```
发生了什么事情？我们让mechanize去抓取Google的主页。Mechanize会自动存贮相关的cookie，甚至会跟踪Google发过来的自动跳转。Agent会帮我们抓回来一个页面，我们可以用来抽取数据，找到并且点击链接或者填写一个form.

接下来，让我们找一些链接出来点点看。

找到链接

---

当你抓取页面、提交数据或者提交一个form的时候mechanzie都回返回一个page，agent将会解析抓取到的页面并且把一系列的链接放进page里面。

现在让我们尝试从刚才拿到的google主页上找出所有的链接：
```
   page.links.each do |link| puts link.text end
```

我们能列出所有的链接，但是mechanize提供了几个更加方便的捷径帮我们找到一个链接并且点击它。假设我们需要找到一个text属性是』News』的链接并且点击。一般来说，我们会这样做：
```
   page = agent.click page.links.find { |l| l.text == 'News' }
```

但是mechanize提供了捷径，所以我们可以这样做：
```
   page = agent.click page.links.text('News')
```

这个捷径表示「找到所有text为』News』的链接」。你也许已经想到了「可能存在很多符合这个条件的链接」，没错！如果你把一组链接发送给「click」方法，mechanize只会点击第一个。如果你想要点击第二个，那你应该这样做：
```
   agent.click page.links.text('News')[1]
```

我们甚至可以找到一个包含特定href的链接：
   page.links.href('/something')

或者把它们连起来，找到一个包含特定text和href的链接：
   page.links.text('News').href('/something')

Mechanize提供的这些捷径可以用在任意一组你找到的东西上面，例如一组frame、iframe或者form。现在你应该已经知道如何找到并且点击链接了，让我们试试更加复杂的事情，比如填写一个form。

填写Form

---

让我们继续Google的例子。当前我们有了一下代码：
```
   require 'rubygems'
   require 'mechanize'
   agent = WWW::Mechanize.new
   page = agent.get('http://google.com/')
```

如果我们打印这个页面的源代码，就会发现有一个form叫做』f'，它包含几个按钮和几个要填写的域：
```
   pp page
```

现在我们知道了这个form的名字，让我们把它抓出来：
```
   google_form = page.form('f')
```

Mechanize可以让你通过几种不同的方式访问form里面可以输入的域，但是最方便的方式就是把输入域当作form的一个属性来访问。所以让我们把一个叫做』q'的域的值设置成』ruby mechanize』:
```
   google_form.q = 'ruby mechanize'
```

为了确保我们设置了这个值，让我们打印这个form，然后你应该能看到一行类似的代码：
```
   #<www::Mechanize::Field:0x1403488 @name="q", @value="ruby mechanize">
```

如果你看到』q'的值变了，说明你成功了！现在我们可以提交这个form，』点击』提交按钮和打印结果：
```
   page = agent.submit(google_form, google_form.buttons.first) pp page
```

我们刚刚做得事情等同于在google的搜索框里填写了』ruby mechanize』然后点击』Google Search』按钮。如果我们没有点击那个按钮而直接提交form，就等同于填写值之后按回车键。

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

在开始抓抽取数据之前，让我们深入了解一下form。除非你对数据抓取实在感兴趣。

高级form技巧

---

在这一节里，我想试试form里面可能包含的各种输入控件。Password和Textarea可以直接当作text控件来处理。Select非常类似 text，但是它会包含很多相关的子选项。如果你选择了一个option，mechanize会取消其他option的选择（除非允许多选！）。

例如，在一个列表里面选择一个option：
```
   form.fields.name('list').options[0].select
```

现在让我们来看看checkbox和radio button。要选择一个checkbox，只需要这样做：
```
   form.checkboxes.name('box').check
```

Radio button和checkbox很像，但是在选择一个radio button之后其他同名的radio button都会被取消选择。像操作checkbox一样操作radio button。
```
   form.radiobuttons.name('box')[1].check
```

Mechanize同样可以轻易支持文件上传！只需要找到上传文件的控件，然后告诉它你想要上传的文件名：
```
   form.file_uploads.file_name = "somefile.jpg"
```

抽取数据

---

Mechanize使用hpricot来解析html。这代表了什么？你可以把mechanize的page当作一个hpricot对象。在你用 machanize找到目标页面之后，就可以使用[hpricot](http://code.whytheluckystiff.net /hpricot/)的方法来抽取上面的任何东西：
   agent.get('http://someurl.com/').search("//p[@class='posted']")

更多关于这个强悍的数据抽取器的信息，请参考[HpricotBasics](http://code.whytheluckystiff.net/hpricot/wiki/HpricotBasics).
