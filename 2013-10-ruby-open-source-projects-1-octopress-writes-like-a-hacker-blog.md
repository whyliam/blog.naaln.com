---
layout: post
title: Ruby开源项目介绍(1)：octopress——像黑客一样写博客
date: 2013/10/19 04:20:00
categories:
- 技术
tags:
- Ruby
- Octopress
- 博客
- 静态网站
- GitHub
description: Octopress博客系统搭建教程，详细介绍如何像黑客一样写博客。文章推荐了基于markdown语法、git版本控制和Octopress/Jekyll的写作工作流，强调这种写作方式虽然有学习门槛，但能显著提高写作效率。教程包括配置GitHub账号、设置SSH密钥、克隆Octopress仓库、配置RVM、安装Gem包、生成模板文件、连接GitHub Pages、创建新文章、生成静态站点、部署到GitHub等完整流程。适合技术人员建立个人技术博客，实现纯文本写作和版本控制管理。
---

### 今年一直推荐的一种写作方式

markdown 语法快速成文，git 与 github 实时保存，jekyll 或 octopress 实时成书或者 showoff 实时成 ppt。入门略有门槛，但是习惯了，写作效率会好很多。以下以 octopress 为例，进行说明。

### 配置个人 Github 账号 登陆

[github][1]，创建一个个人账号。假设叫做：rubyonchina。然后回到 ubuntu 或者 Mac 里面，仍然是在终端里面，输入：

```
[[ -f ~/.ssh/id_rsa.pub ]] || ssh-keygen -t rsa
```

按照默认提示一路确认，生成密钥之后，将生成的信息复制到 github 页面中，如下所示：

```
[[ -f ~/.ssh/id_rsa.pub ]] && cat ~/.ssh/id_rsa.pub | xclip
```

然后在浏览器中打开页面： https://github.com/account/ssh 点击，Add another public key，粘贴前面步骤复制的信息，请格外注意，不要在 Title 中填写内容，直接将复制的内容粘贴到 Key 中，然后点击：Add Key 即可。

### 配置 Octopress 个人博客

```
cd ~/dev/
git clone git://github.com/imathis/octopress.git rubyonchina.github.com
cd ~/dev/rubyonchina.github.com
```

修改默认的。rvmrc 文件的内容为：

```
rvm use 1.9.2@rails31
```

安装相应的 gem:

```
bundle update
```

然后生成模版文件：

```
rake install
```

分发到 github 上。分发之前，假设你已经注册用户名为 rubyonchina 的 github.com 账号，已经创建名为 rubyonchina.github.com 项目。

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

配置 octopress 与 github 的连接：

```
rake setup_github_pages
```

按照提示填入你的 github 项目网址，比如，本示例是：

```
git@github.com:rubyonchina/rubyonchina.github.com.git
```

分发到 github 上：

```
rake deploy
```

第一次运行时，会询问是否建立对 github 的授权，输入：yes。然后将站点更新的内容推送到 github 上。

```
git push -u rubyonchina master
```

尝试浏览，

[http://rubyonchina.github.com][2] OK！成功！然后，此时，再创建一个新的 github 的 source 分支，用于保存写作的 md 源文件等。

```
git add .
git commit -m "some changes"
git push rubyonchina source
```

现在，你就拥有了一个强大的个人站点。

### 相关参考

- [octopress][3]
- [Git 与 Github 入门资料][4]
- [告别 wordpress，拥抱 jekyll][5]

[1]: https://github.com/signup/free
[2]: http://rubyonchina.github.com/
[3]: http://octopress.org/
[4]: http://www.yangzhiping.com/tech/git.html
[5]: http://www.yangzhiping.com/tech/wordpress-to-jekyll.html
