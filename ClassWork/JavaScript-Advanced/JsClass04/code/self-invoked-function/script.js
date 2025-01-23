console.log("============ SELF-INVOKED FUNCTIONS ========");

(function () {
  console.log("This will be executed immediately!");
})();

((num1, num2) => console.log(num1 + num2))(20, 25);

// https://dummyjson.com/products/1

(() => {
  const productUrl = "https://dummyjson.com/products/1";
  const productContainer = document.getElementById("product-container");
  fetch(productUrl)
    .then((response) => response.json())
    .then((product) => {
      console.log(product);
      productContainer.innerHTML = `
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <p>${product.price}</p>
    `;
    });
})();
// document.addEventListiner("DOMContentLoaded", () => {})

(function sayHello(name) {
  console.log(`Hello ${name}!`);
})("Viktor");
// sayHello("Viktor")
