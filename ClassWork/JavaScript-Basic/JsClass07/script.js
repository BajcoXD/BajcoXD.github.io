//================== SELECTORS ===============

// Select by Id
let myFirstElement = document.getElementById("main");
console.log(myFirstElement);

// Select by Tag name

let paragraphs = document.getElementsByTagName("p");
// You select all paragraphs like this "p"
console.log(paragraphs);
console.log(paragraphs[0]); // You select like this what paragraph you want
console.log("First paragraph in my html file", paragraphs[0]);

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log("Seconf div in my html file", divs[1]);

// Select by Class Name

let paragraphsByClassName = document.getElementsByClassName("myParagraph");
console.log(paragraphsByClassName);

let mySecondParagraph = document.getElementsByClassName("second");
console.log(mySecondParagraph);

// Query Selectors

let myHeaderTag = document.querySelector("h1");
console.log(myHeaderTag);

let myHeaderId = document.querySelector("#myTitle");
console.log(myHeaderId);

let myDivClass = document.querySelector(".myDiv");
console.log(myDivClass);

// QuerySelectorAll
let allHeaders = document.querySelectorAll("h1");
console.log(allHeaders);

//============ Traversing trought the DOM tree ==========

// next element sibling
let myHeader = document.getElementById("myTitle");
let sibling = myHeader.nextElementSibling;
console.log("My header", myHeader);
console.log("First sibling", sibling);

// firstElementChild
let firstDiv = document.getElementById("main");
let divSibling = firstDiv.nextElementSibling; // the next sibling
console.log(divSibling);

// How to get the first child of the div
let firstDivChild = firstDiv.firstElementChild; // first child
console.log(firstDivChild);

let secondDivChild = divSibling.firstElementChild; // first child
console.log(secondDivChild);

let firstDivParent = firstDiv.parentElement; // their parent
console.log(firstDivParent);

let elementToFind =
  document.getElementById("main").nextElementSibling.firstElementChild;
console.log(elementToFind);
// you can stack elements like this to finde something deeper in one row

let bodyElement = document.querySelector("body");

let allchildren = bodyElement.children;
let firstChild = bodyElement.firstElementChild;
let lastChild = bodyElement.lastElementChild;

console.log(allchildren);
console.log(firstChild);
console.log(lastChild);
