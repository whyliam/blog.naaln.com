---
layout: post
title:  Android ListView从网络获取图片及文字显示
date: 2013/04/10 09:04:00
categories:
- 技术
tags:
- Android
- Android开发
- ListView
description: Android开发教程，详细介绍如何实现ListView从网络获取图片及文字显示功能。教程涵盖完整的开发流程：创建XML布局文件（包括ListView主体布局和列表项布局）、使用selector和shape实现视觉效果、自定义BaseAdapter适配器、开发ImageLoader图片加载类（包含内存缓存和文件缓存机制）、编写Utils工具类处理数据流，以及主Activity的XML解析和数据绑定。文章提供完整代码实现，帮助开发者掌握Android应用中异步加载网络图片和显示列表数据的高级技巧。
---

如何从网络获取图片以及文本来显示。事实上，一般是先获取 Josn 或 sml 数据，然后解释显示。我们先从网上获取 xml，然后对其进行解析，最后显示在 ListView 上。具体步骤：

- 客户端发出请求，获取 xml
- 客户端异步解析 xml
- ListView 将解析完的数据显示

**一、Android 客户端**

![][1]

**(1)xml 布局文件**

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
   android:layout_width="fill_parent"
   android:layout_height="fill_parent"
   android:orientation="vertical">
   <ListView
       android:id="@+id/list"
       android:layout_width="fill_parent"
       android:layout_height="wrap_content"
       android:divider="#b5b5b5"
       android:dividerHeight="1dp"
       android:listSelector="@drawable/list_selector" />
</LinearLayout>
```

ListView 的每一行的布局，list_raw.xml，看一下结构图：

![][2]

```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
   android:layout_width="fill_parent"
   android:layout_height="wrap_content"
   android:background="@drawable/list_selector"
   android:orientation="horizontal"
   android:padding="5dip" >
   <!--  ListView最左边的缩略图 -->
   <LinearLayout android:id="@+id/thumbnail"
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:padding="3dip"
       android:layout_alignParentLeft="true"
       android:background="@drawable/image_bg"
       android:layout_marginRight="5dip">
       <ImageView
           android:id="@+id/list_image"
           android:layout_width="50dip"
           android:layout_height="50dip"
           android:src="@drawable/rihanna"/>
    </LinearLayout>
    <!-- 歌曲名-->
   <TextView
       android:id="@+id/title"
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:layout_alignTop="@+id/thumbnail"
       android:layout_toRightOf="@+id/thumbnail"
       android:text="Rihanna Love the way lie"
       android:textColor="#040404"
       android:typeface="sans"
       android:textSize="15dip"
       android:textStyle="bold"/>
   <!-- 歌手名 -->
   <TextView
       android:id="@+id/artist"
       android:layout_width="fill_parent"
       android:layout_height="wrap_content"
       android:layout_below="@id/title"
       android:textColor="#343434"
       android:textSize="10dip"
       android:layout_marginTop="1dip"
       android:layout_toRightOf="@+id/thumbnail"
       android:text="Just gona stand there and ..." />
   <!-- 歌曲播放时间 -->
   <TextView
       android:id="@+id/duration"
       android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:layout_alignParentRight="true"
       android:layout_alignTop="@id/title"
       android:gravity="right"
       android:text="5:45"
       android:layout_marginRight="5dip"
       android:textSize="10dip"
       android:textColor="#10bcc9"
       android:textStyle="bold"/>
    <!-- 进入播放 -->
    <ImageView android:layout_width="wrap_content"
       android:layout_height="wrap_content"
       android:src="@drawable/arrow"
       android:layout_alignParentRight="true"
       android:layout_centerVertical="true"/>
</RelativeLayout>
```

另外我们打算使用几个特效，一个是当点击列表项目的时候，项目背景色改变，其实就是一个 selector；另一个就是用 shape 美化视觉效果，具体看 xml 代码：

1. list_selector.xml

```
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
<!-- Selector style for listrow -->
<item
android:state_selected="false"
   android:state_pressed="false"
   android:drawable="@drawable/gradient_bg" />
