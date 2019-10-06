---
layout: post
title: 初学OpenGL的程序（画球）
date: 2013/05/30 20:16:00
categories:
- 技术
tags:
- opengl
---

1\. 利用Glut库，编写一个OpenGL程序，实现以下功能：

- 仿照课本2.4.3的例子，绘制若干OpenGL基本体素（三角形、三角形带、四边形、四边形带）构成的球体，
- 可以控制改变球的数量和球的体积，来改变基本体素的数量以及顶点的数量。
- 可以通过改变glPolygonMode，切换是否填充所绘制的基本体素。
- 用函数glutGet(GLUT_ELAPSED_TIME)（returns the time in milliseconds since

```
  glutInit or the first invocation of the function）统计绘制时间
```

 源程序如下：

```
   #include<GL/glut.h>
   #include<math.h>
   #include<stdio.h>
   #include<stdlib.h>
   #include <iostream.h>
   #define pi 3.1415926
   #define GLfloat float
   #define GLdouble double
   #define GLint int
   double c=pi/180.0;
   double radius=150.0;
   int w=500,h=500;
   double angle=10.0;
   double a=10.0;
   void drawSphere(void)
   {
       glViewport (0.0, 0.0, (GLsizei) w, (GLsizei) h);
       float theta,phir,phi,thetar,phir20
       ;
       float x,y,z;
       for(phi=-90.0;phi<=90.0;phi+=a)
       {
           phir=cphi;
           phir20=c(phi+a);
           glPolygonMode(GL_FRONT,GL_LINE);
           glPolygonMode(GL_BACK, GL_LINE);
       glFrontFace(GL_CCW); //逆时针为正面
       //glBegin(GL_TRIANGLES);
       //glBegin(GL_LINE_LOOP);
       glBegin(GL_TRIANGLE_STRIP);
       //glBegin(GL_TRIANGLE_FAN);
       //glBegin(GL_QUADS);
       //glBegin(GL_QUAD_STRIP);
       for(theta=-180.0;theta<=180.0;theta+=a)
       {
           thetar=ctheta;
           x=radiussin(thetar)cos(phir);
           y=radiuscos(thetar)cos(phir);
           z=radiussin(phir);
           glVertex3d(x,y,z);
       //glVertex3f(x,y,z);
           x=radiussin(thetar)cos(phir20);
           y=radiuscos(thetar)cos(phir20);
           z=radius*sin(phir20);
           glVertex3d(x,y,z);
       //glVertex3f(x,y,z);
       }
       glEnd();
   }
   glPolygonMode(GL_FRONT,GL_LINE);
   glPolygonMode(GL_BACK, GL_LINE);
   glFrontFace(GL_CCW);
       //glBegin(GL_QUADS);
       //glBegin(GL_QUAD_STRIP);
   glBegin(GL_TRIANGLE_STRIP);
       //glBegin(GL_TRIANGLES);
       //glBegin(GL_TRIANGLE_FAN);
       //glBegin(GL_LINE_LOOP);
       //glBegin(GL_LINES);
       //glVertex3f(0.0,0.0,radius);
   glVertex3d(0.0,0.0,radius);
   double c80=c90.0;
   z=radiussin(c80);
   for(theta=-180.0;theta<=180.0;theta+=a)
   {
       thetar=ctheta;
       x=radiussin(thetar)cos(c80);
       y=radiuscos(thetar)cos(c80);
       glVertex3d(x,y,z);
       //glVertex3f(x,y,z);
   }
   glEnd();
   glPolygonMode(GL_FRONT,GL_LINE);
   glPolygonMode(GL_BACK, GL_LINE);
   glFrontFace(GL_CCW);
       //glBegin(GL_QUADS);
       //glBegin(GL_QUAD_STRIP);
   glBegin(GL_TRIANGLE_STRIP);
       //glBegin(GL_TRIANGLES);
       //glBegin(GL_TRIANGLE_FAN);
       //glBegin(GL_LINE_LOOP);
       //glBegin(GL_LINES);
   glVertex3d(0.0,0.0,-radius);
       //Vertex3f(0.0,0.0,-radius);
   z=-radiussin(c80);
   for(theta=-180.0;theta<=180.0;theta+=a)
   {
       thetar=ctheta;
       x=radiussin(thetar)cos(c80);
       y=radiuscos(thetar)*cos(c80);
       glVertex3d(x,y,z);
       //lVertex3f(x,y,z);
   }
   glEnd();
   glFlush();
   glutSwapBuffers();
   }
   void reshape(GLsizei ww, GLsizei hh)
   {
       glViewport (0, 0, (GLsizei) w, (GLsizei) h);
       glMatrixMode(GL_PROJECTION);
       glLoadIdentity();
       glOrtho(0.0, (GLdouble)w,  0.0,(GLdouble)h, -w, h);
       glMatrixMode(GL_MODELVIEW);
       glLoadIdentity();
       glViewport (0, 0, (GLsizei) w, (GLsizei) h);
       glClear(GL_COLOR_BUFFER_BIT);
       glFlush();
       w=ww;
       h=hh;
   }
   void init(void)
   {
       glViewport(0,0,w,h);
       glMatrixMode(GL_PROJECTION);
       glLoadIdentity();
       //glOrtho(0.0, (GLdouble)w,  0.0,(GLdouble)h, -500, 500);
       glClearColor(0.0,0.0,0.0,0.0);
       glColor3f(0.0,1.0,0.0);
       glLoadIdentity();
       glMatrixMode(GL_MODELVIEW);
       glLoadIdentity();
       glClear(GL_COLOR_BUFFER_BIT);
       //glFlush();
   }
   void mouse(int btn,int state, int x,int y)
   {
       //if(btn==GLUT_RIGHT_BUTTON &&state==GLUT_DOWN) exit(0);
       if(btn==GLUT_LEFT_BUTTON &&state==GLUT_DOWN)
       {
           radius=radius+15.0;
           drawSphere();
           printf("time is :%d\n",glutGet(GLUT_ELAPSED_TIME));
       }
   }
   static void idle(void)
   {
       glutPostRedisplay();
   }
   void display(void)
   {
       glMatrixMode(GL_MODELVIEW);
       glLoadIdentity();
       glClear (GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
       glTranslated(250,250,0);
       glRotated(30,1,0,0);
       glRotated(60,0,1,0);
       glRotated(90,0,0,1);
       angle = 12500.0/glutGet(GLUT_ELAPSED_TIME);
       glRotated(angle,1,0,0);
       glutPostRedisplay();
       drawSphere();
       printf("time is :%d\n",glutGet(GLUT_ELAPSED_TIME));
   }
   void submenu(int id)
   {
       switch(id)
       {
           case 1:
           exit(0);
           break;
           case 2:
           radius=radius+10.0;
           break;
           case 3:
           if(radius>1.0) radius=radius/2;
           break;
       }
   }
   void main(int argc,char** argv)
   {
       glutInit(&argc,argv);
       glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB);
       glutInitWindowSize(w,h);
       glutInitWindowPosition(0,0);
       glutCreateWindow("Swkkkk");
       glutCreateMenu(submenu);
       glutAddMenuEntry("quit",1);
       glutAddMenuEntry("Increase radius",2);
       glutAddMenuEntry("Decrease radius",3);
       glutAttachMenu(GLUT_RIGHT_BUTTON);
       init();
       glutMouseFunc(mouse);
       glutReshapeFunc(reshape);
       glutDisplayFunc(display);
       glEnable(GL_DEPTH_TEST);
       //glutIdleFunc(idle);
       glutMainLoop();
   }
```

运行结果如下图：

![](http://pics.naaln.com/blog/2019-01-14-085004.jpg-basicBlog)

望多多指教！！！！！
