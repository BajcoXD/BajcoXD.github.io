function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 3000);
}
function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 2000);
}
function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}
function step4(callback) {
  setTimeout(() => {
    console.log("Step 4 completed");
    callback();
  }, 1000);
}
function step5(callback) {
  setTimeout(() => {
    console.log("Step 5 completed");
    callback();
  }, 1000);
}
function step6(callback) {
  setTimeout(() => {
    console.log("Step 6 completed");
    callback();
  }, 1000);
}
function step7(callback) {
  setTimeout(() => {
    console.log("Step 7 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      step4(() => {
        step5(() => {
          step6(() => {
            step7(() => {
              console.log("Pyramid of doom completed");
            });
          });
        });
      });
    });
  });
});
