---
layout: post
title: 重复造轮子之Alfred有道插件  进阶篇
date: 2015/05/06 00:20:00
categories:
  - 技术
tags:
  - Alfred
  - Workflow
  - Python
  - 有道翻译
  - AlfredWorkflow
description: 
  使用deanishe的alfredworkflowPython包实现有道翻译的Alfred工作流。步骤包括新建BlankWorkflow、设置ScriptFilter、下载alfredworkflow包并编写youdao代码、添加CopytoClipboard节点并连线。此为不完整示例，完整源码见项目仓库。
---

首先感谢 [deanishe][1] 为 Alfred Workflow 添加了 Python 框架库支持，自定义 Workflow 仅需要通过 Python 完成输入和输出的转换，最后输出到 Alfred 即可。这大大方便了我这种不会 `PHP` 开发的程序员

我想写的第一个自定义 Alfred Workflow 是有道翻译，它支持在 Alfred 中直接进行关键词翻译并直接展示翻译结果。

`Alfred Workflow` 的教程确实十分的难写

> 会 coding 的不看教程就能写，不会 coding 的写了教程也还是一知半解

**我就简单的说一下这个流程吧**

我们先点击左下角新建一个 `Blank Workflow`

![](http://pics.naaln.com/blog/2019-01-14-061100.jpg-basicBlog)

填入想要的信息如：

![](http://pics.naaln.com/blog/2019-01-14-061101.jpg-basicBlog)

点击确认 `save` 后开始编写 `Workflow`

我们先建立一个 `script filter`

![](http://pics.naaln.com/blog/2019-01-14-061102.jpg-basicBlog)

然后填入一下的信息

![](http://pics.naaln.com/blog/2019-01-14-061104.jpg-basicBlog)

然后我们进入文件所在的目录

![](http://pics.naaln.com/blog/2019-01-14-061105.jpg-basicBlog)

首先下载 [deanishe][2] 提供的 `alfred-workflow`python 包，在新建一个 `youdao.py` 的文件。里面写上需要执行的代码：

```
  # -*- coding: utf-8 -*-

  import re
  import urllib
  from workflow import Workflow, ICON_WEB, web
  import sys
  reload(sys)
  sys.setdefaultencoding('utf8')

  #这是不完整的代码
  if __name__ == '__main__':
  wf = Workflow(update_settings={
     'github_slug': 'whyliam/whyliam.workflows.youdao',
     'frequency': 7
  })

  sys.exit(wf.run(main))
  if wf.update_available:
     wf.start_update()
```

在 [https://github.com/whyliam/whyliam.workflows.youdao/blob/master/youdao.py][3] 查看代码

然后新建 `Copoy to Clipborad`

![](http://pics.naaln.com/blog/2019-01-14-61106.jpg-basicBlog)

用线连起来就是了。

当然这个只是*不完整的*简单的教程。

详细的源码请看 [https://github.com/whyliam/whyliam.workflows.youdao][4]

 [1]: http://www.deanishe.net/alfred-workflow

 [2]: http://www.deanishe.net/alfred-workflow

 [3]: https://github.com/whyliam/whyliam.workflows.youdao/blob/master/youdao.py

 [4]: https://github.com/whyliam/whyliam.workflows.youdao
