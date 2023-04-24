---
date: 2020-09-27
title: "How to check if an object is empty in JavaScript"
thumbnail: "./js.png"
cover: "./js.png"
slug: empty_object_javascript
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Object
  - beginner
---

The javascript Objects are compared by reference, that's why we cannot do a comparaison like this

```js
let obj = {};

if (obj === {}) {
}
```

The Solution is to pass the built-in method `Object.keys()` and check if the Object Constructor is an Object like this

```js
let obj = {};

Object.keys(obj).length === 0 && obj.constructor === Object;
```

The second check is to avoid the False Positives.
