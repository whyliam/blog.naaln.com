---
title: 用Swift写一个发送邮件的iOS用户反馈
date: 2016/12/18 21:13:46
categories:
  - 技术
description: "介绍iOS应用中使用MFMailComposeViewController实现邮件反馈功能的完整流程，包括在Storyboard中建立静态列表、配置邮件视图、导入MessageUI框架、获取设备信息如系统版本设备型号以及应用版本号等关键步骤，并提供代码示例和实现细节注意事项，帮助开发者快速集成应用内邮件发送功能用于收集用户反馈。"
tags:
  - MFMailComposeViewController
  - UIDevice
  - StaticCells
  - MessageUI
  - iOSMail
layout: post
---

为了接收用户反馈，很多 iOS 应用都会在设置页面中，加入发送邮件功能——尤其当应用是由个人开发者开发时。当然 iOS 中邮件的发送方式有很多种，有体验相对较差 openURL 跳转方式，也有调用其他第三方库等办法。

不过较常用且方便的，还是如下图（应用为 [潮汐](https://itunes.apple.com/cn/app/chao-xi-mei-hao-fan-jia-zhong/id1077776989?mt=8)），调用系统的 MFMailComposeViewController 视图在应用内完成邮件发送，并返回应用。

![](http://pics.naaln.com/blog/2019-01-14-032236.gif-basicBlog)

### 建立静态列表

首先，拖一个 `Table View Controller` 到 `main.storyboard` 中，并选中 `Table View` 在右侧属性面板中将其设置为静态列表 `Static Cells`。

![](http://pics.naaln.com/blog/2019-01-14-032237.jpg-basicBlog)

为了演示方便这里就先创建一个 `Section`，其中有两行 `Cell`。两个 `Cell` 的 `Style` 都设置为 `Basic`，并将 `Title` 修改如下。

![](http://pics.naaln.com/blog/2019-01-14-032240.jpg-basicBlog)

接着在右边工具栏面板中为其设置好 `Custom Class`。由于这里暂时用不到这个 `UITableViewController` 类里的内容，可以把他们都注释掉或删掉。接着在其中重写一个 `tableView` 点选的函数：

```swift
override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath){

 if indexPath.section == 0 && indexPath.row == 0 {
  print("给应用评分")
 }

 if indexPath.section == 0 && indexPath.row == 1 {
  print("意见反馈")
 }
}
```

在模拟器中运行，点按 Cell，检查 output 区中 print 的内容是否正常，然后就可以进入下一步。

### 二、MFMailComposeViewController

处理完 `UITableViewController` 以后，就可以开始调用邮件视图了。不过先不急着写代码，首先需要导入框架 `MessageUI.framework`。在项目设置 `Build Phases` 的 `Link Binary With Libraries` 中添加 `MessageUI.framework`。

![](http://pics.naaln.com/blog/2019-01-14-032241.jpg-basicBlog)

然后在 `Controller` 里导入头文件 `import MessageUI`。并给 `Controller` 加上 `MFMailComposeViewControllerDelegate` 协议。

上述步骤搞定后，就可以愉快地写代码了。首先先写个函数，来配置发邮件的视窗。

```swift
func configuredMailComposeViewController() -> MFMailComposeViewController {

 let mailComposeVC = MFMailComposeViewController()
 mailComposeVC.mailComposeDelegate = self

 //设置邮件地址、主题及正文
 mailComposeVC.setToRecipients(["<你的邮箱地址>"])
 mailComposeVC.setSubject("<邮件主题>")
 mailComposeVC.setMessageBody("<邮件正文>", isHTML: false)

 return mailComposeVC

}
```

鉴于这种发送邮件的方式，要求用户已经在设备上至少添加有一个邮箱，所以对没有设置邮箱的用户，还应予以提示。因此这里再写一个函数，来配置针对未设置邮箱用户的弹窗提醒。

```
func showSendMailErrorAlert() {

 let sendMailErrorAlert = UIAlertController(title: "无法发送邮件", message: "您的设备尚未设置邮箱，请在「邮件」应用中设置后再尝试发送。", preferredStyle: .Alert)
 sendMailErrorAlert.addAction(UIAlertAction(title: "确定", style: .Default) { _ in })
 self.presentViewController(sendMailErrorAlert, animated: true){}

}
```

搞定这俩函数后，就可以在之前的 tableView 函数中调用两者了。

```swift
if indexPath.section == 0 && indexPath.row == 1 {
 print("意见反馈")

 if MFMailComposeViewController.canSendMail() {
  //注意这个实例要写在if block里，否则无法发送邮件时会出现两次提示弹窗（一次是系统的）
  let mailComposeViewController = configuredMailComposeViewController()
  self.presentViewController(mailComposeViewController, animated: true, completion: nil)
 } else {
  self.showSendMailErrorAlert()
 }

}
```

最后，写上 dismiss 邮件视窗的函数，就大功告成了。

```swift
func mailComposeController(controller: MFMailComposeViewController, didFinishWithResult result: MFMailComposeResult, error: NSError?) {

 switch result.rawValue {
 case MFMailComposeResultCancelled.rawValue:
  print("取消发送")
 case MFMailComposeResultSent.rawValue:
  print("发送成功")
 default:
  break
 }
 self.dismissViewControllerAnimated(true, completion: nil)

}
```

### 三、加入设备及应用信息

为了获得更加准确的反馈信息，可以在邮件正文里加入反馈者的设备及应用信息。那怎样使用 swift 获得设备信息呢？可以如下通过 UIDevice 取得。

```swift
//获取设备名称
let deviceName = UIDevice.currentDevice().name
//获取系统版本号
let systemVersion = UIDevice.currentDevice().systemVersion
//获取设备的型号
let deviceModel = UIDevice.currentDevice().model
//获取设备唯一标识符
let deviceUUID = UIDevice.currentDevice().identifierForVendor?.UUIDString
```

这里的设备型号 deviceModel 只能获知设备的简单区分（如是 iPhone 还是 iPad），如果需要详细的 iOS 设备信息，还需要写一个 UIDevice 的扩展。

```
//
//  UIDevice+DeviceInfo.swift
//  APEReactiveNetworking
//
//  Created by WhyLiam on 18/12/16.
//  Copyright © 2016 Apegroup. All rights reserved.
//
import Foundation

extension UIDevice {

    ///The device model name, e.g. "iPhone 6s", "iPhone SE", etc
    var modelName: String {
        var systemInfo = utsname()
        uname(&systemInfo)

        let machineMirror = Mirror(reflecting: systemInfo.machine)
        let identifier = machineMirror.children.reduce("") { identifier, element in
            guard let value = element.value as? Int8, value != 0 else {
                return identifier
            }
            return identifier + String(UnicodeScalar(UInt8(value)))
        }

        switch identifier {
        case "iPod5,1":                                 return "iPod Touch 5"
        case "iPod7,1":                                 return "iPod Touch 6"
        case "iPhone3,1", "iPhone3,2", "iPhone3,3":     return "iPhone 4"
        case "iPhone4,1":                               return "iPhone 4s"
        case "iPhone5,1", "iPhone5,2":                  return "iPhone 5"
        case "iPhone5,3", "iPhone5,4":                  return "iPhone 5c"
        case "iPhone6,1", "iPhone6,2":                  return "iPhone 5s"
        case "iPhone7,2":                               return "iPhone 6"
        case "iPhone7,1":                               return "iPhone 6 Plus"
        case "iPhone8,1":                               return "iPhone 6s"
        case "iPhone8,2":                               return "iPhone 6s Plus"
        case "iPhone8,4":                               return "iPhone SE"
        case "iPhone9,1", "iPhone9.3":                  return "iPhone 7"
        case "iPhone9,2", "iPhone9.4":                  return "iPhone 7 Plus"
        case "iPad2,1", "iPad2,2", "iPad2,3", "iPad2,4":return "iPad 2"
        case "iPad3,1", "iPad3,2", "iPad3,3":           return "iPad 3"
        case "iPad3,4", "iPad3,5", "iPad3,6":           return "iPad 4"
        case "iPad4,1", "iPad4,2", "iPad4,3":           return "iPad Air"
        case "iPad5,3", "iPad5,4":                      return "iPad Air 2"
        case "iPad2,5", "iPad2,6", "iPad2,7":           return "iPad Mini"
        case "iPad4,4", "iPad4,5", "iPad4,6":           return "iPad Mini 2"
        case "iPad4,7", "iPad4,8", "iPad4,9":           return "iPad Mini 3"
        case "iPad5,1", "iPad5,2":                      return "iPad Mini 4"
        case "iPad6,3", "iPad6,4", "iPad6,7", "iPad6,8":return "iPad Pro"
        case "AppleTV5,3":                              return "Apple TV"
        case "i386", "x86_64":                          return "Simulator"
        default:                                        return identifier
        }
    }
}
```

获取这些设备信息后，就可以在邮件正文中加入它们了，比如:

```swift
mailComposeVC.setMessageBody("\n\n\n系统版本：\(systemVersion)\n设备型号：\(modelName)", isHTML: false)
```

同理，也可以获得应用的相关信息。

```
let infoDic = NSBundle.mainBundle().infoDictionary

// 获取App的版本号
let appVersion = infoDic?["CFBundleShortVersionString"]
// 获取App的build版本
let appBuildVersion = infoDic?["CFBundleVersion"]
// 获取App的名称
let appName = infoDic?["CFBundleDisplayName"]
```

到这里，一个调用 MFMailComposeViewController 的 iOS 邮件反馈就基本写完了。运行的时候，要注意用虚拟器的话可能会报错，测试需要真机环境。效果如下。

![](http://pics.naaln.com/blog/2019-01-14-032243.gif-basicBlog)
