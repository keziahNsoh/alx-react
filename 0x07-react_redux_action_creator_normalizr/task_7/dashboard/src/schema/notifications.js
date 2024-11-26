import { normalize, schema } from 'normalizr';

// Define the schemas for entities
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Notifications data
const notificationsData = [
  {
    "id": "5debd7642e815cd350407777",
    "author": {
      "id": "5debd764f8452ef92346c772",
      "name": { "first": "John", "last": "Doe" },
      "age": 30,
      "email": "john.doe@holberton.com",
      "picture": "http://placehold.it/32x32"
    },
    "context": {
      "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
      "isRead": true,
      "type": "urgent",
      "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    }
  },
  {
    "id": "5debd764507712e7a1307303",
    "author": {
      "id": "5debd764f8452ef92346c772",
      "name": { "first": "Jane", "last": "Doe" },
      "age": 25,
      "email": "jane.doe@holberton.com",
      "picture": "http://placehold.it/32x32"
    },
    "context": {
      "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
      "isRead": false,
      "type": "urgent",
      "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
    }
  }
];

// Normalize the data
const normalizedData = normalize(notificationsData, [notification]);

export default normalizedData;

