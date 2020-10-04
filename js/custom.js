$(".mm_button").click(function(){
  $(".content_burger_menu1").fadeIn();
  $(".content_burger_menu2").addClass("show_left_menu");
  $(".content_burger_menu2").removeClass("fade_left_menu");
  
});

$(".closemenunew").click(function(){
  $(".content_burger_menu1").fadeOut();
});

$(".closemenunew2").click(function(){
  $(".content_burger_menu1").fadeOut();
  $(".content_burger_menu2").removeClass("show_left_menu");
  $(".content_burger_menu2").addClass("fade_left_menu");
});

$(".ollmenunew > a").click(function(){
  $(".content_burger_menu1").fadeOut();
});




$(document).ready(function(){
    $('.your-class').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  });



  $( document ).ready(function(){

    var jQuerypage = $('html, body');
    $('a[href*="#"]').click(function() {
      jQuerypage.animate({
        scrollTop: $(jQuery.attr(this, 'href')).offset().top
      }, 900);
      return false;
    });


// jQuery(".mm_button").click(function(){
//     jQuery(".content_burger_menu1").fadeIn();
//     jQuery(".content_burger_menu2").addClass("show_left_menu");
//     jQuery(".content_burger_menu2").removeClass("fade_left_menu");
    
//   });

//   jQuery(".closemenunew").click(function(){
//     jQuery(".content_burger_menu1").fadeOut();
//   });

//   jQuery(".closemenunew2").click(function(){
//     jQuery(".content_burger_menu1").fadeOut();
//     jQuery(".content_burger_menu2").removeClass("show_left_menu");
//     jQuery(".content_burger_menu2").addClass("fade_left_menu");
//   });

//   jQuery(".ollmenunew > a").click(function(){
//     jQuery(".content_burger_menu1").fadeOut();
//   });








 


});




