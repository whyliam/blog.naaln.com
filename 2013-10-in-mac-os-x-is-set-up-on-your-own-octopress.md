---
layout: post
title: 在Mac OS X上架设属于你的Octopress
date: 2013/10/19 04:24:00
categories:
- 技术
tags:
- Octopress
- Mac
- 博客
- GitHub
- 静态网站
description: Mac OS X系统下Octopress博客系统完整搭建教程。作者分享了从WordPress迁移到Octopress的经历，详细介绍在Mac上配置Octopress的全过程。教程包括：安装GCC、Xcode、Homebrew包管理器、Git版本控制、RVM Ruby版本管理器、Ruby 1.9.2环境、Pow服务器；克隆Octopress仓库、安装Bundler依赖、运行rake install；配置GitHub Pages连接、生成静态HTML、部署到GitHub；绑定自定义域名；创建和发布新文章；推荐使用Mou作为Markdown编辑器。文章强调Octopress的Geek特性，适合厌倦WordPress臃肿和技术人员使用。
---

终于，耗时 N 天，把我的博客从 WordPress 转到了 Octopress，并且很无耻的托管到 GitHub 上面，免费高速～ 这篇文章教大家简单的 Octopress 的安装与使用。（如果你用的 Windows，你可能会碰到一堆雷⋯⋯强烈推荐 Linux 或者 Mac OS X）

## 1.安装

Octopress 的安装不同于 WordPress，WordPress 是安装到服务器上面的，Octopress 是安装在你本地的（如果选择 Deploy 到 GitHub 上）。

首先需要准备的是 Ruby 环境：（下面教程均在 Mac OS X Lion 10.7.2 测试通过）

1. 参考这篇文章，安装 GCC：[http://www.memoryz.info/install-gcc-on-mac.html][1]

如果你已经安装了 Xcode，则无需重负安装 GCC

1. 安装 [Homebrew][2]（或者你可以参考：[https://github.com/mxcl/homebrew/wiki/installation][3])：

```
   $ /usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/gist/323731)"
   $ brew update
```

2. 安装 Git：

```
   $ brew install git
```

3. 安装

[RVM][4]（或者参考： [http://beginrescueend.com/rvm/install/][5] ）：

```
   $ bash -s stable < <(curl -s https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
```

1. 安装 Ruby 1.9.2

```
   $ rvm install 1.9.2
   $ rvm 1.9.2 --default
```

2. 安装 Pow

```
   $ curl get.pow.cx | sh
```

3. 先 cd 到一个好的目录，比如 Desktop，然后下载 Octopress：

```
   $ git clone git://github.com/imathis/octopress.git octopress
   $ cd octopress
```

4. 安装一些东西：

```
   $ gem install bundler
   $ rbenv rehash
   $ bundle install
   $ rake install
```

这样，就安装好了 Octopress 了，输入 `rake preview`，从 localhost:4000 可以预览结果

## 2.发布

1. 在 GitHub 名为「http://你的 GitHub 用户名。github.com」的 repository。
2. 在 Octopress 目录里面设定资料：

```
   $ rake setup_github_pages
```

3. 生成 HTML：

```
   $ rake generate
```

4. 发布：

```
   $ rake deploy
```

这样等待几分钟，就可以通过 http://你的 GitHub 用户名。github.com 查看你的全新的 Octopress BLOG！

## 3.绑定域名

```
   $ echo '你要绑定的域名' >> source/CNAME
```

然后，将你要绑定的域名 CNAME 到 http://你的 GitHub 用户名。github.com，如果是@纪录，需要加入 207.97.227.245。

## 4.发布文章

```
   $ rake new_post['title']
```

运行上面的命令，Octopress 会在 source/_posts 生成一个 markdown（推荐阅读：[http://markdown.tw/][6]）文件

更多的如何编辑文档，请参阅：[http://octopress.org/docs/][7]

在 Mac 下，Markdown 编辑器推荐一款国产的小软件：Mou [http://mouapp.com/][8]

当你把 Markdown 文档编辑好以后再运行 rake generate 和 rake deploy 发布到 GitHub 上面

## 5.总结

很多的技巧，比如修改模板，Octopress 官方上有详细的说明，于是我不再赘述。经过几天使用，这东西确实是 Geek 向，包括修改模板、导入评论等等已经让我无奈了 N 次⋯⋯

如果你对 PHP＋MYSQL 的 WordPress 的臃肿和那难用后台编辑器不能忍受，不妨尝试一下 Octopress。同时，托管到 GitHub 上面也无需再支出高昂的空间费用。

 [1]: http://www.memoryz.info/install-gcc-on-mac.html

 [2]: http://mxcl.github.com/homebrew/

 [3]: https://github.com/mxcl/homebrew/wiki/installation

 [4]: http://beginrescueend.com/

 [5]: http://beginrescueend.com/rvm/install/

 [6]: http://markdown.tw/

 [7]: http://octopress.org/docs/

 [8]: http://mouapp.com/
