---
layout: post
title: 2024 Mac Software
date: 2024/08/25 09:39:00
categories:
  - 技术
tags:
---

### 安装 Brew

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
brew tap buo/cask-upgrade
brew install apifox
brew install baidunetdisk
brew install bartender
brew install beyond-compare
brew install bitwarden
brew install charles
brew install cursor
brew install dingtalk
brew install downie
brew install feishu
brew install github
brew install iina
brew install iterm2
brew install keka
brew install microsoft-edge
brew install microsoft-excel
brew install microsoft-powerpoint
brew install microsoft-word
brew install neteasemusic
brew install obsidian
brew install optimage
brew install parallels
brew install picgo
brew install raycast
brew install shottr
brew install sublime-text
brew install typora
brew install wechat
brew install wetype
brew install xcode
brew install xmind
```

### 手动安装 Software

```
A Better Finder Attributes 7
Apifox
Bartender
BuhoCleaner
calibre
Cubox
Downie
Infuse
Parallels Desktop
photoSweeper
Retrobatch
Stash
Texifier
tinymediamanager
滴答清单
夸克网盘
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
