

const eqObjects = require('./eqObjects');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) { // if returns true
    console.log(`Assertion pass ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`Assertion fail ${inspect(object1)} !== ${inspect(object2)}`);
  }
};
module.exports = assertObjectsEqual;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab,ba);