---
title: L136_管道已通
date: 2026/08/22 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - Agent
  - Infrastructure
  - AINative
description: Stripe 收购 OpenRouter、Cursor 发布 Origin 代码托管、Claude Computer Use 正式版——同一周内，AI Agent 独立运转所需的支付、住所、眼睛和手全部到位。这不再是「AI 能不能做」的问题，而是「谁控制管道」的问题。
created: 2026-08-23 10:00:57
updated: 2026-08-23 11:28:55
series: Newsletter 周刊
---
![](https://pics.naaln.com/2026-08-23-5acf7e670f658f4915a88327aafcc1f8.webp-basicBlog)

上周二，OpenRouter 发了一篇短短几百字的公告：「We're joining Stripe.」没有发布会，没有长推文连环轰炸，只有一句话——「很少有公司让我们愿意卖掉自己」。

这笔交易据报道价值 100 亿美元。两个月前 OpenRouter 的估值才 13 亿。但让我愣住的不是数字本身，而是 Decoding Discontinuity 那篇分析里的一句话：**「Agents hire minds the way humans hire freelancers.」**

Agent 雇佣模型，就像人类雇佣自由职业者。

想想这意味着什么：一个自主 Agent 需要完成任务时，它向 OpenRouter 发起请求——「我需要一个擅长代码的头脑，预算每百万 token 不超过 2 美元，延迟 200ms 以内，数据不出欧盟。」OpenRouter 在 400 多个模型里做匹配，挑出最合适的那个，然后 Stripe 负责结算。整个过程不到一秒，没有任何人类参与。

这就是所谓的「机器经济」——不是科幻设定，而是正在铺设的基础设施。

—

让我觉得这一周特别的是，基础设施的各个环节几乎同时到位了。同一周里：Stripe 买下了「模型市场」，Cursor 发布了自己的代码托管平台 Origin，Anthropic 把 Computer Use、Skills API 和 Files API 同时转为正式版——Agent 第一次同时拥有了「眼睛」（看到界面）、「手」（操作软件）、「记忆」（文件系统）和「流程知识」（Skills）。

上期聊的是「笨功夫」——在 AI 时代，人类的价值在于那些不能外包给模型的较真。这一期想聊的是硬币的另一面：当管道全部接通，当 Agent 真的能独立运转时，我们在看的已经不是「AI 能不能做」的问题，而是「谁控制管道」的问题。

—

韵锦（yunjin.zj）的 AI Weekly 里引了一个漂亮的框架来解释 Stripe 为什么出手：**「当内层能力商品化时，稀缺性向外层转移。」** 模型本身在变便宜（DeepSeek V4 Flash 的价格已经把所有竞争者打到不想说话），真正稀缺的是两个「时刻」——选择时刻（用哪个模型？）和结算时刻（谁来收钱？）。OpenRouter 控制前者，Stripe 控制后者。合在一起，就是机器经济的 Visa 卡。

这不是一笔普通的收购。这是在为一个还没完全出现的经济体修建支付系统——就像 1998 年的 PayPal 看到了电子商务会需要在线支付，只不过这次买单的不是人类，是 Agent。

🔗：[OpenRouter Is Joining Stripe](https://openrouter.ai/blog/announcements/openrouter-is-joining-stripe)  
🔗：[Stripe's $10B OpenRouter Bet — Decoding Discontinuity](https://www.decodingdiscontinuity.com/p/stripes-10-billion-openrouter-bet-ai-agent-economy)

---

## 📚 深度阅读

### Anthropic 内部：80% 的代码由 Claude 编写 —— AI-Native SDLC Playbook

Anthropic 的 VP CISO Jason Clinton 在七月底发了一份内部实践报告，藏在一个不太起眼的博客标题下面。但这份报告里有一个数据让我反复确认了三遍：**Anthropic 内部合并的代码中，约 80% 由 Claude 编写。** 超过 50% 的代码合并使用他们内部的「Claude Tag」系统完成。

这意味着工程师的角色已经从「写代码的人」变成了「指挥 Agent 的人」。他们设目标、引导方向、做最终问责——但不再是逐行写的那个人。

但问题来了：代码产出能力增长了 8 倍（相对 2021-2025 基线），安全审查能力却无法同步扩展。人类审查者的认知带宽是硬约束。传统 SDLC 那套「一个人写、一个人审」的线性假设彻底崩了。

于是 Anthropic 提出了一套三层安全架构：分支保护（所有 Agent 产出必须走 PR，不能直接提交主干）、分环境权限梯度（开发=宽松、预发=需审批、生产=几乎全锁）、可观测性（每个 Agent 运行有独立身份，pipeline 日志区分 Agent 行为与工程师触发的行为）。

最让我印象深刻的是一个实验：45 个协调的 Agent，花 2700 万 token，在代码库里找到了 266 个漏洞。而独立并行的方式用 650 万 token 只找到 21 个，且只有 12 个重叠。协调的 Agent 学会了自动分工——token 归一化后效率提升约 12 倍。

但多 Agent 系统也暴露了三种典型失败模式：静默冲突（两个 Agent 改同一文件不同部分，各自通过检查但合并后出逻辑错误）、权限漂移（Agent 之间在秒级速度上级联升权）、上下文碎裂（Agent 间格式不匹配通过通信链放大）。

核心判断框架：什么任务适合交给 AI Agent？必须同时满足三个条件——任务可分解为清晰的输入/输出对、验收标准可自动验证、执行环境可完全沙箱化。如果三者缺一，就老老实实让人来。

🔗：[Anthropic AI-Native SDLC Playbook](https://claude.com/blog/the-ai-native-sdlc-playbook)

---

### 从 CC/CD 到「人只是 AI 的 context provider」

韵锦的 AI Weekly 里有一篇转述 Lenny's Newsletter 的框架，让我觉得终于有人把 AI 产品开发的本质问题说清楚了：**CC/CD（Continuous Calibration / Continuous Development）**。

传统软件是确定性的——同样的输入永远给同样的输出。CI/CD 管用是因为你可以写测试、跑回归、确认没坏。但 AI 产品天然是非确定性的：用户输入不可预测，系统输出也不可预测。每次都不一样。

CC/CD 的核心洞察：**AI 产品必须在「代理自主权」和「人类控制权」之间做权衡，而且这个权衡需要随时间校准。** 正确的做法是从「低自主/高控制」开始——让 AI 做路由、做推荐、做草稿——然后通过校准循环逐步提升自主权。例子：客服 v1 = 分拣工单；v2 = 建议解决方案；v3 = 自动解决 + 人类兜底。

最常见的错误？团队在还没理解系统在「高控制模式」下怎么表现时，就跳到了「全自主」。

而来自 Palona AI 联合创始人任川在 42 章经分享的一句话，把这个洞察推到了极限：**「人只是 AI 的 context provider。」** 人类的角色不是执行者，甚至不是决策者——而是给 AI 提供上下文、设定边界、定义什么算「好」的那个人。执行由 Agent 完成。判断由评估循环完成。人负责的是：告诉系统世界是什么样的。

这跟 antirez 上期说的其实是同一件事：「Control the ideas, not the code.」只不过现在，连代码之外的领域也适用了。

🔗：[CC/CD Framework — Lenny's Newsletter (via 韵锦 AI Weekly)](https://www.lennysnewsletter.com/p/cccd-ai-products)  
🔗：[42章经播客 — AI Native工程团队](https://www.xiaoyuzhoufm.com/podcast/648b0b641c48983391a63f98)

---

### 大机器变小了：Intelligence Per Watt —— Tomasz Tunguz

Theory Ventures 的合伙人 Tomasz Tunguz 这周写了一篇短文，标题很简单：Intelligence Per Watt。但他用一个类比把整个趋势说透了：**「大型机变成了个人电脑。数据中心也会变成个人的。」**

他引用斯坦福和 Together AI 的一篇论文（测试了 20+ 个本地模型，样本量超过 100 万真实查询），核心发现：

- 2023 年，最好的本地模型对云端前沿模型的胜率/平局率：23.2%
- 2024 年：48.7%
- 2025 年：71.3%
- 用 20+ 模型 ensemble 路由：**89%**

也就是说，对于日常聊天和推理任务，本地模型集群配合一个路由器，已经能在九成场景下匹敌云端最强模型了。

总效率提升分解为：模型进步 3.1 倍 × 芯片进步 1.7 倍 = 总计 **5.3 倍** 的 intelligence-per-watt 改善。这遵循的就是 Koomey 定律——历史上每瓦算力每 1.5 年翻一倍。

云端仍然在长链推理、最难的技术领域、和需要大规模并行的任务上有优势（批处理带来约 40% 的能效溢价）。但对于绝大多数日常知识工作：本地模型 + 路由 = **80% 能源节省、77% 算力节省、74% 成本节省**。

这不是「未来」。这是 Apple Silicon 上 FastMetal 能在 30 秒内生成一段 5 秒 480P 视频的「现在」。这是 GLM-5.3 在 AA 智能指数上拿到 60 分，与 Claude Fable 5 和 GPT-5.6 Sol 并列的「现在」。这是 Qwen3.8-27B 一个笔记本大小的模型，在 135 个模型中排名第一的「现在」。

🔗：[Intelligence Per Watt — Tom Tunguz](https://www.tomtunguz.com/intelligence-per-watt)  
🔗：[原始论文 arXiv:2511.07885](https://arxiv.org/abs/2511.07885)  
🔗：[FastMetal — Sky Computing Lab](https://x.com/haoailab/status/2090177721913770407)

---

### DeepSeek 的「斩杀线」与梁文峰投资者交流

韵锦 AI Weekly 这期的主标题是「仰望 DeepSeek 的斩杀线」——一张病毒式传播的图表，显示 DeepSeek V4 Flash 0731 在价格 - 性能坐标系上画出了一条其他所有模型都被「斩杀」的线。

但更值得细读的是同期上传到语雀报告库的「梁文峰投资者交流会逐字稿」。这份逐字稿信息密度极高——解释了 DeepSeek 的技术路线图、为什么坚持开源和低定价、为什么不着急做 C 端或 To-B、以及他们如何思考从 Agent 到持续学习的演进路径。里面还有对竞争对手的「不点名批评」和 GPU 采购形势的具体细节。

这些内容放在一起，画面就清楚了：DeepSeek 的策略不是「抢市场份额」，而是「把模型变成水电煤」——让智能本身便宜到不值得竞争，然后看谁能在这个基础上建出真正的应用。这跟 Stripe 收购 OpenRouter 的逻辑是互补的：DeepSeek 在供给侧压价格，Stripe/OpenRouter 在交易侧建管道。两者一起，就是机器经济的基础设施。

🔗：[DeepSeek API 更新日志](https://api-docs.deepseek.com/zh-cn/updates)  
🔗：[Stripe's $10B OpenRouter Bet（含「斩杀线」背景分析）](https://www.decodingdiscontinuity.com/p/stripes-10-billion-openrouter-bet-ai-agent-economy)

---

![](https://pics.naaln.com/2026-08-23-d78dd1d96bd96429817344a5590ec44a.webp-basicBlog)

## 🤖 AI 工具

### Claude Computer Use + Skills API + Files API 正式版

8 月 19 日，Anthropic 同时把四项能力从 Beta 转为 GA：Computer Use（操作界面）、Browser Tool（浏览网页）、Files API（文件系统）、Skills API（流程知识）。这不是一次小版本更新，这是在宣布：**Agent 的最小可行工具包齐了。**

去掉 Beta 标签不是换个字。Beta 意味着「可能变」——很多企业团队不是因为技术不行而搁置项目，是因为「Beta」过不了采购。GA 意味着供应商开始为这个接口的稳定性背书：SLA 覆盖、法务/采购放行、接口不再随意变动。

Computer Use 现在支持批操作——把多个确定性 GUI 动作（打开菜单→聚焦字段→清空→粘贴）压缩成一次提交，不再每个动作都要完整的模型往返加昂贵的截图 token 重新摄入。Skills 是文件夹格式（包含 SKILL.md），可以打包上传、版本管理、全组织启用。

真正的竞争差距可能不在于谁用更强的模型，而在于**谁最先把这些「手」连接到真实业务流程上**。

🔗：[Claude Platform — Computer Use, Skills API, Files API](https://claude.com/blog/computer-use-skills-api-files-api)

---

### Cursor Origin：从编辑器到代码托管的垂直整合

Cursor 不声不响地发布了 Origin——自己的代码托管平台。所有付费用户可以用了。

这意味着什么？Cursor 不再只是一个「比 VS Code 好用的编辑器」，它现在想拥有开发者工作流的全链条：写代码、托管代码、提 PR、跑 CI、部署。你的代码、PR、和 Agent 第一次住在同一个地方。

核心功能：仓库托管、Pull Request、代码浏览、双向 GitHub 同步（秒级）。GitHub 仍然是「从那边发起的仓库」的 source of truth，权限自动继承。支持 Vercel（预览部署）、Depot（CI）和 Buildkite（原生 pipeline）。

关键差异化：**Agent 原生**。浏览代码时可以直接向 Cursor Agent 提问，Agent 可以回答问题、做修改、更新 PR、推送分支——全在同一个界面里。

这让我想起了一句话：「当内层能力商品化时，稀缺性向外层转移。」模型在变便宜，但**围绕模型的工作流平台**在变贵。Cursor 在赌：谁拥有开发者的日常工作界面，谁就拥有了 Agent 时代的入口。

🔗：[Cursor Origin Code Hosting](https://cursor.com/changelog/origin-code-hosting)  
🔗：[Cursor Blog — Git at Any Scale](https://cursor.com/blog/git-at-any-scale)

---

### Mistral Agentic Search：让 Agent 学会「翻文件」

传统 RAG 像什么？像让一个实习生在一堆文件里搜关键词，找到几段话就交上来，不管够不够用。Mistral 的 Agentic Search 像什么？像让一个分析师拿到文件后可以翻到具体某页、定位某张表格、读上下文、再去搜相关文件交叉验证。

五个工具：search（找文件）→ open（打开）→ navigate（定位到具体页/节）→ read（读内容）→ grep（文内搜索模式）。模型可以反复循环这个流程，直到信息足够回答问题。

在 FinanceBench（368 份 SEC 文件，约 53,900 页）上的测试：单纯搜索循环比一次性 RAG 准确率提升 47.3 个百分点；加上导航能力再提升 8.7 个百分点——从 26.7% 提到 86%，三倍改善。同时 token 消耗反而降了 23.9%（Mistral Medium 3.5），延迟 p90 从 255 秒降到 154 秒。

这再一次证明了上面那个判断：**光有聪明的大脑不够，还得有好用的手脚。** Agent 需要的不是更大的上下文窗口，而是能在文档里「走来走去」的能力。

🔗：[Mistral Agentic Search](https://mistral.ai/news/agentic-search)

---

## 🛠️ 效率与基础设施

### SGLang Weight Cache Daemon：从 495 秒到 0.63 秒的模型启动

SGLang 团队这周干了一件让运维人员流泪的事：通过 CUDA IPC 零拷贝映射，把大模型的权重加载时间从 ~495 秒压缩到 ~0.63 秒。785 倍加速。端到端启动时间缩短 93.9%。

原理是让一个 daemon 进程把量化后的权重持久驻留在 GPU 显存里，新引擎实例直接映射，不需要重新从磁盘加载。支持多实例共享、亚秒级故障恢复。这意味着：大模型服务可以像无状态微服务一样快速重启了。

🔗：[SGLang Weight Cache Daemon](https://www.lmsys.org/blog/2026-08-21-sglang-fast-recovery)

---

### Test-Time Training：当模型在使用中继续学习

Tomasz Tunguz 的另一篇文章解释了 Test-Time Training（TTT）——模型在推理过程中对输入做梯度更新，实时修改自己的权重。

类比：普通 GPS 给你一条路线，你走了就完了；TTT 的 GPS 永久记住了你常走的捷径。

关键影响：
- 内存需求从「随上下文线性增长」变为**恒定**——不管对话多长，存储开销不变
- 推理速度最高提升 **2.7 倍**（Stanford 研究）
- In-Place TTT 可以让一个 4B 参数模型达到 128k 上下文的竞争力表现

但代价是：一旦模型对一个用户的提示做了更新，它就偏离了其他用户的版本。一个共享 checkpoint 变成了百万个个性化模型副本。什么时候值得付这个代价？长期个人编码 Agent（学习你的代码风格和项目约定）——值得。一次性客服问答——不值得。

🔗：[Test-Time Training Impact — Tom Tunguz](https://www.tomtunguz.com/test-time-training-impact)  
🔗：[论文：Learning to (Learn at Test Time)](https://arxiv.org/abs/2407.04620)

---

### Breakable CUDA Graph 成为 SGLang prefill 默认方案

SGLang 重构了 CUDA Graph 支持，通过 runner/backend 接口分离实现可复用的捕获策略。社区首创的 Breakable CUDA Graph（BCG）现在是默认的 prefill 方法——代码量只有 torch.compile 的 1/4（521 行 vs 1,771 行），构建速度快 3.8-5.2 倍。

🔗：[SGLang Advanced CUDA Graph](https://www.lmsys.org/blog/2026-08-17-advanced-cuda-graph)

---

## ✨ 随便看看

### AI 产品为什么越来越像？

Jim Nielsen 写了一篇观察文章叫「The AI Aesthetic」，指出 AI 桌面应用（Claude、Codex、Cursor）使用的图标比原生 macOS 应用「小得多、细得多」。他问：这是不是我们与计算机交互的集体未来？（括号里加了一句「我希望不是」。）

The New Yorker 的 Kyle Chayka 走得更远——他指出 Claude 的设计工具正在生产一种均质化的、瞬间可辨的视觉语言：米色/奶油色背景、铁锈橙色点缀、大号衬线字体常带斜体、信息条设计像有线新闻。一个设计师收到两家不同创业公司的销售 deck，布局几乎完全一致。

**「AI = sparkles, rainbows, and unicorns ✨🌈🦄 — Apt.」**

🔗：[The AI Aesthetic — Jim Nielsen](https://blog.jim-nielsen.com/2026/ai-aesthetic/)  
🔗：[The A.I.-Design Aesthetic That's Taking Over the Internet — The New Yorker](https://www.newyorker.com/culture/infinite-scroll/the-ai-design-aesthetic-thats-taking-over-the-internet)

---

### 本周其他值得关注

- **Mojo 语言完全开源**（Apache 2.0 + LLVM 例外），编译器源码上 GitHub，刚到 1.0 版本。一门为 GPU 和 AI 加速器设计的通用语言，四年闭源开发后终于放开。🔗：[Mojo Open Source](https://www.modular.com/blog/mojo-open-source)
- **DeepSeek-V4-Flash-Vision-Exp 发布**，实验性多模态视觉理解模型，通过 API 可直接调用。🔗：[DeepSeek API 更新](https://api-docs.deepseek.com/zh-cn/updates)
- **GLM-5.3 发布**，AA 智能指数得分 60，与 Claude Fable 5 和 GPT-5.6 Sol 持平，下周五开放模型权重。🔗：[GLM-5.3 发布](https://mp.weixin.qq.com/s?__biz=MzkyMzI3NzQ0Mg%3D%3D&mid=2247494105&idx=1&sn=8d7409e0fb846a3c7803c142b5d1a8e7)
- **Claude Code v2.1.237-239**：新增「简洁」输出风格（跳过开场白直接给结果）、readline 键位支持、成本估算功能、LLM 网关缓存修复。🔗：[Claude Code Releases](https://github.com/anthropics/claude-code/releases)
- **Qwen-UI-Agent**：阿里发布 GUI 操作 Agent 基础模型，覆盖手机、桌面、网页和 DeepSearch 四种环境。🔗：[Qwen-UI-Agent](https://www.ithome.com/0/992/239.htm)
- **Google ADK 零信任 Agent 示例**：开源了一个基于 ADK + Gemini 的零信任客服/退货 Agent，三层硬安全——硬件签名、gVisor 沙箱代码执行、确定性语义网关。🔗：[Google Zero-Trust AI Agents](https://developers.googleblog.com/build-zero-trust-ai-agents-with-googles-agent-development-kit)
- **AlloyDB ScaNN 四级树**（预览）：向量搜索扩展到 100 亿向量，查询复杂度从 O(N^1/2) 降到 O(N^1/4)，10B 规模下 p95 延迟 ≤51ms、recall 95%。🔗：[AlloyDB ScaNN](https://cloud.google.com/blog/products/databases/alloydb-scann-index-four-level-tree-improves-vector-search)
- **OpenAI 减缓模型开发速度**——因 OpenAI-Hugging Face 事件后，即将发布的 Astra 模型可能触达 Preparedness Framework 的「关键网络安全能力」阈值，暂停了最新模型两周的 RL 训练。🔗：[Pacing Model Development](https://openai.com/index/pacing-model-development-cyber-capabilities)
- **a16z 实测 AI 办公工具**（来自韵锦 AI Weekly 深度层）：PPT 最佳 Gamma/Genspark、表格最佳 Manus/Shortcut、邮件最佳 Serif/Comet、研究最佳 Manus、会议纪要最佳 Mem/Granola/Notion。垂直 vs 水平工具的融合已经开始。🔗：[a16z AI-Native Office Tools Benchmark](https://a16z.com/ai-native-office-tools/)
- **Anthropic 每个模型都会作弊**（Dreadnode 审计）：22 个前沿模型中，37.1% 的通过任务涉及作弊。平均通过率 41.5%，真实解决率只有 26.1%。即使加了标准反作弊提示，作弊率也只从 33% 降到 8.5%。🔗：[Every Model Cheats](https://dreadnode.io/research/every-model-cheats-prompt-level-mitigation-of-cheating-on-offensive-cyber-tasks)

---

## 📎 本期报告推荐（via 韵锦 AI Weekly）

这期语雀同步上传了 9 份高质量行业报告，挑几份最值得读的：

- **AI SNAPSHOT 26H1 by Work Bench**：纽约企业软件 VC 的半年观察——AI 正从效率工具转变为「工作的操作系统」。九大主题涵盖 AI 编码工作流、「软件工厂」、Token 作为新预算项目、Agent 身份与权限。
- **梁文峰投资者交流会逐字稿**：DeepSeek 创始人回答投资者关于技术路线图、开源策略、Agent 演进路径的完整记录。
- **The Impact of AI on the U.S. Labor Market**：「AI 对劳动市场的第一个可测量效应是工资压缩，而非就业替代」——工资被挤压了，但工作还没消失。
- **State of AI Safety in China**：127 页，核心转向——中国 AI 安全治理正从「管模型输出什么」转向「管 AI 能做什么动作、这些动作如何影响用户和社会」。

---

这是管道全部通了之后的第一周。Agent 有了眼睛、手、钱包和住所。接下来的问题不再是「AI 能不能做」，而是：谁掌握选择权？谁掌握结算权？谁掌握数据通路？

这些问题的答案，可能比任何一个模型本身都重要。
