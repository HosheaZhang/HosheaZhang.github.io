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

如果我们需要对读取的数据进行排序，我们就可以使用MySQL的order by子句来设定你想按哪个字段哪种方式来进行排序，再返回搜索结果。

``` mysql
select
字段名1，字段名2，.....from表名
order by字段名1 [asc|desc]，字段名2[asc| desc]..
```

·特点

1. asc代表升序，desc代表降序，如果不写默认**升序**
2. order by用于子句中可以支持单个字段，多个字段，表达式，函数，别名
3. order by子句，放在查询语句的最后面。LIMIT子句除外

样例图：

{% asset_image 1.png 样例 %}

* 使用价格排序(降序)

``` mysql
select * from product order by price;
```

- 在价格排序(降序)的基础上，以分类排序(降序)

```mysql
select * from product order by price desc ,category_id desc;
```

- 显示商品的价格(去重复)，并排序(降序)

``` mysql
select distinct price from product order by price desc;
```



# 聚合查询

之前我们做的查询都是**横向查询**，它们都是根据条件一行一行的进行判断，而使用聚合函数查询是**纵向查询**，它是对一列的值进行计算，然后返回一个单一的值;另外聚合函数会忽略空值。

- 查询商品总条目

```mysql
select count(pid) from product;
```

- 查询价格大于200的商品总条数

```mysql
select count(pid) from product where price > 200;
```

- 查询分类为’c001‘的所有商品总和

```mysql
select sum(price) from product where category_id = 'c001';
```

- 查询商品的最大价格

```mysql
select max(price) from product;
```

- 查询分类为’c002‘所有商品的平均价格

```mysql
select avg(price) from product where category_id = 'c002';
```

# NULL值的处理

- count函数对null值的处理
  如果count函数的参数为星号(*)，则统计所有记录的个数。而如果参数为某字段，不统计含null值的记录个数。
- 2、sum和avg函数对null值的处理
  这两个函数忽略null值的存在，就好象该条记录不存在一样。
- 3、max和min函数对null值的处理
  max和min两个函数同样忽略null值的存在。

# 分组查询

分组查询是指使用group by字句对查询信息进行分组。

```mysql
select 字段1，字段... from 表名 group by 分组字段 having 分组条件;
```

- 统计各个分类商品的个数

```mysql
select category_id,count(pid) from product group by category_id;
```

- 分组之后的条件筛选

分组之后对统计结果进行筛选的话必须使用having，不能使用where。

where子句用来筛选 FROM子句中指定的操作所产生的行

group by子句用来分组WHERE子句的输出。

having子句用来从分组的结果中筛选行

```mysql
select category_id,count(pid) from product group by category_id having count pid > 4;
```

# 分页查询

分页查询在项目开发中常见，由于数据量很大，显示屏长度有限，因此对数据需要采取分页显示方式。例如数据共有30条，每页显示5条，第一页显示1-5条，第二页显示6-10条。

```mysql
-- 方式1-显示前n条
select 字段1，字段2... from表明 limit n
-- 方式2-分页显示
select 字段1，字段2... from表明 limit m, n
-- m:整数，表示从第几条索引开始，计算方式（当前页-1)*每页显示条数
-- n:整数，表示查询多少条数据
```

# 正则表达式查询

这里给出菜鸟教程的资料，可供参考

| 模式       | 描述                                                         |
| ---------- | ------------------------------------------------------------ |
| ^          | 匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。 |
| $          | 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。 |
| .          | 匹配除 "\n" 之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像 '[.\n]' 的模式。 |
| [...]      | 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。 |
| [^...]     | 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'。 |
| p1\|p2\|p3 | 匹配 p1 或 p2 或 p3。例如，'z\|food' 能匹配 "z" 或 "food"。'(z\|f)ood' 则匹配 "zood" 或 "food"。 |
| *          | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
| +          | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
| {n}        | n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。 |
| {n,m}      | m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。 |

## 实例

了解以上的正则需求后，我们就可以根据自己的需求来编写带有正则表达式的SQL语句。以下我们将列出几个小实例(表名：person_tbl )来加深我们的理解：

查找name字段中以'st'为开头的所有数据：

```
mysql> SELECT name FROM person_tbl WHERE name REGEXP '^st';
```

查找name字段中以'ok'为结尾的所有数据：

```
mysql> SELECT name FROM person_tbl WHERE name REGEXP 'ok$';
```

查找name字段中包含'mar'字符串的所有数据：

```
mysql> SELECT name FROM person_tbl WHERE name REGEXP 'mar';
```

查找name字段中以元音字符开头或以'ok'字符串结尾的所有数据：

```
mysql> SELECT name FROM person_tbl WHERE name REGEXP '^[aeiou]|ok$';
```























