function toDoList() {
  let array = [];

  for (let i = 0; i < 9999; i++) {
    let userInput = prompt("Enter anything you want to add to the ToDo List:");
    if (userInput !== null && userInput.trim() !== "") {
      array.push(userInput);
    } else {
      break;
    }
  }

  console.log("To-Do List:", array); // array to the console
  return array;
}

toDoList();
