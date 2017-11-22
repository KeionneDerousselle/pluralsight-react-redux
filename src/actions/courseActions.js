import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import { beginAjaxRead, endAjaxRead, ajaxCallError } from './ajaxStatusActions';

export function createCourseSuccess(course){ //action creator. a function used to create an action
  return {type: types.CREATE_COURSE_SUCCESS, course};
};

export function updatedCourseSuccess(course){ //action creator. a function used to create an action
  return {type: types.UPDATED_COURSE_SUCCESS, course};
};

export function loadCoursesSuccess(courses){
  return { type: types.LOAD_COURSES_SUCCESS, courses};
};

export function loadCourses(){

  return function(dispatch){

    dispatch(beginAjaxRead());

    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
      dispatch(endAjaxRead());
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
};

export function saveCourse(course){
  return dispatch => {

    return courseApi.saveCourse(course)
    .then(savedCourse => {
      course.id ?
        dispatch(updatedCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse))
    })
    .catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
     });
  }
}
