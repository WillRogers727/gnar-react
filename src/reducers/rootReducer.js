/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import staffReducer from './staffReducer';

export default combineReducers({
  staff: staffReducer
});