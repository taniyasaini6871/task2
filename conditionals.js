/* Q1- Create a function that takes a string and returns the first character that repeats. 
If there is no repeat of a character, return "-1".
firstRepeat("Isildur") ➞ "-1" Case sensitive "I" not equal to "i"*/

function firstRepeat(name){
    const nameArr = name.split('');

  for (let i = 0; i < nameArr.length; i++) {
    for (let j = i + 1; j < nameArr.length; j++) {
      if (nameArr[i] === nameArr[j]) {
        return `${nameArr[i]} repeated`; 
      }
    }
  }
  return "-1 not repeated";
}
console.log(firstRepeat("Isilduri"));

/* Q2- JavaScript Program to Check Whether a Number is Palindrome or Not?
 Using operators*/
 
 function checkPalindrome(num) {
    const numStr = num.toString();
    const reverseNum = numStr.split('').reverse().join('');
    
    if (numStr === reverseNum) {
      console.log(numStr, "is a Palindrome");
    } else {
      console.log(numStr, "is not a Palindrome")
    }
  };
     
 checkPalindrome(5);
 checkPalindrome('tet');

//  3Q. JavaScript Program to Check Whether a Number is Armstrong or Not? Using operators

   function checkArmstrong(num){
        const numStr = num.toString();
        const reverseNum = numStr.split('');
        let temp = 0;
        reverseNum.forEach(element => {
            let value = element ** reverseNum.length;
            temp += value;
        });

        if(temp === num || num < 10){
            console.log(num,"this number is armstrong");
        } else{
            console.log(num,"this number is not armstrong");
        }
   };

    checkArmstrong(153);
    checkArmstrong(1684);
    checkArmstrong(1);

/* 4Q. Write a single line of code using the ternary operator to check if a variable 
value is defined (not undefined) and has a truthy value. If it does, 
store the result in a variable 'isValid'.*/

 const isValid = (typeof test !== undefined && 6)  ? true : false;
  console.log(isValid);
  

 /*5Q. Write a code to swap the values of two variables a and b without
  using a temporary variable. */

  function swapValue(a, b){
      if( a != b){
      a= a+b; // now a=6
      b= a-b; // here b=2
      a= a-b; // here a=4
      console.log("swap value of a =>", a);
      console.log("swap value of b =>", b);
      } else {
        console.log(" value of a =>", a);
        console.log(" value of b =>", b); 
      }
  }
  
  swapValue(14,20);


  /*6Q. Write a function that checks if a given year is a leap year 
  (divisible by 4 and not divisible by 100, except when it's divisible by 400) 
  using only relational operators.*/

function checkLeapYear(year){
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
         console.log(year,"this is leap year");
      } else {
        console.log(year,"this is not leap year"); 
      }
};

checkLeapYear(2018);
checkLeapYear(2020);

//   3 fizz , 5 -buzz , 3 or 5 - fizzbuzz

function multiple(num){
   if(num % 3 === 0 && num % 5 === 0){
    console.log("fizzbuzz");
   }
   else if (num % 3 === 0) {
    console.log("fizz");
   } else if (num % 5 === 0) {
    console.log("buzz");
   }
};

multiple(15);