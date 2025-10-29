---
title: 理解Swift中Extension类型
date: 2016/07/26 10:32:08
description: "通过Ruby的times循环示例说明一切皆对象思想，随后用Swift的extension为Int添加times方法展示结构体亦可拥有方法；继续演示Double扩展实现单位换算的语法；最后提供UIView扩展添加点击上浮动画的完整代码，说明extension提升可读性、可维护性以及运行时替换的可行性。"
tags:
  - ruby
  - swift
  - extension
  - uiview
  - 动画
categories:
  - 技术
layout: post
---

```
3.times { puts 'hello world' }
```

这是一条 Ruby 语句，它会打印 `hello world` 三次，意图清晰，语法简洁。

如果你是 C 或者 Java 等语言的使用者，而从未接触过 Ruby，此时是不是有种打开了新世界的大门的感觉^_^。反正当初我刚接触 Ruby 那会儿时常会感叹，啊原来代码还可以这么写。。。Ruby 的灵活与优雅当然远不仅于此，这里就不展开了。今天的重点是，Swift 也可以这么写。

首先我们要明确，Ruby 之所以可以这么写是因为它是一个纯面向对象的语言，在 Ruby 的世界中，一切皆对象，所有的事物都有一个共同的祖先——Object。3 的类型是 Fixnum,当然也是一个对象，所以它有自己的方法。times 就是一个方法，可以看出应该是接收一个代码块（本例中为 `{puts 'hello world'}`），然后调用它 self（本例中 self 即为 3）次。

而在 Swift 中，Int 是一个 struct(结构体)，并不是个 class。但是 Swift 中的 struct 与别的语言中的 struct 不同的是，struct 内部也可以定义方法。所以条件满足了，现在就差个 times 方法了。

嗯，很遗憾 Swift 的 Int 并没有 times 方法。不过没关系，这个时候 `extension` 就派上用场了。没有我们就自己写一个嘛，私人化定制，满足一切突如其来的需求。先上代码好了：
定义：

```
extension Int {
    func times(closure: () -> ()) {
       for _ in 1...self {
            closure()
        }
    }
}
```

调用： `3.times { println("hello world") }`

是不是跟开头 Ruby 语句有异曲同工之妙？`extension` 不仅可以扩展方法，还可以扩展计算属性。比如《The Swift Programming Language》中的一个例子：

```
extension​ ​Double​ {
​    ​var​ ​km​: ​Double​ { ​return​ ​self​ * ​1_000.0​ }
​    ​var​ ​m​: ​Double​ { ​return​ ​self​ }
​    ​var​ ​cm​: ​Double​ { ​return​ ​self​ / ​100.0​ }
​    ​var​ ​mm​: ​Double​ { ​return​ ​self​ / ​1_000.0​ }
​    ​var​ ​ft​: ​Double​ { ​return​ ​self​ / ​3.28084​ }
​}
​let​ ​oneInch​ = ​25.4​。​mm
​println​(​"One inch is ​\(​oneInch​)​ meters"​)
​// prints "One inch is 0.0254 meters"
​let​ ​threeFeet​ = ​3​。​ft
​println​(​"Three feet is ​\(​threeFeet​)​ meters"​)
​// prints "Three feet is 0.914399970739201 meters"
```

`extension` 在实际的开发中可以有很多应用，使用得当能显著提高代码的可读性，平常我们自己写的大多数辅助类其实都可以转化为 `extension`。譬如我最近在自己的项目中给被点击的 UIView（比如 button）写了一个小动画，点击了之后组件会上浮一下，并且同时会有一下阴影效果。
定义：

```
extension UIView {
    func animateWhenClicked() {
        self.backgroundColor = UIColor(white: 0.9, alpha: 0.5)
        self.layer.transform = CATransform3DMakeScale(1, 1, 0)
        UIView.animateWithDuration(0.9, animations: {
            self.backgroundColor = UIColor.whiteColor()
            self.layer.transform = CATransform3DMakeTranslation(1, 1, 1)
        })
    }
}
```

使用（仅点击动画部分代码）：

```
button.addTarget(viewCtrl, action: "clicked:", forControlEvents: .TouchUpInside)
func clicked(sender: UIButton) {
    sender.superview!.animateWhenClicked()
}
```

![](http://pics.naaln.com/blog/2019-01-14-032431.jpg-basicBlog)

大概就是右上角的效果，呃，静态图看不出来，各位要是有兴趣可以拿我的扩展方法然后自己初始化个 Button 去跑跑看 (直接 `sender.animateWhenClicked()` 就好，不用 `superview)`。因为我在项目中的 Button 是一个自定义的贪婪 Button，只要点击 Button 的父视图就会响应点击事件，所以是 Button 的 superview 调用了 animateWhenClicked，这也是我把这个动画扩展到 UIView 而不是 UIButton 的原因。

我个人很喜欢 `extension`，平常也经常使用。`extension` 也可用于后期项目维护，可以在不修改旧代码的前提下扩展旧代码的功能。而且对于 `NSObject` 的子类或者有 dynamic 标记的方法，利用扩展还可以在运行时对某些方法的实现进行替换，类似于 OC 的 Swizzle，今天就不展开了，下次有空继续。

文／Sheepy

原文链接：http://www.jianshu.com/p/f41bf33fac0b
