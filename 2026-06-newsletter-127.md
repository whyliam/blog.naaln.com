---
title: L127_Loop Engineering与AI自主循环
date: 2026/06/26 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - Agent
  - AICoding
  - FutureOfWork
description: 从 Loop Engineering 到微信 AI 专属卡，当 AI 从等待指令变成主动循环，我们的角色从写代码的人变成了设计规则、验证结果的人。本期深度拆解这一范式跳跃。
created: 2026-06-26 13:01:11
updated: 2026-06-26 18:17:23
series: Newsletter 周刊
---
![](https://pics.naaln.com/2026-06-26-a083f7d336b53888054a0ac91c3b4008.webp-basicBlog)

上周有个瞬间让我停下来想了很久。我在用 Claude Code 写一个数据处理脚本，设置了一个 `/loop` 让它每十分钟检查一次 CI 状态。当我去倒咖啡回来，发现它已经修完了三个测试失败，开了 PR，还在状态文件里记下了「第四个失败看起来是架构问题，需要人工确认」。

这不是什么科幻场景。这是 2026 年 6 月一个普通工作日的早晨。

我意识到自己的角色发生了微妙但根本的变化：我不再是那个「写代码的人」，甚至不再是那个「跟 AI 对话的人」。我变成了一个设计规则、验证结果、在必要时介入的人。Google Chrome 团队的 Addy Osmani 给这个东西起了个名字——Loop Engineering。

—

这种转变比听起来更深刻。想想看，从 Prompt Engineering 到 Context Engineering 到 Skill Engineering，我们一路在优化的是「怎么跟 AI 说话」。而 Loop Engineering 根本不再关心说话这件事了。它关心的是：什么条件触发执行？怎么验证结果？失败了怎么重试？什么时候该把人拉进来？

Claude Code 负责人 Boris Cherny 说了一句让我很触动的话：「我已经不再手动提示 Claude 了。我有循环在运行，它们替我提示 Claude 并决定该做什么。」

与此同时，瑞幸咖啡上线了 CLI 让 Agent 帮你点咖啡，微信支付推出了 AI 专属卡——给 AI 发零花钱的独立资金账户。当 AI 不仅能替你工作，还能替你消费的时候，整个商业逻辑都在被重写。品牌不主动嵌入 Agent 的工具箱，就会被 Agent 忽略。这是增长黑客 AI 周报提出的一个判断，我觉得很准确。

这一期，我想沿着这条线展开：当 AI 从「等待指令」变成「主动循环」，我们应该怎么理解自己的位置？

---

## 📚 深度阅读

### Loop Engineering：从写提示词到设计闭环系统

**核心洞察：** Loop Engineering 不是 Prompt Engineering 的升级版，而是一次范式跳跃——你不再是对话中的那个人，你是设计对话规则的那个人。

Addy Osmani 在 6 月初正式提出这个概念。他把一个完整的 Loop 分成六层：触发机制、任务策略、执行、验证、持久化状态、停止/重试/升级。听起来很工程化，但本质上这是在回答一个管理学问题：怎么让一个「员工」能独立运转？

最让我警醒的是风险部分。2026 年 SlopCodeBench 的研究显示，89.8% 的 Agent 运行轨迹出现代码冗余上升，Agent 代码平均比人类冗长 2.2 倍。Loop 跑得越快，你不理解的代码就越多。这不是效率问题，这是「理解力债务」——当某天 Loop 出错，你能不能看懂它干了什么？

实际操作上，Claude Code 已经原生支持 `/loop`（时间驱动）和 `/goal`（条件驱动），搭配 Hooks 事件系统可以实现非常精细的自动化。本周 AI HOT 也报道了 Claude Code 6 个实用 Hook 玩法，比如每小时久坐提醒、上下文预压缩时自动生成摘要卡片——这些都是 Loop 思维的具体体现。

我的判断：未来有竞争力的开发者不是写代码最快的人，而是最擅长设计验证机制和治理规则的人。

🔗：[Loop Engineering 原文 - Addy Osmani](https://addyosmani.com/blog/loop-engineering/)

---

### OpenAI 内部报告：Codex 如何改变工作

**核心洞察：** 在 OpenAI 内部，Codex 已经占据 99.8% 的输出 token，从法务到招聘的非技术岗位也在用。这不是「程序员工具」了。

几个数据让我很震惊：80.6% 的个体用户曾发起预计等效人类工作时间超 30 分钟的请求，25.6% 超 8 小时。Legal、Finance、Recruiting 在 2026 年 4 月前后跨过了 Codex 使用过半的拐点。非开发者用户增长了 137 倍。

结合 TechCrunch 的另一篇报道——SignalFire 追踪数据显示工程岗是 2025 年最具韧性的岗位，工程师招聘仅下降 11%，而且占比反而从 46% 升到了 55%——这说明什么？AI 让工程师更忙了，不是更闲了。这是杰文斯悖论的完美案例。

🔗：[How agents are transforming work - OpenAI](https://openai.com/index/how-agents-are-transforming-work)

---

## 🤖 AI 工具与产品

### Cowart：给 Codex 装一块无限画布

想象一下：你在一块白板上画个框，跟 Codex 说「这里放一张产品架构图」，它就生成了。你在图上用红笔圈出不满意的部分，标注「这个箭头方向反了」，它读取标注截图，生成修正版放在旁边。

Cowart 是基于 tldraw 构建的 Codex 本地插件，本质上是一个可视化的 Agent 交互界面。它做的事情很简单但很关键：把 Agent 的输入输出从纯文本扩展到了空间画布。数据存在本地项目目录，支持 MCP 工具集读取画布状态。

这代表了一个趋势：AI 工具正在从「聊天框」形态向「空间化」形态演进。当你的思考本身是空间性的（设计、架构、brainstorm），纯文本对话就是一种降维。

🔗：[Cowart GitHub](https://github.com/zhongerxin/cowart)

---

### index.how/to/articulate：设计师专业术语词典，也是 AI 的训练集

这个项目的精妙之处在于它的双重身份：对人类来说是设计术语速查手册（188 个术语，覆盖排版、布局、色彩、动效、信息架构），对 AI 来说是结构化的设计知识源。

通过 `npx skills add` 安装到 Claude Code 或 Codex 后，AI 在生成 UI 时就能正确推理「分组、层级、图底关系」等概念。这解决了一个真实痛点：AI 写的代码能跑，但生成的界面经常缺乏设计上的合理性。

更深层的启示：未来 AI 编码助手的差异化不在模型能力，而在 Skill 生态。谁能提供最好的领域知识包，谁就能让 Agent 产出最专业的结果。

🔗：[index.how/to/articulate](https://index.how/to/articulate)

---

## 🛠️ 效率与行业

### 美国政府要求 OpenAI 暂缓 GPT-5.6 广泛发布

The Information 报道，美国政府因安全顾虑要求 OpenAI 将 GPT-5.6 改为受控预览版发布，由政府逐客户审批准入。核心担忧是模型在自动化高技能网络攻防上的能力。这是非常罕见的政府直接干预模型发布的案例。

🔗：[Reuters 报道](https://x.com/rohanpaul_ai/status/2070252433109049466)

### Gemini 3.5 Flash 内置 Computer Use

Google 把 Computer Use 从独立模型变成了 Gemini 3.5 Flash 的内置工具。开发者可以一个模型同时调用搜索、地图、函数调用和电脑操控。安全方面加了两层防护：敏感操作需确认，检测到 prompt 注入自动停止。

🔗：[Google DeepMind Blog](https://deepmind.google/blog/introducing-computer-use-in-gemini-3-5-flash)

### Notion 通过 Cursor SDK 嵌入编码 Agent

Notion 用 Cursor SDK 在数周内把编码 Agent 嵌进产品。用户可以在文档中 @Cursor，在讨论串中提及或向数据库指派任务，Agent 端到端完成规划、构建、测试、创建 PR。这是「Agent 嵌入既有工作流」的优秀案例——不是要你换工具，是让工具自己长出智能。

🔗：[Cursor Blog - Notion Case](https://cursor.com/blog/notion)

### Midjourney V8.2 预览 + 草稿模式升级

加 `--preview` 参数可提前体验 V8.2 美学，草稿模式搭配 `--sref random` 可一次生成 24 张不同风格图片。探索风格空间的速度比之前快 24 倍，价格还只有标准生成的一半。

🔗：[Midjourney Updates](https://updates.midjourney.com/random-styles-in-draft-mode)

### IBM 首款亚纳米级芯片：指甲盖大小装 1000 亿晶体管

0.7nm 节点 + 纳米堆叠架构，比 2nm 性能提升 50%、能效提升 70%。预计 5 年内量产。AI 工作负载的算力天花板又被推高了一截。

🔗：[IBM Newsroom](https://newsroom.ibm.com/2026-06-25-ibm-debuts-worlds-first-sub-1-nanometer-chip-technology)

---

## ✨ 随便看看

- **Ornith-1.0 开源模型家族** — 专注 Agentic Coding，覆盖 9B-397B，SWE-Bench Verified 82.4，MIT 开源 [链接](https://x.com/berryxia/status/2070167806700908957)
- **Runway Agent 2.0** — 帮营销人一对话就生成广告变体和本地化内容 [链接](https://runwayml.com/news/introducing-agent-2)
- **OpenRouter MCP 服务器** — 编辑器里直接比较不同模型的响应/成本/延迟 [链接](https://openrouter.ai/blog/announcements/openrouter-mcp-server)
- **华为鸿蒙「指哪打哪」** — 手机指向平板精确位置就能传照片，五步操作变一步 [来源：体验碎周报]
- **支付宝 AI 首页** — 在 AI-first 激进设计和保守设计之间找到的平衡点 [来源：体验碎周报]
- **FckSignups** — 66 个无需注册、无追踪的开源浏览器工具合集 [链接](https://fcksignups.com/)
- **Lettera** — Bear 团队新作，纯原生 macOS Markdown 编辑器，免费公测中 [链接](https://lettera.md/)
- **专注冰箱** — 用收集冰箱贴盲盒驱动专注的番茄钟，以收集多巴胺对抗刷手机多巴胺
- **微信首页 AI 入口** —「小微」基于微信自有大模型，可总结群聊、操作小程序、生成临时工具
- **AI 经济年化收入超 1750 亿美元** — 新增 10 亿收入从需要 180 天缩短到不足 2 天 [来源：@exponentialview]
