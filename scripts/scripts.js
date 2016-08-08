$(document).ready(function() {
    $(".menu").click(function() {
        $(".menu-choice").slideDown("slow");
    });

    $("ul button").click(function() {
        $(".menu-choice").slideUp("fast");
    });

    $("#O1").click(function(){
        $("#O-pick1").show(function(){
          $("#X-pick1").hide();
        });
    })

    $("#X1").click(function(){
        $("#X-pick1").show(function(){
          $("#O-pick1").hide();
        });
    })
    $("#O2").click(function(){
        $("#O-pick2").show(function(){
          $("#X-pick2").hide();
        });
    })

    $("#X2").click(function(){
        $("#X-pick2").show(function(){
          $("#O-pick2").hide();
        });
    })
    $("#O3").click(function(){
        $("#O-pick3").show(function(){
          $("#X-pick3").hide();
        });
    })

    $("#X3").click(function(){
        $("#X-pick3").show(function(){
          $("#O-pick3").hide();
        });
    })
    $("#O4").click(function(){
        $("#O-pick4").show(function(){
          $("#X-pick4").hide();
        });
    })

    $("#X4").click(function(){
        $("#X-pick4").show(function(){
          $("#O-pick4").hide();
        });
    })
    $("#O5").click(function(){
        $("#O-pick5").show(function(){
          $("#X-pick5").hide();
        });
    })

    $("#X5").click(function(){
        $("#X-pick5").show(function(){
          $("#O-pick5").hide();
        });
    })
    $("#O6").click(function(){
        $("#O-pick6").show(function(){
          $("#X-pick6").hide();
        });
    })

    $("#X6").click(function(){
        $("#X-pick6").show(function(){
          $("#O-pick6").hide();
        });
    })
    $("#O7").click(function(){
        $("#O-pick7").show(function(){
          $("#X-pick7").hide();
        });
    })

    $("#X7").click(function(){
        $("#X-pick7").show(function(){
          $("#O-pick7").hide();
        });
    })
    $("#O8").click(function(){
        $("#O-pick8").show(function(){
          $("#X-pick8").hide();
        });
    })

    $("#X8").click(function(){
        $("#X-pick8").show(function(){
          $("#O-pick8").hide();
        });
    })
    $("#O9").click(function(){
        $("#O-pick9").show(function(){
          $("#X-pick9").hide();
        });
    })

    $("#X9").click(function(){
        $("#X-pick9").show(function(){
          $("#O-pick9").hide();
        });
    })

    $("#reset-board").click(function(){
        $(".pick").empty();


    });



}); //end of jQuery
