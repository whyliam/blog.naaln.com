---
title: UILable属性详解
date: 2016/12/02 15:49:48
categories:
- 技术
tags:
- Swift
---

### 常用属性和方法有

1\. 创建

```swift
CGRect rect = CGRectMake(100, 200, 50, 50);
UILabel *label = [[UILabel alloc] initWithFrame:rect];
```

2\. text //设置和读取文本内容，默认为 nil

```swift
label.text = @"文本信息"; //设置内容
NSLog(@"%@", label.text); //读取内容
```

3\. textColor //设置文字颜色，默认为黑色

```swift
lable.textColor = [UIColor redColor];
```

4\. font //设置字体大小，默认 17

```swift
label.font = [UIFont systemFontOfSize:20]; //⼀一般方法
label.font = [UIFont boldSystemFontOfSize:20]; //加粗方法
label.font = [UIFont fontWithName:@"Arial" size:16]; //指定
字体的方法
//还有⼀一种从外部导入字体的方法。
```

5\. textAlignment //设置标签文本对齐方式。

```swift
label.textAlignment = NSTextAlignmentCenter; //还有
NSTextAlignmentLeft、 NSTextAlignmentRight.
```

6\. numberOfLines //标签最多显示行数，如果为 0 则表示多行。

```swift
label.numberOfLines = 2;
```

7\. enabled //只是决定了 Label 的绘制方式，将它设置

```swift
为NO将会使文本变暗，表示它没有激活，这时向它设置颜色值是无效的。
label.enable = NO;
```

8\. highlighted //是否高亮显示

```swift
label.highlighted = YES;
label.highlightedTextColor = [UIColor orangeColor];
//高亮 显示时的文本颜色
```

9\. ShadowColor //设置阴影颜色

```swift
[label setShadowColor:[UIColor blackColor]];
```

10\. ShadowOffset //设置阴影偏移量

```swift
[label setShadowOffset:CGSizeMake(-1, -1)];
```

11\. baselineAdjustment //如果 adjustsFontSizeToFitWidth 属性设

```swift
//置为YES，这个属性就来控制文本基线的行为。
label.baselineAdjustment = UIBaselineAdjustmentNone;
UIBaselineAdjustmentAlignBaselines = 0, //默认，文本最上端与中线对齐。
UIBaselineAdjustmentAlignCenters,  //文本中线与label中线对齐。
UIBaselineAdjustmentNone, //文本最低端与label中线对齐。
```

12\. Autoshrink //是否自动收缩

```swift
Fixed Font Size //默认，如果Label宽度小于文字长度时时，文字大小不自动缩放
minimumScaleFactor //设置最小收缩比例，如果Label宽度小于文字长度时，文字进行收缩，收缩超过比例后，停止收缩。
minimumFontSize //设置最小收缩字号，如果Label宽度小于文字长度时，文字字号减小，低于设定字号后，不再减小。//6.0以后不再使用了。
label.minimumScaleFactor = 0.5;
```

13\. adjustsLetterSpacingToFitWidth //改变字母之间的间距来适应 Label 大小

```swift
myLabel.adjustsLetterSpacingToFitWidth = NO;
```

14\. lineBreakMode //设置文字过长时的显示格式

```swift
label.lineBreakMode = NSLineBreakByCharWrapping; //以字符为显示单位显示，后面部分省略不显示。
label.lineBreakMode = NSLineBreakByClipping; //剪切与文本宽度相同的内容长度，后半部分被删除。
label.lineBreakMode = NSLineBreakByTruncatingHead; //前面部分文字以……方式省略，显示尾部文字内容。
label.lineBreakMode = NSLineBreakByTruncatingMiddle; //中间的内容以……方式省略，显示头尾的文字内容。
label.lineBreakMode = NSLineBreakByTruncatingTail; //结尾部分的内容以……方式省略，显示头的文字内容。
label.lineBreakMode = NSLineBreakByWordWrapping; //以单词为显示单位显示，后面部分省略不显示。
```

15\. adjustsFontSizeToFitWidth //设置字体大小适应 label 宽度

```swift
label.adjustsFontSizeToFitWidth = YES;
```

16\. attributedText：//设置标签属性文本。

