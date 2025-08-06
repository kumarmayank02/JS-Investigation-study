//Dates
let myDate = new Date()
console.log(myDate.toString());//it gives the universal time 
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// another cases
let myCreateDate = new Date(2024,0,12)
console.log(myCreateDate.toDateString());
let myCreateDate1= new Date(2024,0,12 ,5,3)//date with time print 
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date('02-15-2020')//in india we use it to project 
console.log(myCreateDate2.toLocaleString());

let myCreateDate3 = new Date('02-15-2020')
let myTimeStamp =Date.now();//it gives the time in milli second ,it would be use in the quizes and game time etc
console.log(myTimeStamp);
console.log(myCreateDate3.getTime())//to comapare the given time and latest time ,it will be used in big project 
console.log(Math.floor(Date.now()/100))

//some method are also use to print the date
let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getFullYear())

console.log(`${newDate.getDay()} and time `)//we can also use it to print the time 

newDate.toLocaleString('default',{
    weekday:"long",
})


