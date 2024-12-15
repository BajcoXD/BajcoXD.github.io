// Create an object using Construction Function

function person(firstName, lastName, age, isEmployed, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.birthYear = birthYear;
  this.isEmployed = isEmployed;
  this.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
  }
  this.calculateAge = function(currentYear){
    return currentYear - this.birthYear;
  }
}
let viktor = new person("Viktor", "Stojanovski", 19, false, 2005);
let frosina = new person("Frosina", "Stamenkovska", 31, true, 1993);
viktor.isLazy = false;
viktor.isGaming = true;

console.log(viktor);
console.log(frosina);
console.log(frosina.calculateAge(2024));
console.log(viktor.calculateAge(2024));

