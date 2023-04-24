---
date: 2020-05-05
title: "Build a Reactjs Switch Toggle Component"
thumbnail: "./reactjs.png"
cover: "./reactjs.png"
slug: react-toggle-component
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

Renders a toggle component.

- Use the `useState()` to initialize the `isToggleOn` state variable to `false`.
- Use an object, `style`, to hold the styles for individual components and their states.
- Return a `<button>` that alters the component's `isToggledOn` when its `onClick` event is fired and determine the appearance of the content based on `isToggleOn`, applying the appropriate CSS rules from the `style` object.

```jsx
function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const style = {
    on: {
      backgroundColor: "green",
    },
    off: {
      backgroundColor: "grey",
    },
  };

  return (
    <button
      onClick={() => setIsToggleOn(!isToggleOn)}
      style={isToggleOn ? style.on : style.off}
    >
      {isToggleOn ? "ON" : "OFF"}
    </button>
  );
}
```

```jsx
ReactDOM.render(<Toggle />, document.getElementById("root"));
```

#### Live Demo

https://codesandbox.io/s/musing-paper-l0m0s?file=/src/Toggle.js
