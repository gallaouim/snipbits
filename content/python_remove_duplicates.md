---
date: 2020-05-06
title: "How to remove duplicates from a list in Python"
thumbnail: "./python.png"
cover: "./python.png"
slug: python_remove_duplicates
featuredImage: ./python.png
expertise: beginner
categories:
  - Python
tags:
  - Python
  - List
  - Beginner
---

Filters out the unique values in a list.

-Use a `collections.Counter` to get the count of each value in the list.

-return a list containing only the unique values.

```py
from collections import Counter

def filter_unique(lst):
  return [item for item, count in Counter(lst).items() ]
```

```py
filter_unique([1, 2, 2, 3, 4, 4, 5]) # [1,2,3,4,5]
```
