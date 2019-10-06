---
title: 使用 Travis CI 构建博客
date: 2016-06-23 22:56:17
tags:
categories:
- 技术
---

今天看到有人因为 hexo 文件遗失 以前的文章全没有了 所以我准备在Github备份我的代码

### 基本思路

1. 本地编写文章
2. push 到Github
3. Travis CI 检测到代码变化
4. Travis CI 构建代码环境，编译代码，生产博客文件，并自动部署

![](http://pics.naaln.com/blog/2019-01-14-060813.jpg-basicBlog)

### Travis CI

顾名思义，Travis CI 是一个持续集成(Continuous integration，简称CI)的工具。它可以在公共的 Github 仓库上免费使用。

#### 开启travis-ci

首先去travis-ci官网，点击右上角Sign in with GitHub通过github授权登录。然后去到个人信息页面，开启需要使用travis的项目关：

![](http://pics.naaln.com/blog/2019-01-14-060814.jpg-basicBlog)

#### 创建 SSH key

创建一个部署在 Travis CI 上面的 `SSH key` 利用这个 `SSH key` 可以让 `Travis CI` 向我们自己的项目提交代码(也就是将博客部署到 gh-page)。

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

得到 `id_rsa.pub` 和 `id_rsa`，然后将有 pub 后缀的配置到 `gh-page` 的 Deploy key。

![](http://pics.naaln.com/blog/2019-01-14-60815.jpg-basicBlog)

记得要将 `Allow write access` 的选项选上，这样 Travis CI 才能获得 push 代码的权限。

#### 加密私钥

刚才讲公钥文件配置好了，然后就要配置私钥文件，在 hexo 项目下面建立一个 .travis 的文件夹来放置需要配置的文件。

首先要安装 travis 命令行工具(如果在国内的网络环境下建议安装之前先换源)。

```
$ gem install travis
```

用命令行工具登录：

```
$ travis login --auto
```

然后将刚刚生成的 `id_rsa` 复制到 `.travis` 文件夹，用命令行工具进行加密：

```
$ travis encrypt-file id_rsa --add
```

这个时候会生成加密之后的秘钥文件 `id_rsa.enc`，原来的文件 `id_rsa` 就可以删掉了。

这时可以看到终端输出了一段

```
openssl aes-256-cbc -K $encrypted_xxxxxxxxxxx_key -iv $encrypted_xxxxxxxxxxx_iv
```

这样格式的信息，这是 travis 用来解密 `id_rsa.enc` 的 key，先保存起来，后面配置 `.travis.yml` 会用到它。

为了让 git 默认连接 SSH 还要创建一个 ssh_config 文件。在 .travis 文件夹下创建一个 ssh_config 文件，输入以下内容：

```
Host github.com
    User git
    StrictHostKeyChecking no
    IdentityFile ~/.ssh/id_rsa
    IdentitiesOnly yes
```

![](http://pics.naaln.com/blog/2019-01-14-060815.jpg-basicBlog)

可以看到刚刚 travis 命令行生成的解密 key

现在进入 travis CI 设置页面

![](http://pics.naaln.com/blog/2019-01-14-060817.jpg-basicBlog)

顺便把上面的开关打开

![](http://pics.naaln.com/blog/2019-01-14-60818.jpg-basicBlog)

这样，当向项目 push 代码的时候 travis CI 就会根据 .travis.yml 的内容去部署我们的项目了。

#### .travis.yml

最后就要配置 .travis.yml。在项目的根目录创建 .travis.yml 文件。

```
language: node_js

sudo: false

# master为hexo博客所在分支
branches:
  only:
  - master

before_install:
- openssl aes-256-cbc -K $encrypted_xxxxxxxxxxxx_key -iv $encrypted_xxxxxxxxxxxx_iv -in .travis/id_rsa.enc -out ~/.ssh/id_rsa -d
# 改变文件权限
- chmod 600 ~/.ssh/id_rsa
# 配置 ssh
- eval $(ssh-agent)
- ssh-add ~/.ssh/id_rsa
- cp .travis/ssh_config ~/.ssh/config
# 配置 git 替换为自己的信息
- git config --global user.name 'acwong'
- git config --global user.email acwong00@gmail.com

install:
- npm install hexo-cli -g
- npm install

script:
- hexo clean
- hexo g
- hexo d
```

#### 后记

在部署了一遍之后发现，运行 `npm install` 安装 node 的库时候占据了部署的很大一部分时间，这里有一个技巧，可以将 `node_modules`缓存起来，这样可以节省部署的时间。

```
# .travis.yml 配置
cache:
  directories:
    - node_modules
```

#### 遇到Authentication failed

这是因为hexo 根目录下的 _config.yml中配置问题导致的：

把如下配置:

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: https://github.com/xxxxxxxxx.github.io.git
  branch: master
```

修改为：

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repository: git@github.com:rxxxxxxxxx.github.io.git
  branch: master
```

问题即解决！
