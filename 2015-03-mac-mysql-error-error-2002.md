---
layout: post
title: Mac上MySQL报错：ERROR 2002 (HY000)
date: 2015/03/26 16:51:00
categories:
  - 技术
tags:
  - MySQL
  - macOS
  - Homebrew
  - socket
  - config
description: 
  在Mac上安装MySQL时，使用Homebrew或dmg会出现socket错误，解决方案包括在/usr/local/etc/my.cnf指定socket路径和字符集，运行mysql_install_db初始化数据库，执行mysql_secure_installation完成安全配置，最后启动mysql.server即可正常连接。
---

为什么在 Mac 上装一个 MySQL 这么的难？据说用 HomeBrew 容易装，可我发现还是要一堆配置，配置过后还是没成功。我尝试过两种安装方式：

1. HomeBrew

```
export ARCHFLAGS="-arch i686 -arch x86_64"
brew install mysql
```

用 brew 安装好后，还需要按照这个命令输出的信息进行配置：

```
brew info mysql
```

用这种方式安装好后，MySQL 没法启动。出现如下错误：

```
mysql -uroot -p
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock'
```

1. 从 MySQL 官网下载 64 位的。dmg 文件进行安装

用这种方式安装成功后，mysql.server start 启动成功。但是，还是出现跟上面一样的错误。

只有通过这种方式才能正常打开 MySQL：

```
mysql -uroot -h127.0.0.1 -p
```

**正确的安装步骤：**

1. 执行：

```
$ brew install mysql
```

1. 在 /usr/local/etc/ 下创建或修改 my.cnf，示例：

```
[client]
port = 3306
socket = /tmp/mysql.sock
default-character-set = utf8

[mysqld]
collation-server = utf8_unicode_ci
character-set-server = utf8
init-connect ='SET NAMES utf8'
max_allowed_packet = 64M
bind-address = 127.0.0.1
port = 3306
socket = /tmp/mysql.sock
innodb_file_per_table=1

[mysqld_safe]
timezone = '+0:00'
```

1. 赞安装完 mysql 后，他会提示你 init database，并提供下面这两句让你执行，很可能你没执行这两句

```
$ unset TMPDIR
$ mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
```

1. 然后就可以指向 mysql.server start 来启动了，为了安全，你还可以执行安全设置向导，根据提示一步一步配置

```
$ mysql_secure_installation
```

原先遇到类似问题剪辑的内容，出处忘了
