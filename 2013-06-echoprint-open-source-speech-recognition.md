---
layout: post
title: Echoprint - 开源的声纹识别
date: 2013/06/18 01:39:00
categories:
- 技术
tags:
- echoprint
---

[Echoprint: Open acoustic fingerprinting](http://lwn.net/Articles/449650/)

June 29, 2011

This article was contributed by Nathan Willis

翻译：王鑫/曾怀东

移动智能业务极大推动了声纹识别技术的发展。你可能已经看过这样的电视广告场景：用户拿起电话录制了一段几秒的附近播放的音频，然后程序计算出这段音轨的声纹并利用声纹去远端的数据库查询艺术家和音轨的名字。在以前该领域一直被专属软件占据，但是在上周一个新的开源的项目——[Echoprint](http://echoprint.me/) 诞生了。

**Fingerprints on the databases**

尽管名字类似，声纹识别技术和用来检测文件改动的基于 hash 的数字指纹识别技术差别很大。hash 函数对单独比特的变化很敏感，声纹函数则必须努力得分析音频，分析的方法要独立于音频编码方式，比特率乃至静态或环境噪声。声纹关注于从音轨中提取可感知的信息，例如节奏，平均频谱以及周期性的音调模式。声纹识别技术主要用于从未知音频片段中获取可能的音轨信息，不过也可以用来查找相类似的音乐（依靠相关算法的调整）

声纹识别服务市场主要被专有软件垄断，其中比较著名的有 Shazam, SoundHound, 以及 Gracenote。许多自由软件组织的人都知道 Gracenote，原因是十年前发生那场争端，Gracenote 的母公司突然限制了对 CDDB（一个由用户建立的唱片识别数据库）的使用。很多人都由于政策的更改而感到被背叛，因为 CDDB 的数据都是由用户在播放或翻录 CD 时自愿提交的，但是用户们却不能使用或是享有 CDDB 带来的好处。这个数据库是因特网众包的早期例子，很多人发现自己无法访问这个数据库，自己努力的成果被公然掠夺了。

转眼到了 2011 年，相比较专有软件，大多数开源应用使用 "open content" 的服务。例如由遵循 501(c)(3) 条款的非盈利的 MetaBrainz 基金会运营的 MusicBrainz。在过去的几年中，[MusicBrainz](http://musicbrainz.org/) 通过 MusicIP(后更名为 AmpliFIND) 提供的闭源 MusicDNS 服务来支持声纹识别。

尽管 MusicBrainz 同 AmpliFIND 在该服务上签订了永久性合同，人们仍认为这并非一个好选择，因为 MusicBrainz 的 [社会契约](http://musicbrainz.org/doc/Social_Contract) 要求服务保持 100% 免费（译者注：依赖闭源服务无法保障这一点）。最近，很多开源声纹识别项目开始渐成气候，例如 Lukáš Lalinský的 [Acoustid](http://acoustid.org/)，MusicBrainz 也开始寻求开源和开放的内容来取代 MusicDNS。同时，声纹识别技术团队 [Echo Nest](http://www.echonest.com/) 确定自己最佳的策略是将全部产品做成开源并尝试商业化声纹服务，而不是试图和这些资深对手玩贴身肉搏式的交锋。

Echo Nest 和 MusicBrainz 在一些项目有过合作，例如 [Rosetta Stone](http://developer.echonest.com/docs/v4/index.html#project-rosetta-stone)—一个用于在不同音乐服务 ID 数据库间匹配艺术家和音轨 ID 的工具—所以决定推动 Echoprint 这一开放项目并把它和 MusicBrainz 进行整合对双方来说都是很好的选择。而且这也没有损害到 AmpliFIND，因为 AmpliFIND 已经将自己所有的知识产权包括 MusicDNS 和 portable unique identifier （PUID）数据库转让给了 Gracenote。

**The Echoprint release**

Echoprint 系统由三部分组成。Codegen 指纹生成器将音频文件（或者音频样本）作为输入，基于 Echo Nest Musical Fingerprint (ENMFP) 算法产生声纹。Echoprint 服务器维护一个声纹和音轨信息的索引数据库，并且支持远程访问和添加新的声纹及音轨。Echoprint 数据库本身维护对外公开的音轨和声纹信息。数据库里有整段音轨的声纹代码，但是同大多数声纹识别技术类似，有部分片段即可进行比对。Echo Nest 声明 Echoprint 可以提供至少 20s 时长片段的声纹精确匹配。

在实际使用中，应用程序会对音频（捕获的或是从文件中获取的）进行抽样，然后使用 Codegen 库计算声纹，最后在 Echoprint 服务器中检索匹配项。服务器以 JSON 格式返回所有匹配的音轨记录。另外，如果没有符合要求的匹配，应用程序会向服务器数据库提交该声纹信息和一些通过其他手段获得的音轨元数据。

Codegen 的代码，服务器以及各种工具（包括一个 iPhone app 的实例）都 [存储在GitHub](http://github.com/echonest/) 上了。Codegen 应用和共享库在 MIT 许可下有效，而服务器（基于 [Apache Solr](http://lucene.apache.org/solr/) 和 [Tokyo Tyrant](http://fallabs.com/tokyotyrant/)）则遵循 Apache License 2.0 许可。

公共的 Echoprint 数据库则是遵循其一个特定的 [条款](http://echoprint.me/data) 来授权，这个条款被称为「Echoprint 数据库许可（Echoprint Database License）」。它允许商业和非商业的应用，并且要求任何下载了数据和加入其中的人都要把额外数据贡献给 Echo Nest。这个条款看起来不如知识共享式的「Share Alike」公平，因为它要求给 Echo Nest 提供数据。这个许可的导言看起来是说所有的贡献都会同公众一起分享，但是 Echo Nest 可没有承担分享数据的义务。[第一版](http://the.echonest.com/company/press-release/18/) 用在线音乐厂商 7Digital 所拥有的数字音乐和 MusicBrainz 所提供的元数据生成了将近 1300w 的声纹，并以其作为「种子库」。

在这个协议中还有其它令人烦恼的条款，包括要求任何访问此数据的应用程序都要使用 Echoprint 的「powered by」logo。此外，这个协议中也没有明确说明将来 Echo Nest 如何修改或者终止这份协议。对于那些曾经在 CDDB 灾难中受到伤害的人，这份协议会使他们犹豫，因为它对于 Echoprint 数据库会不会发生同样的事情这点压根没有提及。

目前，Echo Nest 没有将其算法细节以一种方便阅读的形式公之于众。当然，Codegen 的源码是提供了，但是大家还在期望详细解释其过程的白皮书能够在不久的将来被放出。不幸的是，当前的法律文书没有明确解释涉及到软件的专利许可（MIT 许可过于简单了），而这有可能涉及到一些开发者。声纹识别是一个专利领域，并且确实有一些调查揭示了几个以 Echo Nest 和其创始人 Brian Whitman 以及 Tristan Jehan 名义的相关专利申请。从好的一面看，所有专属的声纹识别服务也有专利问题

当前 Echo Nest 自己的「song/identity」服务器是唯一的已开始运行的 Echoprint 数据库，尽管任何应用程序作者都可以以测试为目的建立自己的服务器。Codegen 的命令行程序可以被任何现代 Linux 系统所构建，仅需几个重要的依赖，分别是 TagLib，Boost 和 FFmpeg。这个程序以文件为参数（其后跟可选的参数，开始时间，持续时间，均以秒为单位）生成一个声纹。其输出是一个 JSON 对象，其中包括了文件的 ID3 标签信息和一个经过 base64 编码后的声纹。这个输出可以用 cURL 或者类似的工具直接发送到 Echo Nest 的服务器，在 Codegen 的 README 文件中有说明。

**Play or Pause**

MusicBrainz 的 Robert Kaye 称此项目计划在可预见的未来（或者直到「人们纠缠我去解决它」）保持对 PUID 和 MusicBrainz 数据库中的 MusicDNS 的支持。这个项目正在 [运行](http://blog.musicbrainz.org/?p=945) 一个使用 Echoprint 替代 MusicDNS 的测试服务器，但是并没有一个何时开始支持 Echoprint 的明确时间表。

Kaye 还称，他期望在 Echoprint 产品被大范围采用前能够做更多的调整，但是他注意到「临界物质 (critical mass)」是最重要的因素——即对客户应用以及一个相当大的可靠声纹数据库的支持。在 7Digital 的帮助下预装载 1300 万首歌曲听起来很多，但是对比一下，Shazam[宣称](http://www.shazam.com/music/web/pressrelease.html?nid=NEWS20100518084111) 其已经可以鉴定超过十亿首了。

考虑到使用 MusicBrainz 的开源音频项目的数量，可以毫不夸张地说，Echoprint 已经有了一个成功的开始。它是首个以「立即可用」的姿态杀入市场的完全开源的音乐声纹系统，因此很可能产生大量的音乐识别的开源移动应用。没有了许可费的负担，技术可以在独立的音乐识别应用程序，开源或闭源之间传播。

然而，Kaye 强调 MusicBrainz 的后 MusicDNS 的迁移意味着使这个项目的声纹识别算法变得不可知。Acoustid 仍然处在十分活跃的开发领域中，这里有篇 [文档](http://oxygene.sk/lukas/2011/01/how-does-chromaprint-work/) 叙述了该算法的细节，而且不需要改变 MusicBrainz 数据库的格式就可以支持它。

这两个声纹识别技术是重叠抑或是互补，还是竞争的关系，这也许最终将由用户来评判。Echoprint 是如此的新生态，我们很难预测它最终会发展成什么样。MusicBrainz 的支持自然是一个很大的优势，但是在应用程序作者大规模采取这个技术之前可能更需要的则是更好的技术文档以及对模糊的法律问题的说明。但是，它无疑填补了开源移动软件中的巨大空白。如果这个众包技术能很好运行并创建出一个声纹数据库，该开放方案将很可能在如此之多的相似的专属供应中拥有一片商机。
