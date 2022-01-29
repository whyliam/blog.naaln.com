---
layout: post
title: Ruby社区应该去Rails化了
date: 2013/04/06 10:28:00
categories:
- 技术
tags:
---

## 从Linkedin和Iron.io抛弃ruby说起

最近半年关于Ruby编程语言最负面的两条新闻莫过于2012年10月的报导：[Linkedin从ruby迁移到node.js，30台服务器减到3台](http://highscalability.com/blog/2012/10/4/linkedin-moved-from-rails-to-node-27-servers-cut-and-up-to-2.html)，以及2013年3月的报导：[Iron.io从ruby迁移到Go，30台服务器减到2台](http://highscalability.com/blog/2013/3/13/ironio-moved-from-ruby-to-go-28-servers-cut-and-colossal-clu.html)

node.js和Go都是最近两年服务器端高并发编程的热门语言，Linkedin和Iron.io抛弃Ruby迁移之后，都获得10倍以上的系统性能提升，效果非常好。当然这两篇新闻报导引发的争议也非常大，最大的争议在于：原有Ruby编写的应用是随着业务经过长时间代码演化而成的，代码可维护性和架构都已经存在严重的问题，即使沿用Ruby on rails重写，也会获得巨大的性能提升，非编程语言迁移之功。

诚然，继续沿用Ruby on rails重写或者重构应用，性能可能会有一两倍的提升，但无法弥合10倍以上的性能差距，难道说ruby真的如此不堪吗？注定要被node.js或者Go所取代吗？

## Ruby的性能真的如此不堪吗？

JGW Maxwell在2011年底做了一个[Ruby Web框架的并发处理能力测试](http://jgwmaxwell.com/accelerating-ruby-apis/)，还做了node.js的对比测试。用250个并发去做压力测试，后端使用MongoDB数据库，总共跑完10万个请求，测试结果如下：

| Web框架 | 并发模型 | 吞吐量 |
| --- | --- | --- |
| Rails | 多进程 | 531 request/s |
| Sinatra | 多进程 | 576 request/s |
| Sinatra::Synchrony | 纤程 | 1692 request/s |
| Goliath | 纤程 | 1924 request/s |
| Cramp | Event IO | 3516 request/s |
| node.js | Event IO | 3100 request/s |

纤程IO模型的性能是传统多进程模型的3-4倍，而Event IO则是多进程的6-7倍。值得一提的是Ruby的Event IO框架Cramp甚至性能超过了node.js。看来并发性能差的原因并不在Ruby。

如果说这仅仅只是测试，不能说明问题，那么我再举一个真实的应用数据。去年年底我和[@黄志敏](http://weibo.com/flyerhzm)交流，得知他为公司最近开发的一个API Server使用了Ruby的纤程框架[Goliath](http://postrank-labs.github.com/goliath/)，线上数据：

-
VPS上总共使用了16个CPU内核，跑了16个单进程实例

-
每个进程实例稳定消耗50MB内存

-
Web框架使用Goliath, URL分发是grape，数据库访问使用ActiveRecord，缓存使用Redis

-
应用吞吐量达到了1800 request/s

这个数据意味着一台配备了4颗4核CPU，2G内存的服务器，每天可以处理 _1.5亿次_ web请求。由此可见，Ruby完全可以做到高并发IO的应用。问题主要不在ruby解释器上，而在Rails框架上。更准确的说就是， _ruby on rails作为一个full-stack的web开发框架，并不适合用来开发Linkedin和Iron.io的后台web服务，从某种意义上来说，属于rails的时代已经过去了_

## 移动时代，Web服务将取代Web网站

随着最近几年智能手机的迅速普及，如今来自智能手机和移动设备的总体Web访问和服务请求量已经超过了传统的PC，这意味着Web时代主流的Browser/Server的架构重新回到了Mobile Client/Server的架构。在B/S架构下，在服务器端生成完整的HTML页面，我们需要开发一个完整的Website；但在移动时代，服务器端的功能大大简化了，退化成了Web API调用接口提供者，而复杂的界面构造、交互和运算都是在移动客户端完成的。

传统的Website将越来越让位于Web Service，移动客户端无论是iOS，Android还是HTML5都通过API调用获取服务器端的json/xml格式的数据，无需服务器端生成HTML页面了。这种B/S架构重新往C/S架构的迁移，也意味着full-stack Web框架将越来越没有用武之地了。

Web服务器端并发常见的三种应用场景：

-
Website：传统Web网站

-
Web Service：Web服务端提供API调用接口

-
real-time：Web实时推送

| 并发场景 | 业务逻辑 | 界面构造 | 数据格式 | IO并发 |
| --- | --- | --- | --- | --- |
| Website | 复杂，功能多 | 服务端组装页面 | HTML页面 | 很低 |
| Web Service | 简单，功能少 | 客户端组装页面 | json/xml | 高 |
| real-time | 单一，功能极少 | 客户端实时响应 | json/xml | 极高 |

我们看Linkedin和Iron.io的案例，都是非常典型的Web Service的应用场景：Linkedin使用Rails开发了移动服务器的API网关，而Iron.io用Rails开发了搜集客户设备数据的后台服务，这些都不是Rails最擅长的开发website的场景，所以最终Rails被抛弃，并不是一个很意外的结果。

## Rails为何不适合做Web Service?

我发现了一个有意思的现象，最早的一批用Ruby开发Web Service服务的网站，都选择了用Rails开发，而在最近几年又不约而同抛弃Rails重写Web服务框架。当初用Rails的原因很简单，因为产品早期起步，不确定性很高，使用Rails快速开发，可以最大限度节约开发成本和时间。但为何当请求量变大以后，Rails不再适合了呢？

这主要是因为Rails本身是一个full-stack的Web框架，所有的设计目标就是为了开发Website，所以Rails框架封装过于厚重，对于需要更高性能更轻薄的Web Service应用场景来说，暴露出来了很多缺陷：

### Rails调用堆栈过深，URL请求处理性能很差

Rails的设计目标是提供Web开发的 _最佳实践_ ，所以无论你需要不需要，Rails默认提供了开发Website所有可能的组件，但其中绝大部分你可能一辈子都用不上。例如Rails项目默认添加了20个middleware，但其中10个都是可以去掉的，我们自己的项目当中手工删除了这些middleware：

config.middleware.delete 'Rack::Cache'   # 整页缓存，用不上

config.middleware.delete 'Rack::Lock'    # 多线程加锁，多进程模式下无意义

config.middleware.delete 'Rack::Runtime' # 记录X-Runtime（方便客户端查看执行时间）

config.middleware.delete 'ActionDispatch::RequestId' # 记录X-Request-Id（方便查看请求在群集中的哪台执行）

config.middleware.delete 'ActionDispatch::RemoteIp'  # IP SpoofAttack

config.middleware.delete 'ActionDispatch::Callbacks' # 在请求前后设置callback

config.middleware.delete 'ActionDispatch::Head'      # 如果是HEAD请求，按照GET请求执行，但是不返回body

config.middleware.delete 'Rack::ConditionalGet'      # HTTP客户端缓存才会使用

config.middleware.delete 'Rack::ETag'    # HTTP客户端缓存才会使用

config.middleware.delete 'ActionDispatch::BestStandardsSupport' # 设置X-UA-Compatible, 在nginx上设置

其中最夸张的是`ActionDispatch::RequestId`middleware，只有在大型应用部署在群集环境下进行线上调试才可能用到的功能，有什么必要做成默认的功能呢？ _Rails的哲学是：提供最全的功能集给你，如果你用不到，你自己手工一个一个关闭掉_ ，但是这样带来的结果就是默认带了太多不必要的冗余功能，造成性能损耗极大。

我们看一个[Ruby web框架请求处理性能评测](https://github.com/DAddYE/web-frameworks-benchmark/wiki/Achiu) ，这个评测不访问数据库，也不测试并发性能，主要是测试框架处理URL请求路由，渲染文本，返回结果的处理速度。

| Web框架 | 处理速度 |
| --- | --- |
| Rack | 1570.43 request/s |
| Camping | 1166.16 request/s |
| Sinatra | 912.81 request/s |
| Padrino | 648.68 request/s |
| Rails | 291.27 request/s |

Sinatra至少是Rails速度的3倍以上。

### Rails加载的框架和依赖库过多，内存消耗过度

Rails自身依赖库非常多，造成的结果就是Rails应用持续运行以后内存消耗非常高。举个例子：如果你用到了Rails的asset pipeline功能，那么项目需要依赖一个JS引擎来编译JS和CSS，默认会使用libv8这个库。尽管只是编译阶段使用libv8，运行期并不需要它，但是仍然会加载libv8，这意味着你的每个ruby进程会多占20MB内存。在我们其中一个大项目上，总共开了40个ruby进程，直接浪费了800MB内存。于是我们不得不在生产服务器上安装了node.js，替换了libv8。

此外，一旦其中某个依赖库有内存泄露，整个应用也可能出现内存泄露，这种内存泄露是很讨厌的事情，Rails如此肆无忌惮不加限制的使用第三方依赖库也是一个潜在的隐患。

最后，Rails的Restful路由也是内存消耗大户，它默认会生成全套的URL路由helpers，无论你实际是否使用到，造成的结果就是内存会消耗很多，而且URL路由请求的处理速度会很慢，以致于有第三方专门开发了插件去关闭无用的路由。

我做了一个稍完整的案例比较，分别使用Sinatra, Padrino和Rails框架开发一个简单的数据库CRUD应用，数据库访问都是用ActiveRecord，在我的iMac电脑上，3个ruby应用单进程消耗的内存分别是：

| Web框架 | 物理内存 |
| --- | --- |
| Sinatra | 45MB |
| Padrino | 60MB |
| Rails | 85MB |

### Rails传统多进程模型的IO并发能力很低

Rails的多进程并发模型的IO并发能力很低，开多少个进程，就只能同时响应多少个并发请求，但Ruby进程的内存消耗是很大的，多进程调度的CPU开销也很高，这决定了单台服务器上能开的进程数是非常有限的，一般不会超过30个。但是对于Web Service类型的应用，需要很高的IO并发处理能力，传统Rails多进程很容易就会出现负载的瓶颈。

提高Web应用的IO并发能力，必须抛弃多进程模型，改用多线程模型，纤程模型或者事件驱动的并发编程模型。关于这个话题，我写过一个ppt，请参考：[Web并发编程模型的粗浅探讨](http://vdisk.weibo.com/s/kiwIU) ，这篇文章不展开了。总之，我个人更推荐使用Sinatra/Padrino编写多线程的Web服务端应用，或者为了追求更高的并发性能，可以使用Goliath的纤程并发。

从Rails4.0开始，默认也开启了多线程模式，也可以支持多线程方式运行Rails应用。但就目前来说，Rails使用多线程，还面临一些兼容性问题：大量的Rails插件和代码不是线程安全的，在多线程模型下运行，会出现意想不到的bug；另外Rails的多线程应用尚未得到广泛应用，可能会有潜在的bug：

我们尝试在一个实际的生产系统上打开Rails3.2的多线程模式运行，对代码和插件都进行了兼容性修改和仔细的代码审查。但实际跑下来发现，应用系统出现了隐蔽的内存泄露问题，Ruby进程内存会一直增长下去，直到服务器内存占满，进程失去响应，这个bug至今未能找到原因。

_总之Rails适合开发Website，但不太适合Web Service，而移动时代的发展趋势就是：未来服务器端会更多的使用Web Service而不是Website，这也意味着Rails将越来越不适合时代的发展_

## 我们应该用什么Ruby框架？

我一直觉得Ruby社区的很多开发者长期以来待在Rails的舒适区里面，完全丧失了探索和尝试其他东西的勇气，其实在Rails的世界之外，Ruby社区的好东西还有很多很多。这里简单介绍3个Ruby轻量级框架，性能都远远超过Rails，很适合做Web Service：

- [Sinatra](http://www.sinatrarb.com/intro-zh.html)

Sinatra本身也是Ruby社区非常流行和著名的轻量级Web框架，核心源代码不超过1000行，文档只有1页。对于Rails开发者来说，花了几个小时，就可以快速使用Sinatra开发Web Service了。Sinatra对多线程支持的非常好，可以用[rainbows](http://rainbows.rubyforge.org/)来跑多线程Sinatra，IO并发处理能力很好。Github也是用它来提供开放API服务的。我自己写了一个[Sinatra的项目模版](https://github.com/robbin/sinatratest)，如果你用Sinatra开发Web Service，可以参考。

- [Padrino](http://www.padrinorb.com/)

Padrino是一个基于Sinatra之上的轻量级Web框架，在Sinatra基础之上提供了命名路由，模块化项目组织，页面helpers和generators等等。Padrino是一个高度模仿Rails的框架，API的命名和Rails很像，Rails开发者花1-2天看看文档就可以快速上手开发了。Padrino相比Rails易学易用，多线程支持良好，性能比Rails好很多，开发Website推荐使用。我自己的网站也是用Padrino开发的，源代码在：[robbin_site](https://github.com/robbin/robbin_site)

- [Goliath](http://postrank-labs.github.com/goliath/)

Goliath是一个Ruby的纤程开发框架，性能非常好，作者本身是在开发PostRank产品过程中开发的Goliath。PostRank是一个用户社交行为实时跟踪工具，需要很高的性能来支撑，PostRank被Google收购了，作者现在在Google工作。Goliath适合用来开发对性能非常敏感的Web Service或者real-time的应用，但使用Goliath有一些门槛，你不能使用普通的阻塞IO库，必须使用作者封装的一些纤程的库。

总之，无论是Linkedin的移动API网关还是Iron.io的后台任务系统，用Ruby来编写，本身并不是问题，实践也有大量案例证明使用Goliath或者Sinatra编写高性能Web Service都是可行的。问题只是在于我们应该： _Ruby off rails_ 了。

## 如何去Rails化

掌握一门编程语言实际上包括两部分：

- 编程语言语法以及核心类库

无论你用不用Rails，是否开发Web应用，这些都是必须牢固掌握的，即使你不用Rails了，这些知识和技能也不会过时。

- 开发特定领域应用所需要的第三方类库

当你用Rails开发一个项目的时候，仍然需要依赖大量的第三方类库，每当你在Gemfile里面require一个类库的时候，都意味着你付出了一定的学习成本。而Rails本身也不过就是几个核心Gem包而已，具体来说最核心的就是ActiveRecord和ActionPack这两个库。

学习Rails无非意味着你花了时间熟悉ActiveRecord和ActionPack以及相关库的功能而已，所谓去Rails化也仅仅只是放弃使用ActionPack，换一个更轻量级更简单的URL路由处理器，例如换成Grape，Sinatra，Padrino或者Camping而已。这对一个长期使用Rails的Ruby开发者来说，应该是举手之劳的事情。所以自己动手，根据实际应用场景挑选最合适的组件。例如ActionPack不太适合写Web Service，那我换成Sinatra就行了，但是ActiveRecord照常用，这并不需要你付出多少学习成本，更不需要你放弃什么。

## 为何不用node.js和Go？

有一点是毫无疑问的，node.js的V8引擎，Go的静态编译进去的GC，性能远远好于Ruby的虚拟机，尽管在实际的应用中，未必会表现出来这么明显的差距。那么，一个随之而来的问题就是：为何不用node.js和Go呢？

每个程序员都有自己的倾向性，答案可能都不同。我在去年底花了很多时间了解node.js和Go，最终还是觉得用Ruby对我来说最合适：

-
用Sinatra或者Goliath这样的轻量级框架写Web Service，性能已经足够好了，特别是[@黄志敏](http://weibo.com/flyerhzm)的案例证明，16核已经可以支撑每天1.5亿次请求了，对我来说已经不太可能遇到超过这个负载量的应用了。而Ruby的开发效率，代码表达能力和可维护性对我来说还是很重要的。

-
node.js的Event IO编程风格在我看来是「反人类」的，极其变态的。用来写代码上规模的应用，代码的可读性和可维护性都很差。Event IO是很底层的技术，我很难理解为何不封装成coroutine来使用。node.js只适合用来开发real-time类型的应用。

-
Go的主要问题在于现阶段还不成熟：一方面Go自身还在演进当中；另一方面Go的类库还是过于贫瘠了，用来开发项目还是需要自己写很多东西的，感觉很不方便。