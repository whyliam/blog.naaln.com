---
layout: post
title: 有道翻译发音失败
date: 2020/02/23 20:00:00
categories:
- 技术
tags:
- 
---

在使用 [whyliam.workflows.youdao](https://github.com/whyliam/whyliam.workflows.youdao)  的时候，有时候会发音失败。

这个问题一般是在 Catalina 正式版会出现的问题，say 命令反馈错误信息是：

```
say --voice='Samantha'  hello
Open speech channel failed: -76
```

多方查看 say 相关进程信息，`ps ax |grep speechsynthesisd`，意外发现重置相关进程可以解决。

```
sudo pkill speechsynthesisd say
```

感谢：[Kleist's Blog](https://blog.kleist.top/2019/10/11/%E5%85%B3%E4%BA%8E-macOS-%E5%8D%87%E7%BA%A7%E5%88%B0-Catalina-%E4%B9%8B%E5%90%8E-say-%E5%91%BD%E4%BB%A4%E5%A4%B1%E6%95%88%E7%9A%84%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)

同时，在 Calalina 之后由于系统隔离并且加强了权限管理，导致这一功能需要重置 Alfred 的权限，原本上版本系统中获取的权限已经失效了。

在终端中输入以下命令，并且重新打开

```
tccutil reset All com.runningwithcrayons.Alfred
```

然后重新打开 Alfred ，会提示获取权限，或者从 Alfred 的 General 中点击 Request Permissions.