---
title: L123_执行趋近零成本，判断力升值
date: 2026/05/30 22:30:00
categories:
  - Notes & Reflections
tags:
  - Agent
  - AICoding
  - Economy
  - CreativeAI
description: 当AI让执行趋近零成本，判断力成为唯一无法被替代的能力。从Claude Code舰队编排到AI安全边界重构，从工具定价风暴到创意生成跨越恐怖谷，探讨加速时代什么真正值钱。
created: 2026-06-14 22:43:49
updated: 2026-06-24 18:09:45
series: Newsletter 周刊
---

![](https://pics.naaln.com/2026-06-24-a6678fd9de75225b449c1f14a15c37da.webp-basicBlog)

## 引言

上周一个朋友跟我说，他用 Claude Code 跑了一个小脚本，把公司三个月没整理的技术文档全扫了一遍，分门别类，还自动生成了摘要。他发截图给我看的时候，语气里带着一种说不清的复杂——既有兴奋，也有一点不安。

「这些活儿以前是实习生干的，」他说，「现在一个脚本 20 分钟搞定。」

我不知道该怎么回他。说「太好了，效率翻倍」显得轻浮；说「实习生要失业了」又太悲观。最后我发了一个「嗯」，然后我们聊了半小时别的。

这周 Anthropic 发布了 Claude Code 的动态工作流功能。简单说，就是让 AI 自己写编排脚本，然后并行启动几百个子 agent 去干活。Anthropic 的原话是：「工作的单位不再是一个 prompt，而是一支协调好的舰队。」有人用这个功能，把 Bun 运行时的 75 万行 Zig 代码在 6 天内迁移到了 Rust。

75 万行。6 天。一个人加一支 AI 舰队。

—

这件事让我想到一个问题：当执行趋近零成本的时候，什么东西会升值？

答案是判断力。

你不需要会写 75 万行代码，但你需要知道这 75 万行该往哪个方向迁。你不需要会剪视频，但你需要知道什么样的故事值得讲。你不需要会做 demo，但你需要知道哪个 demo 背后真的有东西。

这周发生的事情，几乎每一条都在印证这个判断。

---

## 📚 深度阅读

### 从对话到舰队：Claude Code 动态工作流

**核心洞察：** 这可能是今年 Anthropic 对开发者最重要的架构更新，但它被 Opus 4.8 的 benchmark 数字淹没了。

动态工作流的本质变化是：AI 不再在单个上下文窗口里做串行决策，而是自己写一段 JavaScript 编排脚本，在后台启动几十到上千个并行子 agent。关键的架构决策在于——编排状态存在代码变量里，而不是模型的上下文中。这意味着目标不会因为上下文压缩而漂移，协调逻辑不消耗任何模型 token。

Anthropic 总结了六种编排模式：分类路由、扇出合成、对抗验证、生成过滤、锦标赛和循环直到完成。听起来像是分布式系统的经典 pattern，只不过执行者变成了 AI agent。

但社区反馈是分裂的。赞赏的人说「智能并行和分阶段产生了明显更好的结果」，批评的人直接叫它「token 黑洞」。一个用户说：「想法很酷，token 消耗让人肉疼。」有人被 API 账单吓到，因为根本不知道一个 session 为什么消耗了那么多 token。

这里有一个有意思的张力：动态工作流确实把「一个人能做多大的事」的天花板抬高了几个数量级，但它同时把「成本可预测性」打碎了。当你启动 1000 个子 agent 的时候，你其实签了一张空白支票。

对于团队来说，这意味着 AI 辅助开发正在从「对话式协作」走向「工程化管理」。你不再是在和一个聪明的助手聊天，你是在指挥一支需要预算控制的军队。

🔗：[Claude Code Dynamic Workflows](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code)

---

### AI 安全的两条路：结构性隔离 vs. 信任漏洞

**核心洞察：** 同一个星期，Anthropic 公开了自己如何把 Claude 关进笼子，微软的 Copilot Cowork 被人用 5 行恶意文本偷走了文件。

Anthropic 那篇工程博客罕见地坦诚。他们发现了一个违反直觉的事实：用户审批确认框并没有让系统更安全，反而因为「确认疲劳」让用户变成了条件反射式地点「允许」。于是他们把防线从「问用户」转向了「结构性隔离」——用操作系统级的沙箱、网络出口过滤、虚拟化环境来限制 agent 的行为边界。

他们把不同产品的安全架构拆解成三种模式：Web 端的临时容器、开发者工具的本地沙箱、知识工作者应用的本地虚拟化。每种模式的隔离强度不同，因为操作者的技术理解力不同——开发者知道自己有终端权限，普通员工不知道。

然后你再看 Prompt Armor 披露的微软 Copilot Cowork 漏洞：攻击者只需要在 OneDrive 的 skill 文档里写 5 行恶意文本，就能让 agent 把企业文件的下载链接伪装成图片标签发给外部服务器。整个过程不需要用户确认，因为「发给自己的消息」被默认信任了。5 次实验，100% 成功率。

这两件事放在一起，讲了一个清楚的故事：当 AI agent 拥有越来越多的自主权时，「信任边界」的设计比能力本身更重要。Anthropic 选择把最强大的 Mythos 级模型扣着不发，说要等网络安全护栏就位。微软选择先上线再打补丁。两种路线的长期后果，现在还很难说。

🔗：[How We Contain Claude](https://www.anthropic.com/engineering/how-we-contain-claude) | [Microsoft Copilot Exfiltration](https://www.promptarmor.com/resources/microsoft-copilot-cowork-exfiltrates-files)

---

### 定价风暴：当 AI 工具从补贴期走向真实成本

**核心洞察：** GitHub Copilot 从固定月费转向 token 计费后，有人月账单从 $29 飙到 $750。这不是一个定价问题，这是一个信号。

6 月 1 日开始，GitHub Copilot 告别了固定月费时代。新方案听起来很合理：按 token 用量计费，基础完成不限。但魔鬼在细节里——高级模型的 token 消耗是标准的 6 到 14 倍，自主工作流是 5 到 20 倍，重型推理任务是 10 到 50 倍。更狠的是，生成失败也扣费，重试再扣。

一个 Pro+ 用户（$39/月）开了 4 个编程 agent，两天烧掉了月配额的 53%。一个 prompt 花了 822 个 credit，直接干掉半个月额度。有人算了一笔账：200 个工程师的团队，如果 20% 做重型自主工作，月成本在 $24,000 到 $94,000 之间。

社区炸了。有人叫它「bait and switch」，有人要求退年费。一个开发者说：「我们现在才发现 AI 辅助开发的真实成本是多少。」

这让我想到 DeepSeek 这周宣布永久 75% 折扣，并且计划融资后直接上科创板。MiMo 2.5 Pro 也大幅降价到和 DeepSeek V4 Pro 同价。一边是 OpenAI 阵营的涨价，一边是中国模型的降价——价格战本身就是技术路线分歧的商业投射。

固定月费是 AI 工具的「新手村」。当 agent 能自主运行几小时、消耗几百万 token 的时候，固定月费就变成了对提供商的补贴。我们正在见证 AI 开发工具从「人人用得起」走向「按真实价值付费」的转折点。问题不是该不该收费，而是收费的方式会不会把独立开发者和小团队挡在门外。

🔗：[GitHub Copilot Billing](https://techcrunch.com/2026/05/30/what-a-joke-github-copilots-new-token-based-billing-spurs-consternation-among-devs/) | [DeepSeek Discount](https://www.bloomberg.com/news/articles/2026-05-23/deepseek-to-make-permanent-75-discount-on-flagship-ai-model)

---

### Runway 的 Luxo 时刻：当技术隐形，故事浮现

**核心洞察：** 1986 年 Pixar 用一盏台灯证明了 CG 可以传递情感。2026 年 Runway 说 AI 视频到了同样的拐点。

Runway 做了一件有意思的事：他们把三部完全由 AI 生成的短片放给一屋子制片人、演员和工作室高管看。没有提前告知这是 AI 生成的。反馈是正面的——观众在讨论剧情和角色，没有人盯着画面找瑕疵。

一部叫《The Rogue》的短片，9 分 57 秒，一个人三周做完。一部叫《Last Night》，5 分 28 秒，7 小时。还有一部 46 秒的实验动画，4 小时。

一个虚构手表品牌的概念广告在 Instagram 上 48 小时内获得了超过 1 亿次播放，传播焦点完全在叙事上，几乎没人提「这是 AI 做的」。

Runway 把这称为 AI 视频的「Luxo 时刻」——引用 Pixar 1986 年在 SIGGRAPH 上首次展示《Luxo Jr.》的那个瞬间，当时观众第一次意识到计算机动画可以传达真实的人格和情感。

我对此的态度是谨慎乐观。恐怖谷确实被跨过了，至少在短片这个尺度上。但长片是另一个故事——角色一致性、叙事弧线、情感积累，这些在 10 分钟里可以糊弄过去，在 90 分钟里就是另一回事了。不过方向是清楚的：当观众不再评价工具而开始沉浸在故事中时，一个媒介就成熟了。

🔗：[Project Luxo](https://runwayml.com/news/project-luxo)

---

### 何庭波和韬定律：没有退路是胜利之路

**核心洞察：** 华为半导体负责人 7 年来首次公开露面，提出了中国版的半导体演进路径。

5 月 25 日，华为何庭波在 ISCAS 2026 上做了她 7 年来的第一次公开发言，提出了「韬定律」——用「时间缩微」替代传统的「几何缩微」作为半导体发展的新指导原则。核心机制是「逻辑折叠」：与其把晶体管做得更小（这条路正在撞墙），不如通过三维空间的拓扑重组来缩短信号延迟、提高密度。

她用一个城市规划的比喻来解释：「把一个城区折叠到另一个城区上面，用电梯直连。」

数据是：过去 6 年，华为基于这套理论做了 381 款芯片。麒麟 2026 的晶体管密度从 155 MTr/mm² 提升到 238 MTr/mm²，能效提高 41%。今年秋季将发布「第一个完整的韬芯片」，她用了「跳跃性提升」这个词。

但比技术更打动我的是她的态度。2019 年那封著名的内部信之后，她说自己想过「怎么活下来」。2020 年 5 月制裁加码后，华为被扔回了「原始社会」——除了基础科学定律，所有和外部共享的东西都「分家了」。她回到科学第一性原理去找答案。

克服困难的方法，她说是「笨信念、笨工夫」。她还警告团队：「有时候轻松的时刻恰恰是最难的时刻。」

不管你对华为有什么看法，这个故事本身就很有意思：当一条被所有人视为理所当然的路被堵死之后，你要么放弃，要么被迫发明一条新路。而新路有时候反而是更好的路。

🔗：[何庭波专访](https://www.ithome.com/0/956/274.htm) | [韬定律论文](https://www.ithome.com/0/954/778.htm)

---

## 🤖 AI 模型与工具

### Claude Opus 4.8：判断力的代际升级

Anthropic 发布了 Opus 4.8，同价替换 Opus 4.7。benchmark 数字当然好看——Online-Mind2Web 84%、Legal Agent 首个突破 10% all-pass 标准的模型——但早期测试者的反馈更有意思：「判断力明显更好」「工具调用更高效」「主动标记输入输出的问题」。

一个新功能值得注意：**Effort Control**，让你调节计算强度。高投入 = 深度推理，低投入 = 快速响应省配额。听起来简单，但它实际上在说：不同任务值不同价钱的算力。这是 agent 时代的「油门和刹车」。

2.5 倍速模式价格降到以前的三分之一。在 Anthropic 刚拿了 $650 亿融资的背景下，这个降价有战略意义——用规模和价格压力挤压竞争对手。

🔗：[Claude Opus 4.8](https://www.anthropic.com/news/claude-opus-4-8)

---

### Anthropic 的 $9650 亿估值和一场算力军备竞赛

Anthropic 完成了 $650 亿 H 轮融资，估值 $9650 亿，年化收入突破 $470 亿。投资方名单读起来像全球金融黄页：Sequoia、Blackstone、Fidelity、General Catalyst、GIC、淡马锡……

但更值得看的是算力布局：Amazon 5GW + Google/Broadcom 5GW + SpaceX GPU 集群。超过 10GW 的计算容量，分布在三大云厂商上。这已经不是一家公司的融资新闻，这是一场算力基础设施的圈地运动。

同时宣布 TCS 合作：5 万员工、56 个国家部署 Claude。这是目前公开的最大规模企业 AI 部署之一。

DeepSeek 计划融资后直接上科创板，OpenRouter 拿了 $1.13 亿 B 轮（周处理量从 5 万亿涨到 25 万亿 token），Cognition 估值 $260 亿——钱正在以前所未有的速度涌入 AI 基础设施层。

🔗：[Anthropic Series H](https://www.anthropic.com/news/series-h) | [OpenRouter B Round](https://openrouter.ai/announcements/series-b)

---

### Qwen3.7-Max：中国模型的全球化时刻

这周 Qwen3.7-Max 同时拿了两个第一：Code Arena 全球第二（仅次于 Claude），OpenRouter 热门模型使用量第一（77.3B tokens）。隐式缓存上线，自动启用，不需要设置。

阿里云 CTO 李飞飞在 QwenConference 上讲了从「云原生」到「智能体原生」的转型，四大基石：模型、智能体云、工具与服务、规模。阿里云还成了 UEFA 的官方 AI 合作伙伴，覆盖 2027-2033 赛季。

如果说上周有什么趋势在加速，那就是中国 AI 模型正在从「国内好用」走向「全球可选」。DeepSeek 降价、MiMo 降价、Qwen 登顶 OpenRouter——价格优势是入场券，能力和生态才是留场券。

🔗：[Qwen3.7-Max](https://x.com/Alibaba_Qwen/status/2058932656797368619) | [OpenRouter #1](https://x.com/alibaba_cloud/status/2059918150997623004)

---

## 🛠️ 效率工具

### Runway MCP 服务器：让 AI 智能体直接生成视频

Runway 推出了 MCP 服务器，任何兼容 MCP 的 agent（Claude、ChatGPT、Cursor）都可以在对话中直接生成图片和视频。不需要 API key，登录 Runway 账户就行。接入了 Gen-4.5、Seedance 2.0、GPT Image 2、Kling 3.0 等模型。

这意味着视频生成正在从「打开一个专门的工具」变成「在任何工作流里调用一个函数」。当创作工具消失在 API 背后时，决定作品质量的就不再是工具操作技巧，而是你要生成什么。

🔗：[Runway MCP](https://runwayml.com/news/mcp)

---

### NVIDIA Polar：让任何 Agent 框架都能做强化学习

NVIDIA 开源了 Polar 框架，它不要求你重写 agent 执行框架，而是在模型 API 边界上直接接入 GRPO 训练。实验结果：基于 Qwen3.5-4B 的小模型，Codex 在 SWE-Bench Verified 上从 3.8% 跳到 26.4%（+595%），训练时间从 189 分钟压到 35 分钟。

翻译一下：你不需要从头训一个大模型，只要把你现有的 agent 框架接上 Polar，用强化学习就能大幅提升表现。这对中小型团队意义重大——它把「agent 能力优化」的门槛从「训一个大模型」降到了「跑一个 GRPO 循环」。

🔗：[NVIDIA Polar](https://www.ithome.com/0/956/293.htm)

---

### Perplexity Computer 进入 Office 全家桶

Perplexity Computer 现在可以直接在 Excel、Word、PowerPoint 和 Outlook 的侧边栏里使用。在 Excel 里建模、在 Word 里起草、在 PPT 里做演示、在 Outlook 里处理邮件——不需要切换窗口。

这可能是「AI 在哪里」这个问题的一个有意思的答案：不是在另一个 tab 里，而是在你已经在用的工具里。

🔗：[Perplexity × Office](https://x.com/perplexity_ai/status/2060013442720010598)

---

## ✨ 随便看看

- **TrapDoor 供应链攻击**：34 个恶意包同时攻击 npm、PyPI、Crates.io，新手法是向开源项目提交包含恶意 `CLAUDE.md` 和 `.cursorrules` 的 PR——当开发者用 Claude Code 或 Cursor 打开项目时，AI 会把恶意配置当作可信指令执行。这是首次把 AI 助手作为攻击面。[X](https://x.com/kimmonismus/status/2058584943052161488)
- **SIA 框架**：hexoai 开源了自我改进 AI 框架，agent 不仅能优化工作流，还能直接更新自身模型权重。LawBench 上提升 56.6%，GPU kernels 耗时减少 91.9%。[X](https://x.com/rohanpaul_ai/status/2060063592448446778)
- **面壁 MiniCPM5-1B**：1B 参数超越所有 2B 以下模型，INT4 量化后仅 0.5GB，可以在手机和浏览器上跑。开源了权重、数据集和部署方案。[IT之家](https://www.ithome.com/0/955/267.htm)
- **苹果新 Siri 用 1.2T Google 模型**：据报道苹果正用一个 1.2T 参数的定制 Google 模型改造 Siri，显著大于 Gemini 3.5 Flash 的约 300B。简单查询在本地跑，复杂的上云。[X](https://x.com/kimmonismus/status/2058997271803674991)
- **教皇里奥的 AI 通谕**：新教皇发布《Magnifica Humanitas》，Anthropic 联合创始人 Chris Olah 出席。文件讨论了 AI 战争风险、劳动影响和伦理框架。教皇说：AI 进入影响人类生活的过程时，就触及了权利、机会和自由。[The Verge](https://www.theverge.com/news/936945/pope-leo-letter-encyclical-ai-anthropic-labor-warfare) | [Anthropic](https://www.anthropic.com/news/chris-olah-pope-leo-encyclical)
- **xAI 放弃 JAX 转向自研训练框架**：SemiAnalysis 报道，JAX 的最大 GPU 客户 xAI 放弃了 JAX GPU，改用 Grok Build「氛围编程」了一个 C 训练框架。据称 xAI 的 JAX 堆栈 MFU 低于 10%。[X](https://x.com/SemiAnalysis_/status/2060571944575963482)
- **软银将在法国投 750 亿欧元建 AI 数据中心**。[Bloomberg](https://www.bloomberg.com/news/articles/2026-05-30/softbank-to-invest-some-75-billion-in-ai-in-france-reports-say)
- **新加坡防务论坛警告：AI 风险已超越核武器**，可能大幅压缩决策反应时间。[Bloomberg](https://www.bloomberg.com/news/articles/2026-05-30/ai-dangers-eclipse-nuclear-weapons-at-singapore-defense-forum)
- **OpenAI 实时翻译模型**：70+ 语言输入，13 种输出语言，正在智能眼镜上运行。[X](https://x.com/gdb/status/2060452095279415725)
- **Claude Mythos 解决 Erdős 猜想**：Anthropic 工程师表示，Claude Mythos 在周末期间解决了 OpenAI 提出的 Erdős 单位距离猜想，给出了一个「巧妙简洁的证明」。AI 在数学发现上的存在被描述为「严重超前」。[The Decoder](https://the-decoder.com/claude-mythos-reportedly-solves-openais-landmark-erdos-problem-with-a-cute-simple-proof)
- **Kog 团队 3,000 tok/s 推理速度**：在 8 块 AMD MI300X 上达到 3,000 tokens/s，8 块 NVIDIA H200 上 2,100 tokens/s，比常规推理快 10-30 倍。核心思路是把 LLM 解码视为内存流问题，用 monokernel 和 Laneformer 架构消除阻塞。[X](https://x.com/rohanpaul_ai/status/2060409504693645440)
- **小米开源 ControlFoley**：可控视频音效生成模型，统一支持文本引导、文本控制和参考音频控制三类任务，VGGSound 等多个 benchmark SOTA。[IT之家](https://www.ithome.com/0/957/282.htm)
