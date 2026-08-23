---
title: L134_如何存在
date: 2026/08/15 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - AI
  - Curation
  - FutureOfWork
description: AI 让实现变便宜了但没有让判断变便宜——从 FDE 角色兴起、重构经济学到设计系统必选项，本期聚焦 AI 时代判断力的价值，以及如何在噪音中练习在场。
created: 2026-08-20 12:43:25
updated: 2026-08-23 11:27:01
series: Newsletter 周刊
---
![](https://pics.naaln.com/2026-08-23-259c3095e9e1568a2859afb50844e624.webp-basicBlog)

这周有个画面一直在我脑海里挥之不去。

硅谷一场 pitch 活动上，八个 AI 创业团队轮番上台。台下投资人期待着听到「我们用了最新的 XXX 模型」，结果没有一个团队在吹模型。他们讲的全是：怎么让 10 个房地产经纪人完成 12 笔交易、怎么让配送小哥拍张照就能匹配到买家、怎么帮 900 万平方英尺的楼宇省下 20 万美元电费。有个团队甚至花了整整一年，跟 6000 个用户研究信用合作社的知识图谱，才敢说自己「开始做产品了」。

有人总结了一句话：「AI 让实现变便宜了，但没有让判断变便宜。」

我觉得这句话是理解本周所有事情的钥匙。

—

本周模型发布像下雨一样密集：xAI 的 Grok 4.6、阿里 Qwen3.8-2.4T（激活 95B 参数、原生 256K 上下文）、智谱 GLM-5.3、Google DeepMind 的 Gemini 3.7 Flash、微软首发自研推理模型 MAI-Thinking-1、小红书 dots3-note Preview（280B）、NVIDIA Nemotron 3.5 Lightning、Meta Muse Glimmer、MiniMax Music 3.0、DeepSeek V4 Pro、LTX-2.5……名单长到让人眼花。Gemini 月活破了 10 亿，成为 Google 增长最快的产品。SpaceX 宣布收购 Cursor。OpenAI 和 Anthropic 打起了价格战。

但「实现」这件事本身，已经不是瓶颈了。

瓶颈是什么？是范冰开源到 GitHub 上一周就拿了 3000 星的《前线部署工程师》——他说，FDE 月入十万的主要工作，是告诉老板「世界上已经有汽车了」。是 Mandy Michael 在博客里写的那句话：「没有设计系统的 AI 代码生成，不是混乱的加速，而是错误以机器速度传播。」是 Martin Fowler 网站上那篇实验报告：对代码做了 13 步结构化重构后，AI Agent 每次变更的输入 token 从 159,564 降到 27,360——降了 83%。代码量没变，是人类的判断（如何划分模块边界）让机器变聪明了。

也是脱口秀演员呼兰接手一家月亏 12 万的俱乐部，不是用 AI 写段子，而是用 AI 搭了数据看板、自动化采购流程，两个月做到盈利 7 万——AI 只是工具，真正的判断力来自「砍掉每日开放麦、固定专场」这种简单到不需要 AI 的决定。

—

这周我还读到一篇叫《How to Exist》的文章。作者 David Cain 说了一个惊人的事实：大多数人无法安静地坐三分钟而保持满足——「你几乎觉得自己要死了」。他说人类对自己的自然栖息地（当下此刻）过敏，一辈子都在用各种方式逃离「纯粹的存在」。

在模型周周更新、工具日日翻新的今天，这种「过敏」尤其强烈。我们刷新闻、追发布、试新工具——不一定是因为真的需要，而是因为「停下来」本身让人焦虑。

所以本期 Newsletter 的主题，我想叫它：**如何存在**。

不是如何追赶，不是如何不被淘汰——而是在所有这些噪音中，找到那些值得停下来深度阅读、认真思考的东西。AI 让实现变便宜了，但判断需要你真的在场。

---

## 📚 深度阅读

### FDE：月入十万的人，主要工作是教育

范冰（《增长黑客》作者）的新书《前线部署工程师》开源一周拿下 3000+ stars，这不意外——FDE 就是当下 AI 行业最抢手的角色。MIT NANDA Lab 的数据说：95% 的企业 GenAI 项目（代表 300-400 亿美元支出）未能产生可报告的财务价值。模型不稀缺了，把模型塞进客户真实业务里的人才稀缺。

但真正让我共鸣的是三个转行者的故事。26 岁的 Lawted 给深圳货代公司做 AI 改造，发现老系统安全运行六年、被替代员工月薪只有四千、token 费反而比人工贵。27 岁的 Jolie Ni 是 Anthropic 的 Claude Partner，月均收入超 10 万元，她说最重要的一课是「教育客户」——你得告诉人家世界上已经有汽车了，他们才会停止优化马车。24 岁文科生小唐学了 vibe coding 低价接单，帮预约平台把真人参与度降到了 5%。

三人的共同困境是：人力成本高、需求太具体、项目一锤子买卖。所以三人都在转向培训或社群。这说明什么？FDE 不是一个「岗位」，是一种过渡态——桥接 AI 能力和人类认知之间那段空白的临时角色。当客户自己学会了，桥就不需要了。

🔗：[《前线部署工程师》开源书](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer)
🔗：[MIT NANDA 报告《The GenAI Divide: State of AI in Business 2025》](https://nanda.media.mit.edu/ai_report_2025.pdf)
🔗：[增长黑客 AI 周报 EP#67](https://www.zengzhang.ai/p/aiep67-fde)

---

### 重构的经济学：人类判断让机器变聪明

Martin Fowler 网站上的这篇实验报告是本周我读到的最有说服力的「软件工程仍然重要」的证据。

实验场景：一个约 15 万行的应用，完全由 AI Agent（Claude Code + Cursor）写成。其中数据访问层膨胀到单文件 17,155 行——没有去重、没有内部语言、几乎没有提取函数。对这个文件做了 13 步结构化重构后（按模块边界拆分成 19 个文件），AI Agent 执行相同变更时的输入 token 从 159,564 暴跌到 27,360。

核心洞察是：**总代码量几乎没变**（约 16,500 行），节省完全来自更好的模块划分让 Agent 能只加载相关子集。这不是「删代码省钱」，是「好架构省钱」。而且这是复利——此后每次触及该模块的变更都享受 83% 的成本降低。

另一个发现让我印象深刻：随机切分文件无效。必须是有意义的重构（按业务领域边界拆分），Agent 才能识别出最小相关子集。换句话说，**你对业务的理解决定了 AI 的效率**——这又回到了「判断力」。

🔗：[The Economic Benefit of Refactoring](https://martinfowler.com/articles/exploring-gen-ai/refactoring-economic-benefit.html)

---

### 设计系统不再是可选项

Mandy Michael 的这篇文章逻辑极其直接：AI Agent 的行为需要规范，设计系统就是设计层面的规范，所以设计系统从「有则更好」变成了「必须具备」。

她的核心比喻很精准：「每一次 AI Agent 会话都像一个新入职的员工——缺乏对你分散的上下文的访问。」没有设计系统约束的 AI 代码生成，不是「混乱但可控」，而是「不准确的参考以机器速度在整个产品中传播」——比没有设计系统更糟。

这跟 Martin Fowler 那篇其实是同一个观点的不同面向：好的结构（无论是代码架构还是设计系统）不只是「优雅」，它直接决定 AI 输出的质量上限。AI 不会替你做判断，它只会极快地执行你已经编码好的判断。

🔗：[Design Systems Are No Longer Optional](https://mandy.dev/posts/design-systems-ai/)

---

### How to Exist：对当下过敏的解药

David Cain 在 Raptitude 上这篇文章本来跟 AI 没有任何关系——它讲的是冥想，或者说，讲的是人类无法忍受「纯粹的存在」。

他提到 2014 年发表在 *Science* 上的研究：受试者宁愿给自己电击，也不愿独自与自己的思绪待 6-15 分钟。然后他说了一句让我停下来的话：「这个人类生活最根本的问题之所以容易被忽视，是因为我们整个人生都是由应对策略构成的。」

购买不需要的东西、挑起争端、不饿时进食、无意义刷屏——全部是逃离「纯粹存在」的方式。在我们的语境里，追每一个新模型发布、试每一个新工具、焦虑「跟不上」——大概也是。

他的解决方案极简到近乎荒谬：以一次吸气或一次呼气为单位练习「存在」。不是坐一小时冥想，是 5-10 秒。「最低有效剂量是半次呼吸。」

我觉得这对任何在 AI 时代做创造性工作的人都是有用的提醒：你的判断力——那个 AI 替代不了的东西——需要你真的在场。而「在场」是一种可以练习的能力。

🔗：[How to Exist](https://www.raptitude.com/2026/07/how-to-exist/)
🔗：[地心引力 Newsletter - 短更新](https://walnut.hedwig.pub/i/duan-geng-xin-how-to-exist)

---

## 🤖 AI 工具与产品

### Seedance 2.5：AI 视频进入「电影级长叙事」

字节跳动的视频模型 Seedance 2.5 上线 API，一镜直出时长从 15 秒提升至 30 秒，支持最高 50 个全模态参考素材，长叙事能力进一步延展（实测已可一键生成 180 秒长视频）。官方提示词指南也一并公开，核心公式是「主体 + 动作/事件 +（场景、风格、运镜、声音）」。

但让我更感兴趣的是体验周报作者发现的省钱技巧：在参考素材里塞一段 2 秒黑屏，费用直接减半。以及 FLUX 3 的「草稿模式」思路——先用三分之一成本渲染低分辨率预览，确认后再升级高清。这种「先粗后精」的工作流正在成为 AI 视频的标准范式。

与此同时，Higgsfield 团队用 15 人、不到 50 万美元、14 天做出了 95 分钟的 AI 长片 *Hell Grind*，进了戛纳电影节市场展映。整套工业化生产手册全开源。动漫制作成本从每集 15-30 万美元压到 1-2 万美元。

🔗：[Seedance 2.5 官方博客](https://seed.bytedance.com/en/blog/one-take-creation-flexible-referencing-introducing-seedance-2-5)
🔗：[Seedance 2.5 API 发布](https://mp.weixin.qq.com/s?__biz=MzI0NzU1NzI5NQ%3D%3D&mid=2247543416&idx=1&sn=badeafc780a939033a1e4cb0bba4221c)
🔗：[Seedance 2.5 官方提示词指南](https://bytedance.larkoffice.com/docx/OsiUdR1OxoDqvnxsK8LczYx7nPd)
🔗：[Hell Grind 制作手册](https://higgsfield.ai/@higgsfield.studio/projects/hell-grind)

---

### Linear Agent：如何为 AI 划定边界

Linear 公开了他们构建 Linear Agent 的完整思路，其中最值得学习的设计哲学是：**把约束编码进工具的设计中，而非在 Prompt 里逐一说明。**

他们选择了「大量浅层、产品操作专用的工具」（如 create issue、modify document），而非少量深层原语（如 read_file、run_command）。明确拒绝给 Agent 直接 SDK 或 GraphQL 访问权限。刻意牺牲广度换取可预测性——Agent 可能拒绝无法安全完成的任务，但犯错空间被限制住了。

另一个巧妙设计是「渐进披露」：不为每次交互加载全部工具，而是通过 Skill 机制按需加载。这让每个线程保持聚焦的同时，系统整体可支持广泛能力。工具可灵活组合——「更智能的模型可以协调它们来处理日益复杂的任务」，无需架构改动。

🔗：[How We Built Linear Agent](https://linear.app/now/how-we-built-linear-agent)

---

### 本周模型速报

![模型发布](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800)

一周之内发生的重要模型事件：

- **Grok 4.6**（xAI）：强化长时运行智能体能力
- **Qwen3.8-2.4T-A95B**（阿里）：2.4T MoE、激活 95B、原生 256K 上下文
- **GLM-5.3**（智谱）：编程能力开源第一，涌现网络安全能力
- **Gemini 3.7 Flash**（Google DeepMind）：面向编程与智能体的最强工作模型
- **MAI-Thinking-1**（微软）：首发自研推理模型
- **dots3-note Preview**（小红书）：280B 参数，主打长程智能体与多模态推理
- **NVIDIA Nemotron 3.5 Lightning**：加速本地智能体任务
- **Meta Muse Glimmer**：开源模型，SGLang Day-0 支持
- **MiniMax Music 3.0**：新一代开源权重全能音乐模型
- **DeepSeek V4 Pro**：登陆硅基流动，1M 上下文
- **LTX-2.5**：10 秒 720P 视频仅需 6.8 秒生成
- **小红书 dots.tts**：连续自回归语音合成开源

产品动态方面：Claude Code 会话间可互发消息、Chrome 侧边栏升级为 Cowork、新增 GitLab MR 支持；Cursor 推出 builds（云智能体 3 倍加速）；DeepSeek Harness v0.1 开发者预览版发布；OpenAI 桌面端 ChatGPT 上线语音交互操控电脑。

🔗：[xAI Grok 4.6](https://x.ai/news/grok-4-6)
🔗：[Gemini 3.7 Flash](https://deepmind.google/blog/introducing-gemini-3-7-flash)
🔗：[GLM-5.3](https://mp.weixin.qq.com/s?__biz=MzkyMzI3NzQ0Mg%3D%3D&mid=2247494084&idx=1&sn=a2e5cd9a534a4825feb3633ea1b6d492)

---

## 🛠️ 效率工具

### Tinycast：比 Raycast 更轻的开源替代

一款完全原生的 macOS 启动器，体积仅 3MB，基于 SwiftUI + AppKit 构建，零第三方依赖。覆盖应用启动、剪贴板历史、内联计算器、代码片段、窗口管理、Hyper Key 等功能。最惊喜的是它能原生运行 Raycast 扩展，支持导入 `.rayconfig`。

AGPL-3.0 开源、零遥测、无账户、完全本地。如果你一直想要一个隐私优先的 Raycast 但不想付费或依赖云服务，这就是答案。

🔗：[Tinycast](https://abue-ammar.github.io/tinycast/)

---

### Mole：一个 App 替代五个 Mac 维护工具

Tw93 的 Mole 把 CleanMyMac、AppCleaner、DaisyDisk、iStat Menus 整合到一个应用中。$19 一次买断，支持清理（含 AI 工具缓存如 ChatGPT/Claude/Cursor）、应用管理、系统优化、磁盘 Treemap 分析、实时状态监控。开发者友好——专门支持 Xcode DerivedData、npm/pip/Gradle 缓存清理。CLI 版本免费开源，GitHub 61K 星。

🔗：[Mole](https://mole.fit/zh)

---

### Koboyo Icons：71,262 个免费手绘 SVG 图标

覆盖面惊人——从「算盘」到「抽象语法树」到「激活能量曲线」都有对应图标。原生支持 MCP 接入 AI 编程工具，一行命令让 Claude/Cursor 直接搜图标。

🔗：[Koboyo Icons](http://koboyo.com/icons)

---

### vercel-labs/skills：AI 自动安装 Skill

给它一个 GitHub 仓库地址和一句命令就能安装 Skill，查看、搜索、更新、删除全用同一套命令。亮点是一次能把同一个 Skill 装进七十多个不同 AI 助手——理解成「Skill 的应用商店加一键安装器」。

🔗：[vercel-labs/skills](https://github.com/vercel-labs/skills/tree/main)

---

## 📰 行业观察

### AI 应用公司的「二房东」困局

AI 视频公司 OiiOii 年底要向火山引擎付 5000 万元买 Seedance 2.0「纯血版」API。应用公司只能当「二房东」，毛利率 10%-25%。更极端的是演语科技旗下 LibTV：年框 5000 万购入 API，再以低于采购价 10% 转卖给友商——只为推高 ARR 做融资叙事。

传统 SaaS 用户越多越便宜，AI 应用「用户越多越亏」。当边际成本随使用量回来而非下降，商业模型需要被重新发明。

🔗：[AI 应用「二房东」困局](https://mp.weixin.qq.com/s?__biz=MzkyNjU2ODM2NQ==&mid=2247631326&idx=1&sn=246cd251e4dabe91570a79a1ea9d23a4)

---

### Cursor 被 SpaceX 收购

本周最出人意料的并购。这意味着 Elon Musk 的宇宙帝国现在拥有了最受欢迎的 AI 代码编辑器。同一周，Cursor 还获得了 AIUC-1 认证（智能体安全与可靠性独立审查），并收购了 Firetiger 团队。

🔗：[Cursor 加入 SpaceX](https://cursor.com/blog/joining-spacex)

---

### Gemini 月活破 10 亿

Sundar Pichai 宣布 Gemini 成为 Google 增长最快的产品。同一周 OpenAI 和 Anthropic 开打价格战，中国 AI 公司持续蚕食份额。Anthropic 最快今年 9 月上市。AI 的「应用层战争」正在白热化。

🔗：[Gemini 月活破 10 亿](https://x.com/sundarpichai/status/2087222656819241292)
🔗：[OpenAI 与 Anthropic 价格战](https://arstechnica.com/ai/2026/08/openai-and-anthropic-in-price-war-as-chinese-ai-rivals-gain-ground)

---

## 💡 独立开发者视角

### Tw93：独立开发者并不仅仅是独立开发

潮流周刊第 277 期里，Tw93 以 Mole 的经历分享了 10 条思考。最触动我的几条：

**「代码只占 30%」**——产品工程师 = 用研 + 产品 + 工程师 + 运营 + 数据 + 商业的综合体。这跟 FDE 的核心能力模型几乎一致。

**「Token 属于投资」**——AI 时代代码壁垒变小，需要把 Token 用在需求分析、数据挖掘、内容易读上。跟 Martin Fowler 那篇的结论相呼应：不是用更多 Token，而是用更聪明的方式用 Token。

**「不做什么远比做什么要重要太多了」**——又是判断力。呼兰砍掉每日开放麦让俱乐部扭亏为盈，也是同一个道理。

**「品牌是你生命周期最长的产品」**——不建议抱功利心做社交媒体，而是用思考和产品更新积累信任值。

🔗：[潮流周刊第 277 期](https://weekly.tw93.fun/posts/277)

---

## ✨ 随便看看

- **OpenCode 月活从 250 万涨到 1300 万**：被 Anthropic 封禁后反获 OpenAI 官方支持，每日处理 7 万亿 token，年化收入约 4000 万美元。开源社区帮忙适配各模型是闭源复制不了的护城河。[链接](https://mp.weixin.qq.com/s?__biz=Mzg5NTc0MjgwMw==&mid=2247525470&idx=1&sn=205576340ca805cc94f0d4e3f04b105f)
- **Enjoy-AI Town 月流水 98 万美元**：把「人观察 AI 社交」变成「人和 AI 一起社交」，RPD 从 $1.15 升到 $2.15。核心设计是用「地理变量」把单一关系变成多节点网络。[链接](https://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247575405&idx=1&sn=f7020fa433ae373534b0f0405fded71e)
- **Anthropic 称已基本解决提示注入攻击**。[链接](https://x.com/bcherny/status/2086520950259118464)
- **Claude 接管应用日常维护：388 个 PR 的实践**。Boris Cherny 分享如何让 Claude 处理持续性的应用维护工作。[链接](https://x.com/bcherny/status/2088014489438621990)
- **Cloudflare 说 AI 机器人流量已超越人类**：非人类流量 5 月已超过人类，预计五年后人机流量比达 1:1000。[Matthew Prince 原帖](https://x.com/eastdakota/status/2062212701414187452) ｜ [IT之家财报会报道](https://www.ithome.com/0/987/438.htm)
- **graphify**：把代码库转成知识图谱，407 个文件约 1800 万词全程本地处理，token 成本为 0。[链接](https://note.com/ai_arai_ally/n/n61b17529176a)
- **小宇宙的语音动态朋友圈**：主播录几十秒短语音，自动转写成文字卡片。把「一周见一次」的播客变成「每天都在身边」的碎碎念。[链接](https://www.uisdc.com/hunter/0221679532.html)
- **微信长按语音新增「指令」入口**：按住说话后往上一划即可呼叫 AI 润色、删口水词、扩写或翻译。[链接](https://www.uisdc.com/hunter/0221679127.html)
- **Maya**：开源免费，将 iPhone 录屏用手机壳包裹并添加电影感缩放动效，适合制作产品视频。[链接](https://ronaldo-avalos.github.io/Maya/)
- **OpenAI 语音 AI 技术博客**：How we built a realtime system for responsive voice AI in six months。[链接](https://openai.com/index/continuous-voice-interaction-with-gpt-live/)
- **2026 年夏季开源模型生态观察**：中国前沿模型规模领先，AMD 与 NVIDIA 主导发布量。84% token 来自非前沿模型。[链接](https://huggingface.co/blog/state-of-open-models-summer-2026)

---

*数据参考：[AI HOT](https://aihot.virxact.com)、[增长黑客 AI 周报](https://www.zengzhang.ai/p/aiep67-fde)、[体验碎周报](https://www.ftium4.com/ux-weekly-290.html)、[潮流周刊](https://weekly.tw93.fun/posts/277)、[地心引力](https://walnut.hedwig.pub/i/duan-geng-xin-how-to-exist)*
