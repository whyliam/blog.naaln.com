---
layout: post
title: 豆瓣Code系统的开源计划
date: 2014/02/11 21:57:00
categories:
  - 技术
tags:
  - git
  - douban
  - opensource
  - platform
  - python
description: 
  豆瓣开发了Code系统，一个基于git的协作平台。系统采用Quixote框架、Mako模板、MySQL数据库和Memcached缓存等组件。支持创建项目、管理用户和代码推送协作功能。系统从2012年起内部使用，2014年开源开源计划包括部署环境配置和自定义配置文件等指南。
---

豆瓣为了解决自身的开发流程，代码管理，上线等问题，开发一套系统，内部称作 "Code"，随着这套系统的完善，希望可以有更多的人可以使用这套系统，并且参与这套系统的开发，豆瓣准备将 Code 开源，吸引更多的人加入其中。

CODE 是什么 C: Community O: Original D: Developer E: Eldamar 一个基于 git 版本控制系统的协作平台。

CODE 为何开源 希望更多的人可以使用 CODE，希望更多的人可以一起开发 CODE。

### CODE 的架构

- Web：Quixote
- Template：Mako
- MySQL：DoubanSQLStore
- Memcached：DoubanMC
- git：Pygit2 & git(shell)

![请输入图片描述][1]

CODE 的历史 CODE 的第一行代码开始于 2012 年 2 月 14 日，在豆瓣内部使用已有 2 年，Web 框架也从 Bottle 迁移 到 Quixote，依旧在不停的进化中。CODE 的开源计划 CODE 是从去年年初 (2013) 开始，就已经把使用中的一些基础库开源了，像:

- [PyCharlockHolmes][2]
- [linguist][3]
- [ellen][4]
- [gpack][5]
- [scanner][6] 今年 (2014) 2 月 14 日，CODE 也正式开源了。

**Staring 目前 CODE 仅开放了一个框架，支持：**

- clone & push project
- create project
- create user

* * *

### 准备环境

- MySQL
- Memcached
- Python
- pip
- virtualenv
- git

* * *

### 部署

```
   git clone https://github.com/douban-code/code.git
   cd code
   mysql -uroot -e 'create database valentine;'
   mysql -uroot -D valentine &lt; code/databases/schema.sql
   virtualenv venv
   . venv/bin/activate
   pip install cython
   pip install -U setuptools
   pip install -r requirements.txt
   gunicorn -w 2 -b 127.0.0.1:8000 app:app
```

### 定制 Config

创建自己的 config 文件

```
   touch {CODE_REPO}/code/local_config.py
```

覆盖 `code/config.py` 默认设置

```
   vim {CODE_REPO}/code/local_config.py
```

---

### FAQ

1. code.config.DOMAIN 是指的是程序运行的域名，包含 IP 地址和端口，例如: `http://127.0.0.1:8000/`

 [1]: http://douban-code.github.io/images/code-arch.svg

 [2]: https://github.com/douban/PyCharlockHolmes

 [3]: https://github.com/douban/linguist

 [4]: https://github.com/douban/ellen

 [5]: https://github.com/douban/gpack

 [6]: https://github.com/cuteio/scanner
