---
title: MYSQL之DDL
date: 2022-04-12 09:53:04
tags: 
categories: MYSQL	
---

# DDL解释

DDL(Data Definition Language), 数据定义语言，包括如下内容：

* 对数据库的常用操作
* 对表结构常用操作
* 修改表结构

<!--more -->

# DDL之数据库操作

## 	1. 查看数据库

``` 
show databases；
```

## 	2. 创建数据库

```mysql
create database [if not exists] mydb1;
```

## 	3. 切换数据库

```mysql
use mydb1;
```

## 	4. 删除数据库

```mysql
drop database [if exists] mydb1;
```

## 	5. 修改数据库编码

```mysql
alter database mydb1 character set utf8;
```



# DDL之表操作

## 	1. 创建表

``` mysql
create table [if not exists] 表名(
	字段名1 类型[(宽度)][约束条件][comment'字段说明']，
    字段名2 类型[(宽度)][约束条件][comment'字段说明']，
    字段名3 类型[(宽度)][约束条件][comment'字段说明']
);
```

## 	2. 查看当前数据库所有表名称

```mysql
show tables;
```

## 	3. 查看指定某个表的创建语句

```mysql
show create table 表名
```

## 	4. 查看表结构

```mysql
desc 表名
```

## 	5. 删除表

```mysql
drop table 表名
```

# 修改表结构（不常用）

## 		1. 修改表添加列

``` mysql
alter table 表名 add 列名 类型(长度)[约束]；
```

## 		2. 修改列名和类型

```mysql
alter table 表名 change 旧列名 新列名 类型(长度) [约束]；
```

## 		3. 修改表删除列

```mysql
alter table 表名 drop 列名
```

## 		4. 修改表名

``` mysql
rename table 表名 to 新表名
```

































