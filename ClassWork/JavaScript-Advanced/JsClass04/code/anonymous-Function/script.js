console.log("======== Anonymous Function ===========");

document.querySelector("button").addEventListener("click", function () {
  console.log("Button is clicked");
});

// ============ Anonymouse function in a fetch =========

// https://jsonplaceholder.typicode.com/posts

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


// you can make function with variable (Useles)
let greet = function (name) {
  console.log(`Hello ${name}`);
};

console.log(typeof greet);

greet("Viktor");

