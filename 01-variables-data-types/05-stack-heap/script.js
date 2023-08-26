//Values are stored on the stack
const name = 'John';
const age = 30;

//Reference values are stored on the heap
const person = {
  name: 'Steve',
  age: 42,
};

let newName = name;
newName = 'Jonathan';
console.log(name, newName);

//name is the deprecated property on the window object, that's why
// it is shown in strikethrough modes.

let newPerson = person;
// console.log(person, newPerson); 

newPerson.name= 'BruceLee'
console.log(person, newPerson)