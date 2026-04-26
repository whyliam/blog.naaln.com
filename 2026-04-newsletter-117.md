---
layout: post
title: L117_当能力开始外溢
date: 2026/04/18 12:00:00
categories:
  - 资讯
tags:
  - NewsLetter
  - AI应用
  - AI-distillation
  - LLM-Wiki
  - Vibe-Coding
description: Karpathy 提出了 LLM Wiki，让 AI 像维护代码库一样持续编写知识。从蒸馏隐性知识的两百年困境到 20 人团队估值 200 亿，AI 能力正在外溢，所有边界都在重新划定。
---
![](https://pics.naaln.com/2026-04-24-7971f4af2b5772cceb088f69a9c20c2c.webp-basicBlog)

当模型能力持续外溢，所有的边界都在重新划定。

过去用「功能」定义产品，用「岗位」定义人，用「部门」定义协作。这些边界建立在能力稀缺之上：谁能做什么，被工具限制着。

现在模型开始吞噬这些限制。

一个产品不再只是功能的集合，而是可以不断延展能力的「接口」。一个岗位不再由固定职责构成，而是由你能调动多少能力来决定。组织也在变得模糊——很多过去需要跨部门协调的事，一个人加一套工具链就能完成。

变化不是效率提升这么简单。

更本质的变化是：定义权在转移。

以前是「系统定义你能做什么」，现在变成「你定义系统要做什么」。

这也带来一个问题：如果没有外部的边界约束，我们该怎么给自己设定边界？

很多人开始感到失焦——不是因为没事做，而是因为可以做的事情太多了。没有清晰的路径，没有明确的评价标准，甚至连「什么是做好一件事」，都变得不那么确定。

所以会出现一种微妙的状态：能力在变强，行动在变少。

你会刷短剧、刷信息流、看各种新工具新趋势，但迟迟没有进入稳定的生产状态。不是因为懒，而是边界消失后，大脑更难做选择。

换一个角度看，这一轮变化不是「谁更会用 AI」，而是：当模型能力持续外溢，所有的边界都在重新划定。

---

## 📚 深度阅读

### Karpathy 的 LLM Wiki：让知识自己长出来

Karpathy 的 LLM Wiki 提案是这两周技术圈讨论最热的话题之一。他提出了一个三层架构：Raw Sources（原始资料，不可变）、The Wiki（LLM 维护的知识层）、The Schema（规范文件）。

核心理念很简单：与其每次提问都让 AI 从零翻资料（RAG 模式），不如让 AI 像维护代码库一样，持续编写和更新一个永久性的 Wiki。每加入新内容，AI 自动更新相关页面——不只是添加一条记录，而是更新实体页、修正主题摘要、标注新旧数据冲突、强化或挑战已有的综合判断。一份新资料可能触及 10-15 个 Wiki 页面。

他引用了 Vannevar Bush 1945 年的 Memex 概念——一个私人策划的知识库，文档间有关联性路径。Bush 当年解决不了的问题是「谁来做维护」。80 年后，LLM 给出了答案。

有位博主在此基础上做了有意思的实践：用 5 年的 Flomo 笔记训练 AI 理解自己的判断标准，作为系统的「价值观底层」；用 Sage Wiki 实现新内容的自动化编译与整合；搭建双轨框架同时服务写作和创业决策。系统在持续「生长」——每篇文章都在训练它更懂你的风格，每次问答都在沉淀成可复用资产。

当知识的维护成本趋近于零，「第二大脑」这个概念可能终于从理想变成了现实。

🔗：[Karpathy LLM Wiki Gist](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)

---

### 如何蒸馏任何人：一部两百年的未竟之书

「蒸馏」这个词最近在 AI 圈被用烂了——蒸馏同事、蒸馏大佬、蒸馏各路神仙妖怪。Jeremy 那篇文章把视角拉到了两百年前，很有意思。

Jacquard 织机用打孔卡编码了纺织工的手部动作，效率大幅提升但引发了工人暴动，成为现代计算机的基础。它只触及了「手」，没触及「脑」。1970 年代的 MYCIN 专家系统用 600 条规则编码了感染科医生的诊断知识，准确率甚至超过了部分专家——但最终失败了，因为无法获取「隐性知识」，也就是 Michael Polanyi 说的「我们知道的远比我们能说出来的多」。

现在的 AI 人格克隆热潮是这个古老困境的最新一章。开源项目 nuwa-skill（女娲 Skill）的目标很野：蒸馏任何人的思维方式——心智模型、决策启发式、表达 DNA。但问题还是那个：你怎么蒸馏一个人「说不出来」的东西？

这篇文章没给出答案，但提供了一个历史视角：每一次「蒸馏」技术的跃进都带来了社会变革，也都撞上了隐性知识的高墙。我们这次能翻过去吗？不确定。但至少终于有了翻墙的工具。

🔗：[nuwa-skill (GitHub)](https://github.com/alchaincyf/nuwa-skill)

---

### 不到 20 人的团队，估值 200 亿美元

这篇文章讲了硅谷人才版图的 K 型曲线：Big Tech 和 Big Labs 因官僚化失血，Safe Superintelligence、Prime Intellect 等研究型初创成为新的「重力中心」。

这类公司反商业常规：极度人才密度、恐怖人均算力、极简组织架构——不追求短期商业化，而是赌突破后的无限价值。20 人挑战数千人团队的秘密：押注后 Transformer 时代的线性复杂度架构；从预测下一个 Token 转向构建世界模型；用合成数据与分布式训练实现算力民主化。

附文提到的 Obsidian 公司数据同样惊人：7 个全职员工加一只猫，月活超 150 万，年经常性收入约 2500 万美元。永远不超 10-12 人、永远不接受 VC、永远不收集用户数据——这种组织哲学在 AI 杠杆的加持下，越来越可行。

Qbee 的故事也印证了这一点：一个最初在 Replit 上用 vibe code 搭的简陋客户门户，接入真实数据后远超预期——能管理超过 100 个赞助商，客户管理人力工时减少 70%。构建成本仅数千美元，每月 token 成本不到 200 美元。

强大的 AI 代理往往从解决一个具体小痛点起步，通过迭代和数据反馈自然生长出复杂能力。行动优先于规划。

🔗：[不到 20 人的团队，凭什么估值 200 亿美元？](https://www.huxiu.com/article/4849039.html)

---

## 🤖 AI 工具

### Hermes Agent：自己会长大的助手

很多人突然从小龙虾（OpenClaw）转投 Hermes Agent。一句话总结区别：小龙虾是「你来指挥的系统」，Hermes 是「自己会长大的助手」。

Hermes 由 Nous Research 开发，核心卖点是「闭环学习」——Agent 自主策划记忆、定期自我提醒持久化知识、复杂任务后自动创建 Skills、Skills 在使用中自我改进。预装 40+ 工具，支持 Telegram、Discord、Slack、WhatsApp 等六大消息平台，还有六种终端后端（本地、Docker、SSH、Daytona、Singularity、Modal）。

从 OpenClaw 迁移只需一行命令 `hermes claw migrate`，人格文件、记忆、Skills、API 密钥全部导入。它的定位很清楚：不是绑定笔记本电脑的编程副驾驶，而是运行在服务器上、能记忆所学、运行越久越强大的自主智能体。你可以在 Telegram 上远程对话，Agent 在云端 VM 上持续工作。

工具竞争的胜负手正从功能堆砌转向用户体验与生态整合。Hermes 通过降低技术门槛和平滑迁移路径，正在争夺早期用户与开发者。

🔗：[Hermes Agent (GitHub)](https://github.com/nousresearch/hermes-agent)

---

### tradingview-mcp：把 TradingView 接进 Claude

开源项目 tradingview-mcp 通过 MCP 协议将 TradingView 实时数据与技术指标接入 Claude。架构很清晰：Claude Code 通过 MCP Server（stdio）连接 CDP，再连接本地运行的 TradingView Desktop（Electron 应用）。

这不是交易机器人——它不执行真实交易。它是一个接口层，让 LLM 能「读懂」交易应用。支持 Pine Script 开发（编写、注入、编译、调试）、图表导航（切换品种和时间周期）、视觉分析（读取图表上的指标值）、绘图标注、警报管理、回放练习，以及截图供 AI 视觉分析。78 个 MCP 工具，所有数据处理均在本地完成。

通过 MCP 协议将专业领域工具接入 LLM，是 Agent 能力扩展的关键路径。当 Claude 能直接读取你的 K 线图、理解你的指标设置、帮你回测策略——「看盘的逻辑」确实全变了。

🔗：[tradingview-mcp (GitHub)](https://github.com/tradesdontlie/tradingview-mcp)

---

## 🛠️ 效率工具

### Glass：浏览器 + 编辑器 + 终端，三合一

Glass 把浏览器、代码编辑器和终端打包在一个原生 Mac 应用里。底层编辑器用的是 Zed。核心价值很简单：消除开发过程中窗口切换的摩擦。内置浏览器可以预览项目和查阅文档，编辑器保持代码和预览的上下文连贯，终端嵌入不用跳出去执行命令。已开源。

🔗：[Glass](https://glassapp.dev/)

---

### Awesome Design.md：设计系统的 AI 说明书

getdesign.md 做了一件聪明的事：把知名品牌的设计系统（Apple、Stripe、Lamborghini、SpaceX 等）的视觉风格打包成 AI 能理解的 Markdown 说明书。已收录 69 份设计文件，按 AI 平台、开发者工具、金融科技、汽车等 9 个领域分类。

使用场景很直接：找到想要的风格，把对应的 .md 文件丢给 Cursor 或 Claude Code，AI 就能生成同款 UI。省掉了从零搭建设计系统的时间。

🔗：[getdesign.md](https://getdesign.md/)

---

## 🎨 设计视角

### Sunny Mode：让界面呼吸

除了 Dark Mode 和 Light Mode，现在出现了一种日光模式（Sunny Mode）。它模拟自然光线透过树叶或百叶窗在地板上留下的动态投影，打破传统 UI 的扁平感，让数字界面有物理世界的「呼吸感」。还延伸出 Rainy Mode、Moonlight Mode 等变种。

当 AI 让「功能」越来越容易实现，「感受」反而成了差异化的核心。

---

### 设计师的 Vibe Coding 工作流

vibecodingfang.netlify.app 上有一份指南，教设计师如何指挥 AI 写前端 UI。核心理念是「设计师不需要学会写代码，而是学会指挥 AI 写代码」。

工作流分三阶段：准备（环境配置 + CLAUDE.md 项目上下文）、开发（AI 生成 PRD + Mock 数据 + 静态 UI）、交付（自检 + 推送 + 文档）。黄金原则：UI 开发阶段只用 Mock 数据、不碰业务逻辑。

这不是理论性文章——从 Node.js 安装开始手把手教，适合想尝试 Vibe Coding 的设计师。

🔗：[设计师的 Vibe Coding 完整工作流](https://vibecodingfang.netlify.app/)

---

## ✨ 随便看看

- **SBTI 人格测试**：本周从 B 站出圈的搞怪测试，「MBTI 已过时，SBTI 来了」，用犀利词汇给你贴标签。[试试](https://sbti.unun.dev/)
- **飞搜**：飞书云文档搜索引擎，把全网公开的飞书文档做索引，按知识库维度聚合展示。[查看](https://feisou.app/)
- **Artificial Analysis**：主流大模型横评仪表盘，按智力、速度、价格、开源程度综合打分。[查看](https://artificialanalysis.ai/)
- **Cookey**：让 AI Agent 登录需要认证的网站——终端发起请求，手机扫 QR，会话加密返回。[查看](https://cookey.sh/)
- **MemPalace**：生化危机女主 Milla Jovovich 开发的本地 AI 记忆系统，GitHub 2 万星，设计灵感源于古罗马记忆宫殿术。[GitHub](https://github.com/mempalace/mempalace)
- **乐刻的「已改善」勋章**：在评价区把差评配上改善措施和时间戳。最怕的不是问题，而是问题没回响。[详情](https://www.uisdc.com/hunter/0221665795.html)
- **badclaude**：桌面上多一根鞭子，抽一下 Claude 它就开始干活。荒诞，但减压。[详情](https://www.uisdc.com/hunter/0221665835.html)
- **游戏 AI 工具大筛选**：Keywords Studios 测了 500 多款游戏 AI 工具，仅 6 款具备实用价值。大部分是「看起来很酷、实战很废」。[报道](https://www.3dmgame.com/news/202604/3941787.html)
- **Seedance 2.0 支持真人参考了**：上传人脸做合规校验，就能生成视频。[教程](https://mp.weixin.qq.com/s/Seci-Yz-8Dxjs1RHG2XgiA)
- **大厂「牛马」被迫用 AI**：AI 工具从效率玩具演变为隐性强制绩效指标，形式主义消耗开始出现。[虎嗅](https://www.huxiu.com/article/4848066.html)
- **广密的大模型季报第 9 集**：Coding 已从开发工具演变为 AGI 的核心加速器，Token Usage 正在取代 DAU 成为评价模型公司的核心指标。[小宇宙](https://www.xiaoyuzhoufm.com/episode/69de68cfb977fb2c47f1ee14)
