---
layout: post
title: Ruby和Ruby on Rails的安装
date: 2013/05/19 01:28:00
categories:
- 技术
tags:
- ruby
- rails
---

# Ruby安装 在这里可以下载到适合您的最新的 Ruby 版本，当前稳定的版本是 2.0.0-p195 。下载前请先阅读

[Ruby 开源许可](http://www.ruby-lang.org/en/about/license.txt) 。

### Ruby 源代码 如果您欲使之与您的平台更为兼容或者需要专一设置您的环境，那么从源代码安装是最好的解决方案。如果有预先做好的 packages 需要安装到您的平台上，这也是一个好的方法。

-
[Ruby 2.0.0-p195]() (md5: 0672e5af309ae99d1703d0e96eff8ea5) 稳定版 (_推荐_)

-
[稳定版快照]() 这里的 tar』ed 和 gzip』ed 文件是最新稳定的 CVS。它应该比上次发布的版本更稳定。

-
[开发版快照]() 这里的 tar』ed 和 gzip』ed 文件是最新的 CVS。它可能包含一些没有解决的问题。 更多信息见

[Ruby Core](http://www.ruby-lang.org/zh_cn/community/ruby-core/)

### Windows 系统

在 Windows 平台下安装 Ruby 有几个选择。第一个选择是仅安装编译好的二进制文件。第二个选择是直接执行「一步安装」程序，假如您不知道如何安装 Ruby,

[RubyInstaller](http://rubyinstaller.org/)将是您最好的选择。（这种安装方式除 Ruby 之外，捆绑一些额外的资源库。）

-
[Ruby 1.8.6 一步安装](http://rubyforge.org/frs/download.php/29263/ruby186-26.exe) (md5: 00540689d1039964bc8d844b2b0c7db6) 稳定版 (_推荐_)

-
[Ruby 1.8.6 二进制]() (md5: 3ec2a8a34d5db1f09cc8cad3f8305c28) 稳定版 (_推荐_)

-
[Ruby 1.9.0 二进制]() (md5: 489ee1bcd72e97f50b38b64fb354e661) 开发版 (_实验_)

-
[Ruby 1.9.1-p0 二进制]() (md5: 921db53c709ce20106610f7d229e24e1) 稳定版 (_推荐_)

### Linux 系统

许多 Linux 发行版中已经预装了 Ruby，如果您的系统上没有安装 Ruby，这里提供几个方式来安装。第一个方式是仅下载源代码，然后手工编译安装。 如果您不想从源代码编译浪费时间的话，许多平台都提供相应的机器体系结构的发行包，它们使 Ruby 的安装相当容易。 例如，在 Debian 或 Ubuntu 使用

`apt-get` 提供了一个简单而优雅的解决方案 ：

$ sudo apt-get install ruby irb rdoc

对于 irb 和 rdoc ，您需要激活 universe repository 。

### OS X 系统

Ruby 1.8.7 已经完全支持 Mac OS X Lion 以及许多流行的 Ruby gems (packages)。细节参考

[Ruby wiki at MacOS Forge](http://trac.macosforge.org/projects/ruby/wiki) 。

Mac OS X Leopard 完全支持 Ruby 1.8.6 以及 Ruby on Rails, Mongrel, Capistrano 和其他流行的 Ruby gems （库）。细节请参考 [Ruby MacOS Forge 上的 Ruby 维基](http://trac.macosforge.org/projects/ruby/wiki) 。 Mac OS X Tiger 安装了 1.8.2 版本的 Ruby，如果您没有升级到 Leopard，Tiger 平台下安装最新版本的 Ruby 仍有多个选择。您可以使用为 OS X 定做的[一步安装](http://rubyosx.rubyforge.org/) 。如果您正在寻找且能够快速运行 Rails 环境的安装包，[Locomotive](http://locomotive.raaum.org/) 是一个不错的选择。使用 [MacPorts](http://www.macports.org/) 或 [Fink](http://fink.sourceforge.net/) 在技术上的可能会比较好一些。 使用 MacPorts，您可以这样来安装 Ruby …

$ port install ruby

Fink 为安装 Ruby 提供了图形接口（使用 Fink 命令）。 同时，由于 OS X 是基于 Unix，因此从源代码或采取其它有效的方法来安装也是相当的容易。 更为详细的安装 Ruby 及 Rails，详见 Dan Benjamin 写的优秀文章：

[_Building Ruby, Rails, LightTPD, and MySQL on Tiger_](http://hivelogic.com/articles/2005/12/01/ruby_rails_lighttpd_mysql_tiger) 将快速的教您启动和运行。

# Ruby On Rails安装

1、安装ruby 不用说 是下载安装包：

[http://rubyforge.org/frs/?group_id=167](http://rubyforge.org/frs/?group_id=167)，注意版本 -- 害人不浅，后面会说到，我下的是1.8.6-26 装完后，可以用`ruby -v` 测试是否安装成功，如图，要是出现了版本 就说明安装成功了

![](http://pics.naaln.com/blog/2019-05-14-123223.jpg-basicBlog)

2、ruby安装完成后，安装rails 在命令行下运行 `gem install rails`，会有四五个提示 一路Y，安装完后，依旧可以用`rails -v`， 来检测rails 是否安装成功

![](http://pics.naaln.com/blog/2019-05-14-123224.jpg-basicBlog)

3、创建Web应用

还是命令行下输入 `rails testweb`，比如当前的路径是 `C:\Documents and Settings\Administrator>rails testweb`，便会在`C:\Documents and Settings\Administrator`下创建一个testweb文件夹。

![](http://pics.naaln.com/blog/2019-05-14-123225.jpg-basicBlog)

![](http://pics.naaln.com/blog/2019-05-14-123226.jpg-basicBlog)

PS：这里是可以加路径的 比如 rails C://test，具体可以看官方API:[http://api.rubyonrails.org/](http://api.rubyonrails.org/)

4、在当前目录（testweb）下，运行 ruby script\server 启动服务，关于webrick服务器更多的信息可以访问 [http://www.webrick.org/](http://www.webrick.org/)

![](http://pics.naaln.com/blog/2019-05-14-123227.jpg-basicBlog)

5、浏览器中输入[http://localhost:3000/](http://localhost:3000/)，如果看到以下页面，说明OK

![](http://pics.naaln.com/blog/2019-05-14-123228.jpg-basicBlog)