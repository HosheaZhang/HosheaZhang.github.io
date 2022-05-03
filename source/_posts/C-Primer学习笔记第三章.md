---
title: C-Primer学习笔记第三章
date: 2022-04-30 10:16:07
tags: 学习笔记
categories: C++
---

<!--more-->

# 拷贝控制

​	当定义一个类时，我们显式地或隐式地指定在此类型的对象拷贝、移动、赋值和销毁时做什么。一个类通过定义五种特殊的成员函数来控制这些操作，包括:拷贝构造函数( copy constructor)、拷贝赋值运算符（ copy-assignment operator)、移动构造函数( move constructor)、移动赋值运算符(move-assignment operator）和析构函数(destructor)。拷贝和移动构造函数定义了当用同类型的另一个对象初始化本对象时做什么。拷贝和移动赋值运算符定义了将一个对象赋予同类型的另一个对象时做什么。析构函数定义了当此类型对象销毁时做什么。我们称这些操作为拷贝控制操作（(copy control)。

## 拷贝、赋值与销毁

> 拷贝初始化不仅在我们用=定义变量时会发生，在下列情况下也会发生
>
> - 将一个对象作为实参传递给一个非引用类型的形参
> - 从一个返回类型为非引用类型的函数返回一个对象
> - 用花括号列表初始化一个数组中的元素或一个聚合类中的成员

>在函数调用过程中，具有非引用类型的参数要进行拷贝初始化。类似的，当一个函数具有非引用的返回类型时，返回值会被用来初始化调用方的结果。

## 拷贝重载运算符

重载运算符的参数表示运算符的运算对象。某些运算符，包括赋值运算符，必须定义为成员函数。如果一个运算符是一个成员函数，其左侧运算对象就绑定到隐式的this参数。对于一个二元运算符，例如赋值运算符，其右侧运算对象作为显式参数传递。

```c++
class Foo {
public:
    	Foo& operator=(const Foo&);
};
```

为了与内置类型的赋值保持一致，**赋值运算符通常返回一个指向其左侧运算对象的引用**。

## 析构函数

> 什么时候会调用析构函数

- 变量在离开其作用域时被销毁。
- 当一个对象被销毁时，其成员被销毁。
- 容器（无论是标准库容器还是数组）被销毁时，其元素被销毁。
- 对于动态分配的对象,当对指向它的指针应用delete运算符时被销毁(参见12.1.2节，第409页)。
- 对于临时对象，当创建它的完整表达式结束时被销毁。

> 如果一个类需要自定义析构函数,几乎可以肯定它也需要自定义烤贝赋值运算符和拷贝构造函数。

### 使用=default

```c++
class sales_ data {public:
//拷贝控制成员;使用default
Sales_data() = default;
Sales_data(const Sales_data&) = default;
Sales_data& operator= (const sales_data &) ;
~Sales_data() = default;
//其他成员的定义，如前
Sales_data& Sales_data: :operator=(const Sales_data&) = default;
```

### 右值引用

# 重载运算与类型转换

如果没有重载运算符，那么有些时候加法代码就显得很冗长：

```c++
print(cout,add(data1,data2));
```

## 基本概念

- 重载的运算符是具有特殊名字的函数，他们的名字由关键字operator和其后要定义的运算符号共同组成。
- 重载运算符函数的参数数量与该运算符作用的运算对象数量一样多。一元运算符有一个参数，二元运算符有两个。
- 对于二元运算符来说，左侧运算对象传递给第一个参数，右侧运算对象传递给第二个参数，如果一个运算符函数是成员函数，那么他的第一个运算对象绑定到隐式的this指针上，因此成员运算符函数参数数量显式地比运算符的运算对象少一个。

- 我们只能重载已有的运算符，无权发明新的运算符号

{% asset_img 1.png %}

> 直接调用一个重载的运算符

```c++
// 一个重载的运算符函数
data1 + data2
operator+(data1,data2);

//成员运算符函数
data1+=data2;
data1.operator+=(data2);
//这两个写法都调用了成员函数+=，将this绑定到data1的地址，将data2作为实参传入参数
```

## 输入和输出运算符

通常情况下，输出运算符的第一个形参是一个非常量ostream对象的引用，之所以ostream是非常量是因为向流写入内容会改变其状态，而该形参是引用是因为我们无法直接复制一个ostream对象

第二个形参一般来说是一个常量的引用，该常量是我们想要打印的类类型，第二个是引用的原因是我们希望避免复制实参。

为了与其他输出运算符保持一致，operator<<一般要返回它的ostream形参

- 输入输出运算符必须是非成员函数

否则他们的左侧运算对象将是我们的类的一个对象，所以我们一般都将io运算符声明为友元

## 算术和关系运算符

## 类型转换

要想正确地设计类的重载运算符、转换构造函数及类型转换函数，必须加倍小心。尤其是当类同时定义了类型转换运算符及重载运算符时特别容易产生二义性。以下的经验规则可能对你有所帮助:

- 不要令两个类执行相同的类型转换:如果Foo类有一个接受Bar类对象的构造函数，则不要在Bar类中再定义转换目标是Foo类的类型转换运算符。
- 避免转换目标是内置算术类型的类型转换。特别是当你已经定义了一个转换成算术类型的类型转换时,接下来
  - 不要再定义接受算术类型的重载运算符。如果用户需要使用这样的运算符,则类型转换操作将转换你的类型的对象,然后使用内置的运算符。
  - 不要定义转换到多种算术类型的类型转换。让标准类型转换完成向其他算术类型转换的工作。

一言以蔽之:除了显式地向bool类型的转换之外，我们应该尽量避免定义类型转换函数并尽可能地限制那些“显然正确”的非显式构造函数。

# 面向对象程序设计

继承和动态绑定对程序的编写有两方面的影响:一是我们可以更容易地定义与其他类相似但不完全相同的新类:二是在使用这些彼此相似的类编写程序时,我们可以在一定程度上忽略掉它们的区别。

## OOP：概述

- 继承

通过继承（inheritance）联系在一起的类构成一种层次关系。通常在层次关系的根部有一个基类(base class)，其他类则直接或间接地从基类继承而来，这些继承得到的类称为派生类( derived class)。基类负责定义在层次关系中所有类共同拥有的成员，而每个派生类定义各自特有的成员。

在C++语言中，基类将类型相关的函数与派生类不做改变直接继承的函数区分对待。对于某些函数，基类希望它的派生类各自定义适合自身的版本，此时基类就将这些函数声明成虚函数（ virtual function)。

