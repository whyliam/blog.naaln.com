---
layout: post
title: Mechanize对WEB的操作
date: 2013/09/10 20:14:00
categories:
  - 技术
tags:
  - Mechanize
  - Ruby
  - WebAutomation
  - Forms
  - Links
description: "Mechanize库在Ruby中实现网页自动化，包括设置代理、访问网页、处理表单控件、提交数据、上传文件、遍历超链接、下载文件，并演示登录和消息发送脚本。"
---

与网页交互 (Interacting With a Web Page)

通过 Mechanize 模拟自然的浏览器行为来完成与网页之间的交互。

#### Mechanize 的安装

```
   Mechanize的安装请查看 ->  Ruby library的安装
```

#### 使用 Mechanize 时，需要在脚本头部注明

```
   require 'mechanize'
```

#### Mechanize Object 的设定

```
   agent = WWW::Mechanize.new
```

#### 对虚拟的 user_agent 的设定

```
   agent.user_agent_alias = 'Windows IE 7'
```

#### 历史纪录的大小设

```
   agent.max_history = 1
```

#### 激活网址

```
   agent.get('http://www.test.com')
```

#### 网页连接超时设定

```
   agent.open_timeout = 10
```

#### 设定连接网页时的认证 (要在激活网页前使用)

```
   agent.auth('username', 'password')
```

#### 读取网页的 Title 标签

```
   page = agent.get('http://www.test.com')
   page.title
```

#### 取得当前网页的网址

```
   page = agent.get('http://www.test.com')
   page.uri
```

#### 读取网页的 Form 标签

```
   page.forms.name('Name')
```

#### 使用 Form 的 Action

```
   page.forms.action('test.php')
```

#### 如果网页中有多个 Form 时

```
   page.forms[0]
```

#### 如果网页中有多个同名称或相同 Action 的 Form 时

```
   page.forms.name('Name').first
```

#### 使用传递方法进行判断

```
   page.forms.action('./test.php').find{|f| f.method == 'POST'}
```

#### 文本框，密码框，文本域的填写

```
   form = page.forms.name('Name').first
   form['文本框或文本域name'] = '填写内容'
   form.fields.name('文本框或文本域name').value = '填写内容'
```

#### Submit 标签

```
   form = page.form[0]
   form.submit
   form.submit(form.buttons.name('Name'))
```

#### CheckBox 标签

```
   form = page.forms.name('chkbox')
   返回的值为 c1 = form.checkboxes[0].name
   返回的值为 val2 = form.checkboxes[1].value
   返回的值为 false = form.checkboxes.name("c1″).checked
```

#### 复选框的选择

```
   form.checkboxes.name('c1').check
```

#### 对应的 HTML 代码为

```
   <form name="chkbox">
     <input type="checkbox" name="c1″ value="val1″>复选框1
     <br>
     <input type="checkbox" name="c2″ value="val2″ checked>复选框2
   </form>
```

#### 单选框的选择

```
   form.radiobuttons.name('box')[1].check
```

#### 获得当前 SelectList 选择的选项及 SelectList 的设定

```
   form = page.forms.name(form1).first
   返回的值为  xk3 = form.fields.name('select1').value
   返回的值为 xk3 = form.fields.name('select1').options[2].select
```

#### 选项的选择

	 form.name('select1').value = 「1″
	 对应的HTML代码为：

```
   <form name='form1' action="" method="post">
      <select name='select1'>
       <option value="1″>xk1</option>
       <option value="2″>xk2</option>
       <option value="3″ selected>xk3</option>
     </select>
   </form>
```

#### SelectList 多选择时为

```
   form.fields.name('select1') = ['one', 'three']
```

#### 对应的 HTML 代码为

```
   <form>
      <select name="select1″ size="3″ multiple>
         <option value="one" selected>xk1</option>
         <option value="two">xk2</option>
         <option value="three" selected>xk3</option>
      </select>
   </form>
```

### 文件的上传

#### 方法一

```
   page.forms[0].file_uploads.name('upfile').file_name = './hoge.jpg'
```

#### 方法二

```
   page.forms[0].file_uploads.name('upfile').file_data = File.open('./hoge.jpg','rb'){|f| f.read}
```

#### 对应的 HTML 代码为

```
   <form>
      <input type="file" name="upfile" enctype="multipart/form-data">
   </form>
```

### 网页中的超链接

#### 网页中的全部超链接的输出

```
   page = agent.get('http://www.test.com')
   page.links.each{|link| puts link.href}

```

#### 网页中超链接的击活 (可使用正则表达式)

```
   page.links.href('http://www.test.com')[2].click
   page.links.text('文本')[0].click
```

### Frame 网页的查看

#### 方法一: 使用 name 查看

```
   page.frames.name('left').click
```

#### 方法二: 使用链接查看

```
leftpage = page.frames.src('frame_left.htm').click
```

#### 对应的 HTML 代码为

```
   <frameset cols="150,*">
     <frame src="frame_left.htm" name="left">
     <frame src="frame_right.htm" name="right">
   </frameset>
```

#### 网页中的文件下载 (正则表达式可用)

```
   agent = WWW::Mechanize.new
   data = agent.get_file('http://www.test.com/top.gif')
   open('top.gif', 'wb'){|f| f.write(data)}
```

#### 对应的 HTML 代码为

```
   <img src="http://www.test.com/top.gif">
```

#### Table 部分的的文字

```
   page.root.search('table/tr/td'){|e| puts e}

---
   require 'rubygems'
   require 'mechanize'

   agent = WWW::Mechanize.new
   agent.max_history = 1
   agent.user_agent_alias = 'Windows IE 7'

   page = agent.get("http://www.iteye.com/login")
   form = page.forms[0]
   form.fields[0].value = "javaeye帐号"
   form.fields[1].value = "javaeye密码"

   agent.submit form #登录JavaEye

   page = agent.get("http://qichunren.iteye.com/admin/messages/new") #### 这里的域名改成你个人的
   form =  page.forms[0]
   form.fields[0].value = "qichunren" #### 消息接收者
   form.fields[1].value = "测试消息" #标题
   form.fields[4].value = %Q{
   我代表火星全人类欢迎你加入火星圈子!
   地址是http://mars.group.iteye.com/ 点击申请加入。
   火星口号：火星新闻，火星笑话，火星文， 只要你的想法够火星 地球很危险 JE很严肃 大家还是回火星去吧
   }

   5.times{agent.submit form} #### 把这个数字写成 1000 也是可以的，＊＿＊
```
