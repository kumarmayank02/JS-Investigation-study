//singleton 

//object literals 


//object literal
 
const mySym= Symbol("kew1")
const jsUser={

name:"kumar mayank",
"full name":"kumar chiku",
[mySym]:"mykey1",
age:18,
location :"jaipur",
email:"kumar@gmail.com",
isLoginDays:false,
lastLoginDays:["Monday","Tuesday"]

}
// *access of objects*

// console.log(jsUser.email);
// console.log(jsUser["email"]); //it  must be in string

// console.log( jsUser [mySym]);


//*how we can change the object value*

jsUser.email = "sachinkumar@gmail.com"
//onsole.log(jsUser["email"]);

//if you want to block the value then we can use freeze on object

//Object.freeze(jsUser)//now object value is freeze and bloc 

//lets check to change the object value.
jsUser.email = "mukeshkuma@gmail.com";
// console.log(jsUser);

//*by adding function* 

jsUser.greeting= function(){
    console.log("Hello Kumar What are you doing right now?");
}
jsUser.greetingTwo= function(){
    console.log(`Hello Mayank how are you, ${this.name}`);//this function is used to know all properties of objects and it gives the return references 
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());











