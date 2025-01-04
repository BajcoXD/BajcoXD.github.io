$(function () {
    $("#generate-button").click(function () {
      const text = $("#header-text").val().trim();
      const color = $("#header-color").val().trim();
  
      $("#message").text(""); // Clear any previous message
  
      if (!text) {
        return $("#message").text("Error: Header text cannot be empty!");
      }
      if (!isValidColor(color)) {
        return $("#message").text("Error: Invalid color value!");
      }
  
      $("<h1></h1>")
        .text(text)
        .css("color", color)
        .appendTo("#header-container");
    });
  
    function isValidColor(color) {
      return $("<div></div>").css("color", color).css("color") !== "";
    }
  });
  