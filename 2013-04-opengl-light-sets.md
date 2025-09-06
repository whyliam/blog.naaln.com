---
layout: post
title: OpenGL中光照的设置
date: 2013/04/03 01:57:00
categories:
- 技术
tags:
- OpenGL
---

1.创建、定位和启用光源

（1）定义光源的颜色和位置

	 GLfloat ambient[] = { 0.0, 0.0, 0.0, 1.0 };

	 GLfloat diffuse[] = { 1.0, 1.0, 1.0, 1.0 };

	 GLfloat position[] = { 0.0, 3.0, 2.0, 0.0 };

（2）创建光源

    glLightfv(GL_LIGHT1, GL_AMBIENT, ambient);  // Setup The Ambient Light设置环境光

    glLightfv(GL_LIGHT1, GL_DIFFUSE, diffuse);  // Setup The Diffuse Light设置漫射光

    glLightfv(GL_LIGHT1, GL_POSITION,position);  // Position The Light设置光源位置

（3）启动光照和光源

    glEnable(GL_LIGHTING);     // 启动光照

    glEnable(GL_LIGHT1);     // Enable Light One启用一号光源

2.选择光照模型

	 GLfloat lmodel_ambient[] = { 0.4, 0.4, 0.4, 1.0 };

	 GLfloat local_view[] = { 0.0 };

	 glLightModelfv(GL_LIGHT_MODEL_AMBIENT, lmodel_ambient);

	 glLightModelfv(GL_LIGHT_MODEL_LOCAL_VIEWER, local_view);

3.定义材质

（1）材料属性

	 GLfloat no_mat[] = { 0.0, 0.0, 0.0, 1.0 };

	 GLfloat mat_ambient[] = { 0.7, 0.7, 0.7, 1.0 };

	 GLfloat mat_ambient_color[] = { 0.8, 0.8, 0.2, 1.0 };

	 GLfloat mat_diffuse[] = { 0.1, 0.5, 0.8, 1.0 };

	 GLfloat mat_specular[] = { 1.0, 1.0, 1.0, 1.0 };

	 GLfloat no_shininess[] = { 0.0 };

	 GLfloat low_shininess[] = { 5.0 };

	 GLfloat high_shininess[] = { 100.0 };

	 GLfloat mat_emission[] = {0.3, 0.2, 0.2, 0.0};

（2）指定材料属性

	 glMaterialfv(GL_FRONT, GL_AMBIENT, no_mat);

	 glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

	 glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

	 glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

	 glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

4.绘制物体

	 glutSolidSphere(1.0, 16, 16);

