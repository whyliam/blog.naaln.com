---
title: Swift 反向传值
date: 2016/12/18 21:05:10
categories:
  - 技术
description: "示例展示VC之间正向、反向与无向传值。VC跳转到B时，A在初始化或属性赋值时把值传给B为正向。B返回A时把值传回为反向，包括delegate、闭包、KVO与Notification四种实现方式。delegate由B定义协议并在A实现；闭包在A设置并在B调用；KVO通过动态属性在B修改触发A的observeValueForKeyPath；Notification在A注册并在B发送通知。跨页面共享数据"
tags:
  - Swift
  - ViewController
  - delegation
  - closure
  - NSUserDefaults
layout: post
---

这是一个工程，展示了如何在 VC 之间进行传值，包括正向传值、反向传值和无向传值。

- 本示例代码基于 Xcode 7 ，并使用 Swift 2.0 写成。

![](http://pics.naaln.com/blog/2019-01-14-032309.gif-basicBlog)

## 正向传值

**RootVC:**

```swift
let del:DelegateViewController = DelegateViewController()
del.positiveValue = title! // 正向传值
self.presentViewController(del, animated: true, completion: nil)
```

**DelegateVC:**

```swift
var positiveValue:String = String() // 正向传值，接收方
```

## 反向传值

反向传值包括 delegate、闭包、KVO 和 Notification 四种种方式：

### Delegate

**RootVC:**

```swift
@IBAction func delegateButtonDidTapped(sender: AnyObject) {
    ...
    del.delegate = self // 设置下一个VC的delegate为当前的rootVC
    ...
}
```

```swift
//实现delegate的方法
func passValue(str:String) {
    self.delegateTF.text = str
}
```

**DelegateVC:**

```swift
var delegate:delegateOfNegative? //定义具体的delegate
```

```swift
func back(sender:UIButton) {
    let tf:UITextField = self.view.viewWithTag(10000) as! UITextField
    delegate?.passValue(tf.text!) // 调用delegate的传值方法passValue
    self.dismissViewControllerAnimated(true, completion: nil)
}
```

### 闭包

**RootVC:**

```swift
@IBAction func blockButtonDidTapped(sender: AnyObject) {
    ...
    let blo:BlockViewController = BlockViewController()
    // 设置block中要传递的值的接收方式
    blo.passBlockValue = {
        (title:String) in
        self.positiveTF.text = title
    }
    self.presentViewController(blo, animated: true, completion: nil)
}
```

**BlockVC:**

```swift
var passBlockValue:((title:String) -> Void)? // 定义block，包含参数title
```

```swift
func back(sender:UIButton) {
    let tf:UITextField = self.view.viewWithTag(10001) as! UITextField
    passBlockValue?(title:tf.text!) // 使用block传递title这个值
    self.dismissViewControllerAnimated(true, completion: nil)
}
```

### KVO

KVO 只要是监听的属性，不管是正向还是反向都会触发 `observeValueForKeyPath` 方法，在其中做相应的显示即可。

**RootVC:**

```swift
var kvc:KVOViewController = KVOViewController() // 全局的KVOvc方便在deinit时removeobserver
```

```swift
@IBAction func KVOButtonDidTapped(sender: AnyObject) {
    kvc.k = kvo()

    // addObserver添加监听
    kvc.k.addObserver(self, forKeyPath: "title", options: [NSKeyValueObservingOptions.Old, NSKeyValueObservingOptions.New], context: nil)
    kvc.k.title = self.positiveTF.text!
    self.presentViewController(kvc, animated: true, completion: nil)
}
```

```swift
// 监听对象的属性或者实例变量发生变化，就自动调用该函数，执行相应操作
override func observeValueForKeyPath(keyPath: String?, ofObject object: AnyObject?, change: [String : AnyObject]?, context: UnsafeMutablePointer<Void>) {
    if keyPath == "title" {
        print(change!)
        var nv = change!
        let newvalue: AnyObject? = nv["new"]
        print("the new value is \(newvalue!)")
        self.positiveTF.text = "\(newvalue!)" // 将监听到的变化值赋值给TF来显示
    }
}

deinit {
    // removeObserver移除监听
    // add和remove必须对应，否则报错
    kvc.k.removeObserver(self, forKeyPath: "title", context: nil)
}
```

**KVOVC:**

```swift
//要监听的对象的定义
class kvo: NSObject {
    var ptitle : String = ""

    // dynamic修饰的即为可支持KVO
    dynamic var title : String {
        get {
            return self.ptitle
        }
        set {
            self.ptitle = newValue
        }
    }

    override init() {
        println("init")
    }

    deinit {
        println("deinit")
    }
}
```

```swift
func back(sender:UIButton) {
    let tit = (self.view.viewWithTag(10003) as! UITextField).text

    k.title = tit! // 对监听的属性赋值会触发observeValueForKeyPath方法

    self.dismissViewControllerAnimated(true, completion: nil)
}
```

### Notification

**RootVC:**

**viewDidLoad:**

```swift
// 注册一个通知
NSNotificationCenter.defaultCenter().addObserver(self, selector: "notifReceive:", name: "notifName", object: nil)
```

```swift
@IBAction func NotificationButtonDidTapped(sender: AnyObject) {
    let noti:NotificationViewController = NotificationViewController()
    noti.positiveValue = self.positiveTF.text!

    self.presentViewController(noti, animated: true, completion: nil)
}

// 每次调用对应name的postNotificationName方法会由selector处理
func notifReceive(notification:NSNotification) {
    self.positiveTF.text = "\(notification.object!)"
    print("notif : \(notification.name), \(notification.object!)")
}

deinit {
    ...
    // removeObserver移除对应name的通知
    NSNotificationCenter.defaultCenter().removeObserver(self, name: "notifName", object: nil)
}
```

**NotificationVC:**

```swift
func back(sender:UIButton) {
    let tit = (self.view.viewWithTag(10004) as! UITextField).text

    // 发送一个通知，name要对应。单一数据可用object传，多个数据可以用dictionary放进userInfo传
    NSNotificationCenter.defaultCenter().postNotificationName("notifName", object: tit, userInfo: nil)

    self.dismissViewControllerAnimated(true, completion: nil)
}
```

## 无向传值

其实就是利用 `NSUserDefaults` 来存取数据，哈哈。

## PS

- 所谓「反向传值」只是在业务逻辑上是从第二个 VC 回到第一个 VC 的过程中传值。并不是说列出的几种传值方式只能在反向情况下使用。

Demo: [](https://github.com/LinusLing/DifferentWaysToPassValueSwift)
