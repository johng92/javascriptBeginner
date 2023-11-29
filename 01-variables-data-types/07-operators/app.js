// 1. Arithmatic Operators

let x;

x = 5 + 5;
x = 5 - 5;
x = 5 * 5;
x = 5 / 5;
x = 5 % 5; //the % (modules operator)gives remainder

console.log(x);

// Concatenation

y = "Hello" + " " + "World";
console.log(y);

// Exponent
z = 2 ** 4;

console.log(z);

//Increment

d = 1;
d++;
console.log(d);

// Decrement

/* d = d - 1; */
d--;
console.log(d);

// 2. A S S I G N M E N T  OPERATOR
g = 41;

g += 9;
g -= 10;
g *= 5;
g /= 20;
g %= 2; /* g which has became 10 will be divided by 2 and remainder will be the result*/
console.log(g);

// 3. C O M P A R I S O N  Operators

x = 2 == 2; //Single = is assignment
//while double equal is comparison operator to evaluate
x = 2 === 2; //Equal value & equal type operator
console.log(x);

y = 2 != 2;
y = 2 !== "2"; /*it's logging the most recent iterations,not the above one*/
console.log(y);

z = 10 > 5;
z = 10 < 5;
z = 10 <= 5;
z = 10 >= 5;
console.log(z);
