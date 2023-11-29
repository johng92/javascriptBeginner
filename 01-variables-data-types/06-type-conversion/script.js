let amount = "100";

//Convert:: S T R I N G - to - NUMBER
// amount = parseInt(amount);
// amount = +amount;
amount = Number(amount);

console.log(amount, typeof amount);

//Convert::  N U M B E R - to - STRING

let amounts = 200;
// amounts = amounts.toString();     //toString() is method/function , which is attached(.) to an object(amounts)
//JavaScript creates a temporary wrapper of the associated type.
amounts = String(amounts);
console.log(amounts, typeof amounts);

// Convert:: S T R I N G - to - DECIMAL
let weight = "58.5";
weight = parseFloat(weight);
console.log(weight, typeof weight);

// Convert:: N U M B E R - to - BOOLEAN
let Numb = 0;
Numb = Boolean(Numb);

console.log(Numb, typeof Numb);
/* if Numb = 0 , if give 0, its become falsy..*/

//  NaN - & ways to get NaN
/*Let's try string to boolean*/
let zero = "hello";
zero =
  parseInt(
    zero
  ); /*after converting to Number it can't turn text hello to any number. So, it's returning NaN
console.log(zero, typeof zero);
/*its give NaN== Not a number*, four other ways to get Nan */
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("koo" / 3);
