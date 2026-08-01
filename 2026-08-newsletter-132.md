---
title: L132_把模型放对位置
date: 2026/08/01 10:00:00
categories:
  - Notes & Reflections
tags:
  - Newsletter
  - AICoding
  - Workflow
  - Infrastructure
description: 大家都在把什么都丢给大模型，却很少算过账——那只是把「读不完」的成本换成了「账单读不完」。当算力可能涨十倍，真正的手艺是把 LLM 放对位置：让它定义标准而不是每天执行标准，去噪去重排序交给便宜稳定的「古法 AI」。省下的从来不是模型，是位置。
created: 2026-07-31 10:31:51
updated: 2026-07-31 14:36:12
series: Newsletter 周刊
---
![](https://pics.naaln.com/2026-07-31-c104fbf3df1500214f3940e7fb51eca0.webp-basicBlog)

这周读到曹政（caoz）一篇文章，标题很朴素——《善用「古法 AI」，能帮你省下很多 Token》，但读完我盯着屏幕坐了一会儿。

他讲的是一件几乎所有人都在做、却很少有人算过账的事：这两年冒出来一大堆「个性化信息系统」——AI 日报、舆情监控、行业雷达、私人头条。它们的实现套路惊人地一致：把每一篇文章都塞给大模型，问它「这篇和我关心的主题相关吗？」。听起来很智能，对吧？caoz 却一句话戳破了：**「很多所谓 AI 信息系统，并没有解决信息筛选问题。它们只是把人工阅读的成本，改写成了模型调用的成本。」**

算一笔账你就懂了：500 篇文章 × 5 个主题 = 2500 次判断，复杂度 O(N×M)。就算你聪明地合并成一次请求让它返回 JSON，输入的 token 一个都没少，反而更容易漏判、串题。你以为自己在用 AI 省力，其实只是把「读不完」的焦虑，换成了「账单读不完」的焦虑。

—

而就在同一周，Dwarkesh Patel 抛出一个判断：**未来算力价格可能上涨 10 倍以上。** 这两件事叠在一起，忽然有了某种紧迫感——如果我们习惯了「什么都丢给大模型」的奢侈，而算力的价格又要翻十倍，那今天这套「大力出奇迹」的用法，明天可能就是账单上一道血淋淋的口子。

所以这一期我想聊的，不是「模型又变强了」，而是一个更冷静、也更像手艺人的话题：**怎么把大模型放到它该在的位置上。** caoz 的答案漂亮得让我想鼓掌——省 token 靠的根本不是「用小模型替代大模型」，而是靠**架构**。他把「这篇文章相关吗」这道阅读理解题，改写成了一道几何题：「这篇文章离主题有多近？」用 Embedding 把文本变成向量，算个余弦相似度，超过阈值就命中。大模型只在**第一次**订阅主题时出场一次，生成几条正向、负向范文，固化成向量，之后就再也不用惊动它了。他管这叫——**「让 LLM 定义标准，而不是每天执行标准。」**

这句话我准备裱起来。因为它几乎可以套用到今天所有「Agent 工程」的浪费上。caoz 还有一句更狠的：**「很多 Harness 的浪费，不是模型太贵，是模型摆错了位置。」** 是啊，我们总在抱怨 token 太贵、模型太笨，却很少反省：是不是我们让它蹲在了入口做全量安检，而它本该只负责最后一公里？

去噪、去重、排序这些活儿，前 LLM 时代的「古法」早就解得又快又好又便宜——Embedding、BM25、n-gram、聚类、MMR、FTRL。caoz 给「Vibe Coding 一代」的建议特别恳切：这些旧技术「不如大模型性感，但便宜、稳定，出了问题也知道该从哪里查」，值得补课。他甚至留了个玩笑收尾：「如果你看不懂本文，也可以直接把它发给你的 Vibe Coding Agent 说：我不想接 LLM 了，你看看这个方案行不行。」——你看，连「怎么少用 AI」这件事，最后都能交给 AI 去落地，这时代真是荒诞又可爱。

---

## 📚 深度阅读

### 善用「古法 AI」，能帮你省下很多 Token —— caoz

上面已经聊了核心，这里再补几个我觉得最有「手艺感」的细节，值得做信息系统的人细看。

一是**「Embedding 不是推荐系统，它只是地图。」** caoz 很诚实地指出 Embedding 的短板：它会错过公司名、人名、缩写、新词。所以他的个人日报「邸报」并不迷信向量，而是混合打分——语义相似度 + BM25 精确词项 + 新鲜度 + 来源偏好，再减去重复惩罚、过度曝光惩罚，最后用一个类 MMR 的重排保证多样性。这套组合拳里，大模型几乎不出现。二是**「能用一行 `if 关键词 in 文本` 解决的问题，就不要召唤一块显卡。」** 像「融资 / 股价 / IPO」这种噪声，他直接用字符串硬过滤，干净利落。三是他坦白开头「今日头条」的类比其实对不上——大平台的推荐主力是协同过滤和整套召回排序，本文讲的只是上一代推荐系统的「边角技术」；但对没有数亿用户行为矩阵的个人日报来说，「边角技术」已经绰绰有余。

这篇的价值不在某个具体算法，而在那种**克制**：不是「能不能用 AI」，而是「这一步到底值不值得惊动 AI」。在一个人人都想把 LLM 塞进每个环节的年份里，这种克制稀缺得像一门快失传的手艺。（他还开源了 FreshRSS-AutoLabel 和自部署的「邸报」，链接见下面工具区。）

🔗：https://1q43.blog/post/12539/

---

### 潮流周刊 275「蓝色黄昏」—— tw93

如果说 caoz 讲的是「让模型退出主循环」，tw93 这期几条随手记，恰好在讲另一面——**怎么把模型放在对的位置上、用对的姿势喂它。**

我最喜欢 Karpathy 分享的「口喷式」用法：靠在椅背上，切到语音输入，漫无边际地讲十分钟，再让 LLM 重新整理。他说 **「LLM 很擅长从这种又长又乱的絮叨里把内容重新整理出来，它复述回来的版本，往往比你自己讲的那一遍清楚得多。」** 这其实是把 LLM 放在了它最擅长的位置——不是替你思考，而是替你「结构化」你已经想到的东西。低成本的语音输入负责「量」，模型负责「整理」，人负责「判断」，分工干净。

另一条是 Dan Shipper 一周实测 Claude Opus 5 后的吐槽：它「对抗指令、过早停止」，他形容是 **「穷人版 Fable，有天才模型的脾气却没有天才的上限」**；有意思的是，他的解法是**删掉旧 skills 重建**——工具再强，摆错了配置也是负资产。这又绕回 caoz 那句「摆错了位置」。至于 Latent Space 那篇《5 Trends That Defined AI Engineering at World's Fair 2026》，把 Harness、Loop、Skills、企业部署、Coding Agents 串成了一条路线图，想搭 Agent 工程的人值得对照着看。

🔗：https://www.latent.space/p/aiewf26trends

---

## 🤖 AI 观察：算力要涨十倍，于是「省」成了新的性感

顺着「把模型放对位置」这条线，这周有一串新闻，其实都在讲同一个词——**效率**。当 Dwarkesh 预言算力价格可能涨 10 倍以上，「怎么用更少的算力办同样的事」就从工程师的洁癖，变成了所有人的生存技能。

🔗：https://www.dwarkesh.com/p/why-compute-might-get-10x-more-expensive

最能说明问题的，是 OpenAI 自己披露的一件小事：**只调整两项 API 设置，就让 GPT-5.6 在 ARC-AGI-3 基准上的得分提升了三倍。** 没有换模型、没有加算力，纯靠「用对姿势」。这跟 caoz 的架构思路是同一种智慧——**同样的模型，摆在对的位置、配上对的参数，产出可以差好几倍。** 配套地，OpenAI 还发文讲《GPT-5.6 如何推进性价比前沿》，OpenRouter 顺势下调了 GPT-5.6 的价格。

🔗：https://openai.com/index/how-two-settings-tripled-our-arc-agi-3-scores ｜ https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6

另一条战线是「把大模型塞进小机器」。腾讯混元开源了 **AngelSpec 投机解码框架**（用小模型猜、大模型验，压推理成本）；社区里则有人在 M1 Max 上硬跑 **2.8T 参数的 Kimi K3**（Deltafin 项目，慢到 0.0687 token/s，但它跑起来了），还有引擎能在任意 M 系列 Mac 上用 2GB 内存跑 **Gemma 4 26B**。这些看着像极客的自娱自乐，但方向和 caoz 一致：**当算力变贵，「榨干每一分算力」本身就是竞争力。**

🔗：https://x.com/TencentHunyuan/status/2082447023626944936 ｜ https://github.com/gavamedia/deltafin ｜ https://github.com/drumih/turbo-fieldfare

---

## 🛠️ 效率工具

这期工具我特意挑了几个「帮你把活儿放对位置」的。

**clawk** —— 给你的 Coding Agent 一台一次性 Linux 虚拟机。当你想用 `--dangerously-skip-permissions` 放手让 Agent 干活，又怕它误删文件、泄露密钥时，把它关进一次性沙盒里，是最省心的「隔离位」。
🔗：https://github.com/clawkwork/clawk

**peek-cli** —— 让 Coding Agent 直接对任意已打开的浏览器标签页截图。前端调视觉、迭代设计时，让模型「看得见」页面，比你复制粘贴描述半天高效得多。
🔗：https://github.com/puffinsoft/peek-cli

**Bento** —— 把在线 PPT / 演示塞进一个 HTML 文件：动画、视频、网页统统封装进单文件，它同时是文档、编辑器和播放器，也很适合让 AI 持续编辑迭代。
🔗：https://github.com/nyblnet/bento

**FreshRSS-AutoLabel / 邸报** —— caoz 那套「古法 AI」的开源落地：前者是低成本 FreshRSS 自动分类插件（Embedding + 范文 + 阈值），后者是可自部署、数据不出站、仅需一个 0.6B Embedding 模型、API 账单归零的个人日报。想给自己搭个不烧钱的信息雷达，从这两个抄起。
🔗：https://github.com/Pls-1q43/freshrss-autolabel ｜ https://dibao.app

**Icon Animator** —— 在线把 Lucide 线性图标做成动效并导出 SVG。小而美，做微交互的顺手工具。
🔗：https://www.iconanimator.app

**nowdex** —— 一个 Apple 小组件，专盯 Codex / Claude Code / Grok 这些编程助手的额度用量。都要为算力精打细算了，先从「看得见自己烧了多少」开始。
🔗：https://apps.apple.com/cn/app/nowdex/id6791450777

---

## ✨ 随便看看

- **Window Swap**：随机打开世界上某个人家窗外的风景，可一直切换。tw93 拿它当壁纸，我拿它当喘口气的开关。https://www.window-swap.com/Window
- **Kaku 终端**：tw93 自研、基于 WezTerm 的开源 Mac 终端，主打 AI 友好、默认好看、性能好，已更新到 v23（CMD+L 直接唤起 AI 聊天面板）。https://kaku.fun
- **Seedance 2.0 技能操作系统**：把创意想法翻译成 Seedance 提示词的 skill 合集，内含 27 个子技能，做 AI 视频的可以省下不少调参的功夫。https://github.com/Emily2040/seedance-2.0
- **Google Earth 集成 Nano Banana 2**：现在可以在地图上直接生成图像了，虚实边界又模糊了一分。https://x.com/GoogleAI/status/2082902334984609936
- **Martha Stewart 联合创办 AI 公司 Hint**：给房主的家居管理 AI 助手——连生活方式偶像都下场做垂类 Agent 了。https://techcrunch.com/2026/07/29/hint-a-new-ai-startup-co-founded-by-martha-stewart-offers-an-ai-assistant-for-homeowners
- **SpaceXAI 起诉明尼苏达州**：反对该州的「AI 脱衣」应用禁令——AI 治理的边界正在法庭上一寸寸地划。https://www.ithome.com/0/983/298.htm
