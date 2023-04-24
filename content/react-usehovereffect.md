---
date: 2020-05-12
title: "monitoring State with useHoverEffect Reactjs"
thumbnail: "./reactjs.png"
featuredImage: ./reactjs.png
cover: "./reactjs.png"
slug: react-usehover
expertise: beginner
categories:
  - React
tags:
  - React
  - Component
  - State
  - hooks
---

In this Snippet, we will be creating a useHoverEffect hook, that allows our components to know about the hover state of any element that we attach a ref to!

- Detect whether the mouse is hovering an element.
- The hook `returns` a ref and a `boolean` value to let us know if the element with that ref is being hovered
- add the ref to any element whose hover state you want to monitor

```jsx
function useHoverEffect() {
  const [value, setValue] = useState(false);
  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("mouseover", handleMouseOver);
      element.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [ref]);
  return [ref, value];
}
```

```jsx
function App() {
  const [hoverRef, isHovered] = useHover();
  return (
    <div>
      <div
        ref={hoverRef}
        style={{
          width: "500px",
          height: "500px",
          background: isHovered ? "green" : "red",
        }}
      ></div>
    </div>
  );
}

export default App;
```

#### Live Demo

https://codesandbox.io/s/adoring-currying-gc023
