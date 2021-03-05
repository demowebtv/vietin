let imgType = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
};

(function ($) {
    "use strict";
    $(document).on('ready', function () {
		/*====================================
		Sticky Header JS
		======================================*/
        jQuery(window).on('scroll', () => {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass("sticky");
            }
            else {
                $('.header').removeClass("sticky");
            }
        });

        showTabletMenu();

        $('.menu1-text').on('mouseover', (e) => {
            let menu1 = $(e.currentTarget)[0];
            let dropdown = menu1.nextElementSibling;
            let menu2 = $(dropdown).find('.left-item');
            if (menu2.length > 0) {
                menu2 = menu2[0];
                menu2.dataset.height = menu2.scrollHeight;
            }
        });

        $('.link-menu2').on('mouseover', (e) => {
            if (window.innerWidth > 991) {
                let menu2 = $(e.currentTarget)[0];
                let totalLeft = menu2.offsetParent.firstElementChild.children.length;
                let totalright = menu2.nextElementSibling.children.length;

                let menu3Heigth = menu2.nextElementSibling.scrollHeight;

                if (totalLeft < totalright) {
                    $(menu2.offsetParent).height(menu3Heigth);
                }
                else {
                    $(menu2.offsetParent).height(menu2.offsetParent.dataset.height);
                }
            }
        });

        $(".icon-contact svg").on('mouseover', (e) => {
            let currIconClass = $(e.currentTarget)[0];
            $(`.${currIconClass.id}-detail`).removeClass('hide');
        });

        $(".contact-detail").on('mouseleave', (e) => {
            let currentItem = $(e.currentTarget)[0];
            $(currentItem).removeClass('hide').addClass('hide');;
        });

        $(".icon-contact svg").on('mouseleave', (e) => {
            let currIconClass = $(e.currentTarget)[0];
            let relatedTarget = $(e.relatedTarget)[0];
            if (`${relatedTarget.className}` === 'col-6') {
                $(`.${currIconClass.id}-detail`).removeClass('hide');
            }
            else {
                $(`.${currIconClass.id}-detail`).addClass('hide');
            }
        });

		/*=======================
		  Extra Scroll JS
		=========================*/
        $('#scrollUp').on("click", (e) => {
            let anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 0
            }, 900);
            e.preventDefault();
        });
    });

    /*====================================
    Nice Select JS
    ======================================*/
    $('select').niceSelect();
    //append image to each option on change event
    $('.banking .nice-select').on('change', () => {
        let selected = $("#banking-select").val();
        $('.selected-nice').remove();
        if (selected == 0) {
            $('.banking .nice-select').removeClass('flex-item');
        }
        else {
            let selectLiTag = $('.banking').find('li')[selected];
            let img = $(selectLiTag).find('img')[0].cloneNode(true);
            $(img).addClass('selected-nice');
            $('.banking .current').after($(img))
            $('.banking .nice-select').addClass('flex-item');
        }
    })

    //append image to each option
    let div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.height = '40px';
    div.style.width = '1px';
    div.style.top = '0px';
    div.style.right = '30px';
    div.style.backgroundColor = '#eee';
    $('.banking .nice-select').append(div);

    let selectLiTags = $('.banking').find('li');
    $(selectLiTags[1]).append('<img class="option-icon" src="images/Icon/right_box/Asset31.png" />');
    $(selectLiTags[2]).append('<img class="option-icon" src="images/Icon/right_box/Asset32.png" />');
    $(selectLiTags[3]).append('<img class="option-icon" src="images/Icon/right_box/Asset33.png" />');
    $(selectLiTags[4]).append('<img class="option-icon" src="images/Icon/right_box/Asset38.png" />');

    //append image to each option on change event
    $('.lang-select .current').prepend('<img class="lang-select-icon" src="images/Icon/flag/united-kingdom.svg" />')
    $('.lang-select .nice-select').on('change', () => {
        $('.lang-select .current .lang-select-icon').remove();
        let selected = $("#lang-select").val();
        let selectLiTag = $('.lang-select').find('li')[selected];
        let img = $(selectLiTag).find('img')[0].cloneNode(true);
        $('.lang-select .current').prepend($(img))
    })

    let lang = document.createElement('div');
    lang.style.position = 'absolute';
    lang.style.height = '40px';
    lang.style.width = '1px';
    lang.style.top = '0';
    lang.style.left = '0';
    $('.lang-select .nice-select').append(lang);

    let langSelectLiTags = $('.lang-select').find('li');
    $(langSelectLiTags[0]).prepend('<img class="lang-select-icon" src="images/Icon/flag/united-kingdom.svg" />');
    $(langSelectLiTags[1]).prepend('<img class="lang-select-icon" src="images/Icon/flag/vietnam.svg" />');

    setTimeout(() => {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000);

    window.onresize = showTabletMenu;

    $('.mobile-nav').on('click', (e) => {
        let menuButton = $('.slicknav_btn')[0];
        if (menuButton.classList.contains('slicknav_collapsed')) {
            $(".js").addClass('over-enable').removeClass('over-disable')
        }
        else {
            $(".js").addClass('over-disable').removeClass('over-enable')
        }
    })

})(jQuery);

let serviceSlides = $('.service-slider').length > 0 ? $('.service-slider')[0].cloneNode(true) : null;
function showTabletProducts() {
    if (!serviceSlides) {
        return;
    }

    let owl = $('.service-slider').find('.owl-stage-outer');
    if (window.innerWidth < 992) {
        if (owl.length == 0) {
            $('.service-slider').owlCarousel({
                items: 1,
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
                        items: 6,
                    },
                }
            });
        }
    }
    else if (owl.length > 0) {
        $('.product-slide').html('');
        $('.product-slide').append(serviceSlides);
    }
}

function showTabletMenu() {
    changeSlideTopImg();
    showTabletProducts();
    if (window.innerWidth < 992) {
        $('.mobile-nav').html('');
        let mainMenu = $('.menu')[0].cloneNode(true);

        let liTags = $(mainMenu).find('.menu1');
        $.each(liTags, (i, val) => {
            let currLi = liTags[i];
            let childMenus = $(currLi).find('.menu2-left');
            let dropdown = $(currLi).find('.menu2');
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

function changeImageType(type) {
    if ($('.home-slide').length > 0) {
        let banners = $('.home-slide').find('img');
        $.each(banners, (i, val) => {
            let paths = val.src.split('/');
            let currSrcs = paths[paths.length - 1].split('-');
            if (currSrcs.length >= 2) {
                let imgTypes = currSrcs[currSrcs.length - 1].split('.');
                if (imgTypes[0] === imgType.DESKTOP || imgTypes[0] === imgType.TABLET || imgTypes[0] === imgType.MOBILE) {
                    currSrcs[currSrcs.length - 1] = `${type}.${imgTypes[imgTypes.length - 1]}`;
                    paths[paths.length - 1] = currSrcs.join('-');
                    banners[i].src = paths.join('/');
                }
            }
        })
    }
}

function changeSlideTopImg() {
    if (window.innerWidth > 767 && window.innerWidth < 992) {
        changeImageType(imgType.TABLET);
    }
    else if (window.innerWidth < 768) {
        changeImageType(imgType.MOBILE);
    }
    else {
        changeImageType(imgType.DESKTOP);
    }
}

function showSearchBox() {
    $('.search-left').addClass('hide');
    $('.search-full').removeClass('hide');
    $('.search-box').focus();
}

function showSearchOnLeave() {
    $('.search-left').removeClass('hide');
    $('.search-full').addClass('hide');
    $('.search-box').val('');
}