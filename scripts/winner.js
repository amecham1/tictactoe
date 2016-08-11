$(document).ready(function(){
  // This show how you win
//
var X1 = $(".X-pick").val();
var O1 = $(".O-pick");
var X2 = $(".X-pick");
var O2 = $(".O-pick");
var X3 = $(".X-pick");
var O3 = $(".O-pick");
var X4 = $(".X-pick4");
var O4 = $(".O-pick4");
var X5 = $("#X-pick5");
var O5 = $("#O-pick5");
var X6 = $("#X-pick6");
var O6 = $("#O-pick6");
var X7 = $("#X-pick7");
var O7 = $("#O-pick7");
var X8 = $("#X-pick8");
var O8 = $("#O-pick8");
var X9 = $("#X-pick9");
var O9 = $("#O-pick9");

var checkO = $('O-pick').hasClass('O-pick');
var checkX = $('X-pick').hasClass('X-pick');

console.log(X1);

// $(".winner").slideDown();



  if( X1 && X2 && X3 === checkX ){
    console.log('Hello');
  }

})
