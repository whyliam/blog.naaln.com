---
layout: post
title: android studio的IllegalAccessError错误
date: 2015/03/04 14:31:00
categories:
  - 技术
tags:
  - AndroidStudio
  - JARImport
  - Gradle
description: 在Android平台开发微信插件过程中，使用Android Studio导入JAR包时遭遇IllegalAccessError错误。通过深入研究，发现问题源于依赖配置，将build.gradle中的compile改为provided后成功解决该错误，顺利完成微信启动抓取功能的实现。
---

最近在写一个 `微信` 的插件，因为我使用的是 `android` 的平台。所以我也尝试着使用 `android studio`，由于本人 android 学得不好，真的就只能用尝试来形容。

但是在第一步就遇到了关卡，`android studio` 的 jar 的导入和 eclipse 不太一样。（这是个小问题，只是自己不会用 `android studio` 而已。

主要问题是在 jar 导入后，报错 `IllegalAccessError` 错误。

	 java.lang.IllegalAccessError: Class ref in pre-verified class resolved to unexpected implementation

查了一晚上资料后没有找到很好的解决方案。

后来发现编译的 lib 的部分需要修改：

在 `build.gradle` 中

	 dependencies {

       compile 'com.android.support:appcompat-v7:21.0.3'

       compile files('libs/XposedBridgeApi-54.jar')

	 }

`compile` 改成了 `provided`

	 dependencies {

       compile 'com.android.support:appcompat-v7:21.0.3'

       provided files('libs/XposedBridgeApi-54.jar')

	 }

再根据昨晚反编译的微信，得到的一些有用的文件，成功抓取了微信的启动。
