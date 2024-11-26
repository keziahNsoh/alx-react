import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Update with your actual reducers

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;

