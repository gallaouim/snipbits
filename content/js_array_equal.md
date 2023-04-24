---
date: 2020-05-14
title: "How to Check if all array elements are equal to a given value in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_all_equal
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Array
  - Beginner
---

The `every()` method tests whether all elements in the array by the provided function. It returns a Boolean value.

```js
const isEqual = (arr, value) => arr.every((item) => item === value);
// isEqual(['1', '1'], '1') === true
// isEqual(['1', '2'], '1') === false
```

when you want for example to Check if all items in an array are equal. you can compare all items the first item of the array

```js
const ItemsareEqual = (arr) => arr.every((item) => item === arr[0]);
// isEqual(['1', '1']) === true
// isEqual(['1', '2']) === false
```