```swift
NSString *text = @"first";
NSMutableAttributedString *textLabelStr =
[[NSMutableAttributedString alloc]
initWithString:text];
[textLabelStr
setAttributes:@{NSForegroundColorAttributeName :
[UIColor lightGrayColor], NSFontAttributeName :
[UIFont systemFontOfSize:17]} range:NSMakeRange(11,
10)];
label.attributedText = textLabelStr;
```

17\. 竖排文字显示每个文字加一个换行符，这是最方便和简单的实现方式。

```swift
label.text = @"请\n竖\n直\n方\n向\n排\n列";
label.numberOfLines = [label.text length];

```

18\. 计算 UIlabel 随字体多行后的高度

```swift
CGRect bounds = CGRectMake(0, 0, 200, 300);
heightLabel = [myLabel textRectForBounds:bounds
limitedToNumberOfLines:20]; //计算20行后的Label的Frame
NSLog(@"%f",heightLabel.size.height);
```

19\. UILabel 根据字数多少自动实现适应高度

```swift
UILabel *msgLabel = [[UILabel alloc]
initWithFrame:CGRectMake(15, 45, 0, 0)];
msgLabel.backgroundColor = [UIColor lightTextColor];
[msgLabel setNumberOfLines:0];
msgLabel.lineBreakMode = UILineBreakModeWordWrap;
msgLabel.font = [UIFont fontWithName:@"Arial" size:12];
CGSize size = CGSizeMake(290, 1000);
msgLabel.text = @"获取到的deviceToken，我们可以通过webservice服务提交给。net应用程序，这里我简单处理，直接打印出来，拷贝到。net应用环境中使用。";
CGSize msgSie = [msgLabel.text sizeWithFont:fonts
constrainedToSize:size];
[msgLabel setFrame:CGRectMake(15, 45, 290, msgSie.height)];
```

20\. 渐变字体 Label

```swift
UIColor *titleColor = [UIColor colorWithPatternImage:[UIImage
imageNamed:@"btn.png"]];
NSString *title = @"Setting";
UILabel *titleLabel = [[UILabel alloc]
initWithFrame:CGRectMake(0, 0, 80, 44)];
titleLabel.textColor = titleColor;
titleLabel.text = title;
titleLabel.font = [UIFont boldSystemFontOfSize:20];
titleLabel.backgroundColor = [UIColor clearColor];
[self.view addSubview:titleLabel];
[titleLabel release];
```

21\. Label 添加边框

```swift
titleLabel.layer.borderColor = [[UIColor grayColor] CGColor];

titleLabel.layer.borderWidth = 2;
```

#### 在 iOS 中默认的 UILabel 中的文字在竖直方向上只能居中对齐，博主参考国外网站，从 UILabel 继承了一个新类，实现了居上对齐，居中对齐，居下对齐。具体如下

```object-c
#import <UIKit/UIKit.h>
typedef enum
{
    VerticalAlignmentTop = 0, // default
    VerticalAlignmentMiddle,
    VerticalAlignmentBottom,
} VerticalAlignment;
@interface myUILabel : UILabel
{
@private
VerticalAlignment _verticalAlignment;
}

@property (nonatomic) VerticalAlignment verticalAlignment;

@end
```

```object-c
//
//  myUILabel.m
//
//
//  Created by yexiaozi_007 on 3/4/13.
//  Copyright (c) 2013 yexiaozi_007. All rights reserved.
//

#import "myUILabel.h"

@implementation myUILabel
@synthesize verticalAlignment = verticalAlignment_;

-(id)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        self.verticalAlignment = VerticalAlignmentMiddle;
    }
    return self;
}

-(void)setVerticalAlignment:(VerticalAlignment)verticalAlignment {
    verticalAlignment_ = verticalAlignment;
    [self setNeedsDisplay];
}

-(CGRect)textRectForBounds:(CGRect)bounds limitedToNumberOfLines:(NSInteger)numberOfLines {
    CGRect textRect = [super textRectForBounds:bounds limitedToNumberOfLines:numberOfLines];
    switch (self.verticalAlignment) {
        case VerticalAlignmentTop:
            textRect.origin.y = bounds.origin.y;
            break;
        case VerticalAlignmentBottom:
            textRect.origin.y = bounds.origin.y + bounds.size.height - textRect.size.height;
            break;
        case VerticalAlignmentMiddle:
            // Fall through.
        default:
            textRect.origin.y = bounds.origin.y + (bounds.size.height - textRect.size.height) / 2.0;
    }
    return textRect;
}

-(void)drawTextInRect:(CGRect)requestedRect {
    CGRect actualRect = [self textRectForBounds:requestedRect limitedToNumberOfLines:self.numberOfLines];
    [super drawTextInRect:actualRect];
}
 @end
```

