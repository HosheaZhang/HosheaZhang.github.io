---
title: 跳跃游戏IV
date: 2022-04-22 16:23:11
tags: BFS
categories: 算法
---

# 题目

给你一个整数数组 arr ，你一开始在数组的第一个元素处（下标为 0）。

每一步，你可以从下标 i 跳到下标 i + 1 、i - 1 或者 j ：

i + 1 需满足：i + 1 < arr.length
i - 1 需满足：i - 1 >= 0
j 需满足：arr[i] == arr[j] 且 i != j
请你返回到达数组最后一个元素的下标处所需的 最少操作次数 。

注意：任何时候你都不能跳到数组外面。

<!--more-->

# 示例

## 示例1 

```
输入：arr = [100,-23,-23,404,100,23,23,23,3,404]
输出：3
解释：那你需要跳跃 3 次，下标依次为 0 --> 4 --> 3 --> 9 。下标 9 为数组的最后一个元素的下标。
```

## 示例2

```
输入：arr = [7]
输出：0
解释：一开始就在最后一个元素处，所以你不需要跳跃。
```

## 示例3

```
输入：arr = [7,6,9,6,9,6,9,7]
输出：1
解释：你可以直接从下标 0 处跳到下标 7 处，也就是数组的最后一个元素处。
```
# 题目提示

- `1 <= arr.length <= 5 * 104`
- `-108 <= arr[i] <= 108`

# 思考

# 代码

```C++
class Solution {
public:
    queue<pair<int,int> > q;    //队列存索引和到该索引的步数
    unordered_set<int> vis;     //存已访问过的节点，因为以前能访问过的步数肯定更小，不必再进队
    void visit(int id, int step) {
        if(!vis.count(id)) {
            vis.insert(id);
            q.push({id, step});
        }
    }
    int minJumps(vector<int>& arr) {
        int n = arr.size();
        unordered_map<int, vector<int>> hash;   //值到索引们的映射
        for(int i = 0; i < n; i++) hash[arr[i]].push_back(i);
        q.push({0, 0});
        vis.insert(0);
        while(!q.empty()) {
            auto [id, step] = q.front();
            q.pop();
            if(id == n-1) return step;  //到达目标
            step++;
            if(hash.count(arr[id])) for(auto x : hash[arr[id]]) visit(x, step);
            hash.erase(arr[id]);     //该值对应的索引们都访问过了，避免下次判断，不然会超时
            if(id-1 >= 0) visit(id-1, step);
            if(id+1 < n) visit(id+1, step);
        }
        return 0;
    }
};
```

# 总结

