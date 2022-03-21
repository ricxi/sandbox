# Redux Core Setup
1. Install Redux: `npm i redux`
2. Install React bindings: `npm i react-redux`
3. Install dev tools: `npm install --save-dev @redux-devtools/core`

## Guide
1. In the `src` directory, create a `state` directory.
2. Create an account reducer (create an `accountReducer.js` file):
    * In this file, write an `accountReducer` function and export it
3. Create a store (create a `store.js` file):
    * Combine all your reducers by: 
        * importing and using the `combineReducers` function (pass in all individual reducers)
        * store the return value of the `combineReducers` function in a variable call `reducers`
    * import the `createStore` function
    * Pass in `reducers` to `createStore`, and an initial state (an empty object in this case)
    * export the store
4. In your `index.js` file, import a `Provider` from `react-redux` and wrap it around the components that want access to the store
    * import the store and pass it to the Provider's `store` prop

5. For a component that wants access to the store:
    * import the `useSelector` hook from `react-redux`
    * pass to the `userSelector` hook, a callback function that returns the state of the intended reducer

6. To change state, create an `actionCreators.js` file, and write all the action creator functions here
7. In the component where you want to change state
    * import `useDispatch`, create an instance of it by storing it in a variable called `dispatch`
    * import `bindActionCreators` from `redux`
    * import all action creators and bind them with dispatch
    * You are now able to call the action creators to dispatch an action

