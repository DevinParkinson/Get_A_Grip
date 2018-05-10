import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import pistols from './pistols'

const rootReducer = combineReducers({
  user,
  flash,
  pistols
});

export default rootReducer;
