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

const without = function(want, dontWant) {
  
  let wanted = want.filter(function(value) {
    for (const element of dontWant) {
     
      if (value === element) {
        return false;
      }
    }
    return true;
  });
    
  return wanted;
};
module.exports = without;

// console.log(without([1,2,3,4,5,6,7],[2,3]));
// without(["1", "2", "3"], [1, 2, "3"]);
// without([1, 2, 3], [1])
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
// assertArrayEqual(words, ["hello", "world", "lighthouse"]);