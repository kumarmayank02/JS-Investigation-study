const marvel_heroes =["thor","ironman","spiderman"]
const dc_heroes =["spiderman","flash","batman"]//taking two array 

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);//here array will not be merge
//console.log(marvel_heroes[3][2]);

//concat return new array and its merge two array properly
const newHeroes=marvel_heroes.concat(dc_heroes)
console.log(newHeroes);

//another method to merge two array ,by spread ...we can merge array 
const newHeroes2=[...marvel_heroes,...dc_heroes]
console.log(newHeroes2);

//another array
//flat()

const realArray=[1,2,3,[4,5,6],[8,[9,0]]]
const realArray2=realArray.flat(Infinity)
console.log(realArray2);

//checking the array 
//isArray()
console.log(Array.isArray("Kumar"));//its is not array so its gives false
//from()
console.log(Array.from("Kumar"));//it consverts in to the array 
//from(),{name:"Kumar"}
console.log(Array.from({name:"Kumar"}));//it return empty array 
//of()
const sc1=100
const sc2=200
const sc3=300
console.log(Array.of(sc1,sc2,sc3));
//all values converts into the array ,these methods are used to convert the value into the array 







