---
title: L125_谁在定义AI的价格
date: 2026/06/13 10:00:00
categories:
  - Notes & Reflections
tags:
  - Agent
  - OpenSource
  - Economy
  - FutureOfWork
description: Anthropic与OpenAI同周秘密IPO，中国开源模型成本再探新低，OpenRouter Fusion证明半价组合可击败旗舰。当智力的价格以周为单位崩塌，真正的问题是：谁来定义值多少钱？
created: 2026-06-15 15:06:02
updated: 2026-06-26 18:17:35
series: Newsletter 周刊
---

![](https://pics.naaln.com/2026-06-24-47d1466c59dbe690c80366fcdde2f0a1.webp-basicBlog)


周四晚上刷到一条消息：Anthropic 秘密提交 IPO 申请，估值 9650 亿美元。

我愣了一下。就在五天前，Anthropic 刚发布了 Claude Fable 5——一个号称「太危险而不能公开部署」的模型 Mythos 5 的安全版本。然后过了两天，美国政府以出口管制为由要求暂停访问。Anthropic 照做了，但 IPO 文件已经递上去了。

——

同一天，WSJ 报道 OpenAI 正在考虑大幅降价。ChatGPT 要做「史上最大改版」，从聊天工具变成 Agent 超级应用。两天前，OpenAI 刚向 SEC 秘密提交了 S-1 草案。

两家公司，同一周，秘密 IPO，一个 9650 亿，一个此前估过的 8520 亿。加起来 1.8 万亿美元——超过了大多数国家的 GDP。

但这周真正让我觉得有意思的，不是这两个数字。而是同一周发生的其他事情：中国实验室在疯狂开源（MiniMax M3、GLM-5.2、Kimi-K2.7-Code），OpenRouter 证明了半价模型组合可以击败任何单一旗舰，一个开源项目展示了用 Fable 做架构师 + Codex 做工人可以省掉 80% 的 token 开销，Apple 把全新的 Siri AI 塞进了十亿台设备。

这周的 Newsletter，我想聊一个简单的问题：**当智力的价格以每周可见的速度下跌，谁在定义「值多少钱」？**

---

## 📚 深度阅读

### Fable 5：一个太危险的模型，和一个刚好安全的版本

6 月 9 日，Anthropic 同时发布了两个模型。Claude Mythos 5 是他们造过的最强模型——在 Cognition 的 FrontierCode、Hebbia 的金融基准、CursorBench 和 ViBench 上全部 SOTA。早期测试者说它「把几个月的工程压缩到了几天」。它能用原始截图玩 Pokemon FireRed，不需要任何外部工具；能做蛋白质设计和分子假说生成；能处理百万 token 级的持久记忆。

但 Mythos 5 不对外。Anthropic 说它拥有上千个漏洞利用能力，能攻破银行系统、窃取国家机密。NSA 非常想要它。所以 Anthropic 造了 Fable 5——同一个底层模型，但装上了严格的安全分类器。当你的查询涉及网络安全、生物、化学或蒸馏攻击时，请求会被自动路由到 Claude Opus 4.8。这套护栏只在不到 5% 的会话中触发。

定价 $10/$50 每百万 token。比之前的 Mythos Preview 便宜得多。

然后，6 月 12 日，美国政府以出口管制为由要求暂停访问。Anthropic 表示不同意，但照做了。三天后，IPO 文件递到了 SEC。

这整个时间线有一种奇怪的完美。发布一个「太危险」的模型，证明你拥有最强的技术；被政府要求暂停，证明你的技术重要到需要国家安全级别的监管；然后带着这些故事去上市。Dario Amodei 在 Bloomberg 采访中预言 AI 将在 1-5 年内砍掉一半入门级白领工作，估计 AI 导致社会崩溃的概率在 10-25%。

你很难判断这是一种真诚的警告，还是一种精心设计的估值叙事。可能两者都是。

🔗：[Anthropic 官方公告](https://www.anthropic.com/news/claude-fable-5-mythos-5) | [AI HOT 精选](https://aihot.virxact.com)

---

### OpenAI 的超级应用赌注

WSJ 的报道揭开了 OpenAI 的另一面。表面上看，这是一家月活过 10 亿的公司正在准备 IPO。但水面下，一场更激进的重构正在进行。

ChatGPT 要从聊天工具变成「超级应用」——整合编码（Codex）、Agent、图像生成和商业软件。一位工程负责人说，他们在构建「一个未来，你将拥有自己的个人 Agent，它能在生活的方方面面帮助你」。

更值得关注的是定价策略。OpenAI 正在考虑大幅降价，直接原因是 Anthropic 在开发者市场的蚕食。Claude Code 的用户产生了海量的 token 消耗，Anthropic 在高消费技术工作中拥有了「更锋利的楔子」。真正的战场不是消费者品牌认知，而是企业团队为编码 Agent、自动化工具和内部系统支付的按量计费。

同周，OpenAI 还做了几件事：Codex 推出了浏览器开发者模式（用 Chrome DevTools 协议调试），推出了速率重置攒存功能（你可以把没用完的额度攒到以后用），收购 Ona 来为 Codex 提供安全的云端环境，还推出了面向企业的 Partner Network（投资 1.5 亿美元）。

所有这些指向同一个方向：OpenAI 正在从一个「聪明的聊天机器人」变成一个「AI 工作的操作系统」。

🔗：[AI HOT](https://aihot.virxact.com) | [OpenAI Partner Network](https://openai.com/index/introducing-openai-partner-network)

---

### 智力的地板价

如果说 Anthropic 和 OpenAI 在争「谁最聪明」，这周真正改变游戏规则的消息来自另一个方向：**智力的价格正在以令人眩晕的速度触底。**

**中国开源模型的围攻。** 这一周有三个重磅开源发布：MiniMax M3（428B 总参数、23B 激活，编码和 Agent 能力达到 59.4%）、智谱 GLM-5.2（1M 上下文，下周开源，号称最强国产 Coding 模型）、Kimi K2.7-Code（相比 K2.6 在 Kimi Code Bench v2 上提升 21.8%）。每一个都在逼近闭源旗舰的能力，但成本只有几分之一。

**OpenRouter Fusion。** 这个更让我兴奋。OpenRouter 证明了一组预算模型的融合可以在 100 个复杂研究任务上击败 GPT-5.5 和 Claude Opus 4.8。他们的预算配置（Gemini 3 Flash + Kimi K2.6 + DeepSeek V4 Pro）得分 64.7%，而单独的 GPT-5.5 只有 60%，Opus 4.8 只有 58.8%——成本是旗舰模型的一半。甚至同一模型的自融合（Opus + Opus，由 Opus 评估）也能比单独运行提高 6.7 分。这意味着合成和评估阶段本身就创造了超出架构多样性的价值。

**/architect 模式。** 这个 GitHub 项目展示了一个优雅的双模型架构：Claude Fable 5 做架构师（只负责规划、判断、审核），Codex 做工人（负责所有实现）。Fable 的会话只持续几分钟而非几小时，永远保持在最佳性能区间。Codex 在 ChatGPT 订阅的固定费率下跑几个小时。社区测量显示成本降低 58-74%。

**SemiAnalysis 的订阅压力测试。** 他们买了 Anthropic 和 OpenAI 的全部订阅方案，模拟高强度编码任务。结论：月费 200 美元的 Claude 订阅可以榨出 70 倍的用量。这暗示着当前的订阅定价存在巨大的套利空间——或者说，价格即将被重新校准。

当这四件事在同一周发生，一个结论变得不可避免：**模型能力不再是稀缺资源。** 稀缺的是路由、编排、和把正确模型用在正确场景的判断力。

🔗：[OpenRouter Fusion](https://openrouter.ai/blog/announcements/fusion-beats-frontier) | [/architect](https://github.com/DanMcInerney/architect-loop) | [MiniMax M3](https://x.com/MiniMax_AI/status/2065436935188058208)

---

### Apple 的代理化转身：Siri 终于能看懂你的屏幕了

WWDC 2026 的 Keynote 上，Apple 展示了一个全新的 Siri——不是渐进式升级，而是彻底重建。

新的「Siri AI」能理解你屏幕上的内容，跨应用搜索你的个人数据，从网页获取实时信息。Apple 还推出了独立的 Siri App，聊天记录通过 iCloud 跨设备同步。Image Playground 升级为照片级写实风格。Safari 新增了「Notify Me」——AI 替你盯着网页，库存补货时提醒你。

更值得关注的是 Apple 的隐私策略。设备端模型处理隐私敏感任务，云端处理需要大算力的请求，iCloud+ 订阅者获得更多 AI 配额。这是一种「分层代理」的架构——把隐私变成了产品特性而非限制条件。

但 Apple 也有自己的麻烦。EU 因为《数字市场法》延迟了 Siri AI 在移动端的上线。中国因监管审批直接不可用。Tim Cook 在 Keynote 后宣布九月卸任，John Ternus 接任。

我对 Safari 的「Notify Me」最感兴趣。听起来简单，但这是 Apple 第一次让 AI 代替用户「盯」着互联网。从被动响应到主动监控——这一步的意义可能比 Siri 能聊天更大。

🔗：[Apple Newsroom](https://www.apple.com/newsroom/2026/06/apple-unveils-next-generation-of-apple-intelligence-siri-ai-and-more/) | [AI HOT](https://aihot.virxact.com)

---

## 🤖 AI 工具

### Cursor Auto-Review：让分类器 Agent 替你看代码

Cursor 推出了 Auto-review，用一个专门的分类器 Agent 在工具调用前审查动作风险。这个分类器不是简单的「允许/拒绝」开关，而是一个动态的「旋钮」——它运行在 Agent 的执行循环内，跟父 Agent 在同一个 RPC 流里，避免外部 API 调用的延迟。

分类器本身也是 Agent 化的：它可以独立使用 ReadFile、Grep、Glob 和 ListDir 来检查工作空间，然后再做判断。它评估的是工具调用、用户原始意图和潜在后果三者之间的关系。日常编码操作自由通过；触及凭证、生产环境或不可逆副作用的操作会被严格审查。

结果：大约 4% 的动作被阻止，96% 无感通过。只有 7% 的会话需要人类直接介入——因为当一个动作被阻止时，解释会反馈给主 Agent，它通常能自己选择更安全的路径。

这是一个精妙的设计：不是限制 Agent 的自由，而是给 Agent 一个内置的「常识」。

🔗：[Cursor Blog](https://cursor.com/blog/auto-review)

---

### Perplexity Computer + Deep Research

Perplexity 将 Deep Research 作为原生技能集成到 Computer 中。它现在连接到驱动 Computer 的 Agent 框架，可以访问「搜索即代码生成」、长文档处理和深度研究能力。

这代表了一个趋势：搜索不再只是搜索，它变成了 Agent 的一个技能。当你的 AI 助手需要做一个复杂决策时，它可以自主发起一次深度研究，综合多个来源的信息，然后继续执行下一步。

🔗：[Perplexity](https://x.com/perplexity_ai/status/2065124930463916317)

---

### 字节豆包「任务模式」

字节跳动的 AI 应用豆包大范围上线「任务模式」，支持定时执行、零代码网页生成、一键 PPT 生成、数据可视化分析等全链路 Agent 执行。原来的「思考模式」升级为「专家模式」。

这是国内 AI 应用从「对话式」向「任务式」转变的一个标志性事件。用户不再需要跟 AI 来回聊天来完成任务，而是直接说「帮我做这件事」，然后 AI 去执行。

🔗：[IT之家](https://www.ithome.com/0/963/725.htm)

---

### xAI Grok Build Plugin Marketplace

xAI 为 Grok Build 推出了内置插件市场。插件将技能、斜杠命令、AI Agent、钩子、MCP 服务器和 LSP 打包为可安装包。用户无需离开终端即可浏览、安装和管理插件。

这是终端优先的 Agent 生态正在形成的信号。当 MCP 服务器、LSP 和 AI Agent 可以被打包成一个「插件」并一键安装，Agent 的能力边界就不再受限于开发者的手工配置。

🔗：[xAI](https://x.ai/news/grok-plugin-marketplace)

---

## 🛠️ 效率工具

### OpenRouter Fusion API

前文已详细分析。核心能力：以一半的价格实现 Fable 级别的智能。工作原理是并行分发请求到多个模型，由评估模型分析分歧，然后综合生成最终回答。整个流程服务端完成。

🔗：[OpenRouter](https://openrouter.ai/blog/announcements/fusion-beats-frontier)

---

### Krea 2 生成式滑块

Krea AI 为 Krea 2 推出了生成式滑块控制。你现在可以调节用 Krea 2 生成的任何图像的强度、复杂度和运动。这不是重新生成，而是在已有生成结果上做连续的参数调节——像是给 AI 图像加了一个「混音台」。

🔗：[Krea AI](https://x.com/krea_ai/status/2065086662166901114)

---

### Suno 音轨分离升级

Suno 的音轨分离从「频率隔离」升级为「从零重新生成」。不再是简单地分离频率，而是为每个音轨独立重新生成，结果是纯净无伪影的音轨，可以直接拖入 DAW 使用。对于音乐制作人来说，这改变了 AI 辅助音乐制作的工作流。

🔗：[Suno](https://x.com/suno/status/2065862499765821916)

---

## ✨ 随便看看

- **全自主无人机首次击毙人类士兵**：新科学家报道，有记录以来第一次由完全自主运行的无人机执行致命攻击。这不是科幻，这是 2026 年 6 月。（score=88）[New Scientist](https://www.newscientist.com/article/2529849-fully-autonomous-drones-have-killed-human-soldiers-for-the-first-time)
- **Meta 撤销 20 亿美元收购 Manus**：北京要求反转，收购解除程序已启动。中美科技博弈的又一个注脚。（score=71）[TechCrunch](https://techcrunch.com/2026/06/13/meta-reportedly-moves-to-unwind-2b-manus-deal-after-beijings-demand)
- **Prometheus 融资 120 亿美元**：贝佐斯旗下 AI 公司，成立仅 7 个月、尚无任何产品交付，估值 410 亿美元。定位「人工通用工程师」。（score=75）
- **中国准备 2950 亿美元 AI 基础设施计划**：全国性 AI 基础设施建设资助。（score=80）
- **Apollo 与 Blackstone 联手 350 亿美元 AI 融资交易**：购买 Google TPU 并租赁给 Anthropic。（score=81）
- **谷歌 Android 安全负责人辞职**：在告别信中指责公司「丧失道德指针」，批评放弃碳中和目标。（score=80）[IT之家](https://www.ithome.com/0/963/888.htm)
- **扎克伯格承认 Meta AI 转型「脱轨」**：裁员 10%、转岗 7000 人后组织调整过快，预计未来「几乎肯定会犯更多错误」。（score=72）[IT之家](https://www.ithome.com/0/963/858.htm)
- **Magnetar 用数百 AI Agent 替代分析师**：对冲基金用 AI Agent 取代了大量人类分析师。（score=75）
- **Deezer AI 音乐检测器**：面向 Spotify、Apple Music 等竞品平台扫描 AI 生成音乐。（score=73）[The Verge](https://www.theverge.com/ai-artificial-intelligence/948153/deezer-ai-music-detector-spotify-apple)
- **LLM 在 95% 模拟中使用战术核武器**：一项博弈论模拟研究的结果。不是某个特定模型，而是「一般 LLM」。（score=70）
- **Anthropic CEO 预言 50% 入门级岗位流失**：Dario Amodei 在 IPO 前的公开表态，同时估计 AI 导致社会崩溃的概率在 10-25%。（score=71）[IT之家](https://www.ithome.com/0/962/854.htm)