<item android:state_pressed="true"
   android:drawable="@drawable/gradient_bg_hover" />
<item android:state_selected="true"
android:state_pressed="false"
   android:drawable="@drawable/gradient_bg_hover" />
</selector>
```

![][3]

1. gradient_bg.xml，是默认背景梯度风格

```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
   android:shape="rectangle">
 <!--  Gradient Bg for listrow -->
 <gradient
     android:startColor="#f1f1f2"
     android:centerColor="#e7e7e8"
     android:endColor="#cfcfcf"
     android:angle="270" />
</shape>
```

1. gradient_bg_hover.xml 梯度风格在悬停状态

```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android" android:shape="rectangle">
 <!-- Gradient BgColor for listrow Selected -->
 <gradient
     android:startColor="#18d7e5"
     android:centerColor="#16cedb"
     android:endColor="#09adb9"
     android:angle="270" />
</shape>
```

4.image_bg.xml 在图片周围的白色边条

```
   <?xml version="1.0" encoding="utf-8"?>
   <layer-list xmlns:android="http://schemas.android.com/apk/res/android" >
       <item>
         <shape
           android:shape="rectangle">
               <stroke android:width="1dp" android:color="#dbdbdc" />
               <solid android:color="#FFFFFF" />
           </shape>
      </item>
   </layer-list>
```

以上效果基本上都用到了 shape，对此不了解的可以去查看相关资料。上面就是全部的 xml 布局文件，下面将开始写代码。

**(2) 主要代码**

代码部分主要涉及到一下几个功能，重写 ListView 的适配器（BaseAdapter），从网络获取图片，图片缓存的处理，xml 的解析。

①重写 ListView 的适配器，这部分可以参考上一篇文章，LazyAdapter.java

```
  import java.util.ArrayList;
  import java.util.HashMap;
  import android.app.Activity;
  import android.content.Context;
  import android.view.LayoutInflater;
  import android.view.View;
  import android.view.ViewGroup;
  import android.widget.BaseAdapter;
  import android.widget.ImageView;
  import android.widget.TextView;
  public class LazyAdapter extends BaseAdapter {
    private Activity activity;
    private ArrayList<HashMap<String, String>> data;
    private static LayoutInflater inflater=null;
    public ImageLoader imageLoader; //用来下载图片的类，后面有介绍
    public LazyAdapter(Activity a, ArrayList<HashMap<String, String>> d) {
    activity = a;
    data=d;
    inflater = (LayoutInflater)activity.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
      imageLoader=new ImageLoader(activity.getApplicationContext());
    }
    public int getCount() {
      return data.size();
    }
    public Object getItem(int position) {
      return position;
    }
    public long getItemId(int position) {
      return position;
    }

  public View getView(int position, View convertView, ViewGroup parent) {
    View vi=convertView;
    if(convertView==null)
    vi = inflater.inflate(R.layout.list_row, null);
    TextView title = (TextView)vi.findViewById(R.id.title); // 标题
    TextView artist = (TextView)vi.findViewById(R.id.artist); // 歌手名
    TextView duration = (TextView)vi.findViewById(R.id.duration); // 时长
    ImageView thumb_image=(ImageView)vi.findViewById(R.id.list_image); // 缩略图
    HashMap<String, String> song = new HashMap<String, String>();
    song = data.get(position);
    // 设置ListView的相关值
    title.setText(song.get(CustomizedListView.KEY_TITLE));
    artist.setText(song.get(CustomizedListView.KEY_ARTIST));
    duration.setText(song.get(CustomizedListView.KEY_DURATION));
    imageLoader.DisplayImage(song.get(CustomizedListView.KEY_THUMB_URL), thumb_image);
    return vi;
  }
}
```

②网络获取图片的类，ImageLoader.java：

```

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Collections;
import java.util.Map;
import java.util.WeakHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import android.app.Activity;
import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.widget.ImageView;

public class ImageLoader {

  MemoryCache memoryCache=new MemoryCache();
  FileCache fileCache;
  private Map<ImageView, String> imageViews=Collections.synchronizedMap(new WeakHashMap<ImageView, String>());
  ExecutorService executorService;

