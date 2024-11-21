import { Map } from 'immutable';

// Merge two objects deeply
export function mergeDeeplyElements(page1, page2) {
  // Convert both objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two Maps deeply using the mergeDeep method
  return map1.mergeDeep(map2).toList(); // Converts merged Map to List
}
