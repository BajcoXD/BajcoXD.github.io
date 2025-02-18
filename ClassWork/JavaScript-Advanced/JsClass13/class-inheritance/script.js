console.log("================== INTRO TO CLASSES ==================");

// function Employee(firstName, lastName, age, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//     this.printInfo = function () {
//         console.log(`Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`);
//     }
// }

class Employee {
  constructor(firstName, lastName, age, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  printInfo() {
    console.log(
      `Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`
    );
  }
  greetColleague(name) {
    console.log(`${this.firstName} says hello to ${name}`);
  }
}

const bob = new Employee("Bob", "Bobsky", 30, 3000);
console.log(bob);
bob.printInfo();
console.log("=========================================");

class Developer extends Employee {
  constructor(firstName, lastName, age, salary, programingLanguages) {
    super(firstName, lastName, age, salary);
    this.programingLanguages = programingLanguages;
  }
  code() {
    console.log(`${this.firstName} is doing magic :D`);
  }
}
class Tester extends Employee {
  constructor(firstName, lastName, age, salary, bugsFound) {
    super(firstName, lastName, age, salary);
    this.bugsFound = bugsFound;
  }
  testSoftware() {
    console.log(
      `${this.firstName} is testing the software and found ${this.bugsFound}`
    );
  }
}
class Menager extends Employee {
  constructor(firstName, lastName, age, salary, department) {
    super(firstName, lastName, age, salary);
    this.department = department;
  }
  organizeMeeting() {
    console.log(
      `The Menager ${this.firstName} is orginazing a meeting for ${this.department} department`
    );
  }
}
class AutomationTester extends Tester {
  constructor(
    firstName,
    lastName,
    age,
    salary,
    bugsFound,
    automationFramework
  ) {
    super(firstName, lastName, age, salary, bugsFound);
    this.automationFramework = automationFramework;
  }
  writeAutomationFramework() {
    console.log(
      `${this.firstName} is writing Automation Tests using the ${this.automationFramework} framework.`
    );
  }
}
const dev = new Developer("Viktor", "Stojanovski", 19, 1000, [
  "JavaScript",
  "CSS",
  "HTML",
]);
dev.printInfo();
dev.code();
console.log("=========================================");

const tester = new Tester("Boban", "Bobski", 19, 2000, 5);
tester.printInfo();
tester.testSoftware();
console.log("=======================================");

const menager = new Menager("Palco", "Palcovski", 30, 5000, "QinShift");
tester.printInfo();
tester.testSoftware();
console.log("=====================================");

const automationTester = new AutomationTester(
  "Test",
  "Testovski",
  25,
  2400,
  5,
  "Selenium"
);
automationTester.printInfo();
automationTester.testSoftware();
automationTester.writeAutomationFramework();

console.log(automationTester.__proto__);
console.log(automationTester.__proto__.__proto__);
console.log(automationTester.__proto__.__proto__.__proto__);

console.log("");
console.log(
  "=========== Check if an object is an instance of a class ==========="
);
console.log(dev instanceof Developer); // true
console.log(dev instanceof Employee); // true
console.log(dev instanceof Tester); // flase

console.log("============================================");

console.log(automationTester instanceof Tester); // true
console.log(automationTester instanceof AutomationTester); // true
console.log(automationTester instanceof Employee); // true
