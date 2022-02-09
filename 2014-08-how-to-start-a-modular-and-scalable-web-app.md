---
layout: post
title: 如何开始一个模块化可扩展的Web App
date: 2014/08/11 11:33:00
categories:
- 技术
tags:
- WEB
---

虽然从没有认为自己是一个前端开发者，但不知不觉中也积累下了一些前端开发的经验。正巧之前碰到一道面试题，于是就顺便梳理了一下自己关于Web App的一些思路并整理为本文。

对于很多简单的网站或Web应用来说，引入jQuery以及一些插件，在当前页面内写入简单逻辑已经可以满足大部分需要。但是如果一旦多人开发，应用的复杂程度上升，就会有很多问题开始暴露出来：

1. 数据源一般都与页面分离，那么App启动一般都需要等待数据源读入。
2. UI交互复杂时，需要将逻辑通过面向对象抽象后才能更好的复用。
3. 功能间一般都存在依赖关系，需要引入支持依赖关系的模块加载器。 那么如何解决这些问题，就以一个简单的订餐App为例，从零开始一个[模块化可扩展Web App][1]。

这个简单的App基于HTML5 Boilerplate、requireJS、jQuery Mobile、Underscore.js，后端逻辑用jStorage模拟实现。完成后的成品[在此][2]。所有代码可以在github查看。下文将逐一介绍实现的思路与方法。

### 从选择一个好模板开始

开始一个Web项目，HTML的书写总是重中之重，一个好的HTML能从根源上规避大量潜在问题，所以Web App应该全部应用一个标准化的高质量HTML模板，而不是将所有页面交由开发人员自由发挥。

这里推荐使用[HTML5 Boilerplate][3]项目作为App的默认模板以及文件路径规范，无论是网站或者富UI的App，都可以采用这个模板作为起步。

可以使用

```
git clone git://github.com/h5bp/html5-boilerplate.git
```

或者直接下载[HTML5 Boilerplate][4]项目代码。HTML5 Boilerplate的文件结构如下，

```
├── css
│   ├── main.css
│   └── normalize.css
├── doc
├── img
├── js
│   ├── main.js
│   ├── plugins.js
│   └── vendor
│       ├── jquery.min.js
│       └── modernizr.min.js
├── .htaccess
├── 404.html
├── index.html
├── humans.txt
├── robots.txt
├── crossdomain.xml
├── favicon.ico
└── [apple-touch-icons]
``` 
```

从上向下看

* `css` 用于存放css文件，并内置了Normalize.css作为默认CSS重置手段（其实Normalize.css不能算是CSS reset）。
* `doc` 存放项目文档
* `img` 存放项目图片
* `js` 存放javascript文件，其中第三方类库推荐放在vendor下
* `.htaccess` 内置了很多对于静态文件在Apache下的优化策略，如果Web服务器不是Apache则可以参考其他Web服务器配置优化。
* `404.html` 默认的404页面，
* `index.html` 项目模板
* `humans.txt` 相对于面向机器人的robots.txt，humans.txt更像是小幽默，这在里可以写关于项目/团队的介绍，或者放置一些彩蛋给那些喜欢对你的应用刨根问底的用户们。
* `robots.txt` 用于告诉搜索引擎蜘蛛爬行规则
* `crossdomain.xml` 用于配置Flash的跨域策略
* `favicon.ico` `apple-touch-icon.png`等小图标。 如果是一个主要面向移动设备，还有更具针对性的[Mobile Boilerplate][5]可供参考。

### 制定统一的编码规范

在正式开始编码之前，无论是多大规模的应用，多少人的团队，一定要有一个统一的规范，才能保证后续的开发不会乱套。

前端规范其实又要分为三部分：HTML、CSS、Javascript应该分别有自己的规范。HTML/CSS主要约定id/class的命名规则、属性的书写顺序。JavaScript可能需要细化到缩进、编码风格、面向对象写法等等。

最省事的方法当然还是参考已有的规范，比如[Google的HTML/CSS风格指南][6]、[Google的Javascript编码指南][7]等等。

#### HTML篇

`HTML5 Boilerplate`的模板核心部分不过30行，但是每一行都可谓千锤百炼，可以用最小的消耗解决一些前端的顽固问题：

**使用条件注释区分IE浏览器**

```html
  <!doctype html>
  <!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
  <!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
  <!--[if IE 8]>    <html class="no-js lt-ie9"> <![endif]-->
  <!--[if gt IE 8]> <html class="no-js"> <![endif]-->
