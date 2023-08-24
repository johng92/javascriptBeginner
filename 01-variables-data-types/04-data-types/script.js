//PRIMITIVE DATA TYPES

// S T R I N G 

const name = 'John Hembrom';
console.log(name,typeof name);

//N U M B E R 

const age =33;
console.log(age, typeof age);

const temp = 98.9;
console.log(temp, typeof temp);

const weight = 33.5;
console.log(weight, typeof weight);

//B O O L E A N
const isDeveloper = true;
console.log(typeof isDeveloper);

//Null - Intended empty value
const bicycle = null;
console.log(bicycle, typeof bicycle);

const aptNumber =  null;
console.log(aptNumber, typeof aptNumber);
//Mistake from the side of js maker, null in not an object

let test;
console.log(test);

// U N D E F I N E D
let score;
const output= score;

console.log(output, typeof output);
//Other way of doing the same thing
const scored = undefined;
console.log(scored, typeof scored);

// S Y M B O L
const id = Symbol('id');
const result = id;
console.log(result, typeof result);

const zon = Symbol('AmazingDev');
const who = zon;
console.log(zon, typeof zon)
//you can declare a symbol primitive data type using the `Symbol()` function
//Symbols are unique and immutable, meaning you can't change their value once created. 
//advance::: They are primarily used as property keys in objects, providing a way to add non-enumerable properties.

// B i g I n t
const n = 2348278347812783748n;
const reslt = n;
console.log(reslt, typeof reslt);


// R E F E R E N C E  TYPES- Objects
// no.1 types Arrays
const numbers = [1,2,3,4,5]
const outcome = numbers;
console.log(numbers, typeof numbers);

//no.2 types Objects
const person= {
  name:'john',
}
const outpt = person;
console.log(person, typeof outpt)

//no.3 types Functions
function sayHello(){
  console.log('Hello');
}
const otpt = sayHello;
console.log(otpt, typeof otpt);

//another example for Functions
function dearDev(){
  console.log('dev');
}
const otput = dearDev;
console.log(otput, typeof otput);
