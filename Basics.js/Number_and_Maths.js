const score=500
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);//to find the lenght of number
 console.log(balance.toFixed(2));//it is specialy used to ecommerce application.to fixed it

const otherNumber=34.8968
 console.log(otherNumber.toPrecision(3));//focus on value ,then we use toPrecission 
 const hundreds = 1000000
 console.log(hundreds.toLocaleString('en-IN'));//10,00,000 to indian value of number 
/*
output :
[Number: 100]
3
100.00
34.9
10,00,000

*/
//*******************   Maths    *********************************
//Maths library bydefoult comes from JavaScript,we can say also it is strong library of js
console.log(Math);
console.log(Math.abs(-4));//abs convert the negative numver into +Ve
console.log(Math.round(3.22));//round is used to round of the number 
console.log(Math.ceil(7.8));//we can also use ceil to round of the number 
console.log(Math.floor(8.8));// it is also useed to round the number value
//note : mostly round is used find the round of value .
console.log(Math.min(8.8,7.9,15,16));//to find lowest value
console.log(Math.random());//it gives the values between 0 and 1
console.log(Math.random()*10);
console.log(Math.random()*10+1);//as per requirement of values it will be use 
console.log(Math.random()*10+1);//as per requirement of values it will be use 
console.log(Math.floor(Math.random()*10)+1);//as per requirement of values it will be use 

//another case
const min=10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) 



/*
**other properties  which are found in Math library
as per requirement i will be use .

*/