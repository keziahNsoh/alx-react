import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

// Default state structure
const initialState = {
  filter: 'DEFAULT', // Default filter is 'DEFAULT'
  notifications: [], // Notifications will be stored here
};

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // When fetching notifications, add isRead: false to each notification
      return {
        ...state,
        notifications: action.data.map(notification => ({
          ...notification,
          isRead: false,
        })),
      };

    case MARK_AS_READ:
      // Mark a notification as read by updating its isRead property
      return {
        ...state,
        notifications: state.notifications.map((notification, index) =>
          index === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };

    case SET_TYPE_FILTER:
      // Set the filter property to either 'DEFAULT' or 'URGENT'
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;
