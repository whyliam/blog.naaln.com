---
title: 如何备份导出 IOS 微信聊天数据库
date: 2016/11/24 09:31:24
categories:
- 技术
tags:
- 微信
---

网络上已经有一些关于探讨如何导出 IOS 版微信聊天记录的导出，比如 WeBack 和 iTools ，但这两类工具主导针对的都是小白用户，并没有给出如何获取完整数据库的方案，尽管实际原理相差无几，但想要程序更好地进行操作数据，还是所有差别，特此记录。

目前最新的 IOS 版本为 10.1.1，据观察该版本的备份文件存储格式与 IOS9 略有不同，因此部分没有及时更新的导出工具暂时无法使用。

### 创建 iPhone 备份

想要获取到应用的具体数据，就先要将数据以备份的形式先存储在电脑上，本文以 Mac 系统为例。

首先，使用数据线将手机连接上电脑，如果是首次连接，需要选择 信任该电脑。

然后打开 iTunes，找到正在连接的手机：

![](http://pics.naaln.com/blog/2019-01-14-032512.jpg-basicBlog)

在 `备份` 区域内，选择 `本电脑`，并务必取消勾选 `给 iPhone 备份加密`，否则之后我们取出的数据也是无法使用的：

![](http://pics.naaln.com/blog/2019-01-14-032513.jpg-basicBlog)

接着，点击 `立即备份` 并等待备份完成：

![](http://pics.naaln.com/blog/2019-01-14-032514.jpg-basicBlog)

### 获取微信数据库

为了方便地取出相应的备份数据，我们需要借助工具 [iPhone Backup Extractor](http://www.iphonebackupextractor.com/free-download/) ，虽然这是一款收费软件，但是试用的功能已经完全满足我们的需求。

下载安装后，在左侧列表找到我们刚刚创建的备份文件（图标为 iTunes 样式的）：

![](http://pics.naaln.com/blog/2019-01-14-032515.jpg-basicBlog)

单击之后需要等待加载完成，大约需要几十秒。加载完毕之后，我们就可以选择专家模式（Expert Mode）：

![](http://pics.naaln.com/blog/2019-01-14-032519.jpg-basicBlog)

我们需要的文件为 `Application Domains/com.tencent.xin/{UUID}/DB/MM.sqlite`，将其勾选：

![](http://pics.naaln.com/blog/2019-01-14-032520.jpg-basicBlog)

在 com.tencent.xin 目录下会有多个 UUID 组成的目录，其中一个全部为 0 可以忽略。剩下就需要根据你的微信用户来选择了（如果知道算法的小伙伴请不吝赐教！），我的手机只登陆过一个微信号，所以没有这个麻烦：

![](http://pics.naaln.com/blog/2019-01-14-032521.jpg-basicBlog)

最后，就可以单击右下角的 Extract 按钮导出数据库了：

![](http://pics.naaln.com/blog/2019-01-14-32522.jpg-basicBlog)

大功告成！

至于数据库里面的具体关系，大家可以参阅文章 [iOS 微信的本地存储结构简析](https://blog.naaln.com/2016/11/wechat-data-structure/)。

来源： [如何备份导出 IOS 微信聊天数据库](https://github.com/Unknwon/wuwen.org/issues/15?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)
