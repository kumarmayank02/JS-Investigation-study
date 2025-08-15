
//Block
{
    var a = 44;
}
//console.log(a);
//uper block var variable is used, so it is globally we can use out of the block also .


//second Example by taking let variable access from outside the block .is it working yes ya no check

{
    let num = 55
}
//console.log(num);
//note it will not be access

//Third Example (const)

{
    const char = "mayank"
}
//console.log(char);

//its also not be work.


//fourth Example
for(let i=1; i<=5;i++)
{
    //console.log(i);//block scope
    
}
//console.log(i);


//Fifth Example
let age=20
if(age >=18)
{
    let str=("Adult")
    console.log(str);  //inside block scope we can access the value.
}

//remember, in conditional statement we cannot access the value out of the scope.




