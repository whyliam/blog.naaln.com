---
layout: post
title: OpenGL辅助库的基本使用
date: 2013/04/13 03:57:00
categories:
- 技术
tags:
- opengl
---

OpenGL是一个开放的系统，它是独立于任何窗口系统或操作系统的。尽管它包含了许多图形函数，但它却没有窗口函数，也没有从键盘和鼠标读取事件的函数，所以要初学者写出一个完整的图形程序是相当困难的。另外，OpenGL图形函数中只提供基本的几何原形：点、线、多边形，因此要创建基本的三维几何体如球、锥体等，也很不容易。而OpenGL辅助库就是为解决这些基本问题专门设计的，它提供了一些基本的窗口管理函数和三维图形绘制函数，能帮助初学者尽快进入OpenGL世界，掌握关键的三维图形技术，体会其中奇妙的乐趣。但是，对于复杂的应用，这些函数远远不够，只能作为参考。

**辅助库函数分类**

**辅助库函数大致分为六类：**

**1.窗口初始化和退出。**

相关函数有三个，这里将详细介绍：

```
void auxInitWindow(GLbyte *titleString)
```

打开一个由auxInitDisplayMode()和auxInitPosition()指定的窗口。函数参数是窗口标题，窗口背景缺省颜色是RGBA下的黑色或颜色表(color_index)下的0号调色板的颜色。按下Escape键可以完成关掉窗口、结束程序、全部清屏三项功能。

```
void auxInitDisplayMode(GLbitfield mask)
```

设置窗口显示模式。基本模式有RGBA或颜色表、单或双缓存，也可指定其他附加模式：深度、模板或累积缓存(depth,stencil,and/or accumulation buffer)。参数mask是一组位标志的联合（取或），AUX_RGBA或AUX_INDEX、AUX_SINGLE或AUX_DOUBLE，以及其它有效标志AUX_DEPTH、AUX_STENCIL或AUX_ACCUM。

```
void auxInitPosition(GLint x,GLint y,GLsizei width,GLsizei height)
```

设置窗口位置及大小。参数(x,y)为窗口的左上角点的屏幕坐标，参数(width,height)为窗口的宽度和高度，单位为象素，缺省值为(0,0,100,100)。

**2.窗口处理和事件输入。**

当窗口创建后，且在进入主函数循环之前，应当登记以下列出的回调函数(callback function)：

```
void auxReshapeFunc(void(*function)(GLsizei,GLsizei))
```

定义窗口改变时形状重定函数。参数function是一个函数指针，这个函数带有两个参数，即窗口改变后的新宽度和新高度。通常，function是glViewport()，显示裁减后的新尺寸，重定义投影矩阵，以便使投影后图像的比例与视点匹配，避免比例失调。若不调用auxReshapeFunc()，缺省重定物体形状的函数功能是调用一个二维的正射投影矩阵。运用辅助库，窗口将在每个事件改变后自动重新绘制。

```
void auxKeyFunction(GLint key,void(*function)(void))
```

定义键盘响应函数。参数function就是当按下 key 键时所调用的函数指针，辅助库为参数key定义了几个常量：AUX_0至AUX_9、AUX_A至AUX_Z、AUX_a至AUX_z、AUX_LEFT、AUX_RIGHT、AUX_UP、AUX_DOWN(方向键)、AUX_ESCAPE、AUX_SPACE或AUX_RETURN。

```
void auxMouseFunc(GLint button,Glint mode,void(*function)(AUX_EVENTREC *))
```

定义鼠标响应函数。参数function就是当鼠标以mode方式作用于button时所调用的函数。参数button有AUX_LEFTBUTTON、AUX_MIDDLEBUTTON或AUX_RIGHTBUTTON(以右手为标准)。参数mode代表鼠标触击状态，击中时为AUX_MOUSEDOWN，释放时为AUX_MOUSEUP。参数function必须带一个参数，它是指向结构AUX_EVENNTREC的指针。当函数auxMouseFunc()被调用时将为这个结构分配相应的内存。通常用法类似如下：

```
void function(AUX_EVENTREC *event)
   {
   GLint x,y;
   x=event->data[AUX_MOUSEX];
   y=event->data[AUX_MOUSEY];
   ...
   }
```

**3.颜色表装入。**

因为OpenGL本身没有窗口系统，所以依赖于窗口系统的颜色映射就没法装入颜色查找表。如果采用颜色表模式，就要用到辅助库提供的用RGB值定义的单个颜色索引函数：

```
void auxSetOneColor(GLint index,GLfloat red,GLfloat green,GLfloat blue)
```

设置自定义颜色的索引。参数index即索引号，参数red、green、blue分别为红、绿、蓝值，范围在(0,1)内。

**4.三维物体绘制。**

每组三维物体包括两种形式：网状体(wire)和实心体(solid)。网状体没有平面法向，而实心体有，能进行光影计算，有光照时采用实心体模型。下面这些函数的参数都是定义物体大小的，可以改变。

```
void auxWireSphere(GLdouble radius)
void auxSolidSphere(GLdouble radius)
```

绘制球。

```
void auxWireCube(GLdouble size)
void auxSolidCube(GLdouble size)
```

绘制立方体。

```
void auxWireBox(GLdouble width,GLdouble height,GLdouble depth)
void auxSolidBox(GLdouble width,GLdouble height,GLdouble depth)
```

绘制长方体。

```
void auxWireTorus(GLdouble innerRadius,GLdouble outerRadius)
void auxSolidTorus(GLdouble innerRadius,GLdouble outerRadius)
```

绘制环形圆纹面。

```
void auxWireCylinder(GLdouble radius,GLdouble height)
void auxSolidCylinder(GLdouble radius,GLdouble height)
```

绘制圆柱。

```
void auxWireIcosahedron(GLdouble radius)
void auxSolidIcosahedron(GLdouble radius)
```

绘制二十面体。

```
void auxWireOctahedron(GLdouble radius)
void auxSolidOctahedron(GLdouble radius)
```

绘制八面体。

```
void auxWireTetrahedron(GLdouble radius)
void auxSolidTetrahedron(GLdouble radius)
```

绘制四面体。

```
void auxWireDodecahedron(GLdouble radius)
void auxSolidDodecahedron(GLdouble radius)
```
绘制十二面体。

```
void auxWireCone(GLdouble radius,GLdouble height)
void auxSolidCone(GLdouble radius,GLdouble height)
```

绘制圆锥。

```
void auxWireTeapot(GLdouble size)
void aucSolidTeapot(GLdouble size)
```

绘制茶壶。

以上物体均以各自中心为原点绘制，所有坐标都已单位化，可以缩放。

**5.背景过程管理。**

```
void auxIdleFunc(void *func)
```

定义空闲状态执行函数。参数func是一个指针，指向所要执行的函数功能。当它为零时，func执行无效。

**6.程序运行。**

```
void auxMainLoop(void(*displayFunc)(void))
```

定义场景绘制循环函数。displayFunc指针指向场景绘制函数。当窗口需要更新或场景发生改变时，程序便调用它所指的函数，重新绘制场景。

