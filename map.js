const eqArrays = require('./eqArrays');

const assertArrayEqual = require('./assertArraysEqual');
// const numbers = [1,2,3,4,5,6,7,8,9];
// const test1Check = [false, false, false, false, false, true, true, true, true];

// const wordLength = ['just', 'need', 'a', 'few', 'words'];
// const test2Check = [ 4, 4, 1, 3, 5 ];

// const test3Check = ['n', 'r', undefined, 'r', undefined];
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
module.exports = map;

// const results2 = map(words, word => word[4]);
// assertArrayEqual(results2,test3Check);


//const test2 = map(wordLength, word => word.length);
//assertArrayEqual(test2,test2Check);


//const test1 = map(numbers, num => num > 5);
//assertArrayEqual(test1,test1Check);


const results1 = map(words, word => word[0]);
console.log(results1);