引用 OpenGL 编程指南中的例子：

	 void init(void)

	 {

      GLfloat ambient[] = { 0.0, 0.0, 0.0, 1.0 };

      GLfloat diffuse[] = { 1.0, 1.0, 1.0, 1.0 };

      GLfloat position[] = { 0.0, 3.0, 2.0, 0.0 };

      GLfloat lmodel_ambient[] = { 0.4, 0.4, 0.4, 1.0 };

      GLfloat local_view[] = { 0.0 };

      glClearColor(0.0, 0.1, 0.1, 0.0);

      glEnable(GL_DEPTH_TEST);

      glShadeModel(GL_SMOOTH);

      glLightfv(GL_LIGHT0, GL_AMBIENT, ambient);

      glLightfv(GL_LIGHT0, GL_DIFFUSE, diffuse);

      glLightfv(GL_LIGHT0, GL_POSITION, position);

      glLightModelfv(GL_LIGHT_MODEL_AMBIENT, lmodel_ambient);

      glLightModelfv(GL_LIGHT_MODEL_LOCAL_VIEWER, local_view);

      glEnable(GL_LIGHTING);

      glEnable(GL_LIGHT0);

	 }

	 void display(void)

	 {

      GLfloat no_mat[] = { 0.0, 0.0, 0.0, 1.0 };

      GLfloat mat_ambient[] = { 0.7, 0.7, 0.7, 1.0 };

      GLfloat mat_ambient_color[] = { 0.8, 0.8, 0.2, 1.0 };

      GLfloat mat_diffuse[] = { 0.1, 0.5, 0.8, 1.0 };

      GLfloat mat_specular[] = { 1.0, 1.0, 1.0, 1.0 };

      GLfloat no_shininess[] = { 0.0 };

      GLfloat low_shininess[] = { 5.0 };

      GLfloat high_shininess[] = { 100.0 };

      GLfloat mat_emission[] = {0.3, 0.2, 0.2, 0.0};

      glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);

	 /* draw sphere in first row, first column

    *  diffuse reflection only; no ambient or specular

    */

      glPushMatrix();

      glTranslatef (-3.75, 3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, no_mat);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

      glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in first row, second column

    *  diffuse and specular reflection; low shininess; no ambient

    */

      glPushMatrix();

      glTranslatef (-1.25, 3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, no_mat);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

      glMaterialfv(GL_FRONT, GL_SHININESS, low_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in first row, third column

    *  diffuse and specular reflection; high shininess; no ambient

    */

      glPushMatrix();

      glTranslatef (1.25, 3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, no_mat);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

      glMaterialfv(GL_FRONT, GL_SHININESS, high_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in first row, fourth column

    *  diffuse reflection; emission; no ambient or specular reflection

    */

      glPushMatrix();

      glTranslatef (3.75, 3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, no_mat);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

      glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, mat_emission);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in second row, first column

    *  ambient and diffuse reflection; no specular

    */

      glPushMatrix();

      glTranslatef (-3.75, 0.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

      glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in second row, second column

    *  ambient, diffuse and specular reflection; low shininess

    */

      glPushMatrix();

      glTranslatef (-1.25, 0.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

      glMaterialfv(GL_FRONT, GL_SHININESS, low_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in second row, third column

    *  ambient, diffuse and specular reflection; high shininess

    */

      glPushMatrix();

      glTranslatef (1.25, 0.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

      glMaterialfv(GL_FRONT, GL_SHININESS, high_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in second row, fourth column

    *  ambient and diffuse reflection; emission; no specular

    */

      glPushMatrix();

      glTranslatef (3.75, 0.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

      glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, mat_emission);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in third row, first column

    *  colored ambient and diffuse reflection; no specular

    */

      glPushMatrix();

      glTranslatef (-3.75, -3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient_color);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

      glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in third row, second column

    *  colored ambient, diffuse and specular reflection; low shininess

    */

      glPushMatrix();

      glTranslatef (-1.25, -3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient_color);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

      glMaterialfv(GL_FRONT, GL_SHININESS, low_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in third row, third column

    *  colored ambient, diffuse and specular reflection; high shininess

    */

      glPushMatrix();

      glTranslatef (1.25, -3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient_color);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, mat_specular);

      glMaterialfv(GL_FRONT, GL_SHININESS, high_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, no_mat);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

	 /* draw sphere in third row, fourth column

    *  colored ambient and diffuse reflection; emission; no specular

    */

      glPushMatrix();

      glTranslatef (3.75, -3.0, 0.0);

      glMaterialfv(GL_FRONT, GL_AMBIENT, mat_ambient_color);

      glMaterialfv(GL_FRONT, GL_DIFFUSE, mat_diffuse);

      glMaterialfv(GL_FRONT, GL_SPECULAR, no_mat);

      glMaterialfv(GL_FRONT, GL_SHININESS, no_shininess);

      glMaterialfv(GL_FRONT, GL_EMISSION, mat_emission);

      glutSolidSphere(1.0, 16, 16);

      glPopMatrix();

      glFlush();

	 }

	 void reshape(int w, int h)

	 {

      glViewport(0, 0, w, h);

      glMatrixMode(GL_PROJECTION);

      glLoadIdentity();

      if (w <= (h * 2))

         glOrtho (-6.0, 6.0, -3.0*((GLfloat)h*2)/(GLfloat)w,

            3.0*((GLfloat)h*2)/(GLfloat)w, -10.0, 10.0);

      else

         glOrtho (-6.0*(GLfloat)w/((GLfloat)h*2),

            6.0*(GLfloat)w/((GLfloat)h*2), -3.0, 3.0, -10.0, 10.0);

      glMatrixMode(GL_MODELVIEW);

      glLoadIdentity();

	 }

	 int main(int argc, char** argv)

	 {

      glutInit(&argc, argv);

      glutInitDisplayMode (GLUT_SINGLE | GLUT_RGB | GLUT_DEPTH);

      glutInitWindowSize (600, 450);

      glutCreateWindow(argv[0]);

      init();

      glutReshapeFunc(reshape);

      glutDisplayFunc(display);

      glutKeyboardFunc (keyboard);

      glutMainLoop();

      return 0;

	 }
