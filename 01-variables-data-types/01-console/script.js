console.log(100);

console.log('John');

console.log(2,"zon", true)


const z = 100;  /* this z's value is printing via log in line 18*/
console.log(z);



console.table({name:'john', email: 'john@gmail.com' });


//putting z, alert and warning together in a group
console.group('simple');
console.log(z);
console.error('alert');
console.warn('Warning');
console.groupEnd();
//Color of alert is RED
//Color of Warning is YELLOW
const styles= 'padding: 10px; background-color: pink;';
console.log('%cHello World', styles);

const style= 'padding: 8px; background-color: green;';

console.log('%cJanSaathi', style);