  public ImageLoader(Context context){
    fileCache=new FileCache(context);
    executorService=Executors.newFixedThreadPool(5);
  }

  final int stub_id = R.drawable.no_image;
  public void DisplayImage(String url, ImageView imageView)
  {
    imageViews.put(imageView, url);
    Bitmap bitmap=memoryCache.get(url);
    if(bitmap!=null)
      imageView.setImageBitmap(bitmap);
    else
    {
      queuePhoto(url, imageView);
      imageView.setImageResource(stub_id);
    }
  }

  private void queuePhoto(String url, ImageView imageView)
  {
    PhotoToLoad p=new PhotoToLoad(url, imageView);
    executorService.submit(new PhotosLoader(p));
  }

  private Bitmap getBitmap(String url)
  {
    File f=fileCache.getFile(url);

  //从sd卡
    Bitmap b = decodeFile(f);
    if(b!=null)
      return b;

  //从网络
    try {
      Bitmap bitmap=null;
      URL imageUrl = new URL(url);
      HttpURLConnection conn = (HttpURLConnection)imageUrl.openConnection();
      conn.setConnectTimeout(30000);
      conn.setReadTimeout(30000);
      conn.setInstanceFollowRedirects(true);
      InputStream is=conn.getInputStream();
      OutputStream os = new FileOutputStream(f);
      Utils.CopyStream(is, os);
      os.close();
      bitmap = decodeFile(f);
      return bitmap;
    } catch (Exception ex){
      ex.printStackTrace();
      return null;
    }
  }

  //解码图像用来减少内存消耗
  private Bitmap decodeFile(File f){
    try {
  //解码图像大小
      BitmapFactory.Options o = new BitmapFactory.Options();
      o.inJustDecodeBounds = true;
      BitmapFactory.decodeStream(new FileInputStream(f),null,o);

  //找到正确的刻度值，它应该是2的幂。
      final int REQUIRED_SIZE=70;
      int width_tmp=o.outWidth, height_tmp=o.outHeight;
      int scale=1;
      while(true){
        if(width_tmp/2<REQUIRED_SIZE || height_tmp/2<REQUIRED_SIZE)
          break;
        width_tmp/=2;
        height_tmp/=2;
        scale*=2;
      }

      BitmapFactory.Options o2 = new BitmapFactory.Options();
      o2.inSampleSize=scale;
      return BitmapFactory.decodeStream(new FileInputStream(f), null, o2);
    } catch (FileNotFoundException e) {}
    return null;
  }

  /任务队列
  private class PhotoToLoad
  {
    public String url;
    public ImageView imageView;
    public PhotoToLoad(String u, ImageView i){
      url=u;
      imageView=i;
    }
  }

  class PhotosLoader implements Runnable {
    PhotoToLoad photoToLoad;
    PhotosLoader(PhotoToLoad photoToLoad){
      this.photoToLoad=photoToLoad;
    }

    @Override
    public void run() {
      if(imageViewReused(photoToLoad))
        return;
      Bitmap bmp=getBitmap(photoToLoad.url);
      memoryCache.put(photoToLoad.url, bmp);
      if(imageViewReused(photoToLoad))
        return;
      BitmapDisplayer bd=new BitmapDisplayer(bmp, photoToLoad);
      Activity a=(Activity)photoToLoad.imageView.getContext();
      a.runOnUiThread(bd);
    }
  }

  boolean imageViewReused(PhotoToLoad photoToLoad){
    String tag=imageViews.get(photoToLoad.imageView);
    if(tag==null || !tag.equals(photoToLoad.url))
      return true;
    return false;
  }

  //用于显示位图在UI线程
  class BitmapDisplayer implements Runnable
  {
    Bitmap bitmap;
    PhotoToLoad photoToLoad;
    public BitmapDisplayer(Bitmap b, PhotoToLoad p){bitmap=b;photoToLoad=p;}
    public void run()
    {
      if(imageViewReused(photoToLoad))
        return;
      if(bitmap!=null)
        photoToLoad.imageView.setImageBitmap(bitmap);
      else
        photoToLoad.imageView.setImageResource(stub_id);
    }
  }

