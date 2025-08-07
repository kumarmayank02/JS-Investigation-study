
//like nested objecte we should have array of objects 
//we can see with an example Storing information of multiple students

const classInfo=[
{
name:"Kumar Chiku",
grade:"A+",
city:"Ranchi"

},
{
name:"Anurag",
grade:"O",
city:"Bokaro"
},
{
    name:"Pankaj",
    grade:"A+",
    city:"Charhi"

},

];

//in upper program, inside array we have created objects 
console.log(classInfo)
console.log(classInfo[1])
console.log(classInfo[2])
console.log(classInfo[0])

console.log(classInfo[1].name)
console.log(classInfo[1].grade)
console.log(classInfo[1].city)
 
//update
console.log(classInfo[0].name="chiku")

//delete
console.log(delete classInfo[1].name )

//update key 
console.log(classInfo[1].gender="male")

//final output
console.log(classInfo)
