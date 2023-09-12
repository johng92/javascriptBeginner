let x;

// const num = 500000;
const numb = new Number (7) 
/* console.log(typeof num);   gives - number/*
console.log(typeof numb);     /*gives - object */


const num = new Number(9);

x = num.toString();  /* num== 5 , we are adding methods to existing number*/
console.log(x, typeof x);   /*gives 5 string*/

// There is NO LENGTH PROPERTY for Numbers
x = num.length;
console.log(x); /*gives- undefined*/

//If u want to check how many digits are there, use .toString method
x = num.toString().length;
console.log(x, typeof x);  /*gives   1 , as above num=5 was there*/

x = num.toFixed(2);
console.log(x, typeof x);   /*gives 9.00 and it's string*/
//If we take a number, then we use fixed on it, its going to turn into a STRING REPRESENTATION*/

/* If we modify, numbers like this new Number(5.4538) We'll get 5.45 Bcoz, its fixed to two*/

x = num.toPrecision(2); /*if its 9.5989 , it'll give 9.6 --gives result it Total 2 digits*/
       /*if given, toPrecision(3), it'll give result in 3 digit*/
console.log(x);

x = num.toExponential(2);
console.log(x); /*gives, 9.00e+0*/

/*x = num.toLocaleString('en-US');*/
x = num.toLocaleString('ar-EG') /*gives, local representation of Egyptian num of 9*/
console.log(x);

console.log(num);

x = num.valueOf();
console.log(x); /*gives 9*/

// Getting Highest and lowest value possible of Number
x = Number.MAX_VALUE; /*gives 1.797...e+308 == 179 and 307zeroes*/
x = Number.MIN_VALUE;

console.log(x);

