---
date: 2020-06-27
title: "React Interview Questions"
thumbnail: "./reactjs.png"
featuredImage: ./reactjs.png
cover: "./reactjs.png"
slug: react-interview-questions
expertise: beginner
categories:
  - React
tags:
  - React
  - Questions
  - Interview
---

# what is React?

Open frontend javascript Library, which is used for building user interfaces especially for SPA , It is used for handling view layer for web and mobile apps.

# major Features of Reactjs?

- It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
- Supports server-side rendering.
- Follows Unidirectional data flow or data binding.
- Uses reusable components to develop the view.

# How to create components in React?

There is two possible ways to create a component in react

**1-Function Components:** This is simplest way to create a component. Pure Javascript Functions that accept props object as first Parameter and return react elements

```js
function SayHi({ name }) {
  return <h1>{`Hi, ${name}`}</h1>;
}
```

**2-Class Components:** You can also use ES6 class to define a component

```js
class SayHi extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.name}`}</h1>;
  }
}
```

# When to use a Class Component / Function Component?

If the Component needs state or lifecycle methods the use class Components otherwise use function components . but from React 16.8 with the addition of Hooks, you can use state and lifecycle methods that were only available for the Class Compoenent

# What are Pure Component ?

they are exactly the same as `React.Component` except that it handles the `shouldComponentUpdate()` method for us. When props or state changes, PureComponent will do a shallow Comparison on both props and state.

# What is state in React?

State of a component is an object that holds some information that may change over the lifetime of the component. We should always try to make our state as simple as possible and minimize the number of stateful components.

# What are props in React?

Props are inputs to components. They are single values or objects containing a set of values that are passed to components on creation using a naming convention similar to HTML-tag attributes. They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality:

Pass custom data to your component.
Trigger state changes.
Use via this.props.reactProp inside component's render() method.

# What is the difference between state and props?

Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.
