const data = {
  trainer: "John Doe",
  assistant: "Jane Doe",
  students: ["Bob", "Samantha", "Chris", "Jill", "Greg", "Maria", "Tom", "Sue"],
  academy: "Code",
};

const getDataBtn = document.querySelector("#fetchDataBtn");
const academyNameElement = document.querySelector("#academyName");
const studentsListElement = document.querySelector("#studentList");

getDataBtn.addEventListener("click", function () {
  // Display academy name
  academyNameElement.textContent = data.academy;

  // Display student names
  studentsListElement.innerHTML = ""; // Clear previous data
  data.students.forEach(function (student) {
    const listItem = document.createElement("li");
    listItem.textContent = student;
    studentsListElement.appendChild(listItem);
  });
});
