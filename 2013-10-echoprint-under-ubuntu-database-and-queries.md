---
layout: post
title: ubuntu下实现echoprint建库和查询
date: 2013/10/08 21:33:00
categories:
- 技术
tags:
- echoprint
---

在服务器搭建好之后可以试一试readme里面的几个例子，看一下有没有其他问题。

首先是在python中运行：

```
>>> import fp
   >>> fp.ingest({"track_id": "my_track_id", "fp": "123 40 123 60 123 80 123 90 123 110 123 130", "length": "120", "codever": "4.12"})
   >>> fp.commit()
   >>> r = fp.best_match_for_query("123 40 124 60 125 80 126 90 127 110 128 130 129 60 123 40 127 50")
   >>> r.message()
   'query code length is too small'
   >>> example_code = "eJwty7kNADAMw8BVNILl-Mv-iwWCU11D0g_CQA-USIwoXNEg5YBH3o3-0sil7AHIrAyw"
   >>> r = fp.best_match_for_query(example_code)
   >>> r.message()
   'OK (match type 3)'
   >>> r.TRID
   'my_track_id'
```

得到上述结果就说明这个例子没什么问题，就是写入了一条记录然后查询，一般没啥问题。

第二个例子是API server

进入API目录，开启例子

```
cd API
   python api.py 8080
```

会看到显示的地址是0.0.0.0：8080，这里的0.0.0.0是本机的所有IP的合集，是个比较特殊的IP，127.0.0.1是本机的IP，但这些都不是物理IP地址，我们在网络配置时都是配置物理IP地址，如果其他计算机想要访问你的电脑，则必须通过物理IP来唯一确定你的地址。

下面要用到curl命令，没有安装的安装一下，curl是个强大的http命令行工具，我也不了解，只是这里通过这个命令来写入数据，例如将第一个例子的数据通过curl命令写入服务器：

再通过在http来查询：

```
http://(服务器物理ip地址):8080/query?fp_code=eJwty7kNADAMw8BVNILl-Mv-iwWCU11D0g_CQA-USIwoXNEg5YBH3o3-0sil7AHIrAyw
```

这样就可以看到查询结果了，如果不是在自己的电脑上查询，必须通过服务器的物理ip地址。

顺便说一下虚拟机的网络配置问题，NAT模式是直接就能够上网的，此时虚拟机对网络的访问时通过宿主机实现的，虚拟机的ip地址是虚拟出来的，不作为网络上的一台独立的计算机，我理解其实还是通过宿主机的ip来连入网络的。

而桥接模式是可以将虚拟机配置成一台独立接入互联网的电脑的，此时虚拟机必须也有自己的实际ip地址。我在桥接中使用静态ip地址，能够ping通宿主机和内网，但不能ping同外网，dns也不能解析，最终又换回了NAT模式，直接在真机ubuntu上配置服务器就不用考虑这些了。后面会单独记录一下虚拟机网络配置的问题。

最后是在ubuntu下编译codegen，这个要安装一些依赖：

```
sudo apt-get install ffmpeg
   sudo apt-get install libtag1-dev
   sudo apt-get install zlib1g-dev
   sudo apt-get install libboost-dev
   sudo apt-get install g++-multilib
```

都装好了就可以直接在codegen/src 的目录下make了，makefile都已经写好了，编译完成后再codegen/目录下看到echoprint-codegen文件，可以直接运行。

服务器的readme文件中写了一种构建库的方法，首先是将音乐放在ubuntu中，例如放在Music文件夹下，可以使用find命令生成需要产生指纹的音乐列表：

```
find /home/Music -name "*.mp3" > music_to_ingest
```

根据列表索引路径来生成音频指纹：

```
./echoprint-codegen -s < music_to_ingest > allcodes.json
```

此时所有的音频指纹都保存在allcodes.json文件中，然后通过fastingest将其写入数据库：

```
python fastingest.py [-b] allcodes.json
```

指纹较多的时候可以使用`python splitdata.py allcodes.json`将其分成5份，否则会耗尽内存。

写入的时候ttserver和echoprint-server都会有log信息提示，如果出错也会提示，按之前的步骤操作应该是没有问题的。

写入成功后，可以查询一下试试看：

在这里我将库中的一首歌曲 「林志炫-烟花易冷-我是歌手第六期」只保留第1分钟后的20秒，改名为test.mp3，在windows下使用编译好的codegen.exe获取其指纹信息：

![](http://pics.naaln.com/blog/2019-05-14-123244.jpg-basicBlog)

结果保存在result1中，打开可以看到指纹信息：

![](http://pics.naaln.com/blog/2019-05-14-123245.jpg-basicBlog)

将指纹信息留作后面查询。

这里要修改fp.py文件，打开将其中的localhost修改为服务器端的ip地址：

![](http://pics.naaln.com/blog/2019-05-14-123246.jpg-basicBlog)

然后打开python命令行：

输入命令：

![](http://pics.naaln.com/blog/2019-05-14-123247.jpg-basicBlog)

可以看到查询结果了，在不同的平台下编译codegen并修改fp.py文件，可以实现在不同平台实现连接服务器的查询。

上面介绍的ubuntu中的服务器搭建及相关内容在32位和64位上的差别就是安装java的bin文件，要下载对应系统的bin文件，其他的问题不大，反正有版本要求的就选择和系统相对应的版本就可以了，之前在虚拟机上配置完成，昨天在自己电脑上的32位及64位都搞定了，方法应该是没有问题的啦~
