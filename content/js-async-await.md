---
date: 2020-05-22
title: "Async Await Functions Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_async_await
featuredImage: ./js.png
expertise: medium
categories:
  - Javascript
tags:
  - Javascript
  - Promise
  - Async/Await
  - medium
---

Async/await Functions , an addition to the ES2017 , help us to write a synchronous-looking code while performing asynchronous Tasks behind the scenes .

With the help of the genrators and Promises, we can achieve the Functionality of the async functions.

## Example

```js
const sayHi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi Snipbits");
    }, 2000);
  });
};

const msg = async () => {
  const msg = await sayHi();
  console.log("From the sayHi Function :", msg);
};
```

**await is an operator to wait for a promise to resolve or reject,it can be used only inside an async function**

When There is too multiple steps involved then the use of async functions is an evidence .

### Example

```js
const sayHi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi snipbtis");
    }, 2000);
  });
};
const introdceYourself = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("here to introduce myself");
    });
  });
};

const msg = async () => {
  const sayHi = await sayHi();
  const introduceYourself = await introdceYourself();
  console.log("First await :", sayHi, "Second await :", introduceYourself);
};
```

In the above example , each step is done sequentially , but we can use Promise.all if we want all steps to be computed in parallel

```js
const msg = async () => {
  const [sayHi, introduceYourself] = await Promise.all([
    sayHi(),
    introdceYourself(),
  ]);

  console.log(sayHi, introduceYourself);
};
```

## Returning Promise

Async Function return always a promise , to access the returned values , we may use `.then`

### example

```js
const sayHi = async () => {
  return "hi";
};
const a = hi();
console.log(a); // [object Promise]
a.then((a) => console.log(a)); // hi
sayHi().then((x) => console.log(x)); //hi
```

note that we can define async function expressions and async arrow functions.

## Error Handling

Error Handling in Async Functions are done synchronously . using the `try` `catch` statements

```js
const sayHi = async () => {
  return new Promise((resolve, reject) => {
    const val = Math.round(Math.random());

    val ? resolve("accepted") : reject("rejected");
  });
};
const msg = async () => {
  try {
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
};
msg(); // accepted
msg(); // rejected
msg(); // rejected
msg(); // rejected
```

The Synchronous error handling works also when there is an actual runtime or syntax error happening

## Async Functions with Fetch API

its a common used pattern in the web developement to make a fetch request within an async function

### example

```js
async function fetchPosts(endpoint) {
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map((post) => post.title);

  console.log(data);
}

fetchPosts("https://jsonplaceholder.typicode.com/posts");
```
