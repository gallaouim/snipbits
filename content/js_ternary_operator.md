---
date: 2020-10-05
title: "Javascript Ternary Operator"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_ternary_operator
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - Opertaor
  - Beginner
---

The Ternary Operator is an Operator in Javascript that works with 3 operands. It's a short way to express conditionals.

It looks like this

```javascript
    <Condition> ? <expression> : <expression>
```

The condition is evaluated as Boolean, and upon the Result,If the Condition is True, The Operator runs the First Expression , otherwise it runs the second one .

Here is an Example :

```javascript
const Boolean = true;

Boolean === true ? play() : stop();
```

We check in the above example if Boolean is True , and if it's the case we call the play() function otherwise we call the stop() function
