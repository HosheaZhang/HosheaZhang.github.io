var posts=["2022/04/12/MYSQL之DDL/","2022/04/12/MYSQL之DML/","2022/04/13/MYSQL之DQL/","2022/04/16/MYSQL之函数/","2022/04/14/MYSQL之多表操作/","2022/04/12/MYSQL之约束/","2022/10/26/git回滚到以前的版本/","2022/04/10/markdown学习/","2023/10/18/vscode连接不上服务器方法解决/","2023/10/15/博客说明/","2022/07/04/鸟哥linuxVim程序编辑器/","2022/07/03/鸟哥linux文件与目录管理/","2022/07/02/鸟哥linux的文件权限与目录配置/","2022/07/04/鸟哥linux磁盘与文件系统管理/","2023/10/16/校招小结/","2023/10/16/近期学习计划/","2023/10/16/找出满足差值条件的下标I/","2023/10/16/最短且字典序最小的美丽子字符串/","2023/10/16/CSAPP第一章计算机系统漫游/","2023/10/17/找出满足差值条件的下标II/","2023/10/17/CSAPP第二章信息的表示和处理/","2023/10/17/CSAPP-Lab1-DataLab/","2023/10/18/上一个遍历的整数/","2023/10/18/最长相邻不相等子序列II/","2023/10/18/最长相邻不相等子序列I/","2023/10/18/CSAPP第三章程序的机器级表示/","2023/10/19/c-报错解决汇总/","2023/10/19/CSAPP-Lab2-BombLab/","2023/10/18/Linux报permission-denied异常的原因以及解决办法/","2023/10/18/如何只下载github项目中一个文件夹的代码/","2023/10/19/CMU15445Lab1缓冲池管理器/","2023/10/19/CMU15445Lab0字典树/","2023/10/19/CMU15445Lab2BPlusTree/","2023/10/19/CMU15445Lab3查询执行引擎/","2023/10/19/CMU15445Lab4锁管理器/","2023/10/21/CSAPP第四章处理器体系结构/","2023/10/21/最小处理时间/","2023/10/21/Linux下CMake总结/","2023/10/22/CSAPP-Lab3-AttackLab/","2023/10/22/gdb操作简单版/","2023/10/22/元素和最小的山形三元组/","2023/10/22/合法分组的最少组数/","2023/10/23/CSAPP第七章链接/","2023/10/22/编译sogou的workflow时遇到的问题/","2023/10/23/老人的数目/","2023/10/23/workflow源码分析：list/","2023/10/23/effective-CPP阅读笔记/","2023/10/24/掷骰子等于目标和的方法数/","2023/10/24/CSAPP第八章异常控制流/","2023/10/25/求一个整数的惩罚数/","2023/10/25/workflow源码分析：线程池/","2023/10/25/360代码规范一：security/","2023/10/26/360代码规范二：resource/","2023/10/26/统计能整除数字的位数/","2023/10/27/360代码规范三：precompile/","2023/10/27/切割后面积最大的蛋糕/","2023/10/29/360代码规范四：global/","2023/10/27/CPP11特性之nullptr及constexpr/","2023/10/28/CPP11特性之explicit、final和override/","2023/10/28/CPP11特性之lambda表达式/","2023/10/28/CPP11特性之tuple/","2023/10/28/CPP11特性之右值引用、移动语义及完美转发/","2023/10/27/CPP11特性之统一初始化/","2023/10/29/H指数/","2023/10/27/CPP11特性之资源管理指针/","2023/10/28/从数量最多的堆取走礼物/","2023/10/29/CSAPP-Lab7-shellLab/","2023/10/29/旋转数组/","2023/10/30/360代码规范五：type/","2023/10/30/CSAPP第九章虚拟内存/","2023/10/30/H指数II/","2023/10/30/C-templates第一章函数模板/","2023/10/31/360代码规范六：declaration/","2023/10/31/Linux高性能服务器编程第一章TCP-IP协议族/","2023/10/31/CSAPP第十章系统级IO/","2023/10/31/每棵子树内缺失的最小基因值/","2023/11/01/CSAPP第十一章网络编程/","2023/11/01/Linux高性能服务器编程第二章IP协议详解/","2023/11/01/经典算法实现之冒泡排序/","2023/11/01/经典算法实现之二分插入排序/","2023/11/02/环和杆/","2023/11/01/CPPprimer第八章IO库/","2023/11/02/C-templates第二章类模板/","2023/11/02/CPP-primer第九章顺序容器/","2023/11/02/Linux高性能服务器编程第三章TCP协议详解/","2023/11/04/C-primer第十章泛型算法/","2023/11/04/数组中两个数的最大异或值/","2023/11/03/填充每个节点的下一个右侧节点指针II/","2023/11/02/经典算法实现之归并排序/","2023/11/04/Linux高性能服务器编程第四章TCP-IP通信案例-访问Web服务器/","2023/11/02/经典算法实现之桶排序/","2023/11/04/C-template第三章非类型模版参数/","2023/11/04/云服务器创建记录/","2023/11/04/经典算法实现之堆排序/","2023/11/06/C-templates第四章变参模板/","2023/11/06/CPP-primer第十二章动态内存/","2023/10/17/CPPPrimer第二章变量和基本类型/","2023/10/24/CPPprimer第三-七章/","2023/11/05/CPPprimer第十一章关联容器/","2023/11/05/Linux高性能服务器编程第五章Linux网络编程基础API/","2023/11/06/最大单词长度乘积/","2023/11/06/经典算法实现之快速排序/","2023/11/05/重复的DNA序列/","2023/11/07/C-templates第六章移动语义/","2023/11/07/CPPprimer第十三章拷贝控制/","2023/11/07/Linux高性能服务器编程第六章高级I-O函数/","2023/11/07/资源pdf/","2023/11/08/C-templates第七章按值传递还是按引用传递？/","2023/11/07/Linux高性能服务器编程第七章Linux服务器程序规范/","2023/11/08/Linux高性能服务器编程第八章高性能服务器程序框架/","2023/11/08/经典算法实现之优先级队列/","2023/11/10/23-11-10周记/","2023/11/09/C-templates第八章编译期编程/","2023/11/10/C-templates第九章在实践中使用模板/","2023/11/10/CPPprimer第十四章重载运算符和类型转换/","2023/11/09/Linux高性能服务器编程第九章IO复用/","2023/11/10/Linux高性能服务器编程第十章信号/","2023/11/09/逃离火灾/","2023/11/09/经典算法实现之AVL树/","2023/11/11/C-templates第十章模板基本术语/","2023/11/11/经典算法实现之并查集/","2023/11/12/Linux高性能服务器编程第十四章多线程编程/","2023/11/13/C-templates第十八章模板的多态性/","2023/11/13/Linux高性能服务器编程第十五章线程池/","2023/11/14/leveldb源码学习之基本组件/","2023/11/15/算法题分类记录二分法篇/","2023/11/14/经典算法实现之Floyd算法/","2023/11/14/经典算法实现之跳表/","2023/11/14/设计模式之简单工厂模式/","2023/11/15/设计模式之抽象工厂模式/","2023/11/15/SQL基础教程第一章准备工作和创建表/","2023/11/15/SQL基础教程第二章查询基础/","2023/11/16/SQL基础教程第三章聚合与排序/","2023/11/17/SQL基础教程第四章数据更新/","2023/11/16/西方哲学史脉络/","2023/11/16/设计模式之Builder模式/","2023/11/17/设计模式之Prototype模式/","2023/11/20/SQL基础教程第六章函数、谓词、CASE表达式/","2023/11/19/SQL基础教程第五章复杂查询/","2023/11/19/golang入门学习/","2023/11/19/设计模式之Adapter模式/","2023/11/20/设计模式之Bridge模式/","2023/11/18/设计模式之Singleton模式/","2023/11/22/设计模式之Decorator模式/","2023/11/21/设计模式之composite模式/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};