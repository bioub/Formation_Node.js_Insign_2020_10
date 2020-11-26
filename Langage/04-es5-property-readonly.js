'use strict';

const coords = {};

coords.z = 3;

// ES5
Object.defineProperties(coords, {
  x: {
    value: 1,
    // valeurs par défaut avec defineProperties ou defineProperty
    // enumerable: false,
    // writable: false,
    // configurable: false,
  },
  y: {
    value: 2,
    // valeurs par défaut avec defineProperties ou defineProperty
    // enumerable: false,
    // writable: false,
    // configurable: false,
  }
});

// PAS POSSIBLE -> writable: false
// coords.x = 3;

for (const key in coords) {
  console.log(key); // rien car PAS ENUMERABLE
}
const json = JSON.stringify(coords); // rien car PAS ENUMERABLE
Object.keys(coords);  // rien car PAS ENUMERABLE

// PAS POSSIBLE -> configurable: false
Object.defineProperty(coords, 'x', {
  enumerable: false,
})
