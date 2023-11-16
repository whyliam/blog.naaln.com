---
layout: post
title: Android中ListView的各种显示效果
date: 2013/04/09 07:57:00
categories:
- 技术
tags:
- Android
---

在android应用开发中，ListView是使用频率非常高的一个组件，基本上稍微复杂点的布局都会用到它，利用它可以让你的界面美观，有层次
。

ListView可以用来作为数据显示的容器，也可以作为界面的布局。学习ListView需要关注的内容大概有三点：显示、数据适配器以及各种
事件的监听器。内容有点多，这里先只讲如何让ListView达到你想要的显示效果。

** 一、普通的ListView **

普通的ListView是指每一个item只显示一条文本数据，程序运行效果图如下：

![请输入图片描述][1]

代码：
```
protected void onCreate(Bundle savedInstanceState) {
   // TODO Auto-generated method stub
   super.onCreate(savedInstanceState);
   setContentView(R.layout.layout_listview_simple);

   //取得ListView实例
   ListView lvwSimple = (ListView)findViewById(R.id.lvw_simple);
   //要在ListView中显示的数据集合
   String items[] = new String[] {"item1", "item2", "item3", "item4", "item5"};
   //new一个ArrayAdapter，android.R.layout.simple_list_item_1为ListView显示的布局文件
   ArrayAdapter<String> adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, items);
   //位ListView设置Adapter
   lvwSimple.setAdapter(adapter);
}
```

** 二、自定义ListView **

上面的那种方法只能显示简单的文字信息，显然在很多场合下都不够用，比如你想要在一个item中显示图片，显示多行文字，这就需要你自定义ListView的布局了。 效果图如下：

![请输入图片描述][2]

步骤：

1、分析你想要实现的布局效果，自定义布局文件lvw_custom.xml，该布局文件针对的是ListView的item，而不是整个ListView：

```
   <?xml version="1.0" encoding="utf-8"?>
   <!-- 自定义布局文件 -->
   <LinearLayout
       xmlns:android="http://schemas.android.com/apk/res/android"
       android:orientation="horizontal"
       android:layout_width="fill_parent"
       android:layout_height="fill_parent"
       >
       <ImageView
             android:id="@+id/lvw_custom_img"
             android:layout_width="wrap_content"
             android:layout_height="wrap_content"
             android:layout_gravity="center_vertical"
             android:layout_margin="5dip"
             android:background="@drawable/custom"
             />
       <LinearLayout
           xmlns:android="http://schemas.android.com/apk/res/android"
           android:orientation="vertical"
           android:layout_width="fill_parent"
           android:layout_height="wrap_content">
           <TextView
               android:id="@+id/lvw_custom_name"
               android:layout_width="wrap_content"
               android:layout_height="wrap_content"
               android:layout_marginLeft="5dip"
               android:layout_marginRight="5dip"
               android:layout_marginTop="5dip"
               android:textSize="25dip"
               android:text="item名称"/>
           <TextView
               android:id="@+id/lvw_custom_description"
               android:layout_width="wrap_content"
               android:layout_height="wrap_content"
               android:layout_margin="5dip"
               android:textSize="10dip"
               android:text="item描述……"/>
       </LinearLayout>
   </LinearLayout>
```

2、取得用于ListView的数据集合，类型是ArrayList<Map<String, Object>>，每一个Map对应于ListView的一个item，多个map就构成了ListView的数据集合：

```
   /**
    * 取得用于ListView的数据
    * @return
    */
   private ArrayList<HashMap<String, Object>> getItems() {
       ArrayList<HashMap<String, Object>> items = new ArrayList<HashMap<String, Object>>();
       for(int i = 0; i < 5; i++) {
           //***********************************************
           //* 每一个map中的数据对应与ListView中的一个item *
           //* 在我自定义的布局文件中，一个item包括：      *
           //* 1、图片（lvw_custom_img）                   *
           //* 2、名称（lvw_custom_name）                  *
           //* 3、描述（lvw_custom_description）           *
           //* 所以map中也至少需要包括这三项数据           *
           //***********************************************
           HashMap<String, Object> map = new HashMap<String, Object>();
           //图片，key值可以随便取，映射关系会在实例化Adapter时定义，但我喜欢将key与布局文件中定义的id取同样的值
           //value值为图片的资源id
           map.put("lvw_custom_img", R.drawable.custom);
           //名称
           map.put("lvw_custom_name", "item名称");
           //描述
           map.put("lvw_custom_description", "item描述");

           items.add(map);
       }
       return items;
   }
```

3、为ListView设置SimpleAdapter：

```
 //取得ListView实例
 ListView lvwCustom = (ListView)findViewById(R.id.lvw_custom);
 //要在ListView中显示的数据集合
 ArrayList<HashMap<String, Object>> items = getItems();
 //************************************************************************
 //* new一个SimpleAdapter                                                 *
 //* items为数据集合                                                      *
 //* R.layout.lvw_custom为自定义的ListView布局文件                        *
 //* 第四个参数为map中德key集合                                           *
 //* 第五个参数为自定义布局文件中空间的资源id集合，与第四个参数要一一对应 *
 //************************************************************************
 SimpleAdapter adapter = new SimpleAdapter(this, items, R.layout.lvw_custom,
         new String[] {"lvw_custom_img","lvw_custom_name","lvw_custom_description"},
         new int[] {R.id.lvw_custom_img, R.id.lvw_custom_name, R.id.lvw_custom_description});
 //位ListView设置Adapter
 lvwCustom.setAdapter(adapter);
```

