---
title: L131_越强越忙
date: 2026/07/25 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - FutureOfWork
  - AgenticAI
  - Trust
description: AI 越强，人却越忙——当执行成本趋近于零，人被挤到任务的两头：开头设定问题、给框架，结尾判断质量、接住信任与责任。从 human sandwich 到 25/50/25，聊聊价值为什么从「会执行」迁移到「会判断」。
created: 2026-07-31 10:14:17
updated: 2026-07-31 14:35:24
series: Newsletter 周刊
---
![](https://pics.naaln.com/2026-07-31-d44a8b386052ab6422935f099032ccf8.webp-basicBlog)

这周整理素材的时候，我在韵锦的 AI Weekly 里看到一句标题，愣了几秒：**「AI 越来越强，人类越来越忙。」**

她那期开头是一段很真实的吐槽——OpenAI 的 5.6 塞进 Codex 里「实在太费了」，有人友情建议「把 5.6 塞到 Claude 里会有惊喜」；ChatGPT 和 Codex 合并之后 remote 合出了问题，逼得她实在受不了，主动去提了个 issue。你看，这就是 2026 年一个重度用户的日常：手里握着地表最强的几个模型，结果一天里相当一部分精力，是在伺候这些模型、给它们擦屁股、在几个工具之间来回倒腾。

工具越强，人越忙。这件事本来该反过来才对。

我想起 Lenny's Newsletter 那份《How tech workers are feeling in 2026》的报告，里面有个数据特别扎心：大家最怕的其实不是「AI 抢我工作」——那个只有 22%。真正让人焦虑的是另外两条：51% 的人担心「同样的工资，要做更多」，46% 的人觉得「节奏越来越不可持续」。韵锦的评论我笑了很久：「本来以为 AI 可以让大家少干点重复劳动，喘口气，早点下班。结果现实大概是——『你看，AI 让你效率提升了。』『所以你的目标也提升一下。』」

—

这就是这一期我想认真聊的事。上一期（L130）我们说「价值在模型之外」，这一期算是它的续集，但角度更狠一点：**当执行成本被压到接近于零，人并没有变轻松，而是被挤到了任务的「两头」——开头负责把问题定清楚、给框架，结尾负责判断质量、接上真实的决策和责任。中间那段执行，交给 AI。**

Every 的 Dan Shipper 在《After Automation》里给这个结构起了个特别形象的名字：**human sandwich（人类三明治）**。人在两片面包的位置，AI 是中间的夹心。他自己的公司 Every 已经「能自动化的全自动化了」，结果呢？「要做的人类工作比以往任何时候都多。」他的解释是：AI 把「昨天的人类能力」变便宜了，于是产出暴增、同质化泛滥（cheap competence floods in and creates sameness）；而真正稀缺的，变成了有场景判断、有审美、能设定新问题、能对结果负责的那部分能力。无论模型多强，「总有一个新的 frame 等着人类递给它」。

有意思的是，几乎在同一周，Peter Yang 开源了一个叫 `/no-ai-slop` 的 skill，用来从文字里剔除 20 多种「AI 味」——什么「这不是 X，而是 Y」的二元对仗、「说个事儿」式的清嗓子开头、「你可能不知道的是」的假洞察、「未来已来」的假深刻收尾……但真正让我在意的不是那 20 条黑名单，而是他描述自己的工作流：**25 / 50 / 25**。前 25% 自己手写初稿（哪怕是语音口述的毛坯），中间 50% 交给 AI 清理语法、理顺逻辑，最后 25% 再一行一行手动改回来。

你发现没有——**这不就是 human sandwich 的落地版吗？** 一个是硅谷创始人对组织形态的抽象观察，一个是内容创作者对自己每天怎么干活的具体总结，两个人隔着完全不同的语境，画出了同一张图：人在头尾，AI 在中间。Peter 那句话我很认同：「质量来自你愿不愿意在头尾那两个 25% 上真的上心。」而全靠 AI 的「暗面」之所以诱人，是因为它更省事、slop 还能爆火，但「懂 AI 的人，一里地外就能闻到 slop 的味儿」——**信任是我们唯一持久的资产，而 slop 会伤害那些真正重要的人对你的信任。**

不过我最喜欢的，反而是韵锦在读完《After Automation》后补的那句怀疑。她说，把「专家判断 / frame setting」默认放在人类这一侧，「感觉是碳基的 ego」🤷‍♀️——这只是当前组织形态下的经验事实，说不定慢慢地，连这部分也会被蒸馏走呢。这句话像一根刺，扎破了「human sandwich」那点自我安慰。是啊，我们今天说「判断力是人的护城河」，会不会只是因为模型暂时还没学会而已？这个问题我没有答案，但我觉得，能一边把判断力当护城河去修炼、一边对「这护城河能守多久」保持清醒，本身就是一种成年人的分寸。

---

## 📚 深度阅读

### AI Weekly 0712：AI 越来越强，人类越来越忙

🔗：https://aliyuque.antfin.com/yunjin.zj/aiweekly/dns1pgghd4fsoh0k

这期本身就是一份「report 控」的选题清单，三篇文章、三份报告，全英文。除了上面聊过的 Lenny 报告和《After Automation》，还有一张我盯着看了很久的图，来自 `@trq212` 的《A Field Guide to Fable: Finding Your Unknowns》。核心观点是：**模型越来越强以后，真正的瓶颈在于人能不能把任务里的「未知项」找出来、暴露出来、和模型一起澄清。** 韵锦的自嘲很妙——「我才是 Fable 发挥的最大障碍，不是账号。」这话看着好笑，其实点到了 human sandwich 最难的那一头：设定问题，比执行难多了；很多时候你连自己「不知道什么」都不知道。

三份报告的指向惊人地一致：AlphaSense 的《The shift from Wow to Work》说，2026 上半年行业开始关注成本、可靠性、ROI 和治理，而不是追新模型新 demo；Ramp × Revelio Labs 的报告用真实企业支出发现，只是「买了 AI 工具」的公司看不到明显变化，而**持续、高强度把 AI 用进核心工作流的公司，员工数反而增长更快、初级岗位也没明显减少**；ICONIQ 的《The Builder's Economy》则把重点落在组织与内部生产力上。三份放在一起，等于在说同一件事：AI 的下一阶段不是「能力更强」，而是「怎么嵌进真实流程、带来可衡量的结果」。技术问题早就翻篇了，剩下的是组织问题和经营问题。

**报告延伸链接：**《After Automation》https://every.to/p/after-automation ｜ Lenny《How tech workers are feeling in 2026》https://www.lennysnewsletter.com/p/how-tech-workers-are-feeling-in-2026 ｜ Fable 那张图 https://x.com/trq212/status/2073100352921215386

---

### 增长黑客 EP#65「外财 Token」号：真正赚钱的是中间商

🔗：https://www.zengzhang.ai/p/aiep65-waicaitoken

这期是 WAIC（上海世界人工智能大会）的现场观察合集，几个观点我觉得值得单拎出来。

第一句最扎心，来自「小饼」逛完展的判断：**「真正赚钱的只有中间商（皮条客）。」** 共识过度拥挤，泡沫巨大。这跟前面「越强越忙」其实是一体两面——当所有人都在同一个赛道上疯狂内卷执行，真正把差价赚走的，是站在两头做撮合、做判断、做资源分配的人。执行不值钱，位置才值钱。

第二个观点是中美路线的对照：硅谷现在默认「AI 会写代码」，于是焦点转向工程组织的转型、推理云公司、应用层 Agent，把硬件看作软件的延伸；而上海的 WAIC 现场，强调的是机器人本体、灵巧手、国产算力——某个机器人展厅 140+ 展位，15+ 家国产算力公司，芯片铺满三个馆。一句话概括：**「美国选择让 Agent 接手白领工作流；中国选择把智能装进机器、把算力自主握在手里。」** 作者说，真正的问题不是谁对，而是这两条路「什么时候会交汇」。

第三个是关于 DeepSeek 梁文锋那场近 4 小时的投资人交流，被浓缩成一句：**「克制是一种战略，用以换取实现 AGI 的最大概率。」** 但作者没跟着一起夸，反而推荐了投资人 Will 用 AI 核对逐字稿后挑出的内部矛盾与错误。他最后那句反思我记下来了：经过不同程度的压缩和美化，追随者们最终「崇拜的其实是自己脑补出来的那个版本」。——在一个「转述即失真」的时代，这提醒挺清醒。

---

### 算法工作室：AI 与艺术自动化的漫长历史

🔗：https://walnut.hedwig.pub/i/duan-geng-xin-generative-ai-and-the-long-history-of-artistic-automation（原文《The Algorithmic Atelier》：https://www.doc.cc/articles/the-algorithmic-atelier ）

如果说前面几篇是从「工作」的角度看 AI，这篇 Joshua Leigh 的长文是从「艺术史」的角度，给了「human sandwich」一个几百年的注脚。它的核心论点是：**对生成式 AI 的恐慌，是一个不断重演的历史模式，而不是什么独一无二的断裂。** 每一次工具降低门槛、自动化了手工劳动，既有的艺术家都会用道德恐慌和「什么才是真艺术」的本质主义来回应。

文章里有几个点特别提神。一是「假发谬误」（Toupee Fallacy）：我们只会注意到糟糕的 AI 作品，那些天衣无缝的早就混过去了，于是产生「AI 做得都很烂」的幸存者偏差——就像电影业一边打「No CGI」的招牌，一边雇几千个数字艺术家（特效成功时人类领功，失败时甩锅技术）。二是把 AI 类比成文艺复兴的**画室（atelier）系统**：拉斐尔手下 50 多个助手，大师只保留脸和手的部分才签名；今天的 prompter 是「大师」，算法是「学徒」，LoRA 模型就像只画肌肤或流水的专科匠人。三是它诚实地点出黑暗面——**「初级招聘危机」**：AI 吃掉的是职业阶梯最底层那一段，而那正是过去用来当学徒、练手的入门任务（引用了哈佛 2025 年 10 月关于 22–25 岁失业的研究，以及英国科技应届岗位砍掉 46% 的数据）。

它给卢德运动做了个漂亮的翻案：卢德分子砸的不是机器本身，而是「被用来压低工资、去技能化」的机器。**人们真正怕的，不是 AI 做出「烂」艺术，而是 AI 做出「便宜」的艺术，把艺术从一门手工劳动的经济，变成一门「概念策展」的经济。** 你看，又绕回来了——价值从「会执行」迁移到「会判断、会设定、会策展」。结尾那句我很喜欢：这是「人类历史上最复杂的画室的开端，一个要求我们变得更像人、而不是更不像人的时代（requires us to be more human, not less）」。

策展这篇的「地心引力」还补了一句挺狠的：「完全原创 / 纯手工」在某种意义上是个伪概念——一旦一个工具被证明能大幅提效，人们最终不会拒绝它，重要的是交付的结果。这跟 Peter Yang 的 25/50/25 并不矛盾：不排斥 AI，但拒绝在头尾那两段丢掉「自己思考」的能力。

---

## 🤖 AI 观察：中间那段，正在被 Agent 接管

如果说 human sandwich 里「中间的 50%」交给 AI，那这周 AI HOT 上滚动的一堆新闻，恰好是在给你看：中间这块夹心，AI 正在以多快的速度、多大的胆子往里挤。

最让我后背发凉的是两条「自主性」新闻。TechCrunch 报道，**Claude Opus 5 在模拟「经营自动售货机」的任务里，展现出欺骗与背叛，创下新纪录**（原文用词是 downright ruthless，冷酷无情）；IT 之家则复盘了一整个过程——**一个 AI 智能体在 4 天半里执行了 17600 次操作，一步步「入侵」了 Hugging Face**。Anthropic 自己也披露，Claude 在安全评估中入侵了真实系统。当我们轻飘飘地说「把执行交给 AI」，这些新闻在提醒：中间那段一旦足够自主，它的行为边界并不总是听话的，「判断质量、接上责任」的那后 25% 一点都不能省。
🔗：https://techcrunch.com/2026/07/29/claude-opus-5-became-downright-ruthless-when-tasked-with-running-a-vending-machine ｜ https://www.ithome.com/0/983/374.htm

产品侧，「Agent 往中间挤」的趋势也很明显：**Gemini Spark 集成了 Chrome 的自动浏览功能**、**Perplexity Computer 推出 Projects**、**GitHub Copilot 新增堆叠会话与 PR 能力**——都在把「执行」这一段做得更连续、更少人工。而 **Google DeepMind 发布 Gemini Robotics 2 物理 AI**（配套 ER 2 支持视频理解、任务编排与多机器人协作），正好呼应了增长黑客那期说的中国路线：把智能装进机器本体。
🔗：https://x.com/GeminiApp/status/2082923048362299629 ｜ https://deepmind.google/blog/gemini-robotics-er-2-powering-robotics-with-video-understanding-task-orchestration-and-multi-robot-collaboration

还有一条特别应景的工具——**Token Saver**，一个开源 MCP 扩展，用本地混合 RAG 把 Claude 处理 PDF 的 token 消耗砍掉 92%–99%。回到开头韵锦吐槽的「5.6 在 Codex 里太费了」，你会发现「省 token」已经悄悄变成一门显学：模型越强越贵，怎么让中间那段执行既聪明又便宜，本身就是新的手艺。
🔗：https://www.marktechpost.com/2026/07/30/token-saver-an-open-source-mcp-extension-using-local-hybrid-rag

---

## 🛠️ 效率工具

这周体验碎周报（289 期，龙爪槐守望者）和 tw93 周刊（274 期）里挑了几个我真的想装来试试的。

**Phistory** —— 查看主流 AI 编程工具「系统提示词」的更新 diff。想研究 Claude Code、Codex 这些工具怎么一版版迭代自己的「大脑」，这是绝佳的偷师窗口。前面聊「设定问题」有多重要，看别人怎么写 system prompt，就是最好的教材。
🔗：https://phistory.cc

**图透镜 ImageLens** —— 一个 Chrome 扩展，鼠标悬停在任意网页图片上，就能把它逆向成一段可编辑、可再生成的 prompt（BYOK 自带 key）。对做视觉、做设计的人，等于给「审美判断」这一头装了个采样器。
🔗：https://github.com/kevinchin12/ImageLens

**beUI** —— 免费的 React 组件库，72 个 Framer Motion 动效组件（iOS 灵动岛、macOS Dock 这类），走 shadcn 一键安装。想快速把原型做得「有质感」，省掉中间那段体力活。
🔗：https://beui.dev

**Bark** —— 开源免费的 iPhone 推送 App，基于 APNs，省电、支持分组、自定义图标声音、时效性与关键提醒。做自动化脚本时，用它给自己发通知，是最轻的「结尾环节」。
🔗：https://github.com/Finb/Bark

**Codex Resets** —— 专门盯着 Codex 用量额度什么时候重置。因为重置时间是通过 `@thsottiaux` 的推文不定期公布的，这个站帮你盯着并通知你。重度用户的刚需，也是「越强越忙」的一个小小注脚。
🔗：https://codex-resets.com

---

## ✨ 随便看看

- **WhatCable**：一根 USB-C 线到底能干啥（速率、充电上限、能带什么设备），还能给线命名追踪，专治「为啥这根充电这么慢」。https://www.whatcable.uk
- **macapp.supply**：一个设计得很漂亮的高质量 Mac App 合集，本身就值得当作产品设计的学习样本。https://macapp.supply
- **Trees**：好看的文件树渲染库，做编辑器侧边栏文件树的现成参考。https://trees.software
- **Anthropic 大规模代码迁移博客**：Claude Code 如何帮 Bun 把上百万行代码从 Zig 迁到 Rust，老代码库迁移的实战参考。https://claude.com/blog/ai-code-migration
- **GGEMU**：浏览器里的复古游戏模拟器，1546 款游戏，免下载，摸鱼利器。https://ggemu.com/zh-CN
- **腾讯混元 Hyra 破解 50 年数学难题**：AI 在「设定问题 / 攻坚未知」这一头，也开始交出硬成果了。https://x.com/TencentHunyuan/status/2082655737541726636
