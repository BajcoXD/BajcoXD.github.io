console.log("");
console.log("====================== ASYNC / AWAIT =================");

// ====> EXAMPLE with Promises

function getDataPromise() {
  return new Promise((resolve) => {
    let response = {
      message: "Data fetched successfully !",
      statusCode: 200,
    };
    if (response.statusCode >= 400) {
      reject("Fetching data failed !");
    }
    resolve(response);
  });
}

getDataPromise()
  .then((data) => console.log("Response Object", data))
  .catch((error) => console.log("ERROR", error));

//

async function getData() {
  let response = {
    message: "Data fetched successfully !",
    statusCode: 200,
  };
  return response;
}

async function processAsyncTask() {
  console.log("Fetching data started");
  let data = await getData();
  console.log("Fetching data finished");
  console.log("Here is the data", data);
}

processAsyncTask();

let url = "https://fakestoreapi.com/products/1";

// fetch(url)
//   .then((response) => response.json())
//   .then((product) => console.log(product))
//   .catch((error) => console.log("ERROR!", error))
//   .finally(() =>
//     console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`)
//   );
// //

let fetchProduct = async () => {
  try {
    let response = await fetch(url);
    console.log(response);
    let product = await response.json();
    console.log(product);
  } catch (error) {
    console.log("ERROR!", error);
  } finally {
    console.log(
      `Everything is completed at ${new Date().toLocaleTimeString()}`
    );
  }
};

async () => {
  let product = await fetchProduct();
  console.log(product);
};

let getJokeAsync = async () =>
  "Knock Knock ! Whos there ? Async ! Async who ? Async Await :D NOT FUNNY!";
// 

document.querySelector("button").addEventListener("click", async () => {
  let product = await fetchProduct();
  console.log(product);
  let joke = await getJokeAsync();
  console.log(joke);
});

fetchProduct();

console.log("======== END OF SCRIPT ========");
