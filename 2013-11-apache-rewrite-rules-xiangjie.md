---
layout: post
title: Apache Rewrite 规则详解
date: 2013/11/15 21:11:00
categories:
- 技术
tags:
- apache
---

**在开篇之前：**

我想说这篇文章其实是我刚刚接触Rewrite的时候学习的文档，应属转载，但是在这里我不想写明原地址，原因是文章中大多数给出的配置命令经实验都是错误的。需要原文的可以在谷歌上搜索一下」Apache Rewrite 规则详解」 好在我对正则表达式有所了解，把原文的代码都通过自己的理解改写了一下，并都能够达到题设的要求，并联想需求添加了例子。 本文是经过我实验后修改有效的，如果还是出现500错误请去掉 **#** 及后面的注释（也许有些环境不支持中文注解），如果还是错误请在下面给我留言。

**1、Rewrite规则简介：**

Rewirte主要的功能就是实现URL的跳转，它的正则表达式是基于Perl语言。可基于服务器级的(httpd.conf)和目录级的(.htaccess)两种方式。如果要想用到rewrite模块，必须先安装或加载rewrite模块。方法有两种一种是编译apache的时候就直接安装rewrite模块，别一种是编译apache时以DSO模式安装apache,然后再利用源码和apxs来安装rewrite模块。

基于服务器级的(httpd.conf)有两种方法，一种是在httpd.conf的全局下直接利用RewriteEngine on来打开rewrite功能;另一种是在局部里利用RewriteEngine on来打开rewrite功能，下面将会举例说明，需要注意的是，必须在每个virtualhost里用RewriteEngine on来打开rewrite功能。否则virtualhost里没有RewriteEngine on它里面的规则也不会生效。

基于目录级的(.htaccess),要注意一点那就是必须打开此目录的FollowSymLinks属性且在。htaccess里要声明RewriteEngine on。

**2、举例说明：**

例一。下面是在一个虚拟主机里定义的规则。功能是把client请求的主机前缀不是www.zing.li和70.40.213.183都跳转到主机前缀为http://www.zing.li，避免相同内容的网页有多个指向的域名，如http://zing.li。
```
   NameVirtualHost 70.40.213.183:80
   ServerAdmin slj@zing.li
   DocumentRoot 「/web」
   ServerName zing.li
   RewriteEngine on #打开rewirte功能
   RewriteCond %{HTTP_HOST} !^www.zing.li [NC] #声明Client请求的主机中前缀不是www.zing.li，其中 [NC] 的意思是忽略大小写
   RewriteCond %{HTTP_HOST} !^70.40.213.183 [NC] #声明Client请求的主机中前缀不是70.40.213.183，其中 [NC] 的意思是忽略大小写
   RewriteCond %{HTTP_HOST} !^$ #声明Client请求的主机中前缀不为空
   RewriteRule ^(.*) http://www.zing.li/ [L] #含义是如果Client请求的主机中的前缀符合上述条件，则直接进行跳转到http://www.zing.li/,[L]意味着立即停止重写操作，并不再应用其他重写规则。这里的。*是指匹配所有URL中不包含换行字符，()括号的功能是把所有的字符做一个标记，以便于后面的应用。就是引用前面里的(.*)字符。
```

例二。将输入 en.naaln.com 的域名时跳转到www.naaln.com
```
   RewriteEngine on
   RewriteCond %{HTTP_HOST} ^en.naaln.com [NC]
   RewriteRule ^(.*) http://www.naaln.com/ [L]
```

例三。赛卡软件近期更换了域名，新域名为www.naaln.com, 更加简短好记。这时需要将原来的域名www.zing.li, 以及论坛所在地址www.zing.li/bbs/定向到新的域名，以便用户可以找到，并且使原来的论坛 URL 继续有效而不出现 404 未找到，比如原来的http://www.zing.li/bbs/tread-60.html, 让它在新的域名下继续有效，点击后转发到http://bbs.naaln.com/tread-60.html，而其他网页，如原先的http://www.zing.li/purchase不会到二级域名bbs.naaln.com/purchase上，而是到www.naaln.com/purchase 按照这样的要求重定向规则应该这样写：
```
   RewriteEngine On
   RewriteCond %{REQUEST_URI} ^/bbs/
   RewriteRule ^bbs/(.*) http://bbs.naaln.com/$1 [R=permanent,L]
   RewriteCond %{REQUEST_URI} !^/bbs/
   RewriteRule ^(.*) http://www.naaln.com/$1 [R=permanent,L]
```

