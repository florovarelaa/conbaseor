convert between binary and decimal with this simple api.

let conversor = require('binaryConversor');

let d2b = conversor.d2b(13);

let b2d = conversor.b2d('1101');

console.log('d2b', d2b); // '1101'
console.log('b2d', b2d); // 11