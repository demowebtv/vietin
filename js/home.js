$(document).on('ready', function () {
    collapseNews();
    showTabletProducts();
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

    $(".sale-slide").owlCarousel({
        navigation: true,
        autoplay: true,
        autoplayTimeout: 5000,
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
});

function showOtherServices(elm) {
    var $service = $('.other-service')[0];
    if ($service.classList.contains('hide')) {
        $('.other-service').removeClass('hide');
        $(elm).removeClass('pb-2px').addClass('bt-2');
    }
    else {
        $('.other-service').addClass('hide');
        $(elm).removeClass('bt-2').addClass('pb-2px');
    }
}

function collapseNews() {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            var index = this.dataset.index;
            $(".collapsible").each((i, elm) => {
                if ($(elm).data('index') != index) {
                    $(elm).removeClass('active');
                    var content = elm.nextSibling.nextElementSibling;
                    content.style.maxHeight = null;
                }
            })

            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

