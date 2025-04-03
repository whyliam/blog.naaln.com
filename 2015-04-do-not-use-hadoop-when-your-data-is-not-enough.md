---
layout: post
title: 不要使用Hadoop，当你数据不够大的时候
date: 2015/04/10 10:12:00
categories:
- 技术
tags:
- Hadoop
---

「你在大数据和 Hadoop 方面有多少经验呢」，他们问我。我告诉他们，我一直在使用 Hadoop，但是很少处理几 TB 以上的数据。我基本上只是一个大数据新手——知道概念，写过代码，但是没有大规模经验。

他们又问我，「你能使用 Hadoop 做简单的 group by(分组) 和 sum(统计) 吗？」我说当然可以，但是我我需要看具体的文件格式。

他们给我一个 U 盘，里面存储 600MB 数据（所有的数据，而不是样本数据）。不知道为什么，当我我使用 `pandas.read_csv`（Pandas 是一种 Python 数据分析库）解决方案，而不是 Hadoop 完成了这个任务后，他们显得很不满意。

Hadoop 实际上是有很多局限性的。Hadoop 可以运行一个通用的计算，下面我用伪码进行说明：

Scala 风格的伪码：

	collection.flatMap( (k,v) => F(k,v) ).groupBy( _._1 ).map( _.reduce( (k,v) => G(k,v) ) )

使用 SQL 风格的伪码表示：

	SELECT G(...) FROM table GROUP BY F(...)

或者想我多年解释一样：

Hadoop is limiting. Hadoop allows you to run one general computation, which I'll illustrate in pseudocode:

Scala-ish pseudocode:

或者想我多年 [解释](https://www.chrisstucchio.com/blog/2011/mapreduce_explained.html) 一样：

> Goal：统计计算图书馆书籍的数量

>

> Map：你统计奇数书架上书的数量，我统计偶数书架上书的数量。（做统计的人越多，统计出结果越快，就是机器越多，效率越高）

> Reduce：把我们每个人单独统计的结果数据加在一起。

所以我们*唯一*需要接触的只有 `F(k,v)` and `G(k,v)`，除非要在中间步骤中做性能优化（通常十分的无聊），其他一切都是固定的。

在 Hadoop 里，它迫使你所有计算都必须按照一个 map、一个 group by、一个 aggregate 或者这种计算序列来写。这和穿上紧身衣一样，多憋得慌啊。许多计算用其他模型其实更适合。穿上紧身衣（使用 hadoop）的唯一原因就是，可以扩展到极大的数据集。可大多数情况，你的数据集很可能根本远远够不上那个数量级。

可是呢，因为 `Hadoop` 和 `大数据` 是热词，世界有一半的人都想穿上紧身衣，即使他们实际不需要 Hadoop。

## 我有几百兆的数据，Excel 可能没法加载它

对于 Excel 来说的「很大的数据」并非大数据，其实还有其它极好的工具可以使用——我喜欢的是基于 [Numpy](http://www.numpy.org/) 库之上 [Pandas](http://pandas.pydata.org/)。它可以将几百 MB 数据以高效的向量化格式加载到内存，在我购买已 3 年的笔记本上，一眨眼的功夫，Numpy 就能完成 1 亿次浮点计算。Matlab 和 R 也是极好的工具。

因此，对于几百兆的数据量，典型的做法是写一个简单的 Python 脚本逐行读取，处理，然后写到了一个文件就行了。

### 可我的数据是 10GB 呢？

我买了台新笔记本，它有 [16GB的内存](http://www.amazon.com/gp/product/B0076W9Q5A/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B0076W9Q5A&linkCode=as2&tag=christuc-20)（花 $141.98）和 256GB 的 SSD(额外 200 美元)。如果在 Pandas 里加载一个 10GB 的 csv 文件，实际在内存里并没有那么大（内存不是占有 10G）——可以将「17284932583」这样的数值串存为 4 位或者 8 位整数，「284572452.2435723」存为 8 位双精度。

最坏的情况下你还可以不同时将所有数据都一次加载到内存里。

### 可我的数据是 100GB、500GB 或 1TB 呢

一个 [2T的硬盘](http://www.amazon.com/gp/product/B005T3GRN2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B005T3GRN2&linkCode=as2&tag=christuc-20) 才 94.99 美元，[4T](http://www.amazon.com/gp/product/B005T3GRN2/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B005T3GRN2&linkCode=as2&tag=christuc-20) 是 169.99。买一块，加到桌面 PC 或者服务器上，然后装上 [Postgres](http://www.postgresql.org/) 来解决它。

## Hadoop << SQL 或 Python 脚本

在计算的表达能力来说，Hadoop 比 SQL 差。Hadoop 里能写的计算，在 SQL 或者简单的 Python 脚本都可以更轻松地写出来。

SQL 是一个直观的查询语言，适合做业务分析，业务分析师和程序员都很常用。SQL 查询非常简单，而且还非常快——只有数据库使用了正确的索引，要花几秒钟的 sql 查询都不太常见。

Hadoop 没有索引的概念，Hadoop 只有全表扫描，而且 Hadoop 抽象层次太多了——我之前的项目尽在应付 Java 内存错误 [java memory errors](https://blog.naaln.com/blog/2013/gc_overhead_limit.html)、内存碎片和集群竞用了，而这些时间远多于实际的数据分析工作。

如果你的数据并不是像 SQL 表那样的结构化数据（比如纯文本、JSON 对象、二进制对象），通常是直接写一个小的 Python 脚本或者 Ruby 脚本逐行处理更直接。保存到多个文件，然后逐个处理即可，SQL 不适用的情况下，从编程来说 Hadoop 也没那么糟糕，但相比 Python 脚本仍然没有什么优势。

除了难以编程，Hadoop 还一般总是比其他技术方案要慢。只要索引用得好，SQL 查询非常快。比如要计算 join，PostgreSQL 只需查看索引（如果有），然后查询所需的每个键。而 Hadoop 呢，必须做全表扫描，然后重排整个表。排序通过多台机器之间分片可以加速，但也带来了跨多机数据流处理的开销。如果要处理二进制文件，Hadoop 必须反复访问 namenode。而简单的 Python 脚本只要反复访问文件系统即可。

## 我的数据超过了 5TB

你的命可真苦——只能苦逼地折腾 Hadoop 了，没有太多其他选择（可能还能用许多硬盘容量的高富帅机器来扛），而且其他选择往往贵得要命（脑海中浮现出 IOE 等等字样……）。

用 Hadoop 唯一的好处是扩展。如果你的数据是一个数 TB 的单表，那么全表扫描是 Hadoop 的强项。此外的话（如果你没有这样大数据量的表），请关爱生命，尽量远离 Hadoop。它带来的烦恼根本不值，用传统方法既省时又省力。

## P.S. Sales Pitch

我建立一个 [startup](http://www.bayesianwitch.com/) 旨在提供数据分析和实时的建议和优化针对出版商和电子商务网站。去看看吧

## P.P.S. Hadoop 是一个极好的工具

我并不讨厌 Hadoop，当我用其它工具不能很好处理数据时我会选择 Hadoop。另外，我推荐使用 [Scalding](https://github.com/twitter/scalding)，不要使用 Hive 或 Pig。Scalding 支持使用 Scala 语言来编写 Hadoop 任务链，隐藏了其下的 MapReduce。Hadoop 是一个很好的工具，应该针对特定的例子使用它。唯一一点值得我仔细考虑的是运如何行**Hadoop**在**云**上，以处理 500MB 的**大数据**，当企业具有一定**规模**的时候。

*文章翻译自 [Russian](http://habrahabr.ru/post/194434/).*
