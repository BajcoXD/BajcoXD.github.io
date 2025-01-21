console.log("============= JSON ============");

console.log("");

console.log("=========== Create JSON from JavaScript Object ===========");

let jsOBject = {
  firstName: "Bob",
  lastName: "Bobsky",
  age: 34,
  isStudent: true,
  favouriteSubjects: ["JavaScript", "C#"],
  printInfo: function () {
    console.log(`${this.firstName} ${this.lastName} is ${this.age} years old`);
  },
};

jsOBject.printInfo();
console.log(typeof jsOBject);
console.log(jsOBject);

// =====> Serialize JavaScript object to JSON

let jsonString = JSON.stringify(jsOBject);
console.log(jsonString);
console.log(typeof jsonString);
console.log(jsonString.firstName);

console.log("");
console.log("========== Create JavaScript Object from JSON ========");

let courseJson = `
{
  "trainer": "John Doe",
  "assistant": "Jane Doe",
  "students": [
    "Bob",
    "Samantha",
    "Chris",
    "Jill",
    "Greg",
    "Maria",
    "Tom",
    "Sue"
  ],
  "academy": "Code"
}
`;

let JsonObject = JSON.parse(courseJson);
console.log(JsonObject);
console.log(JsonObject.trainer);
