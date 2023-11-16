---
layout: post
title: codeship 自动部署 - AWS 配置
date: 2016/05/18 22:50:00
categories:
- 技术
tags:
---

今天基本理清了`CodeShip`和`CodeDeploy`的用法。

### `CodeDeploy`部分

#### IAM

##### 1.首先先创建一个用户来管理后续的操作

在IAM的用户中[(`USER`)](https://console.aws.amazon.com/iam/home?region=us-east-1#users)创建一个用户，暂时我就把它命名为`codeship `。该用户是给`Codeship`做部署用的。

```
codeship
Access Key ID:      AK**********ICQ
Secret Access Key:  Ze*******crCpZt
```

##### 2.在写一点基本的策略分配权限

在IAM中创建三个策略[(`Proliies`)](https://console.aws.amazon.com/iam/home?region=us-east-1#policies)

**`EC2`**

1. 创建策略
2. 创建您自己的策略
3. 修改 策略名称 `ec2`
4. 修改 策略文档 表示 EC2可以查看和读取所有`S3`的权限

```
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Action": [
               "s3:Get*",
               "s3:List*"
           ],
           "Effect": "Allow",
           "Resource": "*"
       }
   ]
}
```

**`Codedeploy`**

1. 创建策略
2. 创建您自己的策略
3. 修改 策略名称 `codedeploy`
4. 修改 策略文档 表示 EC2有`autoscaling `的权限

```
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Action": [
               "autoscaling:PutLifecycleHook",
               "autoscaling:DeleteLifecycleHook",
               "autoscaling:RecordLifecycleActionHeartbeat",
               "autoscaling:CompleteLifecycleAction",
               "autoscaling:DescribeAutoscalingGroups",
               "autoscaling:PutInstanceInStandby",
               "autoscaling:PutInstanceInService",
               "ec2:Describe*"
           ],
           "Effect": "Allow",
           "Resource": "*"
       }
   ]
}
```

**`S3`**

1. 创建策略
2. 创建您自己的策略
3. 修改 策略名称 `s3`
4. 修改 策略文档 表示 用户 可以上传文件到`YOUR_S3_BUCKET_NAME/*`的权限，`bucketname/folder`自行替换

```
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Action": [
               "s3:PutObject"
           ],
           "Resource": [
               "arn:aws:s3::: YOUR_S3_BUCKET_NAME/*"
           ]
       }
   ]
}
```

**`deploy`**

1. 创建策略
2. 创建您自己的策略
3. 修改 策略名称 `deploy `
4. 修改 策略文档 表示 用户部署的权限`ec2`的权限， 自行替换`YOUR_AWS_REGION`,`YOUR_AWS_ACCOUNT_ID`,`CODE_DEPLOY_APPLICATION_NAME`

```
{
   "Version": "2012-10-17",
   "Statement": [
       {
           "Effect": "Allow",
           "Action": [
               "codedeploy:RegisterApplicationRevision",
               "codedeploy:GetApplicationRevision"
           ],
           "Resource": [
               "arn:aws:codedeploy:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT_ID:application:CODE_DEPLOY_APPLICATION_NAME"
           ]
       },
       {
           "Effect": "Allow",
           "Action": [
               "codedeploy:CreateDeployment",
               "codedeploy:GetDeployment"
           ],
           "Resource": [
               "arn:aws:codedeploy:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT_ID:deploymentgroup:CODE_DEPLOY_APPLICATION_NAME/*"
           ]
       },
       {
           "Effect": "Allow",
           "Action": [
               "codedeploy:GetDeploymentConfig"
           ],
           "Resource": [
               "arn:aws:codedeploy:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT_ID:deploymentconfig:CodeDeployDefault.OneAtATime",
               "arn:aws:codedeploy:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT_ID:deploymentconfig:CodeDeployDefault.HalfAtATime",
               "arn:aws:codedeploy:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT_ID:deploymentconfig:CodeDeployDefault.AllAtOnce"
           ]
       }
   ]
}

```

##### 3.新建角色

创建不同的角色[(`Role`)](https://console.aws.amazon.com/iam/home?region=us-east-1#roles)并，给他们分配不同的策略

**`ec2`**

1. 新建角色
2. 角色名称 `ec2`
3. 选择角色类型 `Amazon EC2`
4. 附加策略 `ec2`

**`codeploy`**

1. 新建角色
2. 角色名称 `codeploy`
3. 选择角色类型 `Amazon EC2`
4. 附加策略 `codeploy`

##### 4.分配策略给用户

1. 我们回到之前创建的用户`codeship`
2. 点击权限，附加次策略
3. 勾选策略`s3`,`deploy` 表示赋予用户`s3`和`deploy`的权限

**`S3`**

我们需要新建一个[(`储存桶`)](https://console.aws.amazon.com/s3/home?region=us-east-1#)来暂时放置部署的代码

1. 新建储存桶 YOUR_S3_BUCKET_NAME
2. 可以在新建一个 文件夹来放置 代码

**`EC2`**

接下来我们创建一个实例

1. 创建实例
2. 选择操作系统 Amazon Linux AMI
3. 选择一个实例类型 通用型
4. 配置实例详细信息
5. IAM角色选择`ec2`
6. 标签
6. 启动

**`Codedeploy`**

我们还需要在创建一个[(`codedeploy`)](https://console.aws.amazon.com/codedeploy/home?region=us-east-1)

1. 创建新的应用程序
2. 应用程序名称 和 部署组名称
3. 选择之前创建的`EC2`
4. 服务角色 ARN 选择之前创建的`codeploy`

现在 `AWS` 上的配置基本完成，后面还需要继续配置服务器。