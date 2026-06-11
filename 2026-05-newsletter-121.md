---
title: L121_意图驱动时代，我们该相信什么
date: 2026/05/18 10:30:00
categories:
  - AI & Systems
tags:
  - Agent
  - Workflow
  - UserExperience
  - SystemDesign
  - ProductThinking
series: Newsletter 周刊
description: Jakob Nielsen 提出意图驱动 UX 新范式，JetBrains Air 开启多 Agent 编排时代，Notion Agent 跳票一年后成转化率最高功能，小红书四年 AI 转型的摇摆与坚持
---

![封面图](https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80)

## 引言

上周我在整理这期素材的时候，Jakob Nielsen 那篇关于 Intent UX 的文章让我停顿了很久。不是因为它有多复杂，而是因为它说中了一个我一直在感受但没想清楚的问题——我们和 AI 的交互，到底在经历什么？

想想看，两年前我们用 ChatGPT，最兴奋的是"它能对话"。我们用精心构造的 prompt，像在和一台更聪明的搜索引擎较劲。而今天，JetBrains 推出了 Air，一个让你同时指挥 Codex、Claude Agent、Gemini CLI 和 Junie 四个 Agent 并行工作的桌面工具。你的角色不再是操作员，而是调度员。

从"你跟电脑说话"到"你管理一群数字员工"，这个转变比我们想象的要深远得多。Nielsen 用了一个特别生动的比喻——就像维京酋长下令"去英国修道院给我弄点银子来"，他不需要知道每一步该怎么做，手下的人自己知道。

但问题也来了。当你的 30 个 Agent 每天产生 70 多条阻塞通知时，你怎么管？Notion 的答案是再加一个 Manager Agent，把 70 条压到 5 条。这听起来像是用一个 AI 问题去解决另一个 AI 问题，但仔细想想，这不就是人类组织几千年来一直在做的事吗——层级管理。

这期我想聊的就是这个：AI 正在把我们从执行者变成管理者，但我们还没学会怎么管理。

—

## 📚 深度阅读

### Jakob Nielsen：Intent by Discovery —— AI 时代的 UX 新范式

**核心洞察：** 这可能是今年关于 AI 交互设计最重要的一篇文章。Nielsen 提出 UI 范式正在经历 60 年来最大的转变——从命令式交互到意图驱动的结果规格化。

他拆解了 UX 的三个时代：1960-1995 的商业计算时代追求生产力，1995-2025 的互联网时代追求影响力（说白了就是操纵用户行为），而 2026 年起的 AI 时代，目标变成了"增强人类存在"。这个表述有点抽象，但内核很清楚——当 AI 处理执行层，人类的精力应该释放给想象力、判断力和意义建构。

文章最戳中我的是"articulation barrier"（表达障碍）这个概念。大约一半人口被归类为低识字率用户，要求他们用散文体写出精确意图本身就是不公平的。prompt engineering 这个概念的存在，本身就是交互设计失败的证据——如果用户需要学习某种"秘籍"才能让系统正常工作，那问题在系统，不在用户。

这让我想到一个日常场景。我用 Notion Agent 时，最开始也花了很多时间琢磨"怎么问才对"。但当我把 Agent 当成一个需要被培养的团队新成员——先让它做低风险的事，看它怎么做，逐步扩大权限——事情就顺了。Nielsen 管这个叫"progressive delegation"（渐进式授权），但本质上就是信任建立的过程。

更长远地，他提出了"latent space exploration"（潜空间探索）的概念：未来我们不再生产内容，而是在 AI 生成的千种方案中探索和发现。用户从"描述我想要什么"变成"在选项中认出我想要什么"。这其实是回归了人类最自然的方式——我们更擅长识别而不是回忆。

