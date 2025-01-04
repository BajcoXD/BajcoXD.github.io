document.getElementById("createTable").addEventListener("click", function () {
  let rows = parseInt(document.getElementById("rows").value);
  let columns = parseInt(document.getElementById("columns").value);
  let tableContainer = document.getElementById("tableContainer");

  tableContainer.innerHTML = ""; // clear tables

  if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
    alert("Please enter positive numbers for rows and columns.");
    return;
  } // validate input

  let table = document.createElement("table");

  for (let row = 1; row <= rows; row++) {
    let tableRow = document.createElement("tr");
    for (let col = 1; col <= columns; col++) {
      let cell = document.createElement("td");
      cell.innerText = `Row-${row} Column-${col}`;
      tableRow.appendChild(cell);
    }
    table.appendChild(tableRow);
  } // note to self- it needs to loop

  tableContainer.appendChild(table);
}); 
