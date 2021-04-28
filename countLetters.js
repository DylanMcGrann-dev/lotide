const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬Assertion failed: ${actual} !==  ${expected}`);
  }
};
const countLetters = function(string) {
  const letters = { 
    
  };
  for (const letter of string) { // loops through the string
    if (letter !== ' ') {       // checking if index is a space if it is stop if not continue
      if (letters[letter]) {
        letters[letter] += 1;
      } else {
        letters[letter] = 1;
      }                            
    }
    
  }
  return letters;
}
console.log(countLetters("lighthouse in the house"))