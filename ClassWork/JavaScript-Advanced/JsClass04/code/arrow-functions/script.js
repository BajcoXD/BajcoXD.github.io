console.log("========== ARROW FUNCTION =========");

// ===> Regular function
function sayHello() {
  console.log("Hello !");
}

// ===> Anonymous function

let sayHelloAnonymous = function () {
  console.log("Hello Anonymouse !");
};

// ===> Arrow function
let sayHelloArrow = () => {
  console.log("Hello Arrow !");
};

sayHello();

sayHelloAnonymous();

sayHelloArrow();

let sayHelloArrowOneLine = () => console.log("Hello Arrow in one line !");

sayHelloArrowOneLine();

// ========= No parameters, return =========

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

const getRandom = () => Math.floor(Math.random() * 100);

let randomNum = getRandom();

console.log(randomNum);

// ======== One parametar, one expression (return value) =======
function isEven(number) {
  return number % 2 === 0;
}

const isNumberEven = (number) => number % 2 === 0;
console.log(`The number 68 is evan : ${isNumberEven(68)}`);

// ==== Multiple parameters, one expression (return value)
const sum = (num1, num2) => num1 + num2;
console.log(sum(20, 30));

// ==== Multiple parameters, multiple expressions
const getMaxNumber = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  }
  return num2;
};

// arrow function in an event listiner
document.querySelector("button").addEventListener("click", () => {
  console.log("click");
});

const postsUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(postsUrl)
  .then(function (response) {
    const parsedData = response.json();
    return parsedData;
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("Error!");
  });

// ==> Using Arrow
fetch(postsUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
