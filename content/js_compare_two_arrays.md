---
date: 2021-10-31
title: "How to compare arrays in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: compare_arrays
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Typescript
  - Javascript
  - Array
  - Beginner
---

# Introduction

There is many ways to compare arrays in Javascript.

Comparing two arrays in JavaScript using either the loose or strict equality operators (== or ===) will most often result in false.
This is due to the fact that arrays and objects are compared by reference and not by value in JavaScript,
 which means this solution does not produce the desired result:

```js
const a = [1,2,3]
const b = [1,2,3]
a === b  //false
```

# JSON.stringify

A very common solution that many people suggest is to use `JSON.stringify()`. This makes us able to serialize the two arrays and compare them as Strings.
an Implementation will look like this
```js

const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const a = [1, 2, 3];
const b = [1, 2, 3];

equals(a, b); // true
```
this is seems like a great solution but there is some edge cases where different values serialized string is the same.
for example
```js
null === undefined; // false
equals([null], [undefined]); // true, should be false
```
these may cause some annoying Issues that are hard to track down and fix.


# A better Way to compare Arrays

A better way is to compare the length of the arrays and then every element using the `Array.prototype.every()`
here is an Implementatoin of this Approach
```js
const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

const a = [1, 2, 3];
const b = [1, 2, 3];
const str = 'a';
const strObj = new String('a');

equals(a, b); // true
equals([str], [strObj]); // false
equals([null], [undefined]); // false
```
