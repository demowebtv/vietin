$(document).on('ready', function () {
    showTabletProducts();
    initCollapseTool();

    $('.nav-link').on('click', (e) => {
        if (e.currentTarget.classList.contains('rate1')) {
            $('.r-1').css('background', '#005993');
            $('.r-2').css('background', 'transparent');
        }
        else {
            $('.r-1').css('background', 'transparent');
            $('.r-2').css('background', '#005993');
        }
    })

    $('.rate1').on('click', (e) => {
        $('.rate-more').attr("href", "tintuc-tygia.html")
    })
    $('.rate2').on('click', (e) => {
        $('.rate-more').attr("href", "tintuc-laisuat.html")
    })

    document.onclick = (elm) => {
        let otherService = document.getElementById('other-services');
        let elmClass = elm.target.classList;
        if (!otherService.classList.contains('hide') && !elmClass.contains('otherx')) {
            $(otherService).addClass('hide');
            $('.other-product').removeClass('bt-2').addClass('pb-2px');
            $('#service-carousel').trigger('play.owl.autoplay');
        }
    }

    $(".home-slide").owlCarousel({
        navigation: true,
        autoplay: true,
        autoplayTimeout: 3000,
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

    $(".sale-slide").owlCarousel({
        navigation: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideSpeed: 100,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        itemsDesktop: true,
        itemsDesktopSmall: true,
        itemsTablet: true,
        itemsMobile: true
    });
    $('.chuyentien-slide').owlCarousel({
        items: 4,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        merge: true,
        dots: false,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            300: {
                items: 3,
            },
            480: {
                items: 4,
            },
            768: {
                items: 4,
            },
            1170: {
                items: 4,
            },
        }
    });
});

function initCollapseTool() {
    $('.tool-all li').each((i, elm) => {
        if ($(elm).find('.lvl2-tool').length > 0) {
            $(elm).find('.lvl1-tool').append('<svg class="right-small" fill="#93d5f6" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10.08"><defs></defs><title>Asset 6ldpi</title><g id="Layer_2" data-name="Layer 2"><g id="body"><path class="cls-1" d="M.28,9.8h0a1,1,0,0,1,0-1.36L3,5.72A1,1,0,0,0,3,4.36L.28,1.64A1,1,0,0,1,.28.28h0a1,1,0,0,1,1.36,0L5.72,4.36a1,1,0,0,1,0,1.36L1.64,9.8A1,1,0,0,1,.28,9.8Z"/></g></g></svg>');
        }
    })
    
    $('.lvl2-tool li').each((i, elm) => {
        if ($(elm).find('.lvl3-tool').length > 0) {
            $(elm).find('.lvl2-title').append('<svg class="right-small" fill="#93d5f6" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10.08"><defs></defs><title>Asset 6ldpi</title><g id="Layer_2" data-name="Layer 2"><g id="body"><path class="cls-1" d="M.28,9.8h0a1,1,0,0,1,0-1.36L3,5.72A1,1,0,0,0,3,4.36L.28,1.64A1,1,0,0,1,.28.28h0a1,1,0,0,1,1.36,0L5.72,4.36a1,1,0,0,1,0,1.36L1.64,9.8A1,1,0,0,1,.28,9.8Z"/></g></g></svg>');
        }
    })

    $('.lvl1-tool').on('click', (elm) => {
        if (elm.target.nextElementSibling) {
            $(elm.target.nextElementSibling).toggleClass('hide');
        }
    })

    $('.lvl2-title').on('click', (elm) => {
        if (elm.target.nextElementSibling) {
            $(elm.target.nextElementSibling).toggleClass('hide');
        }
    })
}


