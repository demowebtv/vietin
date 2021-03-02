$(document).on('ready', function () {
    /*=======================
      Home Slider JS
    =========================*/
    $(".home-slide").owlCarousel({
        navigation: true,
        autoplay: true,
        autoplayTimeout: 5000,
        slideSpeed: 100,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

    $('.solution-slider').owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        smartSpeed: 400,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        merge: true,
        dots: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 2,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1170: {
                items: 4,
            },
        }
    });
});
