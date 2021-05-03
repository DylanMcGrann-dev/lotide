
const assertArrayEqual = require('./assertArraysEqual');

const middle = function(array) {
  let x = 0;
  let i = 0;
  let mid = [];
  if (array.length < 2) {
    return 'Array not long enough';
  } else if ( array.length % 2 !== 0) {
    i += (array.length - 1) / 2;
    mid.push(array[i]);
  } else if (array.length % 2 === 0) {
    i += array.length / 2;
    x += (array.length /2) -1
    mid.push(array[x]);
    mid.push(array[i])
  }
    
 return mid;
}
module.exports = middle;
