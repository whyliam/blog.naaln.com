---
layout: post
title: L64_开源浪潮与技术迭代重塑AI格局
date: 2025/04/11/ 20:00:00
categories:
  - 资讯
tags:
  - NewsLetter
---
![开源浪潮与技术迭代重塑AI格局](https://pics.naaln.com/2025-04-13-b89d518e5b0542ee86ce0ab02797b11e.png-basicBlog)

过去一周，AI 领域呈现出技术快速迭代、开源生态繁荣发展的态势。DeepSeek 引领开源浪潮，OpenAI 宣布开源新模型计划，Gemini 持续迭代更新，Anthropic 的 Claude 模型在代码能力上表现出色，AI Agent 能力呈现「摩尔定律」式增长，Prompt 工程成为 AI 交互的关键技术。
这些发展表明，AI 技术正以前所未有的速度向前推进，开源生态日益繁荣，技术融合不断深化，应用领域持续拓展。随着中美 AI 大模型性能差距的缩小，全球 AI 竞争格局正在重塑，中国在 AI 领域的影响力正在提升。
未来，随着 AI 技术的不断发展和普及，我们将看到更多创新应用的出现，AI 将为各行各业带来更深远的变革，推动社会生产力的提升和人类文明的进步。

## 一、中美 AI 大模型性能差距大幅缩小

斯坦福 HAI 研究所发布的《2025 年人工智能指数报告》显示，中美顶级 AI 大模型性能差距已大幅缩小至 0.3%，接近抹平 [^1]。报告评选出 2024 年全球 61 个重要 AI 大模型，其中谷歌、OpenAI 和阿里分别入选 7 个、7 个和 6 个 [^1]。
这一差距的显著缩小主要归功于中国 AI 技术的快速发展。开源模型在 2024 年迎头赶上，顶尖开源模型与顶尖闭源模型之间的差距大幅减小。2024 年 1 月初，领先闭源模型的表现比顶级开源模型高出 8.0%，而到 2025 年 2 月，这一差距已大幅缩小 [^2]。

## 二、DeepSeek 引领开源 AI 浪潮

### DeepSeek 的崛起与技术优势

DeepSeek 凭借其出色的成本效益、惊人的推理速度以及开源生态，迅速崛起成为 AI 领域的明星产品。2025 年 2 月，DeepSeek 的访问量达 5.25 亿次，超过 ChatGPT 的 5 亿次，市场份额达到 6.58%，仅次于 ChatGPT(43.16%) 和 Canva(8.27%)[^3]。
DeepSeek 的技术优势主要体现在以下几个方面：
1. **成本效益**：DeepSeek V3 的完整训练仅需 2.788M H800 GPU 小时，训练过程仅用约 2000 张二流芯片，大幅降低了 AI 开发成本 [^4]。
2. **性能卓越**：在教育类基准测试中，DeepSeek-V3 的表现超越了所有开源模型，在 MMLU、MMLU-Pro 和 GPQA 测试中分别获得了 88.5、75.9 和 59.1 的优异成绩，性能已与领先闭源模型 GPT-4o 相当 [^5]。
3. **全面的开源生态**：DeepSeek 的开源项目几乎覆盖了 AI 基础设施的方方面面，包括存储 (3FS)、计算 (DeepEP)、通信 (smallpond)、数据处理 (FlashMLA) 等 [^6]。

### DeepSeek 的影响力

DeepSeek 的影响力已经突破了技术圈层，直抵社会大众，成为热议高频词。在刚刚结束的全国两会上，人大代表、政协委员也纷纷讨论相关话题 [^7]。
DeepSeek 的成功证明了开源不一定比闭源差，这种开源模式不仅降低了 AI 技术的使用门槛，还迅速扩大了其全球影响力 [^8]。DeepSeek 的开源生态不仅吸引了全球开发者社区的广泛参与，还加速了技术的迭代和生态系统的建设 [^9]。

## 三、OpenAI 开源新模型计划

### OpenAI 的重大宣布

2025 年 4 月 1 日，OpenAI CEO Sam Altman 在社交平台 X 上公开宣布：OpenAI 计划在未来几个月内发布一个强大的开源大模型 [^10]。这是自 2019 年 GPT-2 之后，OpenAI 首次回归开源初心。
这一决定被视为对 DeepSeek 崛起的回应，有评论称这是 OpenAI「摸着 DeepSeek 过河」[^11]。Altman 的这一宣布被媒体形容为扔出了一枚「核弹」[^12]，显示了 OpenAI 对开源生态重要性的认识。

### OpenAI 近期产品路线图

除了开源计划，OpenAI 还调整了新模型发布计划：
1. o3 和 o4-mini 将在几周内发布，在多个方面大幅改进了预览版本的 o3
2. GPT-5 将在几个月内发布 [^13]
此外，OpenAI 的 o1 类模型在 2025 年第一个月密集更新，网易有道等公司也推出了类似产品，如「子曰 -o1」[^14]。这些 o1 类模型采用了思维链技术，能够提供细致解题过程，展现出强逻辑和推理能力 [^15]。

## 四、Gemini 持续迭代更新

### Gemini 2.0 系列的快速迭代

谷歌在 2025 年 3 月和 12 月连续发布了 Gemini 2.0 和 2.5 版本，显示了其在 AI 领域的快速迭代能力。与此前的 1.5 Flash 版本相比，Gemini 2.0 Flash 在同样快速的响应时间下性能进一步增强 [^16]。
谷歌在短短三个月内就从 Gemini 2.0 升级到 2.5 版本，这种快速迭代的速度令人瞩目。2025 年 3 月 25 日，谷歌宣布 Gemini 2.5 正式推出，再度刷新了行业多项基准测试记录。这已是谷歌在短短三个月内发布的第二个大型 AI 模型，也是其近一个月内发布的第三个版本 [^17]。

### Gemini 2.0 的核心优势

Gemini 2.0 的核心优势主要体现在：
1. **多模态智能体构建**：谷歌表示，基于此前多模态方面的进展，Gemini 2.0 能够构建新的 AI 智能体，从而离通用助手的愿景更进一步 [^18]。
2. **多模态处理能力**：Gemini 2.0 能够实时接收文字、语音、图像、视频信息并进行推理反馈，是一个 All in one 自带 Agent 架构的多模态模型 [^19]。
3. **性能提升**：Gemini 2.0 在关键基准测试中甚至超越了此前的旗舰模型 1.5 版本 [^16]。

## 五、AI Agent 能力呈现「摩尔定律」式增长

### AI Agent 能力的指数级增长

AI 独立研究机构 META 的分析发现，AI Agent 能够完成的任务长度正以指数级增长，大约每 7 个月翻一番 [^20]。Nature 杂志也报道了这一「智能体摩尔定律」，指出 AI 在完成长期任务方面的进步速度惊人，其时间跨度大约每七个月翻一番 [^21]。
这一发现表明，AI 智能体的能力正在呈指数级增长，预计到 2029 年，AI Agent 将能够完成时长为 1 个工作月的任务 [^20]。从 2019 年以来，AI 模型的时间跨度能力呈现指数级增长，这一趋势预计将持续下去。

### AI Agent 的未来展望

随着 AI Agent 能力的快速增长，我们可能会看到以下发展趋势：
1. **通用 AI 助手的出现**：Gemini 2.0 等模型已经能够构建新的 AI 智能体，使通用 AI 助手的愿景越来越近 [^18]。
2. **AI 在复杂任务中的应用**：随着 AI Agent 能力的提升，它们将能够处理更复杂、更长时间的任务，从简单的问答到复杂的推理和决策。
3. **AI 与人类协作的新模式**：AI Agent 将不再是被动的响应工具，而是能够主动思考、学习和执行任务的智能体，与人类形成更深层次的协作关系。

## 六、Anthropic Claude 模型的突破

### Claude 3.7 Sonnet 的推出

2025 年 2 月 25 日，由亚马逊支持的 AI 初创公司 Anthropic 推出了首个混合推理模型 Claude 3.7 Sonnet。它可以产生近乎即时的反应和对用户可见、可扩展的逐步思考 [^22]。

### Claude 3.7 Sonnet 的技术优势

Claude 3.7 Sonnet 在技术上具有以下优势：
1. **混合推理能力**：它结合了即时反应和可扩展的逐步思考能力，为用户提供更透明、更可控的 AI 体验。
2. **代码能力卓越**：根据 SWE Bench 测试数据显示，Claude 3.7 在代码能力方面大幅度超过了 DeepSeek-R1、OpenAI 的 o1、o3 模型 [^23]。
3. **价格合理**：Claude 3.7 Sonnet 的价格与其前代大模型 Claude 3.5 Sonnet 相同：每百万输入 token 3 美元 [^24]。
Anthropic 还在未来几周内发布了「混合 AI」模型，具有独特功能，如客户可控制查询算力。在编程方面有显著进展，特定情况下表现甚至超过了 OpenAI 的推理模型 [^25]。

## 七、Prompt 工程成为 AI 交互的关键

### Prompt 工程的重要性

在人工智能交互领域，Prompt 工程已成为决定 AI 交互效果的关键因素。当前 AI 技术已具备较高水平，用户与模型的交互效能本质上取决于提示词工程（Prompt Engineering）[^26]。
谷歌发布了 69 页白皮书，详细介绍了如何通过提示工程优化 AI 模型。白皮书中指出，通过精心设计的提示，用户可以引导模型完成从简单问答到复杂推理的多种任务 [^27]。

### Prompt 工程的核心技术

Prompt 工程的核心技术包括：
1. **Role 角色**：系统 (system)、用户 (user)、助手 (assistant) 等角色的设计对模型输出有重要影响。
2. **Message 多轮会话记忆机制**：多轮对话中的记忆机制能够保持上下文的连贯性，提高交互效率。
3. **Prompt 设计原则**：精心设计的 Prompt 能够引导模型产生更准确、更有意义的输出 [^28]。
随着 AI 技术的发展，Prompt 工程已成为「2025 年 AI 时代的超能力」，是有效使用大模型的关键技术 [^26]。

## 八、中国 AI 大模型的快速发展

### 国产大模型的崛起

近期，国产 AI 大模型的显著进步引发全球关注。从微观层面看，我们可以向大模型提问获取答案或者让它撰写文稿，将大模型逐渐嵌入手机等智能终端，发展辅助工作等应用 [^29]。

### 中国 AI 大模型的市场表现

2025 年 3 月 25 日，广东省人工智能与机器人产业创新发展领导小组办公室召开新闻发布会，发布了 8 个 AI 行业大模型、30 个应用场景、29 个应用案例和 10 个产业园区 [^30]。这表明中国在 AI 大模型应用方面取得了显著进展。

## 九、AI 技术的未来趋势展望

### 技术融合与生态建设

随着 AI 技术的快速发展，我们可能会看到以下趋势：
1. **开源生态的繁荣**：DeepSeek 和 OpenAI 的开源计划将推动 AI 开源生态的繁荣发展，吸引更多开发者参与 AI 技术的创新和应用。
2. **技术融合**：大模型的参数规模越来越大，文图视等方面的多模态能力也越来越强 [^31]。未来，我们将看到更多多模态、多功能的大模型。
3. **AI 与实体经济的深度融合**：AI 技术将与更多行业深度融合，创造新的应用场景和商业模式。

### AI 应用的普及与普惠

AI 正变得更高效、更普惠。根据斯坦福 HAI 报告，推理成本大幅下降，小模型性能飙升 [^32]。这将使 AI 技术能够惠及更广泛的人群和行业，推动数字化转型和智能化升级。

## 参考资料

[^1]: 斯坦福最新报告：中美顶级大模型性能差距缩小至 0.3% - 科技日报. https://www.stdaily.com/web/gdxw/2025-04/10/content_322580.html
[^2]: 重磅报告出炉！性能近乎持平，但美国 AI 投资是中国 12 倍 - 证券时报. http://stcn.com/article/detail/1650702.html
[^3]: 月访问量超 ChatGPT DeepSeek 正在重新定义 AI 竞赛 - 新浪财经. https://finance.sina.com.cn/stock/wbstock/2025-04-01/doc-inerrnxq7462899.shtml?froms=ggmp
[^4]: 我在硅谷看 AI：Deepseek 狂飙背后，2025 年 15 条 AI 关键投资启示 -36 氪. https://m.36kr.com/p/3157157338340103
[^5]:【LLM 技术报告】DeepSeek-V3 技术报告（全文） - 知乎专栏. https://zhuanlan.zhihu.com/p/14890557782
[^6]: DeepSeek 开源生态解析：从 3FS 到 AGI 基础设施的野心 - 知乎专栏. https://zhuanlan.zhihu.com/p/27565179840
[^7]: 新华深读丨 DeepSeek 赋能潮起. http://www.news.cn/fortune/20250321/9220aa12e2364e21a69ab5eb691a33d1/c.html
[^8]: DeepSeek 开源影响几何？ - 证券时报. https://www.stcn.com/article/detail/1534277.html
[^9]: DeepSeek 爆火的背后，大模型/生成式 AI 市场生态的潜在影响引人关注. https://www.idc.com/getdoc.jsp?containerId=prCHC53185925
[^10]: OpenAI，重磅官宣！ - 每日经济新闻. https://cd.nbd.com.cn/articles/2025-04-01/3814116.html
[^11]: 官宣开源新模型！OpenAI 终于要摸着 DeepSeek 过河了 - 澎湃新闻. https://m.thepaper.cn/newsDetail_forward_30546004
[^12]: DeepSeek 逼出了大招，OpenAI 预告开源大模型，GPT-2 后首次. https://wallstreetcn.com/articles/3744320
[^13]: OpenAI 将在几个月内发布 GPT-5 - 开源中国. https://www.oschina.net/news/343249
[^14]: 密切跟进 OpenAI，国产 o1 类推理模型陆续登场 - 证券时报. https://www.stcn.com/article/detail/1508804.html
[^15]: 网易有道推出轻量级推理模型「子曰 -o1」，更小规模实现更强推理效果. https://www.qbitai.com/2025/01/247195.html
[^16]: 谷歌 AI 狂飙突进的两年：从追赶到领跑，它还是没摆脱焦虑. https://www.mittrchina.com/news/detail/14604
[^17]: 谷歌深夜炸场发布 Gemini 2.0，2025 属于智能体之年？ - 第一财经. https://www.yicai.com/news/102397405.html
[^18]: 谷歌深夜炸场发布 Gemini 2.0 2025 属于智能体？ - 新浪财经. https://finance.sina.com.cn/jjxw/2024-12-13/doc-inczfsee9435494.shtml
[^19]: 国内外知名大模型及应用列表——模型维度（2025/04/11）. https://zhuanlan.zhihu.com/p/670574382
[^20]: AI Agent 摩尔定律：每 7 个月能力翻倍，带来软件智能大爆炸 - 53AI. https://www.53ai.com/news/LargeLanguageModel/2025041114983.html
[^21]: Nature 发文「智能体摩尔定律」，Agent 能力每 7 个月翻倍 - 澎湃新闻. https://www.thepaper.cn/newsDetail_forward_30454678
[^22]: Anthropic 推出混合推理模型，可控制模型思考时间 - 新闻 - 科学网. https://news.sciencenet.cn/htmlnews/2025/2/539326.shtm
[^23]: Anthropic 大动作，发布首个双思维模型，代码能力超过 DeepSeek. https://www.stcn.com/article/detail/1543723.html
[^24]: Anthropic 发布首个混合推理模型 Claude 3.7 Sonnet：编码能力一流. https://finance.sina.com.cn/tech/roll/2025-02-25/doc-inemsfys0095285.shtml
[^25]: Anthropic 秘密「混合模型」Claude 4 首曝细节，硬刚 GPT … - 新浪财经. https://finance.sina.com.cn/tech/csj/2025-02-14/doc-inekmitk7538892.shtml
[^26]: 写好 Prompt 仍是 2025 年 AI 时代的超能力 - 腾讯新闻 - QQ News. https://news.qq.com/rain/a/20250330A0695H00
[^27]: 谷歌发布 69 页白皮书：如何通过提示工程优化 AI 模型 - AIbase. https://www.aibase.com/zh/news/www.aibase.com/zh/news/17051
[^28]: AI 大模型进阶系列 (03) prompt 工程指南| 实战核心技术有哪些？. https://developer.aliyun.com/article/1660390
[^29]: 人人关注的中国 AI 大模型发展得怎么样了 - 新闻频道. http://news.cnwest.com/szyw/a/2025/02/28/23012564.html
[^30]: 一大波产品「上新」广东发布 8 个 AI 行业大模型、30 个应用场景. https://news.dayoo.com/guangdong/202504/09/139996_54810103.htm
[^31]: 2025 年，人工智能如何进化 - 新闻频道 - 央视网. https://news.cctv.com/2025/01/05/ARTIemzgpxHcci59S0s4M0VQ250105.shtml
[^32]: 2025 年斯坦福 HAI 报告：中美 AI 模型差距骤缩至 0.3%，推理成本暴降 …. https://wallstreetcn.com/articles/3744827
