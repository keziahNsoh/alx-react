import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

// Default state is an empty array
const initialState = [];

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Add the isSelected attribute to every course, defaulting to false
      return action.data.map(course => ({
        ...course,
        isSelected: false,
      }));

    case SELECT_COURSE:
      // Update the selected course by its index
      return state.map((course, index) =>
        index === action.index
          ? { ...course, isSelected: true } // Set isSelected to true for the selected course
          : course
      );

    case UNSELECT_COURSE:
      // Update the unselected course by its index
      return state.map((course, index) =>
        index === action.index
          ? { ...course, isSelected: false } // Set isSelected to false for the unselected course
          : course
      );

    default:
      return state;
  }
};

export default courseReducer;
