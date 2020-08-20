$(document).ready(function(){

  if($(".instruct-side").is(":visible")){
    $(".popup").hide();
} else{
  setTimeout(function() {
    $(".popup").fadeIn(600);
  }, 2500);
}

$(".closeup").click(function(){
    $(".popup").fadeOut(600);
  })
    


    $("#button-slide, #labels").click(function(){
      if ($("#shades").css('opacity') == 1) {
          $("#shades").css("opacity", 0);
          $("#button-slide").css("transform","translate(73px,0)");
          $('audio#click')[0].play();
      } else if ($("#shades").css('opacity') == 0) {
          $("#shades").css("opacity", 1);
          $("#button-slide").css("transform","translate(0,0)");
          $('audio#click')[0].play();
      }
    });

    $("#box1").mouseenter(function(){
        $(".modal1").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box1").mouseleave(function(){
        $(".modal1").removeClass("appear");
      });

      $("#box2").mouseenter(function(){
        $(".modal2").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box2").mouseleave(function(){
        $(".modal2").removeClass("appear");
      });

      $("#box3").mouseenter(function(){
        $(".modal3").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box3").mouseleave(function(){
        $(".modal3").removeClass("appear");
      });

      $("#box4").mouseenter(function(){
        $(".modal4").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box4").mouseleave(function(){
        $(".modal4").removeClass("appear");
      });

      $("#box5").mouseenter(function(){
        $(".modal5").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box5").mouseleave(function(){
        $(".modal5").removeClass("appear");
      });

      $("#box6").mouseenter(function(){
        $(".modal6").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box6").mouseleave(function(){
        $(".modal6").removeClass("appear");
      });

      $("#box7").mouseenter(function(){
        $(".modal7").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box7").mouseleave(function(){
        $(".modal7").removeClass("appear");
      });

      $("#box8").mouseenter(function(){
        $(".modal8").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box8").mouseleave(function(){
        $(".modal8").removeClass("appear");
      });

      $("#box9").mouseenter(function(){
        $(".modal9").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box9").mouseleave(function(){
        $(".modal9").removeClass("appear");
      });

      $("#box10").mouseenter(function(){
        $(".modal10").addClass("appear");
        $('audio#confirm')[0].play();
      });
      $("#box10").mouseleave(function(){
        $(".modal10").removeClass("appear");
      });


      $(".audio-stuff").mouseenter(function(){
        $(".roll-credits").slideDown("slow");
      });
      $(".audio-stuff").mouseleave(function(){
        $(".roll-credits").slideUp("slow");
      });


});



