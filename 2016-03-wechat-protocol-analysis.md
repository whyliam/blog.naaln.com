---
layout: post
title: 微信协议分析
date: 2016/03/24 09:17:00
categories:
  - 技术
description: "微信网络协议分析：测试iPhone6s iOS和安卓平台的HTTP请求，详细描述wx_header_t数据结构以及操作码对应登录、图片发送等功能。"
tags:
  - wechat
  - protocol
  - ios
  - android
  - opcode
---

测试平台：iPhone6s iOS 9.2.1

软件版本：微信版本 6.3.15

网络环境：WiFi

数据结构：

```
typedef struct wx_header_s {
   u_int32_t packet_len; /* 前4字节表示数据包长度，可变* */
   u_int16_t header_len; /*2个字节表示头部长度，固定值，0x10*/
   u_int16_t thx_ver; /*2个字节表示谢意版本，固定值，0x01*/
   u_int32_t operation_code; /*4个字节操作说明数字，可变*/
   u_int32_t serial_number; /*序列号，可变*/

}wx_header_t;

```

注：其它平台，软件版本，和网络环境未做测试！！！

安卓手机平台的 POST URI 为：

`POST http://szshort.weixin.qq.com/cgi-bin/micromsg-bin/geta8key HTTP/1.1`

发送图片

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/uploadmsgimg HTTP/1.1`

查看附近的人

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/lbsfind HTTP/1.1`

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/getvuserinfo HTTP/1.1`

朋友圈

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/mmsnstimeline HTTP/1.1`

个人主页

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/mmsnsuserpage HTTP/1.1`

游戏

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/gamesync HTTP/1.1`

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/appcenter HTTP/1.1`

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/gamereportkv HTTP/1.1`

公众号

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/grouprecommendbiz HTTP/1.1`

搜索公众号

`POST http://short.weixin.qq.com/cgi-bin/micromsg-bin/searchorrecommendbiz HTTP/1.1`

微信的登录态 (getA8key 服务 安卓手机)

`POST http://szshort.weixin.qq.com/cgi-bin/micromsg-bin/geta8key HTTP/1.1`

感觉类似命令码：`0x000000cd`

常用操作码

`0x00000013` 语音聊天

`0x000000ed` 文字聊天

`0x0000009b` 获取新闻（购物、大众点评）

`0x00000038` 摇一摇

`0x00000039` 摇一摇

`0x00000022` 扫一扫（测试 smart6 公众号、搜索 QQ 号）

`0x0000002c` 测试关注 xxx 公众号、增加 QQ 好友

来源：[Candoit&暗影之余](http://www.dpifw.cn/index.php/page/3/)

----------
