---
layout: post
title: OPENGL中GLU和GLUT工具箱收藏
date: 2013/05/18 00:31:00
categories:
- 技术
tags:
- OpenGL
---

GLUT 工具箱提供几种图形 3 维图形的函数：

```
   void glutWireSphere(GLdouble radius, GLint slices, GLint stacks);  丝状球
   void glutSolidSphere(GLdouble radius, GLint slices, GLint stacks); 实心球
   void glutWireCube(GLdouble size); 丝状立方体
   void glutSolidCube(GLdouble size); 实心立方体
   void glutWireTorus(GLdouble innerRadius, GLdouble outerRadius,
   GLint nsides, GLint rings); 丝状花环
   void glutSolidTorus(GLdouble innerRadius, GLdouble outerRadius,
   GLint nsides, GLint rings); 实心花环
   void glutWireIcosahedron(void); 丝状20面体
   void glutSolidIcosahedron(void); 实心20面体
   void glutWireOctahedron(void); 丝状8面体
   void glutSolidOctahedron(void); 实心8面体
   void glutWireTetrahedron(void); 丝状4面体
   void glutSolidTetrahedron(void); 实心4面体
   void glutWireDodecahedron(GLdouble radius); 丝状12面体
   void glutSolidDodecahedron(GLdouble radius); 实心12面体
   void glutWireCone(GLdouble radius, GLdouble height, GLint slices,
   GLint stacks); 丝状圆锥体
   void glutSolidCone(GLdouble radius, GLdouble height, GLint slices,
   GLint stacks); 实心圆锥体
   void glutWireTeapot(GLdouble size); 丝状茶壶
   void glutSolidTeapot(GLdouble size); 实心茶壶
```

如果需要用到长方体那就用 glScalef(x,* y,* z); 做自己想要的长方体，这儿的 x,* y,* z 分别对应 x,* y,* z 轴的缩放比例

不过居然没有看到圆柱体的函数。在网上搜索不少人说到的都是用一个 aux 开头的辅助函数库。但是这有个很大的缺陷，已经被 GLUT 库代替了

举个创建 2 次对象的简单例子:

//创建一个半径为 5，在经线和纬线方向细分数为 10 的球体

```
   GLUquadricObj *pobj;
   pobj=gluNewQuadric();
   gluQuadricDrawStyle(pobj,* GLU_LINE);//确定几何体的绘制模式（GLU_LINE)
   gluSphere(pobj,* 5,* 10,* 10);创建圆环盘，innerRadius,* outerRadius分别指定了内径和外径创建圆柱体创建球体
```

下面是几个用于创建简单的 2 次曲面的 GLU 函数：

```
   GLUquadricObj* gluNewQuadric();
   //创建一个新的2次曲面对象，并返回一个指向该对象的指针
   void gluDeleteQuadric(GLUquadricObj*);
   //删除又2次对象指针指定的2次曲面
   void gluSphere(GLUquadricObj* pobj,* GLdouble radius,* GLint silces,* GLint stacks);
   void gluCylinder(GLUquadricObj* pobj,* GLdouble baseRadius,* GLdouble topRadius,* GLint slices,* GLint stacks);
   void gluDisk(GLUquadricObj* pobj,* GLdouble innerRadius,* GLdouble outerRadius,* GLint slices,* GLint stacks);
```

下面几个是创建 GLUT 对象的函数，* 是对 GLU 的补充

```
   void glutWireSphere(GLdouble radius,* GLint slices,* GLint stacks);
   //创建线框球体
   void glutSolidSphere(GLdouble radius,* GLint slices,* GLint stacks);
   //创建实心球体
   void glutWireCone(GLdouble baseRadius,* GLdouble height,* GLint slices,* GLint stacks);
   void glutSolidCone(GLdouble baseRadius,* GLdouble height,* GLint slices,* GLint stacks);
   void glutWireTorus(GLdouble innerRadius,* GLdouble outerRadius,* GLint slices,* GLint stacks);
   void glutSolidTorus(GLdouble innerRadius,* GLdouble outerRadius,* GLint slices,* GLint stacks);
```

