---
date: 2020-05-14
title: "How to clone an array in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: javascript_clone_array
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Array
  - Beginner
---

There is too many ways to clone an Array in Javascript

1. you can use the `slice()` method where it returns a copy of a portion of an array into a new array selected from `begin` to `end`

```js
const clone = (arr) => arr.slice(0);
// clone(['1', '1']) === ['1', '1']
```

2. you can use the spread operator that allows an iterable such as an array expression or string to be expanded in places

```js
const clone = (arr) => [...arr];
// clone(['1', '1']) === ['1', '1']
```

3. The `from()` method creates a new Array instance from an array or iterable object.

```js
const clone = (arr) => Array.from(arr);

// clone(['1', '1']) === ['1', '1']
```

4. You can use The `map()` method that creates a new array with the results of calling a provided function on every element in the calling array.

```js
const clone = (arr) => arr.map((x) => x);

// clone(['1', '1']) === ['1', '1']
```

5. you can use an old method where we converts a JavaScript array to a JSON string and then you parse it again

you can read more about the JSON Methods [here](https://www.snipbits.dev/json-methods)

```js
const clone = JSON.parse(JSON.stringify(arr));

// clone(['1', '1']) === ['1', '1']
```
