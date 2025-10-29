---
layout: post
title: 关于 AI Native
date: 2023/08/27 20:00:00
categories:
  - 技术
tags:
  - 原生产品
  - 交互重构
  - 数据重构
  - 决策让渡
  - 交易重构
description: "文章阐述AI原生与AI基础的区分，强调AI原生在产品设计与开发中居于首要位置，交互从图形界面转向自然语言、数据从结构化转向非结构化、决策权从用户转移给AI、以及交易模式由信息撮合转向直接服务，标志着AI 2.0时代的智能化分发。"
---

![Ways to add AI to a system](https://pics.naaln.com/blog/2023-08-26-be4f2e.svg-basicBlog)

图片来源 [^1]

- AI-based：利用 AI 提供新功能的现有产品，AI 是一个附加组件（refers to existing products that implement AI to offer new features to users. It’s basically an add-on. ）
- AI Native：产品的内核是 AI，如果没有 AI，产品将不存在 (refers to products with AI embedded into their core. In other words, if AI wasn’t a part of the product, the product wouldn’t exist. [^2]

## AI First

AI Native 与 AI Based 产品的最显著区别是，AI Native 的产品和服务在设计和开发过程中，将 AI 放在首位。

从用户适应产品到产品适应用户。（典型的例子，传统产品是产品上设计了一大堆功能，需要用户学习，在新的 AI Native 时代，打破使用流程上的步骤，最直接的促成需求端和实现端的达成。）

### 1. 交互的重构

在新的产品形态下，原来古典产品经理依赖的图形界面的交互形式将被打破，复杂的图形交互过程变成了语言交互。PC 端将远离键盘鼠标的操作体验，手机端的触摸、捏合等操作也将被重新解构。

对于原来 Photoshop 复杂的键鼠操作，变成了语言的表述。对于用户而言，对产品细致颗粒（高光、虚化、模糊等）概念理解不再存在，转而由人机对话的 Promote 替代。[^3]

**[Firefly](https://www.adobe.com/sensei/generative-ai/firefly.html)**
- [Adobe Firefly: Family of New Creative Generative AI Models](https://www.youtube.com/watch?v=DvBRj--sUMU)

**[Runway](https://runwayml.com/)**
- [Text to Video | Runway](https://youtu.be/trXPfpV5iRQ?si=i3YUADBo5j5LIJX9&t=36)

### 2. 数据的重构

结构化的数据获取和处理方式也将被重新定义。过去为了数据结构化，而人为迁就流程化的操作流，以及一系列的输入框都将被抛弃，取而代之的是非结构化的输入以及上下文的理解。

过去互联网社会的发展，人们通过产品或自身的约定来提高数据产品的稳定性，究其还是人类行为向程序妥协。但是在 AI First 背景之下，产品回归到产品，结构化的产品设计理念也可能被重写。

[ChatGPT](https://chat.openai.com/)，就放弃传统产品设计上输入结构，在一个大输入框内完成所有的上下文信息（且是非约定的信息要素），在返回端也是非结构的信息逻辑。

### 3. 决策权的重构

在 AI 2.0 的产品形态下，用户将尽可能少的与产品发生交互，以至于 AI Native 将从头到尾的完成工作，用户的产品操作决策权将让渡给 AI。

很多 AI 产品逐步体现出他的推演能力，比如 Auto-GPT，在接受到用户需求后，他可以自发的思考这个需要所需要的依赖的外部工具，比如搜索，网页等，并在依赖工具串联完成工作。

![LLM 调用外部工具的应用模式](https://pics.naaln.com/blog/2023-08-27-211d23.webp-basicBlog)

图片来源 [^4]

[ACT-1](https://www.adept.ai/blog/act-1)，David Luan 所构建 ACT 模型，就希望打破互联网虚拟世界与现实世界的隔阂。
- [Next After ChatGPT](https://blog.naaln.com/2023/08/next-ChatGPT/)

[Auto-GPT](https://github.com/Significant-Gravitas/Auto-GPT)
- [The Official Auto-GPT Website](https://news.agpt.co/#demos)

### 4. 交易模式的重构

传统互联网的巨头都是从混沌中创造秩序的「熵贩子」。[^5]

- 谷歌：是对互联网信息的减熵
- 淘宝：是对商品撮合交易的减熵
- Uber：是对司机和乘客撮合的减熵

笼统来说，都是通过互联网实现了对信息的低成本分发，而 AI 2.0 将实现对智能的低成本分发。[^6] 可以预见传统的信息平台将从组织、撮合变成直接提供服务。

[Sidekick](https://www.shopify.com/hk-en/magic)
- [Meet Sidekick: Our AI-powered assistant for merchants](https://youtu.be/HVvbY7A7lIQ?si=IhIwgT53jwafB086&t=75)

---

**参考阅读**

[^1]: [Defining AI native: A key enabler for advanced intelligent telecom networks](https://www.ericsson.com/en/reports-and-papers/white-papers/ai-native)
[^2]: [Become AI Native: What It Means (& How to Do It) | Copy.ai](https://www.copy.ai/blog/ai-native)
[^3]: [拾象大模型及OpenAI投资思考](https://mp.weixin.qq.com/s/AxX-Q7njegNTAxMkYFwsfA)
[^4]: [AutoGPT与LLM Agent解析](https://zhuanlan.zhihu.com/p/622947810)
[^5]: [L31_利润转化价值链](https://blog.naaln.com/2023/07/newsletter-31/#聚集与熵理论)
[^6]: [AI 2.0 与基础模型应用](https://aliyuque.antfin.com/longxiang.long/pfk0oa/qmibrvmkiec6l9hf#EnHiD)
