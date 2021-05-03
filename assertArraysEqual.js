const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) { // if returns true
    console.log('Assertion pass');
  } else {
    console.log('Assertion fail');
  }
};
module.exports = assertArraysEqual;

