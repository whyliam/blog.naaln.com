---
layout: post
title: 详解Fedora 18 U盘安装技巧
date: 2013/08/12 06:20:00
categories:
- 技术
tags:
- Fedora
- Linux
- 系统安装
- U盘安装
- 操作系统
- 教程
description: Fedora 18系统U盘安装完整图文教程，由2013系统下载网提供。详细介绍了Fedora 18开源操作系统的U盘安装方法，包括制作启动盘和系统安装全流程。教程重点讲解了isolinux.cfg配置文件的修改技巧：将Fedora-18-Beta-i686-Live-Desktop改为Fedora-18-B、复制配置文件到syslinux.cfg、调整盘符标签等关键操作步骤。提供了从下载ISO镜像、修改配置文件、重启安装到进入LiveSystem的完整流程。为需要在电脑上安装Fedora 18的用户提供详细的操作指南和注意事项，确保安装过程顺利进行。
---

**导读**：

Fedora 是一款由全球社区爱好者构建的面向日常应用的快速、稳定、强大的免费开源操作系统。Fedora 18 是 Fedora 最新版本，相信很多朋友都很想尝试 Fedora 18 版本，但是有些朋友不知道如何安装 Fedora 18，下面 2013 系统下载网小编为大家带来 Fedora 18 U 盘安装教程。核心提示：Fedora 是一款由全球社区爱好者构建的面向日常应用的快速、稳定、强大的免费开源操作系统。Fedora18 是 Fedora 最新版本，相信很多朋友都很想尝试 Fedora18 版本，但是有些朋友不知道如何安装 Fedora18，下面 2013 系统下载网小编为大家带来 Fedora18U 盘安装教程。

![](http://pics.naaln.com/blog/2019-01-14-062422.jpg-basicBlog)

Fedora18 安装教程： 首先要下载好 Fedora1832 位官方 iso 镜像或者 Fedora1864 位官方 iso 镜像，然后把 Fedora18 放在 U 盘里，U 盘里面的 isolinux 文件里有 isolinux.cfg 和 syslinux.cfg。

![](http://pics.naaln.com/blog/2019-01-14-062423.jpg-basicBlog)

选择 isolinux.cfg 和 syslinux.cfg 我们把 isolinux\isolinux.cfg，把里面的 Fedora-18-Beta-i686-Live-Desktop 全部改成 Fedora-18-B，其他的都不动，然后再将 isolinux.cfg 复制成 syslinux.cfg，就是两个内容一样名称不一样的文件，

![](http://pics.naaln.com/blog/2019-01-14-062424.jpg-basicBlog)

注意后面的空格 盘符显示的标签什么就改成什么

![](http://pics.naaln.com/blog/2019-01-14-062425.jpg-basicBlog)

填写盘符查找 接下来就是重启开始安装。

![](http://pics.naaln.com/blog/2019-01-14-062426.jpg-basicBlog)

注意标签式 点击 StasrtFedora18 回车进入

![](http://pics.naaln.com/blog/2019-01-14-062427.jpg-basicBlog)

点击 StasrtFedora18 然后再点击 LiveSystemUser。

好了，Fedora18 安装教程到这就结束了
