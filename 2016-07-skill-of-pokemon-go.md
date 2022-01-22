---
title: Pokemon Go 的奇技淫巧
date: 2016/07/18 21:46:10
tags:
categories:
- 技术
---

消息来源主要是贴吧，Reddit，pokemon一个数据网站，以及我自己的一点经验。

Reddit已经有人把游戏数据解包，解包结果：[https://gist.github.com/anonymous/077d6dea82d58b8febde54ae9729b1bf](https://gist.github.com/anonymous/077d6dea82d58b8febde54ae9729b1bf)

贴吧翻译结果：[【重要消息】Reddit已经有人解包了游戏数据，一大波信息来袭_pokemongo吧](http://tieba.baidu.com/p/4674928820?see_lz=1)

pokemon网站：[Pokemon Go Database](http://pokemongo.gamepress.gg/)

1.当使用熏香时，站立不动的刷新频率为5分钟，如果处于移动状态并且位移超过200m，刷新频率为1分钟。

```
Incense {
      IncenseLifetimeSeconds: 1800
      StandingTimeBetweenEncountersSec: 300
      MovingTimeBetweenEncounterSec: 60
      DistanceRequiredForShorterIntervalMeters: 200
    }
```

2.游戏中的属性一致加成（Same-type attack bonus）确实存在，加成系数为1.2。

```
Items {
  TemplateId: "BATTLE_SETTINGS"
  BattleSettings {
    RetargetSeconds: 0.5
    EnemyAttackInterval: 1.5
    AttackServerInterval: 5
    RoundDurationSeconds: 99
    BonusTimePerAllySeconds: 10
    MaximumAttackersPerBattle: 20
    SameTypeAttackBonusMultiplier: 1.25
    MaximumEnergy: 100
    EnergyDeltaPerHealthLost: 0.5
    DodgeDurationMs: 500
    MinimumPlayerLevel: 5
    SwapDurationMs: 1000
  }
```

3.超梦和梦幻的数据有逃跑率，但是没有捕捉率。

国外玩家经过讨论，可能需要大师球来进行捕捉。

![](http://pics.naaln.com/blog/2019-01-14-32440.jpg-basicBlog)

4.神兽的参数比非神兽多一个，之后可以确定目前来说，野外是抓不到神兽的了。

```
![](http://pics.naaln.com/blog/2019-01-14-032440.jpg-basicBlog)
```

5.训练家最高等级LV.100

```
TrainerLevelMin: 1
TrainerLevelMax: 100
```

6.游戏中有大师球，根据目前的数据，12级之前只有poke ball，12级之后出现great ball，20级之后出现ultra ball，master ball可能需要30级甚至更高的等级才能解锁。（根据@刘昊伯 的评论， Reddit上已经有人到30级了，然而升级奖励当中并没有master ball，看来还需要更高的等级才行）

```
Items {
  TemplateId: "ITEM_MASTER_BALL"
  Item {
    UniqueId: ITEM_MASTER_BALL
    ItemType: ITEM_TYPE_POKEBALL
    Category: ITEM_CATEGORY_POKEBALL
  }
```

7.扔球存在一个里程碑阈值，正作里捕获度受图鉴已捕获数量影响，所以这里可能是当你抓一种PM超过多少数量之后（达到里程碑），之后再抓这种PM就会容易一些了；也有人猜测是和游戏中的奖牌（Metal）系统挂钩的。

![](http://pics.naaln.com/blog/2019-01-14-032442.jpg-basicBlog)

8.树果还存在其他类型，树果总共有五种类型，分别是：

```
BLUK BERRY
NANAB BERRY
PINAP BERRY
RAZZ BERRY
WEPAR BERRY
```

![](http://pics.naaln.com/blog/2019-01-14-32443.jpg-basicBlog)

```
Items {
  TemplateId: "ITEM_BLUK_BERRY"
  Item {
    UniqueId: 702
    ItemType: ITEM_TYPE_FOOD
    Category: ITEM_CATEGORY_FOOD
  }
Items {
  TemplateId: "ITEM_NANAB_BERRY"
  Item {
    UniqueId: 703
    ItemType: ITEM_TYPE_FOOD
    Category: ITEM_CATEGORY_FOOD
  }
Items {
  TemplateId: "ITEM_PINAP_BERRY"
  Item {
    UniqueId: 705
    ItemType: ITEM_TYPE_FOOD
    Category: ITEM_CATEGORY_FOOD
  }
Items {
  TemplateId: "ITEM_RAZZ_BERRY"
  Item {
    UniqueId: 701
    ItemType: ITEM_TYPE_FOOD
    Category: ITEM_CATEGORY_FOOD
  }
Items {
  TemplateId: "ITEM_WEPAR_BERRY"
  Item {
    UniqueId: 704
    ItemType: ITEM_TYPE_FOOD
    Category: ITEM_CATEGORY_FOOD
  }
```

9.精灵的MAX LEVEL为40，孵蛋得到的精灵最高等级20，野外精灵最高等级30，另外游戏中的精灵还存在一个的「family types」属性，可能以后会推出繁殖系统

![](http://pics.naaln.com/blog/2019-01-14-032443.jpg-basicBlog)

```
Items {
  TemplateId: "PLAYER_LEVEL_SETTINGS"
  PlayerLevel {
    RankNum: "\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001\001"
    RequiredExp: "\000\350\007\270\027\360.\220N\230u\210\244\001\340\332\001\240\231\002\310\337\002\330\255\003\350\373\003\370\311\004\210\230\005\240\215\006\300\251\007\340\305\010\200\342\t\250\245\013\320\350\014\240\357\017\230\271\024\270\306\032\200\227\"\360\252+\240\3676\340\221C\360\262R\320\332d\200\211z\240\313\230\001\300\215\267\001\360\360\344\001\260\365\241\002\200\233\356\002\340\341\311\003\340\352\303\004\200\266\334\005\300\303\223\007\200\332\304\t"
    CpMultiplier: "\022\203\300=4d*>\371\350\\>\275\355\202>\242\233\224>\230e\244>\001\314\262>\341\036\300>\025\224\314>\354Q\330>\376\336\342>\351\363\354>i\237\366>r\355\377>\356s\004?r\313\010?\300\000\r?\323\026\021?;\020\025?5\357\030?W\266\034?\264f ?\325\001$?\030\211\'?\271\375*?\323`.?f\2631?]\3664?\212*8?\261P;?v\336<?\374h>?W\360??\233tA?\331\365B?$tD?\215\357E?#hG?\370\335H?\032QJ?"
    MaxEggPlayerLevel: 20
    MaxEncounterPlayerLevel: 30
  }
```

10.三维公式，CP公式已经得出

![](http://pics.naaln.com/blog/2019-01-14-032445.jpg-basicBlog)

11.在捕捉精灵的时候，将精灵球在屏幕底端进行顺时针或逆时针旋转几圈之后，精灵球会开始转动，之后需要用弧线投法投出精灵球（顺时针从屏幕左侧投出，逆时针从屏幕右侧投出），应该对捕捉率有所提升

12.关于power up和等级的计算。

隐藏属性越高，每次power up所增加的CP值越高。每次power up等级增加0.5级。

一只CP值为该种精灵最小可能数字的精灵即为等级1。

想要计算自己的精灵等级，公式是将精灵最新的CP值除以power up所增加的CP值，再将结果除以2.

每power up 4次（等级提高2级）星尘（stardust）的消耗会增加，每power up 20次（等级提高10级）， 糖果使用量增加1.

训练师不能power up一只等级超过自己训练师等级的精灵。

> Powering up costs both Stardust and candies specific to that Pokémon type. When you power up, the Pokémon gains CP following a complicated formula, gaining more CP the better its hidden stats are.
> Whenever you power up a Pokémon, their level increases by 1/2. A Pokémon at the minimum possible CP is at level 1. To calculate a Pokémon's level, divide its current CP by how much CP you gain per power up, and then divide that again by 2.
> Every 2 levels (or 4 power ups), the Stardust cost of powering up increases. Every 10 levels (or 20 power ups), the candy cost of powering up increases by 1. Note that since level determines Stardust cost, it is possible for a lower CP Pokémon to cost more to upgrade since it can gain less CP per level and thus have a lower max CP cap.
> Don't forget, you cannot power up a Pokémon past your trainer level.

13.pokemon最大CP值列表已经被发布了，目前为止CP最大值最低的是鲤鱼王，262.70，最高的是超梦，4144.75（真的有人捉到过超梦吗？），第二高的是快龙，3500.06。

具体列表：[Pokemon | Pokemon Go](http://pokemongo.gamepress.gg/pokemon-list)

14.有人一直在好奇为什么自己的pokemon列表里面有的呈现蓝色背景，有的没有。甚至一度怀疑是否蓝色背景表示精英或稀有程度。事实上，蓝色背景表示，该只精灵是在过去24小时内被你所捕获的

> The blue glow that appears behind Pokémon in your storage mean that you caught it in the last 24 hours.

15.关于进化。
当一只精灵进化，它的基础数值会改变从而获得CP和HP的提升，但是该精灵的等级和个体值并不会改变。

> When a Pokémon evolves, its base stats change so the displayed HP and CP increase. However, its Pokémon level and IVs do not change, so if you had a naturally powerful basic Pokémon, its evolution will also be naturally powerful.

16.精灵拥有攻击，防御，耐力和个体值这几个隐藏属性。每种精灵都有自己的基础值，而个体值是在这个基础数值上面随机增加0~15.

> Pokémon have the following hidden core stats similar to the games:
> Attack
> Defense
> Stamina
> Each has a base value (predetermined by species) and anindividual value (IV) that is added on top of the base value andranges from 0-15. To have a truly maxed out Pokémon you need to acquire one with maxed out IVs.

17.每种精灵都拥有攻击，防御，耐力这几个属性，从而得到攻击，防御，生命，特攻，特防这几个属性（基于种类，即同类精灵的基础攻击，防御等等是相同的）

PS：修正：根据某些评论和贴吧的说法，应该是gen6的种族值，即HP, Atk, Def, SpA, SpD, Spe（血 物攻 物防 特攻 特防 速度）转化而来。也就是说不是由三个隐藏属性推导得到六个属性，而是从gen6的六个属性简化合并成PMG的三个隐藏属性。

```
Base Attack = 2.6 * (Atk^0.46)(SpAtk^0.46)(Sp^0.04) + 3
Base Defense = 2.6 * (Def^0.46)(SpDef^0.46)(Sp^0.04) + 3
Base Stamina = 2 * HP
```

举个例子，这是某只精灵的一段base stats的代码：

```
Stats {
      BaseStamina: 120
      BaseAttack: 144
      BaseDefense: 144
    }
```

再通过精灵本身不同的个体值和CP乘数，我们就可以得到该精灵的各项属性：

```
Attack = (Base Attack + Individual Attack) * Total_CP_Multiplier
Defense = (Base Defense + Individual Defense) * Total_CP_Multiplier
Stamina = (Base Stamina + Individual Stamina) * Total_CP_Multiplier
```

即：

耐力=(耐力种族+耐力个体值)*TCpM

攻击=(攻击种族+攻击个体值)*TCpM

防御=(攻击种族+防御个体值)*TCpM

18.CP乘数计算。

```
Total_CP_Multiplier = CP_Multiplier + Additional_CP_Multiplier
```

精灵的不同等级对应不同的CP乘数，CP乘数由先天乘数（CP_Multiplier）和后天乘数（ Additional_CP_Multiplier）相加而来。

当你第一次抓到某只精灵时，该精灵的先天乘数为其等级所对应的乘数，后天乘数为0.

后天乘数取决于你power up的次数。

乘数与等级对应列表：CP Multiplier

19.CP最大值的计算。

CP公式：

```
CP = (Attack * Defense^0.5 * Stamina^0.5 * Total_CP_Multiplier^2) / 10
```

最大CP推算公式：

```
Max CP = ((Base_Attack + 15) * ((Base_Defense + 15)^0.5 * (Base_Stamina + 15)^0.5 * 0.7903001^2) / 10
```

所以我们根据精灵等级，种族可以得到下列公式

```
Level Formula

1-10 (Attack * Defense^0.5 * Stamina^0.5 * 0.009426125469) / 10
11-20 (Attack * Defense^0.5 * Stamina^0.5 * 0.008919025675) / 10
21-30 (Attack * Defense^0.5 * Stamina^0.5 * 0.008924905903) / 10
31-40 (Attack * Defense^0.5 * Stamina^0.5 * 0.004459460790) / 10
```

20.关于身高和体重。

很多人在纠结身高和体重的问题，甚至为了刷一只双XL的精灵煞费苦心。但是目前从代码来看，身高体重似乎是给了一个随机值····也就是说这两个属性并没有什么卵用

21.关于捕捉时的反抗和跳跃行为。每个精灵都有自己的反抗和跳跃时长。

举个例子：

```
      MovementType: POKEMON_ENC_MOVEMENT_JUMP
      MovementTimerS: 8
      JumpTimeS: 1
      AttackTimerS: 23
```

随着抓的动物等级越来越高，我的NiaoPHD都排不上最强了……