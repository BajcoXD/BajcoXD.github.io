// Create an object - literal notation

let person = {
  firstName: "Martin",
  LastName: "Panovski",
  age: 31,
  hobbies: ["swiming", "reading books", "running"],
  isLazy: false,
  getFullName: function () {
    return this.firstName + " " + this.LastName;
  },
  showHobbies: function () {
    for (let hobby of this.hobbies) {
      console.log(hobby);
    }
  },
};

console.log(person);

console.log(person.firstName);
console.log(person.age);
console.log(person.getFullName());
console.log(person.showHobbies());
//kaj showhobbies u samata metoda ima console.log taka da moze i vaka
person.showHobbies();

// We can change the objects after their creation
// Add property or method agter the object is created
person.height = 189;
console.log(person);

person.getHight = function () {
  return this.height;
};
console.log(person.getHight());

// accses and object property by using []
console.log(person["LastName"]);

let me = {
  firstName: "Viktor",
  lastName: "Stojanovski",
  height: "171cm",
  yearsYoung: 19,
  hobbies: ["Gym", "Handball", "Gaming"],
  isActive: true,
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
  showHobbies: function () {
    for (let hobby of this.hobbies) console.log(hobby);
  },
};
console.log(me);

