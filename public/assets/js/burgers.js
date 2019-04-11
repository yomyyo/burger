// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  // When user clicks on a burger
  $(".not-eaten").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id);

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function () {
        console.log("DEVOUERED");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // Create a new burger
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("button")

    var newBurger = {
      name: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
