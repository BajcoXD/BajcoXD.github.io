// let input1 = prompt("string");
// let input2 = Number(prompt("number"));
// let input3 = Boolean(prompt("Boolean"));
// let input4 = prompt("Enter name of you pet:");
// let input5 = prompt("");

// console.log(typeof input1);
// console.log(typeof input2);
// console.log(typeof input3);
// console.log(typeof input4);
// console.log(typeof input5);

// let cat = {};
// cat.name = input4;

//====================================

// function calculate(number) {
//   if (number > 13) {
//     return 2 * (number - 13);
//   }
//   return number - 13;
// }

// let number = parseInt(prompt(""));
// console.log(calculate(number));

// function closerNumber(firstNumber, secondNumber) {
//   let dif1 = 100 - firstNumber;
//   let dif2 = 100 - secondNumber;
//   if (firstNumber < 0 || secondNumber < 0) {
//     return "The NUMBERS are negative, please try again";
//   } else if (firstNumber < secondNumber) {
//     return secondNumber;
//   } else if (firstNumber > secondNumber) {
//     return firstNumber;
//   } else {
//     return "They are equal";
//   }
// }

// let firstNumber = prompt("enter firts number");
// let secondNumber = prompt("enter second number");

// alert(`${closerNumber(firstNumber, secondNumber)}`);

//=================================

function caculateExpenses(salary, rent, bills, sum) {
  return (sum = salary - (rent + bills));
}
let salary = parseInt(prompt("Enter salery:"));
let rent = parseInt(prompt("Enter the price of rent"));
let bills = parseInt(prompt("Enter the bills expenses "));
let sum = 0;
alert(caculateExpenses(salary, rent, bills, sum));
