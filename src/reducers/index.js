import { combineReducers } from 'redux';
import foodReducer from './food';
import filterReducer from './filter';

const index = combineReducers({
  categories: foodReducer,
  filter: filterReducer,
});

export default index;
