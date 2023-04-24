---
date: 2020-06-01
title: "JavaScript map() Method"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_map_method
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Array
  - beginner
---

there is more than one technique to iterate through datasets in Javascript. One of the popular methods is the `map()` method.

the `map()` method creates an array from calling a function on each item in an array.

So when is it useful to use the `map()` method ?

# Call a Function on Each Item in an Array

```js
const numbers = [1, 2, 3, 4];
const newNumbers = numbers.map((number) => number * 2);

//newNumbers = [2, 4, 6, 8]
```

# Convert a String to an Array

we can use the `map()` method to convert a String to an array. We will not develop our Version of map for strings but we can call the `call()` method to apply `map()` on Strings

`call()` method allows us to use the context of one object on another.

```js
const lastname = "Musterman";
const newLastname = Array.prototype.map.call(lastname, (letter) => letter);
//newLastname =["M", "u", "s", "t", "e", "r", "m", "a", "n"]
```

# Rendering List in Libraries like Reactjs

some Libraries like Reactjs use the `map()` to render items in a List, Here is an example:

```js
import React from "react";
const Numbers = [1, 2, 3, 4];
const List = () => (
  <div>
    {numbers.map((number) => (
      <p>{number}</p>
    ))}
  </div>
);
```

# Formatting an Array of Objects

we can use the `map()` method to iterate through objects in an array
, we can modify the content of each Object inside the array and return a new Array.

```js
const Users = [
  { name: "User1", lastname: "lastname1" },
  { name: "User2", lastname: "lastname2" },
];

const NewUsers = myUsers.map((item) => {
  const Users = {};

  Users[item.name] = item.lastname;
  Users.age = item.name.length * 10;

  return Users;
});
```
