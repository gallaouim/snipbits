---
date: 2020-06-10
title: "How to Remove Duplicates from array in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: javascript_remove_duplicates
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Unique
  - Arrays
  - beginner
---

There is many ways to remove duplicates from an array in Javascript.

I think that the simplest approach is to use `Set` Object, which lets you store unique Values.
`Set` will automatically remove duplicates .

Here is an example

```js
const numbers = [1, 1, 2, 3, 4, 5, 6];
let uniqueNumbers = [...new Set(numbers)];
//uniqueNumbers = [1, 2, 3, 4, 5, 6]
```

a Second Option is to use the filter

```js
const numbers = [1, 1, 2, 3, 4, 5, 6, 7];

const uniqueNumbers = numbers.filter((element, pos) => {
  return numbers.indexOf(element) === pos;
});
```

and the Final Option is to use `forEach()`

```js
const numbers = [1, 1, 2, 3, 4, 5, 6];

const uniqueNumbers = (numbers) => {
  let unique = {};
  numbers.forEach((element) => {
    if (!unique[element]) {
      unique[element] = true;
    }
  });
  return Object.keys(unique);
};
```
