//Function Expression

//function expression for handling button click
const handleClick=function(){
    console.log("Button was clicked");
};
handleClick();//Ye simple hai — real project me ye function event listener me lag jata hai


//Adding of two number
const add =function(a,b){
    return a+b;

}
console.log(add(8,9));//Variable me store kiya gaya function, reuse ho sakta hai.


//Greeting Message

const greet = function(name)
{
    console.log(`Hello,${name}!`)
}
greet("Mayank")

/* 
Function Expression – Simple Notes

Definition
A function expression is when we create a function and store it in a variable.
Example:

const sayHi = function() {
    console.log("Hi!");
};


Key Points:

1.It can be anonymous (no name) or named.

2.It is not hoisted — you must define it before using it.

3.Treated like a value (you can pass it to other functions or store it in objects).

....Uses in Projects..

Callbacks → for events, API calls, timers.

Closures → to keep data private.

Dynamic functions → change behavior at runtime.

Example

const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // 5

*/


//Some Questions are:

 /*
 1.Event Handling in Browser 
2.API Call with Callback
3.Timer Functions
4.Closures for Private Data    
5.Dynamic Function Assignment
i will covered all function Question in real use in a new file.
 */
