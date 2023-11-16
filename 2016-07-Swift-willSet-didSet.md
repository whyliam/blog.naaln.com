---
title: Swift - 属性观察者（willSet与didSet）
date: 2016/07/17 13:09:45
tags:
- Swift
categories:
- 技术
---

属性观察者，类似于触发器。用来监视属性的除初始化之外的属性值变化，当属性值发生改变时可以对此作出响应。有如下特点：

1. 不仅可以在属性值改变后触发didSet，也可以在属性值改变前触发willSet。
2. 给属性添加观察者必须要声明清楚属性类型，否则编译器报错。
3. willSet可以带一个newName的参数，没有的话，该参数默认命名为newValue。
4. didSet可以带一个oldName的参数，表示旧的属性，不带的话默认命名为oldValue。
5. 属性初始化时，willSet和didSet不会调用。只有在初始化上下文之外，当设置属性值时才会调用。
6. 即使是设置的值和原来值相同，willSet和didSet也会被调用

示例如下：

```swift
class People
{
    //普通属性
    var firstName:String = ""
    var lastName:String  = ""
    var nickName:String  = ""

    //计算属性
    var fullName:String
    {
        get
        {
            return nickName + " " + firstName + " " + lastName
        }
    }

    //带属性监视器的普通属性
    var age:Int = 0
    {
        //我们需要在age属性变化前做点什么
        willSet
        {
            print("Will set an new value \(newValue) to age")
        }
        //我们需要在age属性发生变化后，更新一下nickName这个属性
        didSet
        {
            print("age filed changed form \(oldValue) to \(age)")
            if age<10
            {
                nickName = "Little"
            }else
            {
                nickName = "Big"
            }
        }
    }

    func toString() -> String
    {
        return "Full Name: \(fullName) " + ", Age: \(age) "
    }

}

let me = People()
me.firstName = "Li"
me.lastName  = "Lei"
me.age = 30

print(me.toString())

/*程序输出
Will set an new value 30 to age
age filed changed form 0 to 30
Full Name: Big Li Lei , Age: 30
*/
```

原文: [http://www.hangge.com/blog/cache/detail_519.html](http://www.hangge.com/blog/cache/detail_519.html)