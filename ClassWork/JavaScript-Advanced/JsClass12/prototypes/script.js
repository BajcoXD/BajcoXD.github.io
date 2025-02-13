console.log("================= PROTOTYPES ==============");

const animal = {
  type: "Mamal",
  eat: function () {
    console.log("Nom Nom Nom");
  },
};

const dog = Object.create(animal);
dog.breed = "German Shepard";
console.log(dog);

console.log("");
console.log("============= _proto_ ============");

console.log(dog.type);
console.log(dog.__proto__.type);

console.log(dog); // dog
console.log(dog.__proto__); // the prorotype of dog
console.log(dog.__proto__.__proto__); // the prototype of prototype of dog
console.log(dog.__proto__.__proto__.__proto__); // Null
// console.log(dog.__proto__.__proto__.__proto__.__proto__); ERROR

console.log(dog.prototype); // undefined

console.log("");
console.log("=================== prototype =============");

function Animal(name) {
  this.name = name;
  this.eat = () => {
    console.log(`${this.name} is eating`);
  };
}

Animal.prototype.makeSound = function () {
  console.log(`${this.name} makes sound!`);
};

Animal.prototype.isWild = false;
console.log(Animal.prototype);

const cat = new Animal("Cat");
cat.makeSound();
console.log(cat);
console.log(cat.isWild);

console.log("");
console.log("============= Object.SetPropertyOf =============");

const swimAbility = {
  isGoodSwimmer: false,
  swim: function () {
    console.log(
      `${this.name} is swimming. it is a ${
        this.isGoodSwimmer ? "good" : "bad"
      } swimmer`
    );
  },
};
// swimAbility.swim(); we get undefined name

const turtle = new Animal("Turtle"); // Vodna zelka
turtle.makeSound();
// turtle.swim(); // ERROR

// Object.setPrototypeOf(turtle, swimAbility);

// turtle.isGoodSwimmer = true;
// turtle.swim();
console.log(turtle);
// turtle.makeSound();

Object.setPrototypeOf(swimAbility, Animal.prototype);
Object.setPrototypeOf(turtle, swimAbility);
turtle.makeSound();
turtle.isGoodSwimmer = true;
turtle.swim();

console.log(turtle);

console.log("============= Object.getPropertyOf =============");

const bird = new Animal("Dove");
bird.makeSound();

// console.log(bird.prototype); // undefined
console.log(Object.getPrototypeOf(bird));
console.log(Object.getPrototypeOf(bird) === Animal.prototype);
