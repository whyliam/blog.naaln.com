---
layout: post
title: Mac上MySQL报错：ERROR 2002 (HY000)
date: 2015/03/26 16:51:00
categories:
- 技术
tags:
- mysql
---

为什么在Mac上装一个MySQL这么的难？据说用HomeBrew容易装，可我发现还是要一堆配置，配置过后还是没成功。我尝试过两种安装方式：

1. HomeBrew

```
export ARCHFLAGS="-arch i686 -arch x86_64"
brew install mysql
```

用brew安装好后，还需要按照这个命令输出的信息进行配置：

```
brew info mysql
```

用这种方式安装好后，MySQL没法启动。出现如下错误：

```
mysql -uroot -p
ERROR 2002 (HY000): Can't connect to local MySQL server through socket '/tmp/mysql.sock'
```

2. 从MySQL官网下载64位的。dmg文件进行安装

用这种方式安装成功后，mysql.server start启动成功。但是，还是出现跟上面一样的错误。

只有通过这种方式才能正常打开MySQL：

```
mysql -uroot -h127.0.0.1 -p
```
**正确的安装步骤：**

1. 执行：

```
$ brew install mysql
```
2. 在 /usr/local/etc/ 下创建或修改 my.cnf，示例：

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

3. 赞安装完 mysql 后，他会提示你 init database，并提供下面这两句让你执行，很可能你没执行这两句

```
$ unset TMPDIR
$ mysql_install_db --verbose --user=`whoami` --basedir="$(brew --prefix mysql)" --datadir=/usr/local/var/mysql --tmpdir=/tmp
```

4. 然后就可以指向 mysql.server start 来启动了，为了安全，你还可以执行安全设置向导，根据提示一步一步配置

```
$ mysql_secure_installation
```

原先遇到类似问题剪辑的内容，出处忘了

