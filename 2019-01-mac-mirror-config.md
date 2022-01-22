---
title: Mac 环境镜像配置
categories:
  - 技术
date: 2019/01/11 09:14:59
tags:
---

由于众所周知的原因，我们在访问国外代码的时候，会有请求丢失或者请求缓慢的原因，所以我们一般都会替换为大陆的镜像。以下是我使用的源：

1. [清华大学 TUNA 协会](https://tuna.moe/)
> 清华大学 TUNA 协会原名清华大学学生网管会，注册名清华大学学生网络与开源软件协会，是由清华大学网络技术和开源软件爱好者、技术宅组成的团体。现阶段向校内外提供开源软件镜像、DNS 解析和 NTP 授时等服务。

2. [中国科学技术大学开源软件镜像](https://mirrors.ustc.edu.cn/)
> mirrors.ustc.edu.cn 是 Debian， Ubuntu， Fedora， Archlinux， CentOS 等多个发行版的官方源。目前是中国大陆高校访问量最大，收录最全的开源软件镜像。

## Homebrew
```
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git
```

## Homebrew Core
```
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
```

## Homebrew Cask
```
cd "$(brew --repo)"/Library/Taps/homebrew/homebrew-cask
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git
```

## Homebrew Bottles
```
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc
```

## CocoaPods
```
cd ~/.cocoapods/repos
pod repo remove master
git clone https://mirrors.tuna.tsinghua.edu.cn/git/CocoaPods/Specs.git master
```

## Rubygems
```
gem sources --add https://mirrors.tuna.tsinghua.edu.cn/rubygems/ --remove https://rubygems.org/
gem sources -l
```

## PyPI
```
pip install pip -U
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## npm
```
npm config set registry https://registry.npm.taobao.org
```