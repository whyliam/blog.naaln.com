---
layout: post
title: VIM添加中文帮助文档
date: 2013/03/31 20:00:00
categories:
- 技术
tags:
- vim
---

安装中文帮助文档之前首先执行下列操作：

在home目录下列新建文件夹  ：

`.vim ------------------>.vim`是一个隐藏文件，不要漏了 「。」

`.vim/plugin ---------->.vim`目录下的plugin文件夹

`.vim/doc ------------->.vim`目录下的doc文件夹

`.vim/syntax --------->.vim`目录下的syntax文件夹

在home目录下新建隐藏文件 `.vimrc`

接着安装vim中文帮助文档：

vim中文文档的主页是：

[http://vimcdoc.sourceforge.net/][1]

它将vim的help文件翻译成为中文，已经支持目前最新的vim 7.3。

如果想使用vim中文文档，可以遵循以下步骤：

**1、下载针对vim7.3的版本的中文帮助文档**

在终端输入代码：

```
$wget http://nchc.dl.sourceforge.net/sourceforge/vimcdoc/vimcdoc-1.8.0.tar.gz
```

PS：wget命令下载到当前目录，例如：你在home目录下执行wget命令的话，下载后压缩文件vimcdoc-1.8.0.tar.gz 将在home目录下。

**2、解压vimcdoc-1.8.0.tar.gz**

解压后其中有个doc文件夹， 将其中的内容全部复制到home/.vim/doc, 或者vim安装目录下的doc目录中。

打开gvim，输入 `：help`  此时vim中的help信息已经是中文的了。

注意:

a. 如果无法显示中文， 在`home/.vimrc`中增加下面这句试试：

```
set helplang=cn
```

b. 帮助文件的文本是utf-8编码的， 如果想用vim直接查看， 需要在`home/.vimrc`中设置：

```
set encoding=utf-8
```

另外：

vim中文文档不会覆盖原英文文档，安装后vim默认使用中文文档。

若想使用英文文档，可在`home/.vimrc`中执行以下命令：

`:set helplang=en （即将cn改为en）`

简要介绍一下vim的配置文件： `/etc/vim/vimrc` 和 `home/.vimrc`

`/etc/vim/vimrc`是全局的配置文件，修改这个配置文件将改变所有用户的vim配置。

这个文件还在目录`/usr/share/vim`目录下创建了链接文件。

默认情况下，debian在这个配置文件中将语法颜色显示关掉了。

某个用户要是需要语法颜色显示，可以在自己的主目录下建立文件。vimrc，在这个文件中修改配置，这样只会影响本用户的显示，这种方式更符合linux的精神。

2. `home/.vimrc`是用户自己的vim配置文件，在这个配置文件中设置的配置只影响该用户自己。

 [1]: http://vimcdoc.sourceforge.net/

