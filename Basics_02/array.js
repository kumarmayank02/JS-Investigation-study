//array
let arr = [20, 50, 40, 60] // can declare array and many way we can declare the array 
console.log(arr[0]);//zero base index hota h ye ,it is start from zero

const myArr = new Array(1, 2, 3, 4)//another way array declared
console.log(myArr[2]);//array mei properties lenght hota h usse hum total length find kr skte h 
//and also two  prototype in array 

//Array Methods
myArr.push(7);//it will be push 7 in myarray variable 
console.log(myArr);
myArr.pop();//it will be pop the last value of array 
console.log(myArr);

//unshift()
myArr.unshift(8)//it will be shift the value at the zero index
console.log(myArr);

//shift()
myArr.shift()//it will be shift like 1,2,3,4,5 means continuous values
console.log(myArr);

//includes()
//include method check the value in array index and get output true and false
console.log(myArr.includes(9));//9 is not present then it gives false output
//index()
// we can also check the index in array 
console.log(myArr.indexOf(4));

const newArr = myArr.join()//it change the aryay in string value
console.log(myArr);
console.log(newArr);

//slice(),splice()

console.log("A ",myArr);
const myNum1= myArr.slice(1,3) //it manipulate the originala array  value
console.log(myNum1)

console.log("B ",myArr);
const myNum2= myArr.splice(1,3) //it will be not manipulate the value
console.log(myNum2)



