---
layout: post
title: L72_工具进化、提示工程与多模态突破
date: 2025/06/06/ 20:00:00
categories:
  - 资讯
tags:
  - NewsLetter
  - OpenAI
  - Anthropic
  - Claude
  - Cursor
  - 多模态
---
![工具进化、提示工程与多模态突破](https://pics.naaln.com/2025-06-15-0df1df04cd1046a894bff2e0cb8990da.png-basicBlog)


OpenAI 推出了实用的连接器和记录模式功能，提升企业协作效率；Anthropic 对 Windsurf 断供引发争议，部分用户转向 Cursor；Cursor 1.0 则通过新增 Bugbot、Jupyter 支持等功能，展现了其成为跨场景 AI IDE 的野心，同时 ElevenLabs v3 在多模态与多语言支持上的突破进一步巩固了其在 TTS 领域的领先地位。

## 动态

### OpenAI 的小而美发布

OpenAI 近期未推出大型模型，而是聚焦于两项实用功能：**连接器（Connectors）** 和 **记录模式（Record Mode）**。

- **连接器**：支持与 Google Drive、Box、SharePoint、OneDrive 和 Dropbox 等云服务的无缝集成。这对中小企业尤为实用，ChatGPT 可跨平台搜索信息并回答问题。一位印度工程师在演示中展示了如何利用此功能查询产品数据和用户反馈，快速生成季度规划文档，令人心动。
- **记录模式**：桌面端新增 AI 会议记录功能，类似现有 AI 会议软件。用户可记录会议或语音笔记，ChatGPT 自动转录、提取要点并生成摘要和待办事项，点击摘要还能查看原始转写。目前已在 macOS 上向团队用户推出，更多用户群体即将解锁。

此外，企业管理员还能自定义添加 MCP（模型上下文协议），连接专有系统，进一步提升深度研究能力。

### Claude 的商业大戏

Anthropic 最近对 Windsurf 断供，限制其直接访问 Claude 模型，引发热议。Windsurf 在博客中表达失望，表示需依赖更复杂昂贵的方案。尽管用户可通过自带 API 密钥继续使用 Claude，但不少人转投 Cursor，凸显了 Claude 在 coding 领域的强大号召力。

Anthropic 此举或因 OpenAI 传闻收购 Windsurf，而联合创始人 Jared Kaplan 表示此举是为避免向竞争对手「输血」。CEO Dario Amodei 曾宣扬「AI for humanity」，但此举更像是「AI for hegemony」，社区对此褒贬不一。

### Cursor 1.0 里程碑

Cursor 发布 1.0 大版本，标志着其从垂类工具迈向跨场景 AI IDE 的野心。新功能包括：

- **Bugbot**：自动 code review，抓取代码 bug。
- **Background Agent**：远程 coding agent 全面铺开。
- **Jupyter 支持**：可在 Jupyter Notebook 中创建和编辑单元格（目前仅限 Sonnet 模型）。
- **Memory**：按项目存储上下文，测试功能。
- **Richer Response**：对话中直接渲染可视化内容。

Cursor 1.0 旨在打造最顺畅的开发体验，抢占 AI 编程入口。

---

## 内容

### 高级提示工程：AI 代理的艺术

YC 发布了一段 YouTube 访谈，聚焦其投资的客服公司 Parahelp，分享了高级提示工程（Prompt Engineering）的精髓。核心观点：

- **提示即编程**：好的 Prompt 需明确角色、分步指令、格式定义并提供范例，像写程序文档。Parahelp 的 6 页「经理」级 Prompt 令人叹服。
- **元提示（Metaprompting）**：用 AI 优化 AI，生成更优 Prompt。
- **评估体系（Evals）**：高质量数据集是创业公司的护城河，源自对客户工作流的深度理解。

视频强调，AI 时代的产品设计部分转为 Prompt 设计，值得一看（仅 30 分钟）。

### 卡帕西的 Twitter 洞察

Andrej Karpathy 在 Twitter 分享了一张 OpenAI 模型用法图表，清晰指导 GPT-4o 的 API 配置。他还犀利指出，UI 复杂、不支持脚本的软件（如 Adobe、Blender）前景堪忧，认为 LLM 需能读取底层表示并脚本化操作，才能与专业人士协作。这一观点引发了对 AI 友好型设计的讨论。

### AI 的集成与模块化

Ben Thompson 在 文章 中回顾科技史，探讨 AI 领域的垂直整合与模块化之争。他分析 OpenAI、Google 和 Anthropic 的布局，思考哪种模式将胜出，颇具启发性。

---

## 产品

### ElevenLabs v3：TTS 王者再进化

ElevenLabs 推出 v3 更新，继续领跑文本转语音（TTS）领域。新功能包括：

- **多模态与多语言**：支持语音和文本输入，集成 ASR，可在对话中切换语言。
- **RAG 增强**：提升上下文理解。
- **批量语音拨出**：支持大规模语音交互。
- **通话数据跟踪**：提供详细分析。

其 conversational AI 结合逆天的 TTS 效果，适用于有声书、播客和视频翻译等场景。试听一段 v3 生成的睡前故事，催眠效果满分！
