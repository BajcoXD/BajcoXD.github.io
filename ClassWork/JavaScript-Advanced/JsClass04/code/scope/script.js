console.log("=============== SCOPES =============");

// GLOBAL SCOPE

let globalNumber = 12345;
function printGlobalNumber() {
  globalNumber = 55555;
  console.log(globalNumber);
}

printGlobalNumber(globalNumber);

// LOCAL SCOPE (FUNCTION SCOPE)

// EXAMPLE
function localScope(number) {
  let localNumber = 100;
  let result = localNumber + number;
  console.log("The result is", result);
}

localScope(123);

// Example 2
let greeting = "Hello from Qinshift";
function printGreeting() {
  let greeting = "Happy holidays";
  console.log(greeting);
}

printGreeting();

// Example 3
function outerFunction() {
  let outerVariable = "I`m from outer function";
  function innerFunctions() {
    let innerVariable = "i`m from inner function";
    console.log(outerVariable);
    console.log(innerVariable);
  }
  innerFunctions();
}
outerFunction();

// BLOCK SCOPE
if (50 < 100) {
  let blockNumber = 50 + 100;
  // This is posible
  console.log(blockNumber);
}

console.log(blockNumber);
// ERROR (Its not posible)

// Example 2
let counter = 0;
while (counter <= 10) {
  console.log(counter);
  counter++;
  let testCounter = counter;
}
console.log(testCounter);
console.log(counter);
