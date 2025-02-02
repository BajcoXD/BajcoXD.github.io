console.log("============== PURE FUNCTIONS ==========");

// ======> Example: for adding element to array

const impureArray = [1, 2, 3];

function addToArrayImpure(array, item) {
  array.push(item);
  return array;
}
let resultImpure = addToArrayImpure(impureArray, 444);
console.log(impureArray);
console.log(resultImpure);

const pureArray = [1, 2, 3];
function addToArrayPure(array, item) {
  const result = [];
  for (const element of array) {
    result.push(element);
  }
  result.push(item);
  return result;
}

const pureArrayResult = addToArrayPure(pureArray, 33333);
console.log(pureArray);
console.log(pureArrayResult);

console.log("=========== STRICT TYPING IN JAVASCRIPT =========");
number = 15;
console.log(number);

delete number;
function sum(num1, num2) {
  return num1 + num2;
}

let eval = 123;
let arguments = 2;

