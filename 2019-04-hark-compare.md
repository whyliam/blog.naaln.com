---
title: Beyond Compare 永久试用
categories:
  - 技术
date: 2019/04/21 11:30:53
tags:
  - 破解
---

### 一、原理

Beyond Compare 每次启动后会先检查注册信息，试用期到期后就不能继续使用。解决方法是在启动前，先删除注册信息，然后再启动，这样就可以永久免费试用了。

### 二、下载

首先下载 Beyond Compare 最新版本，链接如下：[https://www.scootersoftware.com/download.php](https://www.scootersoftware.com/download.php)

### 三、安装

下载完成后，直接安装。

### 四、创建 BCompare 文件

1. 进入 Mac 应用程序目录下，找到刚刚安装好的 Beyond Compare，路径如下 `/Applications/Beyond\ Compare.app/Contents/MacOS/`。
2. 修改启动程序文件 BCompare 为 `BCompare.real`。
3. 在当前目录下新建一个文件 BCompare，文件内容如下：

```
#!/bin/bash
rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
"`dirname "$0"`"/BCompare.real $@
```

![](http://pics.naaln.com/blog/2019-04-15558501171205.jpg-basicBlog)

1. 保存 BCompare 文件。
2. 修改文件的权限：

以上步骤完成后，再次打开 Beyond Compare 就可以正常使用了，enjoy it。
