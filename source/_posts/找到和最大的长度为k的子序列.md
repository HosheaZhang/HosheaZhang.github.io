---
title: 找到和最大的长度为k的子序列
date: 2022-04-11 13:39:13
tags: 模拟
categories: 算法
---

# 题目

给你一个整数数组nuns和一个整数k。你需要找到nums中长度为k的子序列,目这个子序列的和最大。
请你返回任意—个长度为k的整数子序列。
子序列定义为从一个数组里册删除—些元素后，不改变剩下元素的顺序得到的数组。

<!--more-->

# 示例

### 示例1 

``` 
输入: nums = [2,1,3,3],k =2
输出:[3,3]
解释:
子序列有最大和:3 + 3 = 6
```

### 示例2

```
输入: nums = [-1,-2,3,4],k = 3
输出:[-1,3,4]
解释:
子序列有最大和: -1 +3+4=6 
```

### 示例3

```
输入: nums = [3,4,3,3],k = 2
输出:[3,4]
解释:
子序列有最大和:3 +4 = 7，另一个可行的子序列为[4,3] 
```

# 思考

模拟题，因为是子序列，不需要找到相邻的k个值，所以题解的思路比较清晰，直接排序找到排名为前k大的值，将对应的值按照顺序输出即可

#  代码

```C++
class Solution{
    public:
    vector<int> maxSubsequence(vector<int>& nums,int k){
        int n = nums.size();
        vector<int> ord(n);
        for(int i = 0;i<n;i++) ord[i]=i;
        sort(ord.begin(),ord.end(),[&](int i,int j){
            return nums[i]>nums[j];
        });
        
        ord.resize(k);
        sort(ord.begin(),ord.end());
        vector<int> res;
        for(int i = 0;i<k;i++){
            res.push_back(nums[ord[i]]);
        }
        return res;
    }
}
```

# 总结

第七行将第三个参数直接设为函数这个方法可以学习一下

```
[&](参数1，参数2){ /*函数体*/}
```

