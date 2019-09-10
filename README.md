// : ) : - However you want
//

Conbase between decimal, binary and bcd with this simple api.

values must be entered as a string. Decimals must be positive integers. 
Wrong values are returned as undefined with a message in the console.


npm i conbasor

let conbasor = require('conbasor');

// conbaseor = { 
//    b2d: [Function: b2d],
//    d2b: [Function: d2b],
//    d2bcd: [Function: d2bcd],
//    bcd2d: [Function: bcd2d]
// }

let d2b = conbaseor.d2b('13');
// '1101'

let b2d = conbaseor.b2d('1101');
// '13'

let d2bcd = conbaseor.d2bcd('0001')
// [ { bcd: '0000', decimal: '0' },
// { bcd: '0000', decimal: '0' },
// { bcd: '0000', decimal: '0' },
// { bcd: '0001', decimal: '1' } ]

let bcd2d = conbaseor.bcd2d('0001')
// [ { bcd: '0001', decimal: '1' } ]
