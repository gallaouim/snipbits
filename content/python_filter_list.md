---
date: 2020-09-08
title: "How to filter list in Python"
thumbnail: "./python.png"
cover: "./python.png"
slug: python_filter_list
featuredImage: ./python.png
expertise: beginner
categories:
  - Python
tags:
  - Python
  - List
  - Beginner
---

Filtering a lists means that you will keep in list the elements that satisfy a given Condition.
For example , filtering `[1,2,3,4,5,"x"]` to keep only the integers in the list.

# Use a List Comprehension to filter a List

We can use the Syntax `[item for item in list if condition]`, with list as a list and condition as a boolean expression to create a list containing each element in list that satisifies condition .

Here is an example :

```python
numbers = [1, 2, 3, 4]
filtered_numbers = [number for number in numbers if number < 10]
```

This above example will filter the numbers

# use filter() to filter a list

you can call `filter (function, iterable)` where the iterable is your list and the function is a boolean function which returns true when an element of the iterable satisfy the given condition.
after filtering , you can call `list (iterable)` to convert the iterable into a list .

Here is an example :

```python
numbers = [1,2,3,4,5,6,72,75,12,22]
def less_than_ten(number):
  return number > 10

iterator = filter (less_than_ten, numbers)
list(iterator)

```

you can check [here](https://www.snipbits.dev/python-remove-duplicates) to see how to remove Duplicates from a list in Python
