---
layout: post
title: fedora17 eclipse安装
date: 2013/02/23 19:00:00
categories:
  - 技术
tags:
  - android
  - sdk
  - eclipse
  - fedora
  - adt
description: 在 Fedora 17 上搭建 Android 开发环境，包括下载 i386 版 Android SDK、解压到本地路径、安装 Eclipse4点2点1、添加 Android Development Tools 插件、设置 SDK 路径并修改权限，完整流程可用于 Android 应用开发。
---

Android 是 Google 推出的基于 Linux 的开源智能手机平台，本文讲述如何在 Fedora 17 系统下架设 Android 开发全部流程以 Fedora 17 X86 版本为例。

**1. 下载 Android SDK**

首先，前往从以下网站获取 Android Linux 平台的 SDK 套件，目前只有 i386 架构的。

[http://developer.android.com/sdk/](http://developer.android.com/sdk/)

下载完成会得到一个 zip 格式的压缩档案。

**2. 解压缩**

将获得的 zip 解压到所喜好的位置即可，无须安装。

```
cd /home/zzappled/Documents
```

**3. 安装 Eclipse 集成开发环境**

Android 推荐的 IDE 为 Eclipse，打开软件中心搜索 eclipse，安装即可 安装后版本为 `Version: 4.2.1`；

![请输入图片描述](http://pics.naaln.com/blog/2019-05-14-123403.jpg-basicBlog)

**4.配置 Android Development Tools**

首先要添加 Eclipse 的官方升级仓库，满足 Android Development Tools 所需要的 eclipse-wdt。

在 Eclipse -> Help -> install new software;

在 work with 后面的输入框中输入：`https://dl-ssl.google.com/android/eclipse/`，

如图

![请输入图片描述](http://pics.naaln.com/blog/2019-05-14-123405.jpg-basicBlog)

然后勾选新出现的 Android DDMS 和 Android Development Tools 即可。

**5.进入 window->preferences**

进入 android 的 sdk 目录选择解压后的 sdk 环境，如图：

![请输入图片描述](http://pics.naaln.com/blog/2019-05-14-123406.jpg-basicBlog)

我下在的 zip 压缩包解压到了 `/home/zzappled/Documents` 下；

**6.改变解压后的 sdk 目录的权限：**

```
chmod -R adt-bundle-linux-x86
```

如果不改的话没发运行 sdk 下的程序； 此刻 Android SDK 配置完成，可以开始 Android 平台应用软件的开发啦！
