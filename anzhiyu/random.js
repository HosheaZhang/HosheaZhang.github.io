var posts=["2023/10/15/博客说明/","2022/04/10/markdown学习/","2022/04/13/MYSQL之DQL/","2022/04/12/MYSQL之DDL/","2022/04/14/MYSQL之多表操作/","2022/04/12/MYSQL之约束/","2022/04/12/MYSQL之DML/","2022/04/16/MYSQL之函数/","2022/07/03/鸟哥linux文件与目录管理/","2022/07/02/鸟哥linux的文件权限与目录配置/","2022/07/04/鸟哥linux磁盘与文件系统管理/","2022/07/04/鸟哥linuxVim程序编辑器/","2022/10/25/vscode连接不上服务器方法解决/","2022/10/26/git回滚到以前的版本/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};