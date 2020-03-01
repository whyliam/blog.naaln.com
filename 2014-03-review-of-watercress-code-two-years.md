---
layout: post
title: 豆瓣 CODE 两年历程回顾
date: 2014/03/19 08:43:00
categories:
- 技术
tags:
- 豆瓣
---

<div class="text_info text_info_article">

2014 年 2 月 14 日是豆瓣 CODE 项目成立两周年，同日豆瓣 CODE 团队宣布[将整个框架开源](http://douban-code.github.io/)。本次开源包含 [CODE 框架](https://github.com/douban-code)以及 [Mikoto](https://github.com/qingfeng/mikoto)、[Linguist](https://github.com/douban/linguist)、[P](https://github.com/qingfeng/p)、[CodeLive](https://github.com/qingfeng/codelive) 等周边项目，感兴趣的工程师可以在这个基础上继续开发。

下面，豆瓣 CODE 的工程师们将在 InfoQ 上分享一些 CODE 背后的故事。

## 背景

2012年初，已经对 SVN 和 Mercurial 无力吐槽的豆瓣工程师们正面临一个艰难的决定：是往 Github 企业版迁移，还是自己研发一套代码管理系统。

> CODE —— C: Community O: Original D: Developer E: Eldamar

2012年2月14日，清风老师为豆瓣 CODE 写入了第一行代码；一周之后，一个用 Trac 改造的原型诞生了。CODE 不是一个公司项目，自始至终没有任何一个豆瓣的产品团队或工程团队为这套系统负责，但一个又一个的豆瓣工程师开始被吸引到这个项目周围，形成了一个强大的虚拟团队。

随着 Github 在国内的普及程度越来越高，越来越多的企业也开始探索自建 git 仓库之路。开源的 [Gitlab 项目](http://gitlab.org/)开始受到部分团队的关注，但这个项目仍有较多局限性。这时，豆瓣 CODE 引起了包括淘宝在内不少同行的兴趣，并开始沟通将 CODE 开源的可能性。

作为一个面向内部设计的系统，CODE 的源代码中混杂了大量豆瓣专有系统的依赖，如果要开源出来需耗费不少的工作量，之前[清风在 C2D2 的分享](http://v.youku.com/v_show/id_XNTYwMzc0NjY0.html)和[段念在QCon上海2013大会的分享](http://www.infoq.com/cn/presentations/tools-love-knot-of-engineer-culture)中都提到这一点：

> CODE 在豆瓣内部是运行到 DAE 上面的，一些基础设施的维护都靠豆瓣平台组的工程师，如果要开源的话需要把豆瓣内部的依赖移除。另外豆瓣内部也有一套 Web 框架，CODE 用的就是这套内部框架，如果 CODE 开源，这套框架也需要一并开源。

虽然有种种麻烦，但豆瓣的工程师们仍然将大量工作之外的时间热情的投入到将 CODE 开源的工作当中。一开始，CODE 团队零星的[将一些底层的基础库开源](https://github.com/douban)，包括 Python 版本的 git HTTP 实现[GPack](https://github.com/douban/gpack)，git SSH 实现 [Maria](https://github.com/cmgs/maria)，Pygit2 的wrapper [Ellen](https://github.com/douban/ellen) 等；2014年2月14日，豆瓣 CODE 宣布[将框架代码和周边项目代码全部公开](https://github.com/douban-code/code)！此时的 CODE 已经聚集了 85 位 committer 为其贡献代码，并且已经托管了 1916 个项目，其中大部分都是类似 CODE 这样的、由工程师自主发起的非官方项目。

## 技术说明

> CODE 在豆瓣内部对应一个 [DAE](http://www.infoq.com/cn/presentations/the-design-of-dae-systems) 应用，其实就是一个 Web 项目。CODE 目前最核心的工作是对 git 仓库的读写，另外就是 code review。

CODE 发展两年来一直在扩展自己的定位，从单纯的代码管理系统发展为可以将设计、产品都拉进来一同协作的平台，周边衍生出大量的附加项目，从 image diff 到类 Dropbox 的文件同步工具，可谓五花八门。所有这些功能都围绕一个核心：对 git 仓库的读写。

> XTao：目前 CODE 支持 http 和 ssh 协议进行 clone 和 push 操作，http 目前我们使用的是[git_http_backend](https://github.com/dvdotsenko/git_http_backend.py)这个开源项目，我们自己也用 Python 实现了一个[Grack](https://github.com/schacon/grack)（原项目基于 Ruby），即 [GPack](https://github.com/douban/gpack)，目前还没有大规模的使用。ssh 我们用的是 CMGS 同学写的[Maria](https://github.com/cmgs/maria)。

>

> CODE 的 Web 版 git 操作的变化很大，一开始直接使用 subprocess 调用 shell 的 git 命令，然后解析命令返回的文本，python对象化，然后供 Web 使用，后来因为性能问题开始使用 [Pygit2](https://github.com/libgit2/pygit2)，从此就是 git 命令和 Pygit2 混用，一直到现在。我们的这个库也开源了：[Ellen](https://github.com/douban/ellen)。

>

> Pygit2 是 libgit2 一个 Python 接口，在使用 Pygit2 和 libgit2 的过程中，也经常当小白鼠，也给Pygit2 和 libgit2 提过一些 Pull Request。对 Pygit2 我们改动比较大，因为 CODE 使用模式问题，我们有一个自己的 fork 版本，跟上游的主要区别有：

>

> 1.  把 libgit2 内嵌到 Pygit2 里面，做了静态编译，不再依赖系统的 libgit2 版本，方便升级 Pygit2。

> 2.  一直采用最新版本的 libgit2，Pygit2 本身比较稳定，不能及时的使用libgit2最新的方法。

> 3.  为了性能写了一些特殊的方法。

>

> 总体来说 libgit2 实现了核心的 git 接口，并不是很成熟，但是对于 Web 应用来说已经够用了。

>

> 以上的部分是与 git 操作紧密结合的部分。我们在 Web 界面也做了一些核心功能，主要包括 Pull Request 的实现，代码 diff 和 review 功能的实现，以及 Issue 和 Gist 系统。这里说一下代码 diff 和 review 功能，在实现的时候，一方面是用了 git 操作接口的 API，一方面是对于代码片段做了处理，在前端页面上支持 diff 的按行展开评论等一些功能。

>

> 同时，CODE 团队也在尝试分布式 git 方案，目前也已经有个原型了。

## 规则的建立

豆瓣曾经历过大桌子开会、强制大家做 review 的岁月，而 CODE 颠覆了这一情况。CODE 团队将 code review 视为 CODE 的第二个核心功能，认为促进工程师之间的沟通是 CODE 最大的成就之一。

CODE 为每个项目设置了三个角色，分为 owner（有全部权限）、committer（有 push 和 merge 权限）、member。review 机制根据项目的不同设置了不同的规则，如产品线级别的、需要对外发布的项目，基础库等项目都需要经过严格的 review，如`东西团队`对 review 设置了如下规则：

> *   尊重他人，就事论事，对事不对人，毕竟每个人都写过烂代码；

> *   PR 中的每一个 commit log 都应该可以和代码对应，方便 review；

> *   尽量不要发太大的 PR，以免引起 reviewer 的恐慌；

> *   建议保证一个 PR 的粒度和专注，最好不要出现一个 PR 里又有重构又加新 feature 的情况，同样容易引起 reviewer 的恐慌；

> *   提 PR 之前请确保在本地或测试环境一切正常；

> *   reviewee 如果接受 reviewer 提出的修改意见，需要在修改提交以后知晓 reviewer，常见的做法可以是在 review comment 处回复（并带 commit 链接）；

> *   评论中至少出现一个 lgtm 且保证 ci 通过之后 PR 才可以被合并；（注：lgtm 即 looks good to me 的缩写）

> *   PR 合并者与提交者不能是同一个人；

> *   PR 需从一个特定分支（分支的名字尽量能表达代码的功能）发往上游的 master 分支；

> *   Model 的部分，如不紧急需要unittest；

> *   Web 的部分，如不紧急需要webtest；

> *   PR 合并后如引起 bug 或功能异常，并经查确为此 PR 引起，提交者需请全组攻城湿喝饮料或吃冰棍（由被请者决定）；

> *   将 fork 的仓库与上游同步时，应使用 git fetch upstream && git rebase upstream/master （或 code sync -r ），而不是 git merge 或 code sync （这里code是指面向 CODE 系统的一个命令行工具），以保持清晰的提交历史，并防止覆盖他人的修改；

> *   注意安全问题，对于 SQL 拼字符串，模版中有 |n 的，以及处理用户输入等地方都需要仔细review，更多请参考 Web 安全开发指南

对于松散或娱乐性项目、小工具项目，并不会那么严格的 review，这也取决于 owner 自己，他可以借这个项目寻找到一位导师，来帮助他进行 review：

> 举一个具体的例子，例如东西团队的 Android 版本的开发，实际上最开始只是团队内部的一些成员想学习 Android 开发自发组织起来的，但一开始就找了移动组的同学来随时帮助 review。

对于 CODE 项目本身，所有工程师都可以向 CODE 上的任意项目提 PR，也都可以是 `CODE 的 reviewer`，同时所有工程师的代码都需要经过 review 才会被 merge 到 master 分支。

发展到现在，豆瓣的 review 基本上都是自发，很少遇到需要 review 的代码堆积的情况。代码讨论区里据说时不时会出现美女图，这可能是刺激工程师们去 review 的因素之一；另外，CODE 系统本身也有奖励机制，鼓励大家去评论别人的代码。

CODE 系统的奖励机制主要有积分和勋章这两个部分。积分的规则主要就两个：

1.  提交的 PR 被 merge，增加 100 点积分

2.  提交的 PR 被评论，增加 5 点积分

目的就是鼓励多发 PR。一般来说，小 PR 要好过大 PR，不过有时候开发任务比较紧的时候，发出比较大的 PR 也是在所难免。

勋章系统在 CODE 早期阶段就做了进去，早期的奖励规则主要跟代码提交相关，例如给开源项目发过 Patch 并被 merge 会有相应的徽章。现在 CODE 团队对勋章系统有一些新的规划：

> 目前希望徽章系统可以独立出来，只是一套独立的API，任何人任何产品线都可以去设置自己的奖励规则，让这种奖励变成不是一种公司行为，而是更小的行为。例如 antispam 组，可能就会有`百人斩`徽章，这个对于其他组可能就不是那么必要，当然如果你跨界帮助过 antispam 组，那么也有可能会获得这个徽章。

CODE 上没有设置惩罚机制。

## 测试

相比 Github，CODE 有一些非常实用的地方，比如在提交代码入库之前可以先在 CI 里面完成自动测试，reviewer 可以直接看到代码测试是通过（绿色）还是失败（红色）；代码完成 merge 之后还可以通过 DAE 直接往线上部署。持续集成、自动测试、监控、部署这些都是独立系统，与 CODE 都是靠 API 来进行交互。

对于测试的实现，豆瓣对开发者有明确的要求：

> 单元测试和集成测试的代码都是由开发者自己提供的，这是一种义务。测试的写法就是按照标准的 Python unittest 来写，断言比较推荐直接写 assert x == y。

## 投奔 git 之路

CODE 团队在下面的问答中分享了他们使用 git 的心得和经验，无论对正在使用 git 的团队还是还没有使用 git 的团队都是很好的参考。

**InfoQ：你们当时从 SVN、Mercurial 转换到 CODE，这个过程好像还挺顺利的？有没有遇到过一些阻力？如何化解的？**

> 清风：其实过程并没有想像的那么愉快与顺利，这个过程 CODE 虚拟团队还是做出了很大努力的，日常的营销（拉人下水是很重要的），对于需求的快速满足，这些才是保障 CODE 逐渐被接受的重要因素。

>

> 开始的时候 CODE 功能比较简略，但大家毕竟都是用过 GitHub 的人，所以对功能上肯定是有要求的，经常会听到，某某某功能 GitHub 是有的，但 CODE 就没有，这个没法用啊，要不咱们还是尝试买 GitHub 企业版？这个时候其实也没有什么特别的方法，就是需要快速的去满足这个需求，并加以实现，可以比较自豪的说，CODE 的一些关键功能都是在 1-2 天，大一点的功能不超过1周实现的。

>

> 而且有趣的是，甚至有些功能在一开始的时候会认为和 GitHub 不一致，但后来发现习惯了甚至变成了一个设置项。最早 CODE 是双击某一行来进行 line comment 的，但 GitHub 是点击行首的 「＋」 号，进行 comment ，后来CODE也实现了行首点击 「＋」 号来 comment 的功能，但很多成员觉得双击很方便。这个还产生了很多的争论，有从方便性说的，有从 UI 人机交互规范谈起的，为了统一这两个派别，于是我们只好把这个做成一个设置项。

>

> 黄小毛：补充一下，豆瓣内部的团队是一个一个的迁移到使用 CODE 上的。在这个过程中，每个团队都会因为开发内容、使用工具、流程的不同，对 CODE 往往会提出不一样的需求，CODE 开发过程中都分别为这些团队做过相应的开发（其实也是因为这些功能之前都太简陋），一步一步的完善功能。常常是某个团队遇到了什么问题，CODE 开发人员都直接上门去解决，如果解决不到的，就加功能回来开发，一步一步得到使用团队的信任；同时因为 CODE 在豆瓣内部是架在 DAE 上的，常常需要 DAE 团队紧密的配合；各个产品部署上线的一套系统也逐渐使用 CODE 做为仓库之后，与 DAE 和 SA 的合作也逐步加深，就是这样慢慢的让整个产品线、平台部门、SA部门，都转移到 CODE 上来的。

>

> 说个笑话，以前 CODE 开发还不稳定的时候，极少在白天上班时间上线，担心如果有什么状况，豆瓣几乎所有的工程师都要等着，耽误开发，可见豆瓣工程师对这个开发环境的依赖。这也是一步一步过来的。

**InfoQ：对于 git，CODE 团队有没有特别的经验要分享？**

> CODE：大体上 git 就像大家那么用没有什么问题，只是开发过程中其实发现了一些 git 的问题，比如 git 编码存在问题，没有对 commit log 和 path 做 encoding ，在 Web 显示的时侯需要额外的处理。可以参考下[这篇文章](http://saito.im/note/Drawbacks-of-Git/)。

>

> git 对大文件大仓库的支持不是很好，当一个项目变大的时候，适时的拆分一下。要不然就要像 Fackbook 那样去 hack hg 来支持大仓库。

>

> GitHub 的 fork 模式导致磁盘空间被大量重复文件占用，GitHub 的工程师解决了这个问题，CODE 团队也在尽量解决这个重复文件的问题。

>

> Java实现的 git 库 CODE 团队还没有研究过，但是从 C、Python、Ruby 以及 Javascript 实现的 git 库并没有一个完美的解决方案，都需要混用 git 命令和第三方库。期待在不久的未来，libgit2 能完全取代 git 的核心库，成为一个完善的 git 库。目前 libgit2 还有一些内存泄漏的问题没有解决。

**InfoQ：如果现在让你们重新设计 CODE，会在哪些方面做调整和重新的规划？是否会考虑基于类似 GitLab 进行二次开发？**

> CODE：现在的重构其实就是一次重新设计，最重要的方向就是把 API 和 UI 分离。

>

> 最开始做 CODE 的时候，其实考察过 GitLab，可惜当时的 GitLab 还不够成熟。如果当时的 GitLab 足够成熟，很有可能就会基于 GitLab 来开发了，不过，幸好没有发生这样的事情。

**InfoQ：你是否会建议所有还在使用 svn 和 hg 的团队早日脱离苦海、投奔 git？**

> CODE：这个问题我一直是这么看的：git 固然强大，但是能否正确使用也是关键。我走访过很多团队，有些团队可能连版本控制工具本身都还没有掌握，例如每天提交一次，甚至一周提交一次，commit log 乱写，不使用分支，等等，这些都是使用者的问题。像 Facebook 最近就表示他们 hg 用的就不错（当然他们做了很多修改）。如果已经有了版本控制工具的正确使用习惯，那么我个人还是推荐 git。

### 相关资料

相关演讲和分享

*   [DAE系统的设计](http://www.infoq.com/cn/presentations/the-design-of-dae-systems)（洪强宁教授在PyCon 2013上的演讲，文字摘要参考[这里](http://www.infoq.com/cn/news/2013/12/douban-app-engine)）

*   [清风在 C2D2 的分享](http://v.youku.com/v_show/id_XNTYwMzc0NjY0.html)（[Slide](http://www.slideshare.net/qingfeng/code-13367019)）

*   [段念在QCon上海2013大会的分享](http://www.infoq.com/cn/presentations/tools-love-knot-of-engineer-culture)

CODE 相关开源项目列表

*   [CODE 框架](https://github.com/douban-code/code)

*   [GPack](https://github.com/douban/gpack)

*   [Ellen](https://github.com/douban/ellen)

*   [Linguist](https://github.com/douban/linguist)

*   [PyCharlockHolmes](https://github.com/douban/PyCharlockHolmes)

*   [Scanner](https://github.com/cuteio/scanner)

*   [Mikoto](https://github.com/qingfeng/mikoto)

*   [P](https://github.com/qingfeng/p)

*   [CodeLive](https://github.com/qingfeng/codelive)

CODE 依赖的 Douban 开源库列表

*   [https://github.com/douban/douban-utils](https://github.com/douban/douban-utils)

*   [https://github.com/douban/douban-sqlstore](https://github.com/douban/douban-sqlstore)

*   [https://github.com/douban/douban-mc](https://github.com/douban/douban-mc)

*   [https://github.com/douban/douban-quixote](https://github.com/douban/douban-quixote)

*   [https://github.com/douban/python-libmemcached](https://github.com/douban/python-libmemcached)

*   [https://github.com/douban/douban-orz](https://github.com/douban/douban-orz)

### 感谢以下豆瓣的同学在本次采访中提供的支持

*   段念：豆瓣网工程副总裁，本次采访的策划。

*   清风：CODE 团队leader

*   黄小毛：CODE 团队成员

*   XTao：CODE 团队成员

*   大落：CODE 团队成员

