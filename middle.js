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
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);