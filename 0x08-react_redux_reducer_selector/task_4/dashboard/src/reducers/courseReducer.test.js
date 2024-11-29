import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(fromJS({ courses: {}, selectedCourses: [] }));
  });

  it('should handle FETCH_COURSE_SUCCESS and normalize courses data', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
      ],
    };
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60 },
        2: { id: 2, name: "Webpack", credit: 20 },
      },
      selectedCourses: [],
    });
    expect(courseReducer({}, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and add the course to selectedCourses', () => {
    const action = { type: SELECT_COURSE, index: 1 };
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60 },
        2: { id: 2, name: "Webpack", credit: 20 },
      },
      selectedCourses: [],
    });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60 },
        2: { id: 2, name: "Webpack", credit: 20 },
      },
      selectedCourses: [1],
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and remove the course from selectedCourses', () => {
    const action = { type: UNSELECT_COURSE, index: 1 };
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60 },
        2: { id: 2, name: "Webpack", credit: 20 },
      },
      selectedCourses: [1],
    });
    const expectedState = fromJS({
      courses: {
        1: { id: 1, name: "ES6", credit: 60 },
        2: { id: 2, name: "Webpack", credit: 20 },
      },
      selectedCourses: [],
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
notificationReducer.test.js
js
Copy code
// src/reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return the default state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual(fromJS({ filter: 'DEFAULT', notifications: {} }));
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and normalize notifications data', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    };
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
    });
    expect(notificationReducer({}, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and update the isRead property', () => {
    const action = { type: MARK_AS_READ, index: 1 };
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
    });
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: true },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter property', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
    });
    const expectedState = fromJS({
      filter: 'URGENT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      },
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
