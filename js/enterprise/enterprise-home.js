$(document).on('ready', function () {
    /*=======================
      Home Slider JS
    =========================*/
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

    loadExpandMenu();
});

function loadExpandMenu() {
    let menuExpand = $('.menu-expand-1');
    if (menuExpand.length > 0) {
        $(menuExpand).find('li').each((i, value) => {
            let childMenus = $(value).find('.menu-expand-2');
            if (childMenus.length > 0) {
                let lvl1 = $(value).find('.lvl1-title');
                $(lvl1).append('<i class="fa fa-plus"></i>')
                $(lvl1).on('click', (elm) => {
                    $(childMenus).toggleClass('hide');
                    let plusIcon = $(lvl1).find('.fa-plus');
                    if (plusIcon.length > 0) {
                        $(plusIcon).removeClass('fa-plus').addClass('fa-minus');
                    }
                    else {
                        $(lvl1).find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
                    }
                })
            }
        })
    }
}