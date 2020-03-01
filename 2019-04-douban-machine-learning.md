---
title: 豆瓣小组 与 机器学习
categories:
  - 技术
date: 2019-04-07 11:30:53
tags:
  - 机器学习
---
![](http://pics.naaln.com/blog/2019-04-07-15546089715578-basicBlog)

### 豆瓣害羞组爬虫

回到 4 年前，当时豆瓣的害羞组十分的火爆，堪比现在的抖音。有很多的小姐姐们在上面发自拍（，要是可以发视频的话，还有现在抖音什么事）。

那时我也方兴未艾，天天去上面看小姐姐，后来嫌麻烦，就写了一个爬虫：

[豆瓣小组图片下载](https://github.com/whyliam/Douban_Group_Img) （由于是好多年前的代码了，现在已经失效了，我也不打算继续维护了）

我陆续爬去了30000篇帖子，但是里面什么样的照片都会有，比如黄色，卡通，抠脚大汉…… 之前通过帖子的标题，热度等过滤了一些，但是剩下的图片还是一个海量的工作。

### NSFW 图片处理筛选

直到最近机器学习的兴起，我们可以通过机器学习的方法筛选不想要的图片。

`OpenNSFW`是雅虎数年前已经训练好的一个鉴黄模型，通过机器学习的手段将图片区分为5大类

* Drawing（绘图） - safe for work drawings (including anime)
* Hentai（变态） - hentai and pornographic drawings
* Neutral（安全） - safe for work neutral images
* Porn（色情） - pornographic images, sexual acts
* Sexy（性感） - sexually explicit images, not pornography

> `NSFW`-「Not Safe For Work」或者「Not Suitable For Work」的缩写，意思就是某个网络内容不适合上班时间浏览。

如果感兴趣可以试一下在线的demo：[http://nsfwjs.com/](http://nsfwjs.com/)

早上，我就用`OpenNSFW`对自己的图片精选了筛选。

代码很简单，我就不放出来了，简单的说就是使用他们训练好的模型对图片进行打分：

比如这张图片：

![听宝贝的话](http://pics.naaln.com/blog/2019-04-07-15546089715602-basicBlog)

```
{
    '变态': 0.0004995323,
    '绘图': 0.0015125229,
    '性感': 0.013945965,
    '色情': 0.018440166,
    '安全': 0.96560174
}
```

安全值达到了0.96，基本就可以判断这是一张可以上班看的图片了。

> 安全值大于0.8可以确定一个分类，在0.2～0.8之间还需要人工介入。

### 其他

高能预警，非战斗人士请火速撤离……

如果自己想训练模型，但是手上没有图片怎么棒？

Github 上有一个 [鉴黄图像数据集](https://github.com/EBazarov/nsfw_data_source_urls)

在 raw_data 文件夹里，可以找到不同的 .txt 格式的文档，每个文档都含有一组 URL，以下是关于该数据集的一些统计信息：

* 159个 不同的类别
* 158.9331 万个 URL
* 下载并清洗后大约有 500GB，或者说有 130 万张 NSFW 图像