##仔细搜索了一下，找到了比较详细的介绍

OpenGL 函数库相关的 API 有核心库 (gl)、实用库 (glu)、辅助库 (aux)、实用工具库 (glut)、窗口库 (glx、agl、wgl) 和扩展函数库等。从图 1 可以看出，gl 是核心，glu 是对 gl 的部分封装。glx、agl、wgl 是针对不同窗口系统的函数。glut 是为跨平台的 OpenGL 程序的工具包，比 aux 功能强大。扩展函数库是硬件厂商为实现硬件更新利用 OpenGL 的扩展机制开发的函数。下面逐一对这些库进行详细介绍。

**1．OpenGL 核心库**

核心库包含有 115 个函数，函数名的前缀为 gl。

这部分函数用于常规的、核心的图形处理。此函数由 gl.dll 来负责解释执行。由于许多函数可以接收不同数以下几类。据类型的参数，因此派生出来的函数原形多达 300 多个。核心库中的函数主要可以分为以下几类函数。

绘制基本几何图元的函数。如绘制图元的函数 glBegain()、glEnd()、glNormal*()、glVertex*()。

矩阵操作、几何变换和投影变换的函数。如矩阵入栈函数 glPushMatrix()、矩阵出栈 函数 glPopMatrix()、装载矩阵函数 glLoadMatrix()、矩阵相乘函数 glMultMatrix()，当前矩阵函数 glMatrixMode() 和矩阵标准化函数 glLoadIdentity()，几何变换函数 glTranslate*()、glRotate*() 和 glScale*()，投影变换函数 glOrtho()、glFrustum() 和视口变换函数 glViewport() 等等。

颜色、光照和材质的函数。如设置颜色模式函数 glColor*()、glIndex*()，设置光照效果的函数 glLight*()、glLightModel*() 和设置材质效果函数 glMaterial() 等等。

显示列表函数、主要有创建、结束、生成、删除和调用显示列表的函数 glNewList()、glEndList()、glGenLists()、glCallList() 和 glDeleteLists()。

纹理映射函数，主要有一维纹理函数 glTexImage1D()、二维纹理函数 glTexImage2D()、设置纹理参数、纹理环境和纹理坐标的函数 glTexParameter*()、glTexEnv*() 和 glTetCoord*() 等。

特殊效果函数。融合函数 glBlendFunc()、反走样函数 glHint() 和雾化效果 glFog*()。

光栅化、象素操作函数。如象素位置 glRasterPos*()、线型宽度 glLineWidth()、多边形绘制模式 glPolygonMode()，读取象素 glReadPixel()、复制象素 glCopyPixel() 等。

选择与反馈函数。主要有渲染模式 glRenderMode()、选择缓冲区 glSelectBuffer() 和反馈缓冲区 glFeedbackBuffer() 等。

曲线与曲面的绘制函数。生成曲线或曲面的函数 glMap*()、glMapGrid*()，求值器的函数 glEvalCoord*() glEvalMesh*()。

状态设置与查询函数。主要有 glGet*()、glEnable()、glGetError() 等。

**2． OpenGL 实用库 The OpenGL Utility Library (GLU)**

包含有 43 个函数，函数名的前缀为 glu。

OpenGL 提供了强大的但是为数不多的绘图命令，所有较复杂的绘图都必须从点。线、面开始。Glu 为了减轻繁重的编程工作，封装了 OpenGL 函数，Glu 函数通过调用核心库的函数，为开发者提供相对简单的用法，实现一些较为复杂的操作。此函数由 glu.dll 来负责解释执行。OpenGL 中的核心库和实用库可以在所有的 OpenGL 平台上运行。主要包括了以下几种。

辅助纹理贴图函数，有 gluScaleImage()、gluBuild1Dmipmaps()、gluBuild2Dmipmaps()。

坐标转换和投影变换函数，定义投影方式函数 gluPerspective()、gluOrtho2D()、gluLookAt()，拾取投影视景体函数 gluPickMatrix()，投影矩阵计算 gluProject() 和 gluUnProject() 等等。

