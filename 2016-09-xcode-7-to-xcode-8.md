---
title: 升级 xcode 7 到 xcode 8
date: 2016-09-17 20:14:20
categories:
- 技术
tags:
- Xcode
---

遇到的问题

```
XXX has conflicting provisioning settings. XXX is automatically provisioned, but provisioning profile WildCard has been manually specified. Set the provisioning profile value to "Automatic" in the build settings editor, or switch to manual provisioning in the target editor. Code signing is required for product type 'Application' in SDK 'iOS 10.0'
```

### 解决方法

#### 一、证书管理

用Xcode8打开工程后，比较明显的就是下图了，这个是苹果的新特性，可以帮助我们自动管理证书。建议大家勾选这个Automatically manage signing

![](http://pics.naaln.com/blog/2019-01-14-32501.jpg-basicBlog)

![](http://pics.naaln.com/blog/2019-01-14-032503.jpg-basicBlog)

解决办法是：大家在Xcode的偏好设置中，添加苹果账号，即可。

#### Pod 管理

在最后加入

```
post_install do |installer|
    installer.pods_project.targets.each do |target|
        target.build_configurations.each do |config|
            config.build_settings['SWIFT_VERSION'] = '2.3'
        end
    end
end
```

重新 `pod update`