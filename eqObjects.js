
const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {   // compares object length
    return false;
  } for (const keys of Object.keys(object1)) {// loops through object keys
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {  // checks if both object keys are arrays
      if (eqArrays(object1[keys],object2[keys])) {// if both are arrays eqArrays checks to see if they are the same
        return true;
      } else {//if they are not the same return false
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
module.exports = eqObjects;
// const cd = { c: "1", d: ["2", 3, 6] };
// const dc = { d: ["2", 3, 6], c: "1" };
// //assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, ba));
