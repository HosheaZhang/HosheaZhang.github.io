---
title: 侯捷STL标准库和泛型编程
date: 2022-04-16 18:50:07
tags: 学习笔记
categories: C++
---

# Standard Template Library

标准模板库

<!--more-->

# STL六大部件

- 容器
- 分配器
- 算法
- 迭代器
- 适配器
- 仿函式

{% asset_img 1.png %}

{% asset_img 2.png %}

这里allocator（分配器）一般都会用到默认值

- 前闭后开区间

  标准库规定，begin指向容器的起点，end指向容器终点的下一个位置

- range-based for statement

```c++
for ( decl : coll ){
	statement
}
```

- auto keyword

# 容器之分类与各种测试

# 分配器及其测试

#  面向对象编程和泛型编程

