---
layout: post
title: L70_企业管理者结构化
date: 2025/05/23 20:00:00
categories:
  - 资讯
tags:
  - AI
  - Workday
  - Agent
  - TestTimeCompute
  - AIGS
description: 
  红杉资本对WorkdayCEO访谈展示AI转型从成本向增长，指AI赋能员工、构建agent人事体系、数据为新用户界面与技能革命。TestTimeCompute框架阐释模型推理如双系统思维、思维链工具强化，推理资源分配优于扩大参数。产品协作流程八步闭环实现需求的AI全链路参与，角色转为导演。AIGS以波普尔证伪主义为基础，构建自动化假设—实验闭环。AI已从工具演进为组织成员与认知伙伴，聚焦AI运用。
---

![企业管理者结构化](https://pics.naaln.com/2025-05-25-751c879a3693406dac755d4c9d213cf6.lFAnQUjHYzn7X2EZSr38lqpC_MoqR2-_j9bE_exalSU-basicBlog)

## 一、企业 AI 转型的实践路径 —— Workday 案例解析

红杉资本对 Workday CEO Carl Eschenbach 的访谈 [^1] 揭示了传统 SaaS 企业如何在守住基本盘的同时，完成 AI 时代的战略升级。

**1. 从成本思维转向增长思维**

Eschenbach 指出：「AI 的讨论不应局限于 ROI，而应转向增长价值。」通过将 AI 视作「赋能员工」的工具，而非替代者，有助于企业更顺畅地导入 AI 能力，推动组织采纳。

**2. 构建 AI** Agent 的人事管理体系

Workday 提出「agent 系统记录」概念，未来 AI 代理人（agent）也需进行入职、角色分配与绩效评估。这为大规模部署 AI 奠定组织管理基础。

**3. 多样化商业模型适配不同应用**

- 按「座位数」定价：适用于通用 AI 功能（如 AI 辅助报销）
- 按「agent 角色」定价：用于垂直场景（如 AI 招聘官）
- 按「API 调用量」定价：适配自定义程度高的企业应用

**4. 数据成为 AI 的**「新用户界面」

Workday 拥有 7000 万用户的结构化业务数据，成为其 AI 能力的关键护城河。Eschenbach 指出，数据与上下文的结合是优质 AI 输出的关键。

**5. AI 是**「技能革命」而非「失业浪潮」

Workday 强调，AI 将重新定义岗位能力结构，人类需向更高维技能转型。这也是未来人力战略的重要基调。

---

## 二、理解 AI 模型的「思考机制」—— Test-Time Compute 框架

Lilian Weng 在《Test-Time Compute: Expanding the Inference Horizon》[^2] 一文中提出，「思考」可通过动态分配推理资源（如更多 Token、更深思维链）建模。这为企业更好理解与调优模型能力提供新视角。

**1. 借鉴人类**「双系统思维」模型

与 Kahneman 的系统 1（快速直觉）与系统 2（慢速理性）类比，AI 也可根据问题复杂度分配计算资源，从而激活更强推理路径。

**2. 数学建模**：思考作为隐变量

推理过程可建模为：输入 x → 隐含思维路径 z → 输出 y。通过优化 z 分布，模型可探索多种解法，提高鲁棒性。

**3. 三种核心机制提升**「思考深度」

- **思维链（Chain-of-Thought）**：逐步推理能力大幅提升
- **强化学习优化推理路径**：DeepSeek[^3] 等实践已初见成效
- **调用外部工具**：如搜索引擎、计算器、代码执行器，实现「反事实能力」

**4. **「思考时间」扩展优于模型规模提升？

Scaling Law 研究表明，在当前阶段，分配更多推理资源（如激活思维链）比一味扩大模型参数更高效 [^4]。

---

## 三、AI 全流程协作产品设计 —— 从想法到落地的工作范式

银海在《如何用 AI 全流程设计一个产品？》[^5] 一文中，通过多个实战案例展示了 AI 如何在产品流程中扮演「超级协作者」角色。

**1. AI 全链路参与的实际场景**

- AI 拍立得相机：拍照后生成多版本文案（如咸鱼/小红书风格）
- 语音备忘助手：用户口述想法，AI 结构化成笔记内容

**2. 八步闭环方法论**

1. 需求拆解
2. 用户调研与洞察
3. 功能拆分
4. 文档撰写（PRD）
5. 界面解析（接入 Figma）
6. API 调用设计
7. 上线测试与修复
8. 宣传物料生成

**3. 角色转变**：从「产品搬运工」到「协作导演」

AI 让产品经理从低效执行中解放，聚焦战略思考与资源调度，重构产品管理的核心价值。

---

## 四、AI 生成科学（AIGS）：科研范式的新变革

清华大学等提出 AI-Generated Science（AIGS）[^6]，强调 AI 具备提出假设、验证证伪、生成理论的完整科学活动能力。

**1. 理论基础**：波普尔证伪主义

AIGS 借鉴波普尔的科学哲学，认为「可证伪性」才是科学命题的核心，AI 在此框架下可以系统生成并验证理论。

**2. Baby**-AIGS 系统结构

该系统包括多个协作 agent（命题生成、实验模拟、逻辑检验等），形成自动化「假设→试验→结论」的科研闭环。

**3. 意义**：AI 不仅是工具，而是「科学共创体」

通过 AIGS，AI 成为科学探索的合作者，逐步从人类的「助手」走向「合作者」角色。

---

AI 已从「技术工具」演变为「组织成员」和「认知伙伴」。企业在 AI 转型中应关注三个层面：

- **管理框架重构**（如 Workday 的 agent 治理）
- **思维模型革新**（理解模型如何推理与思考）
- **工作方式重塑**（AI 全链路参与产品与科研流程）

未来的竞争，不仅是 AI 能力的比拼，更是组织理解并利用 AI 的能力之争。

---

## Reference

[^1]: 红杉 Sequoia Capital. "Workday CEO Carl Eschenbach on Leading in the Age of AI". 2024 年。[↩](https://chatgpt.com/c/683333af-5cf4-800e-b867-b0ce55603d05#user-content-fnref-1)
[^2]: Lilian Weng. "Test-Time Compute: Expanding the Inference Horizon." OpenAI Blog, 2024. [↩](https://chatgpt.com/c/683333af-5cf4-800e-b867-b0ce55603d05#user-content-fnref-2)
[^3]: DeepSeek 开源项目：[https://github.com/deepseek-ai](https://github.com/deepseek-ai) [↩](https://chatgpt.com/c/683333af-5cf4-800e-b867-b0ce55603d05#user-content-fnref-3)
[^4]: Hoffmann, J., et al. "Training Compute-Optimal Large Language Models." 2022. [↩](https://chatgpt.com/c/683333af-5cf4-800e-b867-b0ce55603d05#user-content-fnref-4)
[^5]: 银海.《如何用 AI 全流程设计一个产品？》公众号文章，2024 年 5 月。[↩](https://chatgpt.com/c/683333af-5cf4-800e-b867-b0ce55603d05#user-content-fnref-5)
[^6]: Jiaqi Ma et al. "Towards AI-Generated Science." 清华大学, 2024. [https://arxiv.org/abs/2405.00040](https://arxiv.org/abs/2405.00040) [↩](https://chatgpt.com/c/683333af-5cf4-800e-b867-b0ce55603d05#user-content-fnref-6)
