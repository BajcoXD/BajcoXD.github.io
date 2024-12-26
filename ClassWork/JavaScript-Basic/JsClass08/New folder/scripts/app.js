function sayHello() {
  alert("Hello there!");
}

function greet(message) {
  alert(message);
}

//================ Using traditional Dom Event Handlers ============
let incriseBtn = document.getElementById("incriseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");

let count = 0;
let reasultParagraph = document.getElementById("results");
incriseBtn.onclick = function () {
  count++;
  reasultParagraph.innerText = count;
};
function deacrease() {
  if (count > 0) {
    count--;
  }
  reasultParagraph.innerText = count;
}
decreaseBtn.onclick = deacrease;

function reset() {
  count = 0;
  reasultParagraph.innerText = count;
}

resetBtn.onclick = reset;
//============ Using Event Listeners ===========
let fNameInput = document.getElementById("fName");
let lNameInput = document.getElementById("lName");
let saveBtn = document.getElementById("btnSave");
let saveUserParagraph = document.getElementById("saveResults");

saveBtn.addEventListener("click", function () {
  let fNameValue = fNameInput.value;
  let lNameValue = lNameInput.value;

  saveUserParagraph.innerText = `${fNameValue} ${lNameValue} saved to Databadse!`;
  fNameInput.value = "";
  lNameInput.value = "";
});
//=============== Exercise ============

function helloViktor() {
    alert("Hello Viktor!")
}