
//we can get the data from an object which are following 

//1.by variable and using square bracket with the keys 
// object["key"] 

let user = {
    username:"Kumar Mayank",
    userid:7878388,
    userpassword:78373892,
    userlogined:false
}

//we can access like it
 console.log (user["username"])
 console.log (user["userid"])
 console.log (user["userlogined"])
 console.log (user["userpassword"])



//2.by using dot with variable and keys
// object.key
console.log(user.userid)
console.log(user.username)
console.log(user.userpassword)
console.log(user.userlogined)


 /* .JS automatically converts objects keys to strings 
   Even it we made the number as a key ,the number will be converted to string */

let obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e"
}
console.log(obj)
console.log(obj[1])
//uper object converts all value in the string value 