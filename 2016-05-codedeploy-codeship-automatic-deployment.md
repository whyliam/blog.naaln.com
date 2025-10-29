---
layout: post
title: codeship 自动部署 - Codedeploy
date: 2016/05/18 23:08:00
categories:
  - 技术
description: "配置AWS EC2服务器，创建appspec.yml和部署脚本上传至S3，利用CodeDeploy实现自动化部署。"
tags:
  - AWS
  - CodeDeploy
  - EC2
  - S3
  - 部署
---

上篇我们配置了一大串的东西基本完成的 `AWS` 的配置，接下来我们可以试一下开始部署。

### 服务器配置

1. 进入服务器 `ssh -i **.pem ec2-user@ip地址 `

```zsh
yum -y update
yum install -y aws-cli
aws configure

＃ 输入用户(codeship)的`Access Key ID`,`Secret Access Key`，`AWS_REGION`,`json`

aws s3 cp s3://aws-codedeploy-us-east-1/latest/install . --region us-east-1

chmod +x ./install

sed -i "s/sleep(.*)/sleep(10)/" install

./install auto

# 后续还可以进行一些环境配置，如 mysql 等

```

### 代码上传

在代码文件中创建 `appspec/yml`

```
version: 0.0

os: linux

files:

 - source: /
   destination: /home/ec2-user/www/

hooks:

 AfterInstall:
   - location: scripts/change_permissions.sh
     timeout: 300
     runas: ec2-user

 ApplicationStart:
   - location: scripts/start_server.sh
     timeout: 300
     runas: ec2-user

```

新建文件夹，`scripts`

编写一些脚本如 `change_permissions.sh`，`start_server.sh`

将代码一起打包，上传到之前新建的 `s3` 里

### Codedeploy

1. 进入之前创建的 `Codedeploy`
2. 选择一个部署组
3. 部署新修订
4. 选择 `应用程序`，`部署组`，`我的应用程序将存储在 Amazon S3 中`，上传的文件
5. 立即部署
6. 之后可以查看到代码意见部署到 `ec2` 中，并且按照脚步正在运行。

![](http://pics.naaln.com/blog/2019-01-14-060811.jpg-basicBlog)

随后继续讲 `codeship` 的部署过程。

----------
