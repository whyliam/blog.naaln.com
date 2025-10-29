---
layout: post
title: Awesome-CV
date: 2019/07/14 20:00:00
categories:
  - 技术
tags:
  - LaTeX
  - MacTeX
  - TeXLive
  - FontAwesome
  - AwesomeCV
description: 
  使用MacTeX安装AwesomeCV简历模板的步骤包括下载精简版MacTeX、配置CTAN镜像、使用tlmgr安装enumitem、xifthen、sourcesanspro、tcolorbox、FontAwesome等宏包，并提供FontAwesome字体安装指引，帮助快速生成专业LaTeX简历。
---

我简历一直用的是 [`Awesome-CV`](https://github.com/posquit0/Awesome-CV) 的简历模板。

![](http://pics.naaln.com/blog/2019-07-14-091539.jpg-basicBlog)

### 安装过程

1. 安装 [`mactex`](https://tug.org/mactex/)。安装 `Smaller Download` 就行了，不需要安装完整版。安装完整版需要 20G，精简版才 200M。
2. 安装其他的库。

```bash
brew install tlmgr
sudo tlmgr option repository https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/tlnet
sudo tlmgr update --self
sudo tlmgr install enumitem
sudo tlmgr install xifthen
sudo tlmgr install ifmtarg
sudo tlmgr install sourcesanspro
sudo tlmgr install tcolorbox
sudo tlmgr install environ
sudo tlmgr install trimspaces
sudo tlmgr install FontAwesome
sudo tlmgr install lm-math
sudo tlmgr install ctex
sudo tlmgr install zhnumber

# 还需要安装 fontawesome 的字体
# https://github.com/xdanaux/fontawesome-latex
```
