---
date: 2020-05-16
title: "Detect the browser Window Size with Reactjs Hooks"
thumbnail: "./reactjs.png"
cover: "./reactjs.png"
slug: windowsize-reactjs
expertise: beginner
featuredImage: ./reactjs.png
categories:
  - React
tags:
  - React
  - Component
  - State
  - Beginner
---

This Hook is useful to get the current size of the browser window

- Use the `useState()` to initialize the `windowSize` State variable to the first call of `getSize()`.
  The `getSize()` method will return an Object containing the window's width and height .

- Use the `useEffect()` Hook to set your new State with the help of `setWindowSize()` and the EventTarget method `addEventListener()`
- Don't forget to remove your listener in the return Statement of the useEffect
- The Empty array at the End of the `Useeffect` Hook ensures that effect is only run on mount and unmount

```jsx
const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};
const [windowSize, setWindowSize] = useState(getSize());

useEffect(() => {
  const handleResize = () => setWindowSize(getSize());
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

#### Live Demo

https://codesandbox.io/s/dazzling-jackson-dwzdi?file=/src/App.js
