# Typescript Express Basics

## Setup
```bash
$ npm init --yes # intialize 
$ npx tsc --init # create typescript config file
$ mkdir src
$ touch ./src/index.ts
$ npm i typescript -D
$ npm i ts-node-dev -D  # setup for auto-reloading dependency
$ npm i express 
$ npm i @types/node @types/express -D # install type definitions for node and express
```

## Middleware
Place route middleware (can be in an array) in front of a route handler:
```javascript
app.get('/api/resource', [
  [middleware],
  routerHandler,
]);
```
For global middleware, pass it as an argument to `app.use`, which will apply it to every single route
```javascript
app.use(middleware)
```
`app.use` can be moved before or after certain routes to position the middleware in the desired location in the chain

## Project Structure
* `routes.ts` contains all the routes for the application
* routes -> controllers -> services -> models  

## Notes
ES6 imports can be used in typescript applications, but I think it's just syntactic sugar right now

## References
* [repo based on this amazing guide](https://youtu.be/KgnJNJk9-to)
* [json & urlencoded explanation](https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded)
* [calling next for middleware](https://stackoverflow.com/questions/44238150/why-calling-next-in-express-routes-is-optional)
* [responses: return or no return ](https://stackoverflow.com/questions/34256978/in-express-js-should-i-return-response-or-not)
* [currying](https://stackoverflow.com/questions/32782922/what-do-multiple-arrow-functions-mean-in-javascript)