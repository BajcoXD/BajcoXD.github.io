console.log("============== INTRO TO CLASSES ===============");

// function Employee(firstName, lastName, age, salary) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.salary = salary;
//   this.printInfo = function () {
//     console.log(
//       `Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}`
//     );
//   };
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
      `Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}`
    );
  }
}

const firstEmployee = new Employee("Viktor", "Stojanovski", 19, 1000);
console.log(firstEmployee);

firstEmployee.printInfo();

class Developer {
    
  constructor() {
   
  }
  code() {
    console.log(`${this.firstName} is doing magic :D`);
  }
}

const firstDeveloper = new Employee("Viktor", "Stojanovski", 19, 1000);
const newDeveloper = [...firstDeveloper, ...Developer]
console.log();
