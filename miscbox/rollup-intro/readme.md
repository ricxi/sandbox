# Rollup
I wanted to better understand the tooling behind frameworks such as svelte and react, so that I could better customize or troubleshoot my frontend applications. Since rollup is such a huge player in the standard svelte template, I thought it'd be a good place to start.

## What is Rollup?
Rollup is a module bundler. What is a module bundler? A piece of software that combines many javascript files into one file.

## Setup & Basics
1. Download/install rollup `npm i rollup` (global install is cool tool).
2. Create a `rollup.config.js` file, in the root directory.
3. Inside the rollup config file, specify: 
	* the `input` parametre (the entry point of the application)
	* the `output`, which is an object that indicates where to send the compiled bundle
```javascript
// rollup.config.js
export default {
	input: './src/index.js',
	output: {
		file: './public/build/bundle.js`,
	},
}
```
4. Bundle everything through the terminal with this command (skip npx for global install)
```bash
$ npx rollup -c rollup.config.js
```
* `-c` specifies the config file by preceding it (if you leave it blank, it'll default to rollup.config.js)
