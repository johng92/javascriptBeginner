let x;
let d = new Date();

x = d.toString() /*gives date in this fashion- Thu sep 23....IST)*/
x = d.getTime(); /*gives date in timestamp, ex- 16958983488*/
x = d.valueOf(); /*same as,, getTime() */
x = d.getFullYear(); /*gives, 2023 */
x = d.getMonth(); /*gives, 8, months e.g. jan = 0, feb =1 */
x = d.getDate(); /*gives, 28 :: gives day of the month*/
x = d.getDay(); /*gives day of the week. i.e 4,  Thu = 4 */
x = d.getHours(); /*gives 16, bcoz now it is 16:36 */
x = d.getMinutes(); /*gives 37, bcoz its 16:37 now*/
x = d.getSeconds(); /*gives seconds*/
x = d.getMilliseconds(); /*gives miliseconds*/
x = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`; /*gives 28-8-2023*/
x = Intl.DateTimeFormat('en-IN').format(d); /*gives, 28/9/2023 correct one*/
x = Intl.DateTimeFormat('en-US').format(d); /*9/28/2023*/
x = Intl.DateTimeFormat('default').format(d); /*gives local date, 28/9/2023*/
x = Intl.DateTimeFormat('default', {month:'long'}).format(d); /*gives, September*/

// Intl.DateTimeFormat == obj.toLocaleString('default', {month:'short'})
x = d.toLocaleString('default', {month: 'short'}); /* gives, Sept */
x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Kolkata',
});           /*gives, Thursday, 28 September, 2023 at 5:09:36pm */
console.log(x);