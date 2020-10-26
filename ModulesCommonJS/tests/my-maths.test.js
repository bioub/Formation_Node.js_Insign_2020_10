// function (exports, require) {

const chalk = require('chalk'); // open-source installé avec npm ou Yarn (node_modules)
const assert = require('assert'); // binaire de node.js (assert, fs, http...)
// const MyMaths = require('../src/my-maths'); // fichier local (préfixé par ./, ../ ou /)
const { sum } = require('../src/my-maths');


try {
  // assert.strictEqual(MyMaths.sum(1, 2), 3); // 3
  assert.strictEqual(sum(1, 2), 3); // 3
  console.log(chalk.bgGreen('Tests sum SUCCESS'));
} catch (err) {
  console.log(chalk.bgRed('Tests sum FAIL'));
}

// }
