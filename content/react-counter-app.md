---
date: 2020-11-22
title: "How to build a counter Application in Reactjs ? "
thumbnail: "./js.png"
cover: "./react.png"
slug: react_counter_app
featuredImage: ./reactjs.png
expertise: beginner
categories:
  - React
tags:
  - React
  - Example
  - beginner
---

In This Tutorial we will build a simple Counter application in Reactjs, applying many of the concepts and theory that we saw before.

a demo will be found on Codesandbox

we will show the counter inside a `<div>` element and a few Buttons to increment the counter .

```js
<div className="App">
  <Button increment={1} onClickFunction={onClickFunction} />
  <Button increment={5} onClickFunction={onClickFunction} />
  <Button increment={10} onClickFunction={onClickFunction} />
  <Button increment={15} onClickFunction={onClickFunction} />
  <span>{counter}</span>
</div>
```

after that we will create the Button component where we will pass the increment Values and the onClickFunctions

```js
const Button = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment);
  };
  return <button onClick={handleClick}>+{increment}</button>;
};
```

the Button Component has two elements the `increment` and the `onClickFunction`
when then Button is clicked, the clicked Value will be added to the counter, for that reason we use a simple `useState` hook to store the value and set the new one when a button is clicked .
Here is a demo.

#### LIVE DEMO

https://codesandbox.io/s/late-meadow-3vr0k
