---
title: effectiveC++_1让自己习惯C++
date: 2022-05-07 20:58:23
tags: 学习笔记
categories: C++
---

使用C++的时候必须先习惯C++的办事方式，本章就是最基础的一些东西

<!--more-->

# 视C++为一个语言联邦

如今的C++是一个多重范型编程语言，但是所有适当用法都有例外，这里有一个解决办法：

将C++视为一个由相关语言组成的联邦而非单一语言，在他某个次语言中，各种守则与通例都倾向简单、直观易懂、并且容易记住，总共有四个次语言：

- C

  说到底C++仍是以C为基础。区块（blocks)、语句(statements）、预处理器（ preprocessor)、内置数据类型(built-in data types）、数组（ arrays) 、指针( pointers）等统统来自C。许多时候C++对问题的解法其实不过就是较高级的C解法

- Object-Oriented C++

  Object-Oriented C++。这部分也就是C with Classes所诉求的: classes（包括构造函数和析构函数），封装( encapsulation）、继承（ inheritance）、多态( polymorphism) 、virtual 函数（动态绑定）……等等。这一部分是面向对象设计之古典守则在C++ 上的最直接实施。

- Template C++。

  这是C++的泛型编程（generic programming）部分，也是大多数程序员经验最少的部分。Template相关考虑与设计已经弥漫整个C++，良好编程守则中“惟template适用”的特殊条款并不罕见（例如条款46 谈到调用template functions 时如何协助类型转换）。实际上由于templates威力强大，它们带来崭新的编程范型（programming paradigm），也就是所谓的template metaprogramming (TMP，模板元编程)。条款48对此提供了一份概述，但除非你是template激进团队的中坚骨干，大可不必太担心这些。TMP相关规则很少与C++主流编程互相影响。

- STL

  STL。STL是个template程序库，看名称也知道，但它是非常特殊的一个。它对容器( containers)、迭代器(iterators)、算法( algorithms)以及函数对象( functionobjects）的规约有极佳的紧密配合与协调，然而templates 及程序库也可以其他想法建置出来

记住这四个次语言，当你从某个次语言切换到另一个，导致高效编程守则要求你改变策略时，不要感到惊讶。例如对内置（也就是C-like)类型而言pass-by-value通常比 pass-by-reference高效，但当你从C part of C++移往 Object-Oriented C++,由于用户自定义( user-defined )构造函数和析构函数的存在﹐pass-by-reference-to-const往往更好。

> C++高效编程守则视状况而变化，取决于你使用C++的哪一部分。

# 尽量以const、enum、inline替换#define

- 尽可能不要使用`#define ASPECT_RATIO 1.653`,因为该名称也许从未被编译器看到，如果关于该定义的语句报错了，可能只会出现1.653而不是ASPECT_RATIO，会浪费调试时间。

  所以我们一般使用`const double AspectRatio - 1.653;`

- 值得注意的是class专属常量，需要让他成为一个static成员：

```c++
class GamePlayer {
private:
	static const int NumTurns = 5;//常量声明式
	int scores [NumTurns] ; //使用该常量
};

```

enum这里新式编译器用不到了，这里不赘述

- inline：

使用define定义宏具有很多缺点

所以我们使用inline函数

```c++
template<typename T>
inline void callwithMax (const T& a, const T& b){
	f (a > b ? a : b) ;
}
```

> 对于单纯常量，最好以const对象或enums替换#define
>
> 对于形似函数的宏，最好改用inline函数替换#define































