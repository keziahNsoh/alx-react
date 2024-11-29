import { createSelector } from 'reselect';

/**
 * Selector to get the filter type (DEFAULT/URGENT)
 * @param {Map} state - The Redux state
 * @returns {string} - The current filter value ('DEFAULT' or 'URGENT')
 */
export const filterTypeSelected = (state) => state.get('filter');

/**
 * Selector to get all notifications (Map format)
 * @param {Map} state - The Redux state
 * @returns {Map} - The Map of all notifications
 */
export const getNotifications = (state) => state.get('notifications');

/**
 * Selector to get unread notifications (Map format)
 * @param {Map} state - The Redux state
 * @returns {Map} - The Map of unread notifications
 */
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => {
    return notifications.filter(notification => notification.get('isRead') === false);
  }
);
