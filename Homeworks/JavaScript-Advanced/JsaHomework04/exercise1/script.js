class Academy {
  constructor(name, start, end) {
    this.name = name;
    this.students = [];
    this.subjects = [];
    this.start = new Date(start);
    this.end = new Date(end);
  }

  get numberOfClasses() {
    return this.subjects.length * 10;
  }

  printStudents() {
    console.log("Students in " + this.name + ":");
    this.students.forEach((student) =>
      console.log(`${student.firstName} ${student.lastName}`)
    );
  }

  printSubjects() {
    console.log("Subjects in " + this.name + ":");
    this.subjects.forEach((subject) => console.log(subject.title));
  }
}

class Subject {
  constructor(title, isElective, academy) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = [];

    if (academy) {
      academy.subjects.push(this);
    }
  }

  overrideClasses(number) {
    if (number >= 3) {
      this.numberOfClasses = number;
    } else {
      console.error("Number of classes cannot be less than 3");
    }
  }
}

class Student {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
  }

  startAcademy(academy) {
    this.academy = academy;
    academy.students.push(this);
  }

  startSubject(subject) {
    if (this.academy && this.academy.subjects.includes(subject)) {
      this.currentSubject = subject;
      subject.students.push(this);
    } else {
      console.error(
        "Student must be in an academy and subject must exist in the academy."
      );
    }
  }
}

// Example Usage
const academy = new Academy("Programming Academy", "2025-01-01", "2025-12-31");
const student1 = new Student("John", "Doe", 20);
const subject1 = new Subject("JavaScript", false, academy);

student1.startAcademy(academy);
student1.startSubject(subject1);

academy.printStudents();
academy.printSubjects();
