---
date: 2020-12-12
title: "Python Lists"
thumbnail: "./python.png"
cover: "./python.png"
slug: python_lists
featuredImage: ./python.png
expertise: beginner
categories:
  - Python
tags:
  - Python
  - List
  - Beginner
---

Lists are an essential Data Structure that every one may use one day,

They allow us to group together multiple values and reference them all with the same name.

for Example

```python
numbers = [1,2,3]
```

a list can hold values of different Types:

```python
items = ["hi",2,3,4,"text"]
```

we can check if an item is contained into a list with the `in` opertaor

we can reference the items in a list by their index , starting from zero :

```python
items[0] # "hi"
items[1] # 2
```

using the same notation we can change the value stored at a specific index:

```python
items[0] = "bye"

```

we can also use the the `index()` method, this will return to us what is stored at these index .

as with strings, a negative index will start searching from the end

we can get the number of items contained in a list using the `len()` global function, the same we used to get the length of the string `len(items)`

adding the Items can be done with `append()` method, or the extend method like this `items.extend(["test"])`

you can check [here](https://www.snipbits.dev/python-remove-duplicates) to see how to remove Duplicates from a list in Python