在使用时：

```object-c

lbl_mylabel = [[myUILabel alloc] initWithFrame:CGRectMake(20, 50, 150, 600)];
UIColor *color = [UIColor colorWithPatternImage:[UIImage imageNamed:@"halfTransparent.png"]];//使用半透明图片作为label的背景色
lbl_mylabel.backgroundColor = color;
lbl_mylabel.textAlignment = UITextAlignmentLeft;
lbl_mylabel.textColor = UIColor.whiteColor;
lbl_mylabel.lineBreakMode = UILineBreakModeWordWrap;
lbl_mylabel.numberOfLines = 0;
[lbl_mylabel setVerticalAlignment:VerticalAlignmentTop];
[self addSubview:lbl_mylabel];
```

### 学习内容

```object-c
    /*
     1.控件 UIView UILabel UITextField UITextView UIButton
     2.字体、大小、单位、颜色
     */
    UILabel *label = [[UILabel alloc] initWithFrame:CGRectMake(10, 30, 300, 260)];
    label.text = @"Label Text Content, This is a text label things attribute";//默认为空
    label.font = [UIFont systemFontOfSize:17];//默认使用系统的17
    label.textColor = [UIColor orangeColor];//默认使用文本黑色
    label.shadowColor = [UIColor lightGrayColor];//默认没有阴影
    label.shadowOffset = CGSizeMake(1,0);//默认是一个向上的阴影(0,-1)
    label.textAlignment = NSTextAlignmentCenter;//默认是左对齐
    label.lineBreakMode = NSLineBreakByTruncatingTail;//段落样式，默认是最后截断尾巴，用……代替
```

```object-c
    //富文本的基本数据类型，属性字符串。以此为基础，如果这个设置了相应的属性，则会忽略上面设置的属性，默认为空
    NSString *string = label.text;
    const CGFloat fontSize = 16.0;
    NSMutableAttributedString *attrString = [[NSMutableAttributedString alloc] initWithString:string];
    NSUInteger length = [string length];
```

```object-c
    //设置字体
    UIFont *baseFont = [UIFont systemFontOfSize:fontSize];
    [attrString addAttribute:NSFontAttributeName value:baseFont range:NSMakeRange(0, length)];//设置所有的字体
    UIFont *boldFont = [UIFont boldSystemFontOfSize:fontSize];
    [attrString addAttribute:NSFontAttributeName value:boldFont range:[string rangeOfString:@"Text"]];//设置Text这四个字母的字体为粗体
```

```object-c
    //设置倾斜，需要导入coreText
    UIFont *italicFont = GetVariationOfFontWithTrait(baseFont,
                                                     kCTFontTraitItalic);
    [attrString addAttribute:NSFontAttributeName value:italicFont
                       range:[string rangeOfString:@"Label"]];
```

```object-c
    // 设置颜色
    UIColor *color = [UIColor redColor];
    [attrString addAttribute:NSForegroundColorAttributeName
                       value:color
                       range:[string rangeOfString:@"Content"]];
    [attrString addAttribute:NSBackgroundColorAttributeName value:[UIColor blueColor] range:[string rangeOfString:@"ent"]];
```

