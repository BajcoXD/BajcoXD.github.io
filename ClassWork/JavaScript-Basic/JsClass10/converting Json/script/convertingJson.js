let person = {
  firstName: "Viktor",
  lastName: "Stojanovski",
  age: "19",
  isEmployed: true,
  profession: "Software Developer",
  programingLangueges: ["JS", "CSS", "HTML"],
};

// if we want to send data to the server
// wee need to pack the data in Json format
// The proces of packing the data in to Json string
// to be sent in to the server is called
// SERIALIZATION

let jsonContent = JSON.stringify(person);
console.log(jsonContent);

// if we get a responds from the server
// in a Json string format, we need to parse
// the Json string in to JavaScript object
// THE process of doing this is called
// DESERIALIZATION

let jsObject = JSON.parse(jsonContent)
console.log(jsObject);

document.getElementById("firstName").innerText = jsObject.firstName