```

之所以要这样写

1. 可以使用class作为全局条件区分低版本的IE浏览器并进行调整，这显然要优于使用CSS Hack。
2. 可以避免[IE6条件注释引起的高版本IE文件阻塞问题][8]，原文的解决方法是在前面加一个空白的条件注释，但是这里显然将原本无用空白的条件注释变得有意义了。
3. 仍然可以通过HTML验证。
4. 与Modernizr等特征检测类库使用相同的class，更具备通用性。

`no-js`标签是需要与Modernizr等类库配合使用的，如果你不想在项目中引入Modernizr，需要在Head部分加入一行使`no-js`标签变为`js`，代码来自[Avoiding the FOUC][9]：

```
<script>(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement)</script>
```

通过上面的条件注释，就可以在CSS中针对不同情况分别处理

```
.lt-ie7 {} /* IE6等版本时 */
.no-js {} /* JavaScript没有启用时 */
```

#### meta标签的书写顺序

为了让浏览器识别正确的编码，meta charset标签应该先于title标签出现。

`meta X-UA-Compatible`标签可以指定IE8以上版本浏览器以最高级模式渲染文档，同时如果已经安装[Google Chrome Frame][10]则直接使用Chrome Frame渲染。而指定渲染模式的[meta X-UA-Compatible][11]标签同样需要优先出现

```
<meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<title></title>
```

#### 设置移动设备显示窗口宽度

```
<meta name="viewport" content="width=device-width"/>
```

这是移动设备专属的标签，具体设置需要根据项目实际情况调整。

#### 使用Modernizr做浏览器差异检测

[Modernizr][12]常做前端的应该都不陌生。引入Modernizr后，html标签的no-js将会被自动替换为js，同时Modernizr会向html标签添加代表版本检测结果的class。

对于低版本浏览器的向上兼容需要根据项目实际需求处理，Modernizr也非常周到的给出的[绝大多数HTML5功能的兼容方法][13]。

### CSS篇

#### CSS重置及增强功能

HTML5 Boilerplate选择[Normalize.css][14]重置CSS。如果项目计划引入Twitter Bootstrap、YUI 3这些前端框架的话则可以移除，因为这些框架已经内置了Normalize.css。

同时HTML5 Boilerplate又引入了一个main.css，内置了一些基本的排版样式以及打印样式。

#### 使用LESS或Sass生成CSS

在复杂应用中，如果还手写CSS的话将是一件痛苦的事情，大量的class前缀，复用样式需要来回copy等等。为了更好的扩展性，这里建议在项目中引入[LESS][15]或[Sass][16]。这代表着：

* 支持变量与简单运算
* 支持CSS片段复用
* class/id样式嵌套

等一些更像是编程语言的特性。这对于提高开发效率是效果非常明显的。

以LESS为例，简单介绍一下LESS在Windows下如何应用到这个项目中：

1\. 下载[Nodejs][17]并安装，nodejs会自动将自己加入系统路径。

2\. 在cmd运行

```
npm install -g less
```

3\. 然后就可以通过lessc指令将less源文件编译为css

```
lessc avnpc.less avnpc.css
```

如果不使用nodeJs作为后端，最好在写LESS时采用watch模式，每次保存自动编译为css。这里需要安装一个辅助模块recess：

```
npm install -g recess
```

然后运行watch

```
recess avnpc.less:avnpc.css --watch
```

### avascript篇

#### 使用requireJS按需加载

模块加载器的概念可能稍微接触过前端开发的童鞋都不会陌生，通过模块加载器可以有效的解决这些问题：

1. JS文件的依赖关系。
2. 通过异步加载优化script标签引起的阻塞问题
3. 可以简单的以文件为单位将功能模块化并实现复用

主流的JS模块加载器有[requireJS][18]，[SeaJS][19]等，加载器之间可能会因为遵循的规范不同有微妙的差别，从纯用户的角度出发，之所以选requireJS而不是SeaJS主要是因为：

* 功能实现上两者相差无几，没有明显的性能差异或重大问题。
* 文档丰富程度上，requireJS远远好于SeaJS，就拿最简单的加载jQuery和jQuery插件这回事，虽然两者的实现方法相差无几，但requireJS就有可以直接拿来用的Demo，SeaJS还要读文档自己慢慢折腾。一些问题的解决上，requireJS为关键词也更容易找到答案。

#### requireJS 加载jQuery + jQuery插件

可能对于一般Web App来说，引入jQuery及相关插件的概率是最大的，requireJS也亲切的给出了相应的解决方案及动态加载jQuery及插件的文档及实例代码。

在最新的jQuery1.9.X中，jQuery已经在最后直接将自己注册为一个AMD模块，即是说可以直接被requireJS作为模块加载。如果是加载旧版的jQuery有两种方法：

1. 让jQuery先于requireJS加载
2. 对jQuery代码稍做一点处理，在jQuery代码包裹一句：

```
define(["jquery"], function($) {
   // $ is guaranteed to be jQuery now */
});
```

requireJS的示例中，直接将requireJS与jQuery合并为一个文件，如果是采用jQuery作为核心库的话推荐这种做法。

同样对于jQuery插件来说也有两种方法

1\. 在插件外包裹代码

```
define(["jquery"], function($){
    // Put here the plugin code.
});
```

2\. 在使用reuqireJS代码加载前注册插件（比如在main.js）中

```
requirejs.config({
  "shim": {
     "jquery-cookie": ["jquery"]
  }
});
```

#### requireJS加载第三方类库

在实例的App中还用到了jQuery以外的第三方类库，如果类库不是一个标准的AMD模块而又不想更改这些类库的代码，同样需要提前进行定义：

```
require.config({
  paths: {
    'underscore': 'vendor/underscore'
  },
  shim: {
    underscore: {
      exports: '_'
    }
  }
});
```

#### CSS文件的模块化处理

在requireJS中，模块的概念仅限于JS文件，如果需要加载图片、JSON等非JS文件，requireJS实现了一系列[加载插件][20]。

但是遗憾的是requireJS官方没有对CSS进行模块化处理，而我们在实际项目中却往往能遇到一些场景，比如一个轮播的图片展示栏，比如高级编辑器等等。几乎所有的富UI组件都会由JS与CSS两部分构成，而CSS之间也存在着模块的概念以及依赖关系。

为了更好的与requireJS整合，这里采用require-css来解决CSS的模块化与依赖问题。

require-css是一个requireJS插件，下载后将css.js与normalize.js放于main.js同级即可默认被加载，比如在我们的项目中需要加载jQuery Mobile的css文件，那么可以直接这样调用：

```
require(['jquery', 'css!../css/jquery.mobile-1.3.0.min.css'], function($) {
});
```

不过由于这个CSS本质上是属于jQuery Mobile模块的一部分，更好的做法是将这个CSS文件的定义放在jQuery Mobile的依赖关系中，最终我们的requireJS定义部分为：

```
require.config({
  paths: {
    'jquerymobile': 'vendor/jquery.mobile-1.3.0',
    'jstorage' : 'vendor/jstorage',
    'underscore': 'vendor/underscore'
  },
  shim: {
    jquerymobile : {
      deps: [
      'css!../css/jquery.mobile-1.3.0.min.css'
      ]
    },
    underscore: { 
      exports: '_'
    }
  }
});
```

在使用模块时，只需要：

```
require(['jquery', 'underscore', 'jquerymobile', 'jstorage'], function($, _) {
});
```

jQuery Mobile的CSS文件就会被自动加载，这样CSS与JS就被整合为一个模块了。同理其他有复杂依赖关系的模块也可以做类似处理，requireJS会解决依赖关系的逻辑。

#### 数据源的加载与等待

Web App一般都会动态加载后端的数据，数据格式一般可以是JSON、JSONP也可以直接是一个JS变量。这里以JS变量为例

```
var restaurants = [
  {
    "name": "KFC"
  },
  {
    "name": "7-11"
  },
  {
    "name": "成都小吃"
  }
]
```
  

载入这段数据:

```
$.getScript('data/restaurants.json', function(e){
  var data = window.restaurants;
  alert(data[0].name); //KFC
});
```

单一的数据源确实很简单，但是往往一个应用中会有多个数据源，比如在这个实例App中UI就需要载入用户信息、餐厅信息、订餐信息三种数据后才能工作。如果仅仅靠多层嵌套回调函数的话，可能代码的耦合就非常重了。

为了解决多个数据加载的问题，我习惯的解决方法是构造一个dataReady事件响应机制。

```
var foodOrder = {

  //数据载入后要执行的函数暂存在这里
  dataReadyFunc : []

  //数据源URL及载入状态
  , dataSource : [
      { url : 'data/restaurants.json', ready : false, data : null },
      { url : 'data/users.json', ready : false, data : null },
      { url : 'data/foods.json', ready : false, data : null }
  ]

  //检查数据源是否全部载入完毕
  , isReady : function(){
      var isReady = true;
      for(var key in this.dataSource){
         if(this.dataSource[key].ready !== true){
             isReady = false;
         }
      }
      return isReady;
  }

  //数据源全部加载完毕，则逐一运行dataReadyFunc中存放的函数
  , callReady : function(){
      if(true === this.isReady()){
         for(var key in this.dataReadyFunc){
             this.dataReadyFunc[key]();
         }
      }
  }

  //供外部调用，会将外部输入的函数暂存在dataReadyFunc中
  , dataReady : function(func){
      if (typeof func !== 'function') {
         return false;
      }
      this.dataReadyFunc.push(func);
  }

  , init : function(){
      var self = this;
      var _initElement = function(key, url){
         $.getScript(url, function(e){
             //每次载入数据后，将数据存放于dataSource中，将ready状态置为true，并调用callReady
             self.dataSource[key].data = window[key];
             self.dataSource[key].ready = true;
             self.callReady();
         });
      }
      for(var key in this.dataSource){
         _initElement(key, this.dataSource[key].url);
      }
  }
}
```

用法为

```
foodOrder.dataReady(function(){
  alert(1);    
});
foodOrder.init();
```

dataReady内的alert将会在所有数据载入完毕后开始执行。

这段处理的逻辑并不复杂，将所有要执行的方法通过dataReady暂存起来，等待数据全部加载完毕后再执行，更加复杂的场景此方法仍然通用。

#### 使用JS模板引擎

数据载入后，最终都会以某种形式显示在页面上。简单情况，我们可能会这样做：

```
$('body').append('<div>' + data.name + '</div>');
```

如果页面逻辑一旦复杂，比如需要有if判断或者多层循环时，这种连接字符串的方式就相形见绌了，而这也就催生出了JS模板引擎。

主流的JS模板引擎有[underscore.js][21]，[Jade][22]，[EJS][23]等等，可以[横向对比一下这些JS模板引擎的优缺点][24]。

对于相对简单的页面逻辑（只需要支持if和for/each）来说，我更倾向选用轻巧的`underscore.js`或者[JavaScript Templates][25]。

在当前例子中，使用underscore.js生成列表就非常简单了，页面模板为：

在当前例子中，使用underscore.js生成列表就非常简单了，页面模板为：

```
<ul data-role="listview" data-inset="true">
<script id="tmpl-restaurants" type="text/template">
   < % _.each(data, function(restaurant) { %>
       <li>
           <a href="#" data-rel="back" data-value="<%- restaurant.name%>">< %- restaurant.name%></a>
       </li>
   < % }); %>
