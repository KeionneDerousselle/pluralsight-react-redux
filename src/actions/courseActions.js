import * as types from './actionTypes';

export function createCourse(course){ //action creator. a function used to create an action
  return {type: types.CREATE_COURSE, course};
}
