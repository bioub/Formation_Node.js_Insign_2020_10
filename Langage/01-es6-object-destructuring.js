const coords = {x: 1, y: 2};

// const varX = coords.x;
// const varY = coords.y;

// destructurer :
//       {x: 1   , y: 2   }
// const {x: varX, y: varY} = coords;

// console.log(varX); // 1
// console.log(varY); // 2

// destructurer dans des variables du nom des clés :
// const {x: x, y: y} = coords;

// console.log(x); // 1
// console.log(y); // 2


// destructurer dans des variables du nom des clés :
// + shorthand property (ES6)
// const {x, y} = coords;

// console.log(x); // 1
// console.log(y); // 2


// destructurer dans des variables du nom des clés :
// + shorthand property (ES6)
// + default param (ES6)
const {x = 0, y = 0, z = 0} = coords;

console.log(x); // 1
console.log(y); // 2
console.log(z); // 0
