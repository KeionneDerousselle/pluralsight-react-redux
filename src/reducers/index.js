import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses: courseReducer, // this name determines how you access it in your components
  authors: authorReducer,
  ajaxStatus: ajaxStatusReducer
});

export default rootReducer;
