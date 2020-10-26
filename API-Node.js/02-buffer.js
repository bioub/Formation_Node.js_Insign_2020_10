const fs = require('fs');

// class de Node
// représente un tableau d'octets
const buffer = fs.readFileSync('.gitignore');
console.log(buffer.toString('utf-8'));

console.log(Buffer.concat([buffer, buffer]).toString());
