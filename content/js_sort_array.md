---
date: 2020-09-13
title: "How to Sort an array in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: javasript_sort_array
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - array
  - sort
  - beginner
---

One of the Classic Tasks in a Life of a Developer is to sort something .

Lets begin with the first Example , if you want to sort an array alphabetically, you can use the built in `sort()` function .

```js
const names = ["first", "third", "second"];
names.sort(); //  ["first", "second", "third"]
names.sort().reverse(); // ["third" , "second" , "first"]
```

when working with an array of Integers we need to use the Optional `compareFunction` that comes with `sort()`. It specifies a function that defines the default order. In other words, we need to provide this function ourself.

Given two elements `a` and `b` being compared in `comparedFunction`, if the result is less than 0, `a` comes first. If the result is greater than 0 , `b` comes first

```js
const numbers = [55, 33, 32, 2, 4, 33];
numbers.sort(); // [55,33,32,2,4,33]
numebrs.sort((a, b) => a - b); //[2, 4, 32, 33, 33, 55]
```
