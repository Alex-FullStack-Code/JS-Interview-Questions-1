console.log(0.1 + 0.2 === 0.3);
/**
 * 
 * The output of this code will be false.

    This is because of floating-point arithmetic in JavaScript. 
    Floating-point numbers are stored in binary format in computers, 
    and not all decimal numbers can be represented precisely in binary.

    So, when you add 0.1 and 0.2, 
    the result might not be exactly 0.3 
    due to rounding errors in the binary representation. 
    Therefore, 0.1 + 0.2 will not be equal to 0.3 in JavaScript.


let num1 = 0.1;
let num2 = 0.2;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum: " + sum); //Sum: 0.30000000000000004
console.log("Difference: " + difference); //Difference: -0.1
console.log("Product: " + product); //Product: 0.020000000000000004
console.log("Quotient: " + quotient); //Quotient: 0.5

let result = (0.1 + 0.2).toFixed(1);  // Rounded to 1 decimal place
console.log(result);  // Output: 0.3

let result = (0.1 * 10 + 0.2 * 10) / 10;
console.log(result);  // Output: 0.3

Resolved:
let num1 = 0.1 + 0.2;  // This may give an imprecise result like 0.30000000000000004
let fixedResult = num1.toFixed(2);  // 0.30
console.log(fixedResult);

let preciseResult = num1.toPrecision(3);  // 0.300
console.log(preciseResult);

Using the BigInt for Integer Precision:

let bigInt = BigInt(9007199254740991);  // Supports very large integers


Using a Library (like Decimal.js):

const Decimal = require('decimal.js');
let result = new Decimal(0.1).plus(0.2);
console.log(result.toString());  // Result is '0.3'

 */
