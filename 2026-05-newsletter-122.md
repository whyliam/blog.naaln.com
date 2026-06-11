---
title: L122_当工具开始消亡
date: 2026/05/31 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - AI
  - Tooling
  - Product
series: Newsletter 周刊
description: Motiff关停、妙鸭解散，AI正在吞噬自己催生的工具。但真正有意思的不是谁死了，而是谁在这片废墟上长出了新东西。
---

![](https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200)

## 引言

上周刷到一条消息：国产 UI 设计工具 Motiff（妙多）宣布将于 7 月 31 日停止服务。紧接着又看到妙鸭相机团队早在去年 9 月就已解散。AI 火了三年，第一批"AI 原生工具"已经开始批量阵亡了。

这让我想起去年和一个设计师朋友的对话。他当时兴奋地跟我说 Motiff 比 Figma 好用，AI 辅助功能更适合国内团队。我说那挺好。结果不到一年，工具没了。

—

有意思的是，这件事的对面，是另一批人正在用完全不同的姿态活得很好。Tw93 的 Mole 拿到了 54k 个 star，一个人写的终端清理工具干掉了一堆付费软件。范冰的增长黑客周报记录着一个又一个用 AI 跑出 37 倍流量增长的案例。红杉在 AI Ascent 上说了句大实话：追逐模型本身没有护城河，真正有价值的是产品化和组织渗透。

换句话说，工具会死，但造工具的手艺不会。这一期我们聊聊：在 AI 加速淘汰一切的时代，什么东西在真正生长。

---

## 📚 深度阅读

### 你不知道的 GEO：AI 可见性的原理、实践与取舍

Tw93 写了一篇关于 GEO（Generative Engine Optimization，生成式引擎优化）的文章，起因是他发现自己的开源项目经常被 AI 系统主动推荐给用户。他开始思考：当越来越多人通过 ChatGPT、Perplexity 而不是 Google 来找信息时，"被 AI 看见"就变成了一种新的生存能力。

这不是 SEO 的翻版。GEO 的核心逻辑不是堆关键词骗爬虫，而是让你的内容结构化到 AI 能理解、能引用、能推荐。具体操作包括：配置 `robots.txt` 允许 AI 爬虫、实现 `llms.txt`（一个帮助 LLM 理解你网站结构的新标准）、用搜索控制台监控 AI 来源流量。

我觉得这篇文章最有价值的一个判断是：不要为 AI 创造内容，而是帮助 AI 理解你已有的好内容。这和整个互联网从 SEO 时代走向"内容垃圾场"的教训一脉相承——一旦你开始为算法而不是为人写东西，你就输了。

