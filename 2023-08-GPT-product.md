---
layout: post
title: GPT 与产品
date: 2023/08/26/ 20:00:00
categories:
  - 产品
tags:
  - AI
  - 产品
---

GPT 产品目前还存在责任不健全问题，比如现实社会，比如律师、医生将对结果直接负责，作为 GPT 如何确权目前还没有一个明确的准则。程序所带来的风险是 GPT 的开发商，还是使用者。

就目前而言，正如 [关于 GPT 的一点想法](https://blog.naaln.com/2023/08/thinking-GPT/) 所说，GPT 语词之间的艺术，必然存在概率和信任之前的对立。还没有开发商敢于承担 GPT 带来的法律纠纷，从而导致 GPT 只可以作为辅助工具，而不是原生的 AI 执行工具。

比如 GPT 问诊，只能作为医生的辅助助手，如果是一款直接 To C 的产品，则需要强大的信任背书。

再则，对于工作场景，由于信任的缺失，GPT 必须将思考材料显性透出，思考步骤分解，执行路径可以复原。但是过于依赖人工审核、检验、修正，则丧失了对于辅助工具的效率提升的期许。

综上，对于 GPT 的适用领域，我总结的四个前提：
- 可确责
- 可容错
- 可审核
- 可复原

## 参考资料

- [GPT-3.5 Turbo](https://platform.openai.com/docs/guides/chat) 4K context
	- Input $0.0015 / 1K tokens
	- Output $0.002 / 1K tokens
- [GPT-4](https://openai.com/gpt-4) 8K context
	- Input $0.03 / 1K tokens
	- Output $0.06 / 1K tokens
- [OpenAI Platform 计费换算](https://platform.openai.com/tokenizer)
