$(document).ready(function () {
  $("#greet-button").click(function () {
    const name = $("#name-input").val();

    // Check if the input is empty
    if (name.trim() === "") {
      $("#greeting-message").text("Please enter a valid name!");
    } else {
      // Display the greeting message in the h1 element
      $("#greeting-message").text(`Hello there ${name}!`);
    }
  });
});
