---
title: 试用 Celery
date: 2016-06-28 12:25:53
tags:
categories:
- 技术
---

> `Celery` 是一个「自带电池」的任务队列。它易于使用，所以你可以无视其所解决问题的复杂程度而轻松入门。它遵照最佳实践设计，所以你的产品可以扩展，或与其他语言集成，并且它自带了在生产环境中运行这样一个系统所需的工具和支持。

### 选择中间人

> `Celery` 需要一个发送和接收消息的解决方案，其通常以独立服务形式出现， 称为 消息中间人 。

1. [RabbitMQ](http://docs.jinkan.org/docs/celery/getting-started/first-steps-with-celery.html#rabbitmq) 功能完备、稳定、耐用，并且安装简便，是生产环境的绝佳选择。
2. [Redis](http://docs.jinkan.org/docs/celery/getting-started/first-steps-with-celery.html#redis) 也是功能完备的，但更易受突然中断或断电带来数据丢失的影响。
3. 不推荐把 [数据库](http://docs.jinkan.org/docs/celery/getting-started/first-steps-with-celery.html#id4) 用于消息队列，但对于很小的项目可能是合适的。你的选择包括：`SQLAlchemy` 和 `Django Database`。
4. [其他](http://docs.jinkan.org/docs/celery/getting-started/first-steps-with-celery.html#id5) 除了上面列出的之外，还有其他的实验性传输实现可供选择，包括 Amazon SQS 、 Using MongoDB 和 IronMQ 。
5. 中间人概览

![](http://pics.naaln.com/blog/2019-01-14-060754.jpg-basicBlog)

### 安装 Celery

```zsh
$ pip install celery
```

### 应用

我有一个网址，用户需要提交信息，我会给用户创建一个报告，并发送到用户的邮箱。但是，报告的创建时间需要话费10秒，有一些数据需要实时生成，有一些需要花费大量的计算时间。

所以我的解决方案是异步处理，用户先提交信息，我在报告创建完成后进行发送。

![](http://pics.naaln.com/blog/2019-01-14-060755.jpg-basicBlog)

### 例子

`tasks.py`
```python
from celery import Celery
from createreport import CreateReport

app = Celery('tasks', broker='redis://localhost')
# 我选择redis做为中间件

@app.task
def starcase(info):
    result = CreateReport(info)
    return result
```

代码解释：我们需要一个 celery 实例来启动程序，因此创建了一个名为 app 的 celery 实例。

在3个终端中启动：

第一个终端，运行 `redis-server`

第二个终端，运行` celery worker -A tasks -l info -c 5` ，通过输出可以看到 `celery` 成功运行。

第三个终端，运行脚本 `python tasks.py`

![](http://pics.naaln.com/blog/2019-01-14-060756.jpg-basicBlog)

可以看到 接受到了一个`4A9D2A83-E273-40CB-***` 的任务，并在8.2秒后执行完成，返回的结果是 10040。

