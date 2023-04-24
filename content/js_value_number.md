---
date: 2020-07-22
title: "How to test if a value is a number in JavaScript"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_value_number
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - number
  - beginner
---

There is many ways to check if a value is a number.

The first is `isNaN()`. The `isNaN()` function determines whether a value is `NaN` or not.

```js
const value = 2;

isNaN(value); //false

isNaN("test"); //true

isNaN({}); //true

isNaN(1.2); //false
```

If `isNaN()` returns false, the value is a number.

Another way is to use the `typeof` operator. It returns the `number` string if you use it on a number value:

```js
typeof 1; //'number'

const value = 2;

typeof value; //'number'
```
