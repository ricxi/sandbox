# PostCSS
A tool for transforming css with javascript.  
Best explanation I've heard that describes PostCSS:
*PostCSS to css is what babel is to javascript*

## Quick Summary of How it Works
PostCSS parses CSS code to create an abstract syntax tree. Plugins can be added to process this tree to add certain types of properties. Afterwards, PostCSS outputs a new CSS file with all the modifications performed by these plugins.

## Setup
1. Create a node project.
2. Install `postcss` and `postcss-cli` as dev dependencies.
3. Install a plugin (this example uses the postcss-import plugin)
```bash
# Step 1
$ mkdir postcss-project 
$ cd postcss-project
$ npm init -y
# Step 2
$ npm i -D postcss postcss-cli
# Step 3
$ npm i -D postcss-import
$ touch postcss.config.js
```
4. In the root directory, create a `postcss.config.js` file. This is where all the configurations for the plugins will be set up.
5. In the `postcss.config.js` file, add your plugins to the `plugins` array.
```javascript
// inside the postcss.config.js file
module.exports = {
	plugins: [
		require('postcss-import`)
	]
}
```
6. Create a script in the package.json file, and run the script (`$ npm run postcss:compile`)
```javascript
...
"scripts": {
	"postcss:compile": "postcss ./src/final.css -dir ./public",
},
...
```
**What is happening?** PostCSS will parse the file named `final.css` and output a file in the `public` directory, which will also be named `final.css`,  with all the plugin modifications applied.

**Note:**
If you have `postcss` installed globally, you can run it in the terminal with this command.  
`$ postcss ./src/fileToBeParsed.css --use postcss-import --output ./newFile.css`  
It is a bit different from the above example because it takes in the destination of the css file you want to be parsed, and it specifies a name for the destination of where you want the outputed css file to be.

7. You can add the `--watch` flag to tell the script to watch for any changes and rerun the command each time there is a change to the input files.
```javascript
...
"scripts": {
	"postcss:compile": "postcss ./src/final.css -dir ./public --watch",
},
...
```