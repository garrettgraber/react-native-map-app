import { combineReducers } from 'redux';

import * as searchReducer from './searchBarReducers.js';
import * as counterReducer from './counterReducer.js';

const allReducers = Object.assign({}, searchReducer, counterReducer);

export default combineReducers(allReducers);