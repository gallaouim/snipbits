---
date: 2020-07-20
title: "How to Copy Text to Clipboard"
thumbnail: "./js.png"
cover: "./js.png"
slug: javascript_copy_clipboard
featuredImage: ./js.png
expertise: medium
categories:
  - Javascript
tags:
  - Javascript
  - Browser
  - Medium
---

we use The copy to clipboard functionality many times daily.
A very common need when building websites is the ability to copy text to clipboard with a single button click.
Javascript can easily do this in short steps:

1. create an `<input>` element to be appended to the document like this and add a Button where you can call your Javascript Function

```html
<input type="text" value="Text to copy" id="myInput" />

<button onclick="copyWithOneClick()">Copy text</button>
```

Now in your Javascript Function :

2. call the `getElementById()`method with your input ID in our case its "myInput" .

3. Use `HTMLInputElement.select()` to select the contents of the `<input>` element.

4. Use `Document.execCommand('copy')` to copy the contents of the `<input>` to the clipboard

your final Javascript function will look like this

```js
function copyWithOneClick() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
```
