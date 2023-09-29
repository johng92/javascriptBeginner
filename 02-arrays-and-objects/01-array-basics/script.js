let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];  /*there is another way of make array*/
console.log(numbers);

const mixed = [12, 'Hello', true, null];
console.log(mixed);


// Array Constructor
const fruits = new Array('apple', 'grape', 'orange');
console.log(fruits);

x = numbers[0] + numbers[2];  /*we get 45 */

// We can also use this with template literals--
x = `My favorite fruit is ${fruits[0]}.`;

x = numbers.length;  /*gives 5*/

fruits[2] = 'banana'; /*changed orange to banana*/

// fruits.length = 2    , this will give only apple and grape

x = fruits;
console.log(x);
//Method are used to add, these array values

/*hard coded way of adding    */

fruits[3] = 'strawberry';
y = fruits;
console.log(y); /*[apple","grape","banana", "strawberry"]*/

//aNOTHER way of adding in arrays

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';
z = fruits;
console.log(z);
// Arrays are inherently MUTABLE , We change them, mutate them