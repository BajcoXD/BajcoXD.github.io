$(document).ready(function () {
  let getDataBtn = $("#getDataBtn");
  getDataBtn.click(function () {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/users",
      success: function (reasult) {
        console.log(reasult);
        for (let user of reasult) {
          console.log(user.name);
        }
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
});
