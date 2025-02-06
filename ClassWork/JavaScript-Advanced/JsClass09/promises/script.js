console.log("");

console.log("=============== Promises ==============");

console.log("");
console.log("============ Creating a promise ==========");

let url = "https://fakestoreapi.com/products/1";

// fetch(url)
//   .then((response) => response.json())
//   .then((product) => console.log(product))
//   .catch((error) => console.log("ERROR!", error))
//   .finally(() =>
//     console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`)
//   );
// // =====> Example:Function returning Promise

// 1) Pending
// 2) Fulfilled
// 3) Rejected

function simplePromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  return promise;
}

// simplePromise()
//   .then(() => console.log("The promise is fulFiled!"))
//   .catch(() => console.log("The promise is rejected"))
//   .finally(() => console.log("This is executed anyway :)"));

//   ======> Example: Function that simulates an asynchronous operation
function simulateAsyncTask(success) {
  return new Promise((resolve, reject) => {
    console.log("Operation started ...");
    setTimeout(() => {
      if (success) {
        resolve("Task Completed Succesfully");
      } else {
        reject("Task Failed");
      }
    }, 4000);
  });
}

simulateAsyncTask(true)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//

function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 3000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

function step4() {
    return new Promise((resolve) => {
        resolve("Final Step Completed")
    })
}
step1()
  .then(() => step2())
  .then(() => step3())
  .catch((error) => console.log(error))
  .finally(() => console.log(`Everything is completed at ${new Date().toLocaleTimeString()}`))
