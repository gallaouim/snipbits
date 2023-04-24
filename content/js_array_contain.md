---
date: 2020-05-14
title: "How to Check if an array contains a value matching some criterias in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_array_contain
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Array
  - Beginner
---

The `some()` method tests if at least one element passes the test implemented by the provided function. It returns a Boolean value.

```js
const contains = (arr, criteria) => arr.some((v) => criteria(v));
// contains([10, 20, 30], v => v > 25 )  === true
```
