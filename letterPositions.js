const eqArrays = function(array1,array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array2.length !== array1.length) {
      return false;
    } else if (array2[i] !== array1[i]) {
      return false;
    } else if (i === array1.length) {
      return true;
    }
  }
  
};

const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      };
    } 
  }
  // logic to update results here
  return results;
};
module.exports = letterPositions;
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").o, [4]);