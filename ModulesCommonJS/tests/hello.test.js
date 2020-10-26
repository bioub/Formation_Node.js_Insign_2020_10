// en s'inspirant de my-math
// écrirer les tests unitaires de hello

// ex vérifier que hello('Romain') retourne bien 'Hello Romain'
const chalk = require('chalk'); // open-source installé avec npm ou Yarn (node_modules)
const assert = require('assert'); // binaire de node.js (assert, fs, http...)
const hello = require('../src/hello'); // fichier local (préfixé par ./, ../ ou /)

try {
  assert.strictEqual(hello('Romain'), 'Hello Romain'); // 3
  console.log(chalk.bgGreen('Tests sum SUCCESS'));
} catch (err) {
  console.log(chalk.bgRed('Tests sum FAIL'));
  console.log(err.message);
}
