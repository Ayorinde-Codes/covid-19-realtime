"use strict";

/*-----------------Odometer JS-----------------*/

jQuery(window).scroll(startCounter);

function startCounter() {

    if (jQuery(window).scrollTop() > 0) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.counter-value').each(function() {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter) + '');
                }
            });
        });
    }
    if (jQuery(window).scrollTop() > 0) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.counter-value-plus').each(function() {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter) + '+');
                }
            });
        });
    }
}
startCounter();


function scrolltotop() {

    $(document).ready(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#scroll').fadeIn();
            } else {
                $('#scroll').fadeOut();
            }
        });
        $('#scroll').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });

}



scrolltotop();
/*-----------------scrollnav-----------------*/

$(document).ready(function() {

    var CurrentUrl= document.URL;
    var CurrentUrlEnd = CurrentUrl.split('/').filter(Boolean).pop();
    console.log(CurrentUrlEnd);
    $( "#nav .nav_item a" ).each(function() {
          var ThisUrl = $(this).attr('href');
          var ThisUrlEnd = ThisUrl.split('/').filter(Boolean).pop();

          if(ThisUrlEnd == CurrentUrlEnd){
          $(this).closest('.nav_item').addClass('active')
          }
    });

});




/*--------------//single_items Carousel------------------*/


function singleitems() {
    if ($('.single_items').length) {

        $('.single_items').owlCarousel({

            loop: true,

            margin: 30,

            nav: false,

            dots: false,

            autoplay: true,

            slideTransition: 'linear',

            autoplaySpeed: 1000,

            autoplayHoverPause: true,

            navText: ['<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-next"></span>'],

            responsive: {

                0: {

                    items: 1

                },

                600: {

                    items: 1

                },

                768: {

                    items: 1

                },

                1024: {

                    items: 1

                },

                1200: {

                    items: 1

                }

            }

        });

    }
}
/*--------------one_items------------------*/
function mainslider() {
    if ($('.main_slider').length) {
        $('.main_slider').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: false,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplayTimeout: 7000,
            navText: ['<span class="clearfix prev flaticon-left"></span>', '<span class="clearfix flaticon-right"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 1
                },

                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
}
function mainslidertwo() {
    if ($('.main_slider_two').length) {
        $('.main_slider_two').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: false,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            active: true,
            smartSpeed: 1000,
            autoplayTimeout: 7000,
            navText: ['<span class="clearfix prev flaticon-left"></span>', '<span class="clearfix flaticon-right"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 1
                },

                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
}
/*--------------four_items------------------*/
function fouritems() {
    if ($('.four_items').length) {
        $('.four_items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: false,
            autoplay: true,
            smartSpeed: 3000,
            autoplayTimeout: 4000,
            navText: ['<span class="clearfix prev flaticon-left-arrow"></span>', '<span class="clearfix flaticon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },

                1200: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });
    }
}


/*--------------three_items_center------------------*/
function threeitemscenter() {
    if ($('.three_items_center').length) {
        $('.three_items_center').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: true,
            autoplay: true,
            smartSpeed: 3000,
            autoplayTimeout: 4000,
            navText: ['<span class="clearfix prev flaticon-left-arrow"></span>', '<span class="clearfix flaticon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },

                1000: {
                    items: 3
                },
                1200: {
                    items: 3,
                    margin: 0,
                }
            }
        });
    }
}
/*--------------three_items------------------*/
function threeitems() {
    if ($('.three_items').length) {
        $('.three_items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: false,
            autoplay: true,
            smartSpeed: 3000,
            autoplayTimeout: 4000,
            navText: ['<span class="clearfix prev flaticon-left-arrow"></span>', '<span class="clearfix flaticon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },

                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
}


/*--------------three_items------------------*/
function threeitemsnoloop() {
    if ($('.three_items_noloop').length) {
        $('.three_items_noloop').owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: false,
            center: false,
            autoplay: false,
            smartSpeed: 3000,
            autoplayTimeout: 4000,
            navText: ['<span class="clearfix prev flaticon-left-arrow"></span>', '<span class="clearfix flaticon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },

                1000: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
    }
}

/*--------------two_items------------------*/
function twoitems() {
    if ($('.two_items').length) {
        $('.two_items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: false,
            autoplay: true,
            smartSpeed: 3000,
            autoplayTimeout: 4000,
            navText: ['<span class="clearfix prev flaticon-left-arrow"></span>', '<span class="clearfix flaticon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },

                1000: {
                    items: 3
                },
                1200: {
                    items: 2
                }
            }
        });
    }
}
/*--------------one_items------------------*/
function oneitems() {
    if ($('.one_items').length) {
        $('.one_items').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: true,
            center: false,
            autoplay: true,
            smartSpeed: 3000,
            autoplayTimeout: 4000,
            navText: ['<span class="clearfix prev flaticon-left-arrow"></span>', '<span class="clearfix flaticon-next"></span>'],

            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 1
                },

                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
}

// Dom Ready Function
jQuery(document).on('ready', function() {
    (function($) {
        oneitems();
        singleitems();
        twoitems();
        threeitems();
        threeitemsnoloop();
        threeitemscenter();
        fouritems();
        mainslider();
        mainslidertwo();

    })(jQuery);
});


