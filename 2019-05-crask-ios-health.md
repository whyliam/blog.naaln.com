---
title: iOS 健康 数据数据库分析
categories:
  - 技术
date: 2019/05/04 18:30:53
tags:
---

最近上迷于「一起来捉妖」，里面有一个孵蛋的功能。就是由一天走路的步数转化为孵蛋的进度。

由于走路的步数是来自于 iOS 的健康，所以就想着是否有办法可以博破解健康，来满足自己的虚荣心。

与修改微信的步数类似，目前市面上修改步数的方法都已经失效。我们需要一个更加给力的方法。

1. 修改「一起来捉妖」检测步数的代码
2. 修改 iPhone 步数的代码
3. 物理增加步数

今天就先尝试修改 iPhone 的步数吧

### 1. 数据库

将手机越狱后，发现「健康」的数据储存在 `/private/var/mobile/Library/Health/`

两个关联数据库 `healthdb.sqlite` 和 `healthdb_secure.sqlite`

运动数据在 `healthdb_secure.hfd`（加密的）

**数据库结构**

`healthdb.sqlite` 主要包含了健康的来源数据。

`healthdb_secure.sqlite` 主要包含了健康运动等数据，并且关联到一个 `healthdb.sqlite` 数据库。

![](http://pics.naaln.com/blog/2019-05-15569662584995.jpg-basicBlog)

**查询步数**

在了解数据库后，我们可以尝试去找到步数

```sql
SELECT
    quantity AS "STEPS",
    DATETIME(samples.start_date + 978307200, 'unixepoch') AS "START DATE",
    DATETIME(samples.END_DATE + 978307200, 'unixepoch') AS "END DATE",
    samples.DATA_ID AS "SAMPLWES TABLE ID"
FROM
    "main"."samples"
    LEFT OUTER JOIN
    "main"."quantity_samples"
    ON samples.data_id = quantity_samples.data_id
WHERE
    samples.data_type = 7
ORDER BY
    samples.data_id DESC
LIMIT 100
```

而我们需要做的就是创建，或者修改已经有的步数，达到我们步数增长的目的。

### 3. 修改步数

连接手机，获取 `healthdb_secure.sqlite` 的数据库文件。

找到最近的步数相关的数据（在 `quantity_samples` 中）

```sql
SELECT *,rowid "NAVICAT_ROWID" FROM "main"."quantity_samples" LIMIT 0,100
```

修改步数的数据

![](http://pics.naaln.com/blog/2019-05-04-%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-05-04%2019.02.37.png-basicBlog)

保存后，上传到手机中。

等待一分钟后，打开健康的数据，就可以发现数据已经更新了。

![](http://pics.naaln.com/blog/2019-05-04-110427.jpg-basicBlog)

### 4. 补充一句

「一起来捉妖」的步数对于的距离是 2800～3000 对于 2000 米，所以需要孵 2000 米的蛋，需要修改到 2800 左右。

以上
