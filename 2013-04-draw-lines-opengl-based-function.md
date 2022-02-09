---
layout: post
title: OpenGL基础画线函数
date: 2013/04/02 20:32:00
categories:
- 技术
tags:
- OpenGL
---

刚刚开始学opengl，mark一下

```c++
#include<GL/glut.h >

void init(void)
{
  glClearColor(1.0, 1.0, 1.0, 0.0); //清屏颜色  
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0.0, 200.0, 0.0, 150); //裁剪窗大小：世界
}

void linesegment(void) {
  glClear(GL_COLOR_BUFFER_BIT); //清颜色缓存   
  glColor3f(1.0, 0.0, 0.0); //绘图颜色设定   
  glBegin(GL_LINES); //图元：线段 
  glVertex2i(180, 15);
  glVertex2i(10, 145);
  glEnd();
  glFlush();
}

int main(int argc, char ** argv) //主程序
{
  glutInit(&argc, argv); //初始化glut 
  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB); //显示模式  
  glutInitWindowPosition(50, 100); //视口初始位置
  glutInitWindowSize(400, 300); // 视口大小   
  glutCreateWindow(" An Example OpenGL Program"); //标题    
  init(); //执行初始化程序     
  glutDisplayFunc(linesegment); //绘图程序 
  glutMainLoop(); //视窗系统被激活
  return 0; /* ANSI C requires main to return int. */
}
```