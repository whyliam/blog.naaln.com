---
layout: post
title: ubuntu下实现echoprint建库和查询
date: 2013/10/08 21:33:00
categories:
- 技术
tags:
- echoprint
---

在服务器搭建好之后可以试一试 readme 里面的几个例子，看一下有没有其他问题。

首先是在 python 中运行：

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

第二个例子是 API server

进入 API 目录，开启例子

```
cd API
   python api.py 8080
```

会看到显示的地址是 0.0.0.0：8080，这里的 0.0.0.0 是本机的所有 IP 的合集，是个比较特殊的 IP，127.0.0.1 是本机的 IP，但这些都不是物理 IP 地址，我们在网络配置时都是配置物理 IP 地址，如果其他计算机想要访问你的电脑，则必须通过物理 IP 来唯一确定你的地址。

下面要用到 curl 命令，没有安装的安装一下，curl 是个强大的 http 命令行工具，我也不了解，只是这里通过这个命令来写入数据，例如将第一个例子的数据通过 curl 命令写入服务器：

再通过在 http 来查询：

```
http://(服务器物理ip地址):8080/query?fp_code=eJwty7kNADAMw8BVNILl-Mv-iwWCU11D0g_CQA-USIwoXNEg5YBH3o3-0sil7AHIrAyw
```

这样就可以看到查询结果了，如果不是在自己的电脑上查询，必须通过服务器的物理 ip 地址。

顺便说一下虚拟机的网络配置问题，NAT 模式是直接就能够上网的，此时虚拟机对网络的访问时通过宿主机实现的，虚拟机的 ip 地址是虚拟出来的，不作为网络上的一台独立的计算机，我理解其实还是通过宿主机的 ip 来连入网络的。

而桥接模式是可以将虚拟机配置成一台独立接入互联网的电脑的，此时虚拟机必须也有自己的实际 ip 地址。我在桥接中使用静态 ip 地址，能够 ping 通宿主机和内网，但不能 ping 同外网，dns 也不能解析，最终又换回了 NAT 模式，直接在真机 ubuntu 上配置服务器就不用考虑这些了。后面会单独记录一下虚拟机网络配置的问题。

最后是在 ubuntu 下编译 codegen，这个要安装一些依赖：

```
sudo apt-get install ffmpeg
   sudo apt-get install libtag1-dev
   sudo apt-get install zlib1g-dev
   sudo apt-get install libboost-dev
   sudo apt-get install g++-multilib
```

都装好了就可以直接在 codegen/src 的目录下 make 了，makefile 都已经写好了，编译完成后再 codegen/目录下看到 echoprint-codegen 文件，可以直接运行。

服务器的 readme 文件中写了一种构建库的方法，首先是将音乐放在 ubuntu 中，例如放在 Music 文件夹下，可以使用 find 命令生成需要产生指纹的音乐列表：

```
find /home/Music -name "*.mp3" > music_to_ingest
```

根据列表索引路径来生成音频指纹：

```
./echoprint-codegen -s < music_to_ingest > allcodes.json
```

此时所有的音频指纹都保存在 allcodes.json 文件中，然后通过 fastingest 将其写入数据库：

```
python fastingest.py [-b] allcodes.json
```

指纹较多的时候可以使用 `python splitdata.py allcodes.json` 将其分成 5 份，否则会耗尽内存。

写入的时候 ttserver 和 echoprint-server 都会有 log 信息提示，如果出错也会提示，按之前的步骤操作应该是没有问题的。

写入成功后，可以查询一下试试看：

在这里我将库中的一首歌曲「林志炫 - 烟花易冷 - 我是歌手第六期」只保留第 1 分钟后的 20 秒，改名为 test.mp3，在 windows 下使用编译好的 codegen.exe 获取其指纹信息：

![](http://pics.naaln.com/blog/2019-05-14-123244.jpg-basicBlog)

结果保存在 result1 中，打开可以看到指纹信息：

![](http://pics.naaln.com/blog/2019-05-14-123245.jpg-basicBlog)

将指纹信息留作后面查询。

这里要修改 fp.py 文件，打开将其中的 localhost 修改为服务器端的 ip 地址：

![](http://pics.naaln.com/blog/2019-05-14-123246.jpg-basicBlog)

然后打开 python 命令行：

输入命令：

![](http://pics.naaln.com/blog/2019-05-14-123247.jpg-basicBlog)

可以看到查询结果了，在不同的平台下编译 codegen 并修改 fp.py 文件，可以实现在不同平台实现连接服务器的查询。

上面介绍的 ubuntu 中的服务器搭建及相关内容在 32 位和 64 位上的差别就是安装 java 的 bin 文件，要下载对应系统的 bin 文件，其他的问题不大，反正有版本要求的就选择和系统相对应的版本就可以了，之前在虚拟机上配置完成，昨天在自己电脑上的 32 位及 64 位都搞定了，方法应该是没有问题的啦~
