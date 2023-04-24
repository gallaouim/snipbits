---
date: 2020-06-03
title: "API Development with Node.js and Express"
thumbnail: "./js.png"
cover: "./js.png"
slug: js_api_development
featuredImage: ./js.png
expertise: medium
categories:
  - Javascript
tags:
  - Javascript
  - Nodejs
  - Express
---

This Tutorial is about how to handle API Routes inside of a Node.js and Express Project.

## Definition of Routing

Routing or router in web development is a mechanism where HTTP requests are routed to the code that handles them. In Other Words in the Router you determine what should happen when a user visits a certain page.
When you want to show a User a Message , we may do something like

```js
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  res.send("Hello, User");
});
```

We can use other HTTP Request methods such as `post, put , delete, patch`.

you can see all list of Express methods [here](https://expressjs.com/en/4x/api.html#app.METHOD)

# Project Setup

you can run the Following Steps in your Terminal

```js
// Create a new folder for our project
mkdir node-express-routes
// Change Directory
cd node-express-routes
// Initialise a new Node project
npm init -y
// Create our entry file
touch index.js
// Install Express
npm install express --save
// nodemon will also be installed in Dependencies
npm install -D nodemon
```

Nodemon is helpful because you don't have to restard the Server once you changed something in a File

you can now run `npm start` or `yarn start` and your Project will be up und running inside of the Terminal.

# Routes with Express

we can now create our Express Application and run it on a Port that we specify

```js
const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Express server currently running on port ${PORT}`),
);
```

Now you can add your First Route with a default Get route.

```js
app.get(`/`, (request, response) => {
  response.send("Hello, /");
});
```

We are using `app.get()` because we want a route handler for the `/` route.
The `request` variable contains Infos about the request,
we are able to esponde back to the HTTP request with response .Here we are sending just a simple text back to the browser , we can modify this to send HTML instead .
This will work because `response.send()` can take either a `Buffer` object , a String or an Array .
Express handles these Inputs differently and changes the `content-type` header to match, in our case its set to `text/html`

# Route Parameters

you can now create a new route at `app.get(/users)` and `app.get(users/:id)`

with some Mock Data :

```js
const users = [
  {
    id: 1,
    username: "User1",
    role: "a",
  },
  {
    id: 2,
    username: "User2",
    role: "b",
  },
  {
    id: 3,
    username: "User3",
    role: "c",
  },
];
app.get(`/users`, (request, response) => {
  response.json(accounts);
});

app.get(`/users/:id`, (request, response) => {
  const userId = Number(request.params.id);
  const getUser = users.find((account) => user.id === userId);

  if (!getUser) {
    response.status(400).send("Account not found.");
  } else {
    response.json(getUser);
  }
});
```

we are now able to use `users/:id` to filter our users.
When we describe a route that has a `:parameter`, Express will consider this as a user input and match for that

for `/users` we will get all our users , but for `/users/id` we will only get one user

# BodyParser Middleware

we can add a new Route using `app.post` which uses the request body to add new items to our array.
In order to parse the incoming body content , we will need to install the `body-parser` middleware

```js
npm install --save body-parser
```

next , tell express that we want to use the bodyparser

```js
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

## Post Request

defining `app.post('/users')`route, will allow us to push the incoming body content into our users array.

```js
app.post(`/users`, (request, response) => {
  const incomingAccount = request.body;

  users.push(incomingAccount);

  response.json(users);
});
```

We can use Postman to send a Post Request with a specific JSON body content
