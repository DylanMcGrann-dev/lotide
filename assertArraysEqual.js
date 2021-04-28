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

const assertArrayEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) { // if returns true
    console.log('Assertion pass');
  } else {
    console.log('Assertion fail');
  }
};




assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]);