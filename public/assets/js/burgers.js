// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");
    console.log("-------" + newEaten);
    var newDevouredState = {
      devoured: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed eaten status to:", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added New Burger to Menu");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("changed eaten status to:", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
