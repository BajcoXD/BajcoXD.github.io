let array = [2, "awdaw", "bla", 3, 4, "vic", 2];

function cleanArray(array) {
  let newArray1 = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      newArray1.push(array[i]);
    }
  }
  return newArray1;
}

console.log(cleanArray(array));
//
// ==============
//
let array2 = [2, "awdaw", "bla", 3, 4, "vic", 2];

function cleanArray2(array) {
  let newArray2 = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      newArray2.push(array[i]);
    }
  }
  return newArray2;
}

console.log(cleanArray2(array2));

let array3 = [
  true,
  false,
  12,
  13,
  44,
  2345,
  "Bob",
  "Jill",
  false,
  undefined,
  1000,
  null,
  "Jack",
  "",
  "",
  99,
  "Greg",
  undefined,
  NaN,
  1,
  22,
];

console.log(cleanArray2(array3));
console.log("==========================");

console.log(array3);

function cleanFalseValues(array3) {
  let reasultNumber = [];
  for (i = 0; i < array3.length; i++) {
    if (array3[i]) {
      reasultNumber.push(array3[i]);
    }
  }
  return reasultNumber;
}

console.log(cleanFalseValues(array3));
