let x;

x = 5 + "5";

console.log(x, typeof x);
/*It concatenates, becomes 55 string
  THIS IS EXAMPLE OF COERCIION IN JAVASCRIPT*/

let z = 10 + Number("10");
console.log(z, typeof z);

/*But, in Multiplication it does the job, converts the string to number*/
y = 5 * "6";
console.log(y, typeof y);
/* result=25 num. here Javascript decided to coerce it to a number so it could be multiplied*/
let s;
s = 5 + null;
console.log(s, typeof s);
/*result= 5, null becomes 0 */
let t;
t = Number(null);
console.log(t, typeof t);
/*gives 0 'number' */

/* p = Number(true); */
p = Number(false);
/* true holds 1 , while false 0  */
p = Boolean(true);
// console.log(Object.prototype.toString.call(p)); returns object boolean
// console.log(p === false); returns false, bcoz its true in line 28
console.log(p, typeof p);

let m;
m = 5 + true;
console.log(m, typeof m);
/* becomes 6  */

let g;
g = 5 + undefined;
console.log(g, typeof g);
/* We get, NaN 'number'   ..Because, if we add anything to undefined,then we're going to get NaN */
