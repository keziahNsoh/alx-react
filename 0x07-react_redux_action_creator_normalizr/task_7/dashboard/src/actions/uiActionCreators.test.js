import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginRequest } from './uiActionCreators';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';
import fetchMock from 'fetch-mock';

// Create mock store
const mockStore = configureStore([thunk]);

describe('loginRequest action creator', () => {
  afterEach(() => {
    fetchMock.restore(); // Reset mock after each test
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when login is successful', async () => {
    const store = mockStore({});
    const user = { email: 'test@domain.com', password: 'password123' };

    // Mock successful API response
    fetchMock.postOnce('/login-success.json', {
      body: { email: 'test@domain.com', password: 'password123' },
      headers: { 'Content-Type': 'application/json' },
    });

    // Dispatch loginRequest
    await store.dispatch(loginRequest(user.email, user.password));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGIN });
    expect(actions[1]).toEqual({
      type: LOGIN_SUCCESS,
      user: { email: 'test@domain.com', password: 'password123' },
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when login fails', async () => {
    const store = mockStore({});
    const user = { email: 'wrong@domain.com', password: 'wrongpassword' };

    // Mock failed API response
    fetchMock.postOnce('/login-success.json', {
      status: 400,
      body: { error: 'Invalid credentials' },
    });

    // Dispatch loginRequest
    await store.dispatch(loginRequest(user.email, user.password));

    const actions = store.getActions();
    expect(actions[0]).toEqual({ type: LOGIN });
    expect(actions[1]).toEqual({
      type: LOGIN_FAILURE,
      error: 'Login failed',
    });
  });
});
