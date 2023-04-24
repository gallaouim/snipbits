---
date: 2020-10-20
title: "check if all array elements are equal python"
thumbnail: "./python.png"
cover: "./python.png"
slug: python_array_equal
featuredImage: ./python.png
expertise: beginner
categories:
  - Python
tags:
  - Python
  - array
  - Beginner
  - list
---

In This Post we will see the Methods on how to check if all elements in a list are the same/equal.
[In a previous one we talked about the same thing using the array slice syntax](https://www.snipbits.dev/python-all-equal)

## 1 Using `Set()`

Set is a collection type in Python. It can't have duplicate elements in it.
All the elements in the set are unique.

#### Algorithm

- convert the list into the set
- if the length

```python
listOfChar = ['1','1','1','1']
if len(set(listOfChar) == 1):
  print "all elements are equal"
else:
  print "not all elements are equal"
```

If the Total Count of a Set is One , that means that all the elements in the List are equal .

## using Python `count()` Function

The `count()` function return the number of Occurences of the input element in a list .
To check if all the elements are equal , we can compare the number of occurences of the first element in the list with the length of the list .

```python
listOfChar = ['1','1','1','1']
if listOfChar.count(listOfChar[0]) == len(listOfChar):
  print "all elements are equal"
else:
  print "not all elements are equal"
```

## Using `all()` Function

the `all()` is a function that takes an iterable and returns a boolean.True if all elements are true and False if all elements are False.

```python
listOfChar = ['1','1','1','1']
if all(x ==listOfChar[0] for x in listOfChar):
  print "all elements are equal"
else:
  print "not all elements are equal"
```

if the all returns true , that means all the elements in the list are Equal , if not that means not all of Them are Equal.
