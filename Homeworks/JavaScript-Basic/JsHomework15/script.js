function fillArray() {
  let array = [];

  for (let i = 0; i < 9999; i++) {
    let userInput = prompt("Enter anything you want to the array");
    if (userInput !== null && userInput !== "") {
      array.push(userInput);
    } else {
      break;
    }
  }
  return array;
}
alert(fillArray());
