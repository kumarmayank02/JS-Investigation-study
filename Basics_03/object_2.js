//Singleton Object

const newUser = new Object()//by constructor
//console.log(newUser);//it return empty object

const newUser1 ={}

newUser1.id="123kumar"
newUser1.name="Kumar Mayank"
newUser1.isLoggined=true
//console.log(newUser1);//it is also return the empty object 

const regularUser ={
    email:"kumara@gmail.com",
    fullname:{
    userfullname:{
        firstname:"kumar",
        lastname:"Mayank"
    }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)//nested object return

const obj1 = {1:"a", 2:"b"}

const obj2 ={ 3:"c",4:"d"}

//const obj3 =Object.assign(obj1,obj2)
//const obj3= Object.assign({},obj1,obj2)//ager 2 se v jayeda value ho ush time isko use krenge 

//const obj3={...obj1, ...obj2}//it use very times and latest 
//console.log(obj3);

const user =[
    {
        id:1,
        email:"Kumar@gmail.com"
    },
    {  
    },
    {

    },
    {

    }

]
user[1].email

//we can access the value from the database 
console.log(newUser1);
console.log(Object.keys(newUser1));
console.log(Object.values(newUser1));
console.log(Object.entries(newUser1));

//checking the value in database 
console.log(newUser1.hasOwnProperty(`isLoggined`));

//again we will it will be start 












