//PRIMITIVE DATA TYPES

// String

const name = 'John Hembrom';
console.log(name,typeof name);

//Number

const age =33;
console.log(age, typeof age);

const temp = 98.9;
console.log(temp, typeof temp);

const weight = 33.5;
console.log(weight, typeof weight);

//Boolean
const isDeveloper = true;
console.log(typeof isDeveloper);

//Null - Intended empty value
const bicycle = null;
console.log(typeof bicycle);

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

// B i g I n t
const n = 2348278347812783748n;
const reslt = n;
console.log(reslt, typeof reslt);


// R E F E R E N C E  TYPES- Objects
// no.1 Arrays
const numbers = [1,2,3,4,5]
const outcome = numbers;
console.log(numbers, typeof numbers);
//no.2 Objects
const person= {
  name:'john',
}
const outpt = person;
console.log(person, typeof outpt)
//no.3 Functions
function sayHello(){
  console.log('Hello');
}
const otpt = sayHello;
console.log(otpt, typeof otpt);
//Array 
