---
layout: post
title: 董小姐，MATLAB版
date: 2013/09/05 10:34:00
categories:
- 技术
tags:
- Matlab
- 音乐
- 编程
- 声音处理
- 宋冬野
- 董小姐
- 算法
- 音频合成
- 创意编程
description: MATLAB音乐编程创意项目，用MATLAB演奏宋冬野的《董小姐》。作者调侃自己"唯一会的乐器就是MATlab，注定孤独终老"，展示了MATLAB在音频处理和音乐合成方面的强大功能。代码包括采样率设置、音符频率计算、修饰函数设计、不同长度音符（四分、八分、十六分）的处理、特殊音符处理等完整音乐合成流程。使用正弦波叠加调制技术，根据十二平均律计算各音符频率，通过sound函数播放生成的旋律。最后还集成了SAPI语音合成朗读功能（"董小姐"、"太他妈好听了！"）。体现了编程与艺术结合的创意趣味。
---

昨天看到有人用 MATLAB 写了首卡农，跪倒。花了点时间自学了一下怎么用 MATLAB 处理声音，搞出来一份董小姐的 MATLAB 版本。想来人生真是残酷，唯一会的乐器就是 MATLAB 了，注定孤独终老。顺便说一句，乐理真他妈难呐。。。

=================================================

```
   % 董小姐 词曲：宋冬野
   % 演奏者：Matlab
   sp=actxserver('SAPI.SpVoice');
   sp.Speak('董小姐');
   sp.Speak('作曲者');
   sp.Speak('宋冬野');
   sp.Speak('演奏者');
   sp.Speak('Matlab');
   fs = 44100; % 采样率
   dt= 1/fs;
   T16=0.25;%十六分音符时长0.25秒
   t16=0:dt:T16;
   [temp k]=size(t16);
   t4=linspace(0,4*T16,4*k);
   t8=linspace(0,2*T16,2*k);
   [temp i]=size(t4);
   [temp j]=size(t8);
   f=440*sqrt(0.5);% E大调
   d=2^(1/12);
   blk4=zeros(1,i);%四分休止符
   blk8=zeros(1,j);%八分休止符
   blk16=zeros(1,k);%十六分休止符
   % Modification functions
   mod4 = sin(pi*t4/t4(end));
   mod8 = sin(pi*t8/t8(end));
   mod16 = sin(pi*t16/t16(end));
   %四分音符
   one4=mod4.*sin(2*pi*f*d^1*t4);
   two4=mod4.*sin(2*pi*f*d^3*t4);
   three4=mod4.*sin(2*pi*f*d^5*t4);
   four4=mod4.*sin(2*pi*f*d^6*t4);
   five4=mod4.*sin(2*pi*f*d^8*t4);
   six4=mod4.*sin(2*pi*f*d^10*t4);
   seven4=mod4.*sin(2*pi*f*d^12*t4);
   upone4=mod4.*sin(2*pi*f*d^13*t4);
   uptwo4=mod4.*sin(2*pi*f*d^15*t4);
   upthree4=mod4.*sin(2*pi*f*d^17*t4);
   %八分音符
   one8=mod8.*sin(2*pi*f*d^1*t8);
   two8=mod8.*sin(2*pi*f*d^3*t8);
   three8=mod8.*sin(2*pi*f*d^5*t8);
   four8=mod8.*sin(2*pi*f*d^6*t8);
   five8=mod8.*sin(2*pi*f*d^8*t8);
   six8=mod8.*sin(2*pi*f*d^10*t8);
   seven8=mod8.*sin(2*pi*f*d^12*t8);
   upone8=mod8.*sin(2*pi*f*d^13*t8);
   uptwo8=mod8.*sin(2*pi*f*d^15*t8);
   upthree8=mod8.*sin(2*pi*f*d^17*t8);
   %十六分音符
   one16=mod16.*sin(2*pi*f*d^1*t16);
   two16=mod16.*sin(2*pi*f*d^3*t16);
   three16=mod16.*sin(2*pi*f*d^5*t16);
   four16=mod16.*sin(2*pi*f*d^6*t16);
   five16=mod16.*sin(2*pi*f*d^8*t16);
   six16=mod16.*sin(2*pi*f*d^10*t16);
   seven16=mod16.*sin(2*pi*f*d^12*t16);
   upone16=mod16.*sin(2*pi*f*d^13*t16);
   uptwo16=mod16.*sin(2*pi*f*d^15*t16);
   upthree16=mod16.*sin(2*pi*f*d^17*t16);
   upfive16=mod16.*sin(2*pi*f*d^20*t16);
   %特殊音符
   t8p=linspace(0,3T16,3k);
   t5_16=linspace(0,5T16,5k);
   t2=linspace(0,8T16,8k);
   mod8p=sin(pit8p/t8p(end));
   mod5_16=sin(pit5_16/t5_16(end));
   mod2=sin(pit2/t2(end));
   three8p=mod8p.sin(2pifd^5t8p);
   five8p=mod8p.sin(2pifd^8t8p);
   blk8p=zeros(1,3k);
   six3_16=mod8p.sin(2pifd^10t8p);
   upone2=mod2.sin(2pifd^13t2);
   upthree8p=mod8p.sin(2pifd^17t8p);
   uptwo8p=mod8p.sin(2pifd^15t8p);
   upone8p=mod8p.sin(2pifd^13t8p);
   upone5_16=mod5_16.sin(2pifd^13t5_16);
   upthree5_16=mod5_16.sin(2pifd^17*t5_16);
   %谱子
   melody=[blk4 five8 upone16 six3_16 blk8 blk16 six16 six16 six16...
   seven8 five8 five8 six16 five8 three8p blk16 two16 three16 two16 three8 two16 five8 five4 blk8p two16 five8p two16 five16 three8p...
   blk4 blk4 blk4 blk4 five8 upone16 six3_16 blk8 blk16 six16 seven16 five16...
   seven16 seven8 five16 seven8 five16 seven16 six4 blk8 five16 five16 six8 six16 six8 five8p blk4 three16 two8 three16 one4...
   blk4 blk4 blk4 blk4 five8 upone16 six3_16 blk4 six16 six16...
   seven8 seven16 seven8 five8 seven16 six16 six3_16 blk8 three16 five16 six8 five16 six16 five16 five8p six16 five8 two16 two8 five16 five8 three8p...
   blk4 blk4 blk4 blk4 five8 upone16 six3_16 blk8 six16 seven8 seven16 seven16 five16 five8 upone8 uptwo16 upone8 six3_16 blk16...
   five16 six16 five16 six4 blk16 five16 six16 five16 five8 seven4 seven16 upone16 upone2 blk4 blk4...
   blk16 upthree16 upthree16 upthree8 uptwo16 upthree8 uptwo8 uptwo16 upone16 uptwo8 upone16 upthree8 upthree8p five8 upone16 six3_16 blk8 blk8p...
   five16 uptwo16 upthree8 upthree16 uptwo16 uptwo16 upthree8 uptwo16 uptwo16 upthree8 uptwo8 uptwo16 upone16 upone8 five16 five16 upthree8 uptwo16 upthree5_16 blk4 blk4...
   upthree8 six8 upthree8 upfive16 upthree8 uptwo8p blk16...
   five16 upone16 uptwo16 upthree8 five8 upthree8 uptwo16 five8 six3_16 blk16...
   two16 six16 five16 five8 five16 upone8 upone8p blk4 five8 upone16 upone5_16];
   sound(melody,fs)
   sp.Speak('太他妈好听了！');
```

原链没办法传上来，大家戳这个吧！
