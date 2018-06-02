import { createStore, applyMiddleware, combineReducers } from 'redux';
import { enableBatching } from 'redux-batched-actions';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer.js';


// const middleware = [chainMiddleware, thunkMiddleware];
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
