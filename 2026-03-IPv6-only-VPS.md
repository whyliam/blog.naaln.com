---
layout: post
title: 一次 IPv6-only 服务器的踩坑与自救记录
date: 2026/03/24 11:29:00
categories:
  - 随笔
tags:
  - IPv6
  - VPS
  - SSH
  - Cloudflare
  - CloudCone
description: 使用 Cloudflare WARP 解决本地单一 IPv4 网络的访问限制，以及在官方快捷配置失效的情况下，如何通过 VNC 终端手动修改服务器 DNS 解析并安全导入 SSH 密钥，最终成功实现本地终端远程连接的实战经验。
---

### 记一次纯 IPv6 VPS 的踩坑与本地 SSH 连接修复过程

随着 OpenClaw 框架的不断完善，我近期开发了一款名为 ClawFarm 的文字游戏。为完成游戏的独立部署，我购买了 Hiclaws.io 域名并初步部署在阿里云上。由于国内服务器存在域名备案的限制，我将服务器迁移至了性价比极高的 [CloudCone](https://app.cloudcone.com/?ref=14059)。

为了极致的成本控制，我购买了一台仅分配 IPv6 地址的 VPS。这带来了一系列网络连通性与 SSH 登录的挑战。本文记录了从失联到最终成功连接的完整排查与解决过程。

#### 挑战一：本地 IPv4 网络无法访问 IPv6 服务器

起初，本地终端完全无法连接服务器。我误判为系统级故障，尝试了多次重装系统甚至开启了 RECOVERY 模式（最终需要提交工单由客服协助关闭）。

经过排查，根本原因在于家用宽带通常仅分配 IPv4 地址，无法直接路由访问纯 IPv6 的目标地址。

**解决方案：配置 Cloudflare WARP**

为了让本地网络具备 IPv6 访问能力，我下载并启用了 WARP by Cloudflare。WARP 是 Cloudflare 提供的一项网络路由与安全服务。它可以在本地设备与 Cloudflare 的骨干网之间建立加密隧道。对于仅有 IPv4 的网络环境，WARP 能够为其分配一个虚拟的 IPv6 地址，从而打通本地终端到纯 IPv6 服务器的网络链路。

开启 WARP 后，我终于可以在 [CloudCone](https://app.cloudcone.com/?ref=14059) 的产品控制台点击 VNC 成功登入服务器后台。

#### 挑战二：SSH 密钥配置的「死循环」

虽然通过网页 VNC 能够进入服务器，但本地 Terminal 的 SSH 连接依然失败。

控制台提示通过官方脚本安装 SSH Key：

```
Step 1: Connect via SSH
ssh root@2607:f130:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx
Step 2: Install the SSH Key
curl -o cc-ikey -L web.cloudc.one/sh/key && sh cc-ikey xxxx
```

由于 `web.cloudc.one` 的内部系统出现故障，该脚本地址无法访问。提交工单后，官方客服建议我使用本地的 `ssh-copy-id` 工具将密钥推送到服务器。这显然形成了一个逻辑闭环：`ssh-copy-id` 的执行前提是本地能够成功 SSH 登入服务器，而在缺少公钥的情况下我根本无法登入。

因此，必须通过 VNC 终端手动完成服务器端的网络调整与公钥导入。

#### 实践步骤：手动配置 SSH 与导入公钥

**1. 临时放开 SSH 密码登录**

为了方便调试，首先需要确保服务器允许基础的密码登录。在 VNC 中使用编辑器修改 SSH 配置文件：

```
nano /etc/ssh/sshd_config
```

找到并修改以下参数：

```
PermitRootLogin yes
PasswordAuthentication yes
```

保存后重启 SSH 服务：

```
systemctl restart sshd
```

_解释：开启这两项可以确保在公钥验证失败时，系统依然允许通过 Root 账户和密码进行基础登录排查。_

**2. 修复纯 IPv6 环境下的 DNS 解析**

在准备通过 `curl` 命令从外部（如阿里云 OSS）下载我的公钥文件时，发现服务器无法解析外部域名。纯 IPv6 环境往往缺乏对部分站点的解析能力，需要手动配置 DNS 服务器。

编辑 `/etc/resolv.conf` 文件，追加常用的 IPv4 和 IPv6 DNS 节点：

```
nameserver 2001:67c:2b0::4
nameserver 2001:67c:2b0::6
nameserver 2400:3200::1
nameserver 2400:3200:baba::1
nameserver 8.8.8.8
nameserver 8.8.4.4
```

_解释：补充这些公共 DNS（如 Google DNS 及阿里 DNS）能让服务器正常解析外部域名，保障后续下载操作顺利进行。_

**3. 下载并配置 authorized_keys**

在具备解析能力后，可以开始手动导入公钥。

首先，确保 SSH 目录存在并设置正确权限（如果目录已存在，这些命令不会报错）：

```
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

将预先上传至其他服务器（如 OSS）的公钥下载并追加到 `authorized_keys` 文件中：

```
curl -L https://xxx.oss-cn-hangzhou.aliyuncs.com/xxx.pub >> ~/.ssh/authorized_keys
```

SSH 守护进程对权限要求非常严格。如果权限过高，出于安全考虑系统会拒绝连接。需严格限制文件权限：

```
chmod 600 ~/.ssh/authorized_keys
```

修改完成后，再次重启 SSH 服务：

```
systemctl restart sshd
```

#### 最终连接

配置完成后，需要在服务器内确认网卡的实际 IPv6 地址。执行 `ip addr` 命令查看：

```
[root@hiclaws opt]# ip addr
...
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    ...
    inet6 2607:f130:0:179::xxxx:xxxx/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
...
```

找到 `eth0` 网卡下标识为 `scope global` 的公网地址。回到开启了 WARP 的本地终端，指定 IPv6 协议发起连接：

```
ssh -6 root@2607:f130:0:179::xxxx:xxxx
```

#### 修复 Docker 容器的 IPv6 网络连接

在完成服务器的基础配置后，后续部署 ClawFarm 游戏服务端大概率会依赖 Docker。默认情况下，Docker 并不原生支持 IPv6 网络，这会导致容器内部无法进行外部网络通信。为了让所有容器均能获得 IPv6 访问能力且无需频繁使用 `host` 网络模式，我们需要对 Docker 守护进程进行全局配置。

**1. 修改 Docker 配置文件**

编辑 `/etc/docker/daemon.json` 文件（如果该文件不存在则直接创建）：

```
nano /etc/docker/daemon.json
```

写入以下配置参数：

```
{
  "ipv6": true,
  "fixed-cidr-v6": "fd00::/80",
  "experimental": true,
  "ip6tables": true
}
```

_解释：上述参数启用了 Docker 的实验性功能与 IPv6 支持，开启了 `ip6tables` 流量转发，并为容器指定了一个私有的 IPv6 本地子网（`fd00::/80`）。_

**2. 生效配置并重启服务**

保存文件退出后，重新加载 systemd 守护进程并重启 Docker 服务：

```
systemctl daemon-reload
systemctl restart docker
```
