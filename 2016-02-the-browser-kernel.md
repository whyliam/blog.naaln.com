---
layout: post
title: 浏览器内核
date: 2016/02/28 15:01:00
categories:
- 技术
tags:
- HTML
---

## 啥是阅读器内核

阅读器引擎分为排版引擎和 Js 引擎两种。js 引擎即是解释履行 javascript 的，而排版引擎即是履行 html、css 来渲染页面的。阅读器内核指的是这两者。

## 常见的阅读器内核

1. **Trident**：该内核程序在 1997 年的 IE4 中首次被选用，是微软在 Mosaic 代码的基础之上修改而来的，并沿用到 IE11，也被遍及称作「IE 内核」。Trident 实际上是一款开放的内核，其接口内核设计的相当老练，因而才有许多选用 IE 内核而非 IE 的阅读器 (壳阅读器) 涌现。

- 弥补：IE 从版别 11 开端，开端支持 WebGL 技能。IE8 的 JavaScript 引擎是 Jscript，IE9 开端用 Chakra，这两个版别差异很大，IE9 的 Chakra 引擎在后台有一个独立的中心来运转，这个中心是与 IE 阅读器并行的，而且运用 GPU 加快。

1. **Geckos**：是套开放源代码的、以 C++ 编写的网页排版引擎。这软件原本是由网景通讯公司开发的，Netcape6 开端选用该内核。后来的 Mozilla FireFox 也选用了该内核，Geckos 的特色是代码彻底揭露，因而，其可开发程度很高，全世界的程序员都可认为其编写代码，添加功能。Geckos 如今由 Mozilla 基金会保护。
2. **Presto**：是一个由 Opera Software 开发的阅读器排版引擎，该内核在 2003 年的 Opera7 中首次被运用，该款引擎的特色即是渲染速度的优化达到了极致，也是现在公认网页阅读速度最快的阅读器内核。
3. **Webkit**：苹果公司自己的内核，也是苹果的 Safari 阅读器运用的内核。Webkit 引擎包含 WebCore 排版引擎及 JavaScriptCore 解析引擎，均是从 KDE 的 KHTML 及 KJS 引擎衍生而来，它们都是自由软 件，在 GPL 公约下授权，一起支持 BSD 系统的开发。所以 Webkit 也是自由软件，一起开发源代码。在安全方面不受 IE、Firefox 的制约，所以 Safari 阅读器在国内仍是很安全的。

来源：网络上的各种资源收集
