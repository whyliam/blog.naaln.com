---
title: 5分钟了解微信的 WeSketch
categories:
  - 产品
date: 2017/07/09 09:50:04
tags:
  - Sketch
---

## 前言

> 一个强大的 Sketch 插件合集，由微信设计团队量身打造，让设计师和开发者更佳高效的使用 Sketch。

* 更高效的团队协作，如：UI Kit 同步、色板同步等。
* 更快捷的交互设计，如：图标库、自动连线、标记注释、全局替换文字、字体、颜色。
* 更精准的前端还原，如：补齐宽高导出图片、导出 CSS 代码（支持小程序）等。

### 界面预览

![](http://pics.naaln.com/blog/2019-01-14-031737.jpg-basicBlog)

### 下载地址

Github：[weixin/WeSketch](https://github.com/weixin/WeSketch/blob/master/README-zhCN.md)

## 面板功能

对于一个尝鲜者，第一步就是找到插件的工具面板。我们先来试试面板上的十一个功能。

![](http://pics.naaln.com/blog/2019-01-14-031739.jpg-basicBlog)

### 1、连线／Link

众所周知，四娃和五娃是一起出生的，可以把他俩连在一起。

![](http://pics.naaln.com/blog/2019-01-14-031740.gif-basicBlog)

线有点粗哈哈，距离过短不适合使用。线不在 Artboard 上，是锁定在 Page 上的，因此不会跟随 UI 元素的拖动（没有 Omni Graffle 中磁力点的功能）。

适合设计师在标注页面间跳转逻辑时使用。

### 2、标注／Mark

六娃常年隐身，我们需要标注下他的位置。

![](http://pics.naaln.com/blog/2019-01-14-031742.gif-basicBlog)

选中目标后点击可以点击三下，第一下标注在右边出现，第二下会将标注换到左边，第三下则会取消。

目前只支持数字序号。这个应该是要配合文本框使用的，在页面上逻辑较复杂处 mark 一下，然后在文本框里打上序号并进行细节描述。

![](http://pics.naaln.com/blog/2019-01-14-031742.jpg-basicBlog)

删除中间序号的话，会让你选择是保留序号还是重置序号。

### 3、Font／字体替换

![](http://pics.naaln.com/blog/2019-01-14-031743.gif-basicBlog)

可以替换整个文件或者当前页面的字体。

### 4、Text／文本替换

四娃擅火，他希望大家叫他火娃。

![](http://pics.naaln.com/blog/2019-01-14-031745.gif-basicBlog)

同样支持全文件以及当前页面的替换，但是用词和 Font 功能中不同，不知道是不是不同的工程师开发的。

另外，支持正则表达式，懂行的同学可以慢慢尝试。如果 PM 要求把页面中所有的「手机」替换为「移动设备」，这个功能可以帮上不少忙。

### 5、Color／颜色替换

六娃闪现后继续隐身。

![](http://pics.naaln.com/blog/2019-01-14-031745.jpg-basicBlog)

有时候会接到这么一个需求，需要微调下整个产品的主色调。需求虽小，工作量却是非常饱和，先从 symbol 下手，然后还要挨个界面查漏补缺。

颜色替换功能则解决了这个设计师头疼的问题，简化了设计稿中全局改色的操作。

### 6、Icon／图标库

他们发现爷爷没了。

![](http://pics.naaln.com/blog/2019-01-14-031748.gif-basicBlog)

不支持直接拖移导出。支持自定义图标的尺寸和颜色。面板上方有筛选功能，但目前均只有一个选项，应该是还在完善中。

每个成熟的设计团队都有自己的一套图标库，有的用文件夹管理，有的全部放在 .psd 里，有的放在 Sketch 文件里。

还有些设计师喜欢去阿里的 Icon Font 上找图标素材。这个图标库则是无缝嵌入了设计流程，让设计师的注意力都停留在 Sketch 里，而不用转场。另外安利大家两个应用，Nucleo 和 Icons8，都是非常好用的图标库。

### 7、UI Kit／同步 UI 库

![](http://pics.naaln.com/blog/2019-01-14-031748.jpg-basicBlog)

可以导入仅作演示，并非放出的工具，希望大家制作自己的 Kit。可以将团队的 UI Kit 快速导入，不需要原始的粘贴复制大法了。

### 8、Palette／同步色板

![](http://pics.naaln.com/blog/2019-01-14-031749.jpg-basicBlog)

该功能可将其他 Sketch 文件中的色彩配置导入。

### 9、Resize／补齐宽高

大娃成熟了，出山。

![](http://pics.naaln.com/blog/2019-01-14-031751.jpg-basicBlog)

这个功能名字叫补齐宽高，其实就是一种高自由度的切图导出方式，比较实用。

这个功能用在设计最后环节，可以根据工程师的需求选择格式、分辨率甚至素材在切出图片中的布局。

### 10、Picker／快捷取色

![](http://pics.naaln.com/blog/2019-01-14-031751.gif-basicBlog)

### 11、CSS／生成代码

![](http://pics.naaln.com/blog/2019-01-14-031752.gif-basicBlog)

## 其他功能

在插件菜单中，还有几个的功能可能会用到。

### 1、标注样式设置

![](http://pics.naaln.com/blog/2019-01-14-031753.jpg-basicBlog)

这这里更改连线和标注的颜色和线宽。

### 2、资源路径设置

![](http://pics.naaln.com/blog/2019-01-14-031754.jpg-basicBlog)

在这里添加团队 UI Kit 的存储路径，方便导入。

### 3、导出图片格式设置（支持小程序）

![](http://pics.naaln.com/blog/2019-01-14-031755.jpg-basicBlog) 

### 4、插件设置

![](http://pics.naaln.com/blog/2019-01-14-031756.jpg-basicBlog)

可以设置各个功能的快捷键以及是否在工具面板上出现。