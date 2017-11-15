import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

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

    return courseApi.getAllCourses()
    .then(courses => {
      dispatch(loadCoursesSuccess(courses));
    })
    .catch(error => {
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
    .catch(error => { throw(error) });
  }
}
