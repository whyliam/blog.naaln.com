---
layout: post
title: echoprint服务端ubuntu环境塔建
date: 2013/09/16 08:16:00
categories:
- 技术
tags:
- echoprint
---

先配置一下ubuntu的环境以备后用，安装这些东西：

```
> java

> python 2.5 or higher

> simplejson （if python < 2.6)

> web.py

```

## 首先安装web.py

在google搜索一下web.py，找到 [http://webpy.org/](http://webpy.org/)

看到可以直接使用命令安装，但是输入命令后发现easy_install没有，那么先安装easy_install：

先到[http://pypi.python.org/packages/source/s/setuptools/setuptools-0.6c11.tar.gz#md5=7df2a529a074f613b509fb44feefe74e](http://pypi.python.org/packages/source/s/setuptools/setuptools-0.6c11.tar.gz#md5=7df2a529a074f613b509fb44feefe74e)

下载steuptools，解压并到该目录下安装，命令是`sudo python setup.py install`

安装之后就可以用了

之后安装web.py，命令`sudo easy_install web.py`

直接使用了python命令，并没有安装python，因为ubuntu已经有的，simplejson不知道有没有，暂且不管，有问题了再解决。

## 下面是安装java，这个有点麻烦。

首先到这里 [http://www.oracle.com](http://www.oracle.com/technetwork/java/javasebusiness/downloads/java-archive-downloads-javase6-419409.html?origref=http://www.cnblogs.com/wangshuo/archive/2011/06/01/2065669.html)

下载如图：

![](http://pics.naaln.com/blog/2019-01-14-062428.jpg-basicBlog)

建立一个java目录，`sudo mkdir /usr/local/java`

把bin文件放进来，转到bin文件所在目录，执行命令 `sudo cp <文件名> /usr/local/java`

接着修改bin文件的权限 `sudo chmod 777 <文件名>`

之后运行bin文件 `sudo ./<文件名>`

如果遇到Failed to extract the files，则执行命令`sudo apt-get install g++-multilib`

之后再次运行bin文件，看到Done表示成功了。这个时候/usr/local/java下就多了一个jdk1.6.0_43文件夹。

然后打开profile文件，`sudo gedit /etc/profile`

修改环境变量如下图：

![](http://pics.naaln.com/blog/2019-01-14-062429.jpg-basicBlog)

图上是jdk1.6.0_30，要改成jdk1.6.0_43。

改了环境变量要重启，或者source一下，`sudo source /etc/profile`

我source了一下不行，还是要重启……

重启后输入`java -version`，查看版本

输入`javac -version`，查看版本信息：

	javac 1.7.0_21

这样就成功了，用vim写一个HelloWorld.java文件试一试：

![](http://pics.naaln.com/blog/2019-01-14-062431.jpg-basicBlog)

然后sudo javac HelloWorld.java

文件夹下会生成一个HelloWorld.class文件，再输入命令 `sudo java HelloWorld`就可以看到结果了，至于javac

和java命令暂时不明白其运行机制，貌似javac就是编译吧。

接下来要让echoprint-server运行起来，按照下面的步骤：

1. 首先安装tokyocabinet，网站：<a href="http://fallabs.com/tokyocabinet/">http://fallabs.com/tokyocabinet/</a>

下载到1.4.48版本

我的ubuntu的用户名为yuren，将其解压到我的目录下，接着进入该目录

	cd tokyocabinet-1.4.48

	sudo apt-get install zlib1g-dev（lib后是数字1，不是字母L）

	sudo apt-get install libbz2-dev

	sudo ./configure

	sudo make install

2. 然后安装tokyotyrant，网站：<a href="http://fallabs.com/tokyotyrant/">http://fallabs.com/tokyotyrant/</a>

下载到1.4.41版本，解压到我的目录下，接着进入该目录

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

安装完之后运行`sudo ttservctl start`，然后查看路径/usr/ttserver/casket.tch，这时候就有这个文件了，然后重启一下。

重启可以运行ttserver了，在路径/usr/local/下有个bin文件夹和sbin文件夹，bin文件夹下是ttserver命令，sbin文件夹下ttservctl命令，这两个命令都可以开启ttserver，但是是两种不同的模式。

我按照echoprint-server的readme文件中的说法，用ttservctl start命令开启ttserver，这时候ttserver的写入数据库是写入到/var/ttserver/casket.tch中，开启后再命令行输入命令：

	tcrmgr inform -port 1978 -st localhost

可以看到type那一项是表示写入上述文件的，但是用这种方式开启ttserver在后面会出现错误，提示ttserver没有开启，因此必须用ttserver命令来开启服务器。而ttserver命令默认是写入内存中的，因此必须在命令中附加参数来开启，在终端输入命令：

	sudo ttserver /var/ttserver/casket.tch

这样开启的ttserver才使得后面不出错，再次输入查看命令可以看到这时候的type仍旧是指向casket.tch的，如果这里的type是void或者「*」，或者指向内存的话，后面大量的输入数据是会出错的。

最终就是要保证用`sudo ttserver /var/ttserver/casket.tch`命令运行ttserver不出错就可以了，如果有问题就重新安装ttserver，多重启几次，总是可以运行起来的。

如果启动ttserver碰到这样的出错信息:

	error while loading shared libraries:libtokyocabinet.so.8: cannot open share object file:No such file or dirctory. <wbr></wbr>

使用如下命令来修复错误：

	cd /usr/local/tokyotyrant-1.4.41/

	ln -s /usr/local/tokyotyrant-1.4.41/lib/libtokyocabinet.so.8.lib/

3. 接下来安装echoprint server

4.

可以下载压缩包解压，网站：[https://github.com/echonest](https://github.com/echonest) 这里可以找到echoprint-server

在这里是使用命令行下载的，如下：

首先建立一个目录存放echoprint-server，我存放目录是/home/yuren/echoprint-server

	cd /home/yuren/echoprint-server

	git init

	git pull git://github.com/echonest/echoprint-server.git

	cd echoprint-server/solr/solr

	java -Dsolr.solr.home=/home/yuren/echoprint-server/solr/solr/solr/ -	Djava.awt.headless=true -jar start.jar

运行完开启了，注意将我的用户名换成你自己的，如果是从网站直接下载的服务端要把服务器的文件夹改成echoprint-server。

在这里可以再安装几个东西，如果已经有了就不用了，不过装上也没啥不好，不想装也没事儿。

	sudo apt-get install python-setuptools

	sudo easy_install web.py

	sudo easy_install pyechonest

现在服务器就算是搭起来了，但是要获得在windows下的建库和查询，就要在ubuntu下编译codegen，并在ubuntu下进行指纹匹配的工作，这些在后面会继续介绍。

ref: [http://blog.sina.com.cn/s/blog_7985987f01019eik.html](http://blog.sina.com.cn/s/blog_7985987f01019eik.html)

