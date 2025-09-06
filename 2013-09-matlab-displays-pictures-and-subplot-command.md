---
layout: post
title: Matlab 显示图片和SubPlot命令
date: 2013/09/08 11:51:00
categories:
- 技术
tags:
- Matlab
---

最近写个图片搜索引擎，恶补 Matlab 中。。。。

- matlab 显示图片命令：*

```
   f1=imread('E:/iaprtc12/iaprtc12/images/02/2007.jpg') %读取图像矩阵
   imshow(f1) %显示该图像
```

![](http://pics.naaln.com/blog/2019-01-14-062323.jpg-basicBlog)

- 但是如果需要在一个界面内显示多幅图片 就需要 SubPlot 命令帮助了 *

形式：`subplot（m,n,p`）或者 `subplot（m n p）`。

说明：subplot 是将多个图画到一个平面上的工具。其中，m 表示是图排成 m 行，n 表示图排成 n 列，也就是整个 figure 中有 n 个图是排成一行的，一共 m 行，如果第一个数字是 2 就是表示 2 行图。p 是指你现在要把曲线画到 figure 中哪个图上，最后一个如果是 1 表示是从左到右第一个位置，n*m 表示最后一个图。

形式：`subplot（m,n,p`）或者 `subplot（m n p）`。

说明：P 也可以是向量表示将 P 中指定的小块合并成一个大块创建坐标系，P 中指定的小块可以不连续，甚至不相连。比如 subplot(2,3,[2 5]) 表示将第 2 和 5 小块连成一个大块；subplot(2,3,[2 6]) 由于 2 和 6 不连续也不相连，此时表示将第 2、3、5 和 6 四块连成一个大块，相当于 subplot(2,3,[2 3 5 6])

形式：`subplot('Position',[left bottom width height])`。

说明：在指定位置创建一个新坐标系，等效于

```
   axes('Position',[left bottom width height])
   f1=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,1),1)) '.jpg']);%读取图像矩阵
   f2=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,2),1)) '.jpg']);%读取图像矩阵
   f3=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,3),1)) '.jpg']);%读取图像矩阵
   f4=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,4),1)) '.jpg']);%读取图像矩阵
   f5=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,5),1)) '.jpg']);%读取图像矩阵
   f6=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,6),1)) '.jpg']);%读取图像矩阵
   f7=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,7),1)) '.jpg']);%读取图像矩阵
   f8=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,8),1)) '.jpg']);%读取图像矩阵
   f9=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,9),1)) '.jpg']);%读取图像矩阵
   f10=imread([DIRS.SOURCEIMG num2str(idxfile(IX(1,10),1)) '.jpg']);%读取图像矩阵
   subplot(2,5,1)
   imshow(f1);%显示该图像
   subplot(2,5,2)
   imshow(f2);%显示该图像
   subplot(2,5,3)
   imshow(f3);%显示该图像
   subplot(2,5,4)
   imshow(f4);%显示该图像
   subplot(2,5,5)
   imshow(f5);%显示该图像
   subplot(2,5,6)
   imshow(f6);%显示该图像
   subplot(2,5,7)
   imshow(f7);%显示该图像
   subplot(2,5,8)
   imshow(f8);%显示该图像
   subplot(2,5,9)
   imshow(f9);%显示该图像
   subplot(2,5,10)
   imshow(f10);%显示该图像
```

![](http://pics.naaln.com/blog/2019-01-14-062326.jpg-basicBlog)

缺点是我不知道怎么比较好的控制图片的大小（请高手指教），好像每个子区域的大小是默认设置的，而且图片会默认的四周留空，不过反正只是为了更清楚的看到实验结果，这个没什么关系。

- 绘制图表的话，就比较容易控制图片的大小和位置 *

例如：

```
    t=0:0.001:1;
    y1=sin(10*t);
    y2=sin(15*t);
    subplot(211)
    plot(t,y1)
    subplot(212)
    plot(t,y2)
```

![](http://pics.naaln.com/blog/2019-01-14-062328.jpg-basicBlog)

或者通过 axes 函数来重新规定子窗口的大小和位置

```
   axes('position',[.1 .1 .8 .6])
   mesh(peaks(20));
   axes('position',[.1 .7 .8 .2])
   pcolor([1:10;1:10]);
*```

![](http://pics.naaln.com/blog/2019-01-14-062329.jpg-basicBlog)
