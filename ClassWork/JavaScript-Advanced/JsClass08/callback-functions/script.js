console.log("=========== CallBack Functions ==========");

// Common use-cases
// 1) setTimeout

function handleTimeout() {
  console.log("Hello after 3 seconds");
}

setTimeout(() => {
  console.log("Hello after 3 seconds");
}, 3000);

setTimeout(handleTimeout, 3000);

// 2) event handler

document.querySelector("button").addEventListener("click", () => {
  console.log("button is clicked");
});

function handleButtonClick() {
  console.log("Button is clicked!");
}
document.querySelector("button").addEventListener("click", handleButtonClick);

// 3)

function performAsyncOperation(callBack) {
  console.log("Async operation started");
  setTimeout(() => {
    const result = "Async operation complete";
    callBack(result);
  }, 5000);
  console.log(".... Processing ....");
}
function bilosho(parametar) {
  console.log(parametar);
}
performAsyncOperation(bilosho);

// 4) High order functions callback
let testArray = [1, 2, 3, 4, 5, 7];
testArray.forEach((n) => console.log(n));

// 5) Making requests to an api

function renderDataFromApi(url, renderFunc) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderFunc(data);
    });
}

function displayUser(user) {
  // Logic for displaying user
  let h3 = document.createElement("h3");
  h3.textContent = `${user.firstName} ${user.lastName}`;
  document.body.appendChild(h3);
}

renderDataFromApi("https://dummyjson.com/users/1", displayUser);

renderDataFromApi("https://dummyjson.com/products/1", function (product) {
  console.log(product);
});

renderDataFromApi("https://dummyjson.com/products/1", (product) =>
  console.log(product)
);

function renderProduct(product) {
  console.log(product);
}
renderDataFromApi("https://dummyjson.com/products/1", renderProduct);

callBackFunc(() => console.log("Yeey! We have the data!"));

function functionArguments(func1, func2) {
  console.log("Executing functions");
  func1();
  func2();
}
functionArguments(
  () => console.log("Hello from func1!"),
  () => console.log("Hello from Func2")
);