**三、显示非资源id类型图片的ListView**

通过上面的例子可以看到Map中图片项的value是资源id，这是针对项目中已存在的图片文件，为什么要用资源id而不是其他（比如Bitmap类型）呢，这是因为adapter的bindView()方法是负责解析图片并将其显示到ImageView中，但它只针对资源id类型做了判断。然而有一种情况，比如你的图片是从网络读取的Bitmap类型，你就需要对代码进行改写了。分析SimpleAdapter的源码，发现getView()方法是负责够造界面布局的的，而getView又是调用bindView来往控件里填充值的，所以我这里对bindView()方法进行改写。

新建一个类CustomImageAdapter，代码完全copy自SimpleAdapter，找到bindView方法，对其进行改写：

```
private void bindView(int position, View view) {
   final Map dataSet = mData.get(position);
   if (dataSet == null) {
       return;
   }
   final ViewBinder binder = mViewBinder;
   final View[] holder = mHolders.get(view);
   final String[] from = mFrom;
   final int[] to = mTo;
   final int count = to.length;
   for (int i = 0; i < count; i++) {
       final View v = holder[i];
       if (v != null) {
           final Object data = dataSet.get(from[i]);
           String text = data == null ? "" : data.toString();
           if (text == null) {
               text = "";
           }
           boolean bound = false;
           if (binder != null) {
               bound = binder.setViewValue(v, data, text);
           }
           if (!bound) {
               if (v instanceof Checkable) {
                   if (data instanceof Boolean) {
                       ((Checkable) v).setChecked((Boolean) data);
                   } else {
                       throw new IllegalStateException(v.getClass().getName() +
                               " should be bound to a Boolean, not a " + data.getClass());
                   }
               } else if (v instanceof TextView) {
                   // Note: keep the instanceof TextView check at the bottom of these
                   // ifs since a lot of views are TextViews (e.g. CheckBoxes).
                   setViewText((TextView) v, text);
               } else if (v instanceof ImageView) {
                   if (data instanceof Integer) {
                       setViewImage((ImageView) v, (Integer) data);
                   }
                   //这里增加对Bitmap类型的判断
                       else if(data instanceof Bitmap) {
                       ((ImageView)v).setImageBitmap((Bitmap)data);
                   }
                   else {
                       setViewImage((ImageView) v, text);
                   }
               } else {
                   throw new IllegalStateException(v.getClass().getName() + " is not a " +
                           " view that can be bounds by this SimpleAdapter");
               }
           }
       }
   }
}
```

然后像自定义ListView的步骤一样使用就行了，只是把SimpleAdapter替换为CustomImageAdapter，Map中图片项的value变为Bitmap类型了。

**四、Item使用不同布局的ListView**

通过前面的例子可以看到，ListView的所有item使用的都是相同的布局，如果想使用不同的布局呢？ 这个例子是我从以前做的音乐播放器代码里找的，效果图:

![请输入图片描述][3]

MP3的封面图片突然不显示了，不知道咋回事。 步骤：

1、在Map中存放的键值对中多增加一项布局类型：

```
/**
* 根据playlistId获得歌曲列表，用于ListView显示
*
* @param playlistId
*            0表示所有歌曲
* @return
*/
private List<Map<String, Object>> getSongList(int playlistId) {

   // 取得符合条件的所有歌曲
   List<Song> songs = getSongs(playlistId);
   // 构造SongList的数据
   List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
   Map<String, Object> map1 = new HashMap<String, Object>();
   //这里的Type是用于在getView方法中判断并构造布局的
   map1.put("type", TYPE_BTN);
   map1.put("id", ID_RANDOM_PLAY);
   map1.put("mainlist_btn_name", "随机播放");
   map1.put("mainlist_btn_img", R.drawable.list_random_icon);
   list.add(map1);
   if (songs != null) {
       int size = songs.size();
       for (int i = 0; i < size; i++) {
           Song song = songs.get(i);
           Map<String, Object> map = new HashMap<String, Object>();
           //这里的Type是用于在getView方法中判断并构造布局的
           map.put("type", TYPE_SONG_LIST);
           map.put("id", song.getId());
           Bitmap bm = MusicHelper.getArtwork(this, song.getId(), song
                   .getAlbumId(), true);
           map.put("songlist_cover_img", bm);
           map.put("songlist_song_name", song.getTitle());
           map.put("songlist_song_album", song.getAlbum());
           map.put("songlist_song_artist", song.getArtist());
           list.add(map);
       }
   }
   return list;
}
```

2、为不同的item布局分别定义不同的布局文件。

list_songs.xml:

