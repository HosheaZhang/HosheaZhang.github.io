var posts=["2022/04/12/MYSQL之DDL/","2022/04/12/MYSQL之DML/","2022/04/13/MYSQL之DQL/","2022/04/16/MYSQL之函数/","2022/04/14/MYSQL之多表操作/","2022/04/12/MYSQL之约束/","2022/10/26/git回滚到以前的版本/","2022/04/10/markdown学习/","2023/10/18/vscode连接不上服务器方法解决/","2023/10/15/博客说明/","2022/07/04/鸟哥linuxVim程序编辑器/","2022/07/03/鸟哥linux文件与目录管理/","2022/07/02/鸟哥linux的文件权限与目录配置/","2022/07/04/鸟哥linux磁盘与文件系统管理/","2023/10/16/校招小结/","2023/10/16/近期学习计划/","2023/10/16/找出满足差值条件的下标I/","2023/10/16/最短且字典序最小的美丽子字符串/","2023/10/16/CSAPP第一章计算机系统漫游/","2023/10/17/找出满足差值条件的下标II/","2023/10/17/CSAPP第二章信息的表示和处理/","2023/10/17/CSAPP-Lab1-DataLab/","2023/10/17/CPP_Primer第二章-变量和基本类型/","2023/10/18/上一个遍历的整数/","2023/10/18/最长相邻不相等子序列II/","2023/10/18/最长相邻不相等子序列I/","2023/10/18/CSAPP第三章程序的机器级表示/","2023/10/19/c-报错解决汇总/","2023/10/19/CSAPP-Lab2-BombLab/","2023/10/18/Linux报permission-denied异常的原因以及解决办法/","2023/10/18/如何只下载github项目中一个文件夹的代码/","2023/10/19/CMU15445Lab1缓冲池管理器/","2023/10/19/CMU15445Lab0字典树/","2023/10/19/CMU15445Lab2BPlusTree/","2023/10/19/CMU15445Lab3查询执行引擎/","2023/10/19/CMU15445Lab4锁管理器/","2023/10/21/CSAPP第四章处理器体系结构/","2023/10/21/最小处理时间/","2023/10/21/Linux下CMake总结/","2023/10/22/CSAPP-Lab3-AttackLab/","2023/10/22/gdb操作简单版/","2023/10/22/元素和最小的山形三元组/","2023/10/22/合法分组的最少组数/","2023/10/23/CSAPP第七章链接/","2023/10/22/编译sogou的workflow时遇到的问题/","2023/10/23/老人的数目/","2023/10/23/workflow源码分析：list/","2023/10/23/effective-CPP阅读笔记/","2023/10/24/掷骰子等于目标和的方法数/","2023/10/24/CPP-Primer第三-七章/","2023/10/24/CSAPP第八章异常控制流/","2023/10/25/求一个整数的惩罚数/","2023/10/25/workflow源码分析：线程池/","2023/10/25/360代码规范一：security/","2023/10/26/360代码规范二：resource/","2023/10/26/统计能整除数字的位数/","2023/10/27/360代码规范三：precompile/","2023/10/27/切割后面积最大的蛋糕/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};