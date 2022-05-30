---
title: C++指针和内存的关系
date: 2022-05-24 13:42:43
tags: 学习笔记
categories: C++
---

<!--more-->

- 字符指针变量取地址输出的方法

  将（void*)指针放在字符指针前面，如果没有的话默认输出字符

```c++
char ch = 'a';
char* addr = &ch;
cout<<(void*)addr;
```



- 空指针

  空指针又称野指针，很危险。因为地址和值都是不可控的，因此有可能访问甚至修改计算机核心地址，所以我们一般都会使用nullptr



- 特殊指针void*

  可以存放任意对象的地址

  

- 任何类型的指针变量地址都只占四个字节

```cpp
int main()
{
    double score[] {11, 22, 33, 44 ,55};
    double *ptr_score = score;
    cout << sizeof(score) << '\t' << sizeof(ptr_score) << endl;
}
```

打印结果为40	4

原因是`sizeof`函数下，数组名不再代表数组的首地址，而是代表数组的类型double[]，这里中括号里面的数字有五个，一个double占据八个字节



- 指针变量和数组的操作

```cpp
int main()
{
    double score[] {11, 22, 33, 44 ,55};
    double *ptr_score = score;
    cout << *++score;
}
```

上述表达可以隐含得出：(数组名+i )和 &数组[i+1] 的结果（地址）输出是一样的

再次引申得出：数组[i] 和 *(数组名+i)的值相同

```cpp
int main()
{
    double score[]{ 11, 22, 33, 44 ,55 };
    double* ptr_score = score;
    cout << &(score[1]) << '\t' << score + 1;
    cout << score[1] << '\t' << *(score + 1);
}
```

输出的两组信息分别都是一样的

该行代码` cout << *++score;`将会报错`error: lvalue required as increment operand`

原因是不能在数组名前面使用++，但是可以这么写：`cout << *++ptr_score ;`



- 指针的运算

  指针的运算只限定在p++和p--

  移动的距离和指针类型是有关系的

  ```cpp
  int num = 8
  int* p = &num
  ```

  此时`p++`移动四个字节

  

- 定义的变量名、数组名、指针名都在栈区，右边赋的值在常量区（静态区）

  由new定义的在堆区

  >- 栈区（stack）
  >
  >  由编译器自动分配释放，一般存放函数的参数值、局部变量的值等
  >
  >- 堆区（heap）
  >
  >  一般由程序员分配释放，若程序不释放，程序结束的时候可能被操作系统回收
  >
  >  和数据结构中的堆是两回事，分配方式类似链表
  >
  >- 全局区(static)
  >
  >  全局变量和静态变量存储在一起
  >
  >  程序结束后由系统释放
  >
  >- 文字常量区
  >
  >  常量字符串存放在此处，程序结束由系统释放
  >
  >- 程序代码区
  >
  >  存放函数体的二进制代码































