import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";

// Action creator to mark a notification as read
export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

// Action creator to set a filter for notifications
export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

