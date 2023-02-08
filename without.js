const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function (first, second) {
  //start by checking length
  if (first.length === second.length) {
    // now checking if elements are equal to one another
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
  } else {
    // return statement if not equal to one another
    return false;
  }
  // return statement if elements do not equal same length
  return true;
};

const assertArraysEqual = function (first, second) {
  if (eqArrays(first, second)) {
    console.log(`✅✅✅ Assertion Passed: [${first}] === [${second}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${first}] !=== [${second}]`);
  }
};

const without = function (input, exclusion) {
  for (let i = 0; i < exclusion.length; i++) {
    let index = input.indexOf(exclusion[i]);
    if (index > -1) {
      input.splice(index, 1);
    }
  }
  return input;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"]
without(words, ["lighthouse"])

assertArraysEqual(words,["hello", "world", "lighthouse"])