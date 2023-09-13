let x;

x = Math.sqrt(16);
console.log(x);

x = Math.abs(-5);
console.log(x);  /*gives 5 */

x = Math.round(6.8); 
console.log(x); /*gives 7, if we keep 6.2 it'll give 6 Means, it will round up*/

x = Math.ceil(4.6);
console.log(x); /*gives 5, it's whether 4.1 or 4.2 it'll alwaybe be 5*/

x = Math.floor(4.9);
console.log(x); /*gives 4 , it'll reach to the floor always*/

x = Math.pow(2,4);
console.log(x); /*givs 16 , pow Means power */

x = Math.min(4,5, 1);
console.log(x) /*gives lowest value */

x = Math.max(4, 5,1);
console.log(x); /*gives highest value*/

// This is very common method
x = Math.random();
console.log(x); /*on each reload gives random dec.no. between 0 to 1 */

x = Math.random() * 10;
console.log(x); /*gives Random(0-9)oneDigit.decimals on each reload */

//to get 1 to 10
x = Math.random() * 10 + 1;
console.log(x); /*gives oneDigit.decimals between 1 to 10 */

//To make it WHOLE Number
x = Math.floor(Math.random() * 10 + 1);
console.log(x);
//ABOVE CODE you'll see most of the time in programming to generate random number




