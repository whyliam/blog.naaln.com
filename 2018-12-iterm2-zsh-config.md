---
title: 配置 iterm2
categories:
  - 技术
date: 2018/12/27 16:14:59
tags:
---

以下是我对iterm的配置，其实也说不上是什么配置。就是换了一个舒服一点的主题，然后安装了几个常用的插件。有一些可用可不用的插件，暂时就先不安装了，如果有真正使用必要的时候再安装。

<!--more-->

## 安装 ZSH

```bash
	brew install zsh
```

## 安装 oh-my-zsh

```bash
	sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

## 安装 oh-my-zsh 插件

#### `zsh-autosuggestions` 自动补全插件

```bash
	git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

编辑`.zshrc`文件

```bash
	plugins=(git zsh-autosuggestions)
```

#### `zsh-syntax-highlighting` 高亮

```bash
	brew install zsh-syntax-highlighting
```

#### `zsh-autosuggestions` iterm2 输入建议

```bash
	brew install zsh-autosuggestions
```

#### 我在用的插件

```bash
plugins=(
  git
  node
  npm
  sublime
  ruby
  sudo
  python
  osx
  pyenv
  gem
  python
  xcode
  github
  pip
  zsh-autosuggestions
  zsh-syntax-highlighting
)
```