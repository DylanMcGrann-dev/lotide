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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {   // compares object length
    return false;
  } for (const keys of Object.keys(object1)) {   // loops through object keys
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {  // checks if both object keys are arrays
      if (eqArrays(object1[keys],object2[keys])) {      // if both are arrays eqArrays checks to see if they are the same
        return true;
      } else {    //if they are not the same return false
        return false;
      }
    }
    if (object1[keys] === object2[keys]) {
    } else {
      return false;
    }
    
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) { // if returns true
    console.log(`Assertion pass ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`Assertion fail ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "3" };
assertObjectsEqual(ab,ba);