---
title: 路径总和III
date: 2022-05-25 11:56:37
tags: [HOT100, BFS, 前缀和]
categories: 算法
---

# 题目

给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

<!--more-->

# 示例

## 示例1 

{% asset_img 1.png %}

```
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。
```

## 示例2

```
输入：root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
输出：3
```

# 题目提示

- 二叉树的节点个数的范围是 `[0,1000]`
- `-109 <= Node.val <= 109` 
- `-1000 <= targetSum <= 1000` 

# 思考

{% asset_img 2.png %}

为了更快速的找到某个数值在路径中是否出现过，我们可以使用哈希表记录路径中每个数值出现的次数，比如，上图中哈希表中记录了 10 这个数值，当遍历到 18 时，发现哈希表中有 18 - 8 = 10，总次数加上 10 出现的次数即可。

# 代码

```C++
class Solution {
public:
    unordered_map<long long, int> prefix;

    int dfs(TreeNode *root, long long curr, int targetSum) {
        if (!root) {
            return 0;
        }

        int ret = 0;
        curr += root->val;
        if (prefix.count(curr - targetSum)) {
            ret = prefix[curr - targetSum];
        }

        prefix[curr]++;
        ret += dfs(root->left, curr, targetSum);
        ret += dfs(root->right, curr, targetSum);
        prefix[curr]--;

        return ret;
    }

    int pathSum(TreeNode* root, int targetSum) {
        prefix[0] = 1;
        return dfs(root, 0, targetSum);
    }
};
```

# 总结