// Constructor function for Expense objects
function Expense(description, amount, category) {
  this.description = description;
  this.amount = amount;
  this.category = category;
}

// Select form elements
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categorySelect = document.getElementById("category");
const addExpenseButton = document.getElementById("add-expense");
const expenseTableBody = document.querySelector("#expense-table tbody");

// Function to add an expense to the table
function addExpenseToTable(expense) {
  const row = document.createElement("tr");

  const descriptionCell = document.createElement("td");
  descriptionCell.textContent = expense.description;
  row.appendChild(descriptionCell);

  const amountCell = document.createElement("td");
  amountCell.textContent = `$${expense.amount.toFixed(2)}`;
  row.appendChild(amountCell);

  const categoryCell = document.createElement("td");
  categoryCell.textContent = expense.category;
  row.appendChild(categoryCell);

  expenseTableBody.appendChild(row);
}

// Event listener for the "Add Expense" button
addExpenseButton.addEventListener("click", () => {
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value);
  const category = categorySelect.value;

  if (!description || isNaN(amount) || !category) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Create a new Expense object
  const expense = new Expense(description, amount, category);

  // Add the expense to the table
  addExpenseToTable(expense);

  // Clear the form inputs
  descriptionInput.value = "";
  amountInput.value = "";
  categorySelect.value = "";
});
