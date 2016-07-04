'use strict';

const fs = require('fs');

const ourFile = fs.readFileSync('./message.txt', 'utf-8')
console.log(ourFile);

// const noNeed = function(err, data) {
//   if (err) {
//     return console.error(err);
//   }

//   return console.log(data);
// });