</script>
</ul>
```
  

调用引擎

```
$("#tmpl-restaurants").replaceWith(
   _.template($("#tmpl-restaurants").html(), {
       data : restaurants
   })
);
```
#### 面向对象与模块化

通过上面这些工具的组合，我们有了模块的概念，有了模板引擎，有数据的加载。最终还是要通过javascript将这一切组织在一起并加入应用所需要的逻辑。为了能最大限度的复用代码，用面向对象的方式去组织内容是比较好的选择。

JavaScript虽然原生并不支持面向对象，但是依然可以通过很多方式模拟出面向对象的特性。例子中采用了我个人比较喜欢的一种方式是：

```
var foodOrder = function(ui, options){
   //构造函数
   this.init(ui, options);
}
foodOrder.prototype = {
  defaultUI :  {
      form : '#form-order'
  }
  , defaultOptions : {
      debug : false
  }
  , init : function(ui, options){
      this.ui = $.extend({}, this.defaultUI, ui);
      this.options = $.extend({}, this.defaultOptions, options);
  }
}
var order = new foodOrder({
   form : '#real-form'
}, {
   debug : true
});
```

将页面的UI元素以及配置项目抽象出来，在实际构造对象时则可以通过入口参数复写，可以分离整个项目的逻辑与UI，使处理的方式更加灵活。

[1]: http://avnpc.com/pages/start-a-modular-extensible-webapp

[2]: http://allovince.github.com/webapp-startup/

[3]: http://html5boilerplate.com/

[4]: https://github.com/h5bp/html5-boilerplate

[5]: http://html5boilerplate.com/mobile/

[6]: https://google.github.io/styleguide/htmlcssguide.xml

[7]: https://google.github.io/styleguide/jsguide.html

[8]: http://webforscher.wordpress.com/2010/05/20/ie-6-slowing-down-ie-8/

[9]: http://paulirish.com/2009/avoiding-the-fouc-v3/

[10]: http://www.google.com/chromeframe?quickenable=true

[11]: http://msdn.microsoft.com/en-us/library/cc288325%28VS.85%29.aspx

[12]: http://modernizr.com/

[13]: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills

[14]: https://github.com/necolas/normalize.css

[15]: http://lesscss.org/

[16]: http://sass-lang.com/

[17]: http://nodejs.org/

[18]: http://requirejs.org/

[19]: http://seajs.org/docs/

[20]: http://requirejs.org/docs/plugins.html

[21]: http://documentcloud.github.com/underscore/

[22]: http://jade-lang.com/

[23]: http://embeddedjs.com/

[24]: http://engineering.linkedin.com/frontend/client-side-templating-throwdown-mustache-handlebars-dustjs-and-more

[25]: https://github.com/blueimp/JavaScript-Templates
