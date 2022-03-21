import { createStore } from 'redux';
import { combineReducers } from 'redux';
import accountReducer from './accountReducer';

// combine reducers by providing a key for each reducer;
// the key can be anything, but it's better to choose something
// that makes sense (for example: key is 'account' for 'accountReducer')
const reducers = combineReducers({ account: accountReducer });

// pass in the reducers with a default state
export const store = createStore(reducers, {});
