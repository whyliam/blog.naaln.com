---
layout: post
title: echoprint服务端ubuntu环境塔建
date: 2013/09/16 08:16:00
categories:
  - 技术
tags:
  - ubuntu
  - java
  - python
  - webpy
  - echoprint
description: 
  本文介绍了在Ubuntu上搭建运行音频指纹服务器的完整流程，包括安装Java、Python、web.py，配置tokyocabinet和tokyotyrant，启动ttserver，以及启动音频指纹服务器的步骤和注意事项。
---

先配置一下 ubuntu 的环境以备后用，安装这些东西：

```
> java

> python 2.5 or higher

> simplejson （if python < 2.6)

> web.py

```

## 首先安装 web.py

在 google 搜索一下 web.py，找到 [http://webpy.org/](http://webpy.org/)

看到可以直接使用命令安装，但是输入命令后发现 easy_install 没有，那么先安装 easy_install：

先到 [http://pypi.python.org/packages/source/s/setuptools/setuptools-0.6c11.tar.gz#md5=7df2a529a074f613b509fb44feefe74e](http://pypi.python.org/packages/source/s/setuptools/setuptools-0.6c11.tar.gz#md5=7df2a529a074f613b509fb44feefe74e)

下载 steuptools，解压并到该目录下安装，命令是 `sudo python setup.py install`

安装之后就可以用了

之后安装 web.py，命令 `sudo easy_install web.py`

直接使用了 python 命令，并没有安装 python，因为 ubuntu 已经有的，simplejson 不知道有没有，暂且不管，有问题了再解决。

## 下面是安装 java，这个有点麻烦

首先到这里 [http://www.oracle.com](http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase6-419409.html?origref=http://www.cnblogs.com/wangshuo/archive/2011/06/01/2065669.html)

下载如图：

![](http://pics.naaln.com/blog/2019-01-14-062428.jpg-basicBlog)

建立一个 java 目录，`sudo mkdir /usr/local/java`

把 bin 文件放进来，转到 bin 文件所在目录，执行命令 `sudo cp <文件名> /usr/local/java`

接着修改 bin 文件的权限 `sudo chmod 777 <文件名>`

之后运行 bin 文件 `sudo./<文件名>`

如果遇到 Failed to extract the files，则执行命令 `sudo apt-get install g++-multilib`

之后再次运行 bin 文件，看到 Done 表示成功了。这个时候/usr/local/java 下就多了一个 jdk1.6.0_43 文件夹。

然后打开 profile 文件，`sudo gedit /etc/profile`

修改环境变量如下图：

![](http://pics.naaln.com/blog/2019-01-14-062429.jpg-basicBlog)

图上是 jdk1.6.0_30，要改成 jdk1.6.0_43。

改了环境变量要重启，或者 source 一下，`sudo source /etc/profile`

我 source 了一下不行，还是要重启……

重启后输入 `java -version`，查看版本

输入 `javac -version`，查看版本信息：

	javac 1.7.0_21

这样就成功了，用 vim 写一个 HelloWorld.java 文件试一试：

![](http://pics.naaln.com/blog/2019-01-14-062431.jpg-basicBlog)

然后 sudo javac HelloWorld.java

文件夹下会生成一个 HelloWorld.class 文件，再输入命令 `sudo java HelloWorld` 就可以看到结果了，至于 javac

和 java 命令暂时不明白其运行机制，貌似 javac 就是编译吧。

接下来要让 echoprint-server 运行起来，按照下面的步骤：

1. 首先安装 tokyocabinet，网站：<a href="http://fallabs.com/tokyocabinet/">http://fallabs.com/tokyocabinet/</a>

下载到 1.4.48 版本

我的 ubuntu 的用户名为 yuren，将其解压到我的目录下，接着进入该目录

	cd tokyocabinet-1.4.48

	sudo apt-get install zlib1g-dev（lib后是数字1，不是字母L）

	sudo apt-get install libbz2-dev

	sudo ./configure

	sudo make install

1. 然后安装 tokyotyrant，网站：<a href="http://fallabs.com/tokyotyrant/">http://fallabs.com/tokyotyrant/</a>

下载到 1.4.41 版本，解压到我的目录下，接着进入该目录

	cd tokyotyrant-1.4.41

	sudo ./configure <wbr></wbr>

	make

	sudo make install

之前是按下面的方法装的，发现不行，还是按上面的装，如果按上面还不行，就按下面的装下，总有一个能行。

	cd tokyocabinet-1.4.32

	sudo apt-get install zlib1g-dev

	sudo apt-get install libbz2-dev

	sudo mkdir /usr/local/tokyocabinet-1.4.21/

	./configure --prefix=/usr/local/tokyocabinet-1.4.21/

	make

	sudo make install

	cd tokyotyrant-1.1.33

	sudo mkdir /usr/local/tokyotyrant-1.1.33

	./configure --prefix=/usr/local/tokyotyrant-1.1.33/ --with-tc=/usr/local/tokyocabinet-1.4.32/

	make

	sudo make install

安装完之后运行 `sudo ttservctl start`，然后查看路径/usr/ttserver/casket.tch，这时候就有这个文件了，然后重启一下。

重启可以运行 ttserver 了，在路径/usr/local/下有个 bin 文件夹和 sbin 文件夹，bin 文件夹下是 ttserver 命令，sbin 文件夹下 ttservctl 命令，这两个命令都可以开启 ttserver，但是是两种不同的模式。

我按照 echoprint-server 的 readme 文件中的说法，用 ttservctl start 命令开启 ttserver，这时候 ttserver 的写入数据库是写入到/var/ttserver/casket.tch 中，开启后再命令行输入命令：

	tcrmgr inform -port 1978 -st localhost

可以看到 type 那一项是表示写入上述文件的，但是用这种方式开启 ttserver 在后面会出现错误，提示 ttserver 没有开启，因此必须用 ttserver 命令来开启服务器。而 ttserver 命令默认是写入内存中的，因此必须在命令中附加参数来开启，在终端输入命令：

	sudo ttserver /var/ttserver/casket.tch

这样开启的 ttserver 才使得后面不出错，再次输入查看命令可以看到这时候的 type 仍旧是指向 casket.tch 的，如果这里的 type 是 void 或者「*」，或者指向内存的话，后面大量的输入数据是会出错的。

最终就是要保证用 `sudo ttserver /var/ttserver/casket.tch` 命令运行 ttserver 不出错就可以了，如果有问题就重新安装 ttserver，多重启几次，总是可以运行起来的。

如果启动 ttserver 碰到这样的出错信息:

	error while loading shared libraries:libtokyocabinet.so.8: cannot open share object file:No such file or dirctory. <wbr></wbr>

使用如下命令来修复错误：

	cd /usr/local/tokyotyrant-1.4.41/

	ln -s /usr/local/tokyotyrant-1.4.41/lib/libtokyocabinet.so.8.lib/

1. 接下来安装 echoprint server

可以下载压缩包解压，网站：[https://github.com/echonest](https://github.com/echonest) 这里可以找到 echoprint-server

在这里是使用命令行下载的，如下：

首先建立一个目录存放 echoprint-server，我存放目录是/home/yuren/echoprint-server

	cd /home/yuren/echoprint-server

	git init

	git pull git://github.com/echonest/echoprint-server.git

	cd echoprint-server/solr/solr

	java -Dsolr.solr.home=/home/yuren/echoprint-server/solr/solr/solr/ -	Djava.awt.headless=true -jar start.jar

运行完开启了，注意将我的用户名换成你自己的，如果是从网站直接下载的服务端要把服务器的文件夹改成 echoprint-server。

在这里可以再安装几个东西，如果已经有了就不用了，不过装上也没啥不好，不想装也没事儿。

	sudo apt-get install python-setuptools

	sudo easy_install web.py

	sudo easy_install pyechonest

现在服务器就算是搭起来了，但是要获得在 windows 下的建库和查询，就要在 ubuntu 下编译 codegen，并在 ubuntu 下进行指纹匹配的工作，这些在后面会继续介绍。

ref: [http://blog.sina.com.cn/s/blog_7985987f01019eik.html](http://blog.sina.com.cn/s/blog_7985987f01019eik.html)
