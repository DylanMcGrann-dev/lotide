const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬Assertion failed: ${actual} !==  ${expected}`);
  }
};
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  romance: "Sex And The City",
  documentry: "Explained"
};

const findKeyByValue = function(object, value) {
  for (const keys in object) {     // loop through object
    if (object[keys] === value) {  // find key with requested value
      return keys;                 // return key with value
    } 
      
    
  }
  return;

};
console.log(findKeyByValue(bestTVShowsByGenre, "Explained"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "Explained"), "documentry");