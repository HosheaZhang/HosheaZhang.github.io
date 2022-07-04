---
title: 鸟哥linux文件与目录管理
date: 2022-07-03 19:46:31
tags: 学习笔记
categories: linux
---

在不同的目录间变换、 建立与删除目录、建立与删除文件，还有寻找文件、查阅文件内容等内容

<!--more -->

# 目录与路径

## 目录的相关操作

```
. 代表此层目录
.. 代表上一层目录
- 代表前一个工作目录
~ 代表目前用户身份所在的家目录
~account 代表account这个用户的家目录
```

- cd 变换目录

  比较熟悉了

- pwd 显示当前所在目录

- mkdir建立新目录

  只能一层一层的建立

  如果要多层建立 在mkdir后面加一个[-p]

- rmdir 删除空目录

## 执行文件路径的变量: $PATH

如果下达`echo $PATH`指令，就会输出很多目录，这些就是环境变量

# 文件与目录管理

## 文件与目录的检视 ls

包括一系列参数

最常用的是ls -l，他已经被简化为ll

## 复制删除和移动 cp rm mv

- cp

```bash
范例一：用root 身份，将家目录下的 .bashrc 复制到 /tmp 下，并更名为 bashrc
[root@study ~]# cp ~/.bashrc /tmp/bashrc
[root@study ~]# cp -i ~/.bashrc /tmp/bashrc
cp: overwrite `/tmp/bashrc'? n <==n 不覆盖，y 为覆盖
# 重复作两次动作，由于 /tmp 底下已经存在 bashrc 了，加上 -i 选项后，则在覆盖前会询问使用者是否确定！可以按下 n 或者 y 来二次确认呢！
范例二：变换目录到/tmp，并将/var/log/wtmp 复制到/tmp 且观察属性：
[root@study ~]# cd /tmp
[root@study tmp]# cp /var/log/wtmp . <==想要复制到当前目录，最后的 . 不要忘
[root@study tmp]# ls -l /var/log/wtmp wtmp
-rw-rw-r--. 1 root utmp 28416 Jun 11 18:56 /var/log/wtmp
-rw-r--r--. 1 root root 28416 Jun 11 19:01 wtmp
# 注意上面的特殊字体，在不加任何选项的情况下，文件的某些属性/权限会改变；
# 这是个很重要的特性！要注意喔！还有，连文件建立的时间也不一样了！
# 那如果你想要将文件的所有特性都一起复制过来该怎办？可以加上 -a 喔！如下所示：
[root@study tmp]# cp -a /var/log/wtmp wtmp_2
[root@study tmp]# ls -l /var/log/wtmp wtmp_2
-rw-rw-r--. 1 root utmp 28416 Jun 11 18:56 /var/log/wtmp
-rw-rw-r--. 1 root utmp 28416 Jun 11 18:56 wtmp_2
```

- rm

  ```bash
  [root@study ~]# rm [-fir] 文件或目录
  选项与参数：
  -f ：就是 force 的意思，忽略不存在的文件，不会出现警告讯息；
  -i ：互动模式，在删除前会询问使用者是否动作
  -r ：递归删除啊！最常用在目录的删除了！这是非常危险的选项！！！
  范例一：将刚刚在 cp 的范例中建立的 bashrc 删除掉！
  [root@study ~]# cd /tmp
  [root@study tmp]# rm -i bashrc
  rm: remove regular file `bashrc'? y
  # 如果加上 -i 的选项就会主动询问喔，避免你删除到错误的档名！
  范例二：透过通配符*的帮忙，将/tmp 底下开头为bashrc 的档名通通删除：
  [root@study tmp]# rm -i bashrc*
  # 注意那个星号，代表的是 0 到无穷多个任意字符喔！很好用的东西！
  范例三：将 cp 范例中所建立的 /tmp/etc/ 这个目录删除掉！
  [root@study tmp]# rmdir /tmp/etc
  rmdir: failed to remove '/tmp/etc': Directory not empty <== 删不掉啊！因为这不是空的目录！
  [root@study tmp]# rm -r /tmp/etc
  rm: descend into directory `/tmp/etc'? y
  rm: remove regular file `/tmp/etc/fstab'? y
  rm: remove regular empty file `/tmp/etc/crypttab'? ^C <== 按下 [crtl]+c 中断
  .....(中间省略).....
  # 因为身份是 root ，预设已经加入了 -i 的选项，所以你要一直按 y 才会删除！
  # 如果不想要继续按 y ，可以按下『 [ctrl]-c 』来结束 rm 的工作。
  # 这是一种保护的动作，如果确定要删除掉此目录而不要询问，可以这样做：
  [root@study tmp]# \rm -r /tmp/etc
  # 在指令前加上反斜杠，可以忽略掉 alias 的指定选项喔！至于 alias 我们在bash 再谈！
  # 拜托！这个范例很可怕！你不要删错了！删除 /etc 系统是会挂掉的！
  范例四：删除一个带有 - 开头的文件
  [root@study tmp]# touch ./-aaa- <==touch 这个指令可以建立空文件！
  [root@study tmp]# ls -l
  -rw-r--r--. 1 root root 0 Jun 11 19:22 -aaa- <==文件大小为0，所以是空文件
  [root@study tmp]# rm -aaarm:
  invalid option -- 'a' <== 因为 "-" 是选项嘛！所以系统误判了！
  Try 'rm ./-aaa-' to remove the file `-aaa-'. <== 新的 bash 有给建议的
  Try 'rm --help' for more information.
  [root@study tmp]# rm ./-aaa-
  ```

- mv

```bash
[root@study ~]# mv [-fiu] source destination
[root@study ~]# mv [options] source1 source2 source3 .... directory
选项与参数：
-f ：force 强制的意思，如果目标文件已经存在，不会询问而直接覆盖；
-i ：若目标文件 (destination) 已经存在时，就会询问是否覆盖！
-u ：若目标文件已经存在，且 source 比较新，才会更新 (update)
范例一：复制一文件，建立一目录，将文件移动到目录中
[root@study ~]# cd /tmp
[root@study tmp]# cp ~/.bashrc bashrc
[root@study tmp]# mkdir mvtest
[root@study tmp]# mv bashrc mvtest
# 将某个文件移动到某个目录去，就是这样做！
范例二：将刚刚的目录名称更名为 mvtest2
[root@study tmp]# mv mvtest mvtest2 <== 这样就更名了！简单～
# 其实在 Linux 底下还有个有趣的指令，名称为 rename ，
# 该指令专职进行多个档名的同时更名，并非针对单一档名变更，与mv 不同。请man rename。
范例三：再建立两个文件，再全部移动到 /tmp/mvtest2 当中
[root@study tmp]# cp ~/.bashrc bashrc1
[root@study tmp]# cp ~/.bashrc bashrc2
[root@study tmp]# mv bashrc1 bashrc2 mvtest2
# 注意到这边，如果有多个来源文件或目录，则最后一个目标文件一定是『目录！』
# 意思是说，将所有的数据移动到该目录的意思！
```

# 文件内容查阅

可以使用cat/tac/nl这几个指令

- cat

选项与参数：
-A ：相当于 -vET 的整合选项，可列出一些特殊字符而不是空白而已；
-b ：列出行号，仅针对非空白行做行号显示，空白行不标行号！
-E ：将结尾的断行字符 $ 显示出来；
-n ：打印出行号，连同空白行也会有行号，与 -b 的选项不同；
-T ：将 [tab] 按键以 ^I 显示出来；
-v ：列出一些看不出来的特殊字符

- tac 由最后一行到第一行反向显示