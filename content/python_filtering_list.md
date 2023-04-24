---
date: 2020-10-04
title: "How to filter Lists in Python"
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

In this post, we will discuss three methods for list filtering in Python. Specifically, we will walk through how to use list comprehension, generator expressions and the built-in `filter()` method to filter lists in python.

# Filtering Lists using list comprehension

Let's assume that we have Data in a List and we want to extract values or reduce the list based on some Criteria.
For example . let's consider the Following List

```Python
not_filtered_values = ["22", "21". None, "89"]
```

to start we can use list comprehension to filter the `None` values.

```Python
only_numbers_array = [ n for n in not_filtered_values if n != None]
# result= ["22", "21", "89"]
```

we can convert all elements of the List to Integers with a slight change to the list comprehension

```Python
only_numbers_array = [int(n) for n in not_filtered_values if n != None]
# result= [22, 21, 89]
```

we can also filter the List, this can happen when we change the `if` condition

# Filtering using `list()` and `filter()` methods

Sometimes the Filtering Criterias are not so easy to express using list comprehension or generators.
For those cases we can define a function that takes a list and tries to convert each element to an Integer .
When the conversion throws no errors , we return true.
When the conversion throws a value Error, we use an except Statement to catch the Error .

```python
def convert_and_filter(input_list):
  try:
    int(input_list)
    return true
  except ValueError :
    return false
```

The `filter()` function creates an Iterator and the `list()` method allows us to create a list of Results:

```python
filtered_numbers = list(filter(convert_and_filter, not_filtered_values))
```

# Filtering using Generators

When we are dealing with a lot of Data, which is often the case m we can filter using a generator expression.
we can do the following :

```python
not_filtered_values = ["22", "21". None, "89"]

numbers = (int(n) for n in not_filtered_values if n != None)

```

We can now iterate over the generator

you can check [here](https://www.snipbits.dev/python-remove-duplicates) to see how to remove Duplicates from a list in Python
