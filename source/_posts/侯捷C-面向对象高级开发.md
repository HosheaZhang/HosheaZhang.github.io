---
title: 侯捷C++——面向对象高级开发上
date: 2022-04-12 21:08:27
tags: 学习笔记
categories: C++
---

看视频的时候做的笔记，也许没什么逻辑，只是记录一些思考

<!--more-->

# C++编程简介

略

# 头文件和类的声明

- 代码基本形式

{% asset_img 1.png %}

- .h的防御性声明

{% asset_img 2.png %}

为什么要写这个东西：很多程序都会用到这个头文件，只需要第一次include就可以了，后面再include的时候就不会进来了

- 头文件的布局

{% asset_img 3.png %}

# 构造函数

``` C++
complex (double r = 0,double i =o)
: re (r) , im (i)
{ }
```

这是一个构造函数特有的赋值写法，这么写效率更好

# 参数传递和返回值

``` c++
double real() const{return re;}
```

- 类里面的函数 包括改变数据内容和不改变数据内容的 如果不改变数据内容，那就在后面加一个const，如上。

{% asset_img 4.png %} 

遇到这种情况时，程序就会报错。

- 参数传递尽量都用引用，如果不想让他改，可以在前面加const

- 返回值也尽量传引用

# 运算符重载

{% asset_img 5.png %}

任何成员函数都会有一个隐藏参数this，这个this是一个隐藏参数，实际写代码的时候不会用到，即调用这个函数的调用者 this是一个指针

这个函数为了可以连加，所以这个函数类型是complex类型，不需要连加的话 只需要void就可以了

{% asset_img 6.png %}

观察这个函数，参数ths是指针，返回的是value（不是指针），然后函数声明是引用，这样可以吗？

答案是可以的，因为传递者无需知道接受者是以reference形式接收

{% asset_img 7.png %}

可以发现的是，这里不能返回引用，因为他只能返回一个local object，如果函数体死亡了，这个引用也就没了。

{% asset_img 8.png %}

<<这种运算符重载只能写成**全局的函数**，不能写成成员函数

输出的东西，都在改变“os”的状态，所以不能带const，如果要实现连串的输出，那就设置函数类型为ostream

# 复习complex类的实现过程

略

# 三大函数：拷贝构造，拷贝赋值，析构

如果一个类带着指针，不能使用编译器给的拷贝构造和拷贝赋值函数



# 堆、栈、内存管理

{% asset_img 9.png %}

用new取得的内存，对象，需要手动的delete掉

{% asset_img 10.png %}

以上出现内存泄漏(memory leak) ,因为当作用域结束﹐p所指的heapobject仍然存在﹐但指针p的生命域结束了﹐作用域之外再也看不到p(也就没机会 delete p)

# 复习string类的实现过程

略

# 类模板、函数模板、及其他

{% asset_img 11.png %}

如图 静态函数只能操作静态数据

静态数需要写出第五行的东西 

- 单例：

{% asset_img 12.png %}

注意到，构造函数都写在private里面，而且里面自己声明了一个类

外界怎么取呢？ 可以看到getinstance函数，外界用右下角的函数来调用其他函数

也可以这么写

{% asset_img 13.png %}

- 类模板
- namespace

# 组合和继承

- 组合

构造由内而外，析构由外而内

- 委托

左边提供方法，右边具体实现

{% asset_img 14.png %}

- 继承

# 虚函数和多态

non-virtual函敷︰你不希望derived class重新定义(override,覆盖)它.
virtual函数∶你希望derived class重新定义(override,覆盖)它﹐且你对它已有默认定义。
pure virtual 函数∶你希望derived class一定要重新定义(override覆盖)它﹐你对它没有默认定义。

# 委托相关设计

