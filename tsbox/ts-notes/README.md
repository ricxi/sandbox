# Typescript Notes
Some quick notes in case I need to review typescript.  
For learning and review, I find that keeping most of my notes in my code is the best approach for me. In addition with a readme that has some additional notes, and a makeshift table of contents to navigate the source code files. Obviously, none of the code here is meant for production since it would definitely not pass a code review.

## Setup
1. Install globally or as a dev dependency in node project
```bash
$ npm i -g typescript
$ npm i typescript -D
```
2. Create a `tsconfig.json` in root.
3. Install other development dependencies:
`npm i ts-node -D`

**N.B.** If you have typescript installed globally, you can compile a typescript file with the command `tsc index.ts`.

## Configuring `tsconfig.json`
```json
{
    "compilerOptions": {
        "outDir": "dist", 
        "target": "ESNext",
        "watch": true,
        "lib": ["dom", "ESNext"], 
        "esModuleInterop": true,
    }
}
```
* `outDir`: where to send the compiled typescript file
* `target`: which version of javascript to compile to
* `watch`: setting to true will recompile with tsc after every save
* `lib`: include typings for certain environments and APIs, such as the dom or es2017
* `esModuleInterop`: allows for modern imports

## Navigating Source Code Contents
* index.ts (basics)
1. 1-interfaces.ts (interface basics and using interfaces in functions)
2. 2-interfaces-extend.ts (extending interfaces)
3. 3-types.ts 
4. 4-tuples.ts
5. 5-generics.ts
6. 6-generics-class.ts
7. 7-utility-types.ts
8. 8-express.ts (external libraries and installing type definitions)

## How to Use External Libraries
When using external libraries, you must also find and install their type definitions as dev dependencies.  
Example of installing express and its type definitions
```bash
$ npm i express 
$ npm i @types/express -D
```
Before installing type definitions:
```javascript
const app = express();
```
After installing type definitions:
```javascript
const app: Express = express();
```

## `type` vs `interfaces` 
Case by case basis

## References
* [TS Deep Dive](https://github.com/basarat/typescript-book)
* [ES Module Interop Explanation](https://stackoverflow.com/questions/56238356/understanding-esmoduleinterop-in-tsconfig-file)