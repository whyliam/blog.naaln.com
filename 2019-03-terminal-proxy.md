---
title: terminal 设置 代理
categories:
  - 技术
date: 2019/03/25 20:30:53
tags:
---

## 方法一，ShadowsocksX-NG（推荐）

### 配置

复制`终端代理命令`

![](http://pics.naaln.com/blog/2019-03-27-105606.jpg-basicBlog)

在`.zshrc`中配置

```
alias setproxy='export http_proxy=http://127.0.0.1:1086;export https_proxy=http://127.0.0.1:1086;' # 终端代理命令
alias disproxy='unset http_proxy https_proxy'
alias ip='curl cip.cc'
```

### 使用

`setproxy`使用代理，`disproxy`取消代理，`ip`代理是否启用。

## 方法二，Proxifier

### 1. 简介
Proxifier，这软件真心是 Mac 上的神器，目前 VPN 翻墙会受到干扰，比如经常连接不上，限速问题，而 Shadowsocks 的 socks5 代理又不是全局代理，部分软件不支持代理，但是有些软件还好，比如 Dropbox 可以在软件内设置本地代理，而 Xcode、Dash、iTerm 这类软件无法代理，如果用 Proxifier 设置好 socks5 代理，应用内下载速度会变得非常快，Proxifier 可以让不支持代理的软件支持代理

### 2. 配置

配置`代理`的网络请求

![](http://pics.naaln.com/blog/2019-03-27-105608.jpg-basicBlog)

配置需要使用代理的软件

![](http://pics.naaln.com/blog/2019-03-27-105609.jpg-basicBlog)

DNS 里的配置可以强制远程解析 DNS

![](http://pics.naaln.com/blog/2019-03-27-105610.jpg-basicBlog)