---
title: 基于TCP的服务器端/客户端（1）
date: 2022-04-27 10:42:33
tags: 学习笔记
categories: 网络编程
---

# 理解TCP和UDP

根据数据传输方式的不同，基于网络协议的套接字一般分为TCP和UDP套接字。因为TCP套接字是面向连接的，因此又称给予流的套接字。

<!--more-->

# 实现基于TCP的服务器端/客户端

## TCP服务器端默认函数调用顺序

{% asset_img 1.png %}

> socket和bind部分上文已经讨论过，这里讲解其他几个部分

### 进入等待连接状态

我们已经调用了bind函数，接下来要通过listen函数进入等待连接请求状态。需要注意的是，只有在服务器端调用了listen函数后，客户端才能调用connect函数发出连接请求状态。

```c++
#include <sys/socket.h>
int listen(int sock,int backlog);

//sock 服务器端套接字
//backlog 请求等待队列的长度
```

### 受理客户端连接请求

这里的套接字和服务器端套接字不是同一个，因为服务器端套接字是做一个守门的作用。下面这个函数将自动创建套接字，连接到发送请求的客户端。

```c++
#include <sys/socket.h>

int accept(int sock,struct sockaddr* addr,socklen_t* addrlen);
//成功返回创建的套接字文件描述符，失败返回-1
//sock 服务器端套接字的文件描述符
//addr 保存发起连接请求的客户端地址信息的变量地址值，调用函数后向传递来的地址变量参数填充客户端地址信息
//addrlen 第二个参数addr结构体的长度，
```

{% asset_img 2.png %}

## TCP客户端默认函数调用顺序

{% asset_img 3.png %}

与服务器端相比，区别在于请求连接，这个是创建客户端套接字之后向服务器端发起的连接请求。服务器端调用listen函数后创建连接请求等待队列，之后客户端即可请求连接。

```c++
#include <sys/socket.h>

int connect(int sock,struct sockaddr* servaddr,servaddr_t addrlen);

//成功返回0，失败返回-1
//sock 客户端套接字文件描述符
//servaddr 保存目标服务器端地址信息的变量地址值
//addrlen 地址变量长度
```

> 客户端的IP地址和端口在调用connect函数时自动分配，无需调用标记的bind函数进行分配

### 基于TCP的服务器端/客户端函数调用关系

{% asset_img 4.png %}

服务器端创建套接字后连续调用bind、listen函数进入等待状态，客户端通过调用connect函数发起连接请求。需要注意的是，客户端只能等到服务器端调用listen函数后才能调connect函数。同时要清楚,客户端调用connect函数前，服务器端有可能率先调用accept函数。当然，此时服务器端在调用accept函数时进入阻塞( blocking )状态，直到客户端调connect函数为止。

















