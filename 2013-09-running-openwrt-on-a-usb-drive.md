---
layout: post
title: 让Openwrt在U盘运行
date: 2013/09/22 10:39:00
categories:
- 技术
tags:
- OpenWrt
- 路由器
- U盘
- 系统安装
- Linux
- 嵌入式
- 教程
description: OpenWrt路由器系统U盘运行完整教程。详细介绍如何让OpenWrt在U盘上运行，替代路由器内置存储。教程包含四大部分：1）前提条件——路由器需有USB接口（如水星4530）和USB存储设备；2）所需组件——kmod-usb-ohci（USB1.1）、kmod-usb2（USB2.0）、kmod-usb-uhci（Intel/VIA控制器）、kmod-usb-stroage（USB存储设备）；3）执行命令——更新软件列表、安装自动挂载和USB启动组件、格式化U盘为ext3/ext4、同步系统文件到U盘；4）编辑配置文件——修改/etc/config/fstab设置自动挂载和USB启动。提供完整的命令行操作流程和配置文件示例。
---

1、前提条件：

路由器要有 USB 接口，如水星 4530； 拥有 USB 存储设备，如 U 盘或移动硬盘；

2、所需组件：

```
   kmod-usb-ohci                对应usb1.1
   kmod-usb2                        对应USB2.0
   kmod-usb-uhci                对应部分intel和VIA的usb控制器　
   kmod-usb-stroage                  对应USB硬盘设备，如U盘、USB移动硬盘。
```

### 3、执行命令

```
   opkg update #更新软件列表
   opkg install block-mount block-hotplug     #自动挂载
   opkg install block-extroot     #USB启动
   opkg install kmod-fs-ext3     #ext3文件系统支持
   opkg install e2fsprogs   #格式化工具
   mkfs.ext3 /dev/sda1    #将sda1格式化为ext3
   mkfs.ext4 /dev/sda1    #将sda1格式化为ext4
   cat /proc/mounts           #查看已挂载的文件系统
   mount /dev/sda1 /mnt
   mkdir /tmp/root
   mount -o bind / /tmp/root  #挂载并同步
   cp /tmp/root/* /mnt -a
   umount /tmp/root
   echo "Boot from USB" >> /mnt/etc/banner      #添加标记用于重启后区分USB启动
```

### 4、编辑配置文件

修改/etc/config/fstab 文件

```
   config mount
   option target        /home　                   #本行可以+#
   option device        /dev/sda1
   option fstype        ext3
   option options        rw,sync
   option enabled        1                                #需修改
   option is_rootfs       1                                 #需修改
   config swap
   option device        /dev/sda2
   option enabled        0
```
