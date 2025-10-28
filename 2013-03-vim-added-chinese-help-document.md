---
layout: post
title: VIM添加中文帮助文档
date: 2013/03/31 20:00:00
categories:
- 技术
tags:
- vim
- Linux
- 配置
- 中文文档
- vimcdoc
- 编辑器
- 教程
description: Vim编辑器中文帮助文档完整安装配置指南。教程从创建.vim目录结构开始：建立.vim、.vim/plugin、.vim/doc、.vim/syntax等目录，以及用户配置文件.vimrc。详细介绍从vimcdoc.sf.net下载适配Vim 7.3的中文文档、安装步骤（解压doc文件夹到vim/doc目录）、配置helplang和encoding参数。提供了中英文帮助文档切换方法（helplang=en/cn）、UTF-8编码设置、全局配置/etc/vim/vimrc与用户配置/home/.vimrc的区别。教程强调Linux精神：用户个性化配置优先于全局配置。为Vim中文用户提供了本地化帮助文档的完整解决方案。
---

安装中文帮助文档之前首先执行下列操作：

在 home 目录下列新建文件夹 ：

`.vim ------------------>.vim` 是一个隐藏文件，不要漏了「。」

`.vim/plugin ---------->.vim` 目录下的 plugin 文件夹

`.vim/doc ------------->.vim` 目录下的 doc 文件夹

`.vim/syntax --------->.vim` 目录下的 syntax 文件夹

在 home 目录下新建隐藏文件 `.vimrc`

接着安装 vim 中文帮助文档：

vim 中文文档的主页是：

[http://vimcdoc.sourceforge.net/][1]

它将 vim 的 help 文件翻译成为中文，已经支持目前最新的 vim 7.3。

如果想使用 vim 中文文档，可以遵循以下步骤：

**1、下载针对 vim7.3 的版本的中文帮助文档**

在终端输入代码：

```
$wget http://nchc.dl.sourceforge.net/sourceforge/vimcdoc/vimcdoc-1.8.0.tar.gz
```

PS：wget 命令下载到当前目录，例如：你在 home 目录下执行 wget 命令的话，下载后压缩文件 vimcdoc-1.8.0.tar.gz 将在 home 目录下。

**2、解压 vimcdoc-1.8.0.tar.gz**

解压后其中有个 doc 文件夹， 将其中的内容全部复制到 home/.vim/doc, 或者 vim 安装目录下的 doc 目录中。

打开 gvim，输入 `：help` 此时 vim 中的 help 信息已经是中文的了。

注意:

a. 如果无法显示中文， 在 `home/.vimrc` 中增加下面这句试试：

```
set helplang=cn
```

b. 帮助文件的文本是 utf-8 编码的， 如果想用 vim 直接查看， 需要在 `home/.vimrc` 中设置：

```
set encoding=utf-8
```

另外：

vim 中文文档不会覆盖原英文文档，安装后 vim 默认使用中文文档。

若想使用英文文档，可在 `home/.vimrc` 中执行以下命令：

`:set helplang=en （即将cn改为en）`

简要介绍一下 vim 的配置文件： `/etc/vim/vimrc` 和 `home/.vimrc`

`/etc/vim/vimrc` 是全局的配置文件，修改这个配置文件将改变所有用户的 vim 配置。

这个文件还在目录 `/usr/share/vim` 目录下创建了链接文件。

默认情况下，debian 在这个配置文件中将语法颜色显示关掉了。

某个用户要是需要语法颜色显示，可以在自己的主目录下建立文件。vimrc，在这个文件中修改配置，这样只会影响本用户的显示，这种方式更符合 linux 的精神。

1. `home/.vimrc` 是用户自己的 vim 配置文件，在这个配置文件中设置的配置只影响该用户自己。

 [1]: http://vimcdoc.sourceforge.net/