**3.Apache mod_rewrite规则重写的标志一览**

> 1) R\[=code\](force redirect) 强制外部重定向 强制在替代字符串加上http://thishost[:thisport]/前缀重定向到外部的URL.如果code不指定，将用缺省的302 HTTP状态码。 2) F(force URL to be forbidden)禁用URL,返回403HTTP状态码。 3) G(force URL to be gone) 强制URL为GONE，返回410HTTP状态码。 4) P(force proxy) 强制使用代理转发。 5) L(last rule) 表明当前规则是最后一条规则，停止分析以后规则的重写。 6) N(next round) 重新从第一条规则开始运行重写过程。 7) C(chained with next rule) 与下一条规则关联

如果规则匹配则正常处理，该标志无效，如果不匹配，那么下面所有关联的规则都跳过。

> 8) T=MIME-type(force MIME type) 强制MIME类型 9) NS (used only if no internal sub-request) 只用于不是内部子请求 10) NC(no case) 不区分大小写 11) QSA(query string append) 追加请求字符串 12) NE(no URI escaping of output) 不在输出转义特殊字符 例如：RewriteRule /foo/(.*) /bar?arg=P1%3d$1 [R,NE] 将能正确的将/foo/zoo转换成/bar?arg=P1=zoo 13) PT(pass through to next handler) 传递给下一个处理 例如： RewriteRule ^/abc(.*) /def$1 [PT] # 将会交给/def规则处理 Alias /def /ghi 14) S=num(skip next rule(s)) 跳过num条规则 15) E=VAR:VAL(set environment variable) 设置环境变量

**4.Apache rewrite例子集合**

URL重定向

例子一: 同时达到下面两个要求： 1.用http://www.zzz.com/xxx.php 来访问 http://www.zzz.com/xxx/ 2.用http://yyy.zzz.com 来访问 http://www.zzz.com/user.php?username=yyy 的功能
```
   RewriteEngine On
   RewriteCond %{HTTP_HOST} ^www.zzz.com
   RewriteCond %{REQUEST_URI} !^user.php$
   RewriteCond %{REQUEST_URI} .php$
   RewriteRule (.*).php$ http://www.zzz.com/$1/ [R]
   RewriteCond %{HTTP_HOST} !^www.zzz.com
   RewriteRule ^(.+) %{HTTP_HOST} [C]
   RewriteRule ^([^.]+).zzz.com http://www.zzz.com/user.php?username=$1
```

例子二：
```
/type.php?typeid=* –> /type*.html /type.php?typeid=*&page=* –> /type*page*.html
   RewriteRule ^/type([0-9]+).html$ /type.php?typeid=$1 [PT]
   RewriteRule ^/type([0-9]+)page([0-9]+).html$ /type.php?typeid=$1&page=$2 [PT]
```

**5.使用Apache的URL Rewrite配置多用户虚拟服务器**

要实现这个功能，首先要在DNS服务器上打开域名的泛域名解析（自己做或者找域名服务商做）。比如，我就把 *.kiya.us和 *.zing.li全部解析到了我的IP地址70.40.213.183上。

然后，看一下我的Apache中关于*.kiya.us的虚拟主机的设定。
```
   ServerAdmin webmaster@kiya.us
   DocumentRoot /home/www/www.kiya.us
   ServerName dns.kiya.us
   ServerAlias dns.kiya.us kiya.us *.kiya.us
   CustomLog /var/log/httpd/osa/access_log.log」 common
   ErrorLog /var/log/httpd/osa/error_log.log」
   AllowOverride None
   Order deny,allow
   #AddDefaultCharset GB2312
   RewriteEngine on
   RewriteCond %{HTTP_HOST} ^[^.]+.kiya.(cn|us)$
   RewriteRule ^(.+) %{HTTP_HOST}$1 [C]
   RewriteRule ^([^.]+).kiya.(cn|us)(.*)$ /home/www/www.kiya.us/sylvan$3?un=$1&%{QUERY_STRING} [L]
```

在这段设定中，我把*.zing.li和*.kiya.us 的Document Root都设定到了 /home/www/www.kiya.us