```object-c
    //可以对这些属性设置值
    //字体名称有以下：
//    label.font = [UIFont fontWithName:@"Arial-BoldItalicMT" size:24];
    [attrString addAttribute:NSFontAttributeName value:[UIFont fontWithName:@"Verdana-BoldItalic" size:18] range:[string rangeOfString:@"Label"]];
    label.numberOfLines = 2;
    NSMutableParagraphStyle *
    style = [[NSParagraphStyle defaultParagraphStyle] mutableCopy];
    style.lineSpacing = 10;//增加行高
    style.headIndent = 10;//头部缩进，相当于左padding
    style.tailIndent = -10;//相当于右padding
    style.lineHeightMultiple = 1.5;//行间距是多少倍
    style.alignment = NSTextAlignmentLeft;//对齐方式
    style.firstLineHeadIndent = 20;//首行头缩进
    style.paragraphSpacing = 10;//段落后面的间距
    style.paragraphSpacingBefore = 20;//段落之前的间距
    [attrString addAttribute:NSParagraphStyleAttributeName value:style range:NSMakeRange(0, length)];

    [attrString addAttribute:NSKernAttributeName value:@2 range:NSMakeRange(0, length)];//字符间距 2pt
    [attrString addAttribute:NSStrokeColorAttributeName value:[UIColor blueColor] range:[string rangeOfString:@"is"]];//设置文字描边颜色，需要和NSStrokeWidthAttributeName设置描边宽度，这样就能使文字空心
    [attrString addAttribute:NSStrokeWidthAttributeName value:@2 range:[string rangeOfString:@"is"]];//空心字，文字边框描述
    [attrString addAttribute:NSUnderlineStyleAttributeName value:@(NSUnderlineStyleSingle) range:[string rangeOfString:@"text"]];//下划线
    [attrString addAttribute:NSUnderlineStyleAttributeName value:@(NSUnderlineStyleThick) range:[string rangeOfString:@"label"]];//厚的下划线
    [attrString addAttribute:NSStrikethroughStyleAttributeName value:@(NSUnderlinePatternSolid | NSUnderlineStyleSingle) range:[string rangeOfString:@"things"]];//删除线
    [attrString addAttribute:NSStrikethroughColorAttributeName value:[UIColor blueColor] range:[string rangeOfString:@"things"]];//删除线蓝色
   label.attributedText = attrString;

    label.highlightedTextColor = [UIColor redColor];//设置文本高亮显示颜色，与highlighted一起使用。
    label.highlighted = NO; //高亮状态是否打开
    label.enabled = YES;//设置文字内容是否可变
    label.userInteractionEnabled = YES;//设置标签是否忽略或移除用户交互。默认为NO
    label.baselineAdjustment = UIBaselineAdjustmentNone;//如果adjustsFontSizeToFitWidth属性设置为YES，这个属性就来控制文本基线的行为。
//    UIBaselineAdjustmentAlignBaselines=0，默认，文本最上端与中线对齐。
//    UIBaselineAdjustmentAlignCenters,   文本中线与label中线对齐。
//    UIBaselineAdjustmentNone,  文本最低端与label中线对齐。;
    [self.view addSubview:label];
```

```object-c
  /*
    lineSpacing;                         来增加行距
    paragraphSpacing;
    alignment;                           对齐
    firstLineHeadIndent;                 段落开始的缩排像素
    headIndent;                          可调整全部文字的缩排距离，可当作左边 padding 使用
    tailIndent;                          可调整文字尾端的缩排距离。需要注意的是，这里指定的值可以当作文字显示的宽、而也可当作右边 padding 使用，依据输入的正负值而定：
    lineBreakMode;
    minimumLineHeight;
    maximumLineHeight;        而针对不同的字型与字号，我们可以透过指定最大与最小行距（maximumLineHeight 与 minimumLineHeight）来避免过高或过窄的状况发生。
    baseWritingDirection;
    lineHeightMultiple;                  想要调整行距，可以透过搭配使用 lineHeightMultiple 更改行距倍数
    paragraphSpacingBefore; 而若是文章内容有分段落的话，也可以透过指定段落结尾距离（paragraphSpacing）以及段落开头距离
```

```object-c
//获取斜体
UIFont * GetVariationOfFontWithTrait(UIFont *baseFont,
                                     CTFontSymbolicTraits trait) {
    CGFloat fontSize = [baseFont pointSize];
    CFStringRef
    baseFontName = (__bridge CFStringRef)[baseFont fontName];
    CTFontRef baseCTFont = CTFontCreateWithName(baseFontName,
                                                fontSize, NULL);
    CTFontRef ctFont =
    CTFontCreateCopyWithSymbolicTraits(baseCTFont, 0, NULL,
                                       trait, trait);
    NSString *variantFontName =
    CFBridgingRelease(CTFontCopyName(ctFont,
                                     kCTFontPostScriptNameKey));

    UIFont *variantFont = [UIFont fontWithName:variantFontName
                                          size:fontSize];
    CFRelease(ctFont);
    CFRelease(baseCTFont);
    return variantFont;
};
```
