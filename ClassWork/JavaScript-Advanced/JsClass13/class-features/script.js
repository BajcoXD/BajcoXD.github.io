console.log("================== STATIC MEMBERS ====================");
class Employee {
  static idCounter = 0;
  constructor(firstName, lastName, age, salary) {
    this.id = ++Employee.idCounter;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
  }

  printInfo() {
    console.log(
      `${this.idCounter}. Employee: ${this.firstName} ${this.lastName}. Age ${this.age}. Salary ${this.salary}.`
    );
  }
  greetColleague(name) {
    console.log(`${this.firstName} says hello to ${name}`);
  }
  static getTotalEmployees() {
    return `Total Employes ${Employee.idCounter}`;
  }
}
const bob = new Employee("Bob", "Bobski", 20, 2000);
bob.printInfo();
console.log(bob.id);
console.log(bob);
console.log(bob.idCounter);
console.log(Employee.idCounter);

const getTotalEmployees = Employee.getTotalEmployees();
console.log(getTotalEmployees);

class StringHelper {
  static toTitleCase(str = "") {
    let splitedString = str.split(" ");
    for (let i = 0; i < splitedString.length; i++) {
      let word = splitedString[i];
      splitedString[i] =
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return splitedString.join(" ");
  }
  static truncate(str, maxLenght) {
    return str.length < maxLenght ? str : str.substring(0, maxLenght) + "...";
  }
}

console.log(StringHelper.toTitleCase("ThiS IS mesSed UP TeXT"));
console.log(StringHelper.truncate("This is very very very very very long string", 7));
