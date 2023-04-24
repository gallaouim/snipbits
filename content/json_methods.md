---
date: 2020-05-18
title: "JSON methods"
thumbnail: "./blog.png"
slug: json-methods
featuredImage: ./blog.png
expertise: beginner
categories:
  - Blog
tags:
  - JSON
---

JSON (JavaScript Object Notation) is a data-interchange format. It is easy for humans to read and write.
sometimes we want to convert it into a String, for example when we want to send it over a network.

we could implement his conversion like this :

```js
let person = {
  name: "max",
  lastname: "mustermann",
  toString() {
    return `{name: "${this.name}", lastname: ${this.lastname}}`;
  },
};

alert(person); // {name :"john", lastname : "mustermann"}
```

But in the Development Process, new Properties will be added, old one will be removed or updated,
such `toString()` method every time is not the best idea. we could loop over Properties , but the problem is when our object is nested so we will have to implement their conversion too.

Happily, There is no need to handle all this, This Task is already solved with `stringify()`

Javscript provides two methods when it comes to `JSON` :

- `JSON.stringify()`to convert a JavaScript object to a JSON string.
- `JSON.parse()` parses a JSON string, constructing the JavaScript object described by the string.

## JSON.Stringify()

As we said before when sending data to a web server, the data has to be a string.
Here is an example with `stringify()` :

Imagine we have this object in JavaScript:

```js
let object = { name: "max mustermann", age: 30 };
```

This is how we convert it into a String :

```js
var myJSON = JSON.stringify(obj);
```

The result will be a string following the JSON notation.

## JSON.parse()

When receiving data from a web server, the data is always a string.

Parse the data with `JSON.parse()` and it will become a JavaScript object.

for example :

```js
var obj = JSON.parse('{ "name":"max mustermann", "age":30}');
```
