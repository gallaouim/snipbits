---
date: 2020-07-13
title: "How to detect Network Status in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: NavigatorOnLine
featuredImage: ./js.png
expertise: beginner
categories:
  - Javascript
tags:
  - Javascript
  - navigator
  - beginner
---

`navigator.onLine` returns the online status of the browser. The Property returns a Boolean Value, `true` mean that you are online and `false` mean that you are offline .

many huge pushs are made the last few years to make offline browsing more amusing.

# navigator.onLine

you can query `navigator.onLine`, which returns true or false depending on whether the user is online or not

or we can hook into the online and offline events of the window object to listen for when the network status changes to either online or offline

```js
window.addEventListener("offline", () => {
  // online
});
window.addEventListener("online", () => {
  // offline
});
```
