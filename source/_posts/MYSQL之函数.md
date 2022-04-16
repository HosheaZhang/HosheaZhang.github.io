---
title: MYSQL之函数
date: 2022-04-16 10:28:06
tags: 
categories: MYSQL
---

在MySQL中，为了提高代码重用性和隐藏实现细节，MySQL提供了很多函数。函数可以理解为别人封装好的模

代码。

<!--more-->

# 聚合函数

 在MySQL中，聚合函数主要由: count,sum,min,max,avg

这里我们介绍group_concat()函数

group_concat()函数首先根据group by指定的列进行分组，并且用分隔符分隔，将同一个分组中的值连接起来，返回一个字符串结果。

```mysql
group_concat([distinct]字段名[order by排序字段 asc / desc] [separator '分隔符'])
```

# 数学函数

{% asset_img 1.png %}

{% asset_img 2.png %}

{% asset_img 3.png %}

{% asset_img 4.png %}

# 字符串函数

{% asset_img 5.png %}

{% asset_img 6.png %}

{% asset_img 7.png %}

{% asset_img 8.png %}

# 日期函数

略

# 控制流函数

- if逻辑判断语句

{% asset_img 9.png %}

- case when

{% asset_img 10.png %}