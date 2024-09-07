---
layout: post
title: 群晖docker启动失败
date: 2024/07/16 09:39:00
categories:
  - 技术
tags:
---

今天瞎搞在黑群晖上点升级系统，没有提前关闭docker，重启后docker一直启动失败，点击修复也会失败，排查了好久

```bash
root@Znas:/var/packages/Docker/conf/systemd# systemctl start pkg-Docker-dockerd.service
Job for pkg-Docker-dockerd.service failed. See "systemctl status pkg-Docker-dockerd.service" and "journalctl -xe" for details.
```



```bash
root@Znas:/var/packages/Docker/conf/systemd# systemctl status pkg-Docker-dockerd.service
pkg-Docker-dockerd.service - Docker Application Container Engine
   Loaded: loaded (/usr/local/lib/systemd/system/pkg-Docker-dockerd.service; static; vendor preset: disabled)
   Active: failed (Result: start-limit) since Sun 2023-03-19 22:09:51 CST; 13s ago
     Docs: https://docs.docker.com
  Process: 26739 ExecStart=/var/packages/Docker/target/usr/bin/dockerd --config-file /var/packages/Docker/etc/dockerd.json (code=exited, status=1/FAILURE)
 Main PID: 26739 (code=exited, status=1/FAILURE)

Mar 19 22:09:49 Znas systemd[1]: Failed to start Docker Application Container Engine.
Mar 19 22:09:49 Znas systemd[1]: Unit pkg-Docker-dockerd.service entered failed state.
Mar 19 22:09:49 Znas systemd[1]: pkg-Docker-dockerd.service failed.
Mar 19 22:09:51 Znas systemd[1]: pkg-Docker-dockerd.service holdoff time over, scheduling restart.
Mar 19 22:09:51 Znas systemd[1]: start request repeated too quickly for pkg-Docker-dockerd.service
Mar 19 22:09:51 Znas systemd[1]: Failed to start Docker Application Container Engine.
Mar 19 22:09:51 Znas systemd[1]: Unit pkg-Docker-dockerd.service entered failed state.
Mar 19 22:09:51 Znas systemd[1]: pkg-Docker-dockerd.service failed.
```



在进一步的追查日志中

```bash
journalctl -xe |grep docker
```



肉眼归纳错误如下

```bash
Mar 19 22:09:49 Znas dockerd[26739]: unable to configure the Docker daemon with file /var/packages/Docker/etc/dockerd.json: invalid character '}' looking for beginning of object key string
```



查看对应文件 `/var/packages/Docker/etc/dockerd.json`

```bash
{
   "data-root" : "/var/packages/Docker/var/docker",
   "log-driver" : "db",
   "registry-mirrors" : [],
   "storage-driver" : "btrfs",
}
```



打开另一台群晖进行比对

```bash
{
   "data-root" : "/var/packages/Docker/var/docker",
   "log-driver" : "db",
   "registry-mirrors" : [],
   "storage-driver" : "btrfs"
}
```



发现重装后，docker的配置文件多了一个逗号，删掉！

然后直接进入群晖web页面，点击修复（直接`systemctl start pkg-Docker-dockerd.service` 不会成功，涉及到网卡的一些配置）。等待修复完成就成功启动了。