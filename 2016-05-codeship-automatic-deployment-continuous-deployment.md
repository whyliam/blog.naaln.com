---
layout: post
title: codeship 自动部署 - 持续部署
date: 2016/05/19 00:01:19
categories:
- 技术
tags:
- 自动部署
---

登入 `codeship`，`trivisCI`，`CircleCI` 任意一个，这三个都是可以持续集成的管理工具

本文暂时以 `Codeship` 为例子进行配置

1. 登入 `codeship`，绑定 `github` 或者 `bitbucket`，选择一个项目
2. 修改 `README`，加入 `Codeship Status`，如![](http://pics.naaln.com/blog/2019-01-14-060806.jpg-basicBlog)
3. 在 `Project Configyration` 中配置 `test setting` 和 `deployment`
4. 自行配置 测试代码
5. 配置 部署配置

#### 部署配置

1. Add new deployment pipeline
2. 选择需要部署的 `分支`，如 `master`
3. 选择部署 `codedeploy`
4. AWS Access Key ID， 在 IAM 上建立的用户
5. AWS Secret Access Key， 在 IAM 上建立的用户
6. Region，如 `us-east-1`
7. `AWS` 上 `Codedeploy` 的应用的名字
8. `Codedeploy` 上组的名字
9. `S3` 的名字

#### Codeship 部署

1. 提交代码，代码会进过如下步骤
2. 生成测试环境
3. 在测试环境中更新代码
4. 测试
5. 测试成功后安装 `AWS CLI`
6. 上传代码到 `s3`
7. 将 `s3` 上的文件部署到 `codedeploy`
8. `ec2` 中执行配置脚本
9. 等待部署成功

![](http://pics.naaln.com/blog/2019-01-14-060807.jpg-basicBlog)

在 `codedeply` 中可以看到部署结果

![](http://pics.naaln.com/blog/2019-01-14-060808.jpg-basicBlog)

打开网页可以执行结果

----------
