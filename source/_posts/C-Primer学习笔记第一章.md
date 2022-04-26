---
title: C++Primer学习笔记第一部分
date: 2022-04-20 17:43:26
tags: 学习笔记
categories: C++
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

# 函数

- 使用引用，尽量避免拷贝
- 使用引用的参数，可以简单的使函数返回多个值

- 处理命令行选项

有时候需要给main函数传入实参，通过两个可选的参数传递给main。

`int main(int argc,char* argv[])` argv是一个数组，而argc表示数组中字符串的数量

需要注意的是，可选的argv[]从argv[1]开始

- 主函数main的返回值

main的返回值可以看做是状态指示器，返回0表示成功，其他值表示失败

- 重载和作用域

```C++
void print(double);
void print(const string& );

void fooBar(int ival){
    void print(int);//在作用域声明函数是一个不好的习惯
    print("hello");//错误
}
```

在C++中，名字查找发生在类型检查之前，一旦在当前作用域找到了所需的名字，编译器就会忽略掉外层作用域的同名实体。

# 类

> 只有当类没有声明任何构造函数的时候，编译器才会自动地生成默认构造函数

## 友元函数

> 既然sales_data的数据成员是private的，我们的read、print和 add 函数也就无法正常编译了,这是因为尽管这几个函数是类的接口的一部分,但它们不是类的成员。
> 类可以允许其他类或者函数访问它的非公有成员，方法是令其他类或者函数成为它的友元(friend)。如果类想把一个函数作为它的友元，只需要增加一条以friend关键字开始的函数声明语句即可:

```c++
class Sales_data {
//为sales_data的非成员函数所做的友元声明
friend sales_data add (const sales_data&,const sales_data&);
friend std::istream &read (std::istream&，Sales_data&);
friend std::ostream &print (std::ostream&,const Sales_data&) ;//其他成员及访问说明符与之前一致
private:
std::string bookNo;
unsigned units_sold = 0 ;
double revenue = 0.0 ;
};

```



> 封装的好处：
>
> 封装有两个重要的优点:
>
> - 确保用户代码不会无意间破坏封装对象的状态
> - 被封装的类的具体实现细节可以随时改变,而无须调整用户级别的代码。
>
> 一旦把数据成员定义成private 的，类的作者就可以比较自由地修改数据了。当实现部分改变时,我们只需要检查类的代码本身以确认这次改变有什么影响;换句话说,只要类的接口不变，用户代码就无须改变。如果数据是public的，则所有使用了原来数据成员的代码都可能失效,这时我们必须定位并重写所有依赖于老版本实现的代码,之后才能重新使用该程序。
> 把数据成员的访问权限设成private还有另外一个好处,这么做能防止由于用户的原因造成数据被破坏。如果我们发现有程序缺陷破坏了对象的状态，则可以在有限的范围内定位缺陷:因为只有实现部分的代码可能产生这样的错误。因此,将查错限制在有限范围内将能极大地降低维护代码及修正程序错误的难度。

## 返回*this 的成员函数

## 友元再探

window_mgr类的某些成员可能需要访问它管理的screen类的内部数据，需要Screen把window_mgr制定成它的友元。

```c++
class screen {
// window_mgr的成员可以访问Screen类的私有部分
    friend class window_mgr;
// screen类的剩余部分
};
```

每个类负责控制自己的友元类和友元函数，不具有传递性

## 构造函数初始值

有时我们可以忽略数据成员初始化和赋值之间的差异，但并非总能这样。如果成员是const或者是引用的话，必须将其初始化。类似的，当成员属于某种类类型且该类没有定义默认构造函数时，也必须将这个成员初始化。例如:

```c++
class ConstRef {
public:
	ConstRef (int ii) ;
private:
	int i;
	const int ci;
	int &ri;
};


//错误:ci和ri必须被初始化
ConstRef::ConstRef (int ii){
//赋值:
i = ii ;
//正确
ci = ii;
//错误:不能给const赋值
ri = i;
//错误:ri没被初始化
}

//正确：
constRef : : ConstRef(int ii) : i(ii), ci(ii), ri(i){ }

```

> 成员初始化的顺序和他们在类定义中的出现顺序一致

## 类的静态成员

我们通过在成员的声明之前加上关键字static使得其与类关联在一起。和其他成员一样，静态成员可以是public的或private的。静态数据成员的类型可以是常量、引用、指针、类类型等。

我们使用作用域运算符直接访问静态成员:

```c++
double r;
r= Account : : rate() ;//使用作用域运算符访问静态成员
```

虽然静态成员不属于类的某个对象，但是我们仍然可以使用类的对象、引用或者指针来访问静态成员:

```C++
Account ac1;
Account *ac2 = &acl;
//调用静态成员函数rate的等价形式
r = ac1.rate() ;
//通过Account的对象或引用
r = ac2->rate () ;
//通过指向Account对象的指针
```

和其他的成员函数一样，我们既可以在类的内部也可以在类的外部定义静态成员函数。**当在类的外部定义静态成员时，不能重复static关键字，该关键字只出现在类内部的声明语句**:

```c++
void Account : :rate (double newRate){
interestRate = newRate ;
}
```

















