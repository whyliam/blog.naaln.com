---
layout: post
title: zen of python
date: 2015/07/25 12:05:00
categories:
  - 技术
tags:
  - Python
  - 禅
  - 编程哲学
  - 源码
  - this
description: "Python的禅通过‘import this’输出多条编程原则，强调优美、明了、简洁、扁平等；随后提供中文翻译帮助理解，并指出 this 模块源码使用ROT13混淆，明显违背这些原则。"
---

一直都觉得 `Python` 是一个禅意很浓的语言，十分的有趣。

最近在准备面试的时候，偶然发现了一个小彩蛋。

```python
>>> import this
Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

以下是赖勇浩的翻译

```python
>>> Python之禅

优美胜于丑陋（Python 以编写优美的代码为目标）
明了胜于晦涩（优美的代码应当是明了的，命名规范，风格相似）
简洁胜于复杂（优美的代码应当是简洁的，不要有复杂的内部实现）
复杂胜于凌乱（如果复杂不可避免，那代码间也不能有难懂的关系，要保持接口简洁）
扁平胜于嵌套（优美的代码应当是扁平的，不能有太多的嵌套）
间隔胜于紧凑（优美的代码有适当的间隔，不要奢望一行代码解决问题）
可读性很重要（优美的代码是可读的）
即便假借特例的实用性之名，也不可违背这些规则（这些规则至高无上）
不要包容所有错误，除非你确定需要这样做（精准地捕获异常，不写 except:pass 风格的代码）
当存在多种可能，不要尝试去猜测 而是尽量找一种，最好是唯一一种明显的解决方案（如果不确定，就用穷举法）
虽然这并不容易，因为你不是 Python 之父（这里的 Dutch 是指 Guido ）
做也许好过不做，但不假思索就动手还不如不做（动手之前要细思量）
如果你无法向人描述你的方案，那肯定不是一个好方案；反之亦然（方案测评标准）
命名空间是一种绝妙的理念，我们应当多加利用（倡导与号召）
```

还有更加有趣的事，当你看 `this` 源码的时候会发现， `this` 模块的代码完全违背了这些原则:

```python
   s = """Gur Mra bs Clguba, ol Gvz Crgref

   Ornhgvshy vf orggre guna htyl.
   Rkcyvpvg vf orggre guna vzcyvpvg.
   Fvzcyr vf orggre guna pbzcyrk.
   Pbzcyrk vf orggre guna pbzcyvpngrq.
   Syng vf orggre guna arfgrq.
   Fcnefr vf orggre guna qrafr.
   Ernqnovyvgl pbhagf.
   Fcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.
   Nygubhtu cenpgvpnyvgl orngf chevgl.
   Reebef fubhyq arire cnff fvyragyl.
   Hayrff rkcyvpvgyl fvyraprq.
   Va gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff.
   Gurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.
   Nygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.
   Abj vf orggre guna arire.
   Nygubhtu arire vf bsgra orggre guna *evtug* abj.
   Vs gur vzcyrzragngvba vf uneq gb rkcynva, vg'f n onq vqrn.
   Vs gur vzcyrzragngvba vf rnfl gb rkcynva, vg znl or n tbbq vqrn.
   Anzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!"""

   d = {}
   for c in (65, 97):
       for i in range(26):
           d[chr(i+c)] = chr((i+13) % 26 + c)

   print "".join([d.get(c, c) for c in s])
```
