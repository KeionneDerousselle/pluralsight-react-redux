import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
import authorReducer from './authorReducer';

const rootReducer = combineReducers({
  courses: courseReducer, // this name determines how you access it in your components
  authors: authorReducer
});

export default rootReducer;
