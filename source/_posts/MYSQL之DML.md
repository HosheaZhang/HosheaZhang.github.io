---
title: MYSQL之DML
date: 2022-04-12 10:54:23
tags:
categories: MYSQL
---

# DML解释

​	DML是指数据操作语言，英文全称是Data Manipulation Language， 用来对数据库中表的记录进行更新，关键字有：

* 插入insert
* 删除delete
* 更新update

<!--more-->

# 数据插入

``` mysql
insert into 表(列名1，列名2，……) values(值1，值2，……)；
insert into 表 values(值1，值2，……)；
```

# 数据修改

```mysql
update 表名set 字段名=值，字段名=值；
update 表名set 字段名=值，字段名=值 where 条件(eg:id = 1004)；
```

# 数据删除

```mysql
delete from 表名 [where 条件]；
truncate table 表名 或者 truncate 表名
```

