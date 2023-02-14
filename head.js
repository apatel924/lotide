const assertEqual = require('./assertEqual')

let head = function(arr){
  if (arr.length < 1) {
    return undefined;
  } else {
    return (arr[0])
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");

