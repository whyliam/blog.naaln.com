---
title: L126_做越来越便宜，决定做什么越来越贵
date: 2026/06/20 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - AI
  - Agent
  - DecisionMaking
description: 300 个 Agent 管理跨境电商全流程，但操作者说真正的价值在选品判断和市场押注。AI 把执行门槛压到接近零，判断力的缺口反而更大。本期还关注：消费级 AI 的哑铃市场、Figure 机器人首超人类员工、开源 AI 政策之争。
series: Newsletter 周刊
created: 2026-06-24 17:55:06
updated: 2026-06-26 18:17:32
---

![](https://pics.naaln.com/2026-06-24-de78f10c32790448621d477a07c199de.webp-basicBlog)


上周五晚上，我花了两个小时看一位朋友用 AI 做产品。他从零开始，用 Claude Code 搭了一个小型的跨境电商数据看板，中间涉及 API 对接、数据清洗、前端图表渲染。整个过程中他写代码的时间大概不到二十分钟，剩下的时间他都在做另一件事——盯着屏幕想：这个数据到底该不该放上去？这个维度对运营来说有没有意义？

他把这叫做"vibe working"。手不动了，脑子反而更忙。

这不是个例。有案例显示，有人用 300 个 AI Agent 管理跨境电商全流程——竞品监控、汇率换算、供应商背调、爆款脚本生成，全部自动化。但他说了一句很清醒的话：操作者的真正价值不在于跑这些流程，而在于选品判断、市场押注、以及对供应商信任度的评估。AI 接管了手，但判断力的缺口变得更大。

—

这种「执行与判断的分离」正在成为本周最明显的主题。一份关于「从超级个体到超级团队」的报告中，一个公式我觉得很精准：**组织竞争力 = 人才密度 × AI 杠杆 / 组织摩擦力**。AI 放大了个人能力，但「超级个体」不应该、也不可能完全单干。真正有趣的问题不是一个人能否变成一家公司，而是一群被 AI 放大的人，应该如何重新组队。

与此同时，Q2 消费级 AI 报告泼了一盆冷水：用户确实在用 AI，但这不意味着公司能赚到钱。市场呈现出明显的「哑铃结构」——一端是免费大模型覆盖的大众需求，另一端是月费 100 美元以上的专业工具，中间那些「有点用、十几块一个月、但说不清护城河」的产品面临巨大压力。

Figure 公司的机器人数量第一次超过了人类员工数量。NSA 局长说 Mythos 在几小时内攻破了几乎所有机密系统。AlphaFold 负责人 John Jumper 离开 DeepMind 加入 Anthropic。这些事情放在一起看，会发现一个趋势正在加速：AI 正在把「做」的门槛压到接近零，同时把「决定做什么」的门槛抬到前所未有的高度。

这期的主题是**执行与判断的分离**——当 AI 能替你做几乎所有事的时候，你唯一不可替代的，是你知道什么值得做。

---

## 📚 深度阅读

### 三份报告：Fable 5、超级个体、消费级 AI 的冷水

有三份值得细读的报告，从不同角度指向同一个问题：AI 能力的提升，并没有自动转化为个人和组织的竞争力提升。

**Fable 5 讨论笔记**揭示了一个有趣的现象——很多人拿到强力模型后反而「找不到值得解决的问题」。模型的价值不应该用「普通任务是否快了一点」来衡量，而应该看它是否跨过了用户的能力边界。讨论中还提到 Multi-agent 系统的真正价值可能不在于并行执行，而在于**记忆和上下文扩展机制**：子 Agent 独立消耗上下文，只把压缩后的结果返回给主 Agent。这个洞察很关键——未来 AI 产品的核心竞争力不是模型能力本身，而是能否构建一个根据任务价值动态分配模型成本的路由系统。

**「从超级个体到超级团队」**报告则给出了更务实的判断。作者余一的核心观点是：超级个体不会走向完全独立，因为一个人再强，也无法承担所有风险、稳定所有注意力、积累足够的基础信誉。报告中的组织竞争力公式值得每个做 AI 产品的团队贴在墙上反复看。

**Q2 消费级 AI 报告**最让人清醒。它把 AI 应用从概念热潮拉回了商业基本面——大量融资不等于赛道普遍有机会，用户使用不等于持续付费。哑铃市场的判断尤其重要：如果你的产品处在「有点用但说不清护城河」的中间地带，现在就该重新审视定位了。

🔗：[腾讯研究院「从超级个体到超级团队」报告](https://view.inews.qq.com/a/20260603A07TIY00)

---

### 创业开放麦：AI 时代最稀缺的资源是品味

一场上海 Hacker House 开放麦活动中，11 位创业者分享了他们的实践。有几个细节很抓人：有人在公司内部禁止用 AI 写文档，逼着自己去做真人访谈；有人给自己的 AI Agent 做了「分身」让它替自己开会。

但最让我思考的是其中关于「品味」的讨论。硅谷最近流行一种叙事——品味是护城河。但作者 XDash 泼了冷水：那些在 PR 里大谈审美的公司，正在被不做这些的竞争对手击败。Steve Jobs 的真正遗产不是品味，而是他三十年来不断做选择、承担后果的过程。真正的判断力来自「建造、发布、面对拒绝」这个真实世界的循环，而不是坐在办公室里培养审美。

同一期还分析了营销归因黑洞的问题——一个 Polkadot 社区算出单次有效交互成本高达 2719 美元，和代理商报告的数据完全对不上。前端曝光数据完美，后端真实转化一团糟。这又是一个「执行可以自动化，但判断执行是否有效仍然是人类工作」的案例。



---

### 禁止开源 AI 将是一个错误

Nathan Lambert 在 Interconnects 上的这篇文章值得每一个关注 AI 政策的人读。背景是近期的行政命令和国会提案可能对开源 AI 施加新限制。文章的核心论点是：开源软件已经支撑了全球 90% 以上的软件并创造了 8 万亿美元经济价值。以中国竞争为由来监管开源将适得其反——美国初创公司正依赖包括中国在内的开源模型来提升效率。Anthropic 和 OpenAI 的封闭模型正在加剧市场集中，开源是初创公司、教育机构和企业获得替代方案的唯一平衡力量。

结合本周 OpenRouter vs Portkey 和 OpenRouter vs LiteLLM 的两篇对比文章来看，LLM 网关生态正在快速成熟——300+ 模型统一路由、自动故障转移、零数据保留。这个生态的繁荣恰恰依赖开源基础设施。

🔗：[Interconnects - Banning Open Source AI](https://www.interconnects.ai/p/banning-open-source-ai-would-be-a)

---

### AI 中心的数据黑洞

Dwarkesh Patel 的这期播客讨论了一个容易被忽略的问题：AI 进步的样本效率。人类一生接触约 2 亿 token，前沿模型训练在数十到数百 T token 之间，相差近百万倍。强化学习本质上是合成数据生成——投入大量算力通过验证器筛选「好」数据，再训练模型预测正确输出。这个模式需要每个领域的大量人类专家示例，数据行业年收入已达数十亿美元。

一个有趣的数据点：Epoch 报告显示开源模型仅落后前沿闭源模型 4 个月，原因是数据可从公开 API 蒸馏。这个差距在继续缩小。

🔗：[Dwarkesh Patel Podcast](https://www.dwarkesh.com/p/the-sample-efficiency-black-hole-2)

---

## 🤖 AI 工具

### Kami：让 AI 输出配得上好纸的排版约束框架

Tw93 在潮流周刊 270 期推荐的 Kami，不是一个简单的「Markdown 转简历」工具。它的定位是**AI 输出的排版约束层**——通过一套严格的编辑美学规则（暖色纸张底、单一墨蓝点缀色、衬线字体层级），防止 AI 生成那种扁平、灰色、不一致的排版。9 种文档模板（作品集、股权报告、changelog、one-pager、幻灯片）+ 14 种内联 SVG 图表变体，支持 Claude Code、Codex 等 AI 编程助手作为 Skill 安装。

它的名字来自日语「纸」（紙），象征「成品想法落地的表面」。设计理念是：好的内容应该配得上好的纸。在 AI 生成内容泛滥的今天，这种对排版质量的坚持反而变得更有价值了。

🔗：[GitHub - tw93/Kami](https://github.com/tw93/Kami)（~9K Stars · MIT）

---

### GPT-5.5 Instant：ChatGPT 的健康智能跃升

OpenAI 本周发布的 GPT-5.5 Instant 在健康领域的表现值得关注。每周超 2.3 亿用户通过 ChatGPT 获取健康信息，新模型在 HealthBench 和 HealthBench Professional 评估中，回复的准确性、安全性和沟通质量优于医生手写回复和早期模型。近两个月的生产流量数据显示，健康类回复的事实性问题率下降了 71%。

当然，Nature 同期发布的两篇研究也给出了冷静的对照——MIRA 智能体在模拟急诊诊断中准确率 88.9%，高于资深专科医生的 78.1%，但两项研究都警告模拟环境与现实存在差距。

🔗：[OpenAI - Improving Health Intelligence](https://openai.com/index/improving-health-intelligence-in-chatgpt)

---

### Adobe Creative Cloud 全面接入 AI Agent

Adobe 把「创意智能体」扩展到了 Photoshop、Premiere、Illustrator、InDesign 全线应用。Premiere 可以做素材分拣和粗剪，Photoshop 能自动换背景，Illustrator 批量生成文件，InDesign 更新版式。Firefly 新增了品牌套件、产品图转短视频和 Quick Cut 自动剪辑。值得注意的是 Adobe 工具已经集成到了 ChatGPT、Claude 和 Microsoft 365 Copilot 中，Google Gemini 和 Slack 集成即将推出。

这意味着创意工作的 AI Agent 不再是独立的第三方工具，而是直接嵌入到了创作者已经在用的软件里。执行门槛的降低，在这个领域体现得最为直接。

🔗：[The Decoder - Adobe AI Agents](https://the-decoder.com/adobe-adds-ai-agents-to-photoshop-premiere-and-more-creative-cloud-apps)

---

### Figure 机器人数量首超人类员工

Figure 公司的机器人数量第一次超过了人类员工。这不是一个理论突破，而是一个事实里程碑。从工厂到仓库，从物流到制造，具身智能正在从概念走向规模化部署。

与此同时，虎嗅的一篇报道揭示了具身 AI 数据产业链的暴利：数据采集员时薪 17 元，转售价 300 元/小时——17 倍的价差。当执行端越来越自动化的时候，数据这个上游瓶颈的利润反而最高。

🔗：[X - Rohan Paul](https://x.com/rohanpaul_ai/status/2068089038213693800)

---

## 🛠️ 效率工具

### ScreenKite：Swift 原生的免费录屏利器

体验碎片周刊 283 期推荐的 ScreenKite 是一个值得关注的 macOS 录屏工具。100% Swift 原生，基于 Metal GPU 加速和 Apple ScreenCaptureKit 框架，所有视频处理在本地完成。核心卖点是 AI Agent 集成——支持转录裁切、B-roll 生成，可与 Claude Code、Codex、Gemini CLI 协同使用。免费版功能完整，Pro 版年费约 40 美元。官方基准测试显示，同机器同录屏，ScreenKite 导出速度是 Screen Studio 的约 3 倍。

对于经常需要录产品 Demo、Bug 报告或教程的开发者和 PM 来说，这是一个比 OBS 简单、比 Loom 快、比 Screen Studio 便宜的选项。

🔗：[ScreenKite](https://www.screenkite.com/zh-CN)

---

### Animation Vocabulary：设计师给 AI 的动画词典

animations.dev/vocabulary 是 Emil Kowalski 做的一个交互式动画词汇表，包含 96 个动画术语和 78 个实时交互演示。核心洞察很直接：**AI 简报需要的是动画词汇，不是形容词**。当设计师说「让它更丝滑一点」或「更有呼吸感」的时候，AI 生成的结果往往不对。但如果换成「给这个列表加一个 stagger 效果，200ms 间隔，ease-out 曲线」，输出就会准确得多。

18 个分类覆盖了入场、退场、强调、反馈、加载、导航、手势、滚动、文字等动画模式。对于用 AI 编程工具做前端的开发者来说，这个词典可以直接变成 prompt 的一部分。

🔗：[Animation Vocabulary](https://animations.dev/vocabulary)

---

### AI 产品经理课程：从入门到精通的 67 页交互课件

xueai.app 上有一套开源的 AI 产品经理培训课程，67 页交互式幻灯片，浏览器直接打开，无需服务器。作者罗小山的理念是「优质的学习资料应该属于每一个想学习的人」。

课程分两部分：LLM 基础（Token、训练原理、GPT 演进、幻觉与缓解策略）和 AI 工程（上下文工程、Prompt 工程、Agent 工程、成本优化）。其中有几个框架特别实用：四层上下文压缩策略（60%/75%/85%/95% 四个阈值）、五层成本优化系统（声称可实现 70-90% 节省）、Agent 失败分类法（参数格式错误、幻觉工具、无限递归、信息不足、API 异常五种模式）。

最让人印象深刻的一句话是：「所有 AI 工程都只是在处理一个 message list。」理解了这个，所有下游的工程决策都变得可读。

🔗：[AI PM 课程](https://xueai.app/slides/llm-story.html) · [GitHub](https://github.com/itshen/learn-ai)（AGPL-3.0）

---

### Elasticsearch Agent Memory：持久化智能体记忆层

Elastic 在 HN 上分享了一个基于 Elasticsearch 的持久化 Agent 记忆层。记忆分三类：情景记忆、语义记忆、程序记忆，各存独立索引，设不同写速率和过期规则。召回采用 BM25 与 Jina v5 稠密向量的 RRF 融合，再经交叉编码器重排序。在 168 道 QA 评估中，R@10 平均 0.89，零跨租户泄漏。通过支持 MCP 协议的客户端访问，不绑定特定运行时，已开源。

这解决了 Agent 系统一个实际痛点：没有持久记忆的 Agent 每次对话都从零开始，无法积累上下文和知识。

🔗：[Elastic Blog - Agent Memory](https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch)

---

## 📊 本周 AI 热点速览

### 模型与产品

- **火山引擎上线豆包实时语音模型 3.0**（Seeduplex）API 服务，原生全双工端到端语音大模型，判停延迟缩短约 250ms，复杂场景抢话比例下降 40%。🔗：[公众号：火山引擎](https://mp.weixin.qq.com/s/L4BJnexabQu5DAxDnwEGxw)
- **阿里开源向量数据库 Zvec**，pip install 即用，对标 Pinecone 月费 70 美元能力，支持十亿向量毫秒级检索。🔗：[X](https://x.com/AYi_AInotes/status/2067832098816250346)
- **NVIDIA Research 发布 SpatialClaw**：免训练空间推理框架，将代码作为动作接口，20 项基准测试平均准确率 59.9%。🔗：[MarkTechPost](https://www.marktechpost.com/2026/06/19/nvidia-ai-introduce-spatialclaw-a-training-free-agent-that-treats-code-as-the-action-interface-for-spatial-reasoning)
- **美团 Tabbit 国际版**免费接入 GPT-5.5、Claude Opus 4.8、Gemini 3.5 Flash 等旗舰模型。🔗：[X](https://x.com/AYi_AInotes/status/2068637890247016607)

### 行业动态

- **AlphaFold 负责人 John Jumper** 离开 Google DeepMind，加入 Anthropic。Demis Hassabis 称过去 9 年的合作「改变了世界」。🔗：[X - Demis Hassabis](https://x.com/demishassabis/status/2068002732250640603)
- **NSA 局长称 Mythos 数小时内攻破几乎所有机密系统**，此前已在 5 天内破解 MacOS，而 Google Project Zero 完成同等攻击需 6 个月。🔗：[X](https://x.com/AISafetyMemes/status/2068718552174252477)
- **微软成为全球最大 AI 中间商**，既向中国企业卖 ChatGPT，也反向向西方客户卖 DeepSeek。🔗：[X](https://x.com/AYi_AInotes/status/2068218661710512231)
- **八部门联合发文力推「人工智能 + 消费」**，17 条举措覆盖 AI 手机电脑、智能家居、智能网联汽车。🔗：[IT 之家](https://www.ithome.com/0/966/295.htm)
- **我国首部 L3/L4 自动驾驶强制性国标公示**，2027 年 7 月起实施，要求系统安全水平至少达到「合格且专注驾驶人」。🔗：[IT 之家](https://www.ithome.com/0/966/272.htm)
- **皮尤民调**：63% 美国人认为 AI 发展太快，ChatGPT 使用率翻番至 44%。🔗：[IT 之家](https://www.ithome.com/0/966/233.htm)

### 论文与研究

- **MosaicLeaks**：深度研究 Agent 在结合私有文档与外部检索时存在隐私泄露风险，提出 PA-DR 训练方法将泄露率从 34% 降至 9.9%。🔗：[Hugging Face Blog](https://huggingface.co/blog/ServiceNow/mosaicleaks)
- **OpenAI 强化学习实现广泛且持久的有益模型**：有益特质 RL 训练后的模型泛化到未参与训练的领域，且难以被对抗性提示导向有害行为。🔗：[OpenAI Alignment Blog](https://alignment.openai.com/beneficial-rl)
- **Nature 两篇研究**：MIRA 诊断准确率 88.9% 高于医生 78.1%，AMIE 治疗计划适切率 95% 高于医生 72%，但均警告模拟环境与现实存在差距。🔗：[The Decoder](https://the-decoder.com/ai-systems-rival-doctors-in-new-nature-studies-but-one-result-suggests-the-tech-wont-age-well)
- **DeepSeek 研究员开源 AutoResearch**：AI 自主跑通 285B 模型 RL 研究闭环，全程零人工干预。🔗：[X](https://x.com/AYi_AInotes/status/2067819352926150953)

---

## ✨ 随便看看

- **AgenTank**：两天做出来的 AI 坦克对战游戏，玩家用 prompt 生成代码控制坦克，服务器月成本不到 100 元。🔗：[公众号](https://mp.weixin.qq.com/s?__biz=MzYzNTkyMTI2Ng==&mid=2247573787&idx=2&sn=66587bb741dcd16477aeb8d9e7ea5da7)
- **Gotcha**：iOS App，把拍到的动物变成收藏卡牌，有稀有度分级。把遛弯变成宝可梦。🔗：[Gotcha](https://gotcha.jurre.me/)
- **StonkRider**：把历史 K 线图变成摩托越野赛道，大涨是陡坡，暴跌是悬崖。🔗：[StonkRider](https://stonkrider.com/)
- **Recent Design**：手工从 X/Twitter 上捞高质量设计作品，绕开算法噪音。🔗：[Recent Design](https://recent.design/)
- **Cantclone**：反爬工具，阻止 AI 插件把网站直接克隆进 Figma。🔗：[Cantclone](https://cantclone.com/)
- **Hardware Traffic Light**：DIY 硬件红绿灯，监控 Claude Code 是在跑任务还是在摸鱼。🔗：[掘金](https://juejin.cn/post/7648054502554779698)
- **flomo AI 记忆功能**：新增用户身份生成和动态 Markdown 摘要，让碎片笔记有了「AI 档案」的感觉。🔗：[公众号](https://mp.weixin.qq.com/s?__biz=MzI0MDA3MjQ2Mg==&mid=2247490563&idx=1&sn=b4894732f897707548c5d62a275be94d)
- **潮流周刊 Tw93 的自我定位**：我不是网红，不是自媒体，不是 KOL，我做的是一本持续进化的「工程师杂志」。靠读者信任而非广告活着。🔗：[潮流周刊 270](https://weekly.tw93.fun/posts/270)

---

*数据来源：[aihot.virxact.com](https://aihot.virxact.com)、[体验碎片](https://www.ftium4.com)、[潮流周刊](https://weekly.tw93.fun)*
