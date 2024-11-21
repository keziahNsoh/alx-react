import { Map } from 'immutable';

// Function to check if two Maps are equal
export function areMapsEqual(map1, map2) {
  // Use the 'is' method from Immutable.js to check for deep equality
  return map1.is(map2);
}
