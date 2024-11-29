import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState);
  });

  it('should correctly handle DISPLAY_NOTIFICATION_DRAWER', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
  });

  it('should correctly handle HIDE_NOTIFICATION_DRAWER', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
  });

  it('should correctly handle LOGIN_SUCCESS', () => {
    const action = { type: LOGIN_SUCCESS };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
  });

  it('should correctly handle LOGIN_FAILURE', () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
  });

  it('should correctly handle LOGOUT', () => {
    const action = { type: LOGOUT };
    const expectedState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    expect(uiReducer(undefined, action).toJS()).toEqual(expectedState);
  });
});
