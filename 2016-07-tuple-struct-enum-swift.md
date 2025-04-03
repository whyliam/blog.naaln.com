---
title: Swift中元组，结构体，枚举之间的区别
date: 2016/07/26 11:17:22
tags:
categories:
- 技术
---

Swift 有许多种存储数据方式，你可以用枚举 (`enums`),元组 (`tuples`),结构体 (`structs`),类 (`classes`),在这篇文章中我们将比较枚举、元组、结构体之间区别，首先从最简单的开始 - 元组 (`tuples`)。

### 元组 (tuple)

元组是多个值组成的复合值类型，例如，你可以定义一个含有整形和字符串的 tuple

```
let amout=(100,"USD")
```

当你函数需要返回多个值时，元组这个时候非常有用，你可以使用下标方式来访问元组中的值，如。0,.1 以此类推，如下：

```
let currency = money.1 // "USD"
```

如果想要给元组多增加些信息，你也可以给元组每个元素命名:

```
let money = (amount: 100, currency: "USD")
```

现在，你不仅可以通过。1,而且可以通过。currency 访问元素值。

```
let currency = money.currency // "USD"
```

如果想给货币增加格式化，我们可以这样做：

```
func format(input: (Int,String)) -> String {
    return "I have \(input.0) \(input.1) in my wallet"
}
```

```
println(format(money)) // This prints "I have 100 USD in my wallet"
```

我们的格式化方法在任何（`Int,String`）类型 `Tuple` 都能正常运行。

```
let mass = (1, "kg")
let formatted = format(mass) // "I have 1 kg in my wallet"
```

### 结构体 (Struct)

事实上，「我有 1kg 在我的钱包」没有任何意义，因此，接下来我们介绍另外一个结构体类型，结构体 (`struct`) 不仅能够有元组类似的数据存储功能，而且能够给结构体定义函数 (是元组 `tuple` 话，只能定义非成员函数来实现)，让我们看看下面的结构体：

```
struct Money {
    let amount: Int
    let currency: String
}

let wallet = Money(amount: 100, currency: "USD")
```

现在结构体已经有了元组相同的数据存储功能，现在我们来给他增加一个函数

```
extension Money {
  func format() -> String {
    return "I have \(self.amount) \(self.currency) in my wallet"
  }
}

println(wallet.format())
```

如果我们想给重量 mass 增加一个特有类型，我们可以这样做：

```
struct Mass {
    let quantity: Int
    let unit: String

    func format() -> String {
        return "I have \(self.quantity) \(self.unit) in my backpack."
    }
}
```

现在 `Money` 类型不仅有函数，而且有明确的名称，在后面一部分代码中，我们不能像 `mass` 那样 `(1,'kg')` 传参数。

结构体也叫 `nomial type:` 即明确了定义类型的名称，如果对象的类型名称相同即相同的类型，在上面的例子代码中，`mass` 和第一次定义的 `wallet` 对象有相同的类型成员，但是他们的类型 `Money` 和 `Mass` 的是属于不同的类型。如果我们调用他们的 `format` 函数，会得到不同的结果。

### 枚举（Enums）

如果你想要将一些值存储在一起，我们可以根据具体情况使用 `tuple` 或者 `struct`,当然也可以使用 `classes`,但是如果遇到特殊情况，比如，有些时候我们需要在多项值中选择一个，例如，我们先看看 `currencies`,在之前的代码中，我们用字符串 `string` 来做货币单位，假如只允许已知的货币在代码中出现，该怎么办? 我们可以使用 `enum`,假如我们只允许有 `euros`, `US dollars` 和 `yen`,我们可以建立一个 `enum` 类型:

```
enum Currency {
   case EUR
   case USD
   case YEN
}
```

现在，假如我们有个 `Current` 类型的值，我们知道它是 `EUR`、`USD` or `YEN` 其中的一种，但是现在没有办法表示成员代表其他的具体含义，或者当它同时有多个值时也没办法表示和 `struct` 一样，枚举也能定义函数。

```
extension Currency {
    func symbol() -> String {
        switch self {
            case .EUR: return "€"
            case .USD: return "$"
            case .YEN: return "¥"
        }
    }
}
```

我们可以根据需要增加 `case`,当然也可以给枚举定义只有一个带实际值的成员：

```
enum Angle {
   case Radian(radians: Double)
}
```

上面相当一个结构体: 可以增加函数，而且区分了 `Angle` 的值与 `double` 类型值，如果有需要，我们可以给它增加更多的 `case`(枚举成员)。

### 该使用哪一种呢?

现在我们总结一下怎么选择 `tuples`,`struct`，`enums`。首先，优先选择 `tuple` 如果它能胜任。如果有 2 个值他们有相同的结构 (例如: 一对 String 和 Int),如想要体现更加类型安全、「名称化」`nominal` 的类型，那么应该使用 `struct`，例如，你想要区分 `currency` 和 `mass`.最后，如果需要多个值互斥 (比如 `EUR`,`USD`,`YEN` 只能选一),那么使用枚举 `enums`。

本文@solar 译，欢迎拍砖及指正。

原文:[Tuples, Structs and Enums](http://chris.eidhof.nl/posts/tuples-structs-enums.html)