🔗：[你不知道的 GEO](https://tw93.fun/2026-05-01/ai-visibility.html)

---

### 红杉 2026 AI Ascent：护城河不在模型里

红杉今年 AI Ascent 的总结里有几个让我记住的观点。

第一个是他们给 AGI 的商业化定义：如果一个系统能被派去执行一项工作，在过程中自主恢复错误，并坚持到完成，它就"功能性地"达到了 AGI。不是图灵测试，不是意识觉醒，而是"能不能完成一个完整的 job"。这个定义很务实。

第二个是关于护城河的判断：模型能力越来越 commodity，真正的壁垒在于 Customer Wrapping——他们叫 Affordance。翻译成人话就是：你能不能把模型能力包装成用户真正能用起来的产品。这解释了为什么 Mole 一个终端工具能拿 54k star，而 Motiff 一个有融资的完整产品却要关停。

第三个，也是最让人不安的：他们预测在一代人之内，地球上 99% 的认知工作将由机器完成。红杉的原话是"这已经不是技术革命，而是文明的重写"。但最后他们还是拉回来了：AI can do the work, only human connection can give you a reason to care.

🔗：[红杉 AI Ascent 总结](https://weekly.tw93.fun/posts/268)（via Tw93 周刊引用）

---

### The Future Favors the Curious

微软 AI 设计负责人 Mike Davidson 写了一篇文章，核心观点是：当前的 AI 变革和 1995 年的互联网爆发本质上是同一件事。当年那些好奇地去学 HTML、去做个人主页的人，后来都成了行业里最早吃到红利的人。现在也一样。

他给了几条很实在的建议：不要报昂贵的 AI 课程，用 Recraft、Lovable 这些工具做个人项目就够了；简历上别造假 AI 经验，面试官一眼就能看出来；作品集必须展示思考深度，评审者会在 30 秒内做出判断；人脉比海投有用得多——"cold applications are like lottery tickets"。

我觉得最有价值的一句话是他的总结：你不需要精通一切，但你需要敢用。这和红杉说的"模型是 commodity"形成了一个有趣的呼应——工具不是壁垒，使用工具的习惯和判断力才是。

🔗：[The Future Favors the Curious](https://mikeindustries.com/blog/archive/2025/03/the-future-favors-the-curious)

---

## 🤖 AI 工具

### Waza：把工程纪律写进 AI 的肌肉记忆

Waza（技）是 Tw93 做的一套 AI 编码技能系统，名字来自日本武术中"反复练习直到成为本能"的概念。它本质上是一组结构化的 slash command，让 Claude Code 和 Codex 这样的 AI 编码助手能按照严格的工程规范工作。

八个核心技能：`/think`（做决定前必须完整规划）、`/design`（基于截图迭代 UI）、`/check`（merge 前的分级代码审查）、`/hunt`（系统化 debug，必须确认根因才能动代码）、`/write`（改写文案）、`/learn`（六阶段研究流程）、`/read`（读 URL/PDF）、`/health`（代码健康检查）。

有几条规则让我印象深刻：AI 在能用一句话说清根因之前，不允许碰代码；计划中不允许出现 TBD、TODO、"类似第 N 步"这种模糊表达；生成的 UI 如果出现 emoji + 蓝紫渐变就直接判死刑。

这里面体现的哲学是"克制优于臃肿"——清晰的约束和目标，比冗长的指令更能让模型输出好结果。某种程度上这也是一种 GEO 思维：不是给 AI 更多信息，而是给它更好的结构。

🔗：[Waza on GitHub](https://github.com/tw93/Waza)

---

### 数字员工的"养虾"时代

增长黑客周报 EP#57 里提到一个叫 OpenClaw 的开源 AI Agent 框架，允许 Agent 以 root 权限接管计算机，7×24 自主执行任务。有个矿业公司的数据分析师用它训练了 5 个"数字员工"，然后把它们当产品卖了。这个项目的 GitHub star 在 60 天内超过了 React。

它的商业模式很有意思：设置成本极低（开源免费），但运行需要持续消耗 token——像极了打印机和墨盒的关系。社区把这种玩法叫"养虾"：养出来的虾（数字员工）能一直干活，不用休息，不会抱怨，"没有人性"反而是卖点。

我觉得这个现象最值得关注的不是技术本身，而是它代表了"一人公司"的极端形态。范冰在 EP#58 里还记录了更多案例：有人用 Codex 搭了一个交易系统，有人用 AI 开咖啡馆和二手店，有人跑出了 37 倍的流量增长。新华社甚至给"一人公司"下了定义：个人利用 AI 工具独立完成从产品设计/开发到市场部署的全链条。

🔗：[增长黑客AI周报 EP#57](https://www.zengzhang.ai/p/aiep57-ai-anthropic) · [EP#58](https://www.zengzhang.ai/p/aiep58-codexai37)

---

## 🛠️ 效率工具

### Lightpanda：给 AI Agent 造的浏览器

一个用 Zig 从零写的无头浏览器，专门为 AI Agent 和自动化场景设计。不是在 Chromium 上改造，是从头造。号称内存占用减少 16 倍，速度提升 9 倍。

为什么这件事值得关注？因为现在所有 AI Agent 要上网，都得扛着一个完整的 Chrome 内核跑。Playwright、Puppeteer 底层都是 Chromium，为了渲染一个页面要加载整套渲染引擎。但 Agent 大多数时候只需要读 DOM 和执行 JS，不需要画像素。Lightpanda 就是砍掉了"画像素"的部分。

这对规模化 Agent 工作流意义很大——你可以用相同的资源并行跑十几倍数量的浏览器实例。

🔗：[Lightpanda on GitHub](https://github.com/lightpanda-io/browser)

---

### Mise：一个 toml 管一切

做开发的人一定经历过这种痛苦：一个项目要 nvm 管 Node 版本，pyenv 管 Python，direnv 管环境变量，Makefile 跑构建脚本。Mise 把这些全合进了一个 `mise.toml`。

用 Rust 写的，速度快，支持几百种开发工具的版本管理，同时处理环境变量和任务运行。一个文件搞定整个项目的开发环境配置。新人 clone 完仓库，跑一次 `mise install` 就能开始干活。

这种"把碎片化工具链合并为单一入口"的思路，其实和 Mole 对 macOS 系统工具做的事一样——不是发明新功能，而是消灭不必要的复杂度。

🔗：[Mise on GitHub](https://github.com/jdx/mise)

---

### Mole：一个人替代一堆付费软件

Tw93 的 Mole 已经拿到 54k star 了，可能是近期增长最快的 macOS 工具。功能覆盖系统清理（替代 CleanMyMac）、应用卸载（替代 AppCleaner）、磁盘分析（替代 DaisyDisk）、系统监控（替代 iStat Menus）。全部终端化，一个二进制文件搞定。

最近推出了桌面版 Mole Client，菜单栏常驻，用行星主题做 UI（地球代表清理，火星代表卸载），基于真实轨道力学。早鸟价 $9。

设计哲学很明确："AI 生成的赛博垃圾已经够多了，我要做点让人舒服的东西。"这大概也解释了为什么一个人做的工具能比一个团队做的活得久——不是功能的问题，是品味的问题。

🔗：[Mole on GitHub](https://github.com/tw93/Mole) · [Mole 官网](https://mole.fit/)

---

### Paico：一句话需求直出 UI

一个 AI 设计 Agent，输入自然语言描述，输出可用的响应式 UI 代码。支持 React、HTML，兼容 Shadcn UI、Ant Design、MUI 组件库。直接生成能丢进现有项目的代码。

和 Motiff 关停放在一起看很有意思——传统的"AI 辅助设计工具"可能是个伪命题，真正有用的也许是直接跳过设计稿，从需求到代码。

🔗：[Paico](https://paico.cn/)

---

## ✨ 随便看看

- **Kami**：Tw93 的 AI 排版系统，支持 SVG 图表、多语言字体、PDF 导出，还能生成极简风格的产品 Landing Page。 [GitHub](https://github.com/tw93/Kami)
- **Kaku v0.10**：终端 Agent 助手，新增智能上下文读取、窗口快照恢复、Lua 字节码编译加速冷启动。 [GitHub](https://github.com/tw93/kaku)
- **Codex++**：OpenAI Codex 桌面客户端插件，补全了原生缺失的功能。 [GitHub](https://github.com/BigPizzaV3/CodexPlusPlus)
- **Updream**：B站的 AI 视频创作平台，文字一键转电影分镜。 [官网](https://www.updream.cn/)
- **Ducat**：手动记账 + 订阅管理，自然语言输入自动分类。 [官网](https://ducat.money/)
- **Vibe Coding Glossary**：给非工程师的术语指南，学会正确的词汇来指挥 AI 编码工具。 [官网](https://vibecoding-glossary.pages.dev/)
- **Hue**：从 URL 和截图自动提取设计系统（配色、字体、组件）。 [官网](https://hueapp.io/)
- **AIHOT**：AI 新闻策展平台，过滤噪音只推重要的。 [官网](https://aihot.virxact.com/)