🔗：[Intent by Discovery - Jakob Nielsen](https://jakobnielsenphd.substack.com/p/intent-ux)

### 郝景芳：从北京折叠到 AI 折叠

**核心洞察：** 郝景芳把童行书院从五六十人拆成 9 个小公司，总部全职人力降为零，所有收入来自与分公司分成。她说公司不必"做大做强"，而应"做多做美"。

最让我震撼的不是这个组织架构本身，而是她说的一句话："AI 产品经理与编程模型之间的沟通是完全顺畅的、无缝的，人类一旦介入反而会阻碍效率。"

这很反直觉。我们习惯认为人是最重要的连接者，但在 AI 时代，人类可能是瓶颈。她的解决方案是"全 AI 工作"——用 AI Agent 开发了整个教育系统。

五个位移特别值得反复咀嚼：从"能做多少"到"能舍弃多少"，从信息端移到判断端，从技能积累移到叙事积累，从做内容移到建头寸，从建造者移到建造房间的人。

这五个位移串起来其实是一件事——在 AI 让一切变得容易的时代，真正的稀缺不是能力，而是品味和判断力。知道什么不做，比知道做什么更难。

🔗：[郝景芳对话 - 甲子光年](https://mp.weixin.qq.com/s/z6TqjLRNsGXs1GyYNe9ZUA)

### Notion Agent 跳票一年后，为什么成了付费转化最高的功能

**核心洞察：** Notion 的 Custom Agents 跳票一年、经历五次重构，最终成了 Notion 史上 Free Trial 转化率最高的功能。这篇 Latent Space 播客的分享含金量极高。

早期团队试图让模型适应 Notion 自创的 XML 和 JSON 格式，完全失败。改用模型更擅长的 Markdown 和 SQL 后，质量立刻飞跃。这个教训很简单但经常被忽略——让工具适应人（或者说适应模型的训练习惯），而不是反过来。

当工具数量超过 100 个时，团队采用"渐进式披露"方案动态展示工具，避免系统崩溃。这其实和 Nielsen 文章里提到的"orchestration layer"（编排层）是同一个思路——AI 不需要看到所有选项，只需要看到当下相关的选项。

GTM 团队的 30 个 Agent 每天产生 70 多条阻塞通知的案例最有画面感。他们加了一个 Manager Agent 来汇总处理，通知从 70 条降到 5 条。这让我想起自己团队用飞书 Agent 时的类似经历——自动化带来的是自动化本身的管理开销。

Notion 内部正在成型的新职能"Model Behavior Engineer"——无需工程背景——可能真的是 AI 时代的核心岗位之一。理解模型行为模式、设计提示词策略、调试 Agent 交互，这些能力不依赖传统编程，但对 AI 团队至关重要。

🔗：[Latent Space Podcast - Simon Last & Sarah Sachs](https://www.zengzhang.ai/p/aiep56-ainotion-agentaiskillai)

---

## 🤖 AI 工具

### JetBrains Air —— 多 Agent 编排的桌面调度台

JetBrains 新出的独立桌面工具，把 Codex、Claude Agent、Gemini CLI、Junie 这些编码 Agent 放进一个控制中心。你可以同时派多个 Agent 各自跑不同的任务，Docker 或 Git worktree 做隔离，还能在统一界面 review 结果。

**深度分析：** Air 的出现标志着一个趋势——Agent 工具正在从"单个聊天窗口"进化为"编排平台"。它的核心价值不是提供 AI 能力（那是各个模型的事），而是解决并发、隔离和上下文管理这些工程问题。

一位 JetBrains 内部开发者说"用一个晚上就用 Go 写出了相当复杂的 CLI"，而 Go 是他从没碰过的语言。这个案例说明了什么——当多 Agent 并行 + 代码智能 review 结合在一起，学习成本被大幅压缩。

但 Air 也有明显局限。它目前只支持本地运行，云端和自动化还在路线图。对于需要 24 小时跑批的场景，本地方案的可用性是个问题。不过对于个人开发者和小型团队，这已经是一个质变。

🔗：[air.dev](https://air.dev/)

### Lovart AI —— 矢量造字

**功能描述：** 上传参考图片加文字提示，就能生成可改色、可调字号的矢量字体文件。背后涉及的不只是生图算法，还有矢量化处理和字符编码映射。

**深度分析：** 造字体这件事，传统流程是：定骨架、抠细节、调字间距，没个把星期下不来。Lovart 把整个链路压缩到了几分钟。

更重要的是，它解决的不仅是效率问题，而是让不具备专业技能的普通人也能进入这个领域。这其实回应了郝景芳说的"从技能积累移到叙事积累"——当技能被商品化，你的判断力和叙事反而更有价值。

一个设计师可能用 AI 一天出 50 套字体方案，然后凭品味选出最好的 2 套。这种"大量生成 + 精确筛选"的工作流，正在变成 AI 时代的标配模式。

🔗：[Lovart AI](https://www.uisdc.com/hunter/0221667875.html)

### 小红书 AI 问一问 —— 社区与算法的四年博弈

**核心洞察：** 小红书 2025 年的 AI"问一问"功能使社区用户留存率提升约 2%-3%。4 月 30 日成立 AI 一级部门 Dots，由原 Hi Lab 升级而来。

**深度分析：** 小红书的 AI 故事最有趣的地方不是技术本身，而是它在"活人感"和 AI 算法之间的反复摇摆。社区的核心资产是真实用户的真实体验，但 AI 的介入往往会稀释这种真实性。

这和 Nielsen 提到的"trust calibration"（信任校准）直接相关。用户需要知道哪些内容是 AI 生成的，哪些是真人写的，以及两者的边界在哪里。小红书如果能处理好这个边界，可能找到一条不同于纯算法推荐的社区 AI 路径。

但 4 年的探索尚未走通，也说明这事没那么简单。企业内部做 AI 转型，小红书算是一个前车之鉴加现场直播的案例。

🔗：[小红书 AI 转型之路](https://www.zengzhang.ai/p/aiep56-ainotion-agentaiskillai)

---

## 🛠️ 效率工具

### Open Design —— Claude Design 的开源平替

把 Anthropic 的 Claude Design 产品拆成协议 + 文件 + 本地架构重搭了一遍。它自己不带模型，靠扫描本机的 claude / codex / cursor-agent / gemini / qwen CLI 当"大脑"。流程是：弹出问卷锁定需求 → 选风格方向 → 加载 Design System → 按 Skill 产出 artifact → iframe 实时预览 → 导出 HTML/PDF/PPTX/ZIP。

**深度分析：** 这个工具的思路很"开源"——不做模型层，只做编排层。它验证了一个判断：未来的工具竞争不在 AI 能力本身（那是大厂的游戏），而在如何把已有的 AI 能力组合成好用的工作流。

值得一提的是它支持多种 AI CLI 作为后端，这意味着用户不被锁定在某个模型上。这种"模型无关"的设计哲学，和 JetBrains Air 的思路一致。

🔗：[github.com/nexu-io/open-design](https://github.com/nexu-io/open-design)

### Claude Receipts —— 把 AI 消费变成热敏小票

每次结束 coding session 自动生成详单，不同模型用了多少 token、花了多少钱，还能打到热敏小票机上做成真的"AI 消费小票"。

**深度分析：** 这个工具的价值不在于省钱（省不了多少），而在于"把抽象变成具体"。API 花费本来是看不见摸不着的数字，变成一张收据后，你对 AI 使用的成本感知完全不同了。

它把一个 nerd 行为仪式化了。这其实是一个很深的 UX 洞察——当某种新行为变得日常化，人们需要仪式感来确认"我正在做一件正经事"。

🔗：[github.com/chrishutchinson/claude-receipts](https://github.com/chrishutchinson/claude-receipts)

### JetBrains Air 与 Skill 生态的协同

本期多个来源都提到了 Skill（技能）这个概念。YouMind 可以做付费 Skill 卖钱，作者把投资研报到股票因子的流程做成了 Skill 开源，豆包输入法、Narrator AI CLI 都以 Skill 形式存在。

**深度洞察：** Skill 正在变成 AI 时代的"个人能力资产"。你不再需要每次都从头描述"我想要什么"，而是积累一套可复用的 Skill 库，配合 Git 做版本管理和多设备同步。

这和上期提到的 Skill 中央库管理思路一脉相承。当每个人的 Skill 库变成可交易、可分享的资产，AI 工具生态就从"工具集合"变成了"能力市场"。

---

## ✨ 随便看看

- **GPT Image 2 品牌视觉提案**：用 GPT-Image 2 付费版快速生成完整品牌视觉方案，5 张核心图覆盖主视觉、识别系统、包装、传播场景、IP 角色 [详情](https://www.zengzhang.ai/p/aiep56-ainotion-agentaiskillai)
- **AI 中转站乱象**：45% 假模型，9 个投毒，1 个偷币，中间层的人活在灰色地带 [详情](https://zhuanlan.zhihu.com/p/2032951488624977427)
- **Cat Gatekeeper**：用猫提醒你少刷社交媒体的 Chrome 扩展，时间到了整页被猫盖住 [详情](https://chromewebstore.google.com/detail/cat-gatekeeper/elbikiflgfhjdjmficnigpeegjbhdidh)
- **flomo memory.md**：基于全部笔记生成"稳定的你"和"当下的你"两份文档，接入 AI 后可辅助决策 [详情](https://www.zengzhang.ai/p/aiep56-ainotion-agentaiskillai)
- **Refero Styles**：设计风格搜索 + 结构化拆解，可按情绪、色彩、品牌查询，还能生成 DESIGN.md 喂给 AI agent [详情](https://styles.refero.design/)
- **Transitions.dev**：前端动效字典，卡片变化、数字跳动、菜单开合等独立 demo，一键 Copy 代码 [详情](https://transitions.dev/)
- **笔记同步助手**：跨平台内容剪藏中枢，微信/小红书/知乎等转发后自动变成 Obsidian/Notion 笔记 [详情](https://www.bijitongbu.site/)
- **AndDrive**：把 Android 手机伪装成本地硬盘的 Mac 工具，Finder 侧边栏直接挂载，剪贴板双向同步 [详情](https://anddrive.catchingnow.com/)
- **县城 AI 小店**：AI 自习室两年从 1320 家增至 5 万家，品牌方赚加盟费，闲鱼上二手学习机低价甩卖 [详情](https://www.zengzhang.ai/p/aiep56-ainotion-agentaiskillai)
- **Mockdown**：用纯文本画线框喂给 AI 的原型工具，AI 更擅长读结构化文本而非听人描述 [详情](https://www.mockdown.design/about)
- **sipsip.ai**：把 YouTube/播客/PDF/文章转成结构化摘要，Daily Brief 每天推送关注源的更新浓缩版 [详情](https://sipsip.ai/)
