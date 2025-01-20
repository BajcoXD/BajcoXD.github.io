function Students(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}
const dataBase = [];
const studentForm = document.getElementById("studentForm");

studentForm.onsubmit = function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;

  const newStudent = new Students(firstName, lastName, age, email);

  dataBase.push(newStudent);

  console.log(dataBase);

  studentForm.reset();
};
