class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  getFullName() {
    console.log(`${this.firstName} ${this.lastName} ${this.age}`);
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade) {
    super(firstName, lastName, age);
    this.grade = grade;
  }
  getStudentInfo() {
    console.log(`${this.firstName} ${this.lastName} ${this.grade}`);
  }
}

const person1 = new Student("Viktor", "Stojanovski", 25, 5);
person1.getFullName();
person1.getStudentInfo();
// =====================================
// Create a class Car with properties:

// brand (String)
// model (String)
// speed (Number)
// Add a getter for speed that returns the speed in kilometers per hour (km/h).

// Add a setter for speed that ensures the speed is never less than zero. If it is, throw an error with the message "Speed cannot be negative".

// Add method printInfo() that prints the car information.

class Car {
  static limitSpeed;
  constructor(brand, model, speed) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
  }
  getSpeed() {
    console.log(`The car ${this.brand} is going ${this.speed}KmH`);
  }
  get speed() {
    return this._speed;
  }
  set speed(value) {
    if (value <= 0) {
      console.error("You cant drive in negative kmH");
    } else {
      this._speed = value;
    }
  } 
  printInfo() {
    console.log(`${this.brand}`);
    console.log(`${this.model}`);
    console.log(`${this.speed}`);
  }
}

const car = new Car("audi", "a7", -1);
car.getSpeed();
car.printInfo();
