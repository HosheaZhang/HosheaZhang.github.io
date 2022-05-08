---
title: 多种I/O函数
date: 2022-05-07 10:48:51
tags: 学习笔记
categories: 网络编程
---

# send&recv函数

```c++
#include <sys/socket.h>
ssize_t send(int sockfd,const void * buf，size_t nbytes,int flags);
```

- sockfd 表示与数据传输对象的连接的套接字文件描述符。
- buf 保存待传输数据的缓冲地址值。
- nbytes 待传输的字节数。
- flags 传输数据时指定的可选项信息。

```c++
#include <sys/socket.h>
ssize_t recv(int sockfd,void * buf, size_t nbytes, int flags);
```

- sockfd 表示与数据接受对象的连接的套接字文件描述符。
- buf 保存待传输数据的缓冲地址值。
- nbytes 待传输的字节数。
- flags 传输数据时指定的可选项信息。

可选项信息的含义

{% asset_img 1.png %}

# readv&writev函数

通过writev函数可以将分散保存在多个缓冲中的数据一并发送，通过readv函数可以由多个缓冲分别接收。因此，适当使用这2个函数可以减少I/O函数的调用次数。

```c++
#include <sys/uio.h>
ssize_t writev(int filedes,const struct iovec * iov, int iovcnt);

//第二个参数的结构
struct iovec{
void * iov_base;//缓冲地址
size_t iov_len;//缓冲大小
}
```

- filedes 表示数据传输对象的套接字文件描述符。但该函数并不只限于套接字，因此，可以像read函数一样向其传递文件或标准输出描述符。
- iov iovec结构体数组的地址值，结构体iovec中包含待发送数据的位置和大小信息。
- iovcnt 向第二个参数传递的数组长度。

```c++
#include <stdio.h>
#include <sys/uio.h>
int main(int argc, char *argv[]){
	struct iovec vec[2];
    char buf1[]="ABCDEFG";
    char buf2[]="1234567";
    int str_len;
    vec[0].iov_base=buf1;
    vec[0].iov_len=3;
    vec[1].iov_base=buf2;
    vec[1j.iov_len=4;
	str_len=writev(1,vec,2); //writev函数的第一个参数为1，故向控制台输出数据。
    puts("");
	printf( "Write bytes: %d in", str_len);
    return 0;
}
```

```C++
#include <sys/uio.h>
ssize_t readv(int filedes，const struct iovec * iov, int iovcnt);
```

- filedes 传递接收数据的文件（或套接字）描述符。
- iov 包含数据保存位置和大小信息的iovec结构体数组的地址值。
- iovcnt 第二个参数中数组的长度。

```c++
#include <stdio.h>
#include <sys/uio.h>
#define BUF_SIZE100
int main(int argc, char *argv[]){
	struct iovec vec[2];
	char buf1[BUF_SIZE]={0,};
	char buf2[BUF_SIZE]={0,};
    int str_len;
    vec[0].iov_base=buf1;
	vec[0].iov_len=5;
    vec[1].iov_base=buf2;
    vec[1].iov_len=BUF_SIZE;
	str_len=readv(0, vec, 2);
	printf( "Read bytes: %d ln”, str_len);
    printf("First message: %s ln", buf1);
    printf( "Second message: %s ln", buf2);
    return 0;
}
```











