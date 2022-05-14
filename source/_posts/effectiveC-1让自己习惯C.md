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

# 尽可能使用const

const允许你指定一个语义约束（也就是指定一个“不该被改动”的对象），而编译器会强制实施这项约束。它允许你告诉编译器和其他程序员某值应该保持不变。只要这（某值保持不变）是事实，你就该确实说出来。



- const语法虽然变化多端，但并不莫测高深。如果关键字const出现在星号左边，表示被指物是常量;如果出现在星号右边，表示指针自身是常量;如果出现在星号两边，表示被指物和指针两者都是常量。

- 如果被指物是常量，有些程序员会将关键字const 写在类型之前，有些人会把它写在类型之后、星号之前。两种写法的意义相同，所以下列两个函数接受的参数类型是一样的:

  ```c++
  void f1 (const widget* pw) ; //f1获得一个指针，指向一个常量的（不变的）widget对象.
  void f2(widget const * pw) ; //f2也是
  ```

  令函数返回一个常量值，往往可以降低因客户错误而造成的意外，而又不至于放弃安全性和高效性。举个例子，考虑有理数（rational numbers，详见条款24）的operator*声明式:

```c++
class Rational {};
const Rational operator*(const Rational& lhs,const Rational& rhs);
```

其实是为了降低客户错误操作的意外可能

```c++
Rational a, b,c;
(a * b) = c;
//在a * b的成果上调用operator=
```

> - 将某些东西声明为const可帮助编译器侦测出错误用法。const可被施加于任何作用域内的对象、函数参数、函数返回类型、成员函数本体。
>
> - 编译器强制实施bitwise constness,但你编写程序时应该使用“概念上的常量性”( conceptual constness)。
> - 当const和non-const成员函数有着实质等价的实现时，令non-const版本调用const版本可避免代码重复。

# 确定对象被使用前已先被初始化

读取未初始化的值会导致不明确的行为。在某些平台上，仅仅只是读取未初始化的值，就可能让你的程序终止运行。更可能的情况是读入一些“半随机”bits，污染了正在进行读取动作的那个对象，最终导致不可测知的程序行为，以及许多令人不愉快的调试过程。

既然看上去这是一个无法决定的状态，那么我们可以在使用对象之前先将它初始化

对int、指针都可以进行初始化，区别赋值和初始化，我们尽可能进行初始化，比如类构造函数中的member initialization list





> - 为内置型对象进行手工初始化，因为C++不保证初始化它们。
> - 构造函数最好使用成员初值列(member initialization list)，而不要在构造函数本体内使用赋值操作( assignment)。初值列列出的成员变量，其排列次序应该和它们在class中的声明**次序相同**。
> - 为免除“跨编译单元之初始化次序”问题，请以 local static对象替换non-localstatic对象。(这句话没看懂)













