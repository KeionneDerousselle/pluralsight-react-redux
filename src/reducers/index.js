import {combineReducers} from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courses: courseReducer // this name determines how you access it in your components
});

export default rootReducer;
