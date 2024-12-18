let dog = {
  dogName: '',
  kind: '',
  size: '',
  speak: function () {
    return `${this.dogName} says: Feed me some food!`;
  }
};

dog.dogName = prompt("What's your dog's name?");
dog.kind = prompt("What kind is your dog?");
dog.size = prompt("What size is your dog?");

alert(dog.speak())