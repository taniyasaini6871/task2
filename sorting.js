/*Q1- Sort an array having numerical values in ascending order without using 
sort function? */
 
let num = [3,5,1,24,12];
function sortingArray(){
   for (let i=0 ; i<5; i++){
       for (j=i+1; j<5 ; j++){
         if (num[i] > num[j])
           {
              temp = num[i];
              num[i] = num[j];
              num[j] = temp;
           }
       }
       console.log(`sorted array is ${num[i]}`);  
   }
};
sortingArray();

// Q2- Fibonacci series?
function fibonacci(){
   let a = 0;
   let b = 1;
   for(let i=0 ; i<10 ; i++){
    let c = a + b;
    console.log(a);
    a = b; 
    b = c;
   }

};
fibonacci();

let arr =[3,4,5];
arr.sort((a, b) => {
   if (a > b) {
     return 1;
   }
   if (a < b) {
     return -1;
   }
   return 0;
 });

