import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

// Action Creators
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

