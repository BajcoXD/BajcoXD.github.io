function Academy(academyName, numberOfGroups, numberOfClassrooms) {
  this.academyName = academyName;
  this.numberOfGroups = numberOfGroups;
  this.numberOfClassrooms = numberOfClassrooms;
  this.displayName = function () {
    console.log(`Academy: ${this.academyName}`);
  };
}

function Student(firstName, lastName, age, eMail, academy, group) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.eMail = eMail;
  this.academy = academy;
  this.group = group;
  this.studentsAcademy = function () {
    console.log(
      `The student: ${firstName} ${lastName} is in ${academy.academyName} Academy in group ${group.name}`
    );
  };
  this.studentAge = function () {
    console.log(`The student:${firstName} ${lastName} age is ${age}`);
  };
  this.studentEMail = function () {
    console.log(`The student:${firstName} ${lastName} email is ${eMail}`);
  };
  this.studentAgeAndEmail = function () {
    console.log(
      `The student:${firstName} ${lastName} his age is ${age} Email: ${eMail}`
    );
  };
  this.studentGroup = function () {
    console.log(`The student:${firstName} ${lastName} group is ${group}`);
  };
  this.studentAllInfo = function () {
    console.log(
      `The student:${firstName} ${lastName} age:${age} Email:${eMail} Group:${group}`
    );
  };
}
function Group(name, numberOfStudents) {
  this.name = name;
  this.numberOfStudents = numberOfStudents;
  this.students = [];
  this.groupNumOfStudents = function () {
    console.log(`The group ${name} has ${numberOfStudents} Students`);
  };
}

let academy = new Academy("QinShift Academy", 10, 12);
let group = new Group("A1", 100);

let studentOne = new Student(
  "Viktor",
  "Stojanovski",
  31,
  "viktorbajco@gmail.com",
  academy,
  group
);
let studentTwo = new Student(
  "Nikola",
  "Kolevski",
  22,
  "nikolce225@gmail.com",
  academy,
  group
);

group.students.push(studentOne);
group.students.push(studentTwo);

group.numberOfStudents = group.students.length;

academy.displayName();
studentOne.studentsAcademy();
studentTwo.studentEMail();
group.groupNumOfStudents();
