---
layout: post
title: OpenGL中如何绘制Bezier曲线和NURBS曲线
date: 2013/04/03 01:37:00
categories:
  - 技术
tags:
  - Bezier
  - NURBS
  - OpenGL
  - Curve
  - Rendering
description: "OpenGL中Bezier曲线的映射、求值以及NURBS曲线的节点、控制点和属性设置，包含完整C语言示例代码，实现曲线绘制。"
---

**一、Bezier 曲线**

主要注意两个函数：`glMap1` 和 `glEvalCoord1`。

1.`voidglMap1{fd}(GLenumtarget,TYPEu1,TYPEu2,GLintstride,GLintorder,constTYPE*points)`;

功能：定义求值器。　

参数：target：指出了控制顶点的意义以及在 points 参数中需要提供多少值。

points：可以指向控制点集、RGBA 颜色值或是纹理坐标串等。

u1、u2：限定了变量 U 的取值范围，通常是从 0 变化到 1。

stride：表示跨度（在每块存储区内浮点数或双精度数的个数，即两个控制点间的偏移量）。

order：阶数，等于次数加 1，与控制点数相等。

2.`voidglEvalCoord1{fd}[v](TYPEu)`。

功能：该函数将产生曲线坐标值并将其绘制。

参数：u：为定义域内的任意值，每调用一次将只产生一个坐标，此坐标值也是任意的。

但目前较多采用的是定义均匀间隔曲线坐标值，依次调用 glMapGrid1*() 和 glEvalMesh1() 可以获得等间隔值。这两个函数分别用来定义一个一维网格和计算相应的坐标值。

另外，曲线定义后必须再 glEnable() 函数显式启动后才能起作用，其参数与 target 保持一致。在使用完毕后通过 glDisable() 函数将其关闭。

```
   #include <GL/glut.h>
   #include <stdlib.h>
   GLfloat ctrlpoints[9][3] = {{0,-0.2,0},{-1.2,-0.5,0},{-1.6,-1,0},{-1.4,-1.5,0},{-1,-2.2,0},{-0.5,-2.7,0},{-0.35,-3.2,0},{-0.6,-3.7,0},{-1.6,-4.2,0}};//控制点

   void init(void)
   {
      glClearColor(0.0, 0.0, 0.0, 0.0);
      glShadeModel(GL_FLAT);
      glMap1f(GL_MAP1_VERTEX_3, 0.0, 1.0, 3, 9, &ctrlpoints[0][0]);
      glEnable(GL_MAP1_VERTEX_3);
   }

   void display(void)
   {
      int i;
      glClear(GL_COLOR_BUFFER_BIT);
      glColor3f(1.0, 1.0, 1.0);
      glBegin(GL_POINTS);//(GL_LINE_STRIP);
         for (i = 0; i <= 30; i++)
            glEvalCoord1f((GLfloat) i/30.0);
      glEnd();
      /* The following code displays the control points as dots. */
      glPointSize(5.0);
      glColor3f(1.0, 1.0, 0.0);
      glBegin(GL_POINTS);
         for (i = 0; i < 9; i++)
            glVertex3fv(&ctrlpoints[i][0]);
      glEnd();
      glFlush();
   }

   void reshape(int w, int h)
   {
      glViewport(0, 0, (GLsizei) w, (GLsizei) h);
      glMatrixMode(GL_PROJECTION);
      glLoadIdentity();
      if (w <= h)
         glOrtho(-5.0, 5.0, -5.0*(GLfloat)h/(GLfloat)w,
                  5.0*(GLfloat)h/(GLfloat)w, -5.0, 5.0);
      else
         glOrtho(-5.0*(GLfloat)w/(GLfloat)h,
                  5.0*(GLfloat)w/(GLfloat)h, -5.0, 5.0, -5.0, 5.0);
      glMatrixMode(GL_MODELVIEW);
      glLoadIdentity();
   }

   void keyboard(unsigned char key, int x, int y)
   {
      switch (key) {
         case 27:
            exit(0);
            break;
      }
   }

   int main(int argc, char** argv)
   {
      glutInit(&argc, argv);
      glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB);
      glutInitWindowSize (500, 500);
      glutInitWindowPosition (100, 100);
      glutCreateWindow (argv[0]);
      init ();
      glutDisplayFunc(display);
      glutReshapeFunc(reshape);
      glutKeyboardFunc (keyboard);
      glutMainLoop();
      return 0;
   }
```

![][1]

**二、NURBS 曲线**

