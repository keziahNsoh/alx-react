import { schema, normalize } from 'normalizr';

// Define the course schema
const courseSchema = new schema.Entity('courses', {}, { idAttribute: 'id' });

// Function to normalize the course data
export const coursesNormalizer = (data) => {
  return normalize(data, [courseSchema]);
};
