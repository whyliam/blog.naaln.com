---
layout: post
title: Docker 初步试玩
date: 2016/05/19 22:13:49
categories:
- 技术
tags:
- Docker
---

昨天调试完`Codeship`和`EC2`的连接后开始尝试，连接`Docker`

`Docker`之所以有用，是因为把代码从一个机器迁移到另一个机器经常是困难的。它尝试去使得软件迁移的过程变得更加可信和自动化。`Docker` 容器可以移植到所有支持运行 `Docker` 的操作系统上。

### 安装

简答一点，我直接安装 [Docker Toolbox](https://www.docker.com/products/docker-toolbox).

我们使用`Terminal`进入`Docker`

```bash

➜  ~ bash '/Applications/Docker Quickstart Terminal.app/Contents/Resources/Scripts/start.sh'
                       ##         .
                 ## ## ##        ==
              ## ## ## ## ##    ===
          /"""""""""""""""""\___/ ===
     ~~~ {~~ ~~~~ ~~~ ~~~~ ~~~ ~ /  ===- ~~~
          \______ o           __/
            \    \         __/
             \____\_______/

docker is configured to use the default machine with IP 192.168.99.100

For help getting started, check out the docs at https://docs.docker.com

```

`docker info`来查看我们安装的Docker信息:

```

➜  ~ docker info

Containers: 0

Running: 0

Paused: 0

Stopped: 0

...

```

### 试玩

比如从官方获取`centos 7`

```

➜  ~ docker pull centos:7

```

查看获取的系统

```

➜  ~ docker images

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE

centos              7                   8596123a638e        2 days ago          196.7 MB

```

运行

```bash

➜  ~ docker run -it centos:7

[root@950a6fcf0182 /]#

```

随便安装一点东西，比如nodejs

```bash

[root@950a6fcf0182 /] #curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -

[root@950a6fcf0182 /] #yum -y install nodejs gcc-c++ make

[root@950a6fcf0182 /]# node -v

v4.4.4

```

退出`Docker`

```

[root@950a6fcf0182 /]# exit

```

查看刚刚运行的`Docker`

```

➜  ~ docker ps -a

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                                PORTS               NAMES

950a6fcf0182        centos:7            "/bin/bash"         4 minutes ago       Exited (127) Less than a second ago                       naughty_yalow

```

使用`commit`命令用来将容器转化为镜像

```

➜  ~ docker commit -m "Added nodejs to centos 7" -a "whyliam" 950a6fcf0182 whyliam/centos-nodejs:1.0

```

`commit -m "Added nodejs to centos 7"` 参数用来来指定提交的说明信息

`-a "whyliam"` 用户信息

`950a6fcf0182` 代表的时容器的id

`whyliam/centos-nodejs`指定目标镜像的用户名、仓库名和 tag 信息

`1.0` 版本号

### 上传到 Docker Hub

登入`Docker`

```

➜  ~ docker login

```

上传镜像

```

➜  ~ docker push whyliam/centos-nodejs:1.0

```

然后我们可以去 Docker Hub 上查看，

![](http://pics.naaln.com/blog/2019-01-14-060809.jpg-basicBlog)

----------

