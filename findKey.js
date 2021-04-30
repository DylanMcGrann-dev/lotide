const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬Assertion failed: ${actual} !==  ${expected}`);
  }
};

const findKey = function(object, callback) {

  for (const key in object) {
    if (callback(object[key])) {
      // console.log(key);
      return key;
    }
    
  }
}

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");

const pets = {
  dog: 'kubie',
  cat: 'mewtwo',
  rabbit: 'hopper'
};
console.log(findKey(pets,x => x === 'kubie'));
assertEqual(findKey(pets,x => x === 'kubie'),'dog');

