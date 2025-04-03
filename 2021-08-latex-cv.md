---
layout: post
title: Latex 简历
date: 2021/08/25 20:00:00
categories:
- 随笔
tags:
---

我的简历一直都是 `Latex` 写的，模板一直使用的是 `Awesome CV`。

作为一个阶段性的回顾，我重新整理了一下之前的简历，不经意间发现自己已经累积了 5 年的工作经验。

以下主要记录的是准备 `Latex` 的过程。

作为主要的 `Latex` 编辑器，我推荐使用的是 [TexPad](https://www.texpad.com/)。这个软件比较好的规整了文件的结构，以及具有自动编译和提示的能力。

`Latex` 推荐再 [官网](https://www.tug.org/mactex/) 下载。同时，一般只需要下载基础的版本——smaller BasicTeX。

对于其他的依赖文件，可以在之后下载。

在这次安装中还需要安装以下文件：

```
sudo tlmgr update --self
sudo tlmgr install enumitem
sudo tlmgr install xifthen
sudo tlmgr install ifmtarg
sudo tlmgr install sourcesanspro
sudo tlmgr install tcolorbox
sudo tlmgr install environ
sudo tlmgr install ctex
sudo tlmgr install tikzfill
```
