---
title: MYSQL之多表操作
date: 2022-04-14 13:06:08
tags:
categories: MYSQL
---

# 多表关系

MYSQL多表之间的关系可以概括为一对一、一对多/多对一、多对多

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
- 内连接查询
- 外连接查询
- 子查询
- 表自关联























