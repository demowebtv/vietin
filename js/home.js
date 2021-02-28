$(document).on('ready', function () {
    showTabletMenu();
    showTabletProducts();
    $('.menu1-text').on('mouseover', (e) => {
        var menu1 = $(e.currentTarget)[0];
        var dropdown = menu1.nextElementSibling;
        var menu2 = $(dropdown).find('.left-item');
        if (menu2.length > 0) {
            menu2 = menu2[0];
            menu2.dataset.height = menu2.scrollHeight;
        }
    });

    $('.link-menu2').on('mouseover', (e) => {
        if (window.innerWidth > 991) {
            var menu2 = $(e.currentTarget)[0];
            var totalLeft = menu2.offsetParent.firstElementChild.children.length;
            var totalright = menu2.nextElementSibling.children.length;

            var menu3Heigth = menu2.nextElementSibling.scrollHeight;

            if (totalLeft < totalright) {
                $(menu2.offsetParent).height(menu3Heigth);
            }
            else {
                $(menu2.offsetParent).height(menu2.offsetParent.dataset.height);
            }
        }
    });

    $(".icon-contact svg").on('mouseover', (e) => {
        var currIconClass = $(e.currentTarget)[0];
        $(`.${currIconClass.id}-detail`).removeClass('hide');
    });

    $(".contact-detail").on('mouseleave', (e) => {
        var currentItem = $(e.currentTarget)[0];
        $(currentItem).removeClass('hide').addClass('hide');;
    });

    $(".icon-contact svg").on('mouseleave', (e) => {
        var currIconClass = $(e.currentTarget)[0];
        var relatedTarget = $(e.relatedTarget)[0];
        if (`${relatedTarget.className}` === 'col-6') {
            $(`.${currIconClass.id}-detail`).removeClass('hide');
        }
        else {
            $(`.${currIconClass.id}-detail`).removeClass('hide').addClass('hide');
        }
    });

    collapseNews();
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

function showSearchBox() {
    $('.search-left').addClass('hide');
    $('.search-full').removeClass('hide');
    $('.search-box').focus();
}

function showSearchLeft() {
    $('.search-left').removeClass('hide');
    $('.search-full').addClass('hide');
    $('.search-box').val('');
}

function showTabletMenu() {
    showTabletProducts();
    changeSlideTopImg();
    if (window.innerWidth < 992) {
        $('.mobile-nav').html('');
        var mainMenu = $('.menu')[0].cloneNode(true);

        var liTags = $(mainMenu).find('.menu1');
        $.each(liTags, (i, val) => {
            var currLi = liTags[i];
            var childMenus = $(currLi).find('.menu2-left');
            var dropdown = $(currLi).find('.menu2');
            if (childMenus.length > 0) {
                $(dropdown[0]).remove();
                $(currLi).append(childMenus[0]);
            }
        });

        $(mainMenu).slicknav({
            prependTo: ".mobile-nav",
            duration: 300,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            closeOnClick: true,
        });
    }
    else {
        $('.menu-responsive').remove();
        $('.menu2').remove('hide');
    }
}

window.onresize = showTabletMenu;

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

function changeImageType(type) {
    var banners = $('.home-slide').find('img');
    $.each(banners, (i, val) => {
        var paths = val.src.split('/');
        var currSrcs = paths[paths.length - 1].split('-');
        var imgTypes = currSrcs[currSrcs.length - 1].split('.');
        currSrcs[currSrcs.length - 1] = `${type}.${imgTypes[imgTypes.length - 1]}`;
        paths[paths.length - 1] = currSrcs.join('-');
        banners[i].src = paths.join('/');
    })
}

function changeSlideTopImg() {
    if (window.innerWidth > 767 && window.innerWidth < 992) {
        changeImageType("tablet");
    }
    else if (window.innerWidth < 768) {
        changeImageType("mobile");
    }
    else {
        changeImageType("desktop");
    }
}

var popularSlide = $('.popular-slider')[0].cloneNode(true);

function showTabletProducts() {
    var owl = $('.popular-slider').find('.owl-stage-outer');
    if (window.innerWidth < 992) {
        if (owl.length == 0) {
            $('.popular-slider').owlCarousel({
                items: 1,
                autoplay: false,
                autoplayTimeout: 5000,
                smartSpeed: 4,
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
                        items: 2,
                    },
                    480: {
                        items: 3,
                    },
                    768: {
                        items: 3,
                    },
                    991: {
                        items: 4,
                    },
                    1170: {
                        items: 6,
                    },
                }
            });
        }
    }
    else if (owl.length > 0) {
        $('.product-slide').html('');
        $('.product-slide').append(popularSlide);
    }
}

//append image to each option
var div = document.createElement('div');
div.style.position = 'absolute';
div.style.height = '40px';
div.style.width = '1px';
div.style.top = '0px';
div.style.right = '30px';
div.style.backgroundColor = '#eee';
$('.banking .nice-select').append(div);

var selectLiTags = $('.banking').find('li');
$(selectLiTags[1]).append('<img class="option-icon" src="images/Icon/right_box/Asset31.png" />');
$(selectLiTags[2]).append('<img class="option-icon" src="images/Icon/right_box/Asset32.png" />');
$(selectLiTags[3]).append('<img class="option-icon" src="images/Icon/right_box/Asset33.png" />');
$(selectLiTags[4]).append('<img class="option-icon" src="images/Icon/right_box/Asset38.png" />');