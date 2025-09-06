---
layout: post
title: 构建初级前端页面重构开发环境
date: 2014/03/10 02:10:00
categories:
- 技术
tags:
- 重构
---

本文主要面对前端初级新手，是我从事前端项目外包这一年多时间里积累的经验，提供一系列的工具和资料来帮助新手更高效的从事前端开发。但是由于本人水平有限，所以只能写一些初级的方法和工具。没有添加诸如 `grunt` 这类的更高级的工具，因为我对这块目前还没有很多实战经验。

此外，关于移动端的调试开发，也很少做过，所以本文没有很多相关信息，有待进一步补充。

## 原始而传统的前端页面重构工作流程

这里说的是我一开始前端相关工作时的最原始的工作流程，有部分可能你也在经历，有部分你经历过去了。

首先拿到设计稿或者是与客户沟通好设计需求。然后开始新建文件夹，将设计稿放好，新建

`index.html`、`style.css` 等等必要的资源文件。通常先找找之前的项目，复制类似的文件。然后开始按照设计稿写 `HTML` 结构和 `CSS` 代码，并且在需要图片的地方，切换到 PhotoShop 去切图。写完一次，摁下保存，然后切换到浏览器，摁下 `F5` 或者是 `Ctrl+F5` 强刷，看到效果是否满意。如果不满意，摁下 `F12` 呼出控制台，查看对应的 HTML 结构，在调试工具中修改参数值达到设计稿的需求，然后切换回去继续在编辑器中编写代码，反复到完成为止。

这个流程主要有一下几个问题：
每次都要重复的创建初始项目结构和文件，往往复制大量相同代码。
用不好的编辑器写 `HTML` 结构和 `CSS` 代码，效率比较低下。
不停地切换浏览器、编辑器和 PhotoShop 等窗口，并且调整刷新。
不停地重复上面第三步。

下面就来逐步优化这个工作流程。

## 拥有一个用来初始化的项目框架

这里的项目框架，并不是指 `Bootstrap` 这类的，而是一整套项目结构。包括常用的 `HTML`、`CSS`、`JS 组件` 和一些文件目录。在一些大公司中，往往会有这一整套打包好的框架，如果有相关项目，执行一条初始化命令，就给你复制下来一份。对于小公司或者个人来说，这类的项目框架就需要自己来总结了。

