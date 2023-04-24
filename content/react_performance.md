---
date: 2020-06-23
title: "optimize the Performance of React Apps"
thumbnail: "./reactjs.png"
featuredImage: ./reactjs.png
cover: "./reactjs.png"
slug: react-improve-performance
expertise: medium
categories:
  - React
tags:
  - React
  - Component
  - State
  - hooks
---

This article contains some tips to improve the Performance of your React App.

# memo and PureComponent

Consider this small example here :

```js
import React from "react";

const myApp = (props) => {
    return(
        <div>
            <FirstComponent propFirst ={props.first}>
            <SecondComponent propFirst ={props.second}>
        </div>
    )
};

const FirstComponent = (props) => {
    <p>{props.firs}t</p>
}
const SecondComponent = (props) => {
    <p>{props.second}</p>
}

```

Do you think that `<SecondComponent>` will re-render if only `props.first` changes ?
The Answer is yes, This is because MyApp will be re-rendered and `<SecondComponent>` is in there .
So even if its own props didnt change, its parent component causes it to rerender.
Here we can improve the Performance by using `React.memo` and `React.PureComponent` .
The Idea here is to simply compare old and new props before re-rendering .

When using memo you just need to wrap your component with a `memo()` function .
Now it will only rerender when `second` changes value regardless of how many times its parent rerenders.
Here is te above Example should look like :

```js
const SecondComponent = memo((props) => {
  return <p> {props.second}</p>;
});
```

the `PureComponent` is essentially equivalent to `memo`, but for class based components

```js
class SecondComponent extends PureComponent {
  render() {
    return <p>{this.props.second}</p>;
  }
}
```

you might wonder why React Componets dont automatically include these internal safeguards against excessive rerendering .
Thats because those helpers compare old and new props,for example if the props are very large or we are passing components as props , the comparaison of old/new props can be very expensive .

With `React Hooks` we can use `useMemo` Hook as a similar way to prevent unnecessary work.

# Don't use anonymous Functions

Functions that are used in the main body of a component are usually event handlers or callbacks, In many cases we tempt to use anoynmous Functions like `onClick={() => console.log('test')}`.
As Anonymous Functions aren't assigned an identifier , they aren't persistent when the component gets renderd again . This causes Javascript to allocate a new Memory each time the Component rerenders instead of allocating a Memory only once.

As an optimization Concept we have two Variations :

1- naming and placing handler outside the component

```js
const eventHandler = () => console.log("test");
function FirstComponent() {
  return <button onClick={eventHandler}>Click Me</button>;
}
```

2- using the useCallback Hook

```js
function FirstComponent() {
  const eventHandler = useCallback(() => console.log("test"), []);
  return <button onClick={eventHandler}>Click Me</button>;
}
```

# Don't use Object Literals

This is similar to the "avoiding the use of anonymous Functions", for the simple reason is that the Object Literals don't have a persistent memory space, so the component will need to allocate a new location in memory whenever the component rerenders.

```js
function firstComponent() {
  <div>
    <SecondComponent props={{ name: "mustermann" }} />
  </div>;
}

function secondComponent(props) {
  <div>{this.props.name}</div>;
}
```

each time the `<firstComponent/>` is re-rendered , a new Object Literal has to be created.
That means that the `<secondComponent />` will receive new props too and will rerender.
This Issue can be fixed by giving the object a name (outside of the Component Body) .

# React.lazy and React.Suspense

Code Splitting is a way to make React apps fast, By Code Splitting we mean that
our javascript client source (react code) is splitted(broken) into chunks , and we load this chunks only in lazy way. without code splitting a single chunk could be very large.

## How Code Splitting is done in Reactjs ?

If you are already using `react create app` , you can simply use `react.lazy and react.suspense` , when not then you have to configure your webpack configuration .
Here is an example with `react.lazy and react.suspense`

```js
import React, { lazy, suspense } from "react";
import Header from "./header";
import Footer from "./footer";
const Posts = React.lazy(() => import("./posts"));
function home() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div> Loading</div>}>
        <Posts />
      </Suspense>
      <Footer />
    </div>
  );
}
```

The Fallback Prop will be shown to the user while the second bundle chunk is loaded (in our Case Posts)
