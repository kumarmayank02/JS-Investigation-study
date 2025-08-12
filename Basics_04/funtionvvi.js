//return keyword




// function isAdult(){
//  if(age >=18)
//    {
//     return "you are adult";
//    }
//    else{
//     return "you are   not adult";
//    }
//    console.log("new value");//it will not be execute after return statement 
   
// }
// *notes= by return keyword only return the single value 
//if will be return morre value we will use the object and we can return the object then all value will have return .

//Question create a function that returns the sum of numbers from 1 to n;

// function sumFrom1ToN(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumFrom1ToN(5));

/** Scope 
 Scope determines the accessibility of variables ,objects and functions from different parts of the code .

 1.function
 2.block
 3.Lexical

 */
//function scope -:variable inside a function are not accesible from outside the function.

let sum=60;
function add(a, b) {
    //let sum = a + b;      // Calculate sum of a and b
    console.log(sum);     // Print the sum to the console
}
add(3, 5);
