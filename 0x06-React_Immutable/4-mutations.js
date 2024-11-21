import { Map } from 'immutable';

// Creating the initial map constant
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Creating map2 based on map and applying mutations
export const map2 = map
  .set(2, 'Benjamin')  // Modifies value at key 2 to 'Benjamin'
  .set(4, 'Oliver');   // Modifies value at key 4 to 'Oliver'
