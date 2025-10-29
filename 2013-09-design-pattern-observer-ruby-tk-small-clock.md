---
layout: post
title: 设计模式 观察者模式 -- Ruby/tk小时钟
date: 2013/09/14 06:25:00
categories:
  - 技术
tags:
  - Ruby
  - 设计模式
  - 观察者模式
  - 编程
  - 代码实现
description: 
  Ruby观察者模式实现讲解。通过对比Java实现设计的复杂性，展示Ruby实现观察者模式的简洁性。详细介绍观察者模式概念：A对象通知观察者对象自己状态改变，降低对象间耦合度。提供完整Ruby代码示例，包括被观察者CheckWaterTemperature类和观察者ClockView类，实现每秒通知时间的功能。
---

以前看用 java 实现设计模式，很是头疼，那么多的 java 概念融合在里面，完全影响了对模式自身的理解。实现起来也是相当麻烦。但是在 ruby 中，模式理解起来是那么的容易，倒是觉得使用 ruby 来理解设计模式挺靠谱的。

先介绍一种模式 - 观者者模式。

> 观察者模式（有时又被称为发布 - 订阅<Publish/Subscribe>模式、模型 - 视图<Model/View>模式、源 - 收听者<Source/Listener>模式或从属者模式）是软件设计模式的一种。在此种模式中，一个目标物件管理所有相依于它的观察者物件，并且在它本身的状态改变时主动发出通知。这通常透过呼叫各观察者所提供的方法来实现。此种模式通常被用来实作事件处理系统。

通俗点说就是 A 对象 (被观察) 通知另一个 (一些) 对象（观察者) 自己发生改变了，改变了什么，至于你们这些对象要做什么就不关我的事了，你们自己做去吧！耦合度就此降低了。。。

一段简单的 Ruby 观察者模式的实现：

```
   #!/usr/bin/env ruby
   require 'observer'
   class CheckWaterTemperature
     include Observable
     def run
       loop do
         changed()
         notify_observers(Time.now)
         sleep 1
       end
     end
   end
   class ClockView
     def update (time)
       puts time
     end
   end
   checker = CheckWaterTemperature.new
   checker.add_observer(ClockView.new)
   checker.run
```
