---
title: 理解Swift中Optional类型
date: 2016/07/23 10:32:08
tags:
categories:
- 技术
---

### Objective-C 中的 Nil

在 `Objective-C` 中当某个变量或表达式没有任何内容时，可以使用 `nil` 来表示。`nil` 在 `Objective-C` 中 void 指针指向数字 0，本质上来讲 nil 就是一个数字。比如这个例子：

```
int i = (int)(nil)+20; //可以这样吗？
```

因为 `nil` 指向数字 `0`，确切的说 `nil` 就是 Int 类型数据，所以上述的代码不仅可以通过编译，而且得到的结果是 20。显然，`Objective-C` 编译器对 `nil` 的处理方式非常简单粗暴，直接将 `nil` 当作是数字对待了。这样做表面看起来平安无事，但在某些特定的情境下，却可能造成歧义。既然 nil 不能表示「纯粹无」，的确需要表示「这个变量没有任何值」该怎么办？看来，`Objective-C` 对此是无解了。

### Optional 基础概念

或许是因为上述例子中提到的问题，在某些特定的场景下的确需要表示「无」的存在，因此 Swift 中引入了 `Optional` 类型。

在深入讨论之前，先看看 `Optional` 是什么吧！

```swift
public enum Optional<Wrapped> : _Reflectable, NilLiteralConvertible {
  case None

  case Some(Wrapped)

  public init()
  public init(_ some: Wrapped)

  @warn_unused_result
  public func map<U>(@noescape f: (Wrapped) throws -> U) rethrows -> U?

  @warn_unused_result
  public func flatMap<U>(@noescape f: (Wrapped) throws -> U?) rethrows -> U?

  public init(nilLiteral: ())
}
```

可以看到 Swift 中 Optional 其实是一个枚举类型，其中包含了 None、Some 两个值和应用某个规则并返回结果的 map、flatMap 两个方法，此外还有三个构造方法。我们可以使用上述的构造方法创造一个 Optional 类型的变量，但在实际开发过程中会更多的使用?表示一个变量是 Optional 类型。例如下面的示例：

```
var someNumber: Int?
var anotherNumber: Int = 100

var someStr: String?
var anotherStr: String = "Hello World"
```

使用问号?表示某个变量是 Optional 类型，如果没有显示赋值 Swift 会自动给 Optional 类型变量赋值 nil。上述的代码中，声明了两个 Int 类型的变量，其中 someNumber 是 Optional 类型，而 anotherNumber 是普通的 Int 类型并且值为 100。我们可以把 Optional 类型想象成为一个容器，装东西用的盒子。someNumber 所代表的盒子里面是空的，等着用户往里面装东西「当然，能装的东西已经规定好了，必须是 Int 类型」，而 anotherNumber 所代表的盒子里面已经装好了东西。如下图：

![](http://pics.naaln.com/blog/2019-01-14-32526.jpg-basicBlog)

变量存在的意义在于：可以参与运算并完成一定的业务要求。接下来我们对上述示例代码中的变量进行一定的运算，再观察结果分析。假设，给 someNumber、anotherNumber 分别加上 100 并输出结果，那么代码如下：

```
var someNumber: Int?    //值为nil
var anotherNumber: Int = 100    //值为100

someNumber = someNumber + 100    //编译错误，不能对nil进行操作
anotherNumber = anotherNumber + 100    //正常
```

为什么会这样呢？按照在 Objective-C 中的理解看来：一个变量的值是 nil，则指向数字 0，是可以进行运算的「一开始的示例中我们正是这么做的」。显然，nil 在 Swift 中已经不再是指向数字 0 的指针，而是真的指向「纯粹无」。既然当前这个变量的值是「纯粹无」，在它被初始化之前当然是不允许进行操作的。

变量 someNumber 盒子中没有任何值，所以不能进行运算，那么我们做如下的赋值再尝试：

```
var someNumber: Int?
```

someNumber = 100 //赋值
someNumber = someNumber + 100 //还是无法通过编译，不能对 Optional 直接操作
在 Swift 中对一个 Optional 类型的变量直接进行操作，是不允许的。这又是为什么呢？大家还记得吗？Optional 是枚举类型，不经过任何转换直接和 Int 类型相加，当然是不允许的。那么，如果想要对 Optional 的值进行运算，要怎么办呢？

### Optional 类型转换

在对一个 Optional 类型的变量进行操作之前，需要先将其转换成可操作的具体类型。你可以把它理解成：在吃掉盒子里面存放的苹果之前，需要先将苹果从盒子中取出来。这个过程可以使用符号!来完成。

```
var someNumber: Int?

someNumber = 100 //赋值
someNumber = someNumber! + 100  //将苹果从盒子中取出来，再加上100
```

但是在将苹果从盒子中取出来的时候，你却需要面对一个严肃的哲学问题：盒子中确实有苹果吗？如果上述代码中缺少赋值表达式 someNumber = 100，那么这段代码虽然可以躲过编译器的检查，但却会在程序运行过程中出现异常，导致应用崩溃。所以，为了保证程序的健壮性，在吃掉苹果之前，应该判断盒子中是否真的存在苹果，大致如下所示：

```
var someNumber: Int?

// someNumber = 100
if(someNumber != nil) {
    someNumber = someNumber! + 100
} else {
    print("盒子中根本木有苹果")
}
```

上述代码安全了，可是每个 Optional 类型的变量在使用之前，都需要对其进行 if-else 判断显然是一件很麻烦的事情，而人类是最喜欢偷懒的群体，那该怎么办呢？

其中第一个办法，称之为 if-let 绑定，通过 if-let 的判断对其进行操作，大致如下：

```
let authorName: String? = "Barat Semet"
let authorAge: Int? = 30

if let name: String = authorName,
    age: Int = authorAge {
        print("本文作者 \(name) 今年 \(age) 岁了")
} else {
    print("作者名称or年龄未指定")
}
```

另外一种方法称之为 nil 合并，使用两个??符号连接在一起表示：如果存在值则获取当前值，如果不存在则获取给定的默认值，大致代码如下：

```
var someNumber: Int?

var number: Int = someNumber ?? 0 //若someNumber不为nil则获取其值，若为nil则获取0
上述打代码大致等价于：

var someNumber: Int?
var number: Int

if let unwrapped:Int = someNumber {
    number = unwrapped
} else {
    number = 0
}
```

### 最后的总结

和 Objective-C 不同，在 Swift 代码中我们拿到某个表达式返回的 Optional 值时，如果非常确定该表达式的结果不会是 nil 则可以使用!将其强制转换为我们需要的结果。否则，在我们不确定的情况，一定要使用 if-else、if-let、swait-case、guard 之中的一种对 Optional 返回的结果进行判断后再处理。

### 参考

1. [Understanding Optionals in Swift](http://blog.teamtreehouse.com/understanding-optionals-swift)

来源：

[理解Swift中Optional类型－有和无的哲学](http://blog.barat.cc/ios/understanding-swift-optional/)
