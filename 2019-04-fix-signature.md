---
title: 修复 signed with custom identity or adhoc
categories:
  - 技术
date: 2019/04/06 20:30:53
tags:
---

有的时候安装软件，软件会启动不了。

我在 `terminal` 中启动软件，有如以下提示：

```
/Applications/Application.app ; exit;
dyld: Library not loaded: @rpath/Sparkle.framework/Versions/A/Sparkle
  Referenced from: /Applications/Application.app
  Reason: no suitable image found.  Did find:
	/Applications/Application.app/Contents/MacOS/../Frameworks/Sparkle.framework/Versions/A/Sparkle: code signature in (/Applications/Application.app/Contents/MacOS/../Frameworks/Sparkle.framework/Versions/A/Sparkle) not valid for use in process using Library Validation: mapped file has no Team ID and is not a platform binary (signed with custom identity or adhoc?)
[1]    15203 abort      /Applications/Application.app
```

从错误信息中看，应该是软件的签名出现了问题，只需要安装 `Xcode` 后，对软件重现签名就好了：

```
sudo codesign -f -s - --deep /Applications/Application.app
```