所以，我共享了一份我自己总结整理出来的项目框架：[ysass](https://github.com/yujiangshui/ysass)（实在想不出好名字）。

[ysass](https://github.com/yujiangshui/ysass) 主要基于 [Sass](http://sass-lang.com/) 和 [sofish](http://sofish.de/) 的开源项目 [typo](https://github.com/sofish/typo.css)。灵感是来自我们 [Deepdevelop](http://www.deepdevelop.com/) 内部的前端框架，但是团队内部的框架是面向国外网站的，所以我重新整理了一下。`typo` 为中文排版做了很多优化，经验丰富的 [sofish](http://sofish.de/) 前辈考虑的也非常全面成熟，于是就拿过来用了。

这个项目框架的使用也非常简单，你只需要按照下面几步就可以：
下载、解压、将 ysass 命名为项目名称，删掉里面 `README.md` 等无用文件。
将设计稿扔进 PSD 文件夹中，观看 PSD 确定不需要的组件或功能，在相应文件夹中删掉无用文件。
打开 `style.scss` 文件，配置头部项目信息。
双击 `convert.bat` 文件，开始监听 SCSS 文件变动并编译。
打开 `index.html` ，修改头部信息，删掉或增加你的 JS 组件，开始书写你的语义化的 HTML 结构。
打开 `scss\_var.scss` 文件，添加项目常用变量。
打开 `scss\_utils.scss` 文件，添加你常用的 SCSS 函数。
**打开 `scss\_custom.scss` 文件，编写项目主要 CSS 代码。**
打开 `scss\_media-queries.scss` 文件，编写响应式相关功能。

别告诉我你没用接触过 Sass，你难道不知道在 Sass 中直接写 CSS 也是可以的么？再有，有

[阮一峰](http://www.ruanyifeng.com/) 老师那 [半天就可以速成的 Sass 教程](http://www.ruanyifeng.com/blog/2012/06/sass.html) ，就不会拿出点时间提高一下开发效率？

## 好工具让你事半功倍

好的开发工具是一定要学习和使用的，不要禁锢自己的思想，说自己是 XX 粉。很久之前我就听说过神器 `Sublime Text`，但是感觉用 `NotePad++` 已经足够了，于是仍然继续使用 `NotePad++`，认为自己是 NPP 粉。后来，又看到一大波 `Sublime Text` 赞潮，很多大神也在用，于是就拿了半天在网上找了一篇文章照着用了一下。结果从此改用 `Sublime Text`，因为配合插件，实在是比之前的编码效率提升 30% 以上。

所以，如果你用的不是 `Sublime Text`，抓紧来用一下，**或许它不是最适合你的，但它绝对值得你去尝试一下**！ 使用 `Sublime Text` 除了本身好看之外，还有一个重要的原因就在于插件多、功能扩展强大。例如：
[`Emmet`](http://emmet.io/) 强大的代码增强工具，让你及其优雅的写那些丑陋的 HTML 嵌套结构，同时可以自己设置代码模板。详情请看之前写过的入门文章：[前端开发神器 Emmet](http://blog.wpjam.com/series/frontend-develop-tool-emmet/)
[`Sftp`](http://wbond.net/sublime_packages/sftp) 这是一款可以用 `Sublime Text` 直接连接远程 FTP 服务器的插件，轻松实现在线编辑，每次保存的时候，都会自动上传上去，非常方便，还不会用的请看：[在 Sublime Text 2 中使用 SFTP 插件快速编辑远程服务器文件](http://blog.wpjam.com/m/sublime-text-2-sftp/) 还有很多插件，比如高亮代码、代码补充等等，这些需要你自己搜索，但是上面两个是前端必备的。

`Emmet` 帮助你解决丑陋低效 HTML 问题，`Sass` 帮你提高 CSS 的编码效率，前两个问题基本解决了。

## 用好浏览器

### 浏览器的兼容性测试 既然是前端工程师，又是偏向页面重构的，注定与浏览器脱不了干系。需要安装各种浏览器来调试或者做兼容性测试，一般要安装的浏览器和工具如下

[Chrome](http://www.google.com/intl/zh-CN/chrome/) 前端工程师必备的开发用的浏览器。
[Chrome canary](https://www.google.com/intl/zh-CN/chrome/browser/canary.html) 最新开发版的 Chrome 让你体验到最新的 HTML5 等等新功能
[Firefox](http://www.firefox.com.cn/) 必备的开发用的浏览器。
[Safari](http://www.apple.com/cn/safari/) 苹果浏览器，主要用来做兼容性，使用 Mac 电脑的同学，可以用这个浏览器调试手机上的网页。不过 Win 平台上的 Safari 已经停止开发了，在测试的时候，最好使用虚拟机安装 OS X 系统。
IE 这个不需要安装，用 Win 系统的自己带着。要升级到 IE10 或者 IE11。
[IETester](http://www.my-debugbar.com/wiki/IETester/HomePage) 用来模拟早期 IE 浏览器的渲染模式，来快速检测页面兼容性问题。
虚拟机，VMware 或者 [VirtualBox](https://www.virtualbox.org/)（推荐） 都是可以的。

之所以没有提到 Opera，是因为国内占有量很少，而且也改用了内核，调试工具也很难有亮点，所以没有必要再安装了。经常关注行业内比较有权威的数据参考资料，显然对你做浏览器兼容性有很大帮助，例如：

[百度流量研究院](http://tongji.baidu.com/data/browser)(桌面端用户统计） 和 [友盟数据](http://www.umindex.com/#android_device) （移动端设备统计）。

一般的兼容性测试要求如下：

1，普通项目或者个人项目，要求 IE8+ 以上兼容性，允许 CSS3 实现的效果优雅降级，整体不错位即可。

兼容到 IE8 是比较合理和轻松的，因为从 IE8 开始，IE 浏览器算是基本正常的浏览器了，大部分基础的 W3C 标准都正确实现了，不再需要想办法触发 hasLayout 这类东西来表现正常效果等。而且，IE6 和 IE7 的市场份额也在不断减少，你那小破网站会有几个用 IE6、7 访问的？这里只需要用 IE10 或 IE11 的开发者工具大体切换一下就 OK 了。

![](http://pics.naaln.com/blog/2019-05-14-123139.jpg-basicBlog)

2，要求更加严格的兼容性测试，你需要使用 IETester 和虚拟机进行测试。

这点是比较麻烦的，因为 IETester 经常崩溃，有时候根本打不开。而 IE 内置的开发者工具，虽然可以渲染不同版本 IE，但实际上有部分元素被改动过了，所以测试出来的结果，并不一定是真正早期版本浏览器的效果。通常来说 IETester 测试的结果要准确一些。

需要注意，浏览器在不同操作系统中也有一些差异，之前遇到过相关项目，客户老是反馈在 IE8 上有 BUG，我用 IETester 和 IE10 开发者工具都没有问题，后来用了 XP 系统的虚拟机一看，果真是有问题。所以，测试兼容性最好的方法，就是用虚拟机安装各个系统，然后用原生系统 + 原生浏览器来做测试。虽然麻烦，但是在要求非常高的情况下，会更全面一些，一般要安装下面几个虚拟机：

![](http://pics.naaln.com/blog/2019-05-14-123140.jpg-basicBlog)

3，至于 Chrome 和 Firefox 的兼容性，一般是没有问题的，用这些浏览器的人也一般比较高端，会经常升级，所以测试最新版就好了。

### Chrome 还是 Firefox？

最初我是 Firefox 粉，特别热爱 FireBug 这个开发调试插件，但是 Firefox 实在是令人失望，貌似至今没有解决 Flash 的崩溃问题，打开速度很慢，相比 Chrome 的秒开实在是有一定的差距，特别是安装很多插件之后更明显。后来不得已转用 Chrome 作为主要调试工具。下面说一下两款浏览器比较好用的插件和技巧。

#### [Firebug](https://getfirebug.com/) 必备的调试神器，大家都知道，不再赘述

2，响应式设计视图，这是内置在 Firefox Web 开发者工具里面的一个工具，是我目前用过的**最好的用来调试响应式的工具（没有之一）**。打开右上角 `Firefox -> Web 开发者 -> 响应式设计视图` 或者直接摁下 `Shift + Ctrl + m`。具体效果看下图：

![](http://pics.naaln.com/blog/2019-05-14-123143.jpg-basicBlog)

其他的插件不再赘述了。当然，Firefox 也有很多创新的功能，比如在 [最新版的 Firefox 29 中，可以直接在开发者工具里面在线修改 Sass 或 LESS 的源代码](https://hacks.mozilla.org/2014/02/live-editing-sass-and-less-in-the-firefox-developer-tools/)，这些都证明了它是一款优秀开发者浏览器，就是卡的、崩溃的让人受不了，我用的还是 SSD 硬盘。

#### Chrome

Chrome 是当之无愧的最好的前端开发者浏览器，虽然界面和交互不如 Firebug，但是功能异常强大而且更新很快，带来很多创新性的功能。

1. 将开发者工具放在侧边，用来快速看到响应式变化效果。不过不要使用这个来调试，因为它的页面宽度增加了滚动条的宽度，而且分辨率一闪而过，不如 Firefox 的响应式设计视图更加准确。

![](http://pics.naaln.com/blog/2019-05-14-123149.jpg-basicBlog)

插件，帮助你无刷新的查看页面效果。

它需要配合 `Sublime Text` 来使用，当你安装好了之后，点击右上角的图标，插件就会与 `Sublime Text` 链接起来，当你在 `Sublime Text` 中摁下保存，插件就会自动发送刷新指令到 Chrome 中进行刷新，这样就不需要你再切换到浏览器中，刷新浏览器了。[点击查看更多 LiveReload 的说明和帮助](http://livereload.com/)。

1. [Emmet LiveStyle](https://chrome.google.com/webstore/detail/emmet-livestyle/diebikgmpmeppiilkaijjbdgciafajmg) 插件，帮助你实时看到修改的变化，而且支持将调试工具中变化的值保存到对应文件中。

这绝对是一个非常神奇又强大的工具，出自 Emmet 团队，需要 Chrome 和 Sublime Text 的支持。相比于上面的 LiveReload 来说，使用这个插件甚至连保存文件都不需要，当你在编辑文件的时候，无需保存，即可实时的在网页上看到效果。如果你在网页上用开发者工具修改 CSS 也会同步到对应的文件中。这样说太抽象了，可以看下官方的演示视频：

1. 而且还可以在线用开发工具修改别人的网站，并把代码保存下来，还有什么比这个更碉堡？具体使用信息请看 [Emmet LiveStyle 官方文档](http://livestyle.emmet.io/)，这里不再赘述。

Chrome 神奇的开发插件还有很多很多，上面两个算是对我来说帮助非常大的。虽然看上去 `Emmet LiveStyle` 更加强大，已经包含了 `LiveReload` 插件的功能，但实际开发上，需要视情况配合使用。`Emmet LiveStyle` 在开发者工具中调试，会修改到对应的 CSS 文件中，而不会修改 Sass 或者 Less 源文件，这种情况就需要 `LiveReload` 插件来实现无刷新了。

这样，对于有双屏或者一个 23 寸及以上的大显示器的你，根本不需要切换界面以及摁下好多遍保存键了。

## 回顾前端页面重构的开发流程

介绍完了这些工具和方法，下面再来回顾一下改进版的开发流程：

1. 使用准备好的框架模板做初始化，直接复制过来，观看并思考 PSD ，抽出可复用模块，马上开始写代码。
2. 使用 Emmet 和 Sass 等工具，让编码效率和质量大幅度提升。
3. 使用 Chrome 的 LiveReload 和 Emmet LiveStyle 插件，配合双屏或者大屏显示器，实现无切换无刷新实时看到效果。
4. 对于在线修改，可以使用 Sftp 插件直接连接 FTP 服务器，或者使用 Emmet LiveStyle 将在线调试好的 CSS 文件直接保存下来，发给客户覆盖。

恩，配合多种工具的改进版的开发流程，提升了不少的效率和编码质量吧？
