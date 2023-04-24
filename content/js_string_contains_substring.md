---
date: 2020-08-18
title: "How to test if a string includes a substring in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_string_includes
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - string
  - contains
  - beginner
---

There is too many ways to check if a Javascript string contains a substring.
Its nowadays one of the most common tasks in any Programming Language

The most simple one, is using the `includes()` method on a string

```javascript
"this is a string".includes("string"); //true
```

based on [caniuse.com](https://caniuse.com/#search=includes) the `includes()` function is supported by all browsers except Internet Explorer.

`ìncludes()` can accept a second paramater, an Integer which Indicates the Position where to start searching for
