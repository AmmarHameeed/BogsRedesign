(function ($) {

    'use strict';

    /*-------------------------------------------
        Sticky Header
    --------------------------------------------- */


    $('.offset-menu .has-dropdown').prepend('<span class="toggle-btn"><i class="icon"></i></span>');

    $('.offset-menu .has-dropdown > a,.offset-menu .has-dropdown > .toggle-btn').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().children('.sub-menu').slideToggle();
        $(this).parent().siblings().children('.sub-menu').slideUp();
        $(this).parent().siblings().removeClass('active');
    });

    $("[data-open-sidebar]").on('click', function (e) {
        e.preventDefault();
        $('body').addClass('overflow-hidden');
        $('.offset-sidebar').addClass('active');
        $('.offset-wrap').addClass('active');
    });

    $(".offset-overlay").on('click', function () {
        $('body').removeClass('overflow-hidden');
        $(this).parent().removeClass('active');
        $('.offset-wrap').removeClass('active');
    });

    $(".off-canvas-close").on('click', function () {
        $('body').removeClass('overflow-hidden');
        $('.offset-sidebar').removeClass('active');
        $('.offset-wrap').removeClass('active');
    });

    let win = $(window);
    let sticky_id = $(".header-fixed");
    win.on('scroll', function () {
        let scroll = win.scrollTop();
        if (scroll < 180) {
            sticky_id.removeClass("sticky-header");
        } else {
            sticky_id.addClass("sticky-header");
        }
    });


    $("[data-open-filter]").on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.products-layout').toggleClass('filter-active');
        $('.product-filters-overlay').toggleClass('open');
        $('.product-filters-mobile').toggleClass('active');
        $('.product-inner-filter').toggleClass('active');
    });

    $(".product-filters-close,.product-filters-overlay").on('click', function (e) {
        e.preventDefault();
        $('[data-open-filter]').removeClass('active');
        $('.products-layout').removeClass('filter-active');
        $('.product-filters-overlay').removeClass('open');
        $('.product-filters-mobile').removeClass('active');
        $('.product-inner-filter').removeClass('active');
    });

    $(".filter-item .filter-heading").on('click', function (e) {
        e.preventDefault();
        $(this).parent().children('.filter-content').slideToggle();
        $(this).toggleClass('active');
    });

    /*------------------------------------
        Data-Background
    --------------------------------------*/
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background", $(this).attr("data-bg-color"))
    });

    Fancybox.bind('[data-fancybox]', {
        Html: {
            youtube: {
                controls: 0,
                rel: 0,
                fs: 0
            }
        }
    });


    if (jQuery(".cart-plus-minus").length > 0) {
        $(".cart-plus-minus").each(function () {
            var $container = $(this);
            var $qty = $container.find(".qty");

            $container.append(
                '<div class="qtybutton minus"><i class="fa-solid fa-minus"></i></div><div class="qtybutton plus"><i class="fa-solid fa-plus"></i></div>'
            );

            $container.on("click", ".qtybutton.plus, .qtybutton.minus", function () {
                // Get current quantity values
                let val = parseFloat($qty.val()) || 0;
                let max = parseFloat($qty.attr("max")) || Infinity;
                let min = parseFloat($qty.attr("min")) || 0;
                let step = parseFloat($qty.attr("step")) || 1;

                // Ensure the values are valid numbers
                if (!isNaN(val) && !isNaN(max) && !isNaN(min) && !isNaN(step)) {
                    // Change the value if plus or minus
                    if ($(this).is(".plus")) {
                        if (val < max) {
                            $qty.val(val + step).trigger("change");
                        }
                    } else {
                        if (val > min) {
                            $qty.val(val - step).trigger("change");
                        }
                    }
                }
            });
        });
    }

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });


    $('.banner-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.product-category-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.product-category-slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });

    $('.card-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.info-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    });

    $('.feature-slider--three').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        centerPadding: '60px',
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.evergreen__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.support-mobile__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        // adaptiveHeight: true,
        autoplaySpeed: 10000,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.centeredSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 10000,
        centerPadding: '15px',
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
            {
                // xl
                breakpoint: 1399,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                // lg
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                // md
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                // xs
                breakpoint: 676,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})(jQuery);

// Slick initialization in the presence of bootstrap tabs and pill
document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize slick on a specific target
    function initializeSlick(target) {
      $(target).not('.slick-initialized').slick({
        mobileFirst: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        dots: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
        responsive: [
          {
            // md
            breakpoint: 992,
            settings: "unslick"
          },
          {
            // xs
            breakpoint: 676,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
    }
  
    // Initialize slick on the active tab on page load
    initializeSlick('#pills-men .dual__slide__slick');
  
    // When a tab is shown, destroy and reinitialize slick if needed
    document.querySelectorAll('button[data-bs-toggle="pill"]').forEach(function(tab) {
      tab.addEventListener('shown.bs.tab', function(event) {
        var target = event.target.getAttribute("data-bs-target") + ' .dual__slide__slick';
        // Destroy slick if it is already initialized
        if ($(target).hasClass('slick-initialized')) {
          $(target).slick('unslick');
        }
        // Reinitialize slick
        initializeSlick(target);
      });
    });
  });
