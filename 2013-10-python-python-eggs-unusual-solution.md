---
layout: post
title: python python-eggs 异常解决方法
date: 2013/10/04 09:23:00
categories:
  - 技术
tags:
  - Python
  - warning
  - security
  - chmod
description: "目录/home/refresh/.python-eggs因可写组其他用户而不安全，chmod命令修改权限至g-wx,o-wx。"
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
