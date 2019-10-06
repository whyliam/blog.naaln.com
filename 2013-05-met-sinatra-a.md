---
layout: post
title: 初识 Sinatra (一)
date: 2013/05/25 23:00:00
categories:
- 技术
tags:
- sinatra
---

Sinatra 是一个基于 Ruby 语言，以最小精力为代价快速创建 web 应用为目的的 DSL。如果您对日渐庞大的 Rails，感到厌倦，不如通过本教程来学习一下轻盈的 Sinatra。本系列教程有四个部分，它将带着你一步一步用 Sinatra 和 DataMap 创建一个功能齐备的线上代办事项的应用，我们称它为「Just Do It」。希望读者能通过本文了解到利用 Sinatra 创建应用是多么的简单而快速。 首先我们先进行开发 Sinatra 应用的准备工作。

**安装 Sinatra**

要让 Sinatra 能工作，你首先必须安装 Ruby。这里我建议您使用 RVM 来安装。（ 你可以参考 Glenn Goodrich 的教程）。一旦你安装好了 Ruby 和 Rubygems，你就可以安装 Sinatra 了。用 Rubygems 来安装 Sinatra 不过是小菜一碟，你只需要打开命令行并输入：

   gem install sinatra

如此简单，你就可以做好一切准备工作了。

**最简单的应用**

现在你可以使用你喜欢的任一款文本编辑器，创建一个新的文本文件，名字是「main.rb」，然后输入下面这几行：

   require 'sinatra'
   get '/' do
   "Just Do It"
   end

注意：如果你的 Ruby 版本低于 1.9，需在代码第一行添加：`require 'rubygems'`。 这就是一个最简单的 Sinatra 应用：在文件的头部，我们请求了 Sinatra的Gem包。从第2行开始，是一个 action 。在 Sinatra 中，这称为 handler（处理器），因为它负责处理路由（routes） 和 动作 （actions）。第2行最开始的部分 (get) 表明我们将使用哪一种 HTTP method ，在例子中，我们用的是 HTTP GET，因为我们在试图「获得」某个页面。接下来的部分是有关路由的字符描述，即「/」 ，这是本应用的根URL。代码块(code block)表明当用户访问这个URL时会发生什么。在这个简单的例子中，只是返回了一行文字「Just Do It」， 这行文字最终会在浏览器渲染成页面。通常来说，handler 代码块的最后一行总是会在浏览器里渲染点什么。 我们需要启动 Sinatra 服务器来看看这个例子是不是工作的。打开命令行，在 main.rb 所在的路径里执行：

   ruby main.rb

几秒钟之后，你就会看到这样的信息：

   == Sinatra/1.2.6 has taken the stage on 4567 for development with backup from WEBrick

这时服务器已经启动。在浏览器中输入 http://localhost:4567，页面就会显示一行 「Just Do It」。至此，我们已经创建了第一个 Sinatra 应用。很简单吧？

**内嵌模板**

我们的 Just Do It 应用除了显示一行字符外做不了什么事。接下来我们会进一步扩展这个应用，这里我们先创建一些模板文件，它们包含 HTML 和用 Ruby 生成的动态内容。Slim 是一个神奇的模板引擎，因此这部分工作变得很简单。在继续下面的内容之前，我们首先安装 Slim 的gem包。

   gem install slim

现在将main.rb的内容修改成以下内容：

   require 'sinatra'

   require 'slim'

   get '/' do

   slim :index

   end

   **END**

   @[@layout ](/layout )

   doctype html

   html

   head

   meta charset="utf-8"

   title Just Do It

   link rel="stylesheet" media="screen, projection" href="/styles.css"

   /[if lt IE 9]

   script src="[http://html5shiv.googlecode.com/svn/trunk/html5.js](http://html5shiv.googlecode.com/svn/trunk/html5.js)"

   body

   h1 Just Do It

   == yield

   @[@index ](/index )

   h2 My Tasks

   ul.tasks

   li Get Milk

首先，代码开始部分我们添加了对 Slim gem包的请求，然后我们对 handler 做了些修改，现在代码块的最后一行返回的是名为 「index」 的视图，它由 slim 产生。 「 @[@index ](/index ) 」 之后的代码就是该视图。这就是 Sinatra 内嵌模板。

我个人认为 Sinatra 一个杀手级的特性就是它允许你把所有的代码存在一个文件里，这意味着将所有的部分快速组织在一起。内嵌模板 (Inline template)位于 「 __END__ 」 声明之后，每个模板以「 @@ 」开头。

在代码中，我们还可以看到一个名为「@@layout」的模板。这个模板会随着每个视图被渲染，它提供了一个基本的 HTML5 骨架。布局模板的关键在最后一行 「==yield」。 yield 语句会对 handler 所请求的视图模板的内容进行渲染，在例子中，就是 「index」。

