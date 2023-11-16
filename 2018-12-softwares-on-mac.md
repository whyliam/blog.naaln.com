---
title: 自己在用的Mac软件及配置
categories:
  - 技术
date: 2018/12/25 00:03:33
tags:
---

由于公司的电脑硬盘换了，索性就把电脑格式化了重新安装系统。以下是我这次安装的软件，基本上可以满足日常的基本使用。如果还有需要安装的软件就之后在补充了。

由于我的日常主要设计开发和产品的工作，所有在软件上也主要是这两块。

<!--more-->

### 安装 brew & cask & mas

```bash
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

    brew tap caskroom/cask
    brew install mas
```

### 软件

```bash
    brew cask install evernote   // 印象笔记
    mas lucky lastpass           // 密码管理
    brew cask install google-chrome // 浏览器
    brew cask install baidunetdisk  // 百度网盘
    brew cask install thunder       // 迅雷
    brew search cleanmymac          // MAC清理工具
    Microsoft Excel
    Microsoft PowerPoint
    Microsoft Word
```

### 工具

```bash
    brew cask install alfred       // 快速启动，配合插件使用
    brew cask install bartender2   // 隐藏任务栏的工具
    brew cask install moom         // 窗口管理工具
    brew cask install ghosttile    // 隐藏Dock App
```

### 合作

```bash
    mas lucky qq                    // QQ
    mas lucky wechat                // 微信
    brew search bearychat
    brew search teambition
    网易邮箱
```

### 产品

```bash
    brew cask install axure-pr
    brew cask install sketch
    brew cask install mindnode
    brew cask install zeplin
    brew cask install macdown
    brew cask install rightfont
    brew cask install notion
    幕布
    mas lucky ipic
```

### 娱乐

```bash
    brew cask install iina          // 视频播放
    brew cask install neteasemusic  // 网易云音乐
    人人影视
```

### 开发

```bash
    ShadowsocksX // https://github.com/shadowsocks/ShadowsocksX-NG/releases
    mas lucky Xcode
    Proxifier // Socks5客户端
    brew cask install github
    brew cask install swimat
    brew cask install sublime-text
    brew cask install charles
    brew cask install iterm
    brew install zsh
    brew cask install iterm2
    Oh-my-zsh
```

### Gist

点击查看 [Gist](https://gist.github.com/whyliam/d6265cc96d2be75246bc265cd347d7df)

<script src="https://gist.github.com/whyliam/d6265cc96d2be75246bc265cd347d7df.js"></script>

### 其他：

以前的配置：[自己在用的Mac软件及配置](https://blog.naaln.com/2017/06/softwares-on-mac/)