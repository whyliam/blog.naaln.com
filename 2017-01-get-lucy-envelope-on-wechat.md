---
layout: post
title: 抢微信红包怎么手气最佳
date: 2017/01/02 22:07:38
categories:
  - 技术
tags:
  - 红包
  - 概率分布
  - 方差
  - 算法
  - 微信
description: 
  微信红包的分配在打开时实时计算，金额在零点零一到剩余平均值两倍之间随机，先抢后抢的期望相同但后抢的方差更大；使用提供的Java函数模拟三十人抢五百元两次和二千次，统计结果显示各人获额基本相近，整体分布近似；因此不必过分在意抢红包的时机。
---

### 先说点人话

1. 先抢和后抢，抢到的红包的期望基本相同，就是从概率上来说抢到的钱是差不多的。
2. 但是后抢的红包方差比较的大，就是有可能 `0.01`, 也很有可能 `手气最佳`。

#### 再说点相关的问题

下面信息由 QCon 某高可用架构群，WhyLiam 整理。

**微信的金额什么时候算？**

答：微信金额是拆的时候实时算出来，不是预先分配的，采用的是纯内存计算。

就是在你打开红包的时候进行计算红包的金额，而不是预先分配好每个人多少。

**分配：红包里的金额怎么算？为什么出现各个红包金额相差很大？**

答：随机，额度在 0.01 和 (剩余平均值 *2) 之间。

例如：发 100 块钱，总共 10 个红包，平均是 10 块钱一个，那么发出来的红包的额度在 0.01 元～20 元之间。

但是，比如前面 5 个人，每个人都领了 4 元钱的红包。那么剩下就是 5 个人可以领 80 元的红包，平均 16 元一个人，那么发出来的红包的额度在 0.01～32 元之间波动。`所以很容易手气最佳。`

**有没有从数据上证明每个红包的概率是不是均等？**

答：不是绝对均等，就是一个简单的拍脑袋算法。

**会不会出现两个手气最佳？**

答：会出现金额一样的，但是手气最佳只有一个，先抢到的那个手气最佳。

### 好，让我们开始测试

根据知情人数提供，以下代码仅供参考

```java
public static double getRandomMoney(LeftMoneyPackage _leftMoneyPackage) {
    // remainSize 剩余的红包数量
    // remainMoney 剩余的钱
    if (_leftMoneyPackage.remainSize == 1) {
        _leftMoneyPackage.remainSize--;
        return (double) Math.round(_leftMoneyPackage.remainMoney * 100) / 100;
    }
    Random r     = new Random();
    double min   = 0.01; //
    double max   = _leftMoneyPackage.remainMoney / _leftMoneyPackage.remainSize * 2;
    double money = r.nextDouble() * max;
    money = money <= min ? 0.01: money;
    money = Math.floor(money * 100) / 100;
    _leftMoneyPackage.remainSize--;
    _leftMoneyPackage.remainMoney -= money;
    return money;
}
```

进行随机的数据测试，初始化数据（30 人抢 500 块），执行了两次，结果如下：

```
// 第一次
15.69    21.18    24.11    30.85    0.74    20.85    2.96    13.43    11.12    24.87    1.86    19.62    5.97    29.33    3.05    26.94    18.69    34.47    9.4    29.83    5.17    24.67    17.09    29.96    6.77    5.79    0.34    23.89    40.44    0.92
```

```
// 第二次
10.44    18.01    17.01    21.07    11.87    4.78    30.14    32.05    16.68    20.34    12.94    27.98    9.31    17.97    12.93    28.75    12.1    12.77    7.54    10.87    4.16    25.36    26.89    5.73    11.59    23.91    17.77    15.85    23.42    9.77
```

对应图表如下：

![](http://pics.naaln.com/blog/2019-01-14-032316.jpg-basicBlog)

![](http://pics.naaln.com/blog/2019-01-14-32317.jpg-basicBlog)

继续 2000 次

![](http://pics.naaln.com/blog/2019-01-14-032317.jpg-basicBlog)

可以看出大家抢到的红包其实是差不多的。

### 所以，有红包还是抓紧抢吧##
