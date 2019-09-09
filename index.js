function getex3(value) {
    const ex3 = [
        {
            binaryex3: '0000',
            decimal: '0',
        },
        {
            binaryex3: '0001',
            decimal: '1',
        },
        {
            binaryex3: '0010',
            decimal: '2',
        },
        {
            binaryex3: '0011',
            decimal: '3',
        },
        {
            binaryex3: '0100',
            decimal: '4',
        },
        {
            binaryex3: '0101',
            decimal: '5',
        },
        {
            binaryex3: '0110',
            decimal: '6',
        },
        {
            binaryex3: '0111',
            decimal: '7',
        },
        {
            binaryex3: '1000',
            decimal: '8',
        },
        {
            binaryex3: '1001',
            decimal: '9',
        }
    ]
    res = ex3.filter( e => e.binaryex3 == value)
    return res[0].binaryex3;
}

// reverses a string.
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split("");
 
    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse();
 
    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join("");
    
    //Step 4. Return the reversed string
    return joinArray;
}

//checks that all digits are 0 or 1
function isBinary(value) {
    if (typeof value != 'string') {
        console.log('binary number must be a string')
        return;
    }
    let cont = value.length-1;

    let isBin = value[cont] === "1" || value[cont] === "0";

    while (isBin && cont >= 0) {
        isBin = value[cont] === "1" || value[cont] === "0";
        cont--;
    }
    if(!isBin) {
        console.log('not a valid binary');
        return false
    }
    return true
}

//checks if it is a 4 digit binary between 0 and 9
function isExec3(value) {

    let len = value.length;

    if(!(len%4 === 0)) {
        console.log('Number is not ex-3. ex-3 numbers are #### four digits')
        return false
    } 
    if(!isBinary) {
        console.log('Number is not ex-3. ex-3 numbers range from 0000 (0) to 1001 (9)')
        return false
    }

    let ex3 = getex3(value);
    if(!ex3) {
        console.log('Number is not ex-3. ex-3 asdfsdnumbers range from 0000 (0) to 1001 (9)')
        return false
    }
    console.log('ex3', ex3);

    return true;
}

console.log('isExec3(####)', isExec3('1001'));

//checks if it is a positive decimal number
function isDecimal(value){
    if( Number.isInteger(value) === false || value < 0){
        console.log('not a valid positive decimal')
        return false
    }
    return true
}

//converts a binary number to decimal.
function binaryToDecimal(value) {
    if (!isBinary(value)) {
        return
    }
    //Adder, will be returned
    let decimal = 0;
    let power = 0;
    //multiply each digit to its corresponding power, base is always 2.
    for (let i = value.length; i > 0; i--) {
        decimal = decimal + Math.pow(2, power)*value[i-1];
        power++;
    }
    return decimal;
}

function decimalToBinary(value) {
    if (!isDecimal(value)) {
        return
    }

    let binary = '';
    let decimal = value;
    while (decimal > 1){
        decimal = decimal / 2;
        if (Number.isInteger(decimal) ) {
            binary = binary + '0';
        } else {
            binary = binary + '1';
            decimal = Math.floor(decimal);
        }
    }
    //Concats the reminding 1 or 0
    binary = binary + decimal;

    //reverses binary according to the way decimals are transformed to binary.
    binary = reverseString(binary);

    return binary;
}

function binaryToEx3(value) {
    if (!isBinary(value)) {
        return
    }
}

module.exports = {
    b2d: binaryToDecimal,
    d2b: decimalToBinary
}