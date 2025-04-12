---
layout: post
title: L55_你又在绘制新的航线了吗
date: 2025/02/07/ 20:00:00
categories:
  - 资讯
tags:
  - NewsLetter
---

![你又在绘制新的航线了吗](https://pics.naaln.com/3hqSpD3syMtD23gRRSnmF79.png-basicBlog)

## 随便看看

#### 在预训练阶段，Scaling Laws 的效果逐渐放缓，但在后训练和多模态模型中，数据的 Scaling 仍有巨大潜力

在模型的预训练阶段，Scaling Laws 的效果确实有所放缓，但在后训练和多模态模型的场景下，数据的 Scaling 仍然有显著的提升空间。有研究员从 Scaling 的原理出发，认为模型在第一阶段的性能提升依赖于从小模型到大模型的「非线性到线性」转变。然而，当模型已经足够大时，这种转变的效果难以预测，预训练的效果可能会趋于瓶颈。尽管如此，研究员们并不认为预训练的 Scaling Laws 已经完全结束，尤其是在多模态模型中，数据的 Scaling Laws 仍有许多未被探索的领域。目前，许多公司选择大力投入后训练，主要是出于性价比的考虑。

[干货分享：一场OpenAI、NVIDIA、Anthropic、Google研究员的新年硬核聊天](https://mp.weixin.qq.com/s/PaxnIXfJWzMZHwdO3pQPFA)

------

#### AI 大模型的核心竞争力不在于用户数量，而在于模型的创新与应用

闫俊杰认为，用户数量等指标并不是 AI 竞争的核心。他强调，不应使用移动互联网时代的产品方法论来思考 AI 大模型产品。他指出，中国大部分公司，无论是创业公司还是大厂，仍然在使用推荐系统的方法来开发大模型产品。然而，AI 大模型与产品的关系是：更好的模型可以带来更好的应用，但更好的应用和更多的用户并不会直接导致模型的改进。例如，ChatGPT 的日活跃用户数（DAU）是 Claude 的 50 到 100 倍，但两者的模型性能却相差无几。

[晚点对话 MiniMax 闫俊杰：千万别套用移动互联网的逻辑来做 AI](https://mp.weixin.qq.com/s/XGnHruXL3P0s-2TNss0LIg)

------

#### DeepSeek 的技术进步并未颠覆 AI 领域的成本下降趋势，反而凸显了出口管制的必要性

Anthropic CEO Dario Amodei 认为，DeepSeek 的技术进步并未颠覆 AI 领域的成本下降趋势，而是在既有的技术进步轨道上实现的优化。他强调，出口管制的目的是防止中国获得大规模 AI 计算资源，从而避免中美在 AI 领域形成「两极对抗」格局。Amodei 指出，DeepSeek 的成功并未证明出口管制失败，反而凸显了其必要性，因为中国可能利用 AI 技术取得军事主导地位。

[On DeepSeek and Export Controls](https://darioamodei.com/on-deepseek-and-export-controls)

------

#### DeepSeek 通过高度协同优化和技术创新，成功推动了 AI 模型的进步，并为硬件厂商提供了下一代芯片设计的思路

DeepSeek 通过高度协同优化和技术创新，成功推动了 AI 模型的进步。他们首先构建了自己的集群（萤火），并自研了 HAI LLM 训练框架以提高并行训练效率。随后，他们通过一系列技术创新解决了传统 Attention 机制、MoE 模型、负载均衡、通信带宽等问题。例如，他们设计了低秩 MLA 来减少缓存开销，开发了 DeepSeekMoE 来解决专家精细度和共享知识问题，并通过自研算法解决了 MoE 在管线并行中的通信带宽问题。此外，他们还开发了 FP8 混合精度和 MTP 等技术来进一步提升训练效率。最后，DeepSeek 还为硬件厂商提供了下一代芯片设计的思路，包含对通信和量化算子的设想。

[DeepSeek 三重门：小天才们，军团平推，和哲学式思想](https://mp.weixin.qq.com/s/w_dMKtYPtCbyu7giulywOQ)

---

> 关注不迷路 [博客](https://blog.naaln.com/)
