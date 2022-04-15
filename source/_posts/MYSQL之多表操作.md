---
title: MYSQL之多表操作
date: 2022-04-14 13:06:08
tags:
categories: MYSQL
---

# 多表关系

MYSQL多表之间的关系可以概括为一对一、一对多/多对一、多对多

<!--more-->

# 外键约束

MySQL外键约束（FOREIGN KEY)是表的一个特殊字段，经常与主键约束一起使用。对于两个具有关联关系的表

而言，相关联字段中主键所在的表就是主表(父表)，外键所在的表就是从表（子表)。

外键用来建立主表与从表的关联关系，为两个表的数据建立连接，约束两个表中数据的一致性和完整性。比如，

一个水果摊，只有苹果、桃子、李子、西瓜等4种水果，那么，你来到水果摊要买水果就只能选择苹果、桃子、李子

和西瓜，其它的水果都是不能购买的。

定义一个外键时，需要遵守下列规则:

- 主表必须已经存在于数据库中，或者是当前正在创建的表。
- 必须为主表定义主键。
-  主键不能包含空值，但允许在外键中出现空值。也就是说，只要外键的每个非空值出现在指定的主键中，这个外键的内容就是正确的。
- 在主表的表名后面指定列名或列名的组合。这个列或列的组合必须是主表的主键或候选键。
- 外键中列的数目必须和主表的主键中列的数目相同。
- 外键中列的数据类型必须和主表主键中对应列的数据类型相同。

# 外键约束

## 示例

```mysql
create database mydb3 ;
use mydb3 ;
-- 创建部门表
create table if not exists dept (
	detpno varchar(20) primary key , -- 部门号 
    name varchar (20) -- 部门名字
) ;
```

```mysql
create table if not exists emp (
	eid varchar (20)primary key , -- 员工编号
    ename varchar (20) , -- 员工名字
	age int,-- 员工年龄
	dept_id varchar (20),-- 员工所属部门
	constraint emp_fk foreign key (dept_id) references dept (detpno) -- 外键约束
) ;
```

- 示例

```mysql
alter table <数据表名> add constraint<外键名> foreign key(<列名>) references<主表名>
(<列名>);
```

## 在外键约束下的数据操作

- 必须先给主表添加数据
- 注意给从表添加数据时，外键列的值不能随便写，必须依赖主表的主键列
- 主表的数据被从表依赖时，不能删除，否则可以删除，从表数据可以随便删除

- 删除外键约束

``` mysql
alter table <表名> drop foreign key<外键约束名>;
```

## 多对多关系

新增加一个中间表，来建立多对多关系

{% asset_img 1.png%}

# 多表联合查询

- 交叉联合查询

  - 交叉连接查询返回被连接的两个表所有数据行的笛卡尔积
  - 笛卡尔积可以理解为一张表的每一行去和另外一张表的任意一行进行匹配
  - 假如A表有m行数据,B表有n行数据，则返回m*n行数据
  - 笛卡尔积会产生很多冗余的数据，后期的其他查询可以在该集合的基础上进行条件筛选

```mysql
select * from 表1,表2,表3.... ;
```

- 内连接查询

```mysql
隐式内连接(sQL92标准): select * from A,B where 条件;
显示内连接(sQL99标准): select * from A inner join B on 条件;
```



- 外连接查询

  外连接分为左外连接（left outer join)、右外连接(right outer join)，满外连接(full outer join)。注意:oracle里面有full join,可是在mysql对full join支持的不好。我们可以使用union来达到目的

  {% asset_img 2.png%}

  - 左外连接: left outer join
    select * from A left outer jojn B on 条件;
  - 右外连接: right outer join
    select* from A right outer join B on条件;
  - 满外连接: full outer join
    select * from A full outer join B on条件;

- 子查询

  子查询就是指的在一个完整的查询语句之中，嵌套若干个不同功能的小查询，从而一起完成复杂查询的一种编写形式，通俗一点就是包含select嵌套的查询。

  - ALL关键字

  ```mysql
  select ...from ...where c >al1(查询语句)--等价于:
  select ...from ... where c > result1 and c > result2 and c >result3
  ```

  - ANY关键字

  ```mysql
  select ...from ...where c >any(查询语句) 
  -- 等价于:
  select ...from ... where c > result1 or c >result2 or c > result3
  ```

  

  - SOME关键字

  ​    略

  - IN关键字 

  ```mysql
  select ...from ...where c in(查询语句)
  -- 等价于:
  select ...from ... where c = result1 or c = result2 or c = result3
  ```

  - EXISTS关键字

  ```mysql
  select ...from ...where exists(查询语句)
  ```

  - 该子查询如果“有数据结果”(至少返回一行数据)，则该EXISTS()的结果为“true"，外层查询执行
  - 该子查询如果“没有数据结果”（没有任何数据返回），则该EXISTS()的结果为“false"”，外层查询不执行
  - EXISTS后面的子查询不返回任何实际数据，只返回真或假，当返回真时where条件成立
  - 注意，EXISTS关键字，比IN关键字的运算效率高，因此，在实际开发中，特别是大数据量时，推荐使用
    EXISTS关键字

- 表自关联

MySQL有时在信息查询时需要进行对表自身进行关联查询，即一张表自己和自己关联，一张表当成多张表来用

注意自关联时表必须给表起别名。

```mysql
select 字段列表from表1a ,表1 b where 条件;
或者
select 字段列表 from 表1 a [left] join 表1 b on 条件;
```























