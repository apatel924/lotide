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
    // now checking if elements are equal to one another
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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
console.log(results1)