---
layout: post
title: 在 MacBook 2013 安装 MacOS Ventura
date: 2022/07/28 20:00:00
categories:
- 技术
tags:
- 折腾
---
### Create a Backup of your Mac

备份Mac，我使用timemachine备份

### Download macOS Ventura

通过 macadmin-scripts https://github.com/munki/macadmin-scripts 或 gibMacOS https://github.com/corpnewt/gibMacOS 下载历史版本

### Create macOS Ventura Bootable USB

准备一个U盘(建议不小于32g)，将U盘抹掉为「mac os扩展(日志式)”」

```
sudo /Applications/Install\ macOS\ 13\ Beta.app/Contents/Resources/createinstallmedia --volume /Volumes/U盘的名字
```

### Preparing the USB Installer

从github下载opencore(OpenCore-Patcher-GUI.app.zip):https://github.com/dortania/Opencore-Legacy-Patcher/releases

查看电脑的 Model Identifier

```
system_profiler SPHardwareDataType | grep 'Model Identifier'
```

![OCLP GUI Main Menu](https://pics.naaln.com/blog/2022-07-31-65be79.png-basicBlog)



点击settings>SMBIOS 设置

![img](https://pics.naaln.com/blog/2022-07-31-6d481b.webp-basicBlog)

点击Return to Main Menu,选择Build and Install OpenCore,构建完成后会寻问是否安装在硬盘上,点击Install to disk

OpenCore构建完成后,你会看到这个页面,选择你的MacOS Ventura安装盘

![img](https://pics.naaln.com/blog/2022-07-31-153478.webp-basicBlog)

![img](https://pics.naaln.com/blog/2022-07-31-c0e9bc.webp-basicBlog)

OpenCore完成安装后,会提示重新启动

![img](https://pics.naaln.com/blog/2022-07-31-4efb84.webp-basicBlog)



Via：[**How to Install macOS Ventura on Unsupported Macs**](https://elitemacx86.com/threads/how-to-install-macos-ventura-on-unsupported-macs.921/)