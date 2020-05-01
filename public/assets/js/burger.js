$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#new-burger").val().trim()
        };
        // console.log(newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            // console.log("Prepared Burger");
            location.reload();
        });
    });
});