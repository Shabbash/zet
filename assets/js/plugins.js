$(document).ready(function() {

    // Smooth Scroll To Elements
    $('.navbar li a, .home a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);

    });

    // Add Active Class On Navbar Link and remove from siblings

    $('.navbar li a').click(function() {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {


                //Sync Navbar Links With Sections

        $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                //console.log($(this).attr('id'));
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockID + '"]').addClass('active');
            }
        });

////// first Owl Carousel ///////////
        $('.testimonials .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                respnsiveClass:true,
                smartSpeed:600,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:1,
                        nav:false,
                        loop:false,
                        dots:true
                    }
                }
            })
        //////////////////////////////////////

        
                ////// second Owl Carousel ///////////
        $('.partners .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsiveClass:true,
                smartSpeed:600,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:3,
                        nav:false
                    },
                    1000:{
                        items:5,
                        nav:false,
                        loop:true,
                        dots:false
                    }
                }
            })
        //////////////////////////////////////

        // Scroll-to-top button

        var scrollToTop = $('.scroll-to-top');
        if ($(window).scrollTop() > 1100) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400);
            }
        } else {
            scrollToTop.fadeOut(400);
        }
    });


    /////// Nice Scroll /////////

    $("html").niceScroll();

    ///////// SCROLL TOP BUTTUN ///////

    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //  console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });


    /* -------- Fancy Box (Gallery) */
    $("#single_1, #single_2, #single_3, #single_4, #single_5, #single_6, #single_7, #single_8, #single_9, #single_10, #single_1, #single_11, #single_12, #single_13, #single_14, #single_15").fancybox({
          helpers: {
              title : {
                  type : 'float'
              }
          }
      });
});