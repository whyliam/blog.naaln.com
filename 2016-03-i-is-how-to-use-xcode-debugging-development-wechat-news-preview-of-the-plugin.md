---
layout: post
title: 我是如何利用Xcode调试开发微信消息预览插件的
date: 2016/03/08 22:48:00
categories:
  - 技术
description: "讲解在非越狱iOS设备上开发微信消息预览插件，通过动态库注入和hook技术实现消息预览功能，利用Xcode脚本自动化生成、签名、安装应用流程，提高开发效率并解决签名错误和库加载问题。"
tags:
  - iOS逆向
  - 微信插件
  - 动态库注入
  - hook
  - 调试
---

平时在微信使用时，经常出现这样的场景：阅读公众号文章时，突然一条好友消息来了。这时一直很纠结，我该停止阅读还是继续阅读。假如我可以预览消息的话，甚至回复消息后快速回来继续阅读。那太好不过了。

学习过 iOS 逆向开发的话，利用 theos 在越狱机器上实现还是可以的。但由于日常使用的是非越狱机器，鱼和熊掌都想要，只好在万能的 google 上寻找资料，终于找到了 insert_dylib 工具和念茜的博客上动态库注入相关知识。OK，开工！

### 效果图

![](http://alayshchen.github.io/images/blogImages/20160226/0.gif-basicBlog)

### 需求分析

1. 公众号文章界面（网页）：收到消息后，显示消息内容
2. 公众号文章界面（网页）：点击消息内容进入对应聊天界面
3. 聊天界面：点击网页标志，跳回公众号文章界面（网页）

### 代码分析

结合需求，需要 hook 的主要是微信消息通知 `Method`，聊天界面 `ViewController`，网页 `ViewController`。利用工具 `class-dump`, `Hopper Disassembler` 很快定位出需要 hook 的微信代码，`-[CMessageMgr AsyncOnAddMsg:MsgWrap:]` `-[BaseMsgContentViewController viewDidLoad]` `-[MMWebViewController viewDidLoad]`

### 磨刀霍霍

1. 定位出 hook 代码段，接下来要做的就是写代码了。

Xcode 现在支持建立动态库工程，但生成的是 framework，可以通过修改工程文件下的 `project.pbxproj productType = "com.apple.product-type.framework"; => productType = "com.apple.product-type.library.dynamic"`

![](http://alayshchen.github.io/images/blogImages/20160226/1.png-basicBlog)

1. 利用 iOSOpenDev 也可以快速生成动态库工程。

![](http://alayshchen.github.io/images/blogImages/20160226/2.png-basicBlog)

这里注意要设置好签名证书，后续可能因为证书问题导致失败。

```
- (void)cb_AsyncOnAddMsg:(NSString *)msg MsgWrap:(CMessageWrap *)wrap {
   [self cb_AsyncOnAddMsg:msg MsgWrap:wrap];

   [CBNewestMsgManager sharedInstance].username = msg;
   [CBNewestMsgManager sharedInstance].content = wrap.m_nsContent;

   [[NSNotificationCenter defaultCenter] postNotificationName:CBWeChatNewMessageNotification object:nil];

}

- (void)cb_msgContentViewControllerViewDidLoad {
   [self cb_msgContentViewControllerViewDidLoad];

   UIButton *button = [[UIButton alloc] initWithFrame:CGRectMake(self.view.frame.size.width - 40, 74, 40, 40)];
   UIImage *image = [UIImage imageWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"WeChatMsgPreview_safari@2x" ofType:@"png"]];
   [button setImage:image forState:UIControlStateNormal];
   [button addTarget:self action:@selector(backToWebViewController) forControlEvents:UIControlEventTouchUpInside];
   [self.view addSubview:button];

}

- (void)cb_webViewControllerViewDidLoad {
   [self cb_webViewControllerViewDidLoad];

   [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(cb_didReceiveNewMessage) name:CBWeChatNewMessageNotification object:nil];

}

- (void)cb_didReceiveNewMessage {
   NSString *username = [CBNewestMsgManager sharedInstance].username;
   NSString *content = [CBNewestMsgManager sharedInstance].content;
   CContactMgr *contactMgr = [[objc_getClass("MMServiceCenter") defaultCenter] getService:[objc_getClass("CContactMgr") class]];
   CContact *contact = [contactMgr getContactByName:username];

   dispatch_async(dispatch_get_main_queue(), ^{
       NSString *text = [NSString stringWithFormat:@"  %@: %@  ", contact.m_nsNickName, content];
       [CBMessageHud showHUDInView:self.view text:text target:self action:@selector(backToMsgContentViewController)];
   });

}

- (void)backToWebViewController {
   NSArray *webViewViewControllers = [CBNewestMsgManager sharedInstance].webViewViewControllers;
   if (webViewViewControllers) {
       [[objc_getClass("CAppViewControllerManager") getCurrentNavigationController] setViewControllers:webViewViewControllers animated:YES];
   }

}

- (void)backToMsgContentViewController {
   // 返回聊天界面ViewController前记录当前navigationController的VC堆栈，以便快速返回
   NSArray *webViewViewControllers = [objc_getClass("CAppViewControllerManager") getCurrentNavigationController].viewControllers;
   [CBNewestMsgManager sharedInstance].webViewViewControllers = webViewViewControllers;

   // 返回rootViewController
   UINavigationController *navVC = [objc_getClass("CAppViewControllerManager") getCurrentNavigationController];
   [navVC popToRootViewControllerAnimated:NO];

   // 进入聊天界面ViewController
   NSString *username = [CBNewestMsgManager sharedInstance].username;
   CContactMgr *contactMgr = [[objc_getClass("MMServiceCenter") defaultCenter] getService:[objc_getClass("CContactMgr") class]];
   CContact *contact = [contactMgr getContactByName:username];
   MMMsgLogicManager *logicMgr = [[objc_getClass("MMServiceCenter") defaultCenter] getService:[objc_getClass("MMMsgLogicManager") class]];
   [logicMgr PushOtherBaseMsgControllerByContact:contact navigationController:navVC animated:YES];

}

```

最后关键的一步~

```

#define CBHookInstanceMethod(classname, ori_sel, new_sel)

{

Class class = objc_getClass(#classname);

Method ori_method = class_getInstanceMethod(class, ori_sel);

Method new_method = class_getInstanceMethod(class, new_sel);

method_exchangeImplementations(ori_method, new_method);

}

static void __attribute__((constructor)) initialize(void) {
   CBHookInstanceMethod(CMessageMgr, @selector(AsyncOnAddMsg:MsgWrap:), @selector(cb_AsyncOnAddMsg:MsgWrap:));
   CBHookInstanceMethod(BaseMsgContentViewController, @selector(viewDidLoad), @selector(cb_msgContentViewControllerViewDidLoad));
   CBHookInstanceMethod(MMWebViewController, @selector(viewDidLoad), @selector(cb_webViewControllerViewDidLoad));

}

```

好了，command＋B 成功生成动态库文件，下一步，利用 insert_dylib 修改微信可执行文件，重签名，生成新的微信 app，安装到手机。嗯嗯，这样文章到这里就结束了～～

慢着，真正开发时哪会这么简单，代码一次成功。一旦代码出现问题，我们需要一直手动重复这样的工作：修改代码，生成 dylib，修改微信可执行文件，重签名，生成新的 app，安装到手机。

注意注意，博文的标题里有「调试」，调试！！！怎么做呢？

### 偷天换日

细心观察可以发现

1. 任意一个 app 工程，run 后在 Derived Data 文件夹都有对应的。app 文件
2. 在 Build Phases 中增加 Run Script，可以在编译工程后执行自定义脚本。

于是，一招偷天换日招数就想出来了（通过脚本，在编译工程后，利用新生成的动态库生成 WeChat.app, 替换原有目录下的 app 文件）

1. 在原有工程中增加 Application Target
2. 在 Build Phases 中设置 Target Dependencies，增加 dylib，确保每次 run app 都会编译最新的 dylib

![](http://alayshchen.github.io/images/blogImages/20160226/3.png-basicBlog)

1. 然后增加 Run Script（修改微信可执行文件，重签名，生成新的 app）接下来的事情（安装 app，打开手机 app，lldb 调试）就交给 Xcode 做了。

```#!/bin/bash

BUNDLEIDENTIFIER=com.tencent.xin

APPLICATIONIDENTIFIER=***.${BUNDLEIDENTIFIER}

WECHATFILEPATH=***/apps/WeChat

LIBNAME=$(find *.dylib)

TEMPDIR=$(mktemp -d)

ORIGINDIR=$(pwd)

# 0.get argv

if [ x$1 != x ]

then

	BUNDLEIDENTIFIER=$1

fi

# 1.unzip ipa

if [ $arch == "arm64" ]

then

unzip -qo ${WECHATFILEPATH}/WeChat-dump-arm64.ipa -d $TEMPDIR

else

unzip -qo ${WECHATFILEPATH}/WeChat-dump-armv7.ipa -d $TEMPDIR

fi

# 2.copy files

cp ${WECHATFILEPATH}/embedded.mobileprovision $TEMPDIR/

cp ${WECHATFILEPATH}/entitlements.plist $TEMPDIR/

cp ${LIBNAME} $TEMPDIR/

# 3.resign

cd $TEMPDIR

plutil -replace application-identifier -string ${APPLICATIONIDENTIFIER} entitlements.plist

plutil -replace CFBundleIdentifier -string ${BUNDLEIDENTIFIER} Payload/WeChat.app/Info.plist

mv ${LIBNAME} Payload/WeChat.app/

insert_dylib --all-yes @executable_path/${LIBNAME} Payload/WeChat.app/WeChat

mv Payload/WeChat.app/WeChat_patched Payload/WeChat.app/WeChat

chmod +x Payload/WeChat.app/WeChat

rm -rf Payload/WeChat.app/_CodeSignature

rm -rf Payload/WeChat.app/PlugIns

rm -rf Payload/WeChat.app/Watch

cp embedded.mobileprovision Payload/WeChat.app/

codesign -fs "iPhone Developer: *** (***)" --no-strict --entitlements=entitlements.plist Payload/WeChat.app/${LIBNAME}

codesign -fs "iPhone Developer: *** (***)" --no-strict --entitlements=entitlements.plist Payload/WeChat.app

# 4.end

mv Payload/WeChat.app ${ORIGINDIR}

rm -rf ${TEMPDIR}

```

![](http://alayshchen.github.io/images/blogImages/20160226/4.png-basicBlog)

### 常见问题

```

dyld: Library not loaded: @executable_path/libWeChatMsgPreview.dylib

 Referenced from: /var/mobile/Containers/Bundle/Application/55148CD1-0D6E-4F6B-B55C-08261695B408/WeChat.app/WeChat

 Reason: image not found

```

原因：没拷贝 libWeChatMsgPreview.dylib 到 WeChat.app 目录下

```

dyld: Library not loaded: @executable_path/libWeChatMsgPreview.dylib

 Referenced from: /var/mobile/Containers/Bundle/Application/F62EF4DE-7A8E-4564-8839-7FED32FB0927/WeChat.app/WeChat

 Reason: no suitable image found.  Did find:

	/var/mobile/Containers/Bundle/Application/F62EF4DE-7A8E-4564-8839-7FED32FB0927/WeChat.app/libWeChatMsgPreview.dylib: mmap() errno=1 validating first page of '/var/mobile/Containers/Bundle/Application/F62EF4DE-7A8E-4564-8839-7FED32FB0927/WeChat.app/libWeChatMsgPreview.dylib'

	/private/var/mobile/Containers/Bundle/Application/F62EF4DE-7A8E-4564-8839-7FED32FB0927/WeChat.app/libWeChatMsgPreview.dylib: mmap() errno=1 validating first page of '/private/var/mobile/Containers/Bundle/Application/F62EF4DE-7A8E-4564-8839-7FED32FB0927/WeChat.app/libWeChatMsgPreview.dylib'

```

原因：签名不对，需保持重签名时 `codesign -fs "iPhone Developer: *** (***)" --no-strict --entitlements=entitlements.plist Payload/WeChat.app/${LIBNAME} codesign -fs "iPhone Developer: *** (***)" --no-strict --entitlements=entitlements.plist Payload/WeChat.app` 证书一致

脚本中涉及到的 WeChat-dump-arm64.ipa 需要从越狱机器中提取。[对 App Store App 进行重签名–解密][1]

来源：[我是如何利用Xcode调试开发微信消息预览插件的](http://alayshchen.github.io/2016/02/26/20160226/)

 [1]: http://alayshchen.github.io/2015/11/05/Resign-AppStore-App/
