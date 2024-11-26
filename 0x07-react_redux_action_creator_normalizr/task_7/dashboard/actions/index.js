import { bindActionCreators } from 'redux';
import * as courseActions from './courseActionCreators';

// Bind action creators to dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(courseActions, dispatch);
};

export { mapDispatchToProps };

import { bindActionCreators } from 'redux';
import * as notificationActions from './notificationActionCreators';

// Bind action creators to dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(notificationActions, dispatch);
};

export { mapDispatchToProps };

import { bindActionCreators } from 'redux';
import * as uiActions from './uiActionCreators';

// Bind action creators to dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(uiActions, dispatch);
};

export { mapDispatchToProps };

