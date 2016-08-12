$(document).ready(function(){

// Allows the user to select either an X or O per box

$(".menu").click(function(){
    $(this).siblings('.menu-choice').slideToggle("slow");
})

// Closes Menu after selction has been made

$('.O-select,.X-select').click(function() {
    $(".menu-choice").slideUp("slow");
});

// Resets the board but keeps the score

$("#reset-board").click(function() {
    $(".X-pick,.O-pick").empty();
});




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
  var box1 = $('#pick1').text();
  var box2 = $('#pick2').text();
  var box3 = $('#pick3').text();
  var box4 = $('#pick4').text();
  var box5 = $('#pick5').text();
  var box6 = $('#pick6').text();
  var box7 = $('#pick7').text();
  var box8 = $('#pick8').text();
  var box9 = $('#pick9').text();

  if(box7 === "X" && box8 === "X" && box9 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });
  }
  if(box7 === "O" && box8 === "O" && box9 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }
  if(box7 === "X" && box5 === "X" && box3 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box7 === "O" && box5 === "O" && box3 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }
  if(box4 === "X" && box5 === "X" && box6 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box4 === "O" && box5 === "O" && box6 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }
  if(box1 === "X" && box2 === "X" && box3 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box1 === "O" && box2 === "O" && box3 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#0-score').html(parseInt($('#0-score').html(), 10)+1)
    });  }
  if(box1 === "X" && box5 === "X" && box9 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box1 === "O" && box5 === "O" && box9 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }
  if(box1 === "X" && box4 === "X" && box7 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box1 === "O" && box4 === "O" && box7 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }
  if(box2 === "X" && box5 === "X" && box8 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box2 === "O" && box5 === "O" && box8 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }
  if(box3 === "X" && box6 === "X" && box9 === "X"){
    $('.winner').slideDown('slow',function(){
      $('#X-score').html(parseInt($('#X-score').html(), 10)+1)
    });  }
  if(box3 === "O" && box6 === "O" && box9 === "O"){
    $('.winner').slideDown('slow',function(){
      $('#O-score').html(parseInt($('#O-score').html(), 10)+1)
    });  }

});

$('#again-play').click(function(){
  $('.winner').slideUp(function(){
    $('.pick').empty();
  })
})

$('#quitter').click(function(){
  $('.winner').slideUp(function(){
      $('#X-score,#O-score').empty().append('0');
        $('.pick').empty();
  })
})

$('#reset-all-game').click(function(){
  $('#X-score,#O-score').empty().append('0');
    $('.pick').empty();
})








})
