---
layout: post
title: Flask 源码阅读注释版 目录结构
date: 2016/05/03 12:20:59
categories:
  - 技术
description: 
  Flask项目源码结构深度解析，涵盖完整目录结构说明、核心模块功能介绍、配置管理三种方式详解、__init__.py模块导入机制、config.py配置对象实现、globals.py全局变量定义等关键内容，提供系统性源码阅读指导与学习路径。
tags:
  - Flask
  - Python
  - 源码分析
  - Web框架
  - 配置管理
---

### 目录结构

```

Flask-

|- artwork/                  #证书和logo

|- AUTHORS                   #作者

|- CHANGES                   #更新

|- CONTRIBUTING.rst          #贡献

|- docs/                     #文档

|- examples/                 #例子，方便快速入门

|- scripts/                  #一些脚本

|- flask/                    #要读的代码
    |- __init__.py
    |- __main__.py
    |- _compat.py
    |- app.py                #主体: Flask,Request,Response
    |- blueprints.py         #blueprint,蓝图
    |- cli.py
   D |- config.py            #项目配置文件的处理逻辑
    |- ctx.py                #上下文处理的一些方法
    |- debughelpers.py
    |- exthook.py
   D |- globals.py           #全局变量
    |- helpers.py            #一些辅助方法的实现
    |- json.py               #json相关
    |- logging.py
    |- sessions.py
    |- signals.py
    |- templating.py         #模板渲染相关
    |- testsuite/            #测试
    |- views.py
    |- wrappers.py
    |- ext/                  #扩展

```

以下以阅读顺序列出一些笔记

建议先去看 werkzeug 源码，依赖很多

### init.py

[init.py](https://github.com/pallets/flask/blob/master/flask/__init__.py)

将所有变量从对应模块中 import 进来放到这里，然后可以直接通过

```

from flask import XXXX

```

方便处理

项目依赖于

```

werkzeug

jinja2

```

### config.py

[config.py](https://github.com/pallets/flask/blob/master/flask/config.py)

#### 定义了两个对象

```

ConfigAttribute(object)  #转换attr到配置

Config(dict)             #具体配置对象，可以通过三种方式给Config加配置

```

#### Config 的三个方法

```

def from_envvar(self, variable_name, silent=False)

def from_pyfile(self, filename, silent=False)      #文件，会将文件转为模块对象

def from_object(self, obj)                         #模块对象

注意：只读大写开头的

```

这里定义了三种方法，所以你可以通过三种不同的方式初始化 flask 配置

1.从文件

```

app.config.from_pyfile('yourconfig.cfg')

```

2.从模块对象

```

DEBUG = True

SECRET_KEY = 'development key'

app.config.from_object(__name__)

```

3.从环境变量

```

shell: export YOURAPPLICATION_SETTINGS='/path/to/config/file'

app.config.from_envvar('YOURAPPLICATION_SETTINGS')

```

### 扩展

#### 1

```

import imp

d = imp.new_module('config')

with open(filename) as config_file:
   exec(compile(config_file.read(), filename, 'exec'), d.__dict__)

```

#### 2

```

import errno

except IOError as e:
   if silent and e.errno in (errno.ENOENT, errno.EISDIR)

```

#### 3.继承父类的 Init 方法

```

def __init__(self, root_path, defaults=None):
   dict.__init__(self, defaults or {})

```

#### 4

```

from werkzeug.utils import import_string

if isinstance(obj, string_types):
   obj = import_string(obj)

```

### globals.py

[globals.py](https://github.com/pallets/flask/blob/master/flask/globals.py)

#### 定义了全局变量

```

from werkzeug.local import LocalStack, LocalProxy

_request_ctx_stack = LocalStack()             #request上下文

_app_ctx_stack = LocalStack()                 #app上下文

current_app = LocalProxy(_find_app)           #当前app, 从 _app_ctx_stack捞

request = LocalProxy(partial(_lookup_req_object, 'request'))  #request对象，从_request_ctx_stack捞

session = LocalProxy(partial(_lookup_req_object, 'session'))  #session对象，从_request_ctx_stack捞

g = LocalProxy(partial(_lookup_app_object, 'g'))              #g对象， 从 _app_ctx_stack捞

```

#### 扩展

##### 1

```

from functools import partial

session = LocalProxy(partial(_lookup_req_object, 'session')) #session对象，从_request_ctx_stack捞

```

#### 2

```

if top is None:
   raise RuntimeError('working outside of application context')

```

#### 3

```

from werkzeug.local import LocalStack, LocalProxy

```
