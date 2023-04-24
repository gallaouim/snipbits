---
date: 2020-08-17
title: "How to swap two elements in an array in  Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_swap_numbers
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - array
  - swap
---

How can we swap two elements in an array, in javascript ?

Suppose that we have an array `numbers` which contains 5 Numbers .

`const numbers = [1,2,3,4,5]`

For example we want to swap two elements , the first at index 3, in our case number `4` with the element of index 0 .

we can use a temporary item `temporary` to store the Value of index 3 , then we put the number of index 0 in the place of 3 and we assign the temporary item to the one with index 3

```js
const temporary = number[3];
number[3] = number[0];
number[0] = temporary;
```

another option without declaring a temporary Variable is to use the syntax:

```js
const numbers = [1, 2, 3, 4, 5];
[numbers[0], numbers[3]] = [numbers[3], numbers[0]];
```
