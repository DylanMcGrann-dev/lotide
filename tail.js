const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬Assertion failed: ${actual} !==  ${expected}`);
  }
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tail = function(array) {
  let array2 = [];
  for (let i = 1; i < array.length; i ++) {
    array2.push(array[i]);
  }
  return array2;
};
console.log(tail(words));
assertEqual(words.length, 3);