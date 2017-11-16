import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';
import { beginAjaxRead, endAjaxRead } from './ajaxStatusActions';

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function loadAuthors(){
  return dispatch => {
    
    dispatch(beginAjaxRead());
    
    return AuthorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors));
      dispatch(endAjaxRead());
    })
    .catch(error => {
      throw(error);
    })
  }
}
