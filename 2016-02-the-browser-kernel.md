---
layout: post
title: 浏览器内核
date: 2016/02/28 15:01:00
categories:
- 技术
tags:
- html
---

## 啥是阅读器内核

阅读器引擎分为排版引擎和Js引擎两种。js引擎即是解释履行javascript的，而排版引擎即是履行html、css来渲染页面的。阅读器内核指的是这两者。

## 常见的阅读器内核

1. **Trident**：该内核程序在1997年的IE4中首次被选用，是微软在Mosaic代码的基础之上修改而来的，并沿用到IE11，也被遍及称作「IE内核」。Trident实际上是一款开放的内核，其接口内核设计的相当老练，因而才有许多选用IE内核而非IE的阅读器(壳阅读器)涌现。

- 弥补：IE从版别11开端，开端支持WebGL技能。IE8的JavaScript引擎是Jscript，IE9开端用Chakra，这两个版别差异很大，IE9的Chakra引擎在后台有一个独立的中心来运转，这个中心是与IE阅读器并行的，而且运用GPU加快。

2. **Geckos**：是套开放源代码的、以C++编写的网页排版引擎。这软件原本是由网景通讯公司开发的，Netcape6开端选用该内核。后来的 Mozilla FireFox也选用了该内核，Geckos的特色是代码彻底揭露，因而，其可开发程度很高，全世界的程序员都可认为其编写代码，添加功能。Geckos 如今由Mozilla基金会保护。

3. **Presto**：是一个由Opera Software开发的阅读器排版引擎，该内核在2003年的Opera7中首次被运用，该款引擎的特色即是渲染速度的优化达到了极致，也是现在公认网页阅读速度最快的阅读器内核。

4. **Webkit**：苹果公司自己的内核，也是苹果的Safari阅读器运用的内核。 Webkit引擎包含WebCore排版引擎及JavaScriptCore解析引擎，均是从KDE的KHTML及KJS引擎衍生而来，它们都是自由软 件，在GPL公约下授权，一起支持BSD系统的开发。所以Webkit也是自由软件，一起开发源代码。在安全方面不受IE、Firefox的制约，所以 Safari阅读器在国内仍是很安全的。

来源：网络上的各种资源收集
