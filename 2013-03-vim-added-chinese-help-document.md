---
layout: post
title: VIM添加中文帮助文档
date: 2013/03/31 20:00:00
categories:
  - 技术
tags:
  - vim
  - vimrc
  - helplang
  - encoding
  - doc
description: 在用户主目录创建隐藏文件夹 .vim 并在其下新建 plugin、doc、syntax 子目录；再在主目录创建 .vimrc；下载并解压针对 vim7.3 的中文帮助文档 vimcdoc-1.8.0.tar.gz，将其中的 doc 内容复制到 .vim/doc；随后在 .vimrc 中加入帮助语言设为中文，即可启用中文帮助，并设置编码为统一编码以保证正确显示；中文帮助不会覆盖英文帮助，需使用英文时
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
