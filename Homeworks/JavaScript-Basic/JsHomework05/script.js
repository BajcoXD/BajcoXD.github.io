function story() {
  let inputElements = prompt(
    "Enter your name,mood and what activity you ofthen do"
  );
  if (inputElements === null) {
    return "Popup canceld, refresh and try again";
  }
  let inputArray = inputElements.split(" ");
  if (inputArray.length !== 3) {
    return "Invalid input. Please provide at least 3 words";
  }
  let name = inputArray[0];
  let mood = inputArray[1];
  let activity = inputArray[2];

  let storyLine = `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;

  return storyLine;
}

alert(story());
