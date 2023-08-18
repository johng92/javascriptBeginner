//Ways to declare a variable
// var, let, const

let firstName='John';
let lastName='Hembrom';

console.log(firstName, lastName);

let age = 30;
console.log(age);

//Naming Conventions
// -Only letters,numbers,underscores and dollar signs
// - Can't start with a number

let name1 = 'john';
//let 1name = 'john';   That's not gonna work, bcoz it starting with mumber
// let name+ = 'john';

// Multi-Word Formatting
// firstName = camelCase  [usually this one we see]
// first_name = underscore [:) sir, don't like it, but used in PHP]
// FirstName = PascalCase [used in React or most frontend framework. as component/class name ]
// firstname = lowercase [Sir, dont like it, bcoz in unreadable]

//Re-assigning variable
age = 31;
console.log(age);

//We can just declare a value using "let"
let score; 
score = 2;

console.log(score);

if (true) {
  score = score + 2;
}
console.log(score);

//Uses of "const"

const x = 100;

//  x = 200;
//We can not re-assign a value to const variable.
//Const can't be directly re-assigned

//Another, thing which we can not do is- Just declare and 
// Not initialize
// const score2;
//Initialize == assigning an initial value to a variable

const arr = [1,2,3,4];

// arr = [1,2,3,4,5];  this one is assigning to the same const variable, 
// But. this push will work  .push is a method
arr.push(5);
console.log(arr);

const person = {
  name: 'Brad'
}
//directly reassign to the person, will not work, But
//This will work, bcoz I'm not changing the varialbe
//but, the key or property I am changing.  .name is a property
person.name = 'john';
person.email = 'john@gmail.com';

console.log(person);

// Sir, always use const UNLESS he know he want to re-assign something

//Declare mutliple values at once

let a, b, c;

const d = 10,
e = 20,
f = 30;

console.log(d);
console.log(a);
//this is of line 77, a is declared without value
//so, this will give undefined.