---
layout: post
title: 30个关于Python的你有所不知语言特效和技巧
date: 2014/03/20 23:30:00
categories:
- 技术
tags:
- python
---

By Sahand Saba 翻译 Liam

## Introduction

自从我开始学习python,我决定记录下一系列经常用的技巧。当我看到一些代码（例如，在 `Overflow`，或者一些开源的应用等等）我觉得很酷，我觉得我们应该不知道这一些用法。当我理解这些代码的时候，我会测试这些代码，然后加入这个列表中。下面发表的是一部分整理后的列表。假如你是一个很专业的`Python`工程师，即使你已经知道大部分用法，你还是可以找到一些你不知道的。假如你是C, C++, Java工程师，并且最近想学Python，或者最近想拓展新的编程方式，那么你将会发现有一部分真的很有用，就想我一样。 每一个技巧和语言的特性都将会通过例子演示，而没有解释。同时，我将会尽量使例子简洁明了，可能有一些仍然讲的不清楚，因为专业水平不够。如果有一些例子看完之后还是不能明白的话，你可以利用例子的标题去`Google`找到更多有用的信息。 例子大致的按难度排序，一些比较简单和常见的功能和技巧会放在前面。 内容的目录我将会放在最后

#### 更新 - March 14th, 2014

Roy Keyes 提了一个非常好的建议，把这个文章放在github上，让人们通过提PR方式来增加内容。这个仓库是[https://github.com/sahands/python-by-exampl](https://github.com/sahands/python-by-exampl)。欢迎大家 fork，提 pull requests。我会更新这篇文章的，当有仓库跟新的时候。

#### 更新 - March 8th, 2014

这篇文章在 [Reddit](http://redd.it/1zv3q3), [Hacker News](https://news.ycombinator.com/item?id=7365410) 有很多的讨论， 在那些评论中，很多读者提了很多建议和修改。我已经更新了我的列表，根据改进的建议，并且增加了一些新的条目。我现在确实有这样的一瞬间。"Cool! I didn't know you could do that!" 另外，我不太清楚 `itertools.chain.from_iterable` 和 `dictionary comprehensions`. 同时，有一些十分有趣的讨论关于是否有一些技术导致难以调试代码的可能性 就我而言，下面的条目本质上是没有很难调试的。但是我可以断定，如果代码写的太长，将会增加调试的难度，以及更加难理解和维护。 根据你的判断，如果你的代码足够的简洁，那是有那好维护和阅读。 举例来说，我觉得列表推导式可以很好阅读，而且易于调试和维护。但是如果列表推导式在另一个列表推导式中来传递给映射，然后到`itertools.chain`？可能不是好主意！

#### 1.1 Unpacking

```python
>>>  a, b, c = 1, 2, 3

>>>  a, b, c
(1, 2, 3)

>>>  a, b, c = [1, 2, 3]

>>>  a, b, c
(1, 2, 3)

>>>  a, b, c = (2 * i + 1 for i in range(3))

>>>  a, b, c
(1, 3, 5)

>>>  a, (b, c), d = [1, (2, 3), 4]

>>>  a
1

>>>  b
2

>>>  c
3

>>>  d
4
```

#### 1.2 Unpacking for swapping variables

```python
>>>  a, b = 1, 2

>>>  a, b = b, a

>>>  a, b
(2, 1)
```

#### 1.3 Extended unpacking (Python 3 only)

```python
>>>  a, *b, c = [1, 2, 3, 4, 5]

>>>  a
1

>>>  b
[2, 3, 4]

>>>  c
5
```

#### 1.4 Negative indexing

```python
>>>  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

>>>  a[-1]
10

>>>  a[-3]
8
```

#### 1.5 List slices (a[start:end])

```python
>>>  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

>>>  a[2:8]
[2, 3, 4, 5, 6, 7]
```

#### 1.6 List slices with negative indexing

```python
>>>  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

>>>  a[-4:-2]
[7, 8]
```

#### 1.7 List slices with step (a[start:end:step])

```python
>>>  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

>>>  a[::2]
[0, 2, 4, 6, 8, 10]

>>>  a[::3]
[0, 3, 6, 9]

>>>  a[2:8:2]
[2, 4, 6]
```

#### 1.8 List slices with negative step

```python
>>>  a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

>>>  a[::-1]
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

>>>  a[::-2]
[10, 8, 6, 4, 2, 0]
```

#### 1.9 List slice assignment

```python
>>>  a = [1, 2, 3, 4, 5]

>>>  a[2:3] = [0, 0]

>>>  a
[1, 2, 0, 0, 4, 5]

>>>  a[1:1] = [8, 9]

>>>  a
[1, 8, 9, 2, 0, 0, 4, 5]

>>>  a[1:-1] = []

>>>  a
[1, 5]
```

#### 1.10 Naming slices (slice(start, end, step))

```python
>>>  a = [0, 1, 2, 3, 4, 5]

>>>  LASTTHREE = slice(-3, None)

>>>  LASTTHREE
slice(-3, None, None)

>>>  a[LASTTHREE]
[3, 4, 5]
```

#### 1.11 Zipping and unzipping lists and iterables

```python
>>>  a = [1, 2, 3]

>>>  b = ['a', 'b', 'c']

>>>  z = zip(a, b)

>>>  z
[(1, 'a'), (2, 'b'), (3, 'c')]

>>>  zip(*z)
[(1, 2, 3), ('a', 'b', 'c')]
```

#### 1.12 Grouping adjacent list items using zip

```python
>>>  a = [1, 2, 3, 4, 5, 6]

>>>  zip(*([iter(a)] * 2))
[(1, 2), (3, 4), (5, 6)]

>>>  group_adjacent = lambda a, k: zip(*([iter(a)] * k))

>>>  group_adjacent(a, 3)
[(1, 2, 3), (4, 5, 6)]

>>>  group_adjacent(a, 2)
[(1, 2), (3, 4), (5, 6)]

>>>  group_adjacent(a, 1)
[(1,), (2,), (3,), (4,), (5,), (6,)]

>>>  zip(a[::2], a[1::2])
[(1, 2), (3, 4), (5, 6)]

>>>  zip(a[::3], a[1::3], a[2::3])
[(1, 2, 3), (4, 5, 6)]

>>>  group_adjacent = lambda a, k: zip(*(a[i::k] for i in range(k)))

>>>  group_adjacent(a, 3)
[(1, 2, 3), (4, 5, 6)]

>>>  group_adjacent(a, 2)
[(1, 2), (3, 4), (5, 6)]

>>>  group_adjacent(a, 1)
[(1,), (2,), (3,), (4,), (5,), (6,)]
```

#### 1.13 Inverting a dictionary using zip

```python
>>>  m = {'a': 1, 'b': 2, 'c': 3, 'd': 4}

>>>  m.items()
[('a', 1), ('c', 3), ('b', 2), ('d', 4)]

>>>  zip(m.values(), m.keys())
[(1, 'a'), (3, 'c'), (2, 'b'), (4, 'd')]

>>>  mi = dict(zip(m.values(), m.keys()))

>>>  mi
{1: 'a', 2: 'b', 3: 'c', 4: 'd'}
```

#### 1.14 Flattening lists:

```python
>>>  a = [[1, 2], [3, 4], [5, 6]]

>>>  list(itertools.chain.from_iterable(a))
[1, 2, 3, 4, 5, 6]

>>>  sum(a, [])
[1, 2, 3, 4, 5, 6]

>>>  [x for l in a for x in l]
[1, 2, 3, 4, 5, 6]

>>>  a = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

>>>  [x for l1 in a for l2 in l1 for x in l2]
[1, 2, 3, 4, 5, 6, 7, 8]

>>>  a = [1, 2, [3, 4], [[5, 6], [7, 8]]]

>>>  flatten = lambda x: [y for l in x for y in flatten(l)] if type(x) is list else [x]

>>>  flatten(a)
[1, 2, 3, 4, 5, 6, 7, 8]
Note: according to Python's documentation on sum, itertools.chain.from_iterable is the preferred method for this.
```

#### 1.15 Generator expressions

```python
>>>  g = (x ** 2 for x in xrange(10))

>>>  next(g)
0

>>>  next(g)
1

>>>  next(g)
4

>>>  next(g)
9

>>>  sum(x ** 3 for x in xrange(10))
2025

>>>  sum(x ** 3 for x in xrange(10) if x % 3 == 1)
408
```

#### 1.16 Dictionary comprehensions

```python
>>>  m = {x: x ** 2 for x in range(5)}

>>>  m
{0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

>>>  m = {x: 'A' + str(x) for x in range(10)}

>>>  m
{0: 'A0', 1: 'A1', 2: 'A2', 3: 'A3', 4: 'A4', 5: 'A5', 6: 'A6', 7: 'A7', 8: 'A8', 9: 'A9'}
```

#### 1.17 Inverting a dictionary using a dictionary comprehension

```python
>>>  m = {'a': 1, 'b': 2, 'c': 3, 'd': 4}

>>>  m
{'d': 4, 'a': 1, 'b': 2, 'c': 3}

>>>  {v: k for k, v in m.items()}
{1: 'a', 2: 'b', 3: 'c', 4: 'd'}
```

#### 1.18 Named tuples (collections.namedtuple)

```python
>>>  Point = collections.namedtuple('Point', ['x', 'y'])

>>>  p = Point(x=1.0, y=2.0)

>>>  p
Point(x=1.0, y=2.0)

>>>  p.x
```

#### 1.0

```python
>>>  p.y
2.0
```

#### 1.19 Inheriting from named tuples:

```python
>>>  class Point(collections.namedtuple('PointBase', ['x', 'y'])):
...     __slots__ = ()
...     def __add__(self, other):
...             return Point(x=self.x + other.x, y=self.y + other.y)
...

>>>  p = Point(x=1.0, y=2.0)

>>>  q = Point(x=2.0, y=3.0)

>>>  p + q
Point(x=3.0, y=5.0)
```

#### 1.20 Sets and set operations

```python
>>>  A = {1, 2, 3, 3}

>>>  A
set([1, 2, 3])

>>>  B = {3, 4, 5, 6, 7}

>>>  B
set([3, 4, 5, 6, 7])

>>>  A | B
set([1, 2, 3, 4, 5, 6, 7])

>>>  A & B
set([3])

>>>  A - B
set([1, 2])

>>>  B - A
set([4, 5, 6, 7])

>>>  A ^ B
set([1, 2, 4, 5, 6, 7])

>>>  (A ^ B) == ((A - B) | (B - A))
True
```

#### 1.21 Multisets and multiset operations (collections.Counter)

```python
>>>  A = collections.Counter([1, 2, 2])

>>>  B = collections.Counter([2, 2, 3])

>>>  A
Counter({2: 2, 1: 1})

>>>  B
Counter({2: 2, 3: 1})

>>>  A | B
Counter({2: 2, 1: 1, 3: 1})

>>>  A & B
Counter({2: 2})

>>>  A + B
Counter({2: 4, 1: 1, 3: 1})

>>>  A - B
Counter({1: 1})

>>>  B - A
Counter({3: 1})
```

#### 1.22 Most common elements in an iterable (collections.Counter)

```python
>>>  A = collections.Counter([1, 1, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7])

>>>  A
Counter({3: 4, 1: 2, 2: 2, 4: 1, 5: 1, 6: 1, 7: 1})

>>>  A.most_common(1)
[(3, 4)]

>>>  A.most_common(3)
[(3, 4), (1, 2), (2, 2)]
```

#### 1.23 Double-ended queue (collections.deque)

```python
>>>  Q = collections.deque()

>>>  Q.append(1)

>>>  Q.appendleft(2)

>>>  Q.extend([3, 4])

>>>  Q.extendleft([5, 6])

>>>  Q
deque([6, 5, 2, 1, 3, 4])

>>>  Q.pop()
4

>>>  Q.popleft()
6

>>>  Q
deque([5, 2, 1, 3])

>>>  Q.rotate(3)

>>>  Q
deque([2, 1, 3, 5])

>>>  Q.rotate(-3)

>>>  Q
deque([5, 2, 1, 3])
```

#### 1.24 Double-ended queue with maximum length (collections.deque)

```python
>>>  last_three = collections.deque(maxlen=3)

>>>  for i in xrange(10):
...     last_three.append(i)
...     print ', '.join(str(x) for x in last_three)
...
0
0, 1
0, 1, 2
1, 2, 3
2, 3, 4
3, 4, 5
4, 5, 6
5, 6, 7
6, 7, 8
7, 8, 9
```

#### 1.25 Ordered dictionaries (collections.OrderedDict)

```python
>>>  m = dict((str(x), x) for x in range(10))

>>>  print ', '.join(m.keys())
1, 0, 3, 2, 5, 4, 7, 6, 9, 8

>>>  m = collections.OrderedDict((str(x), x) for x in range(10))

>>>  print ', '.join(m.keys())
0, 1, 2, 3, 4, 5, 6, 7, 8, 9

>>>  m = collections.OrderedDict((str(x), x) for x in range(10, 0, -1))

>>>  print ', '.join(m.keys())
10, 9, 8, 7, 6, 5, 4, 3, 2, 1
```

#### 1.26 Default dictionaries (collections.defaultdict)

```python
>>>  m = dict()

>>>  m['a']
Traceback (most recent call last):
 File "<stdin>", line 1, in <module>
KeyError: 'a'

>>>

>>>  m = collections.defaultdict(int)

>>>  m['a']
0

>>>  m['b']
0

>>>  m = collections.defaultdict(str)

>>>  m['a']
''

>>>  m['b'] += 'a'

>>>  m['b']
'a'

>>>  m = collections.defaultdict(lambda: '[default value]')

>>>  m['a']
'[default value]'

>>>  m['b']
'[default value]'
```

#### 1.27 Using default dictionaries to represent simple trees

```python
>>>  import json

>>>  tree = lambda: collections.defaultdict(tree)

>>>  root = tree()

>>>  root['menu']['id'] = 'file'

>>>  root['menu']['value'] = 'File'

>>>  root['menu']['menuitems']['new']['value'] = 'New'

>>>  root['menu']['menuitems']['new']['onclick'] = 'new();'

>>>  root['menu']['menuitems']['open']['value'] = 'Open'

>>>  root['menu']['menuitems']['open']['onclick'] = 'open();'

>>>  root['menu']['menuitems']['close']['value'] = 'Close'

>>>  root['menu']['menuitems']['close']['onclick'] = 'close();'

>>>  print json.dumps(root, sort_keys=True, indent=4, separators=(',', ': '))
{
   "menu": {
       "id": "file",
       "menuitems": {
           "close": {
               "onclick": "close();",
               "value": "Close"
           },
           "new": {
               "onclick": "new();",
               "value": "New"
           },
           "open": {
               "onclick": "open();",
               "value": "Open"
           }
       },
       "value": "File"
   }
}
(See https://gist.github.com/hrldcpr/2012250 for more on this.)
```

#### 1.28 Mapping objects to unique counting numbers (collections.defaultdict)

```python
>>>  import itertools, collections

>>>  value_to_numeric_map = collections.defaultdict(itertools.count().next)

>>>  value_to_numeric_map['a']
0

>>>  value_to_numeric_map['b']
1

>>>  value_to_numeric_map['c']
2

>>>  value_to_numeric_map['a']
0

>>>  value_to_numeric_map['b']
1
```

#### 1.29 Largest and smallest elements (heapq.nlargest and heapq.nsmallest)

```python
>>>  a = [random.randint(0, 100) for __ in xrange(100)]

>>>  heapq.nsmallest(5, a)
[3, 3, 5, 6, 8]

>>>  heapq.nlargest(5, a)
[100, 100, 99, 98, 98]
```

#### 1.30 Cartesian products (itertools.product)

```python
>>>  for p in itertools.product([1, 2, 3], [4, 5]):
(1, 4)
(1, 5)
(2, 4)
(2, 5)
(3, 4)
(3, 5)

>>>  for p in itertools.product([0, 1], repeat=4):
...     print ''.join(str(x) for x in p)
...
0000
0001
0010
0011
0100
0101
0110
0111
1000
1001
1010
1011
1100
1101
1110
1111
```

#### 1.31 Combinations and combinations with replacement (itertools.combinations and itertools.combinations_with_replacement)

```python
>>>  for c in itertools.combinations([1, 2, 3, 4, 5], 3):
...     print ''.join(str(x) for x in c)
...
123
124
125
134
135
145
234
235
245
345

>>>  for c in itertools.combinations_with_replacement([1, 2, 3], 2):
...     print ''.join(str(x) for x in c)
...
11
12
13
22
23
33
```

#### 1.32 Permutations (itertools.permutations)

```python
>>>  for p in itertools.permutations([1, 2, 3, 4]):
...     print ''.join(str(x) for x in p)
...
1234
1243
1324
1342
1423
1432
2134
2143
2314
2341
2413
2431
3124
3142
3214
3241
3412
3421
4123
4132
4213
4231
4312
4321
```

#### 1.33 Chaining iterables (itertools.chain)

```python
>>>  a = [1, 2, 3, 4]

>>>  for p in itertools.chain(itertools.combinations(a, 2), itertools.combinations(a, 3)):
… print p
…
(1, 2)
(1, 3)
(1, 4)
(2, 3)
(2, 4)
(3, 4)
(1, 2, 3)
(1, 2, 4)
(1, 3, 4)
(2, 3, 4)

>>>  for subset in itertools.chain.from_iterable(itertools.combinations(a, n) for n in range(len(a) + 1))
… print subset
…
()
(1,)
(2,)
(3,)
(4,)
(1, 2)
(1, 3)
(1, 4)
(2, 3)
(2, 4)
(3, 4)
(1, 2, 3)
(1, 2, 4)
(1, 3, 4)
(2, 3, 4)
(1, 2, 3, 4)
```

#### 1.34 Grouping rows by a given key (itertools.groupby)

```python
>>>  import itertools

>>>  with open('contactlenses.csv', 'r') as infile:
… data = [line.strip().split(',') for line in infile]
…

>>>  data = data[1:]

>>>  def print_data(rows):
… print '\n'.join('\t'.join('{: <16}'.format(s) for s in row) for row in rows)
…

>>>  print_data(data)
young myope no reduced none
young myope no normal soft
young myope yes reduced none
young myope yes normal hard
young hypermetrope no reduced none
young hypermetrope no normal soft
young hypermetrope yes reduced none
young hypermetrope yes normal hard
pre-presbyopic myope no reduced none
pre-presbyopic myope no normal soft
pre-presbyopic myope yes reduced none
pre-presbyopic myope yes normal hard
pre-presbyopic hypermetrope no reduced none
pre-presbyopic hypermetrope no normal soft
pre-presbyopic hypermetrope yes reduced none
pre-presbyopic hypermetrope yes normal none
presbyopic myope no reduced none
presbyopic myope no normal none
presbyopic myope yes reduced none
presbyopic myope yes normal hard
presbyopic hypermetrope no reduced none
presbyopic hypermetrope no normal soft
presbyopic hypermetrope yes reduced none
presbyopic hypermetrope yes normal none

>>>  data.sort(key=lambda r: r[-1])

>>>  for value, group in itertools.groupby(data, lambda r: r[-1]):
… print '———–'
… print 'Group: ' + value
… print_data(group)
…
Group: hard
young myope yes normal hard
young hypermetrope yes normal hard
pre-presbyopic myope yes normal hard
presbyopic myope yes normal hard
Group: none
young myope no reduced none
young myope yes reduced none
young hypermetrope no reduced none
young hypermetrope yes reduced none
pre-presbyopic myope no reduced none
pre-presbyopic myope yes reduced none
pre-presbyopic hypermetrope no reduced none
pre-presbyopic hypermetrope yes reduced none
pre-presbyopic hypermetrope yes normal none
presbyopic myope no reduced none
presbyopic myope no normal none
presbyopic myope yes reduced none
presbyopic hypermetrope no reduced none
presbyopic hypermetrope yes reduced none
presbyopic hypermetrope yes normal none
Group: soft
young myope no normal soft
young hypermetrope no normal soft
pre-presbyopic myope no normal soft
pre-presbyopic hypermetrope no normal soft
presbyopic hypermetrope no normal soft
```

via: [http://sahandsaba.com/thirty-python-language-features-and-tricks-you-may-not-know.html](http://sahandsaba.com/thirty-python-language-features-and-tricks-you-may-not-know.html)
