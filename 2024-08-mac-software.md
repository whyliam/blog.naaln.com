---
layout: post
title: 2024 Mac Software
date: 2024/08/25 09:39:00
categories:
  - 技术
tags:
  - Mac
  - 软件
  - 开发工具
---

## 前言

本文整理了2024年Mac电脑上一些实用的软件和开发工具,以及它们的安装方法。希望能为新入手Mac的朋友或想要优化工作流程的开发者提供参考。

## 基础工具安装

### 安装 Homebrew

Homebrew是Mac上非常强大的包管理工具,可以方便地安装和管理各种软件。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 安装 Ohmyzsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### 安装 Zsh-autosuggestion

```bash
git clone [https://github.com/zsh-users/zsh-autosuggestions](https://cloud.tencent.com/developer/tools/blog-entry?target=https%3A%2F%2Flinks.jianshu.com%2Fgo%3Fto%3Dhttps%25253A%25252F%25252Fgithub.com%25252Fzsh-users%25252Fzsh-autosuggestions&source=article&objectId=1684785) ~/.oh-my-zsh/custom/plugins/zsh-autosuggestion
```

### 安装 Command

```bash
brew install autojump
brew install git
brew install mackup
brew install zsh
brew install zsh-autosuggestions
```

### Brew 安装 Software

```bash
brew tap buo/cask-upgrade  # 添加Homebrew Cask的自动更新功能

brew install apifox  # API 开发和测试工具
brew install baidunetdisk  # 百度网盘客户端
brew install bartender  # 菜单栏图标管理工具
brew install beyond-compare  # 文件和文件夹比较工具
brew install bitwarden  # 密码管理器
brew install charles  # 网络抓包和分析工具
brew install cursor  # 基于AI的代码编辑器
brew install dingtalk  # 钉钉办公软件
brew install downie  # 视频下载工具
brew install feishu  # 飞书协作平台
brew install github  # GitHub桌面客户端
brew install iina  # 现代化的视频播放器
brew install iterm2  # 强大的终端模拟器
brew install keka  # 文件压缩和解压工具
brew install microsoft-edge  # 微软Edge浏览器
brew install microsoft-excel  # 微软Excel表格软件
brew install microsoft-powerpoint  # 微软PowerPoint演示软件
brew install microsoft-word  # 微软Word文字处理软件
brew install neteasemusic  # 网易云音乐
brew install obsidian  # 知识管理和笔记软件
brew install optimage  # 图片压缩工具
brew install parallels  # 虚拟机软件
brew install picgo  # 图片上传和管理工具
brew install raycast  # 快速启动和工作流自动化工具
brew install shottr  # 截图和图片编辑工具
brew install sublime-text  # 轻量级代码编辑器
brew install typora  # Markdown编辑器
brew install wechat  # 微信桌面版
brew install wetype  # 输入法软件
brew install xcode  # Apple开发工具套件
brew install xmind  # 思维导图软件
```

### 手动安装 Software

```bash
A Better Finder Attributes 7  # 文件属性批量修改工具
Apifox  # API设计、开发和测试一体化平台
Bartender  # 菜单栏图标管理工具
BuhoCleaner  # Mac系统清理和优化工具
calibre  # 电子书管理和阅读软件
Cubox  # 跨平台收藏夹和知识管理工具
Downie  # 视频下载工具
Infuse  # 高级视频播放器
Parallels Desktop  # 虚拟机软件
photoSweeper  # 重复照片查找和清理工具
Retrobatch  # 批量图片处理工具
Stash  # 代码片段管理工具
Texifier  # LaTeX编辑器
tinymediamanager  # 影视资料管理软件
滴答清单  # 跨平台待办事项和任务管理工具
夸克网盘  # 阿里巴巴旗下的云存储服务
```

### 安装 Latex

```bash
brew install basictex 
```

如果找不到 tlmgr `tlmgr: command not found`，需要设置

```bash
export PATH="/usr/local/texlive/2024basic/bin/universal-darwin:$PATH"
```

如果运行提示 `(not verified: gpg unavailable)`，需要安装

```bash
sudo tlmgr --repository http://www.preining.info/tlgpg/ install tlgpg
```

如果运行安装包的时候速度慢的话推荐使用 [清华的CTAN 镜像](https://mirror.tuna.tsinghua.edu.cn/help/CTAN/)。

```bash
sudo tlmgr option repository https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/tlnet
```

按照依赖的插件

```bash
sudo tlmgr update --self
sudo tlmgr install ctex
sudo tlmgr install enumitem
sudo tlmgr install environ
sudo tlmgr install ifmtarg
sudo tlmgr install sourcesanspro
sudo tlmgr install tcolorbox
sudo tlmgr install tikzfill
sudo tlmgr install xifthen
sudo tlmgr install xstring
sudo tlmgr install roboto
sudo tlmgr install fontawesome5
```
