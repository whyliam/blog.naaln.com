---
layout: post
title: 安装 Fedora 19 GNOME 后需做的事
date: 2013/08/13 08:48:00
categories:
- 技术
tags:
- Fedora
---

## 1. 安装 Fedora19 后的初始化配置

### 1.1. 防火墙

如果你的电脑处于局域网内，那么防火墙是不需要的的，停止它！

```
   sudo systemctl stop firewalld.service
   sudo systemctl disable firewalld.service
```

### 1.1. SELinux

停止 SELinux，如果你不需要它。

```
   sudo vi /etc/sysconfig/selinux
   # This file controls the state of SELinux on the system.
   # SELINUX= can take one of these three values:
   enforcing - SELinux security policy is enforced.
   permissive - SELinux prints warnings instead of enforcing.
   disabled - SELinux is fully disabled.
   SELINUX= disabled # change
   # SELINUXTYPE= type of policy in use. Possible values are:
   targeted - Only targeted network daemons are protected.
   strict - Full SELinux protection.
   SELINUXTYPE=targeted
```

## 2. 安装 Rpmfusion 源

### 2.1. 它有非常多的免费和非免费的软件，音视频解码器

```
   Fedora 14的源：
   sudo yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-14.noarch.rpm
   http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-14.noarch.rpm
   Fedora 15的源：
   sudo yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-15.noarch.rpm
   http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-15.noarch.rpm
   Fedora 16的源：
   sudo yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-16.noarch.rpm
   http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-16.noarch.rpm
   Fedora 17的源：
   sudo yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-17.noarch.rpm
   http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-17.noarch.rpm
   Fedora 18的源：
   sudo yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-18.noarch.rpm
   http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-18.noarch.rpm
   Fedora 19的源：
   sudo yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-19.noarch.rpm
   http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-19.noarch.rpm
   yum -y install yum-fastestmirror yum update
```

## 3. 安装一下有用的一些软件包

### 3.1. 安 32 位装库文件

```
   sudo yum install glibc.i686
   sudo yum install libstdc++.so.6
   sudo yum -y install --skip-broken glibc.i686 arts.i686 audiofile.i686 bzip2-libs.i686 cairo.i686
   cyrus-sasl-lib.i686 dbus-libs.i686 directfb.i686 esound-libs.i686 fltk.i686
   freeglut.i686 gtk2.i686 hal-libs.i686 imlib.i686 lcms-libs.i686
   lesstif.i686 libacl.i686 libao.i686 libattr.i686 libcap.i686 libdrm.i686
   libexif.i686 libgnomecanvas.i686 libICE.i686 libieee1284.i686 libsigc++20.i686 libSM.i686
   libtool-ltdl.i686 libusb.i686 libwmf.i686
   libwmf-lite.i686 libX11.i686 libXau.i686 libXaw.i686 libXcomposite.i686
   libXdamage.i686 libXdmcp.i686 libXext.i686 libXfixes.i686 libxkbfile.i686 libxml2.i686
   libXmu.i686 libXp.i686 libXpm.i686 libXScrnSaver.i686 libxslt.i686 libXt.i686 libXtst.i686
   libXv.i686 libXxf86vm.i686 lzo.i686 mesa-libGL.i686 mesa-libGLU.i686 nas-libs.i686
   nss_ldap.i686 cdk.i686 openldap.i686 pam.i686 popt.i686 pulseaudio-libs.i686
   sane-backends-libs-gphoto2.i686 sane-backends-libs.i686 SDL.i686
   svgalib.i686 unixODBC.i686 zlib.i686 compat-expat1.i686 compat-libstdc++-33.i686
   openal-soft.i686 alsa-oss-libs.i686 redhat-lsb.i686 alsa-plugins-pulseaudio.i686
   alsa-plugins-oss.i686 alsa-lib.i686 nspluginwrapper.i686 libXv.i686 libXScrnSaver.i686 qt.i686
   qt-x11.i686 pulseaudio-libs.i686 pulseaudio-libs-glib2.i686 alsa-plugins-pulseaudio.i686
```

### 3.2. Wps

```
   [http://linux.wps.cn/](http://linux.wps.cn/)
   Debian（Ubuntu、Mint、LinuxDeepin等）用户请下载： 文件名： symbol-fonts_1.2_all.deb
   box网盘下载链接： [https://app.box.com/s/zs0h71e1curhgb9xqi5t](https://app.box.com/s/zs0h71e1curhgb9xqi5t)
   金山快盘下载链接： [http://www.kuaipan.cn/file/id_19418406138675464.htm](http://www.kuaipan.cn/file/id_19418406138675464.htm)
   百度网盘下载链接： [http://pan.baidu.com/share/link?shareid=3369982571&uk=505215462](http://pan.baidu.com/share/link?shareid=3369982571&uk=505215462)
   文件大小： 241 KB (247,628 字节)
   md5码： 1ce31b586bff22ecf6a5941c0d7cb7a1
   sha1码： e9b7d2f79d0aa971a9c4ae55ead41647ae14adcf
   Red Hat（Cent OS、Fedora、Red Flag等）用户请下载： 文件名： symbol-fonts-1.2-1.noarch.rpm
   box网盘下载链接： [https://app.box.com/s/wmsdpn8x9qpcbcnekke1](https://app.box.com/s/wmsdpn8x9qpcbcnekke1)
   金山快盘下载链接： [http://www.kuaipan.cn/file/id_19418406138675465.htm](http://www.kuaipan.cn/file/id_19418406138675465.htm)
   百度网盘下载链接： [http://pan.baidu.com/share/link?shareid=3371036765&uk=505215462](http://pan.baidu.com/share/link?shareid=3371036765&uk=505215462)
   文件大小： 246 KB (252,171 字节)
   md5码： 4a7649c69e15983a6e69c31f38f64c62
   sha1码： 9d00e765169bba5f1351cf7f21a15ae3e26dcb08
```

