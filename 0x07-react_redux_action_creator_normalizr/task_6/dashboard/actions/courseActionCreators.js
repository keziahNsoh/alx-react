import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Action Creators
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

