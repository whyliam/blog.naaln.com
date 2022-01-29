---
layout: post
title: pcduino入手ssh连接开放vncserver远程服务
date: 2014/03/07 06:58:00
categories:
- 技术
tags:
- pcduino
---

pcDuino是一种高性能，高性价比的迷你PC的平台，能够运行PC操作系统，如Ubuntu和Android的ICS等。它可以通过内置HDMI接口输出视频到电视或显示器屏幕。 pcDuino专门针对开源社区快速增长的需求，即希望有一个平台可以运行完整的PC操作系统，容易使用的工具链和兼容流行的Arduino开放的生态系统，如Arduino shield和开源项目等。 就是如下这一只，板子其实很小，兼容Arduino接口：

![](http://pics.naaln.com/blog/2019-05-14-123347.jpg-basicBlog)

其实本人也不是很熟悉LINUX环境，不过对于嵌入式ARM上跑嵌入式系统很感兴趣，所以打算正好乘这个机会恶补一下，本来看中的是UK学生设计的那款树莓派，不过看到PcDuino更优异的性能还是毅然选择了它。 刚入手就遇到了问题，没有显示器，怎么操作PcDuino呢？ 卖家告诉我VNC，可是试了很多遍总是connection refused,断定VNC服务压根就没有启动。 于是在LINUX环境下ssh连接：  
```
   ssh -l ubuntu x.x.x.x
```

输入密码（默认ubuntu)`@ubuntu`> 如上，pcDuino的终端就出来了
```
   sudo x11vnc -forever -shared -rfbauth ~/.vnc/passwd
```

这一步启动 x11vnc
```
   sudo cp ~/.vnc/passwd /etc/x11vnc.pass
   sudo vi /etc/init/x11vnc.conf
```

这一步，实现自启动，同时指定密码x11vnc.conf内容：
```
   start on login-session-startscriptx11vnc -display :0 -auth /var/run/lightdm/root/:0 -forever -bg -o /var/log/x11vnc.log -rfbauth /etc/x11vnc.pass -rfbport 5900end script
```

这之后就可以在linux下vncviewer x.x.x.x 连接到pcduino了，键盘鼠标自动共享的，不必操心windows下有个vncviewer绿色版也很好用效果：

![](http://pics.naaln.com/blog/2019-05-14-123349.jpg-basicBlog)