```
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout
   xmlns:android="http://schemas.android.com/apk/res/android"
   android:layout_width="fill_parent"
   android:layout_height="fill_parent"
   >
   <ImageView
         android:id="@+id/songlist_cover_img"
         android:layout_width="48dip"
         android:layout_height="48dip"
         android:layout_alignParentLeft="true"
         android:layout_centerVertical="true"
         android:layout_marginLeft="6dip"
         />
    <LinearLayout
        android:orientation="vertical"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_toRightOf="@id/songlist_cover_img"
        android:layout_alignParentRight="true"
        android:layout_centerVertical="true">
        <TextView
            android:id="@+id/songlist_song_name"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginTop="6dip"
            android:layout_marginLeft="6dip"
            android:layout_marginBottom="3dip"
            android:textSize="24dip"
            android:textColor="@drawable/black">
        </TextView>
        <RelativeLayout
            android:layout_width="fill_parent"
            android:layout_height="wrap_content"
            android:layout_marginBottom="6dip">
            <TextView
                android:id="@+id/songlist_song_album"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="3dip"
                android:layout_marginLeft="6dip"
                android:textSize="10dip"
                android:textColor="@drawable/black">
            </TextView>
            <TextView
                android:id="@+id/songlist_song_artist"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_marginTop="3dip"
                android:layout_marginRight="6dip"
                android:layout_alignParentRight="true"
                android:textSize="10dip"
                android:textColor="@drawable/black">
            </TextView>
        </RelativeLayout>
    </LinearLayout>
</RelativeLayout>
```

list_main_btn.xml:

```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
   xmlns:android="http://schemas.android.com/apk/res/android"
   android:orientation="horizontal"
   android:layout_width="fill_parent"
   android:layout_height="fill_parent"
   >
   <TextView
            android:id="@+id/mainlist_btn_name"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_marginLeft="6dip"
            android:layout_marginTop="10dip"
            android:layout_marginBottom="10dip"
           android:layout_gravity="center_vertical"
            android:textSize="28dip"
            android:textColor="@drawable/black"/>
   <ImageView
         android:id="@+id/mainlist_btn_img"
         android:layout_width="wrap_content"
         android:layout_height="wrap_content"
         android:layout_gravity="center_vertical"
         android:layout_marginLeft="6dip"
         />
</LinearLayout>
```

3、自定义Adapter类SongListAdapter，继承自BaseAdapter，重写getView方法，在该方法中使用LayoutInflator，根据map中定义的布局类型，构造对应的布局：

```
@Override
public View getView(int position, View convertView, ViewGroup parent) {
   LayoutInflater inflater = LayoutInflater.from(context);
   //产生一个View
   View view = null;
   //根据type不同的数据类型构造不同的View，0代表歌曲，1代表按钮菜单
   //这个list是ListView的数据项集合，是通过构造方法传递进来的
   int type = (Integer)list.get(position).get("type");
   if(0 == type) {
       view = inflater.inflate(R.layout.list_songs, null);
       //获取songlist_cover_img
       ImageView songlist_cover_img = (ImageView)view.findViewById(R.id.songlist_cover_img);
       songlist_cover_img.setImageBitmap((Bitmap)list.get(position).get("songlist_cover_img"));
       //获取songlist_song_name
       TextView songlist_song_name = (TextView)view.findViewById(R.id.songlist_song_name);
       String song_name = list.get(position).get("songlist_song_name").toString();
       songlist_song_name.setText(song_name);
       //获取songlist_song_album属性
       TextView songlist_song_album = (TextView)view.findViewById(R.id.songlist_song_album);
       String song_album = list.get(position).get("songlist_song_album").toString();
       songlist_song_album.setText(song_album);
       //获取songlist_song_artist属性
       TextView songlist_song_artist = (TextView)view.findViewById(R.id.songlist_song_artist);
       String song_artist = list.get(position).get("songlist_song_artist").toString();
       songlist_song_artist.setText(song_artist);
   } else if(1 == type) {
       view = inflater.inflate(R.layout.list_main_btn, null);
       //获取按钮菜单的mainlist_btn_name属性
       TextView mainlist_btn_name = (TextView)view.findViewById(R.id.mainlist_btn_name);
       String btn_name = list.get(position).get("mainlist_btn_name").toString();
       mainlist_btn_name.setText(btn_name);
       //获取mainlist_btn_img
       ImageView mainlist_btn_img = (ImageView)view.findViewById(R.id.mainlist_btn_img);
       int resId = (Integer)list.get(position).get("mainlist_btn_img");
       mainlist_btn_img.setImageResource(resId);
   } else {

   }

   return view;
}
```

3、为ListView设置adapter：

```
list = getSongList(playlistId);
SongListAdapter adapter = new SongListAdapter(list, this);
songList.setAdapter(adapter);
```

 [1]: http://images.cnblogs.com/cnblogs_com/chenguanwei/201112/201112091641306927.png
 [2]: http://images.cnblogs.com/cnblogs_com/chenguanwei/201112/201112091641314518.png
 [3]: http://images.cnblogs.com/cnblogs_com/chenguanwei/201112/201112091641364523.png
