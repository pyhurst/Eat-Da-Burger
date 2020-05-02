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

    $("#clear-burger").on("click", function(event) {
        event.preventDefault();

        $.ajax("/api/burgers/", {
            type: "GET",
        }).then(function(data) {
            let devouredIds = [];

            for (let i = 0; i < data.length; i++) {
                devouredIds.push(data[i].id);
            }

            devouredIds = { ids: devouredIds };

            $.ajax("/api/burgers/", {
                type: "DELETE",
                data: devouredIds
            }).then(function(){
                location.reload();
            });
        });
    });
});