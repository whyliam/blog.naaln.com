---
layout: post
title: 听音识曲，ECHOPRINT使用笔记
date: 2013/08/26 02:00:00
categories:
  - 技术
tags:
  - Echoprint
  - 音乐识别
  - 指纹生成
  - API使用
  - 编程实践
description: 
  Echoprint开源音乐指纹工具实现听音识曲。准备阶段申请API密钥，选择ENMFP或Echoprint下载生成codegen程序。编写代码用Process类调用codegen.exe获取指纹，用网络请求提交到API。测试中识别中文歌曲结果为空，项目暂停。
---

# 1.介绍

> Echo Nest 宣布针对开发者推出 Echoprint，一个开源音乐「指纹」工具。该工具可免费使用，Echo Nest 表示，任何开发者都可以创建它们自己的乐纹应用。其他的乐纹服务 – notably Shazam, SoundHound, MusicID 和 PlayEar ，将关注点更多的放在了智能手机用户上。Echo Nest CTO 兼联合创始人 Brian Whitman 表示，「音乐「指纹」归属于互联网，它将是任何开发者依赖但无需担心许可费用或复杂的数据库实现的一种服务。「该公司表示期待开发者基于该工具，客户端、服务器端及数据，创建有趣的应用。

以上是我复制的，具体请参见 [http://echoprint.me/][1].Echoprint 功能很强大，但这里只介绍一下如何使用它完成」听音识曲」。Echoprint 关于这方面的介绍可以参见 [Echoprint 的 API][2] 关于 identify 的介绍。

# 2.准备

先申请一个帐号 这是获取 API Key 的必要条件 EchoPrint 目前支持两套识别系统，

[ENMFP][3] (闭源) 以及 [Echoprint][4](开源).两者之间的区别在 API 文档里面也有说明这里就不复述了。

下载 ENMFP 的话比较简单，Echoprint 的话就得手动生成代码，过程比较复杂但是按照说明应该没什么问题。值得注意的是 u 在测试的时候使用的 cmake 是安装版 (绿色版冒事有点问题记得，应该是我不会用。大神请忽略).

Echoprint 生成后应该会有 codegen.exe 的文件，以及两个动态链接库文件 (*.dll).ENMFP 下载后会有个 codegen-windows.exe 以及一个 codegen.dll 文件。在命令提示符中输入可」执行程序文件名 音乐文件名」就可以获得类似与这样的 Json query 了

```
   {
     "metadata": {
       "artist": "Michael jackson",
       "release": "800 chansons des annes 80",
       "title": "Billie jean",
       "genre": "",
       "bitrate": 192,
       "sample_rate": 44100,
       "duration": 294,
       "filename": "../billie_jean.mp3",
       "samples_decoded": 220598,
       "given_duration": 20,
       "version": 3.13
     },
     "code": "eJxVlIuNwzAMQ1fxCDL133-xo1rnGqNAEcWy_ERa2aKeZmW9ustWVYrXrl5bthn_laFkzguNWpklEmoTB74JKYZSPlbJ0sy9fQrsrbEaO9W3bsbaWOoK7IhkHFaf_ag2d75oOQSZczbz5CKA7XgTIBIXASvFi0A3W8pMUZ7FZTWTVbujCcADlQ_f_WbdRNJ2vDUwSF0EZmFvAku_CVy440fgiIvArWZZWoJ7GWd-CVTYC5FCFI8GQdECdROE20UQfLoIUmhLC7IiByF1gzbAs3tsSKctyC76MPJlHRsZ5qhSQhu_CJFcKtW4EMrHSIrpTGLFqsdItj1H9JYHQYN7W2nkC6GDPjZTAzL9dx0fS4M1FoROHh9YhLHWdRchQSd_CLTpOHkQQP3xQsA2-sLOUD7CzxU0GmHVdIxh46Oide0NrNEmjghG44Ax_k2AoDHsiV6WsiD6OFm8y-0Lyt8haDBBzeMlAnTuuGYIB4WA2lEPAWbdeOabgFN6TQMs6ctLA5fHyKMBB0veGrjPfP00IAlWNm9n7hEh5PiYYBGKQDP-x4F0CL8HkhoQnRWN997JyEpnHFR7EhLPQMZmgXS68hsHktEVErranvSSR2VwfJhQCnkuwhBUcINNY-xu1pmw3PmBqU9-8xu0kiF1ngOa8vwBSSzzNw=="
   }
```

看到这，准备工作就算完了。

# 3.编写代码 终于到编写代码的环节了，由于生成的都是 Exe 的控制台程序，要在 C#中调用的话可以使用 Process 类，以下是调用并获取调用结果的方法

```
   public class Fingerprint
   {
       /// <summary>
       /// 获取音乐指纹
       /// </summary>
       /// <param name="fileName" />
   文件名
       /// <returns>指纹</returns>
       static public string CalculateFingerprint(string fileName)
       {
           Process process = new Process();
           process.StartInfo.FileName = "codegen.windows.exe";
           process.StartInfo.Arguments ="\""+fileName+"\"";
           process.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
           process.StartInfo.RedirectStandardOutput = true;
           process.StartInfo.UseShellExecute = false;
           process.StartInfo.CreateNoWindow = true;
           process.Start();
           using (StreamReader streamReader = process.StandardOutput)
           {
               return streamReader.ReadToEnd();
           }
       }
   }
```

调用这个方法可以获取到 Mp3 文件的」乐纹」，这是音乐识别的主要参数。获取到了音乐的乐纹接下来就是提交乐纹并从服务器获取结果了。由于是使用 POST 或 GET 方法来调用 API,所以在 C#中需要模拟 POST 和 GET 请求，这一点可以通过 HttpWebRequest 和 HttpWebResponse 类来实现。以下是实现 POST 和 GET 的的类的实现

```
   public class Fingerprint
       {
           /// <summary>
           /// 获取音乐指纹
           /// </summary>
           /// <param name="fileName" />
   文件名
           /// <returns>指纹</returns>
           static public string CalculateFingerprint(string fileName)
           {
               Process process = new Process();
               process.StartInfo.FileName = "codegen.windows.exe";
               process.StartInfo.Arguments ="\""+fileName+"\"";

               process.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
               process.StartInfo.RedirectStandardOutput = true;
               process.StartInfo.UseShellExecute = false;
               process.StartInfo.CreateNoWindow = true;
               process.Start();

               using (StreamReader streamReader = process.StandardOutput)
               {
                   return streamReader.ReadToEnd();
               }

           }

       }
```

以上类中使用的是以 Begin 和 End 开头的异步方法，这个类没有完全实现，我只是使用 Debug.WriteLine() 显示了获取的结果 (完整的应该是获取到结果后把结果通知主程序，用事件应该不难实现),这点请有兴趣的读者自己修改下吧! 到这里就可以直接调用了

```
   public class Fingerprint
       {
           /// <summary>
           /// 获取音乐指纹
           /// </summary>
           /// <param name="fileName" />
   文件名
           /// <returns>指纹</returns>
           static public string CalculateFingerprint(string fileName)
           {
               Process process = new Process();
               process.StartInfo.FileName = "codegen.windows.exe";
               process.StartInfo.Arguments ="\""+fileName+"\"";

               process.StartInfo.WindowStyle = ProcessWindowStyle.Hidden;
               process.StartInfo.RedirectStandardOutput = true;
               process.StartInfo.UseShellExecute = false;
               process.StartInfo.CreateNoWindow = true;
               process.Start();

               using (StreamReader streamReader = process.StandardOutput)
               {
                   return streamReader.ReadToEnd();
               }

           }
       }
```

之后应该就可以在输出中看到 Debug 输出的调用结果的 Json 串了。写在最后: 可能是由于 Echoprint 数据库的原因很多歌曲返回的结果都是空的，特别是中文歌。注意到 Echoprint 的原因是希望写个小程序来帮 u 的音乐找到正确的名字和 Tag 信息，但由于实验结果有点差强人意，所以 u 就偷懒没打算继续了。嗯，这不是个好习惯!

via:[http://www.ultre.cn/archives/25][5]

 [1]: http://echoprint.me/

 [2]: http://developer.echonest.com/docs/v4/song.html#identify

 [3]: http://developer.echonest.com/downloads/license

 [4]: https://github.com/echonest/echoprint-codegen

 [5]: http://www.ultre.cn/archives/25
