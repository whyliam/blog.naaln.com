---
title: L128_你的可观测宇宙
date: 2026/07/04 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - AI
  - AgenticAI
  - Ethics
description: 从「哈勃半径」三层记忆架构到 Anthropic 追踪代码争议，从企业 AI「三脑问题」到 Figma 结构性危机——本周 7 篇周报与 12 条 AI 快讯，探讨 AI 时代的用户主权：你的可观测宇宙有多大。
created: 2026-07-02 13:19:20
updated: 2026-07-02 17:49:34
series: Newsletter 周刊
---

![](https://pics.naaln.com/2026-07-02-f9e5fc285481328006464a9a08414ad8.webp-basicBlog)

这周读到最有意思的一个概念叫「[哈勃半径](https://blog.naaln.com/2026/07/hubble-radius-ai-memory/)」——1q43 的评论尸提出，在 AI 帮你搜索公开互联网之前，它应该先进入你的「可观测宇宙」。什么意思呢？就是那些你订阅了但还没读的文章、你关注了但还没点开的链接、你在各个平台上留下但自己都快忘了的数字足迹。这些东西构成了一个只属于你的信息宇宙，AI 应该先在里面检索，再去外面找。

哈勃半径的核心是一个三层记忆架构。第一层是「事实记忆」——你明确知道什么，来自你在社交媒体上的发言、浏览记录、购买行为。第二层是「结构记忆」——你应该知道什么，是 AI 把你的碎片数据编织成一个类似 wiki 的知识图谱。第三层才是「半径记忆」——你可能知道什么，来自你订阅了但尚未消化的信息流。

最有价值的其实是第三层。因为前两层是关于已知，第三层是关于「未知的邻近」。就像天文学里的可观测宇宙——不是所有存在的东西，而是光已经到达你的那部分。AI 如果只搜索公开互联网，它就是一个通用搜索引擎；但如果它先在你的可观测宇宙里检索，它就成了一个真正了解你的代理人。

这让我想到这周发生的另一件事：Anthropic 被发现在 Claude Code 里藏了追踪代码，用隐写术和 XOR 加密悄悄检测中国用户。这是一个完美的反面案例——当你的 AI 工具本身就是一个间谍，谈什么可观测宇宙？你的宇宙已经被人从背后偷窥了。

再想想这周涌现的一批新工具：OpenPencil 要做开源的 Figma，Dibao 是一个自托管的 RSS 阅读器，claude-tap 让你在本地看到 AI 编码助手的所有通信。它们都有一个共同的底层诉求：主权。用户的主权、数据的主权、注意力的主权。

Tw93 在潮流周刊里问了一个好问题：「走在前面，还是被推着走？」我觉得这周的所有内容都在回答这个问题。你可以让算法决定你看什么（被动），也可以自己搭建一个 Dibao 让推荐算法为你的订阅服务（主动）。你可以用 Figma 的 AI 功能（被动），也可以用 OpenPencil 在本地跑 90+ AI 工具（主动）。你可以信任 Claude Code 不会偷看你（被动），也可以用 claude-tap 检查它到底在和上游说什么（主动）。

选择权在你手里。但前提是你得先看清楚自己的可观测宇宙有多大。

---

## 📚 深度阅读

### 哈勃半径：AI 不该先搜互联网，该先搜你

**核心洞察：** 这可能是今年中文互联网上最被低估的一篇 AI 思考文章。

评论尸（1q43.blog）提出的「哈勃半径」概念，本质上是在重新定义 AI 的搜索优先级。现在的 AI 助手——无论是 ChatGPT 的联网搜索还是 Perplexity——都是先把你的问题扔给公开互联网，然后把结果整理给你。但这忽略了一个关键事实：在公开信息之外，你还有一个巨大的、私有的、但对你更有价值的信息宇宙。

他引用的 Karpathy 的 LLM Wiki 方案特别有意思：让 AI 持续地把你的数字足迹整理成一个结构化的 wiki，不是 RAG 那种「每次查询重新检索」，而是一个「持续积累的、持久的知识工件」。这和我们平时说的「个人知识库」最大的区别是——它不只是存你写过的东西，还包括你订阅了但没读的东西。后者才是 AI 真正能帮到你的地方。

我特别认同他把「半径记忆」单独拎出来说。大多数 AI 个性化产品只做前两层（你的历史行为 + 知识图谱），但第三层——你订阅但未消化的信息流——才是最有杠杆效应的那一层。因为它代表的是你的品味、你的信任权重、你的文化敏感度，而不只是你的消费记录。

🔗 [原文](https://1q43.blog/post/12336/) · [Karpathy LLM Wiki Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) · [Meilisearch](https://www.meilisearch.com/)

---

### 企业 AI 的「三脑问题」与 Agentic 转型

**核心洞察：** 企业 AI 已经从「要不要用」走到了「怎么用好」的阶段，而这个问题的复杂度远超大多数人的想象。

韵锦的 AI Weekly 0629 这周梳理了三份重磅报告：Felicis 的「多模型世界」、OpenAI 的「Agentic AI 转型」和 Emergence Capital 的「超越基准」。三份报告交叉验证了一个核心判断——企业 AI 的真正挑战不在模型层，在组织层。

Felicis 的「三脑问题」框架很实用：Brain 1 是前沿模型（OpenAI/Anthropic/Gemini），Brain 2 是实时知识检索（Exa/Firecrawl），Brain 3 是企业私有数据。大部分公司卡在 Brain 3 上——多个版本的内部文档、权威性不确定、时效性不一致、组织内部的「隐性知识」（黑话、默契、私人技能）几乎不可能被 AI 学到。韵锦的评价很精准：「AI 越聪明，这个系统越危险。」

OpenAI 的 Codex 数据也很有意思：60% 的工程团队同时跑 4+ AI 模型，28.6% 的重度用户同时管理 5+ 个 Agent，99 分位的内部用户一天跑 Agent 累计 71 小时。但最让我意外的是非工程部门（法务、招聘）的 token 占比几个月内从 0 飙到 75%。这意味着 AI 的使用扩散不是自上而下推的，而是各部门自己找到用法的。

Emergence Capital 的数据则打破了「增长和效率不可兼得」的老假设——头部 AI 公司同时在实现高增长和高效率，AI 原生公司的客户留存率比传统公司高 21%。53% 的人力集中在工程端（全行业平均 42%），而销售、客服、财务都在缩减。这不是裁员，是结构重组。

🔗 [Felicis: Multi-Model World](https://www.felicis.com/blog/we-re-living-in-a-multi-model-world) · [OpenAI Agentic AI Paper](https://arxiv.org/html/2606.26959v1) · [Emergence: Beyond Benchmarks 2026](https://www.emcap.com/beyond-benchmarks)

---

### Anthropic 的「邪恶」时刻：当 AI 工具变成间谍

**核心洞察：** 这可能是 2026 年 AI 行业最严重的信任危机之一，而且它揭示了一个结构性问题——我们用来编码的工具，可能在编码我们的身份。

评论尸的这篇长文详细拆解了 Claude Code v2.1.91 被发现隐藏追踪代码的全过程。技术细节很值得注意：不是简单的 IP 检测，而是用隐写术（Steganography）加 XOR 加密，在检测到代理使用和中国时区后，悄悄修改用户输入——把日期中的连字符换成斜杠，把普通撇号换成视觉上相同但 Unicode 编码不同的字符。这是 prompt steganography，一种在不被用户察觉的情况下向模型注入信号的技术。

代码里还包含了一份中国 AI 创业公司的黑名单：DeepSeek、Moonshot、MiniMax、智谱、百川、阶跃星辰、零一万物、DashScope。Anthropic 团队的解释是「三月份启动的一个实验」，目的是阻止未授权转售和模型蒸馏。

评论尸把这件事和历史上的分类系统做了对比——纽伦堡法案、IBM 的穿孔卡片、美国的「一滴血规则」——核心论点是：隐藏的分类系统比公开的歧视更高效，因为它让被分类者无法反抗。这个类比是否过于强烈？可能。但它确实指出了一个真问题：当 AI 公司可以静默地根据出生地而非行为来判断一个人时，「安全」这个词到底在保护谁？

好消息是，舆论压力后 Anthropic 确认会在下一版本中移除这些代码。但这个事件本身已经改变了行业对 AI 工具信任度的基准线。

🔗 [原文](https://1q43.blog/post/12498/) · [The Decoder 报道](https://the-decoder.com/hidden-code-in-claude-code-secretly-flagged-chinese-users/) · [Anthropic 官方声明](https://www.anthropic.com/news/fable-mythos-access)

---

### Figma 的结构性危机与 AI 原生设计的岔路口

**核心洞察：** Figma 的问题不是功能不够多，而是它的底层架构是为上一代协作范式设计的。

这周 Figma Config 2026 的消息很密集——代码、动画、AI 都要放进同一个画布。但地心引力的分析很冷静：Figma 的财务数据和团队都很强，可它面临的是结构性挑战。它是在「协作工具」这个品类里赢了的，但现在游戏变了——AI 原生工作流需要的是完全不同的底层架构，而不是在旧画布上加 AI 按钮。

作者的建议很尖锐：Figma 应该做一个全新的产品，而不是继续在老产品上堆功能。这让我想到 Stratechery 对 Dylan Field 的采访——虽然被 paywall 挡住了大半，但核心问题是清晰的：当 AI 可以生成设计稿时，设计师的价值在哪里？Figma 的价值又在哪里？

同时，UX Weekly 285 里推荐的一篇文章说得好：「不要期待一个工具能搞定所有事。」AI 辅助设计工作流正在从「一个超级工具」变成「一组专精工具的组合」。这对 Figma 既是威胁也是机会。

🔗 [Stratechery 采访](https://stratechery.com/2026/an-interview-with-figma-ceo-dylan-field-about-design-and-ai/) · [Figma Config 2026 总结](https://mp.weixin.qq.com/s/6ZxXSvSrA67tdL2c-HddNA) · [AI 辅助设计工作流](https://zhuanlan.zhihu.com/p/2053974961132397851)

---

### 邸报 v0.1.0：让算法为你的订阅服务，而不是反过来

**核心洞察：** 在所有人都在追逐「AI 能帮你发现更多内容」的时候，邸报选择了一条相反的路——不扩大信息源，只重新排序你已经订阅的。

评论尸的邸报终于公开发布了。这是一个自托管的 RSS 阅读器，核心特点是「透明推荐」——每条推荐都有理由，算法根据你的行为数据重新排序你的订阅，而不是给你推荐新东西。所有数据存在一个 SQLite 文件里，没有中心化服务，没有强制绑定 API。你可以接免费的 Embedding 提供商（比如 SiliconFlow），也可以本地跑 Ollama。

作者把推荐定义为一个「匹配问题」而非「生成问题」——邸报是一个「外部嗅觉器官」，根据你隐性的兴趣浮出相关内容。整个代码库是用 AI 辅助的「Vibe Coding」方式生成的，这一点本身就很说明问题：当工具足够好的时候，一个人就能做出一个完整的软件产品。

他追溯了 2015 年创办赤潮/AKASHIO 的经历和遭遇的审查，到今天平台算法主导的信息环境。邸报试图在算法便利性和用户控制之间找到一个平衡点。在这个大模型越来越强、信息推荐越来越精准的时代，这个平衡点恰恰是最稀缺的。

🔗 [GitHub](https://github.com/Pls-1q43/Dibao) · [官网](https://dibao.app) · [SiliconFlow](https://siliconflow.cn/)

---

## 🤖 AI 工具

### OpenPencil — 开源 Figma 替代，90+ AI 工具内置

一个开源的 AI 原生设计编辑器，GitHub 上已经 6.6k stars。它不只是「长得像 Figma」——支持.fig 文件导入、P2P WebRTC 协作、headless CLI 模式、MCP Server 集成。技术栈是 Tauri v2 + Vue 3 + CanvasKit/Skia WASM，MIT 许可。

它代表了一个趋势：开源设计工具正在从「追随者」变成「挑战者」。90+ AI 工具内置意味着它不是一个纯粹的画布，而是一个 AI 辅助的设计工作站。

🔗 [官网](https://openpencil.dev) · [GitHub](https://github.com/open-pencil/open-pencil)

---

### claude-tap — AI 编码助手的本地代理与追踪器

你知不知道你的 AI 编码助手在和上游 API 说什么？claude-tap 是一个本地代理和追踪器，能拦截 AI 客户端（Claude Code、Codex CLI、Gemini CLI、Cursor、Kimi）和上游 API 之间的 HTTP/SSE 通信。它展示系统 prompt、对话历史、工具 schema、token 用量，Auth 头部自动脱敏，导出为独立 HTML 文件。

在 Anthropic 追踪代码事件之后，这种可观测性工具变得格外重要。不是因为你一定要用它，而是因为你应该知道有这个选项。

🔗 [GitHub](https://github.com/liaohch3/claude-tap)

---

### Grill-me Skills — 让 AI 编码助手先被拷问再写代码

来自知名设计工程师 Emil Kowalski 的同系列推荐。Matt Pocock 的 skills 集合里有一个 `/grill-me` 命令，它会在 AI 写代码之前，反复追问你的计划或设计，直到所有决策分支都被解决。不是 vibe coding，是「经过严格审查的编码」。同系列还有 `/tdd`（测试驱动开发）、`/diagnosing-bugs`、`/improve-codebase-architecture`。

这代表了 AI 编码的下一个阶段：不是让 AI 写得更快，而是让 AI 想得更清楚。

🔗 [GitHub](https://github.com/mattpocock/skills)

---

### 支付宝阿宝 — AI 版支付宝开放公测

支付宝的 AI 助手正式开放公测，以对话方式安排办事——说「查公积金」会自动匹配小程序和服务入口，用户点击确认即可完成。所有资金变动与支付环节均需用户本人确认。

这是一个很有意思的信号：超级 App 正在从「菜单式交互」转向「对话式交互」。当你的银行 App 变成一个聊天界面时，用户体验的底层逻辑就变了。

🔗 [IT 之家报道](https://www.ithome.com/0/971/469.htm)

---

### NVIDIA Nemotron-Labs-TwoTower — 开放权重的扩散语言模型

NVIDIA 发布了一个开放权重的双塔架构扩散语言模型，基于冻结的自回归骨干（Nemotron-3-Nano-30B-A3B）。核心卖点：保留 98.7% 的 AR 基线质量，但生成吞吐量提升 2.42 倍。总参数约 60B，每 token 活跃参数约 3B/塔，支持扩散、模拟 AR 和 AR 三种解码模式。

扩散模型在图像生成领域已经是主流，但在语言模型领域还是一个相对小众的方向。NVIDIA 开源这个方案，可能是在为下一代推理效率打基础。

🔗 [MarkTechPost 报道](https://www.marktechpost.com/2026/07/01/nvidia-releases-nemotron-labs-twotower)

---

## 🛠️ 效率工具

### VidBee — 免费视频下载器，1000+ 平台支持

基于 yt-dlp 的免费视频下载器，支持 TikTok、YouTube、Twitter、Instagram 等 1000+ 平台。Electron 桌面应用 + 浏览器扩展 + Fastify API + Web 客户端，支持队列管理、RSS 自动下载调度、格式选择（WebM/MKV/MP4/源格式），Docker 可部署。

🔗 [GitHub](https://github.com/nexmoe/VidBee)

---

### Witr — 解释「为什么」这个进程在跑的系统诊断工具

不同于传统的 `lsof` 或 `netstat`，Witr 不只告诉你端口被谁占了，而是解释**为什么**这个进程在跑。它追踪进程的谱系——容器、shell 会话、supervisor——给你一个完整的因果链。TUI 仪表盘、跨平台（Windows/macOS/Linux/FreeBSD），Homebrew / NPM / Winget / Conda / APT 都可装。

🔗 [GitHub](https://github.com/pranshuparmar/witr)

---

### Dinky — 开源 macOS 文件压缩器

开源的 macOS 文件压缩工具。图片可转 AVIF/WebP/HEIC/PNG 并智能检测质量参数；视频转 MP4 支持编码/质量配置文件；PDF 压缩带本地 OCR（扫描件）。要求 Apple Silicon + macOS 15+。

🔗 [官网](https://dinkyfiles.com)

---

### AppPorts — 把大 App 搬到外接硬盘的 macOS 工具

开源的 macOS 工具，把大型应用迁移到外接硬盘，创建 stub portal（不是符号链接）让 App 在 Finder/Launchpad 里看起来和原来一样。处理缓存、支持文件、签名管理，一键恢复。

🔗 [官网](https://appports.shimoko.com/zh)

---

## ✨ 随便看看

- **LLM 缓存命中率排行榜**：基于 OpenRouter 上 400+ 数据点分析 60+ 平台的缓存表现。DeepSeek 以 87% 命中率领先（金标准），Google 反而落后。揭示「小模型骗局」——便宜的小模型因为缓存差反而更贵。[原文](https://dirac.run/posts/cache-hit-rates-agents)
- **美团 AIGC 海报生成技术栈**：三篇 CVPR/ICLR 论文支撑的 AI 海报生成框架——PosterCraft（端到端生成）、PosterOmni（统一图像到海报的 6 种设计任务）、PosterReward（首个海报质量奖励模型）。全部开源在 MeiGen-AI repo。[原文](https://tech.meituan.com/2026/06/18/AIGC-poster.html)
- **GPT-5.6 三个 Pro 变体曝光**：OpenAI 论文首次列出 Luna Pro、Terra Pro、Sol Pro 三个变体，打破单一 Pro 策略。基因组学基准中 Sol Pro 通过率 31.5% 领先 60 个模型。[原文](https://the-decoder.com/openai-paper-reveals-three-gpt-5-6-pro-models-breaking-with-single-top-tier-strategy)
- **Meta 要把过剩 AI 算力卖给你**：Meta 正计划推出 Meta Compute 云基础设施业务，直接与 AWS/Google Cloud/Azure 竞争。已承诺 1829 亿美元 AI 基础设施投资。[原文](https://techcrunch.com/2026/07/01/meta-like-spacex-looks-to-turn-excess-ai-compute-into-cash)
- **AWS 砸 10 亿美元派工程师驻场**：亚马逊组建前置驻场工程师团队，分批派驻客户企业（驻场 45 天），协助落地 AI 与 Agent 应用。2023-2025 年同类岗位需求增长 42 倍。[原文](https://www.ithome.com/0/971/071.htm)
- **Snapchat AR 眼镜亏了 10 亿美元的故事**：$2,195 的 Specs 没有讲好消费者价值故事，而 Meta 的 $350 Ray-Ban 卖了 200 万 + 副（全球出货量 76%）。核心教训：「价值差距就是新的品牌风险。」[原文](https://artofthebrand.substack.com/p/snapchat-lost-1-billion-dollars-because)
- **当 AI 来写悼词，什么真正属于你？** 一篇关于 AI 生成悼词的散文引发的存在主义思考：如果你的生平故事和悼词都是 AI 生成的，什么才真正属于你？[原文](https://ihatethesepeople.substack.com/p/a-correction)
- **从迪士尼机器人到 OpenAI 情绪模型**：一位曾在迪士尼做机械动画人偶、为 OpenAI/Tesla 训练情绪模型的创始人，正在做一款有「生命感」的消费级陪伴机器人——8 个并行子模型、可拆卸模块化部件、持久的记忆和个性。[播客](https://www.xiaoyuzhoufm.com/episode/6a30b9a143a22a6955847e3a)
- **Thiel 谈 AI、技术停滞与文明风险**：Peter Thiel 讨论数字创新 vs 物理世界停滞（「我们想要飞行汽车，得到了 140 个字符」）、图灵测试是否比 AGI 更重要、以及出生率崩塌的文明级风险。[播客](https://www.xiaoyuzhoufm.com/episode/6a2abd770a34cf8ce5a78266)
