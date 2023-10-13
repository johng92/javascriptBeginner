let x

const arr = [34, 55, 95, 20, 15]

arr.push(99) //99 added in the last
arr.pop() //99 removed
arr.unshift(99) //to add item in the begining, 99 will be inserted at index0
arr.shift(99) //take it off (deletes 99 from the begining)
// arr.reverse()   // 15,20,95 it reverse the list items

console.log(arr)

//The above methods were to MANIPULATE the existing array

//Now, GET some VALUE or INFORMATION from the array
x = arr.includes(20) //returns, true bcoz it exit in the arr
x = arr.includes(299) //returns, false bcoz it doesn't exist in arr
x = arr.indexOf(15) // returns 0, bcoz in liNE 9 we've reversed the list/arr
x = arr.indexOf(198) // gives -1, for the item which doesn't exit in the array
x = arr.slice(1) //gives 55,95,20,15 , bcoz it's slicing from index 1,since 34 is at 0 index
x = arr.slice(1, 4) //gives, 55,95,20 starts at 1 , excludes 4th
//WHEN ARE MANIPULATING THIS ARRAY , IT IS NOT CHANGING THE ACTUAL ARRAY
console.log(x, arr) //(3)[55,95,20] (5)[34,55,95,20,15] THEY REMAIN SAME

// FOR MANUPULATING USE THESE COMMANDS

//x = arr.splice(1, 4) /*plucks the 34 away*/

//console.log(x, arr)

     // IF YOU WANNA DELETE ANY ITEM FROM THE ARRAY
// x = arr.splice(3,1); /*want to delete 20 (which is at 3rd index) and I want to take it out 1*/
console.log(x, arr)

/*x = arr.splice(0,1)
 console.log(x, arr) plucks out 34, and remains 55,95,15 , bcoz earlier we've removed 20 -- So, slice doesn't change the initial array, but splice does.*/


//HOW TO CHAIN METHODS
x = arr.splice(1,4).reverse().toString().charAt(1); /*.splice(1,4)prints-[55,95,20,15] if you want all 5 , arr.splice(0,5) ==starts from 0 index and give me 5 items*/
/*chatAt(1) gives 5 , becuase at index 1 in the array , which has reversed as 15,20,95,55 , 5 is at index-1*/

// .charAt() methods work only onto the Strings, not at the array
console.log(x)