import { List, Map } from 'immutable';

// Concatenate two arrays into one immutable List
export function concatElements(page1, page2) {
  return List(page1.concat(page2)); // Concatenate both arrays and convert to List
}

// Merge two objects into a List, with values from page2 overriding page1 for duplicate keys
export function mergeElements(page1, page2) {
  // Convert the objects into Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two Maps and return a List of their values
  return map1.merge(map2).toList();
}
