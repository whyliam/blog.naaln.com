---
layout: post
title: git如何合併最後兩個commit到一個
date: 2015/02/19 13:19:00
categories:
- 技术
tags:
- Git
---

在使用 Github 的時候，常常使用 `rebase` 把多個 commit 合併成一個。但是最後兩個 commit 一直合併不了。

`git rebase -i` 不能在解決這個問題了。於是，我求助了 git maillist 如然有人很快給出了答案：

```
   $ git reset --soft HEAD^1
   $ git commit --amend
```

我不得不说 git 邮件列表是我知道的最棒的一个，尽管曾经我提交了一个 git 的 patch 不合理地被拒，这里很活跃，你问的问题几乎都能得到回答。
