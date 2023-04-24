---
date: 2020-11-30
title: "how to replace an item of an array in Javascript ? "
thumbnail: "./js.png"
cover: "./js.png"
slug: js_replace_element
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Arrays
  - beginner
---

In this Tutorial we will see how to replace an Element content in an array using a simple assigment .

If you already know the index of the Item you want to replace then you can use a simple assigment `items[i]`, with i the index of the Element.

```js
const items = [1, 2, 3, 4, 5, 6];

items[i] = "your new item";
```

if you don't know the index of the element , you might first use the `indexOf()` function to find the index of the element and then replace it
For example :

```js
const items = [1, 2, 3, 4, 5];
const index = items.indexOF(1); //INDEX = 0;
```
