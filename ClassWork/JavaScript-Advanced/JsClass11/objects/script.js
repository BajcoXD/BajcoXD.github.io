console.log("");
console.log("====================== OBJECTS PART 1 ===================");

// Example: Anonymous object

let dog = {
  name: "Capo",
  color: "Brown",
  age: 1,
  owner: {
    firstName: "Bob",
    lastName: "Bobsky",
  },
  bark: function () {
    console.log("AW AW AW");
  },
  printInfo: function () {
    console.log(
      `Dog: ${this.name}, Age: ${this.age}, Owner: ${this.owner.firstName}`
    );
  },
  getThis: this,
  printAnonymous: () => {
    console.log(this);
  },
  printThis: () => {
    console.log(this);
  },
};
dog.printInfo();
console.log(dog.getThis); // window
dog.printAnonymous(); // window
dog.printThis(); // window

function Person(firstName, lastName) {
  this.firstName = firstName ? firstName : "unnamed";
  //   this.firstName = firstName || "unnamed";
  //   this.firstName = firstName ?? "unnamed";
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.getThis = this;
  this.printThisAnonymous = () => {
    console.log(this);
  };
  this.printThis = function () {
    console.log(this);
  };
}
let john = new Person("John", "Doe");
console.log(john.getFullName());

console.log(john.getThis); // Current person instance (John object)
john.printThisAnonymous(); // Current person instance (John object)
john.printThis(); // Current person instance (John object)

console.log(this); // GLOBAL object window
console.log(window); // GLOBAL object window
console.log(this === window);
window.testWindowObject();

function testWindowObject() {
  console.log("Hello this is globaly declared function");
}

var testWindow = "test";
console.log(window.testWindow);

console.log(window.document);
console.log(document);

console.log("");
console.log("============= OBJECT BUILT IN METHODS ============");

// ***create***

let person = {
  firstName: "Bob",
  lastName: "Bobsky",
  greet: function () {
    console.log("Hellow !");
  },
};
console.log(person);

let bob = Object.create(person);
console.log(bob);
console.log(bob.firstName);
console.log(bob.lastName);

let newObject = Object.create(null);
newObject.newProperty = "Nema poenta";

// ***Assign***
let bobAddress = {
  street: "Bobsky street",
  city: "Skopje",
  printInfo: function () {
    console.log("Info");
  },
};

let bobinfo = Object.assign(person, bobAddress);
console.log(bobinfo);

bobinfo.printInfo();

console.log("");
console.log("=============== Exploring the Objects ===========");

let barnie = {
  name: "Barnie",
  age: 1,
  bark: function () {
    console.log("AW AW AW");
  },
};

// *** keys ***
let barnieskeys = Object.keys(barnie);
console.log(barnieskeys);

// *** values ***
let barniesValues = Object.values(barnie);
console.log(barniesValues);

// *** entries ***
let keyValuePairs = Object.entries(barnie);
console.log(keyValuePairs);

barnie.isGoodDog = true;
console.log(barnie);

console.log("");
console.log("============ Changing the objects accesebility ==============");

// *** freeze ***
Object.freeze(barnie);
barnie.isGoodDog = true;
barnie.name = "Chapoo";
console.log(barnie);

// *** seal ***
let marley = {
  name: "Marley",
  color: "Brown",
};

Object.seal(marley);
marley.color = "Grey";
marley.isGoodDog = true;
console.log(marley);
