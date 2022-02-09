---
layout: post
title: 谷歌浏览器配置
date: 2013/09/12 21:49:00
categories:
- 技术
tags:
- Google
---

gae不用多说了，wall也行，反正全天开着

```
https://www.google.com/ncr
```

这个不用多说了，去掉根据ip跳转，不过清除cooike后需要再进来一次撒，貌似以后不能再进去任何hk的域名，首页可以设置这个撒 非SSL版的google触发敏感词后会有90秒的时间无法访问google任何服务 Quote:

> 虽然没有研究过，但是从目前的症状来看，GFW 在屏蔽关键字的时候使用了 DNS 挟持。 也就是说，只要手动修改 HOSTS 文件即可达到不被屏蔽的效果。

更改hosts。推荐云hosts( [https://code.google.com/p/smarthosts](https://code.google.com/p/smarthosts)) 注意改好后刷新DNS缓存——运行：ipconfig /flushdns 偶的hosts自己ping的美国的ip，总感觉在北京的服务器也不踏实

记得当初寻找，记录，筛选这些ip费了一天的事

```
dns 8.8.8.8 
8.8.4.4
```

关闭 google 安全搜索 ncr进去后点击右上角齿轮选择语言为简体中文，之后关掉，或者hk进去点击google in english再弄

偶的语言配置

修改默认的搜索引擎，都是ssl的，登陆谷歌账户的话默认都是ssl

```
台湾的     https://www.google.com.tw/search?hl=zh- CN&q=%s
国产       https://www.google.com/search?hl=zh-CN&q=%s
hk        https: //www.google.com.hk/search?hl=zh-CN&q=%s
```

[http://www.googlestable.com/](http://www.googlestable.com/) [https://encrypted.google.com/search?q=%s](https://encrypted.google.com/search?q=%25s) 这两个搜索串哪个好呢，太多了，对比不出来了 Quote:

> googlestable很聪明，针对google在国内经常出现的搜索不稳定的现状，找出了根源（重定向等问题），然后减少了一些环节，加快了搜索速度和稳定性，其实在googlestable上搜的就是google的，这一点得到了广大用户的支持和拥护

奶奶的名字不错，谷歌病了，还谷歌sb呢 [https://www.google.com.sb/](https://www.google.com.sb/) Quote:

> 谷歌加密搜索（Google SSL） [https://www.google.com](https://www.google.com) 即将切换到新的域名 https://encrypted.google.com/， 使用SSL搜索前还是老规矩，需要先打开 [http://www.google.com/ncr](http://www.google.com/ncr) 禁用本地跳转后再尝试访问。 这次更改SSL搜索域名主要原因是由于一些学校机构反应自身的过滤引擎不能过滤一些关键字，而作出的调整。话说回来，墙其实还是无处不在的。

这个搜索串貌似需要对应的hosts gfw又不敢封了 https://www.google.com/，这样还会连累不带ssl的谷歌的部分业务，天朝这么光明，不会这么干的…… Quote:

> 昨天，伟大的GFW和谐掉了encrypted.google.com，于是乎，众多同学发现 https://www.google.com可以打开，但是搜索任何内容都挂掉。。。 encrypted.google.com被和谐并非偶然，party早就想办掉https的google了，它知道的太多了，但是一直没办法，因为和谐 https://www.google.com的话， http://www.google.com也会被和谐掉，因为它们的域名相同，只有协议不太一样，一向重视形象，一向表面很光辉伟大、内心阴冷狭隘的party自然不可能和谐 www.google.com 后来，过去了很长一段时间， https://www.google.com相安无事，google很傻很天真的以为会一直没事下去，于是把加密搜索转向了一个独立的子域名encrypted.google.com，但是在这个天真被狗欺的社会，它真的被狗欺了。。。于是乎就有了昨天下午能打开 https://www.google.com但是不能搜索的一幕。。。

到底选择啥搜索串呢

到底默认哪个好呢，据说谷歌日本或者ca 也不错，送上谷歌全球域名吧

[https://www.google.com/supported_domains](https://www.google.com/supported_domains)

## 扩展篇

Google SSL Webcache - 谷歌加密快照

[https://chrome.google.com/webstore/detail/google-ssl-webcache-谷歌加密快/cdkieonfoiccnhdccdcjamidlmhkgimh](https://chrome.google.com/webstore/detail/google-ssl-webcache-%E8%B0%B7%E6%AD%8C%E5%8A%A0%E5%AF%86%E5%BF%AB/cdkieonfoiccnhdccdcjamidlmhkgimh)

Proxy SwitchySharp [https://chrome.google.com/webstore/detail/proxy-switchysharp/dpplabbmogkhghncfbfdeeokoefdjegm](https://chrome.google.com/webstore/detail/proxy-switchysharp/dpplabbmogkhghncfbfdeeokoefdjegm)

Remove Google Redirects

去掉重定向的

[https://chrome.google.com/webstore/detail/remove-google-redirects/ccenmflbeofaceccfhhggbagkblihpoh](https://chrome.google.com/webstore/detail/remove-google-redirects/ccenmflbeofaceccfhhggbagkblihpoh)

Search by Image (by Google)

site命令 [https://chrome.google.com/webstore/detail/search-by-image-by-google/dajedkncpodkggklbegccjpmnglmnflm](https://chrome.google.com/webstore/detail/search-by-image-by-google/dajedkncpodkggklbegccjpmnglmnflm)

Search by Image (by Google)

搜图片必备

[https://chrome.google.com/webstore/detail/search-by-image-by-google/dajedkncpodkggklbegccjpmnglmnflm](https://chrome.google.com/webstore/detail/search-by-image-by-google/dajedkncpodkggklbegccjpmnglmnflm)

别的扩展，脚本不上了，都是自己用的 玩转这些，当半个大神貌似没问题了撒

前几天还看到有大大说退出账户再搜索，貌似也不错

各位大神，还有啥好玩意或者好配置啥的，敬请指教啊，总感觉东西不够的感觉，有时候不给力啊 其实啦，貌似我纠结了…………还是肉身爬墙好啊，求神级无敌配置，有木有 还有啥我这不知道的好东西都给我研究下啊 我可是把家底都掏出来分享了！！！！!

对了，上个小地址，谷歌网页快照，进不去的404的网站你懂的

带图片的版本

[https://webcache.googleusercontent.com/search?strip=0&q=cache:%s](https://webcache.googleusercontent.com/search?strip=0&q=cache:%25s)

纯文字版

[https://webcache.googleusercontent.com/search?strip=1&q=cache:%s](https://webcache.googleusercontent.com/search?strip=1&q=cache:%25s)

把%s 替换成网址就行了
