$(document).ready(function() {

  // Closes Menu after selction has been made

    $("ul button").click(function() {
        $(".menu-choice").slideUp("fast");
    });

  // Resets the board but keeps the score
  
    $("#reset-board").click(function(){
        $(".X-pick,.O-pick").hide();


    });



}); //end of jQuery
