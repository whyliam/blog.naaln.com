---
layout: post
title: 让Openwrt在U盘运行
date: 2013/09/22 10:39:00
categories:
  - 技术
tags:
  - OpenWrt
  - USB启动
  - Ext文件系统
  - 块挂载
  - fstab
description: 
  通过opkg安装blockmount、blockhotplug、blockextroot及kmodusb模块，格式化USB存储为EXT文件系统，绑定挂载根目录并复制数据至USB，修改fstab使USB设备成为根文件系统，完成OpenWrt路由器的USB启动。
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
