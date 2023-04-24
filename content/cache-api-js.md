---
date: 2020-05-26
title: "cache API in Javascript"
thumbnail: "./js.png"
cover: "./js.png"
slug: cache-api-javascript
featuredImage: ./js.png
expertise: medium
categories:
  - Javascript
tags:
  - Javascript
  - Cache API
---

This is a small Tutorial about using the Cache API in Javascript

The Cache API have a big role in the Offline Modus of many web Apps.
It allows the Service Workers to cache and retrieve Resources like CSS files , images , JSON files... to be stored.

As the Cache API is not available in all browsers we have first to check if the browser supports the Cache API

## Check the `cache` Support

note that caches is an instance of `cachestorage`

```js
let cacheSupported = "caches" in window;
```

The second Step is to create or initilize a cache

## Creating `cache`

we can create a cache using the `open` Method , which will return a `promise`.If the Cache already exists , then the `open` method will not create any new Cache with the same name

```js
caches.open("Name of your Cache").then((cache) => {});
```

Note that you :

- cannot access the Cache set up for other Domains
- The created Cache will be only created for your Domain
- you can add multiple Caches for the same Domain , therefor you can access them using `keys()` method

Now you can use your cache to save or retrieve Data from it :

## Adding Items to `cache`

to cache a Resource , there is 3 Methods `add()`, `addAll()`, `set()`

1. the `add` Method

In the following Example , a request for `https://jsonplaceholder.typicode.com/posts/` is sent to server, once the data is received , the response will be cached .

```js
const cacheName = "Posts";
const url = "https://jsonplaceholder.typicode.com/posts/";
caches.open(cacheName).then((cache) => {
  cache.add(url).then(() => {
    console.log("Data cached ");
  });
});
```

2. the `addAll` Method

`addAll` accepts an array of URLs, returns a promise when all the resources are cached .

```js
const cacheName = "Posts";
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
];
caches.open(cacheName).then((cache) => {
  cache.addAll(urls).then(() => {
    console.log("Data cached ");
  });
});
```

note that add and addAll methods do not cache response that are not in the 200 range, but the `put` method lets you store any response

3. the `put` Method

`put` adds a key/value pairs to current `cache`.
we need to manually fetch the request and set the value.

```js
const cacheName = "Posts";
const url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url).then((res) => {
  return caches.open(cacheName).then((cache) => {
    return cache.put(url, res);
  });
});
```

## Retrieving from cache

using the `cache.match()` you can get the Response stored to the gematcht URL

```js
const cacheName = "Posts";
const url = "https://jsonplaceholder.typicode.com/posts/";
caches.open(cacheName).then(cache => {
  cache.match(url).then(posts => {
    console.log(posts);
  }
});
```

## Retrieving all Items from the Cache

The `cache` contains `keys` method which will have all the url of the current cache object

based on our previous Example (adding to cache).

```js
caches.open("Posts").then((cache) => {
  cache.keys().then((arrayOfRequests) => {
    console.log(arrayOfRequests);
  });
});
```

`arrayOfRequests` is an array of Request Objects , which has all details about the made Requests.

## Retrieving all Caches

sometimes you have many caches and you want to retrieve them all, as we mentioned before in the above method , `cache` contains `keys method`, so we can do like this:

```js
caches.keys().then((keys) => {
  // keys is an array with the list of keys
});
```
