---
layout: post
title: 为什么调用glPushMatrix()和glPopMatrix()
date: 2013/05/17 09:43:00
categories:
- 技术
tags:
- OpenGL
- 矩阵操作
- 图形变换
- 坐标系
- 光照
- glPushMatrix
- glPopMatrix
- 栈
- 3D图形
- 图形编程
description: OpenGL矩阵操作核心原理深度解析，说明glPushMatrix()和glPopMatrix()的重要作用。文章首先阐述OpenGL变换的本质：所有坐标变换（平移、旋转、缩放）都是通过操作矩阵实现，矩阵相乘会叠加，当前操作矩阵会被改变。在原点绘制图形后进行变换，再用同样的坐标绘制会发现图形不在预期位置，因为当前矩阵已被修改。通过红色和绿色正方形的对比实验，形象说明了压栈弹栈的作用：不使用Push/Pop时绿色正方形会偏移0.2单位，使用Push/Pop后能正确覆盖红色正方形。文章进一步扩展到光照应用场景：移动光源位置时先pushMatrix，进行移动旋转操作后指定光源位置，再popMatrix即可。强调这两个函数通过栈机制保存和恢复矩阵状态，确保变换的独立性和正确性。
---

今天忽然感悟到为什么在进行变换之前要用 glPushMatrix();

这个函数，而在变换完毕后有用 glPopMatrix() 这两个函数了，赶紧记下来：

我们在变换坐标的时候，使用的是 glTranslatef(),glRotaef() 等函数来操作，操作的是什么呢？操作的是当前矩阵，我们也知道，这些坐标变换（翻转，旋转也好）都是通过操作矩阵来实现的，而矩阵相乘是会叠加的，当你用完一个变换函数后，当前操作的矩阵就被改变了，当你还停留在变换以前的思维，我在这个地方绘制恰好是我想要的时候，你会发现再绘制出来的不是在你想要的位置，因为你在操作变换的时候，当前矩阵被改变了。

比如你在默认情况下在原点画了一个球，然后又进行了一个变换，比如用 glTranslatef（ 0.0， 0.0， 1.0 ）；沿 z 轴移动一定距离又画了一个球，然后你想再在原点画一个大一点的球覆盖原来的那个，当你绘制的时候就会发现，你现在绘制的球已不在你想像的地方了。

我们来做个实验： 代码如下：

```
   void display()
   {
   glClear( GL_COLOR_BUFFER_BIT );
   glShadeModel( GL_SMOOTH );
   //现在原点绘制一个红色正方形
   glColor3f( 1.0, 0.0, 0.0 );
   glRectf( -0.05, -0.05, 0.05, 0.05 );
   //glPushMatrix();
   //变换--沿x轴移动
       glTranslatef( 0.2, 0.0, 0.0 );
       //glPopMatrix();
   //再绘制一个正方形
   glColor3f( 0.0, 1.0, 0.0 );
   glRectf( -0.05, -0.05, 0.05, 0.05 );//这时，当我们还想在同样位置绘制时，却发现已经偏移
   glFlush();
   }
```

当我们把 glPushMatrxi() 和 glPopMatrix()**注释掉**

以后我们发现，当我们再想在同样的位置绘制一个正方形的时候，就会发现已经按我们的 glTransfef（）所指定的沿 x 轴偏移了 0.2 个单位。而当我们**不把**两句函数调用注释掉时，运行发现，绿色的正方形覆盖了原来的红色的正方形。

所以，这两个函数的压栈弹栈是有用地~~~~~~~~~~

这两个函数的具体的执行方式就不扯了，网上 n 多。

知之为知之，不知百度之

**续文：**

顿悟这点以后，晚上又突然想明白了另一个大问题：移动光源的位置。

在顿悟以前，总觉得光源该怎么移动呢？那不是十分十分麻烦么，而且不知道怎么办，现在明白了这个道理以后，光照的移动就简单了。

移动方式：

先 pushMatrix() 一下，然后在进行移动操作，然后旋转操作，然后指定光源的位置，然后 PopMatrix() 一下，就完成了。

测试代码：

```
   #include <gl/glut.h>
   static int spin = 0;

   void init()
   {
   glShadeModel( GL_SMOOTH );
   glEnable( GL_LIGHTING );
   glEnable( GL_LIGHT0 );
   glEnable( GL_DEPTH_TEST );

   }

   void display()
   {
   glClear( GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT );

   GLfloat position[] = { 0.0, 0.0, 1.5, 1.0 };

   glPushMatrix();
   glTranslatef( 0.0, 0.0, -5.0 );

   glPushMatrix();
   glRotated( (GLdouble)spin, 1.0, 0.0, 0.0 );
   glLightfv( GL_LIGHT0, GL_POSITION, position );
   glTranslated( 0.0, 0.0, 1.5 );
   glDisable( GL_LIGHTING );
   glColor3f( 0.0, 1.0, 0.0 );
   glutWireCube( 0.1 );//绿色的下框，代表光源位置
   glEnable( GL_LIGHTING );
   glPopMatrix();

   glutSolidSphere( 0.5, 40, 40 );//被光照的物体
   glPopMatrix();
   glFlush();
   }

   void reshape( int w, int h )
   {
   glViewport( 0, 0, (GLsizei)w, (GLsizei)h );
   glMatrixMode( GL_PROJECTION );
   glLoadIdentity();
   gluPerspective( 40.0, (GLfloat)w/(GLfloat)h, 1.0, 20.0 );
   glMatrixMode( GL_MODELVIEW );
   glLoadIdentity();
   }

   void mouse( int button, int state, int x, int y )
   {
   switch ( button )
   {
   case GLUT_LEFT_BUTTON:
   if ( state == GLUT_DOWN )
   {
   spin = ( spin + 30 ) % 360;
   glutPostRedisplay();
   }
   break;
   default:
   break;
   }
   }

   int main( int argc, char ** argv )
   {
   glutInit( &argc, argv );
   glutInitDisplayMode( GLUT_RGB | GLUT_SINGLE | GLUT_DEPTH );
   glutInitWindowPosition( 100, 100 );
   glutInitWindowSize( 500, 500 );
   glutCreateWindow( argv[0] );
   init();
   glutDisplayFunc( display );
   glutReshapeFunc( reshape );
   glutMouseFunc( mouse );
   glutMainLoop();
   return 0;
   }
```
