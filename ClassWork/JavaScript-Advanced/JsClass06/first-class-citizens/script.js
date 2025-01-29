function multiply(num1, num2 = 10) {
  console.log(`Result: ${num1 * num2}`);
}

multiply(2, 5);
multiply(7);

console.log("============== FUNCTIONS = FIRST CLASS CITIZENS ==========");

// ===> Staring functions as a variable
let greet = (name) => console.log(`Hello ${name}`);
greet("Viktor");

// ===> Used as an argument to another function ***
function calculator(calculateFunc, num1, num2) {
  return calculateFunc(num1, num2);
}

function sum(number1, number2) {
  return number1 + number2;
}

let sumResult = calculator(sum, 2, 5);
console.log(sumResult);

let subtractResult = calculator(
  function (num1, num2) {
    return num1 - num2;
  },
  100,
  80
);
console.log(subtractResult);

function logFunction(func) {
  func();
}

logFunction(() => console.log("Hello"));

console.log(calculator((x, y) => x * y, 30, 2));

// ====> Used as a return value from

function getOperation(operator) {
  switch (operator) {
    case "+":
      return (num1, num2) => num1 + num2;
    case "-":
      return (num1, num2) => num1 - num2;
    case "*":
      return (num1, num2) => num1 * num2;
    case "/":
      return (num1, num2) => num1 / num2;
    case "**":
      return (num1, num2) => num1 ** num2;
    default:
      break;
  }
}

const divide = getOperation("/");
console.log(divide(10, 2));

console.log(getOperation("**")(2, 3));
// ====> Have properties line objects
function greetStudent(name) {
  console.log(`Hello ${name}`);
}
greetStudent.firstName = "Viktor";
greetStudent(greetStudent.firstName);

console.log("");
console.log("=========== function Arguments ========");

function someFunction() {
  console.log(arguments);
  console.log(arguments.length);
}

someFunction("Bob", "Jane", "Tom", "Jill", "Darko", 123);

function sumOfNumbers() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

console.log(sumOfNumbers(10, 20, 30, 40));
