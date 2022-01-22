---
title: Swift之贪婪的UIButton
date: 2016/12/14 10:33:23
categories:
- 技术
tags:
- Swift
---

## 一、内容概要

![](http://pics.naaln.com/blog/2019-01-14-032255.jpg-basicBlog)

按钮是所有UI体系中非常重要的组件，在iOS中按钮UIButton的使用也非常灵活，本文将从以下几点介绍UIButton的使用（**基于Swift2.0**）：

1. UIButton基础
2. UIButton图片使用
3. 圆角按钮
4. 复选框按钮
5. 倒计时按钮（闪烁问题也轻松解决）
6. 贪婪按钮(父控件事件也归我，扩大事件响应区域)

## 二、UIButton基础

### 2.1创建

UIButton提供了一个简单的构造方法 

```
convenience init(type buttonType: UIButtonType)
```

此方法中需要我们传入一个**UIButtonType**枚举类型，使用代码如下：

```
func createButton() {
    let button = UIButton(type: UIButtonType.System)
    button.frame = CGRectMake(50, 50, 100, 50)
    button.setTitle("确定", forState: UIControlState.Normal)
    button.addTarget(self, action: "buttonPressed:", forControlEvents: UIControlEvents.TouchUpInside)
    self.view.addSubview(button)
}

func buttonPressed(button: UIButton) {
   
}
```

#### Tips:

1.设置按钮标题时，一定要通过 

```
func setTitle(_ title: String?, forState state: UIControlState)
```

不可通过 

```
button.titleLabel?.text = "确定"
```

此方式会在点击时标题自动变为**setTitle**方法Normal状态下的文字

### 2.2图片使用

UIButton提供了以下两个接口使用图片： 

```
func setImage(image: UIImage?, forState state: UIControlState)
func setBackgroundImage(image: UIImage?, forState state: UIControlState)
```

(1)其中接口**setImage**用来设置按钮的图片，默认情况下，它会与按钮文字水平线性排列 

(2)接口**setBackgroundImage**用来设置按钮的背景图片，**setImage**及按钮文字都会显示在背景图片之上 

这里着重讨论一下**setBackgroundImage**接口，很多时候，按钮看起来是这样的

![](http://pics.naaln.com/blog/2019-01-14-032257.jpg-basicBlog)

这些按钮，背景相同，只是尺寸不一样，下面来谈一下，如何复用这一类图片资源。

#### 2.2.1代码方式

##### 2.2.1.1 原理说明

在UIImage接口中，有以下方法 

```
func resizableImageWithCapInsets(_ capInsets: UIEdgeInsets) -> UIImage
```

使用此方法时，需要传递**UIEdgeInsets**作为参数，创建接口如下： 

```
func UIEdgeInsetsMake(_ top: CGFloat, _ left: CGFloat, _ bottom: CGFloat, _ right: CGFloat)
```

这个方法提供了上下左右的参数来创建**可变区域**,如下图（Tips:下图标明的可变区域与视图内边距是不同的概念）

![](http://pics.naaln.com/blog/2019-01-14-032258.jpg-basicBlog)

图中，蓝色标识为可变区域， 绿色标识为不变区域。**UIEdgeInsets**结构体的属性**top**与**bottom**为一对，用来指定纵向可变区域（黑色虚线矩形），**left**与**right**为一对，用来指定横向可变区域(白色虚线矩形)。当UIButton/UIImageView的**size**大于UIImage的**size**时，会调整图片中可变区域大小以铺满整个控件，具体调整规则如下：

    (1)控件宽度大于图片宽度，拉伸白色虚线矩形
    (2)控件高度大于图片高度，拉伸黑色虚线矩形
    (3)控制宽度小于图片宽度时，横向整体缩小(可变区与不变区比例不变)
    (4)控制高度小于图片高度时，纵向整体缩小(可变区与不变区比例不变)

iOS系统会根据设备的分辨率自动加载1倍图、2倍图、3倍图，而方法**resizableImageWithCapInsets**中的上下左右是以像素为单位，这就要求在使用时，根据**x**倍图，来设置对应的边距，例如：

```
let image = UIImage(named: "image_name")
//1倍图时上下左右边距都是25
let padding = 25 * (image?.scale)!
let edge = UIEdgeInsetsMake(padding, padding, padding, padding)
let resizeImage = image?.resizableImageWithCapInsets(edge)
button.setBackgroundImage(resizeImage!, forState: UIControlState.Normal)
```

##### 2.2.1.2性能与可变区域大小的关系

(1) 性能最好：可变区为1像素宽或者高时，绘图时通过拉伸1像素方式 

(2) 性能较好：可变区为整张图片，方法**resizableImageWithCapInsets**参数为**UIEdgeInsetsZero**，绘制时通过平铺整张图片方式 

(3) 性能较差：可变区宽或者高大于1像素时，绘图时通过平铺方式，此种方式性能较差，但是在实际开发中此种方式也是用的最多的一种。

##### Tips 
在一些应用中，应用程序有一些非纯色背景，这个背景会在多个界面使用，由于设备分辨率、界面控件的尺寸差别，会要求制作多个尺寸的图，导致ipa包变大、内存使用增加。这里结合上面**(2)**设置可变区为整张图片，可以解决此问题，原理请看[无缝贴图](http://baike.baidu.com/link?url=EDIwNePycksKQ9MceuZpQLk0C12VWOS4lvb1wVQlzEgW8zliYw44HqDP8RHwArL8uldvUWpXZ3qg4MHgeDtm4K)

![](http://pics.naaln.com/blog/2019-01-14-032300.jpg-basicBlog)

示例代码如下：

```
let image = UIImage(named: "tile")
let resizeImage = image?.resizableImageWithCapInsets(UIEdgeInsetsZero)
self.bkImageView.image = resizeImage
```

#### 2.2.2 Asset Catalogs方式(推荐)

Xcode提供了Asset Catalogs的方式来管理图片资源，Asset Catalogs提供了可视化界面来设置图片的可变区，操作方便，使用简单。点击右下方的**Show Slicing**

![](http://pics.naaln.com/blog/2019-01-14-32301.jpg-basicBlog)

进入编辑模式后，图片的中间会有一个**Start Slicing**按钮，点击后，会让我们选择拉伸方式，如下图：

![](http://pics.naaln.com/blog/2019-01-14-032301.jpg-basicBlog)

三个按钮的作用

    按钮1只做水平拉伸
    按钮2水平垂直都拉伸
    按钮3只做垂直拉伸

水平及垂直的拉伸处理相同，这里以水平为例，选择水平拉伸按钮1后，会提供三条操作线用来指定可变区及删除区

![](http://pics.naaln.com/blog/2019-01-14-032302.jpg-basicBlog)

可变区：操作线1与操作线2指定的区域，在拉伸时，会根据最终尺寸改变此区域的大小 

删除区：操作线2与操作线3指定的区域（白色半透明层），可以简单的理解为，此区域在拉伸时会被直接删除。使用方法跟普通图片一样，代码如下：

```
let image = UIImage(named: "image_asset_name")
button.setBackgroundImage(image, forState: UIControlState.Normal)
```

![](http://pics.naaln.com/blog/2019-01-14-032303.jpg-basicBlog)

## 三、UIButton其它用法

### 3.1圆角按钮

有些时候，我们需要一个圆形按钮，例如头像：

![](http://pics.naaln.com/blog/2019-01-14-032304.jpg-basicBlog)

```
let image = UIImage(named: "user_avatar")
self.button.setImage(image, forState: UIControlState.Normal)
self.button.imageView?.layer.cornerRadius = self.button.frame.width / 2
```

### 3.2复选框按钮

UIKit中没有复选框组件怎么办？

![](http://pics.naaln.com/blog/2019-01-14-032305.jpg-basicBlog)

```
func checkBoxButton() {
    let frame = CGRectMake(68, 79, 300, 128)
    let button = UIButton(type: UIButtonType.Custom)
    button.setTitleColor(UIColor.whiteColor(), forState: UIControlState.Normal)
    button.frame = frame
    button.titleLabel?.font = UIFont.systemFontOfSize(30)
    button.contentHorizontalAlignment = UIControlContentHorizontalAlignment.Left
    button.setTitle("复选框按钮", forState: UIControlState.Normal)
    //上面是样式的设定，下面才是跟复选框有关
    button.addTarget(self, action: "buttonPressed:", forControlEvents: UIControlEvents.TouchUpInside)
    button.setImage(UIImage(named: "check"), forState: UIControlState.Normal)
    button.setImage(UIImage(named: "uncheck"), forState: UIControlState.Selected)
    self.view.addSubview(button)
   
}

func buttonPressed(button: UIButton) {
    button.selected = !button.selected
}
```

### 3.3倒计时按钮（闪烁问题也轻松解决）

很多应用中发短信倒计时功能，一般都会将NSTimer与UIButton结合来实现此功能，如果UIButton是这么初使化的：

```
let button = UIButton(type: UIButtonType.System)
```

在测试时会发现，当定时器每隔一秒更改标题时，会有闪烁现象，将**UIButtonType.System**更改为**UIButtonType.Custom**即可

这里提供封装好的倒计时按钮大家可以直接下载使用 

[http://00red.com/download/Swift之贪婪的UIButton/ILCountDownButton.swift](http://00red.com/download/Swift之贪婪的UIButton/ILCountDownButton.swift) 

使用示例如下：

```
let frame = CGRectMake(50, 50, 100, 40)
let countButton = ILCountDownButton(count: 5)
countButton.frame = frame
countButton.setBackgroundImageForCount(UIImage(named: "bk_count")!)
countButton.setBackgroundImageForRestart(UIImage(named: "bk_restart")!)
countButton.setTitleForRestart("重新发送")
self.view.addSubview(countButton)
```

## 四、贪婪按钮

UIButton的frame会直接影响到**setImage**及**setBackgroundImage**的显示效果，有的时候我们只需要扩大UIButton的点击区域，而不想直接修改UIButton的frame而影响显示。这时可以通过以下方法来处理

![](http://pics.naaln.com/blog/2019-01-14-032307.jpg-basicBlog)

将UIButton的父视图(superView)的点击事件占有，所有的触控操作全部转嫁到UIButton控件上。iOS在处理事件分发时，分为两个步骤：第一步，查找哪一个UI组件响应此事件，第二步，事件处理，响应者链。要实现事件的转嫁，在第一步中来处理即可，代码如下：

```
class ILGreedButton: UIButton {
   
    override func hitTest(point: CGPoint, withEvent event: UIEvent?) -> UIView? {
        return self
    }

}
```

在使用**ILGreedButton**时，就会出现点击父视图，UIButton响应事件的效果

来源 ：[](http://00red.com/blog/2015/07/28/teacher-swift-ui-button/)