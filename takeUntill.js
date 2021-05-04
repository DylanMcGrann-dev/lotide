
// const eqArrays = function(array1,array2) {
//   for (let i = 0; i <= array1.length; i++) {
//     if (array2.length !== array1.length) {
//       return false;
//     } else if (array2[i] !== array1[i]) {
//       return false;
//     } else if (i === array1.length) {
//       return true;
//     }
//   }
  
// };

// const assertArrayEqual = function(arrayA, arrayB) {
//   if (eqArrays(arrayA, arrayB)) { // if returns true
//     console.log('Assertion pass');
//   } else {
//     console.log('Assertion fail');
//   }
// };

const takeUntill = function(array, callback) {
  let arr = [];
  for (const element of array) {
    if (callback(element)) {
      return arr;
    }
    arr.push(element);
  }
};
module.exports = takeUntill;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const expected = [ 1, 2, 5, 7, 2 ];
console.log(takeUntill(data1, x => x < 0));



// assertArrayEqual(results1,expected);