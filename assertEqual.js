const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('🟢🟢🟢Assertion passed: ' + actual + ' === ' + expected);
  } else {
    console.log('🤬🤬🤬Assertion failed: ' + actual + ' !== ' + expected);
  }
};
assertEqual(1,5);
assertEqual("Bootcamp", "Bootcamp");