多边形镶嵌工具，有 gluNewTess()、gluDeleteTess()、gluTessCallback()、gluBeginPolygon() gluTessVertex()、gluNextContour()、gluEndPolygon() 等等。

二次曲面绘制工具，主要有绘制球面、锥面、柱面、圆环面 gluNewQuadric()、gluSphere()、gluCylinder()、gluDisk()、gluPartialDisk()、gluDeleteQuadric() 等等。

非均匀有理 B 样条绘制工具，主要用来定义和绘制 Nurbs 曲线和曲面，包括 gluNewNurbsRenderer()、gluNurbsCurve()、gluBeginSurface()、gluEndSurface()、gluBeginCurve()、gluNurbsProperty() 等函数。

错误反馈工具，获取出错信息的字符串 gluErrorString().

**3． OpenGL 辅助库**

包含有 31 个函数，函数名前缀为 aux。

这部分函数提供窗口管理、输入输出处理以及绘制一些简单三维物体。此函数由 glaux.dll 来负责解释执行。创建 aux 库是为了学习和编写 OpenGL 程序，它更像是一个用于测试创意的预备基础接管。Aux 库在 windows 实现有很多错误，因此很容易导致频繁的崩溃。在跨平台的编程实例和演示中，aux 很大程度上已经被 glut 库取代。OpenGL 中的辅助库不能在所有的 OpenGL 平台上运行。

辅助库函数主要包括以下几类。

窗口初始化和退出函数，auxInitDisplayMode() 和 auxInitPosition()。

窗口处理和时间输入函数，auxReshapeFunc()、auxKeyFunc() 和 auxMouseFunc()。

颜色索引装入函数，auxSetOneColor()。

三维物体绘制函数。包括了两种形式网状体和实心体，如绘制立方体 auxWireCube() 和 auxSolidCube()。这里以网状体为例，长方体 auxWireBox()、环形圆纹面 auxWireTorus()、圆柱 auxWireCylinder()、二十面体 auxWireIcosahedron()、八面体 auxWireOctahedron()、四面体 auxWireTetrahedron()、十二面体 auxWireDodecahedron()、圆锥体 auxWireCone() 和茶壶 auxWireTeapot()。

背景过程管理函数 auxIdleFunc()。

程序运行函数 auxMainLoop()。

**4． OpenGL 工具库 OpenGL Utility Toolkit**

包含大约 30 多个函数，函数名前缀为 glut。

glut 是不依赖于窗口平台的 OpenGL 工具包，由 Mark KLilgrad 在 SGI 编写（现在在 Nvidia），目的是隐藏不同窗口平台 API 的复杂度。函数以 glut 开头，它们作为 aux 库功能更强的替代品，提供更为复杂的绘制功能，此函数由 glut.dll 来负责解释执行。由于 glut 中的窗口管理函数是不依赖于运行环境的，因此 OpenGL 中的工具库可以在 X-Window,* Windows NT,* OS/2 等系统下运行，特别适合于开发不需要复杂界面的 OpenGL 示例程序。对于有经验的程序员来说，一般先用 glut 理顺 3D 图形代码，然后再集成为完整的应用程序。

这部分函数主要包括

窗口操作函数，窗口初始化、窗口大小、窗口位置等函数 glutInit() glutInitDisplayMode() glutInitWindowSize() glutInitWindowPosition() 等。

回调函数。响应刷新消息、键盘消息、鼠标消息、定时器函数等，GlutDisplayFunc() glutPostRedisplay() glutReshapeFunc() glutTimerFunc() glutKeyboardFunc() glutMouseFunc()。

创建复杂的三维物体。这些和 aux 库的函数功能相同。创建网状体和实心体。如 glutSolidSphere()、glutWireSphere() 等。在此不再叙述。

菜单函数。创建添加菜单的函数 GlutCreateMenu()、glutSetMenu()、glutAddMenuEntry()、glutAddSubMenu() 和 glutAttachMenu()。

程序运行函数，glutMainLoop()。

**对于 windows 或者 X-windows 的专用库就不说了，接触 JAVA 太多喜欢跨平台的东西**
