// N E S T I N G    OF   A R R A Y S
/* It's putting the array inside the array*/
let x;

const fruits = ['apple', 'peer', 'orange'];
const berries = ['strawberry','blueberry','rasberry'];

// fruits.push(berries);
/* console.log(fruits);  give arrays -berries inside fruits - as a  nested array */

//x = fruits [3][1]; /*console.log(x) will print blueberry*/

const allFruits = [fruits, berries]; /*nesting 2 arrays in allFruits*/
x = allFruits[1][0];  /*at index 1(berries is there), 0th index of berries is strawberry,so it prints strawberry*/
x = allFruits;
console.log(x);



// C O N C A T E     A R R A Y S

/* Its taking the itmes from one array and basically adding them into a different array. */

x = fruits.concat(berries); /*console.log(x); will print every item(apple-rasberry) in one array. 
Another way of doing this is using SPREAD OPERATOR*/
console.log(x);



// S P R E A D    O P E R A T O R (...)
/*Spread operator is represented as three dots and 
this can be used with arrays as well objects. (Probably used it more with objects,sir will show that later)*/

/* Let's say I just want the items that are in fruits and berries, not the actual array itself*/

x = [...fruits, ...berries]; /*prints all items in 1 array*/
//x = [...fruits, berries]; prints- 3 (fruits)items and 1 array

console.log(x);



// F L A T T E N     A R R A Y S
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
console.log(arr); /* prints-(6) [1, 2, Array(2), 5, Array(2), 8] */
x = arr.flat(); /*print all items of arr in 1 array*/
console.log(x);


//some S T A T I C  METHODS ON ARRAY  OBJECT

//very useful ones
x = Array.isArray(fruits); /*checks whether it is a array or not*/
console.log(x); /*gives- true*/
y = Array.isArray('hello');
console.log(y); /*prints- false*/


z = Array.from('123456'); /*seperate each elements*/
console.log(z); /*prints- ['1','2','3','4','5']*/

//putting values of some variables into one array

const a = 1
const b = 2
const c = 3

g = Array.of(a, b, c); /*put all the values in 1 array*/
console.log(g); /*prints- [1,2,3]*/
