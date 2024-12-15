let hotel = new Object();
hotel.name = "Bristol";
hotel.numberOfRooms = 100;
hotel.rating = 5;
hotel.hasSpaCenter = true;
hotel.bookedRooms = 55;
hotel.getAvilability = function () {
  return this.numberOfRooms - this.bookedRooms;
};
console.log(hotel);
console.log(hotel.name);
console.log(
  `The hotel ${hotel.name} has ${hotel.getAvilability()} avilable rooms. `
);

let martin = {
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

martin.firstName = "Martin";
console.log(martin.firstName);

//--------------------------Excersise
let trainer = {
  name: "stefan",
  lastName: "stefanovski",
  academy: "sedc",
  lecture: "objects",
};
delete trainer.lecture;
trainer.age = 19;
trainer.getFullName = function () {
  return this.name + " " + this.lastName;
};
console.log(trainer);

//--------------

function windowSize(){
  let width = this.innerWidth;
  let height = this.innerHeight;
  return [width, height];
}
console.log(windowSize());

console.log(this);
