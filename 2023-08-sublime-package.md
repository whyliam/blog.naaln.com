---
layout: post
title: Sublime Text 无法调用 Install Package
date: 2023/08/29/ 20:00:00
categories:
  - 技术
tags:
  - 开发
  - Sublime Text  
---

最近 Sublime Text 无法调用 Install Package，我一度以为是我的电脑或者版本的问题。
记一下排查过程。

系统：Macos Ventura 13.5.1

Sublime Text 4152

首先，按 `^ \`` ，查看 sublime 的 console，可以发现

```
Traceback (most recent call last):
  File "/Users/nicoskaralis/Library/Application Support/Sublime Text/Installed Packages/Package Control.sublime-package/package_control/deps/oscrypto/_openssl/_libcrypto_ctypes.py", line 305, in <module>
  File "./python3.3/ctypes/__init__.py", line 366, in __getattr__
  File "./python3.3/ctypes/__init__.py", line 371, in __getitem__
AttributeError: dlsym(0x7f876fc44440, EVP_PKEY_size): symbol not found
```

主要的问题是

> MacOS Monterrey 系统使用的 OpenSSL v3.0.1，而 Sublime 以来的是 OpenSSL v2.8 以下的版本

修复：

```
brew install openssl@1.1 && ln -sf $(set -- `brew --cellar openssl@1.1`/1.1.1? && echo "$1")/lib/libcrypto.dylib /usr/local/lib/

# 如果 openssl@1.1 已经安装可以
ln -sf /usr/local/Cellar/openssl@1.1/1.1.1v/lib/libcrypto.dylib /usr/local/lib
# 在重新启动 Sublime Text 就好了
```
