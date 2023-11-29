const e = "mynewstring";
// d = e.toLowerCase()
d = e.replace("m", "M");
console.log(d);
//above I, my first rough Solution to uppercase of first letter
const myString = "developer";
t = myString.replace("d", "D");
console.log(t);
//above II. my second rough solution for Uppercase

//3rd METHOD to Uppercase by Brad Sir
const myStrings = "javadeveloper";
myNewStrings = myStrings.charAt(0).toUpperCase() + myStrings.substring(1);
// const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewStrings);

const mySting = "androiddeveloper";
nuSting =
  mySting.charAt(0).toUpperCase() +
  mySting.substring(1, 7) +
  mySting.charAt(7).toUpperCase() +
  mySting.substring(8, 16);
console.log(nuSting);

//4th METHOD to Uppercase by Brad Sir
const miSting = "graphicdesigner";
minuSting =
  miSting[0].toUpperCase() +
  miSting.substring(1, 7) +
  miSting[7].toUpperCase() +
  miSting.substring(8, 15);
console.log(minuSting);

const myysting = "appdevelopermaster";
setsting =
  myysting[0].toUpperCase() +
  myysting.substring(1, 3) +
  myysting[3].toUpperCase() +
  myysting.substring(4, 12) +
  myysting[12].toUpperCase() +
  myysting.substring(13, 18);
console.log(setsting);
