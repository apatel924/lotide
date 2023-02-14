const assertArraysEqual = require('./assertArraysEqual')

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

module.exports = middle
