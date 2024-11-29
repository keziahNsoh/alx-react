import { schema, normalize } from 'normalizr';

// Define the notification schema
const notificationSchema = new schema.Entity('notifications', {}, { idAttribute: 'id' });

// Function to normalize the notification data
export const notificationsNormalizer = (data) => {
  return normalize(data, [notificationSchema]);
};
