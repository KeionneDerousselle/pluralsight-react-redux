import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

export default function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export default function loadAuthors(){
  return dispatch => {
    return AuthorApi.getAllAuthors()
    .then(authors => {
      dispatch(loadAuthorsSuccess(authors))
    })
    .catch(error => {
      throw(error);
    })
  }
}