因此，我们可以将Quote类编写成:

```c++
class Quote {
public:
	std:: string isbn() const;
	virtual double net_price(std:: size_t n) const;
};
```

派生类必须通过使用类派生列表（class derivation list）明确指出它是从哪个（哪些）基类继承而来的。类派生列表的形式是:首先是一个冒号，后面紧跟以逗号分隔的基类列表，其中每个基类前面可以有访问说明符:

```c++
class Bulk _quote : public Quote {
//Bulk_quote继承了Quote
public:
	double net_price (std:: size_t) const override;
};
```

派生类必须在其内部对所有重新定义的虚函数进行声明。派生类可以在这样的函数之前加上virtual关键字，但是并不是非得这么做。C++11新标准允许派生类显式地注明它将使用哪个成员函数改写基类的虚函数，具体措施是在该函数的形参列表之后增加一个override关键字。

- 动态绑定

通过使用动态绑定（ dynamic binding)，我们能用同一段代码分别处理 Quote和Bulk_quote的对象。例如，当要购买的书籍和购买的数量都已知时，下面的函数负责打印总的费用:

```c++
//计算并打印销售给定数量的某种书籍所得的费用
double print_total(ostream &os,const Quote &item,size_t n){
//根据传入item形参的对象类型调用Quote::net_price
//或者Bulk_quote::net_price
	double ret = item.net_price (n) ;
	os<<"ISBN : "<< item.isbn ()    //调用Quote::isbn
	<<"# sold: " <<n<<" total due: " << ret << endl;
    return ret;
}
```

> 第五行中，item类型是Quote，所以调用的也是Quote的版本。函数的运行版本由实参决定，即在运行时选择函数的版本，所以动态绑定有时又被称为运行时绑定(run-time binding)。

## 定义基类和派生类

- 基类

```c++
class Quote {
public:
	Quote() =default;
	//关于=default请参见7.1.4节（第237页)
	Quote(const std: :string sbook,double sales_price)
        :bookNo (book) , price (sales _price) { }
	std: :string isbn () const { return bookNo; }
	//返回给定数量的书籍的销售总额
	//派生类负责改写并使用不同的折扣计算算法
	virtual double net_price(std : :size_t n)const{ return n * price; }
	virtual ~Quote () = default;
    //对析构函数进行动态绑定
private:
	std: :string bookNo ;//书籍的ISBN编号
protected:
	double price = 0.0 ;//代表普通状态下不打折的价格
};
```

> 基类通常都应该定义一个虚析构函数,即使该函数不执行任何实际操作也是如此。

- 访问控制与继承

