import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  // Convert the plain object to an Immutable Map
  const immutableObject = Map(object);
  
  // Use getIn to access the nested property based on the path provided in the array
  return immutableObject.getIn(array);
}
