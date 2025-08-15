//Lexical Scope
/* A variable defined outside a function can be accessible inside another function defined
after the variable declaration

The opposite is NOT true.

it will be in nested
*/
function outerfunc() {
    let x = 10;
    let y = 70;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }
    innerFunc();
}
outerfunc()
//......................................................

function outerfunc() {
    let x = 10;
    let y = 70;
    function innerFunc() {//functional scope 
        //let b=30;
        console.log(x);
        console.log(y);
    }
    //console.log(b); it is not allow in Lexical scope 
    innerFunc();
}
outerfunc()