这儿所有的视图用的是 Slim 的最简化语句，这让编写 HTML 变得愉快多了，不过当心，Slim 是对空格敏感的。嵌套的HTML元素应该2个空格的样式缩进，Slim 对该一致性要求非常严格。如果你不喜欢Slim，这儿也有一大堆其他模板语言可供选择，包括 ERB ,Haml和 Markaby。 现在可以重启服务器，并重新加载http://localhost:4567的页面来看看效果了。

记住，每次修改代码之后，你都必须重启服务器。（如果重启让你觉得很厌烦，你可以试一下 Shotgun，用gem install shotgun来安装）。

**外部视图**

现在你对 Sinatra 是如何使用 handler来渲染视图有所了解了。接下来我们看看如果不采用内嵌视图，该如何在文件夹中组织模板。 在开始之前，我们需要删除内嵌模板：打开 main.rb，然后删除 __END__ 定义及其后的所有模板。 在你保存 main.rb 文件的同一目录中，创建2个文件夹，一个名为「public」，另一个名为「views」。public文件夹用于保存公用的界面元素，比如图片和样式表。views文件夹则用于保存我们的所有 Slim 模板。上面例子中的模板现在会被保存到不同的文件中。首先将下面的代码保存在views文件夹中，名为 layout.slim。

   doctype html

   html

   head

   meta charset="utf-8"

   title Just Do It

   link rel="stylesheet" media="screen, projection" href="/styles.css"

   /[if lt IE 9]

   script src="[http://html5shiv.googlecode.com/svn/trunk/html5.js](http://html5shiv.googlecode.com/svn/trunk/html5.js)"

   body

   h1 Just Do It

   == yield

同样保存index.slim。

   h2 My Tasks

   ul.tasks

   li Get Milk

现在最好重启服务器，然后看看我们的视图是不是还能正确被渲染。

**动态内容**

下面我们进一步来看看 Sinatra的一些特性。让我们创建一个新的handler用来接收一些动态的输入（main.rb)：

   get '/:task' do

   [@task ](/task ) = params[:task]

   slim :task

   end

你也许会注意到route项中包含了字符串「:task」，这是个命名参数，用引导的冒号加以识别。命名参数从 URL 中获得值，可利用「params」哈希表进行存取。在代码块的第一行，有一个名为'@task' 实例变量，它的值与「params[:task]」相等，内容就是写在 URL 斜杠后的一些东西。实例变量相当有用，因为它们可以在视图中被引用。 新的路由中指定了一个「task」视图，我们需要先创建它，将之以「task.slim」文件名保存到views文件夹中，内容如下：

   h2 My Tasks

   = [@task ](/task )

这里用了「=」号来运算 Ruby 变量。Slim 会输出等号之后的 Ruby 运算结果。在例子中，则是 [@task ](/task ) 实例变量的值，它与URL相匹配。重启服务器，然后在浏览器里查看 'http://localhost:4567/get-milk'，结果如图：

![](http://pics.naaln.com/blog/2019-05-14-123219.jpg-basicBlog)

图1-1 Simple task route 现在看起来不错，不过还有改进的空间，我们在 hanlder 里加了点新的代码美化一下页面：

   get '/:task' do

   [@task ](/task ) = params[:task].split('-').join(' ').capitalize

   slim :task

   end

现在当你浏览 「http://localhost:4567/get-milk」，画面看起来是这样的：

![](http://pics.naaln.com/blog/2019-05-14-123220.jpg-basicBlog)

图1-2 更漂亮的task页面

**表单**

在结束这部分教程之前，我们来看一下如何通过表单来提交任务。打开 index.slim 文件，将其内容替换成：

   form action="/" method="POST"

   input type="text" name="task"

   input.button type="submit" value="New Task"

我们还需要一个 handler来处理提交上来的表单。如果你看了上面的代码，「action」 属性说明表单本身会被提交到URL '/'，而 「method」 属性该表单会使用POST方法。这直接引出 Sinatra 的第二个杀手级特性：如何在 handler 中指定请求方法。把下面的代码添加到 main.rb 中：

   post '/' do

   [@task ](/task ) =  params[:task]

   slim :task

   end

这段代码和我们之前用到的列出任务的 handler 非常相像，不同是现在我们通过表单的输入来获得任务。这个新的 handler 定义为POST路由，这意味这它只能响应HTTP POST请求。因此，我们可以为同一个路由「/」 定义两个 handler，并根据不同的请求类型赋予不同的代码段。

表单被提交的时候，它会将 params[:task] 的值设置为我们在页面输入的东西。用相同的办法，可以通过引用 params 哈希表存取任意值。 你可以试着在http://localhost:4567/创建一些新的任务，不过现在我们还不能创建任务清单，也没有办法删除修改它们。我们需要某种方式来保存这些任务，这些内容我们会在本教程的第二章中详述。 本章例子：Sinatra 例子-1 (22) 参考： [http://rubysource.com/just-do-it-learn-sinatra-i/](http://rubysource.com/just-do-it-learn-sinatra-i/)

