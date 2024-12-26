
let elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");


elements.forEach((element, index) => {
  element.textContent = `Updated text for element ${index + 1}`;
});

let paragraphs = document.querySelectorAll("p");


paragraphs.forEach((paragraph, index) => {
  paragraph.textContent = `Updated text for paragraph ${index + 1}`;
});
