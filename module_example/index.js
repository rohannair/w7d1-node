const utils = require('./utils2');
const doubler = utils.doubler;
const tripler = utils.tripler;
const NUMBER = utils.num;

console.log(doubler(NUMBER));
console.log(tripler(NUMBER));
console.log(tripler(doubler(NUMBER)));

