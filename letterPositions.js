const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(first, second) {
  //start by checking length
  if (first.length === second.length) {
    // now checking if elements are equal to first another
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false; 
      }
    }
  } else{
    // return statement if not equal to one another
    return false
  }
  // return statement if elements do not equal same length
  return true
}

const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${first} !=== ${second}`)
  }
}

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let letter of sentence) {
    if (sentence[letter] !== ' ') {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(Number(letter));
      } else {
        results[sentence[letter]] = [Number(letter)];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello"))