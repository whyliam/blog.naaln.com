---
layout: post
title: 批量获取QQ靓号的代码
date: 2014/10/18 11:01:47
categories:
- 技术
tags:
---

![enter image description here](http://pics.naaln.com/blog/2019-05-14-123525.png-basicBlog)

网址：<http://zc.qq.com/chs/new.html>

**注册指引：** 

1. 注册完成后，登录QQ手机版，完成激活 

2. 一周内未激活账号，系统将自动回收

**活动规则** 

1. 激活规则：获取的「靓号」，登录QQ手机版（ios或安卓平台）即可自动激活，激活后方可使用其他产品。 

2. 回收规则： 

（1）免费注册获取的「靓号」，需在一周内完成激活，否则系统将自动回收。 

（2）获取的「靓号」遵循现有的QQ帐号回收规则。 

3. 手机短信验证： （1）为防止恶意注册，注册过程需验证手机号码，且1个手机号码仅支持注册1个靓号。 

（2）手机号码仅做身份验证，与注册的「靓号」不存在捆绑关系，且不用于其他功能。 

4. 每天活动参与人数上限：1,000,000

**批量获取：** 

需要使用Chrome浏览器。按F12，将以下代码复制到console，回车。
```
   var total = 10;
   var i = 1;
   index.goodNumArr = index.goodNumArr.length == 3 ? [] : index.goodNumArr;
   var _act_lsig = typeof _act_lsig == 'object' ? _act_lsig : [];
   console.log('%c注意：这是测试代码','font-size:40px;color:red;');
   console.group('当前已有' + index.goodNumArr.length + '个QQ号码可供选择！');
   console.groupEnd();
   console.group('您将要再获取' + total * 3 + '个QQ号码可供选择！');
   console.groupEnd();
   do {
       (function() {
           $.post(index.getNumUrl, index.submitObj, function(a) {
               if (a.ec == 0) {
                   index.submitObj.act_lsig = a.act_lsig;
                   _act_lsig.push(a.act_lsig);
                   _act_lsig.push(a.act_lsig);
                   _act_lsig.push(a.act_lsig);
                   $.cookie.set("_act_lsig", a.act_lsig, "zc.qq.com", "/", 0.5 * 1000);
                   index.goodNumArr.push(a.new_uin_0);
                   index.goodNumArr.push(a.new_uin_1);
                   index.goodNumArr.push(a.new_uin_2);
                   index.submitObj.safeverifyResult = a.safeverifyResult;
                   index.submitObj.elevel = a.safeverifyResult;
               }
               console.warn('请耐心等待结果');
           });
           i++;
       })();
   } while (i <= total);
  
   setTimeout(function() {
       console.info('操作完毕！');
           console.group('清空号码请刷新页面，或者控制台执行：');
           console.log('index.goodNumArr=[]; ');
           console.groupEnd();
       if (!index.goodNumArr.length) {
           console.error('你被黑了IP');
       }
       console.group(index.goodNumArr.length + '个QQ号码如下：');
           console.groupEnd();
       for (num in index.goodNumArr) {
                   console.groupCollapsed("%c"+index.goodNumArr[num],"color:red");
                   console.log('第' + (parseInt(num) + 1) + '个');
                   console.group('如需选择此号码，首先在控制台粘贴下面的代码执行：');
                   console.log('$.cookie.set("_act_lsig", "' + _act_lsig[num] + '", "zc.qq.com", "/", 0.5*1000);\nindex.act_lsig = "' + _act_lsig[num] + '"; \nindex.currenNum=' + num + ';');
                   console.groupEnd();
                   console.group('然后填写页面表格信息后提交即可！只是测试哈！');
                   console.groupEnd();
                   console.groupEnd();
       }
   }, total * 500);
```

![enter image description here](http://pics.naaln.com/blog/2019-05-14-123526.jpg-basicBlog)

via：<http://www.v2ex.com/t/139797>
