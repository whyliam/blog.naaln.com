---
layout: post
title: 如何提升 CSS 选择器性能
date: 2014/08/11 00:51:00
categories:
  - 技术
tags:
  - CSS
  - Selector
  - Performance
  - Optimization
description: 
  CSS选择器的性能损耗源于浏览器从右向左匹配选择器和元素的机制。为优化性能，避免使用通配符、子选择器等高开销选择器。遵循选择器效率排序：ID选择器最高，后代选择器较低。使用类或ID选择器，减少嵌套，利用继承提升性能。平衡高性能与可维护性，针对大型网站如淘宝，性能优化显著；普通网站优先保证可维护性。
---

### CSS 选择器性能损耗来自？

CSS 选择器对性能的影响源于**浏览器匹配选择器和文档元素时所消耗的时间**，所以优化选择器的原则是应尽量避免使用消耗更多匹配时间的选择器。而在这之前我们需要了解 CSS 选择器匹配的机制， 如子选择器规则：

```
   header > a {font-weight:blod;}
```

我们中的大多数人都是从左到右的阅读习惯，会习惯性的设定浏览器也是从左到右的方式进行匹配规则，推测这条规则的开销并不高。

我们会假设浏览器以这样的方式工作：寻找 id 为 header 的元素，然后将样式规则应用到直系子元素中的 a 元素上。我们知道文档中只有一个 id 为 header 的元素，并且它只有几个 a 元素的子节点，所以这个 CSS 选择器应该相当高效。

事实上，却恰恰相反，CSS 选择器是从右到左进行规则匹配。了解这个机制后，例子中看似高效的选择器在实际中的匹配开销是很高的，浏览器必须遍历页面中所有的 a 元素并且确定其父元素的 id 是否为 header。

如果把例子的子选择器改为后代选择器则会开销更多，在遍历页面中所有 a 元素后还需向其上级遍历直到根节点。

```
   header  a {font-weight:blod;}
```

理解了 CSS 选择器从右到左匹配的机制后，明白只要当前选择符的左边还有其他选择符，样式系统就会继续向左移动，直到找到和规则匹配的选择符，或者因为不匹配而退出。我们把最右边选择符称之为关键选择器。

如何减少 CSS 选择器性能损耗？ Google 资深 web 开发工程师 Steve Souders 对 CSS 选择器的执行效率从高到低做了一个排序：

1. id 选择器（#myid）
2. 类选择器（。myclassname）
3. 标签选择器（div,h1,p）
4. 相邻选择器（h1+p）
5. 子选择器（ul < li）
6. 后代选择器（li a）
7. 通配符选择器（*）
8. 属性选择器（a[rel="external"]）
9. 伪类选择器（a:hover, li:nth-child）

根据以上「选择器匹配」与「选择器执行效率」原则，我们可以通过避免不恰当的使用，提升 CSS 选择器性能。

#### 1、避免使用通用选择器

```
   .content * {color: red;}
```

浏览器匹配文档中所有的元素后分别向上逐级匹配 class 为 content 的元素，直到文档的根节点。因此其匹配开销是非常大的，所以应避免使用关键选择器是通配选择器的情况。

#### 2、避免使用标签或 Class 选择器限制 Id 选择器

```
   #BAD
   button backButton {…}
   #BAD
   .menu-left newMenuIcon {…}
   #GOOD
   backButton {…}
   #GOOD
   newMenuIcon {…}
```

#### 3、避免使用标签限制 Class 选择器

```
   #BAD
   treecell.indented {…}
   #GOOD
   .treecell-indented {…}
   #BEST
   .hierarchy-deep {…}
```

4、避免使用多层标签选择器。使用 class 选择器替换，减少 css 查找

```
   #BAD
   treeitem[mailfolder="true"] > treerow > treecell {…}
   #GOOD
   .treecell-mailfolder {…}
```

5、避免使用子选择器

```
   #BAD
   treehead treerow treecell {…}
   #BETTER, BUT STILL BAD
   treehead > treerow > treecell {…}
   #GOOD
   .treecell-header {…}
```

6、使用继承

```
   #BAD
   bookmarkMenuItem > .menu-left { list-style-image: url(blah) }
   #GOOD
   bookmarkMenuItem { list-style-image: url(blah) }
```

### 思考

作为一名前端工程师，应该具有「提升 CSS 选择器性能」的意识，但实际应用中，是否需要完全贯彻这些原则呢？这是一个探索「追求高性能」与「可维护性」两者平衡的问题。

对于「淘宝」，每个页面的 DOM 元素超过 1000 个以上的网站来说，通过限制 CSS 选择器，改善性能是具有实际意义的。但对于普通网站，我更倾向于保证「语义化」和「可维护性」的前提下，提升 CSS 选择器性能。

参考「1」[Efficiently Rendering CSS][1]「2」[Writing efficient CSS][2]「3」[Performance Impact of CSS Selectors][3]「4」[CSS Test Creator][4]「5」[高性能 CSS][5]「6」[如何撰寫有效率的 CSS 選擇器][6]

[1]: http://css-tricks.com/efficiently-rendering-css/

[2]: https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS?redirectlocale=en-US&redirectslug=Writing_Efficient_CSS

[3]: http://www.stevesouders.com/blog/2009/03/10/performance-impact-of-css-selectors/

[4]: http://stevesouders.com/efws/css-selectors/csscreate.php?n=1000&sel=div+div+div+div+div+div+a&body=background%3A+%23CFD&ne=1000

[5]: http://www.alloyteam.com/2012/10/high-performance-css/

[6]: http://www.mrmu.com.tw/2011/10/11/writing-efficient-css-selectors/
