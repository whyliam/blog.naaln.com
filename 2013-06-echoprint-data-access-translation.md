---
layout: post
title: Echoprint Data access （翻译）
date: 2013/06/17 12:06:00
categories:
- 技术
tags:
- echoprint
- 翻译
---

欢迎来到EchoprintEchoprint 是一个开源的音乐是识别系统，他允许任何人在他们自己的应用上构建音乐指纹识别系统。感谢[The Echo Nest](http://the.echonest.com/)的技术支持，以及[Musicbrainz](http://musicbrainz.org/)的合作。

→ [Home / FAQ](https://blog.naaln.com/2013/06/echoprint-home-faq-translations)

→ [Download from GitHub](http://github.com/echonest/)

→ [How it works](https://blog.naaln.com/2013/06/echoprint-how-it-works-translation)

→ [Get started](https://blog.naaln.com/2013/06/echoprint-get-started-translate)

→ [Contact / Support](http://echoprint.me/contact)

→ [Data access](https://blog.naaln.com/2013/06/echoprint-data-access-translation)

→ [Server](https://blog.naaln.com/2013/06/echoprint-server-translation)

→ [Codegen](https://blog.naaln.com/2013/06/echoprint-codegen-translation)

→ [Twitter - @echonest](http://twitter.com/echonest)

![](http://pics.naaln.com/blog/2019-05-14-123131.jpg-basicBlog)

## 数据存取

Echoprint 数据 （储存在你自己的服务器）在「Echoprint 数据许可」下是允许的。这个许可的含义十分的简单：

-
可以在任何情况下使用我们的数据(商业或非商业，研究或个人使用）

-
假如你下载我们的数据，并且完善了它，你有义务将数据传回给我们。

-
这有个很好的理由。我们希望Echoprint能够解析在宇宙中的每首歌曲。Echoprint的社区想要知道，你是否完善了数据库来解析音轨。

以下是完整的许可，接受以下数据下载的章节：

Echoprint Database License Agreement

This Echoprint Database License Agreement (Agreement) is a binding agreement between you (also referred to as 「Licensee」) and The Echo Nest Corporation (「Echo Nest」).

BY ACCESSING, DOWNLOADING, COPYING, OR USING THE ECHOPRINT DATABASE (DEFINED BELOW) OR ANY PORTION THEREOF OR ANY EN ECHOPRINT DATA (DEFINED BELOW), YOU ACCEPT THE TERMS OF THIS AGREEMENT. IF YOU ARE UNWILLING TO ACCEPT THESE TERMS DO NOT ACCESS, DOWNLOAD, COPY, OR USE THE ECHOPRINT DATABASE OR ANY EN ECHOPRINT DATA. IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF ANOTHER PERSON OR A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT AND WARRANT THAT YOU HAVE FULL AUTHORITY TO BIND THAT PERSON, COMPANY, OR LEGAL ENTITY TO THIS AGREEMENT.

Purpose of this Agreement

A. This Agreement relates to an Echo Nest collection of digital music fingerprints and selected related metadata, as updated, added to, and modified from time to time, known as the 「Echoprint Database.」 Data in the Echoprint Database (fingerprint and related metadata) is 「EN Echoprint Data.」 The Echoprint Database is provided to authorized licensees only online by means of an online interface (the 「Echoprint API」). The term 「EN Echoprint Data」 also covers any derivative or modified data created pursuant to this Agreement to the extent that such data consists of or is based on EN Echoprint Data.

B. Under separate agreements, Echo Nest licenses 「Echoprint Client" software that enables you to create your own Echoprint format digital music fingerprints and metadata (「Licensee Data」) and 「Echoprint Server」 software that provides functionality for you to provide the Echoprint Database (or derivatives thereof) online to others.

C. Under this Agreement, your access to the Echoprint API and your copying, use, and distribution of the Echoprint Database is royalty-free, but is subject to various obligations, including, without limitation, the Licensing Rules (defined below) and your Data Sharing Obligation (defined below).

D. Under the Licensing Rules, you must use this form of Agreement to license or transfer copies of the Echoprint Database or any EN Echoprint Data (or derivatives thereof) to third parties other than for Consumer Use (as defined below). The Data Sharing Obligation requires you to contribute data back to Echo Nest as further stated below.

1.
Database Ownership. You agree that the Echoprint Database and all EN Echoprint Data that you access, download, copy or receive will be deemed the property of Echo Nest. You agree not to access, copy, use, modify or exploit the Echoprint Database and all EN Echoprint Data except as expressly permitted in this Agreement.

2.
Your Use of the Echoprint Database. Subject to and limited by the terms and conditions of this Agreement, including the Licensing Rules, you may access the Echoprint API and use, copy, license, modify and distribute the Echoprint Database and EN Echoprint Data obtained from the Echoprint API or obtained from another party that is subject to this Agreement; such license is worldwide and is for any commercial or non-commercial purpose.

3.
Licensing Rules. You agree to the following rules regarding your licensing, copying, and distribution of the Echoprint Database or any EN Echoprint Data:

a. Distribution for Consumer Use. If you provide EN Echoprint Data, or any data or database derived therefrom, to any end user for use in any way, including without limitation, an online or mobile session or in connection with the user』s media collection, as for example for music identification or display to the consumer of related metadata (「Consumer Use」), you must provide to the consumer end user of the site or application that supplies the data, before or at the time of first access, within the site』s or application : (a) one of the 「powered by」 logos available here: [http://the.echonest.com/company/logos/](http://the.echonest.com/company/logos/) along with the following copyright notice: 「Copyright 2011 The Echo Nest Corporation,」 (b) a written notice stating that 「all Echo Nest supplied data is provided AS IS,」 and © a written notice that all Echo Nest supplied data is licensed for the Consumer』s personal use only.

b. Use of this Agreement for all Other Use and Distribution. With regard to all licensing, transfer, or distribution of the Echoprint Database or EN Echoprint Data, or any data or database derived therefrom, other than for Consumer Use: (a) you may license, transfer, or distribute the Echoprint Database or EN Echoprint Data only pursuant to and subject to the terms of this Agreement, (b) you agree to provide each recipient with a copy of this Agreement, and obtain asset to this Agreement, before transferring possession of any copy of the Echoprint Database or any EN Echoprint Data; © you agree to keep intact all Echo Nest copyright or other proprietary notices. You may not modify, add to or change this Agreement in connection with any permitted licensing, transfer or distribution, and you may not require any additional or different terms for access, copying, distribution or use of the Echoprint Database or EN Echoprint Data.

Your Data Sharing Obligation; Data Sharing Procedures. Echo Nest wishes to increase the scope and contents of its Echoprint Database to create a commons-based, openly accessible database for all users. An important component to making this happen is by means of data contributions from its Echoprint Database licensees. Accordingly, this Agreement requires, in exchange for rights granted to you, that you agree to provide Echo Nest with Additional Data, which includes:

(i) track_id

(ii) fp_code

(iii) artist_name

(iv) track_title

(v) release_title

(vi) duration

each to the corresponding Echoprint generated by the Echoprint Client software, in accordance with applicable Data Sharing Procedures (defined below). This is referred to as your 「Data Sharing Obligation.」 This obligation will be in effect for so long as this Agreement is in effect.

c. Licensee Data that you create and any additional fingerprint data in Echo Nest digital fingerprint format that you otherwise create or obtain is termed 「Additional Data.」 You agree to supply to Echo Nest the Additional Data which is generated by the Echoprint Client software in your possession and control to Echo Nest. You agree to comply with Echo Nest』s written procedures for uploading Additional Data, including means of uploading and required timing (the 「Data Sharing Procedures」) as they are in effect from time to time. Echo Nest』s written Data Sharing Procedures are available online at [http://echoprint.me/data](http://echoprint.me/data)

d. You hereby grant to Echo Nest an unlimited, irrevocable, worldwide, royalty-free sublicensable permanent license for use, copying, distribution, modification and other exploitation of your Additional Data.

4.
No Support; Online Materials. You are responsible for your own use of the Echoprint Database and EN Echoprint Data. Echo Nest does not provide support or maintenance under this Agreement. Echo Nest reserves the right to limit, change or discontinue the Echoprint API or cease updating the Echoprint Database at any time in its sole discretion.

5.
No Payment. No payment of license fees is due by either party under this Agreement.

6.
Term and Termination.

a. This Agreement and your license to Echoprint Database and EN Echoprint Data will be in effect until this Agreement is terminated as permitted herein.

b. In case of your breach of this Agreement, this Agreement will automatically terminate. In addition, Echo Nest may terminate this Agreement by written notice if Echo Nest has reasonable cause to believe that you are in breach. Written notice will be deemed sufficient if addressed to your email address as listed with Echo Nest.

c. In case of termination of this Agreement, all licenses granted to you will end and you must erase all copies of the Echoprint Database and all EN Echoprint Data in your possession or under your control and ceasing any direct or indirect use of the same. The termination of your license will not result in the termination of the sublicenses of any sublicensee who have received rights to EN Echoprint Data from you as permitted in this Agreement.

d. You may terminate this Agreement at any time by: (a) erasing all copies of the Echoprint Database and all EN Echoprint Data in your possession or under your control and ceasing any direct or indirect use and (b) sending an email to Echo Nest at [echoprint@echonest.com](mailto:echoprint@echonest.com) certifying that you have done so in connection with your termination of This Agreement.

e. The following provisions survive termination: Sections: 4, 7, 8, and 9, together with any accrued obligations.

7.
Disclaimers; Limitation of Liability. The Echoprint Database and EN Echoprint Data and the license granted herein is provided 「AS IS」 and 「WITHOUT WARRANTY.」 ECHO NEST EXCLUDES ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR A PARTICULAR PURPOSE. This Agreement excludes any and all special, incidental, consequential, punitive, or exemplary damages, including any claim for loss of revenue, lost or damaged data, anticipated profits, and lost business. This exclusion applies even if Echo Nest has been advised of the possibility of such damages. Under no circumstance may the aggregate liability of Echo Nest, its directors, officers, employees, agents, or suppliers (collectively, the 「Echo Nest Parties」) in connection with this Agreement or its subject matter exceed US$50.00. These exclusions and limitations apply even if Echo Nest has been advised of the possibility of such damages.

8.
Indemnification. You agree to defend, indemnify and hold harmless the Echo Nest Parties from any claim, demand, liability, damage award, suit, judgment, or other legal action (including reasonable court costs and attorney』s fees) arising out of your use, modification, licensing, possession, distribution, modification, or duplication of the Echoprint Database and EN Echoprint Data.

9.
General. You agree to electronic notice by Echo Nest, which will be deemed properly made if sent to the most recent email address as to which you have provided notice to Echo Nest. This Agreement will be governed by the laws of the Commonwealth of Massachusetts, U.S.A., excluding its conflict of law provisions. All disputes relating to this Agreement are subject to the exclusive jurisdiction of the state and federal courts located in Boston Massachusetts, and you expressly submit to the exercise of such jurisdiction in the courts of Massachusetts in connection with any such matter. You agree to comply with US export control laws, as applicable. Your rights and licenses under this Agreement may not be assigned, transferred or conveyed; Echo Nest may transfer or assign this Agreement and/or any licenses granted to Echo Nest under this Agreement. This Agreement is not governed by the United Nations Convention on Contracts for the International Sale of Goods. If any provision in this Agreement should be held illegal or unenforceable by a court of competent jurisdiction, such provision will be severed from this Agreement, and other provisions of this Agreement will remain in full force and effect. If case of any action, dispute or claim arising from your unauthorized use, copying or exploitation of the Echoprint Database and EN Echoprint Data, you agree to reimburse Echo Nest for its cost of enforcement of its rights under this Agreement, including reasonable legal fees and costs. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. This Agreement constitutes the entire agreement between the parties concerning the subject matter hereof, and may be amended only by a writing signed by both parties.

[I agree to the Database License Agreement.](http://echoprint.me/data_download)

原文: [http://echoprint.me/](http://echoprint.me/data)

翻译: [Liam](https://blog.naaln.com/2013/06/echoprint-data-access-translation)
