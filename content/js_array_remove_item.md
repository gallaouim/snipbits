---
date: 2020-10-07
title: "How to Remove Elements From End or Beginning of Javascript Array"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_remove_from_array
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Array
  - Beginner
---

Arrays in Javascript allow us to group values and iterate over them, we can add and remove array elements in different ways.
Instead of a delete method, the Javascript array has a variety of ways that allow you to clean array values with

# Remove Elements from End of Javascript Array

Javascript Array Elements can be removed from the end of an array by setting the length Property to a value less than the Current Value. Any Element whose index greater or equal to the new Length will be removed

```javascript
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array.length = 4;

//array  = [1,2,3,4]
```

we can remove the last Element of an array using the `pop()` method . The pop Method modifies the array on which it is invoked

# Remove Elements from Beginning of Javascript Array

How to remove the first Element of a Javascript Array ?

the Shift Method works like the pop method except it removes the first Element of a Javascript array instead of the Last.

For example :

```javascript
var array = [1, 2, 3, 4];
array.shift();
//array = [2,3,4]
```
