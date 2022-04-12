---
title: MYSQL之约束
date: 2022-04-12 17:00:08
tags:
categories: MYSQL
---

# 概念

表中数据的限制条件，目的就是保证表中记录完整性和有效性，用户表有些列的值不能为空，有些列的值不能重复。

# 分类

- **主键约束 (primary key)**
- **自增长约束 (auto_increment)**
- 非空约束 (not null)
- 唯一性约束 (unique)
- 默认约束 (default)
- 零填充约束 (zerofill)
- 外键约束 (foreign key)

# 主键约束

## 概念

- MySQL主键约束是**一个列或者多个列**的组合其值能唯一地标识表中的每一行,方便在RDBMS中尽快的找到某一行。
- 主键约束相当于唯一约束＋非空约束的组合，**主键约束列不允许重复，也不允许出现空值**。
- 每个表最多**只允许一个主键**
- 主键约束的关键字是: primary key
- 当创建主键的约束时，系统默认会在所在的列和列组合上建立对应的唯一索引。

## 操作

- 添加单列主键

1. 定义字段的时候指定主键
2. 定义完字段后指定主键

```mysql
create table 表名(
	……
	<字段名><数据类型> primary key
	……
);
```

```mysql
create table 表名(
	……
	eid INT,
	……
	constraint pk1 primary key(eid) --需要注意的是，constraint pk1 可以省略
);
```

- 添加多列联合主键

这里不能使用上述的方法1

``` mysql
create table emp3(
	name varchar (20),
    deptId int,
	salary double,
	primary key (name ,deptId)
);
```

- 通过修改表结构添加主键

  ``` mysql
  create table emp4(
      eid int,
      name varchar(20),
      ……
  )；
  
  alter table emp4 add primary key(eid,name);
  ```

  

- 删除主键

``` mysql
alter table <数据表名> drop primary key;
```

# 自增长约束

在MySQL中，当主键定义为自增长后，这个主键的值就不再需要用户输入数据了，而由数据库系统根据定义自动赋值。每增加一条记录，主键会自动以相同的步长进行增长。通过给字段添加auto_increment属性来实现主键自增长。

- 设置自增长约束

```mysql
字段名 数据类型 primary key auto_increment
```

- 指定自增字段初始值

``` mysql
create table t1(
	id int primary key auto_increment,
    name varchar(20)
)auto_increment=100;
```

``` mysql
create table t2(
	id int primary key auto_increment,
    name varchar(20)
);
alter table t2 auto_increment = 200''
```

- delete和truncate在删除后自增列的变化
  - delete数据之后自动增长从断点开始
  - truncate数据之后自动增长从默认起始值开始

# 非空约束

- 添加非空约束

``` mysql
<字段名><数据类型> not null;
alter table 表名 modify 字段 类型 not null；
```

- 删除非空约束

注意这里相当于只需要重新写一遍就可以了

```mysql
alter table 表名 modify 字段 类型；
```

# 唯一约束

- 添加唯一约束

```mysql
<字段名><数据类型> unique
alter table 表名 add constraint 约束名 unique(列);
```

需要注意的是 NULL和任何值都不相同

- 删除唯一约束

``` mysql
alter table 表名 drop index 约束名；--如果没有设置约束名 就是列名
```

# 默认约束

- 添加默认约束

``` mysql
<字段名><数据类型> default <默认值>;
alter table 表名 modify 列名 类型 default 默认值;
```

- 删除默认约束

``` mysql
alter table 表名 modify 列名 类型 default null;
```

# 零填充约束

- 添加零填充约束

``` mysql
create table t_user12 (
	id int zerofill , --零填充约束
    name varchar(20)
);
```

- 删除零填充约束

``` mysql
alter table t_user12 modify id int;
```





























