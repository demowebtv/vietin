$(document).on('ready', function () {
    collapseNews();
    showTabletProducts();

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

    document.onclick = (elm) => {
        let otherService = document.getElementById('other-services');
        let elmClass = elm.target.classList;
        if (!otherService.classList.contains('hide') && !elmClass.contains('otherx')) {
            $(otherService).addClass('hide');
            $('#service-carousel').trigger('play.owl.autoplay');

        }
        else {
            $('#service-carousel').trigger('stop.owl.autoplay');
        }
    }

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
});

function showOtherServices(elm) {
    let service = document.getElementById('other-services');
    if (service.classList.contains('hide')) {
        $(service).removeClass('hide');
        $(elm).removeClass('pb-2px').addClass('bt-2');
        $('#service-carousel').trigger('stop.owl.autoplay');
    }
    else {
        $(service).addClass('hide');
        $(elm).removeClass('bt-2').addClass('pb-2px');
        $('#service-carousel').trigger('play.owl.autoplay');
    }
}

function collapseNews() {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            let index = this.dataset.index;
            $(".collapsible").each((i, elm) => {
                if ($(elm).data('index') != index) {
                    $(elm).removeClass('active');
                    let content = elm.nextSibling.nextElementSibling;
                    content.style.maxHeight = null;
                }
            })

            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

