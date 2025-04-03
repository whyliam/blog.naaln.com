---
title: libfaketime 改变软件的运行时间
categories:
  - 技术
date: 2019/04/21 21:30:53
tags:
  - 破解
---

### Libfaketime

libfaketime: 主要是拦截了程序调用获取当前时间的系统调用。然后会将你修改 (假的) 后的时间返回给这些程序。这样的话你可以单独修改一个程序的获取的时间，而不用修改整个系统的时间。

### 安装 Libfaketime

有两种方法安装，brew 和编译源码安装。brew 安装的版本有点老，在最新的 macos 系统已经不行了，运行时会报错。

**通过 brew 安装**

```
brew install libfaketime coreutils
```

**源码编译安装**

```
git clone https://github.com/wolfcw/libfaketime.git
make
sudo make install
```

### 使用 Faketime 来运行 Surge

#### 下载 Surge

前提是 surge 在你电脑上面没有过试用期，过了试用期就没有办法了。已经有了正版的序列号的也不要用这种方法，可能会被拉黑了。

先下载 surge， 目前只能下载 Surge-2.5.1-528.zip 这个版本及以前版本，不能从官网下载，官网的所有版本都更新了相应的机制来预防 libfaketime。

#### 安装 Surge 并运行

先打开试用，更新配置，关闭软件的自动更新。正常使用后，退出软件。

使用下面命令，通过 faketime 启动 surge

```
$ faketime '@2007-01-01 00:00:00' /Applications/Surge.app/Contents/MacOS/Surge &
```

不过如果直接用上面的命令的运行，faketime 的 cpu 占用非常大，让电脑一直发热。我们设置 `FAKETIME_STOP_AFTER_SECONDS=10`， 就让它运行 10s 后自动关闭，因为软件只是在启动的时候检测一下时间，运行后退出 libfaketime 节省 cpu。

```
$ FAKETIME_STOP_AFTER_SECONDS=10 faketime -f '@2007-01-01 00:00:00' /Applications/Surge.app/Contents/MacOS/Surge &
```

关闭终端
