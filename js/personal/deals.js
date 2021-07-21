const breadCum = []
$(document).on('ready', function () {
    $('.fee-item').on('mouseover', (e) => {
        $(e.currentTarget).find('.fee-options').css('display', 'block');
    })

    $('.fee-item').on('mouseleave', (e) => {
        $('.fee-options').css('display', 'none');
    })

    $('.fee-options li a').on('click', (e) => {
        $('.fee-options').css('display', 'none');
        let value = $(e.target).data('index');
        let key = $(e.target).data('v');
        loadData(value, key);

    })
    $('.product-slider').owlCarousel({
        items: 3,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 400,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        merge: true,
        dots: false,
        navText: ['<img src="images/personal/icon/left.png" />', '<img src="images/personal/icon/right.png" />'],
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 1,
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1170: {
                items: 3,
            },
        }
    });
    $(".tragop-slide").owlCarousel({
        navigation: true,
        autoplay: false,
        slideSpeed: 1000,
        smartSpeed: 1400,
        loop: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false
    });

});

function loadData(index, key) {
    let val = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.01 7.15"><defs><style>.cls-1{fill:#93d5f6;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M.33.33h0A1.16,1.16,0,0,1,2,.33L5.2,3.58a1.13,1.13,0,0,0,1.61,0L10.06.33a1.16,1.16,0,0,1,1.62,0h0a1.16,1.16,0,0,1,0,1.62L6.81,6.82a1.15,1.15,0,0,1-1.61,0L.33,2A1.16,1.16,0,0,1,.33.33Z"/></g></g></svg>';
    $('.'+key).html(index+val);
}

