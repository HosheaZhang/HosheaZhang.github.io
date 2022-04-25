---
title: 删除链表的倒数第N个结点
date: 2022-04-25 15:20:13
tags: [HOT100, 双指针]
categories: 算法
---

# 题目

给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

<!--more-->

# 示例

## 示例1 

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

## 示例2

```
输入：head = [1], n = 1
输出：[]
```

## 示例3

```
输入：head = [1,2], n = 1
输出：[1]
```
# 题目提示

- 链表中结点的数目为 `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

# 思考

快慢指针

# 代码

```C++
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* dummy = new ListNode(0, head);
        ListNode* first = head;
        ListNode* second = dummy;
        for (int i = 0; i < n; ++i) {
            first = first->next;
        }
        while (first) {
            first = first->next;
            second = second->next;
        }
        second->next = second->next->next;
        ListNode* ans = dummy->next;
        delete dummy;
        return ans;
    }
};
```

# 总结