主要注意函数：

1.`voidgluNurbsCurve(GLUnurbsObj*nobj，GLintnknots，GLfloat*knot，Glintstride，GLfloat*ctlarray，GLintorder，GLenumtype)`

功能：定义曲线形状。

参数：nobj：指向 NURBS 对象的指针。

nknots：节点数，节点数=控制点数 + 阶数。

knot：nknots 数组非递减节点值。

stride：跨度，相邻控制点的偏移量。

Ctlarry：指向 NURBS 的控制点数组的指针。

order：NURBS 曲线的阶数，阶数=次数 +1。

type：曲线、面类型。

2.`voidgluNurbsProperty(GLUnurbsObj*nobj,GLenumproperty,GLfloatvalue)`

功能：设置 NURBS 属性。

参数：nobj：指向 NURBS 对象的指针。

property：需设置的属性。

value：设置指定属性的值。

3.`gluBeginCurve`、`gluEndCurve` 限定 NURBS 曲面。返回值均为 void，参数均为 GLUnurbsObj*nobj，为指向 NURBS 对象的指针。

```
   #include <windows.h>
   #include <GL/glut.h>
   GLUnurbsObj *theNurb;
   GLfloat ctrlpoints[9][3] = {{0,-0.2,0},{-1.2,-0.5,0},{-1.6,-1,0},{-1.4,-1.5,0},{-1,-2.2,0},{-0.5,-2.7,0},{-0.35,-3.2,0},{-0.6,-3.7,0},{-1.6,-4.2,0}};//控制点
   GLfloat color[9][3]={{1.0,0.0,0.0},{1.0,1.0,0.0},{0.0,1.0,0.0},{-1.0,1.0,0.0},{-1.0,0.0,0.0},{-1.0,-1.0,0.0},{0.0,-1.0,0.0},{1.0,-1.0,0.0},{1.0,-1.0,0.0}};

   void myInit(void)
   {
       glClearColor(1.0,1.0,1.0,0.0);//设置背景色
       theNurb = gluNewNurbsRenderer();//创建NURBS对象theNurb
       gluNurbsProperty(theNurb,GLU_SAMPLING_TOLERANCE,10);
   }

   /*绘制曲线*/
   void myDisplay(void)
   {
       int i;
       glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
       glColor3f(0.0,0.0,0.0);
       glLineWidth(3.0);
       /*绘制曲线*/
       gluBeginCurve(theNurb);
       gluNurbsCurve(theNurb,13,knots,3,&ctrlpoints[0][0],4,GL_MAP1_VERTEX_3);
       gluNurbsCurve(theNurb,13,knots,3,&color[0][0],4,GL_MAP1_COLOR_4);
       gluEndCurve(theNurb);
       /*绘制点*/
       glColor3f(1.0,0.0,0.0);
       glPointSize(5.0);
       glBegin(GL_POINTS);
       for(i = 0;i < 9;i++)
           glVertex2fv(&ctrlpoints[i][0]);
       glEnd();
       glutSwapBuffers();
   }

   void myReshape(GLsizei w,GLsizei h)
   {
       glViewport(0,0,w,h);
       glMatrixMode(GL_PROJECTION);
       glLoadIdentity();
       if(w <=h)
           glOrtho(-10.0,10.0,-10.0*(GLfloat)h/(GLfloat)w,10.0*(GLfloat)h/GLfloat)w,-10.0,10.0);
       else
           glOrtho(-10.0*(GLfloat)w/(GLfloat)h,10.0*(GLfloat)w/(GLfloat)h,-10.0,10.0,-10.0,10.0);
       glMatrixMode(GL_MODELVIEW);
       glLoadIdentity();
       glTranslatef(0.0,0.0,-9.0);
   }

   int main(int argc,char ** argv)
   {
       glutInit(&argc,argv);
       glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB|GLUT_DEPTH);
       glutInitWindowSize(600,400);
       glutInitWindowPosition(200,200);
       glutCreateWindow("NURBS curve");

       /*绘制与显示*/
       myInit();
       glutReshapeFunc(myReshape);
       glutDisplayFunc(myDisplay);
       glutMainLoop();
       return(0);
   }
```

![][2]

[1]: http://p.blog.csdn.net/images/p_blog_csdn_net/wuzoujing/EntryImages/20091129/11111.jpg

[2]: http://p.blog.csdn.net/images/p_blog_csdn_net/wuzoujing/EntryImages/20091129/2222.jpg
