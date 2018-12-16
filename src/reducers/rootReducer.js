/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import staffReducer from './staffReducer';
import clubReducer from './clubReducer';
import ruleReducer from './ruleReducer';

export default combineReducers({
  staff: staffReducer,
  club: clubReducer,
  rule: ruleReducer
});