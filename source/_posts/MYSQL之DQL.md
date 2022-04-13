---
title: MYSQL之DQL
date: 2022-04-13 10:53:10
tags:
categories: MYSQL
---

# 概念

数据库管理系统一个重要功能就是数据查询数据查询不应只是简单返回数据库中存储的数据，还应该根据需要对数据进行筛选以及确定数据以什么样的格式显示。MySQL提供了功能强大、灵活的语句来实现这些操作，使用select语句来查询数据。

<!--more-->

# 数据准备

```mysql
-―创建数据库
create database if not exist mydb2 ;
use mydb2;
--创建商品表:
create table product(
	pid int primary key auto_increment, -- 商品编号
    pname varchar (20) not null , -- 商品名字
	price double, --商品价格
	category_id varchar (20) -- 商品所属分类
) ;
```

数据导入后，样例如下图所示：

{% asset_image 1.png 样例 %}

# 简单查询

- 查询所有的商品

```mysql
select * from product；
```

- 查询商品名和商品价格

``` mysql
select pname,price from product;
```

- 别名查询 使用关键词as

  应用：

  ```mysql
  select p.id,u.id from product p, user u;
  ```

  - 表别名

  ```mysql
  select * from product as p；
  --这里as可以省略
  ```

  * 列别名

  ```mysql
  select pname as 'pro', price as 'pri' from product;
  ```

* 去掉重复值

```mysql
select distinct price from product;
```

* 查询结果是一个表达式：所有商品加价十元显示

```mysql
select pname，price+10 new_price from product;
```

# 运算符

数据库中的表结构确立后，表中的数据代表的意义就已经确定。通过MySQL运算符进行运算，就可以获取到表结构以外的另一种数据。
例如，学生表中存在一个birth字段，这个字段表示学生的出生年份。而运用MySQL的算术运算符用当前的年份减学生出生的年份，那么得到的就是这个学生的实际年龄数据。
MySQL支持4种运算符

- 算数运算符

{% asset_image 2.png 算术运算符 %}

```mysql
select name ,price + 10 as new price from product;
```

- 比较运算符

{% asset_image 3.png 比较运算符 %}

- 逻辑运算符

{% asset_image 4.png 逻辑运算符 %}

- 位运算符

{% asset_image 5.png 位运算符 %}

# 条件查询

- 查询商品名称为“海尔洗衣机”的商品所有信息:

```mysql
select * from product where pname = '海尔洗衣机';
```

- 查询价格为800商品

```mysql
select * from product where price = 800;
```

- 查询价格不为800商品

```mysql
select * from product where price != 800;
select * from product where price <> 800;
select * from product where not (price = 800);
```

* 查询商品价格大于等于60元的所有商品信息

```mysql
select * from product where price >= 60;
```

- 查询商品价格在200到1000之间所有商品

```mysql
select * from product where price between 200 and 1000;
select * from product where price>=200 and price<=1000;
```

- 查询商品价格是200或800的所有商品

```mysql
select * from product where price in( 200,800 ) ;
select * from product where price = 200 or price = 800;
select * from product where price = 200 || price = 800;
```

- 查询含有'裤'字的所有商品

``` mysql
select * from product where pname llke '%裤%' -- %用来匹配任意字符
```

- 查询以'海'开头的所有商品

```mysql
select * from product where pname like '海%';
```

- 查询第二个字为'蔻'的所有商品

```mysql
select * from product where pname like '_蔻%' -- 下划线匹配单个字符
```

- 查询category_id为null的商品

```mysql
select * from product where category_id is null;
```

- 查询category_id不为null分类的商品

```mysql
- select * from product where category_id is not null;
```



# 排序查询



















