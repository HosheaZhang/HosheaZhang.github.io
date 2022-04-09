---
title: first blog
date: 2022-04-09 20:13:52
tags: 代码
categories: Android
---

### 1. SDK下载 并配置环境变量 
1. 下载sdk manager [下载链接](http://tools.android-studio.org/index.php/sdk/)
2. 其他部分请看[这篇文章](https://blog.csdn.net/zeternityyt/article/details/79655150)的1-3步，~~ADT部分不用看~~ 。
### 2. JDK下载 并配置环境变量
1. [这篇文章](https://blog.csdn.net/write6/article/details/79136388)说的挺详细的
### 3. AS下载，并配置
这里具体不说了，说几个踩到的坑
1. *gradle-2.2-all.zip*这个可以直接自己用迅雷下好了，放在用户文件夹中 具体位置为
    **C:\Users\54297\\.gradle\wrapper\dists\gradle-4.6-all\bcst21l2brirad8k2ben1letg**
    其中2.2 这个版本随意，可以下载最新的
2. SDK的文件路径 建议不要有空格 不然可能会出现一些问题
3. 在build.gradle文件中将        *（注意有两处）*
```
       repositories {
            google()
            jcenter()
        }
```
改成

```
       repositories {
            maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
            //google()
            //jcenter()
        }
```
并按下ctrl+shift+s组合键打开Settings，在这里打勾

{% asset_img 3.png This is an example image %}

这么做的作用是，用AS自带的库下载gradle实在太慢了，用国内的阿里云的快一点

### 4. 模拟器配置
[夜神模拟器使用方法](https://www.yeshen.com/faqs/Skvy-yQlW)
其中他在命令行写的输入命令：*nox_adb.exe connect 127.0.0.1:62001* 在我电脑用不了，我改成这一行代码  输入命令：*adb connect 127.0.0.1:62001* 可以实现。