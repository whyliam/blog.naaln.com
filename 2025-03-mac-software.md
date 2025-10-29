---
layout: post
title: 2025 Mac Software
date: 2025/03/25 09:39:00
categories:
  - 技术
tags:
  - Mac软件
  - 安装指南
  - 包管理
  - 开发环境
  - LaTeX工具
description: 提供Macmini软件安装完整流程，指导安装Homebrew、Ohmyzsh等基础工具，配置Mackup备份软件，设置Brew安装列表包括浏览器、办公、开发、视频、设计等多类软件，手动安装如图像、虚拟管理等工具，并覆盖Git、Node、Python开发环境配置，LaTeX排版环境和字体库安装。
---

## 前言

一年一度的 Mac Software 整理如期而至，本次是因为新入手了 Mac mini。谁叫这个价格实在是太香了。

去年的见：[2024 Mac Software](https://blog.naaln.com/2024/08/mac-software/)

## 基础工具安装

### 安装 Homebrew

Homebrew 是 Mac 上非常强大的包管理工具,可以方便地安装和管理各种软件。

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 安装 Ohmyzsh

```bash
sh -c "$(curl -fsSL https://install.ohmyz.sh/)"
```

### 安装 Command

```bash
brew install zsh
brew install autojump
brew install zsh-autosuggestions
```

如果是用 brew 安装 zsh-autosuggestions，需要在 `.zshrc` 在中设置

```
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
```

### 配置 Mackup

Mackup 是一个非常实用的工具，可以帮助你备份和同步 Mac 上各种应用程序的配置文件。通过将配置文件存储在云端（如 iCloud、Dropbox 等），你可以在多台设备间保持一致的应用设置。

安装 mackup

```
brew install mackup
```

创建 Mackup 配置文件：

```bash
vi ~/.mackup.cfg
```

在配置文件中指定存储引擎（这里使用 iCloud）：

```
[storage]  
engine = icloud
```

#### Mackup 常用命令

```bash
mackup backup    # 备份应用配置到云端
mackup restore   # 从云端恢复应用配置
mackup list      # 列出 Mackup 支持的所有应用
mackup uninstall # 恢复原始配置并删除链接
```

完成配置后，运行以下命令进行数据恢复：

```bash
mackup restore # 使用 Mackup 进行数据的恢复
```

### Brew 安装 Software

```bash
# 首先添加 Homebrew Cask 的自动更新功能：
brew tap buo/cask-upgrade

# 办公软件
brew install --cask microsoft-edge      # 微软Edge浏览器
brew install --cask microsoft-excel     # 微软Excel表格软件
brew install --cask microsoft-powerpoint # 微软PowerPoint演示软件
brew install --cask microsoft-word      # 微软Word文字处理软件
brew install --cask typora              # Markdown编辑器
brew install --cask obsidian            # 知识管理和笔记软件
brew install --cask xmind               # 思维导图软件
brew install --cask ticktick            # 任务管理工具

# 协作与通讯
brew install --cask wechat              # 微信
brew install --cask dingtalk            # 钉钉
brew install --cask feishu              # 飞书协作平台
brew install --cask telegram            # Telegram即时通讯

# 浏览器
brew install --cask brave-browser       # Brave浏览器

# 开发环境
brew install xcode                      # Apple开发工具套件

# 代码编辑器与IDE
brew install --cask sublime-text        # 轻量级代码编辑器
brew install --cask cursor              # 基于AI的代码编辑器
brew install --cask iterm2              # 强大的终端模拟器
brew install --cask trae                # 

# 开发辅助工具
brew install --cask github              # GitHub桌面客户端
brew install --cask docker              # Docker容器平台
# brew install --cask orbstack            # Docker替代方案
brew install --cask apifox              # API设计、开发和测试平台
brew install --cask charles             # 网络抓包和分析工具
brew install --cask raycast             # 快速启动和工作流自动化工具
brew install --cask bitwarden           # 密码管理器

# 视频播放与下载
brew install --cask handbrake           # 视频转码工具
brew install --cask downie              # 视频下载工具
brew install --cask tencent-video       # 腾讯视频
brew install --cask youku               # 优酷
brew install --cask qqlive              # 腾讯视频(QQ视频)
brew install --cask tinymediamanager    # 影视资料管理软件

# 音乐
brew install --cask neteasemusic        # 网易云音乐

# 图像工具
brew install --cask shottr              # 截图和图片编辑工具
brew install --cask optimage            # 图片压缩工具
brew install --cask piclist             # 图片管理工具

# 设计工具
brew install --cask drawio              # 流程图工具

# 系统增强
brew install --cask betterdisplay       # 显示器管理工具
brew install --cask keka                # 文件压缩和解压工具
brew install --cask balenaetcher        # 系统镜像烧录工具
brew install --cask beyond-compare

# 云存储
brew install --cask baidunetdisk        # 百度网盘

# AI
brew install --cask cherry-studio

# 其他实用工具
brew install --cask parallels           # 虚拟机软件
brew install --cask calibre             # 电子书管理和阅读软件
brew install --cask thunder             # 迅雷下载工具
brew install --cask basictex            # LaTeX基础环境
brew install --cask wetype              # 输入法软件
brew install --cask jordanbaird-ice     # 菜单栏图标管理工具
```

### 手动安装 Software

```bash
A Better Finder Attributes 7  # 文件属性批量修改工具
App Cleaner & Uninstaller  # Mac系统清理和优化工具
Cubox  # 跨平台收藏夹和知识管理工具
Parallels Desktop  # 虚拟机软件
photoSweeper  # 重复照片查找和清理工具
Retrobatch  # 批量图片处理工具
Stash  # 代码片段管理工具
Texifier  # LaTeX编辑器
夸克网盘  # 阿里巴巴旗下的云存储服务
Follow
imFile
InjectGUI
```

### 安装 Git

```bash
brew install git 
```

### 安装 Node

```bash
brew install node 
```

### 安装 Python

#### 安装 Pyenv

使用 Homebrew 安装 `pyenv`：

```bash
brew install pyenv
```

#### 配置 Shell 环境

将 `pyenv` 添加到你的 Shell 配置文件（例如 `.zshrc` 或 `.bashrc`）中：

```bash
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
echo -e 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init --path)"\nfi' >> ~/.zshrc
```

然后重新加载配置文件：

```bash
source ~/.zshrc
```

#### 使用 Pyenv 安装和管理 Python 版本

运行以下命令查看可以安装的 Python 版本：

```bash
pyenv install --list
```

#### 安装指定版本的 Python

例如，安装 Python 3.10.9：

```bash
pyenv install 3.10.9
```

#### 设置全局或局部 Python 版本

- 设置全局 Python 版本（影响所有终端会话）：

	```bash
  pyenv global 3.10.9
  ```

- 设置局部 Python 版本（仅影响当前目录）：

	```bash
  pyenv local 3.10.9
  ```

### 配置 Python 虚拟环境

为了隔离项目依赖，建议结合 `pyenv-virtualenv` 使用虚拟环境。

#### 安装 Pyenv-virtualenv

```bash
brew install pyenv-virtualenv
```

将其添加到 Shell 配置文件：

```bash
echo 'eval "$(pyenv virtualenv-init -)"' >> ~/.zshrc
source ~/.zshrc
```

#### 创建虚拟环境

例如，基于 Python 3.13.2 创建一个虚拟环境：

```bash
pyenv virtualenv 3.13.2 myenv
```

激活虚拟环境：

```bash
pyenv activate myenv
```

退出虚拟环境：

```bash
pyenv deactivate
```

### 安装 Latex

```bash
brew install basictex 
```

如果找不到 tlmgr `tlmgr: command not found`，需要设置

```bash
export PATH="/usr/local/texlive/2025basic/bin/universal-darwin:$PATH"
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

### 安装字体

```bash
# Apple Fonts
brew install font-sf-pro
brew install font-sf-compact
brew install font-sf-mono
brew install font-new-york
# GOOLE Fonts
brew install font-open-sans
brew install font-noto-sans
brew install font-roboto
# LXGW Fonts
brew install --cask font-lxgw-neoxihei
brew install --cask font-lxgw-neozhisong
brew install --cask font-lxgw-wenkai
brew install --cask font-lxgw-wenkai-gb
brew install --cask font-lxgw-wenkai-lite
brew install --cask font-lxgw-wenkai-mono-tc
brew install --cask font-lxgw-wenkai-tc
brew install --cask font-lxgw-zhenkai

brew install font-sf-compact
brew install font-sf-mono
brew install font-sf-pro
brew install font-fontawesome
brew install font-lxgw-neoxihei
brew install font-lxgw-neozhisong
brew install font-lxgw-wenkai
brew install font-lxgw-wenkai-gb
brew install font-lxgw-wenkai-lite
brew install font-lxgw-wenkai-mono-tc
brew install font-lxgw-zhenkai
brew install font-new-york
brew install font-noto-sans
brew install font-open-sans
brew install font-roboto
```
