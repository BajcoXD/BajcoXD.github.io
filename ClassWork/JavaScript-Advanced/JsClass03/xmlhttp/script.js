console.log("");
console.log("=========== Using XMLHttpRequest ==========");

// 1)
let xhr = new XMLHttpRequest();

// 2)
xhr.open(
  "GET",
  "https://github.com/qa-codecademy/mkwd13-04-ajs/blob/main/shared_data/students.json"
);

// 3)
xhr.onload = function () {
  console.log(xhr.response);
  if (xhr.status >= 200 && xhr.status <= 300) {
    console.log("The request succeeded");
    console.log(xhr.response);
    let parsedResponse = JSON.parse(xhr.response);
    console.log(parsedResponse);
  } else {
    console.log("The request failed!");
    console.log(xhr.response);
    console.log(xhr.responseText);
  }
};

// 4)
xhr.send();
