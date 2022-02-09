---
layout: post
title: Ruby开源项目介绍(1)：octopress——像黑客一样写博客
date: 2013/10/19 04:20:00
categories:
- 技术
tags:
- Ruby
- Octopress
---

### 今年一直推荐的一种写作方式。

markdown语法快速成文，git与github实时保存，jekyll或octopress实时成书或者showoff实时成ppt。入门略有门槛，但是习惯了，写作效率会好很多。以下以octopress为例，进行说明。

### 配置个人github账号 登陆

[github][1]，创建一个个人账号。假设叫做：rubyonchina。 然后回到ubuntu或者Mac里面，仍然是在终端里面，输入：
```
    [[ -f ~/.ssh/id_rsa.pub ]] || ssh-keygen -t rsa
```

按照默认提示一路确认，生成密钥之后，将生成的信息复制到github页面中，如下所示：
```
    [[ -f ~/.ssh/id_rsa.pub ]] && cat ~/.ssh/id_rsa.pub | xclip
```

然后在浏览器中打开页面： https://github.com/account/ssh 点击，Add another public key，粘贴前面步骤复制的信息，请格外注意，不要在Title中填写内容，直接将复制的内容粘贴到Key中，然后点击：Add Key即可。

### 配置octopress个人博客
```
   cd ~/dev/
   git clone git://github.com/imathis/octopress.git rubyonchina.github.com
   cd ~/dev/rubyonchina.github.com
```

修改默认的。rvmrc文件的内容为：
```
   rvm use 1.9.2@rails31
```

安装相应的gem:
```
   bundle update
```

然后生成模版文件：
```
   rake install
```

分发到github上。分发之前，假设你已经注册用户名为rubyonchina的github.com账号，已经创建名为rubyonchina.github.com项目。
```
   cd ~/dev/rubyonchina.github.com
   git remote add rubyonchina git@github.com:rubyonchina/rubyonchina.github.com.git
```

新增一篇测试博客：
```
   rake new_post["post title"]
```

生成静态站点：
```
   rake generate
```

配置octopress与github的连接：
```
   rake setup_github_pages
```

按照提示填入你的github项目网址，比如，本示例是：
```
   git@github.com:rubyonchina/rubyonchina.github.com.git
```

分发到github上：
```
   rake deploy
```

第一次运行时，会询问是否建立对github的授权，输入：yes。然后将站点更新的内容推送到github上。
```
   git push -u rubyonchina master
```

尝试浏览，

[http://rubyonchina.github.com][2] OK！成功！然后，此时，再创建一个新的github的source分支，用于保存写作的md源文件等。
```
   git add .
   git commit -m "some changes"
   git push rubyonchina source
```

现在，你就拥有了一个强大的个人站点。

### 相关参考

*   [octopress][3]

*   [Git与Github入门资料][4]

*   [告别wordpress，拥抱jekyll][5] 本作品采用

<a href="http://creativecommons.org/licenses/by-nc-nd/3.0/" rel="license">知识共享署名-非商业性使用-禁止演绎 3.0 Unported许可协议</a>进行许可。

[1]: https://github.com/signup/free

[2]: http://rubyonchina.github.com/

[3]: http://octopress.org/

[4]: http://www.yangzhiping.com/tech/git.html

[5]: http://www.yangzhiping.com/tech/wordpress-to-jekyll.html
