function Student(firstName, lastName, birthYear, academy, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;
  this.academy = academy;
  this.grades = grades;

  this.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  };
  this.getInfo = function () {
    return `This is student ${firstName} ${lastName} from the academy ${academy}!`;
  };
  this.getGradesAverage = function () {
    if (grades.length === 0) {
      return 0;
    }

    let total = 0;

    for (let i = 0; i < grades.length; i++) {
      total += grades[i];
    }

    const average = total / grades.length;

    return average.toFixed(2);
  };
}
const students = [
  new Student(
    "Viktor",
    "Stojanovski",
    2005,
    "Programming Academy",
    [1, 5, 3, 4]
  ),
  new Student("Marija", "Stojanovska", 2004, "Design Academy", [2, 5, 4, 3, 2]),
  new Student("Matej", "Stojcevski", 2002, "Business Academy", [4, 5, 5, 5, 3]),
];

students.forEach((student) => {
  console.log(student.getInfo()); // Log student info
  console.log(`Age: ${student.getAge()}`); // Log student age
  console.log(`Average Grade: ${student.getGradesAverage()}`); // Log average grade
  console.log("---------------------"); // Separator for clarity
});
