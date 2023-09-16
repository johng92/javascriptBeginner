let x;
x = Math.random() * 100;
console.log(x);

let y;
y = Math.random() * 50;
console.log(y);

z = x + y;
console.log(z);

z1 = x - y;
console.log(z1);

z2 = x % y;
console.log(z2);
// above solution are mine, with decimals

//Below solutions are from Sir
const d = Math.floor(Math.random() * 100 + 1);
const e = Math.floor(Math.random() * 50 + 1);

//Get the sum
const sum = d + e;
const sumOutput = `${d} + ${e} = ${sum}`;
console.log(sumOutput);

//Get the difference
const diff = d - e;
const diffOutput = `${d} - ${e} = ${diff}`;
console.log(diffOutput);

//Get the product
const prod = d * e;
const prodOutput = `${d} * ${e} = ${prod}`;
console.log(prodOutput);

//Get the quotient
const quot = d / e;
const quotOutput = `${d} / ${e} = ${quot}`;
console.log(quotOutput);

//Get the remainder
const rem = d % e;
const remOutput = `${d} % ${e} = ${rem}`;
console.log(remOutput);