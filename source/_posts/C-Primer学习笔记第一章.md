---
title: C++Primer学习笔记第一部分
date: 2022-04-20 17:43:26
tags: C++
categories: 学习笔记
---

从第一章最基础的开始看 不能眼高手低

学习笔记内容只记录不太熟悉的部分，不会全面的记录学习内容

<!--more-->

# C++基础

## 开始

## 初识输入输出

- 标准输入输出对象

>cout：标准输出
>
>cin：标准输入
>
>cerr：标准错误
>
>clog：输出一般性信息

- 向流写入数据

><<为输出运算符，他接受两个运算对象，左边是一个ostream对象，右边是要打印的值，计算结果是我们写入给定值的那个ostream对象.

```C++
str::cout<<"enter the numbers:"<<std::endl;
等价于：
(str::cout<<"enter the numbers:")<<std::endl;
```

### 控制流

- 读取数量不定的输入数据

```c++
int sum = 0, value = 0;
while(std::cin>>value)
    sum+=value;
```

> 当我们使用一个istream对象作为条件时，效果就是检测流的状态。如果流是有效的，则监测成功，如果遇到**文件结束符**或者无效输入（不为一个整数），istream的状态就会无效，使得条件为假。
>
> windows中为ctrl+z

### 类简介

> 编译器一般不关注头文件名形式、

## 变量和基本类型

### 变量

- 作用域

```c++
int reused = 1;
int main(){
    cout<<reused<<endl; //1
    int reused = 0;
    cout<<reused<<endl;//0
    cout<<::reused<<endl;//1
    return 0;
}
```

> 如果函数有可能用到某个全局变量，不适合定义一个同名的局部变量

## 复合类型

### 引用

> 引用必须被初始化

### 指针

```c++
int ival = 42;
int* p = &ival;
```

### const

> 默认状态下，const对象仅在文件内有效，解决的办法是，对于const变量不管是声明还是定义都添加extern关键字，这样只需要定义一次就可以了

```c++
extern const int bufSize = fcn(); //file1.cc
extern const int bufSize;//file1.h 和上一行是同一个
```

> 如果想在多个文件之间共享const对象，必须在变量的定义之前添加extern关键字



### 处理类型

- typedef

> typedef double wages

- using

> using SI = Sales_item

- decltype

> decltype(f()) sum = x;

这里用f（）的类型去定义sum 

## 自定义数据结构

### 头文件

- 预处理器

> 头文件保护符：

## 字符串、向量和数组

### 命名空间的using声明

> 头文件一般不适合使用using声明，否则每个使用该头文件的文件都会有这个声明，会出现冲突

### 字符串

```c++
string c；

isalnum(c); //是字母或数字为真
isalpha(c);
isdigit(c);
isupper(c);
islower(c);
ispunct(c);
tolower(c);
toupper(c);
```

> 更建议使用c字开头C++版本的标准库头文件替代c语言头文件

### 迭代器

```c++
*iter
iter->item (==) *iter.item
++iter
--iter
iter1==iter2
iter1!=iter2
```

> const_iterator
>
> 只能读不能写，如果容器的类型为const，那么只能使用const_iterator

### 数组

> 数组也存在begin和end函数，但是由于他不是类类型，所以只能将数组作为它们的参数：
>
> ```c++
> int ia[] = {0,1,2};
> int* beg = begin(ia);
> int* last = end(ia);
> ```

# 表达式

## 显式转换

```c++
cast_name<type>(expression);

其中cast_name有四种：
static_cast/dynamic_cast/const_cast/reinterpret_cast
```

> - static_cast
>
> 任何具有明确定义的类型转换，只要不包含const都可以用
>
> -  const_cast
>
> 将常量对象转换成非常量对象的行为
>
> - reinterpret_cast
>
> 比较复杂，这里不多解释

# 语句

















































