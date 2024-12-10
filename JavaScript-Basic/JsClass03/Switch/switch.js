let number = prompt("Please enter a day");
// let number(prompt("please"))
let parsedNumber = parseInt(number);

if (!isNaN(parsedNumber)) {
  switch (parsedNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Thuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("There is no such day");
  }
} else {
  console.log("Please enter a Valid number");
}

switch (parsedNumber) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Work Day");
    break;
  case 6:
  case 7:
    console.log("Weekend");
    break;
  default:
    console.log("There is no sutch day");
}
