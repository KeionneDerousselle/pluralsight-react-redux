import * as types from './actionTypes';

export function beginAjaxRead() {
  return {type: types.BEGIN_AJAX_READ}
};

export function endAjaxRead() {
  return {type: types.END_AJAX_READ}
};

export function ajaxCallError(error) {
  return {type: types.AJAX_CALL_ERROR, error}
};
