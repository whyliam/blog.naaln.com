---
layout: post
title: OpenGL基础画线函数
date: 2013/04/02 20:32:00
categories:
- 技术
tags:
  - 技术
  - OpenGL
  - 图形编程
  - C++
description: OpenGL图形编程入门教程，详细演示了如何使用OpenGL库绘制基础线条。文章提供了完整的C++代码示例，包括初始化设置、画线函数实现、主程序结构等核心部分。通过GLUT工具包实现窗口管理，使用GL_LINES图元绘制红色线段，展示了OpenGL的基本绘图流程。
---

刚刚开始学 opengl，mark 一下

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
