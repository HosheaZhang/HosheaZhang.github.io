---
title: 何为K的子数组
date: 2022-05-30 11:26:37
tags: [HOT100, 哈希表]
categories: 算法
---

# 题目

给你一个整数数组 `nums` 和一个整数 `k` ，请你统计并返回 *该数组中和为 k 的子数组的个数* 。

<!--more-->

# 示例

## 示例1 

```
输入：nums = [1,1,1], k = 2
输出：2
```

## 示例2

```
输入：nums = [1,2,3], k = 3
输出：2
```

# 题目提示

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`

# 思考

# 代码

```C++
class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {
        unordered_map<int, int> mp;
        mp[0] = 1;
        int count = 0, pre = 0;
        for (auto& x:nums) {
            pre += x;
            if (mp.find(pre - k) != mp.end()) {
                count += mp[pre - k];
            }
            mp[pre]++;
        }
        return count;
    }
};
```

# 总结