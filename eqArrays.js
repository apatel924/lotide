const assertEqual = require('./assertEqual')

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
};

module.exports = eqArrays
