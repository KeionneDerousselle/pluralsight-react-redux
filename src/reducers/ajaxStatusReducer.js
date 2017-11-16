import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.ajaxStatus, action){
  
  if(action.type == types.BEGIN_AJAX_READ){
    return Object.assign({}, state, {reads: state.reads + 1});
    
  } else if (types.END_AJAX_READ){
    return Object.assign({}, state, {reads: state.reads - 1});
  }
  return state;
}