继续看下去，在这里我就配置了URL Rewrite规则。
   RewriteEngine on #打开URL Rewrite功能
   RewriteCond %{HTTP_HOST} ^[^.]+.kiya.(cn|us)$ #匹配条件，如果用户输入的URL中主机名是类似 xxxx.kiya.us 或者 xxxx.zing.li 就执行下面一句
   RewriteRule ^(.+) %{HTTP_HOST}$1 [C] #把用户输入完整的地址（GET方式的参数除外）作为参数传给下一个规则，[C]是Chain串联下一个规则的意思
   RewriteRule ^([^.]+).kiya.(cn|us)(.*)$ /home/www/dev.kiya.us/sylvan$3?un=$1&%{QUERY_STRING} [L]
   # 最关键的是这一句，使用证则表达式解析用户输入的URL地址，把主机名中的用户名信息作为名为un的参数传给/home/www/dev.kiya.us目录下的脚本，并在后面跟上用户输入的GET方式的传入参数。并指明这是最后一条规则（[L]规则）。注意，在这一句中指明的重写后的地址用的是服务器上的绝对路径，这是内部跳转。如果使用http://xxxx这样的URL格式，则被称为外部跳转。使用外部跳转的话，浏览着的浏览器中的URL地址会改变成新的地址，而使用内部跳转则浏览器中的地址不发生改变，看上去更像实际的二级域名虚拟服务器。

设置后重启Apache服务器就大功告成了！ **Update May 1, 2009**

今天上网看到了有人提一个问题：

> 求Rewrite 防盗链正则

> 不允许www.im286.com www.chinaz.com 这两个网站盗链 , 其它的网站都可以盗链的规则怎么写。

**论坛中的答案是：**
```
   RewriteEngine On
   RewriteCond %{HTTP_REFERER} chinaz.com [NC]
   RewriteCond %{HTTP_REFERER} im286.com [NC]
   RewriteRule .*\.(jpg|jpeg|gif|png|rar|zip|txt|ace|torrent|gz|swf)$ http://www.xxx.com/fuck.png [R,NC,L]
```

**Update May 7, 2009**

介绍一篇文章：<a href="http://lamp.linux.gov.cn/Apache/ApacheMenu/mod/mod_rewrite.html" target="_blank">http://lamp.linux.gov.cn/Apache/ApacheMenu/mod/mod_rewrite.html</a> **Update May 24, 2009**

1. 关于是否需要使用完全转义，比如在 RewriteCond %{HTTP_REFERER} chinaz.com [NC] 中 把 chinaz.com 改成 chinaz.com 答案是，两者都是可以的。

2. 今天在做 YOURcaddy.com （就是我去年做的PlanetCoachella的变形）的时候，在 GoDaddy 主机上无法正常转向，后来找到了问题： 在HostMonster以及我自己的机器上，是用 RewriteRule ^business/([^.]+)$ biz/detail.php?name=$1 [L] 达到改写的。而在Godaddy主机上，是这样： RewriteRule ^business/([^.]+)$ /biz/detail.php?name=$1 [L] 目标文件前多了一个/ 现在想想，可能是因为没有指定RewriteBase，至于到底是不是我改日再验证一下。

3. 添加两个关于判断 USER AGENT 例子和自动添加。php扩展名及自动换。html到。php扩展名的例子：

**1**
```
   ewriteEngine on
   RewriteCond %{HTTP_USER_AGENT} ^MSIE [NC,OR]
   RewriteCond %{HTTP_USER_AGENT} ^Opera [NC]
   RewriteRule ^.* – [F,L] 这里」-」表示没有替换，浏览器为IE和Opera的访客将被禁止访问。
```

**2**
```
   RewriteEngine On
   RewriteBase /test
   RewriteCond %{REQUEST_FILENAME}.php -f
   RewriteRule ([^/]+)$ /test/$1.php
   #for example: /test/admin => /test/admin.php
   RewriteRule ([^/]+).html$ /test/$1.php [L]
   #for example: /test/admin.html => /test/admin.php
   限制目录只能显示图片
   < IfModule mod_rewrite.c>
   RewriteEngine on
   RewriteCond %{REQUEST_FILENAME} !^.*.(gif|jpg|jpeg|png|swf)$
   RewriteRule .*$ – [F,L]
   < /IfModule>
```

**Update Jun 10, 2009** 补充，关于特定文件扩展名的重写。

重写有某些扩展名的文件：
```
   RewriteRule (.*.css$|.*.js$) gzip.php?$1 [L]
```

如果要排除一些扩展名：
```
   RewriteRule !\.(js|ico|gif|jpg|JPG|png|PNG|css|pdf|swf)$ index.php
```
