---
title: C++-Primer学习笔记第二章
date: 2022-04-27 00:12:33
tags: 学习笔记
categories: C++
---

这一章学习C++标准库部分，主要分为五个章节：IO库、顺序容器、泛型算法、关联容器和动态内存。

<!--more-->

# IO库

介绍一下大部分的IO设施：

- istream(输入流)类型
- ostream(输出流类型)
- cin，一个istream对象，从标准输入读取数据
- cout，一个ostream对象，从标准输出写入数据
- cerr，一个ostream对象，通常用于输出程序错误消息
- '>>', 用来从一个istream对象读取输入数据
- '<<'，用来向一个ostream对象写入输出数据
- getline函数，从一个给定的istream读取一行数据，存入一个给定的string对象中

## IO类

{% asset_img 1.png %}

> 一个流一旦发生错误，其上后续的IO操作都会失败。只有当一个流处于无错状态时,我们才可以从它读取数据，向它写入数据。由于流可能处于错误状态，因此代码通常应该在使用一个流之前检查它是否处于良好状态。确定一个流对象的状态的最简单的方法是将它当作一个条件来使用:

```c++
while (cin >>word)
// ok:读操作成功………
```

# 顺序容器

> 确定使用哪种顺序容器
>
> - 除非你有很好的理由选择其他容器，否则应使用vector。
> - 如果你的程序有很多小的元素，且空间的额外开销很重要，则不要使用list或forward_list。
> - 如果程序要求随机访问元素，应使用vector 或deque。
> - 如果程序要求在容器的中间插入或删除元素，应使用list或forward_list。
> - 如果程序需要在头尾位置插入或删除元素，但不会在中间位置进行插入或删除操作，则使用deque。

{% asset_img 2.png %}

{% asset_img 3.png %}

## 迭代器

一个迭代器范围（iterator range）由一对迭代器表示，两个迭代器分别指向同一个容器中的元素或者是尾元素之后的位置（one past the last element)。这两个迭代器通常被称为begin和 end，或者是first和last(可能有些误导)，它们标记了容器中元素的一个范围。

表示范围自 begin开始，于end之前结束。迭代器begin和end必须指向相同的容器。end可以与begin指向相同的位置，但不能指向begin之前的位置。

```c++
list<string> : :iterator it5 = a.begin ( );
//显式指定类型
```



> 反向迭代器

反向遍历容器的迭代器，执行++操作会得到上一个元素

> 拷贝元素

```c++
//拷贝元素，直到(但不包括)it指向的元素
deque<string> authList (authors.begin (), it);
```

> 列表初始化

```c++
list<string> authors = { "Milton"，"Shakespeare","Austen"};
vector<const char*> articles = { "a","an","the" } ;
```

> 使用swap

```c++
vector<string> svec1 (10); // 10个元素的vector
vector<string> svec2 (24);// 24个元素的vector
swap (svec1, svec2) ;
```

调用swap后，svec1将包含24个string元素，svec2将包含10个string

- 向顺序容器添加元素

{% asset_img 4.png %}

- 访问元素

```c++
//在解引用一个迭代器或调用front或back之前检查是否有元素
if (!c.empty()){
// val和val2是c中第一个元素值的拷贝
auto val = *c.begin(), val2=c.front();
// val3和val4是c中最后一个元素值的拷贝
auto last = c.end ();
auto val3 = *(--last);
//不能递减forward_list迭代器
auto val4 = c.back(); // forward_list不支持
}
```

- 删除元素

  {% asset_img 5.png %}

> **管理迭代器**
>
> 当你使用迭代器(或指向容器元素的引用或指针）时,最小化要求迭代器必须保持有效的程序片段是一个好的方法。
> 由于向迭代器添加元素和从迭代器删除元素的代码可能会使迭代器失效，因此必须保证每次改变容器的操作之后都正确地重新定位迭代器。这个建议对vector,string和deque尤为重要。





























