let d;

d = new Date();
d = d.toString();
d = new Date ( 2023, 9, 24, 12, 30,10); /*gives oct 24, 2023 , and time 12:30:10 bcoz months are 0 index based*/
d= new Date ('2023-09-24T17:03'); /*if u use year first- it could be a day off due to timezone*/
d= new Date ('09/24/2023 17:04');
d = new Date ('2023-09-24'); /*it is fixed*/
d  = new Date ('09/24/2023');
console.log(d); 


// TIMESTAMP  -describing point in time {no.of seconds past jan 1st, 1970}
/* it is expressed in milisecongs*/

e = Date.now();
console.log(e); /*gives timestamp of now*/

f = new Date ('09/01/2023');
f = f.getTime(); /*another way of getting timestamp: .valueof() */
console.log(f);


//Create date object from a timestamp
g = new Date(1695557394374); /*generates date of now,  as timestamp is of now.L16/17*/
console.log(g);


//get Timstamp in seconds

i = Math.floor(Date.now()/1000);
console.log(i);