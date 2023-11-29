console.log(100);

console.log("John");

console.log(2, "zon", true);
//console.log k (andar dalkar kisi bhi value ko
//print karaya ja sakta hai...)

const z = 100; /* this z's value is printing via log in line 10*/
console.log(z);

//console.table se , TABLES ko print kiya ja sakta hai.
console.table({ name: "john", email: "john@gmail.com" });
console.table({ post: "frontend developer", salary: "30,000 per month" });
console.table({ post: "Reporter", salary: "7000" });

//putting "z, alert and warning" together in a group
console.group("simple");
console.log(z);
console.error("alert");
console.warn("Warning");
console.groupEnd();
//Color of alert is RED
//Color of Warning is YELLOW
const styles = "padding: 10px; background-color: pink;";
console.log("%cHello World", styles);

const styl =
  "padding: 10px; background-colr: green; color: purple; font-weight:700";
console.log("%cHardcore Programmer", styl);

const style = "padding: 8px; background-color: green;";
console.log("%cJanSaathi", style);

const styler =
  "padding: 10px; background-color: orange; color: black; font-weight:600; font-size: 14px;";
console.log("%cGenesys LLP", styler);