派生类可以继承定义在基类中的成员，但是派生类的成员函数不一定有权访问从基类继承而来的成员。和其他使用基类的代码一样，派生类能访问公有成员，而不能访问私有成员。不过在某些时候基类中还有这样一种成员，基类希望**它的派生类有权访问该成员，同时禁止其他用户访问**。我们用受保护的( protected）访问运算符说明这样的成员。

- 派生类

```c++
class Bulk_quote : public Quote {   //Bulk_quote继承自Quote
public:
	Bulk_quote()= default;
	Bulk_quote (const std: :string&,double，std: :size_t,double);
    //覆盖基类的函数版本以实现基于大量购买的折扣政策
	double net_price(std: :size_t) const override;
private:
	std::size_t min_qty =0; //适用折扣政策的最低购买量
	double discount = 0.0 ; //以小数表示的折扣额
};
```

如果一个派生是公有的，则基类的公有成员也是派生类接口的组成部分。此外，我们能将公有派生类型的对象绑定到基类的引用或指针上。因为我们在派生列表中使用了public，所以 Bulk_quote 的接口隐式地包含isbn函数，同时在任何需要Quote的引用或指针的地方我们都能使用Bulk_quote的对象。

派生类可以在它覆盖的函数前使用virtual关键字，但不是非得这么做。C++11新标准允许派生类显式地注明它使用某个成员函数覆盖了它继承的虚函数。具体做法是在形参列表后面、或者在 const成员函数的const关键字后面、或者在引用成员函数的引用限定符后面添加一个关键字override。

- 派生类构造函数

尽管在派生类对象中含有从基类继承而来的成员，但是派生类并不能直接初始化这些成员。和其他创建了基类对象的代码一样，派生类也必须使用基类的构造函数来初始化它的基类部分。

```c++
Bulk_quote(const std: : string& book, double p,std::size_t qty,double disc) :
	Quote (book, p) , min_qty(qty) , discount (disc) {}
//与之前一致
```

该函数将它的前两个参数(分别表示ISBN和价格)传递给Quote 的构造函数，由Quote的构造函数负责初始化Bulk_quote的基类部分（即 bookNo 成员和price 成员)。当(空的）Quote构造函数体结束后，我们构建的对象的基类部分也就完成初始化了。接下来初始化由派生类直接定义的min_gty成员和discount成员。最后运行Bulk_quote构造函数的(空的）函数体。

- 派生类使用基类的成员

派生类可以访问基类的公有成员和受保护成员

每个类都会继承直接基类的所有成员。对于一个最终的派生类来说，它会继承其直接基类的成员;该直接基类的成员又含有其基类的成员;依此类推直至继承链的顶端。因此，最终的派生类将包含它的直接基类的子对象以及每个间接基类的子对象。

## 虚函数

- 派生类中的虚函数

一个派生类的函数如果覆盖了某个继承而来的虚函数，则它的形参类型必须与被它覆盖的基类函数完全一致。同样，派生类中虚函数的返回类型也必须与基类函数匹配。该规则存在一个例外，当类的虚函数返回类型是类本身的指针或引用时，上述规则无效。也就是说，如果D由B派生得到，则基类的虚函数可以返回B* 而派生类的对应函数可以返回D*，只不过这样的返回类型要求从D到B的类型转换是可访问的。

```c++
struct B{
	virtual void f1 (int) const;
    virtual void f2();
	void f3();
};
struct D1 : B{
	void f1(int) const override;//正确:f1与基类中的f1匹配
	void f2 (int) override;//错误:B没有形如f2(int)的函数
	void f3() override;//错误:f3不是虚函数
	void f4 () override;//错误:B没有名为f4的函数
};

```

- 纯虚函数

我们可以将net_price定义成纯虚（pure virtual）函数从而令程序实现我们的设计意图，这样做可以清晰明了地告诉用户当前这个net_price函数是没有实际意义的。和普通的虚函数不一样，一个纯虚函数无须定义。我们通过在函数体的位置（即在声明语句的分号之前）书写=0就可以将一个虚函数说明为纯虚函数。其中，=O只能出现在类内部的虚函数声明语句处:

```c++
//用于保存折扣值和购买量的类，派生类使用这些数据可以实现不同的价格策略
class Disc_quote : public Quote {
public:
	Disc_quote( = default;
	Disc_quote(const std: :string& book,double price,std: : size_t qty, double disc):
		Quote ( book,price) ,quantity(qty), discount (disc){ }
	double net price(std: : size_t)const = 0 ;
protected:
	std: : size_t quantity = 0;
	//折扣适用的购买量
	double discount = 0.0;
	//表示折扣的小数值
};

```

含有(或者未经覆盖直接继承）纯虚函数的类是抽象基类( abstract base class)。抽象基类负责定义接口，而后续的其他类可以覆盖该接口。我们不能（直接〉创建一个抽象基类的对象。因为 Disc_quote 将 net_price定义成了纯虚函数，所以我们不能定义Disc_quote的对象。我们可以定义Disc_quote的派生类的对象，前提是这些类覆盖了net _price函数:

> 派生类构造函数只初始化它的直接基类

## 访问控制与继承

- 和私有成员类似，受保护的成员对于类的用户来说是不可访问的。
- 和公有成员类似，受保护的成员对于派生类的成员和友元来说是可访问的。
- 派生类的成员或友元只能通过派生类对象来访问基类的受保护成员。派生类对于一个基类对象中的受保护成员没有任何访问特权。

为了理解最后一个例子，这里举了一个例子：

```c++
class Base{
protected:
	int prot_mem;// protected成员
};
class Sneaky : public Base {
	friend void clobber (Sneaky&); //能访问Sneaky::prot_mem
	friend void clobber(Base&); //不能访问Base : :prot_mem
	int j; //j默认是private
};
//正确:clobber能访问Sneaky对象的private和protected成员
void clobber (Sneaky &s) { s.j = s.prot_mem = 0; }
//错误:clobber 不能访问Base的 protected成员
void clobber(Base &b) { b.prot_mem = 0; }
```

> 即派生类的成员和友元只能访问派生类对象中的基类部分的受保护成员;对于普通的基类对象中的成员不具有特殊的访问权限。

- 公有、私有和受保护继承

某个类对其继承而来的成员的访问权限受到两个因素影响:一是在基类中该成员的访问说明符，二是在派生类的派生列表中的访问说明符。

```c++
class Base {
public:
	void pub_mem () ;// public成员
protected :
	int prot_mem; //protected成员
private:
	char priv_mem; //private成员
};
struct Pub_Derv : public Base {
	//正确:派生类能访问protected成员
    int f() { return prot_mem;}
	//错误: private成员对于派生类来说是不可访问的
    char g() { return priv_mem;}
} ;
struct Priv_Derv : private Base {
	// private不影响派生类的访问权限
	int f1() const { return prot_mem;}
};

//用户
Pub_Derv dl; //继承自 Base的成员是public的
Priv_Derv d2 ; //继承自 Base的成员是private 的
dl.pub_mem () ; //正确:pub mem在派生类中是public的
d2.pub_mem () ; //错误:pub mem在派生类中是private的

```

## 继承中的类作用域

每个类定义自己的作用域，在这个作用域内我们定义类的成员。当存在继承关系时，派生类的作用域嵌套在其基类的作用域之内。如果一个名字在派生类的作用域内无法正确解析，则编译器将继续在外层的基类作用域中寻找该名字的定义。

```c++
Bulk_quote bulk;
cout <<bulk.isbn ( ) ;
```

- 因为我们是通过Bulk_quote的对象调用isbn的，所以首先在Bulk_quote中查找，这一步没有找到名字isbn
- 因为Bulk_quote是 Disc_quote的派生类，所以接下来在 Disc_quote中查找，仍然找不到。
- 因为 Disc_quote是 Quote的派生类，所以接着查找Quote;此时找到了名字isbn，所以我们使用的isbn最终被解析为Quote中的isbn。

- 名字如果冲突，派生类的成员将隐藏同名的基类成员

# 模板与泛型编程

面向对象编程（OOP)和泛型编程都能处理在编写程序时不知道类型的情况。不同之处在于:OOP能处理类型在程序运行之前都未知的情况;而在泛型编程中，在编译时就能获知类型了。

## 定义模板

模板定义以关键字template开始，后跟一个模板参数列表(template parameter list)，这是一个逗号分隔的一个或多个模板参数(template parameter)的列表，用小于号(<)和大于号(>）包围起来。

```C++
template <typename T>
int compare (const T &v1,const T &v2){
	if (v1 < v2) return -1;if (v2 <vl) return l;return 0;
}
```

> 类型参数前必须使用关键字class或typename

> 编写泛型代码的两个重要原则：
>
> - 模板中的函数参数是const的引用。
>
> - 函数体中的条件判断仅使用<比较运算。

## 类模板

类似函数模板，类模板以关键字template开始，后跟模板参数列表。在类模板（及其成员)的定义中，我们将模板参数当作替身，代替使用模板时用户需要提供的类型或值

成员函数的定义：

```c++
template <typename T>
void Blob<T> :: check(size_type i,const std: :string &msg) const{
    if (i >= data->size());
	throw std::out_of_range (msg);
}

template <typename T>T& Blob<T> : : back (){
    check (0,"back on empty Blob" );
    return data->back () ;
}

```











































