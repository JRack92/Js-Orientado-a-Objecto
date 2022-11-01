// import { add, multiply } from './add.js';
// console.log(add(10, 20));
// console.log(multiply(10, 20));

import {Calc} from './add.js';
const calc = new Calc();

console.log(calc.add(10,20));
console.log(calc.multiply(10,20));