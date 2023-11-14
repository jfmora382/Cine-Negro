(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 50,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonial carousel

    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: true,
        dots: true,
        loop: true,
        margin: 0,
        nav : true,
        navText: false,
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


     // Fact Counter

     $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 2000,
                easing: 'easeInQuad',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });



})(jQuery);


$(document).ready(function() {
    var currentIndex = 0;
    var items = $(".custom-carousel-inner img");
    var totalItems = items.length;
  
    // Muestra la primera imagen al cargar la página
    items.eq(currentIndex).fadeIn();
  
    // Función para mostrar la imagen siguiente
    function showNext() {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      items.fadeOut();
      items.eq(currentIndex).fadeIn();
    }
  
    // Función para mostrar la imagen anterior
    function showPrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalItems - 1;
      }
      items.fadeOut();
      items.eq(currentIndex).fadeIn();
    }
  
    // Event listeners para los botones
    $(".custom-next").click(showNext);
    $(".custom-prev").click(showPrev);
  
    // Efecto de libro al pasar el ratón sobre el carrusel
    $(".custom-carousel").hover(
      function() {
        $(this).css("transform", "rotateY(180deg)");
      },
      function() {
        $(this).css("transform", "rotateY(0deg)");
      }
    );
  });
  