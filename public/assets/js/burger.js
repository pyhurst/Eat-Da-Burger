$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#new-burger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            location.reload();
        });
    });

    $(".change-devour").on("click", function(event) {
        event.preventDefault();
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        const newDevourState = {
            devoured: newDevour
        }
        console.log(newDevourState);
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            location.reload();
        });
    });
});