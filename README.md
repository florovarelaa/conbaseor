convert between binary and decimal with this simple api.

binaries must be entered as a string. Decimals must be positive integers.

let conversor = require('binaryConversor');

let d2b = conversor.d2b(13);
g
let b2d = conversor.b2d('1101');

console.log('d2b', d2b); // '1101'
console.log('b2d', b2d); // 11