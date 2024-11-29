import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const mockState = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    },
  });

  describe('filterTypeSelected', () => {
    it('should return the correct filter type', () => {
      expect(filterTypeSelected(mockState)).toEqual('DEFAULT');
    });
  });

  describe('getNotifications', () => {
    it('should return all notifications in a Map format', () => {
      const expectedNotifications = fromJS({
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      });
      expect(getNotifications(mockState)).toEqual(expectedNotifications);
    });
  });

  describe('getUnreadNotifications', () => {
    it('should return only unread notifications in a Map format', () => {
      const expectedUnreadNotifications = fromJS({
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      });
      expect(getUnreadNotifications(mockState)).toEqual(expectedUnreadNotifications);
    });
  });
});
