/*Q1: Create a function that will work as the modulus operator % without using the modulus operator.
 The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result
  of the division, the modulo operation returns the whole number remainder.
Examples
mod(5, 2) ➞ 1
mod(218, 5) ➞ 3
mod(6, 3) ➞ 0 */

function mod(dividend, divisor) {
    let quotienteDecimal = dividend / divisor;
    let quotient = Math.trunc(quotienteDecimal);
    let remainder = (dividend - (divisor * quotient));
    console.log(remainder);
};
mod(5, 2);
mod(218, 5);
mod(6, 3);

/*Q2: Create a function that takes three collections of arguments and returns the sum of the product of numbers. 
Add the result of the first digit in each collection multiplied together to the result of the second digit
 in each collection multiplied together to get the final solution.
Examples
product(1,2)(1,1)(2,3) ➞ 8
// 1 * 1 * 2 + 2 * 1 * 3
product(10,2)(5,0)(2,3) ➞ 100
// 10 * 5 * 2 + 2 * 0 * 3
product(1,2)(2,3)(3,4) ➞ 30
// 1 * 2 * 3 + 2 * 3 * 4
product(1,2)(0,3)(3,0) ➞ 0
// 1 * 0 * 3 + 2 * 3 * 0*/

function argumentCollection(a, b) {
    return function product1(c, d) {
        return function product2(e, f) {
            let product1 = (a * c * e);
            let product2 = (b * d * f);
            let sum = (product1 + product2);
            console.log(`${sum} is the sum`);
        }
    }
};
argumentCollection(1, 2)(1, 1)(2, 3);
argumentCollection(10, 2)(5, 0)(2, 3);
argumentCollection(1, 2)(0, 3)(3, 0);


/*Q3: Create a function which takes an array arr of integers as an argument. This function must return another function, 
which takes a single integer as an argument and returns a new array.
The returned array should consist of each of the elements from the first array multiplied by the integer.
Examples: 
multiply([1, 2, 3])(2) ➞ [2, 4, 6]
multiply([4, 6, 5])(10) ➞ [40, 60, 50]
multiply([1, 2, 3])(0) ➞ [0, 0, 0]*/

function arrayInteger(arr) {
    let newArray = [];
    return function integers(value) {
        for (i = 0; i < arr.length; i++) {
            let arr2 = (arr[i] * value);
            newArray.push(arr2);
        }
        return newArray;
    }
};
console.log(arrayInteger([1, 2, 3])(2));



/*Q4: Create a function which takes a parameter n and returns a function such that it, 
when called n times, returns the string "HelloWorld".
Examples: 
lambdaDepth(0) ➞ "HelloWorld"
lambdaDepth(1)() ➞ "HelloWorld"
lambdaDepth(2)()() ➞ "HelloWorld"
typeof lambdaDepth(2)() ➞ "function" 

Notes : 
num will always be a non-negative integer.
If num == 0, return "HelloWorld".
If num > 0, return a function.
All non-example test cases come in two forms: checking whether lambda_depth(k), after being called k times, 
returns a string, and checking whether lambda_depth(k) returns a function.*/

function lambdaDepth(num) {
    if (num == 0) {
        return "HelloWorld";
    } else if (num > 0) {
        return function (){
         return "hello duniya";
        }
    }
};
console.log(lambdaDepth(0));
console.log(lambdaDepth(1)());
console.log(lambdaDepth(2)());


