$(document).ready(function() {

    // Closes Menu after selction has been made

    $('.O-select,.X-select').click(function() {
        $(".menu-choice").slideUp("slow");
    });

    // Resets the board but keeps the score

    $("#reset-board").click(function() {
        $(".X-pick,.O-pick").empty();
    });



}); //end of jQuery
