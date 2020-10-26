const fs = require('fs');
const { createGzip } = require('zlib');

const readStream = fs.createReadStream('.gitignore');
const writeStream = fs.createWriteStream('.gitignore.copy');

// cat .gitignore | console.log
readStream.pipe(process.stdout)
// readstream ->
// readStream.read

// cat .gitignore > .gitignore.copy
readStream.pipe(writeStream)

// writeStream ->
// writeStream.write

// duplexstream -> read + write
// transform -> read + transform + write


// cat .gitignore | zip > .gitignore.zip
readStream.pipe(createGzip()).pipe(fs.createWriteStream('.gitignore.zip'));



// écrire dans la console
process.stdout.write('TEST\n');
