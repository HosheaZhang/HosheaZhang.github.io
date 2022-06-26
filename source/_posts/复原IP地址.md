---
title: 复原IP地址
date: 2022-06-25 16:27:51
tags: 回溯
categories: 算法
---

# 题目

有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

<!--more-->

# 示例

## 示例1 

```
输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
```

## 示例2

```
输入：s = "0000"
输出：["0.0.0.0"]
```

## 示例3

```
输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
```

# 题目提示

- `1 <= s.length <= 20`
- `s` 仅由数字组成

# 思考

回溯法，注意特殊情况的判别

# 代码

```C++
class Solution {
public:
    string str;
    int size;
    vector<string> ret;

    vector<string> restoreIpAddresses(string s) {
        str = s;
        size = s.size();
        dfs(0,0,"");
        return ret;
    }

    void dfs(int d,int idx,string cur){
        if(3*(4-d)<size-idx) return;
        if(d == 4&&idx == size){
            cur.pop_back();
            ret.push_back(cur);
            return;
        }
        for(int i = 1;i<=3&&idx+i<=size;++i){
            if(i!=1&&str[idx]=='0') continue;
            if(i == 3 && atoi(str.substr(idx, i).c_str()) > 255) continue;
            dfs(d + 1, idx + i, cur + str.substr(idx, i) + '.');
        }
    }
};
```

# 总结

注意字符串函数的使用方法的复习：

`str.substr(start,length)`

`atoi(str.c_str()) `

还可以注意一下