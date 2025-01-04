// Create an array with numbers
const numbers = [2, 4, 5, 10, 3];

// Select the HTML elements
const numberList = document.getElementById("number-list");
const sumElement = document.getElementById("sum");
const equationElement = document.getElementById("equation");

// Initialize variables
let sum = 0;
let equation = "";

// Loop through the array and display each number in the list
numbers.forEach((num, index) => {
  // Create a new list item for each number
  const listItem = document.createElement("li");
  listItem.textContent = num;
  numberList.appendChild(listItem);

  // Update the sum and equation
  sum += num;
  equation += index === numbers.length - 1 ? `${num}` : `${num} + `;
});

// Display the sum and the equation
sumElement.textContent = `Sum: ${sum}`;
equationElement.textContent = `Equation: ${equation} = ${sum}`;
