import { fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = fromJS({
  courses: {},
  selectedCourses: [],
});

// Course reducer
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      return state.mergeIn(['courses'], normalizedData.entities.courses);

    case SELECT_COURSE:
      return state.updateIn(['selectedCourses'], selectedCourses =>
        selectedCourses.push(action.index)
      );

    case UNSELECT_COURSE:
      return state.updateIn(['selectedCourses'], selectedCourses =>
        selectedCourses.filter(index => index !== action.index)
      );

    default:
      return state;
  }
};

export default courseReducer;
