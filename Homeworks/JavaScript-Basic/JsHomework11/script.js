let dog = {
  dogName: 'Bak',
  kind: 'Maltezer',
  size: 'Small',
 speak: function () {
  return `${this.dogName} says: Feed me some food!`
 }
}
console.log(dog);
console.log(dog.speak());