  public void clearCache() {
    memoryCache.clear();
    fileCache.clear();
  }

}
```

⑤还有一个读取流的工具类，

**Utils.java：**

```
import java.io.InputStream;
import java.io.OutputStream;
public class Utils {
  public static void CopyStream(InputStream is, OutputStream os)
  {
    final int buffer_size=1024;
    try
    {
      byte[] bytes=new byte[buffer_size];
      for(;;)
      {
       int count=is.read(bytes, 0, buffer_size);
       if(count==-1)
        break;
      os.write(bytes, 0, count);
      is.close();
      os.close();
    }
  }
  catch(Exception ex){}
}
}
```

还可以像下面这样表达，方法是一样的，就是表达形式上不同：

```
public static byte[] readStream(InputStream inStream) throws Exception{
  ByteArrayOutputStream outSteam = new ByteArrayOutputStream();
  byte[] buffer = new byte[1024];
  int len = -1;
  while( (len=inStream.read(buffer)) != -1){
    outSteam.write(buffer, 0, len);
  }
  outSteam.close();
  inStream.close();
  return outSteam.toByteArray();
}
```

最后就是主 Activity 的代码了，

```
package com.example.androidhive;
import java.util.ArrayList;
import java.util.HashMap;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.ListView;
public class CustomizedListView extends Activity {
  // 所有的静态变量
  static final String URL = "http://api.androidhive.info/music/music.xml";//xml目的地址，打开地址看一下
  // XML 节点
  static final String KEY_SONG = "song"; // parent node
  static final String KEY_ID = "id";
  static final String KEY_TITLE = "title";
  static final String KEY_ARTIST = "artist";
  static final String KEY_DURATION = "duration";
  static final String KEY_THUMB_URL = "thumb_url";

  ListView list;
  LazyAdapter adapter;
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.main);

    ArrayList<HashMap<String, String>> songsList = new ArrayList<HashMap<String, String>>();
    XMLParser parser = new XMLParser();
    String xml = parser.getXmlFromUrl(URL); // 从网络获取xml
    Document doc = parser.getDomElement(xml); // 获取 DOM 节点

    NodeList nl = doc.getElementsByTagName(KEY_SONG);
    // 循环遍历所有的歌节点 <song>
    for (int i = 0; i < nl.getLength(); i++) {
      // 新建一个 HashMap
      HashMap<String, String> map = new HashMap<String, String>();
      Element e = (Element) nl.item(i);
      //每个子节点添加到HashMap关键= >值
      map.put(KEY_ID, parser.getValue(e, KEY_ID));
      map.put(KEY_TITLE, parser.getValue(e, KEY_TITLE));
      map.put(KEY_ARTIST, parser.getValue(e, KEY_ARTIST));
      map.put(KEY_DURATION, parser.getValue(e, KEY_DURATION));
      map.put(KEY_THUMB_URL, parser.getValue(e, KEY_THUMB_URL));
      // HashList添加到数组列表
      songsList.add(map);
    }

    list=(ListView)findViewById(R.id.list);
    adapter=new LazyAdapter(this, songsList);
    list.setAdapter(adapter);

    //为单一列表行添加单击事件
    list.setOnItemClickListener(new OnItemClickListener() {
      @Override
      public void onItemClick(AdapterView<?> parent, View view,
      int position, long id) {

       //这里可以自由发挥，比如播放一首歌曲等等
      }
    });
    }
  }
}
```

最后看一下效果：

![请输入图片描述][4]

reference： [请输入链接描述][5]

[1]: http://img.my.csdn.net/uploads/201211/27/1353984236_2983.png

[2]: http://img.my.csdn.net/uploads/201211/25/1353853594_8800.png

[3]: http://img.my.csdn.net/uploads/201211/26/1353905794_7381.png

[4]: http://img.my.csdn.net/uploads/201211/27/1353985799_4142.png

[5]: http://blog.csdn.net/wangjinyu501/article/details/8219317
