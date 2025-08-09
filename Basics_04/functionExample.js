//create a function to roll a dice & always display the value of the dice
//(1 to 6)
/*
1 
2
3
4
5
6 */

//Random function will be use in this question
let rand =Math.floor(Math.random() * 6)+ 1;
console.log(rand);
//in upper program i have not call any function 

function rollDice(){
    let rand =Math.floor(Math.random() * 6)+ 1;
    console.log(rand);
}
rollDice();