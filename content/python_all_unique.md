---
date: 2020-09-10
title: "Check if all elements in a list are unique in Python."
thumbnail: "./python.png"
cover: "./python.png"
slug: python_all_unique
featuredImage: ./python.png
expertise: beginner
categories:
  - Python
tags:
  - Python
  - List
  - Beginner
---

Returns `True` if all the values in a list are unique, `False` otherwise.

Use `set()` on the given list to remove duplicates, use `len()` to compare its length with the length of the list.

```py
def all_unique(lst):
  return len(lst) == len(set(lst))
```

```py
x = [1, 2, 3, 4, 5, 6]
y = [1, 2, 2, 3, 4, 5]
all_unique(x) # True
all_unique(y) # False
```
