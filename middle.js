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

const middle = function(array) {
  let result = [];
  // start by checking length of array
  if (array.length <= 2) {
    return result;
  // if less than or equal to 3 arrays
  } else {
    let middleIndex = array.length / 2;
  // divide array length by two to be in middle of array, give the middle and one less than middle to give two numbers
    if (array.length % 2 === 0) {
      result.push(array[middleIndex - 1], array[middleIndex]);
  // the division needs to be rounded down using math.floor
    } else {
      result.push(array[Math.floor(middleIndex)]);
    }
  }
  return result;
}

console.log(middle([1, 2, 3, 4, 5, 6]))
console.log(middle([1, 2, 3,4]))
