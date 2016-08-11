$(document).ready(function(){

// Allows the user to select either an X or O per box
var oPick = '<h1 class="O-pick"id="O-pick1">O</h1>';
var xPick = '<h1 class="X-pick"id="X-pick1">X</h1>';

  $('.O-select,.X-select').click(function(){
    var isO = $(this).hasClass('O-select');
    var o = $(this).parent('.menu-choice').siblings('.pick');
    if(isO){
    $(this).parent('.menu-choice').siblings('.pick').html(oPick);
    }
    else{
    $(this).parent('.menu-choice').siblings('.pick').html(xPick);
  }

});







})
