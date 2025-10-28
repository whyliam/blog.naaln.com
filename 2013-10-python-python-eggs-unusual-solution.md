---
layout: post
title: python python-eggs 异常解决方法
date: 2013/10/04 09:23:00
categories:
- 技术
tags:
- Python
- 错误解决
- 安全
- 权限管理
description: Python eggs目录权限安全警告解决方案。针对pkg_resources模块发出的安全警告："python-eggs目录可被组和其他用户写入，存在安全风险"，提供简洁有效的修复方法。通过chmod命令移除组和其他用户对.python-eggs目录的写权限，解决潜在的安全漏洞。是Python开发者在部署和配置环境时遇到常见安全问题的实用解决指南。
---

```
/Application/bermuda/lib/python2.6/site-packages/pkg\_resources.py:1054: UserWarning: /home/refresh/.python-eggs is writable by group/others and vulnerable to attack when used with get\_resource\_filename. Consider a more secure location (set with .set\_extraction\_path or the PYTHON\_EGG_CACHE environment variable). warnings.warn(msg, UserWarning)
```

解决办法

进入 `/home/refresh/`

```
chmod g-wx,o-wx .python-eggs/
```

就是给个权限~
