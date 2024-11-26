import { normalizedData } from './notifications';

test('should normalize notifications data correctly', () => {
  expect(Array.isArray(normalizedData.result)).toBe(true);
  expect(normalizedData.entities.users).toBeDefined();
  expect(normalizedData.entities.messages).toBeDefined();
  expect(normalizedData.entities.notifications).toBeDefined();
});
