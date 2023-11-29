let x;

const name = "John";
const age = 30;

/* x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'; */

// TEMPLATE LITERALS
/*get the above result, with TL*/
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);

// STRING PROPERTIES & METHODS
const s = "Hello World";

z = typeof s;
z = s.length; /*this will run,which gives length of const s
console.log(z, typeof s); /*gives 11 and its a 'string' */

// ACCESS VALUE BY KEY

const d = new String("I love Javascript");
/*The `d` variable now holds a new String object with the value "i love javascript".*/
j = typeof d; /*type is object*/
j = d.length; /*length is 17 */
j = d[4]; /* prints v, i.e. Located at index 4*/

j = d.__proto__; /*show all the string functions*/
/*console.log(j);  Shows the same thing, all functions*/
/*console.log(d); shows , Strings {'I Love Javascript'}

//j = d.toUpperCase();
//j = d.toLowerCase();
//j = d.charAt(0); /*same as,    j=d[0];  */
//j = d.indexOf('l'); /*gives 3, as I love , L is on 3rd index*/
//j = d.substring(0,5); /*gives, i lov */
//j = d.substring(7); /*gives, Javascript */
//j = d.slice(-10, -6); /*count from left, -10th place it starts to -6 */

console.log(j);

w = "                      Hello Dev John";
w = w.trim();
/*trim()  ---clears the whitespaces */
console.log(w);

const i = "Hello Android";
k = i.replace("Android", "Website"); /*prints- Hello Website*/
k =
  i.includes("And"); /*it checks whether the And present or not in the strings*/
k = i.valueOf(); /*gives the value stored,ie. Hello Android*/
k = i.split(" "); /*split with space--['Hello', 'Android'] */
k = i.split(""); /*split with every character ['H', 'e', 'l', ...]*/
console.log(k);
