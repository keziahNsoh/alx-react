import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetch from 'node-fetch';

// Action creators
export const login = () => ({ type: LOGIN });

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  error,
});

// Async action creator using Redux Thunk
export const loginRequest = (email, password) => {
  return async (dispatch) => {
    // Dispatch LOGIN action first
    dispatch(login());
    
    try {
      const response = await fetch('/login-success.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        dispatch(loginSuccess(data)); // Dispatch success with user data
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      dispatch(loginFailure(error.message)); // Dispatch failure if the API call fails
    }
  };
};
