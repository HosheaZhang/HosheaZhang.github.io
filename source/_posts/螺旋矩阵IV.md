---
title: 螺旋矩阵IV
date: 2022-07-03 16:41:25
tags: 模拟
categories: 算法
---

# 题目

给你两个整数：m 和 n ，表示矩阵的维数。

另给你一个整数链表的头节点 head 。

请你生成一个大小为 m x n 的螺旋矩阵，矩阵包含链表中的所有整数。链表中的整数从矩阵 左上角 开始、顺时针 按 螺旋 顺序填充。如果还存在剩余的空格，则用 -1 填充。

返回生成的矩阵。

<!--more-->

# 示例

## 示例1 

{% asset_img 1.png %}

```
输入：m = 3, n = 5, head = [3,0,2,6,8,1,7,9,4,2,5,5,0]
输出：[[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
解释：上图展示了链表中的整数在矩阵中是如何排布的。
注意，矩阵中剩下的空格用 -1 填充。
```

## 示例2

{% asset_img 2.png %}

```
输入：m = 1, n = 4, head = [0,1,2]
输出：[[0,1,2,-1]]
解释：上图展示了链表中的整数在矩阵中是如何从左到右排布的。 
注意，矩阵中剩下的空格用 -1 填充。
```

# 题目提示

1 <= m, n <= 105
1 <= m * n <= 105
链表中节点数目在范围 [1, m * n] 内
0 <= Node.val <= 1000

# 思考

模拟的做法，每经过一条边，都修改一下边界数量

# 代码

```C++
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<vector<int>> spiralMatrix(int m, int n, ListNode* head) {
        vector<vector<int>>res(m,vector<int>(n,-1));
        ListNode*p=head;
        int up=0,down=m-1;
        int left=0,right=n-1;
        int i=0;
        while(p)
        {
            for(i=left;i<=right;++i) //向右
            {
                res[up][i]=p->val;
                p=p->next;
                if(p==NULL) return res;
            }
            if(up<down) up++;

            for(i=up;i<=down;++i) //向下
            {
                res[i][right]=p->val;
                p=p->next;
                if(p==NULL) return res;
            }
            if(left<right) right--;

            for(i=right;i>=left;--i) //向左
            {
                res[down][i]=p->val;
                p=p->next;
                if(p==NULL) return res;
            }
            if(up<down) down--;

            for(i=down;i>=up;--i) //向上
            {
                res[i][left]=p->val;
                p=p->next;
                if(p==NULL) return res;
            }
            if(left<right) left++;
        }
        return res;
    }
};
```

# 总结