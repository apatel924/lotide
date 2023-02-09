const assertEquals = function (actual, expected) {
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

const eqObjects = function (object1, object2) {
  // Get the keys of both objects
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // Check if the number of keys is different between the two objects
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Iterate over the keys and compare the values of the properties
  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If both properties are arrays, use the eqArrays function to compare them
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      // If both properties are not arrays, compare their values directly
      return false;
    }
  }

  // If all comparisons were successful, return true
  return true;
};

//Pseudocode
// getting keys of both objects (object1 and 2)
// check if the number of keys is different between the two objects
// check both keys and compare the values
// if both properties are arrays, use the eqArrays function to compare them
// if theyre not arrays compare their values directly

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEquals(eqObjects(shirtObject, anotherShirtObject), true);

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long"
};
eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEquals(eqObjects(shirtObject, longSleeveShirtObject), false);