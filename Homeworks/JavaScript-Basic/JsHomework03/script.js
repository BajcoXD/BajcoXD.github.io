function years() {
  let age = Number(prompt("Enter age: "));
  let conversion = Number(prompt("1-human to dog or 2-dog to human."));

if (conversion === 1) {
  return age * 7;
} else if (conversion === 2) {
  return age / 7;
} else {
    return "Invailed input"
}

}

sum = years();
alert(`The age is ${sum}`);
