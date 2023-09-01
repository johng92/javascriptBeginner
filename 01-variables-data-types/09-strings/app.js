let x;

const name = 'John';
const age = 30;

/* x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'; */

// TEMPLATE LITERALS
  /*get the above result, with TL*/
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);


// STRING PROPERTIES & METHODS
const s = 'Hello World';

z = typeof s;
z = s.length;
console.log(z, typeof s); /*gives 11 'string' */



// ACCESS VALUE BY KEY

const d = new String('I love Javascript');
  /*The `d` variable now holds a new String object with the value "i love javascript".*/
j = typeof d;
j = d.length;
j = d[4];

j = d.__proto__;
  /*console.log(j); */
  /*console.log(d); */

j = d.toUpperCase();
j = d.toLowerCase();
j = d.charAt(0); /*same as,    j=d[0];  */
j = d.indexOf('l'); /*gives 3, as I love , L is on 3rd index*/
j = d.substring(0,5); /*gives, i lov */
j = d.substring(7); /*gives, Javascript */
j = d.slice(-10, -6); /*count from left, -10th place it starts to -6 */

console.log(j);


w = '                      Hello Dev John';
w = w.trim();
  /*trim()  ---clears the whitespaces */
console.log(w);

const i = 'Hello Android';
k = i.replace('Android', 'Website');
k = i.includes('And'); /*it checks whether the string present or not*/
k = i.valueOf(); /*gives the value stored*/
k = i.split(' '); /*split with spaces--['Hello', 'Android'] */
k = i.split('');  /*split with every character ['H', 'e', 'l', ...]*/
console.log(k);