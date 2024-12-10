console.log("=========== CONTROL STRUCTERS ============");
// 1) Conditional statements
// 2) Switch statement
// 3) Looping structures
// Purpose: Control the flow of a program

console.log();
console.log("=========== CONDITIONAL STATEMENS ========");

console.log("====== IF STATEMENT =========");
// Base syntax
// if (boolean statement) {
// code ...
// }

let num = 10;

if (num > 0) {
  console.log(`The number ${num} is positive`);
}

console.log("========== ELSE Statement =========");
// else {

// }
num = -4;
if (num > 0) {
  console.log(`The number ${num} is positive`);
} else {
  console.log(`The number ${num} is not positive`);
}

console.log("=========== ELSE IF statement ==========");

num = 0;
if (num > 0) {
  console.log(`The number ${num} is positive`);
} else if (num < 0) {
  console.log(`The number ${num} is negative`);
} else {
  console.log(`The number is zero`);
}

console.log();
console.log("========== ENTER A NUMBER ========");
let input = prompt("Enter a number:")
console.log(input);
console.log(typeof input);

console.log("After parsing the input in to integer");

let parsedNumber = parseInt(input);
console.log(parsedNumber);
console.log(typeof parsedNumber);

if (Number.isNaN(parsedNumber)){
    alert("you've entered an invalid number!")
} else {
    alert(`The parsed number value is ${parsedNumber}`)
}