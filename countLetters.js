const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑 Assertion Failed: $(actual} !=== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letterCounts = {}

  for (let letter of sentence) {
    if (letter !== ' ') {
      if (letterCounts[letter]) {
        letterCounts[letter] += 1;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }
  return letterCounts;
}

console.log(countLetters("lhl"))