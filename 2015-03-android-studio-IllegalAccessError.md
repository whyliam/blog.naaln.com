---
layout: post
title: android studio的IllegalAccessError錯誤
date: 2015/03/04 14:31:00
categories:
- 技术
tags:
- Android
---

最近在寫一個`微信`的插件，因爲我使用的是`android`的平台。所以我也嘗試著使用`android studio`，由於本人android學的不好，真的就只能用嘗試形容。

但是在第一步就遇到了關卡，`android studio`的jar的導入和eclipse不太一樣。（這是個小問題，只是自己不會用 `android studio` 而已。

主要問題是在 jar 導入後，報錯`IllegalAccessError`錯誤。

   java.lang.IllegalAccessError: Class ref in pre-verified class resolved to unexpected implementation

查了一晚上資料後沒有找到很好的解決方案。

後來發現編譯的lib的部分需要修改：

在`build.gradle`中

   dependencies {

       compile 'com.android.support:appcompat-v7:21.0.3'

       compile files('libs/XposedBridgeApi-54.jar')

   }

`compile`改成了`provided`

   dependencies {

       compile 'com.android.support:appcompat-v7:21.0.3'

       provided files('libs/XposedBridgeApi-54.jar')

   }

再根據昨晚反編譯的了微信，得到的一些有用的文件，成功抓取了微信的啟動。