Windows 和 MS Office 的全部字体的安装包下载：

```
   Debian（Ubuntu、Mint、LinuxDeepin等）用户请下载： 文件名： winfonts_1.3_all.deb
   百度网盘下载链接： [http://pan.baidu.com/share/link?shareid=1223565760&uk=505215462](http://pan.baidu.com/share/link?shareid=1223565760&uk=505215462)
   金山快盘下载链接： [http://www.kuaipan.cn/file/id_19418406138675470.htm](http://www.kuaipan.cn/file/id_19418406138675470.htm)
   文件大小： 372 MB (391,042,046 字节)
   md5码： a5bce445ab363f739affdcd5c894177f
   sha1码： 669830eeba0491b7aa8709cd36b27066360561c8
   Red Hat（Cent OS、Fedora、Red Flag等）用户请下载： 文件名： winfonts-1.3-1.noarch.rpm
   百度网盘下载链接： [http://pan.baidu.com/share/link?shareid=2980366977&uk=505215462](http://pan.baidu.com/share/link?shareid=2980366977&uk=505215462)
   金山快盘下载链接： [http://www.kuaipan.cn/file/id_19418406138675469.htm](http://www.kuaipan.cn/file/id_19418406138675469.htm)
   文件大小： 373 MB (391,277,972 字节)
   md5码： 7e3b14d247115002da1bb2d4b110c28a
   sha1码： 2bf3369a89583837710d380f4dbd5bb89d730e01
```

### 3.3. 安装 Tweak

```
   yum install gnome-tweak-tool
```

### 3.4. 安装 Sublime

```
[https://gist.github.com/whyliam/6220684](https://gist.github.com/whyliam/6220684)
```

### 3.5. 安装 Fcitx 输入法

```
   sudo yum install fcitx fcitx-table-chinese
```

配置以允许使用 iBus 之外的输入法：

```
   gsettings set org.gnome.settings-daemon.plugins.keyboard active false
```

在终端使用

```
   $ yum-chooser
```

或者利用输入法配置工具选择 fcitx（安装输入法选择：

```
   sudo yum install im-chooser）
```

在输入法配置工具中注销或者利用终端注销

```
   $ gnome-session-quit
```

重新登入，即可用 Ctrl+Space 切换

### 3.6. Logout

```
   $ gsettings set org.gnome.shell always-show-log-out true
```

然后 Alt+F2 输入 r 打回车，就能在你的用户名下面的菜单里看到 Log Out 菜单了。

### 3.7. 启用第三方软件库

[https://extensions.gnome.org/](https://extensions.gnome.org/),你懂的

[http://www.linuxbsdos.com/2013/07/07/4-third-party-repositories-to-enable-on-fedora-19/](http://www.linuxbsdos.com/2013/07/07/4-third-party-repositories-to-enable-on-fedora-19/)

### 3.8. 安装一下有用的一些软件包

from: [http://blog.csdn.net/sabalol/article/details/8512462](http://blog.csdn.net/sabalol/article/details/8512462) 有些包比较大，你也可以不安装， 比如 texlive。自己选择吧。

```
   sudoyum-yinstallyum-fastestmirrorunrarthunderbirdemacsibus-tableredhat-lsbgstreamer-plugins-badgstreamer-plugins-uglygstreamer-ffmpegcompat-libstdc++-33NetworkManager-develpython-geventtracker-ui-toolsqemulibpciaccess-develxorg-x11-util-macrosllvm-develmtdev*muttmsmtptftptftp-serverpolicycoreutils-guimtd-utilsmtd-utils-ubivimibus-pinyingnome-tweak-toolckermitstardictstardict-dic-zh_CNstardict-dic-entexliveibus-table-chinese-wubi-haifenggnashsmplayervlcsambapidginpidgin-sipemeldexpectglibc-staticncurses-staticgenromfscmakeccachep7zip;gummi
```

### 3.9. 升级一下系统

```
   sudo yum -y update
```

### 3.10. 安装 Chrome

```
   yum install google-chrome-stable
```

### 3.11. 安装 Flash Plugin

32 位系统：

```
   wget http://linuxdownload.adobe.com/adobe-release/adobe-release-i386-1.0-1.noarch.rpm
   sudo rpm -ivh adobe-release-i386-1.0-1.noarch.rpm
```

64 位系统：

```
   wget http://linuxdownload.adobe.com/adobe-release/adobe-release-x86_64-1.0-1.noarch.rpm
   sudo rpm -ivh adobe-release-x86_64-1.0-1.noarch.rpm
   sudo yum -y install flash-plugin
```

### 3.12. 安装音视频解压器

```
   wget http://mplayerhq.hu/MPlayer/releases/codecs/all-20110131.tar.bz2
   tar jxf all-20110131.tar.bz
```

	 32 位系统：

```
   sudo mkdir -p /usr/lib/codecs sudo cp all-20110131/* /usr/lib/codecs
```

	 64位系统：

```
   sudo mkdir -p /usr/lib64/codecs sudo cp all-20110131/* /usr/lib64/codecs
```
