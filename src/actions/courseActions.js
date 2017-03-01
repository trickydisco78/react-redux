//

import * as types from './actionTypes';
//Instead of hard coded strings we can use a seperate actiontypes file

export function createCourse(course) {
  //Was hard coded string  - type: CREATE_COURSE
  // Now uses defintion from action types
  return { type: types.CREATE_COURSE, course };
}
