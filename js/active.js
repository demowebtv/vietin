let imgType = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
};

(function ($) {
    "use strict";
    $(document).on('ready', function () {

        $(function () {
            if ($(".datepicker").length > 0) {
                $(".datepicker").datepicker({ format: 'dd/mm/yyyy' });
            }
        });

        // sticky menu
        jQuery(window).on('scroll', () => {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass("sticky");
            }
            else {
                $('.header').removeClass("sticky");
            }
        });

        initMenu();
        showTabletMenu();
        initMenuLevel2();
        initRightContact();

        if ($('.bread2').length > 0 & $('.child-menu').length > 0) {
            $('.bread2').on('click', (e) => {
                if (window.innerWidth <= 450) {
                    $('.child-menu').toggleClass('hide');
                    $('.child-menu').toggleClass('block');
                }
            });
        }

		/*=======================
		  Extra Scroll JS
		=========================*/
        $('.scrollUp').on("click", (e) => {
            let anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 0
            }, 900);
            e.preventDefault();
        });

        // on resize event
        window.onresize = windowResizeHandle;
        showTabletProducts();
        showProducts();
    });


    $('select').niceSelect();

    initLanguageSelect();

    setTimeout(() => {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000);

    initMobileMenu();
})(jQuery);

function windowResizeHandle() {
    changeSlideTopImg();
    showTabletProducts();
    setOffsetSelectWidth();
    showProducts();
    showBorrowOptions();
    showTabletMenu();
    changeEnterpriseProductsImg();
}

function changeEnterpriseProductsImg() {
    if (window.innerWidth <= 450 && $('.solution-slider').length > 0) {
        let allImgSrc = [];
        let products = [];
        $('.solution-slider').find('img').each((i, img) => {
            if (allImgSrc.indexOf(img.src) < 0) {
                products.push(img);
                allImgSrc.push(img.src);
            }
        })

        $.each(products, (i, product) => {
            let paths = product.src.split('/');
            let currSrcs = paths[paths.length - 1].split('.');

            if (currSrcs.length >= 2 && currSrcs[currSrcs.length - 2].indexOf(`-${imgType.MOBILE}`) < 0) {
                currSrcs[currSrcs.length - 2] = `${currSrcs[currSrcs.length - 2]}-${imgType.MOBILE}`;
                paths[paths.length - 1] = currSrcs.join('.');
                let imgSrc = paths.join('/');
                product.src = imgSrc;
            }
        })
    }
}

function initMobileMenu() {
    $('.mobile-nav').on('click', (e) => {
        let menuButton = $('.slicknav_btn')[0];
        if (menuButton.classList.contains('slicknav_collapsed')) {
            $(".js").addClass('over-enable').removeClass('over-disable')
        }
        else {
            $(".js").addClass('over-disable').removeClass('over-enable')
        }
    })
}

function initLanguageSelect() {
    //append image to each option on change event
    $('.lang-select .current').prepend('<img class="lang-select-icon" src="images/icon/flag/united-kingdom.svg" />')
    $('.lang-select .nice-select').on('change', () => {
        $('.lang-select .current .lang-select-icon').remove();
        let selected = $("#lang-select").val();
        let selectLiTag = $('.lang-select').find('li')[selected];
        let img = $(selectLiTag).find('img')[0].cloneNode(true);
        $('.lang-select .current').prepend($(img))
    })

    let langSelectLiTags = $('.lang-select').find('li');
    $(langSelectLiTags[0]).prepend('<img class="lang-select-icon" src="images/icon/flag/united-kingdom.svg" />');
    $(langSelectLiTags[1]).prepend('<img class="lang-select-icon" src="images/icon/flag/vietnam.svg" />');
}

function initRightContact() {
    $(".icon-contact img").on('mouseover', (e) => {
        let currIconClass = $(e.currentTarget)[0];
        $(`.${currIconClass.id}-detail`).removeClass('hide');
    });

    $(".contact-detail").on('mouseleave', (e) => {
        let currentItem = $(e.currentTarget)[0];
        $(currentItem).removeClass('hide').addClass('hide');;
    });

    $(".icon-contact img").on('mouseleave', (e) => {
        let currIconClass = $(e.currentTarget)[0];
        let relatedTarget = $(e.relatedTarget)[0];
        if (`${relatedTarget.className}` === 'col-6') {
            $(`.${currIconClass.id}-detail`).removeClass('hide');
        }
        else {
            $(`.${currIconClass.id}-detail`).addClass('hide');
        }
    });
}

function initMenu() {
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
            if (menu2.nextElementSibling) {
                let totalright = menu2.nextElementSibling.children.length;
                let menu3Heigth = menu2.nextElementSibling.scrollHeight;

                if (totalLeft < totalright) {
                    $(menu2.offsetParent).height(menu3Heigth);
                }
                else {
                    $(menu2.offsetParent).height(menu2.offsetParent.dataset.height);
                }
            }
        }
    });

    $('.link-menu2').on('mouseleave', (e) => {
        if (window.innerWidth > 991) {
            if (e.relatedTarget && e.relatedTarget.offsetParent && (e.relatedTarget.offsetParent.className === 'menu2-right' || e.relatedTarget.className === 'menu2-right')) {
                $(e.currentTarget).addClass('menu-hover');
            }
            else {
                $(e.currentTarget).removeClass('menu-hover');
            }
        }
    });

    $('.menu2-right li a').on('mouseleave', (e) => {
        let parent = e.currentTarget.closest('.menu2-right').previousElementSibling;
        let hoveredNode = e.relatedTarget.innerText;
        if (parent.innerText !== hoveredNode && e.relatedTarget.className === 'link-menu2') {
            $(parent).removeClass('menu-hover');
        }

        if (e.relatedTarget.offsetParent &&
            e.relatedTarget.offsetParent.className !== 'menu2-right' &&
            !e.relatedTarget.offsetParent.classList.contains('left-item')) {
            $('.link-menu2').removeClass('menu-hover');
        }
    });
    $('.menu2-right').on('mouseleave', (e) => {
        let parent = e.currentTarget.previousElementSibling;
        let hoveredNode = e.relatedTarget.innerText;
        if (parent.innerText !== hoveredNode && e.relatedTarget.className === 'link-menu2') {
            $(parent).removeClass('menu-hover');
        }
    });
}

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

function setOffsetSelectWidth() {
    if ($('.banking .nice-select .current').length > 0) {
        var currWidth = ($('.banking .nice-select .current')[0]).offsetWidth;
        $($('.banking .nice-select .list')[0]).width(currWidth);
    }
}

function showTabletMenu() {
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
        let allImgSrc = [];
        let banners = [];
        $('.home-slide').find('img').each((i, img) => {
            if (allImgSrc.indexOf(img.src) < 0) {
                banners.push(img);
                allImgSrc.push(img.src);
            }
        })

        $.each(banners, (i, banner) => {
            let paths = banner.src.split('/');
            let currSrcs = paths[paths.length - 1].split('-');
            if (currSrcs.length >= 2) {
                let imgTypes = currSrcs[currSrcs.length - 1].split('.');
                if (imgTypes[0] === imgType.DESKTOP || imgTypes[0] === imgType.TABLET || imgTypes[0] === imgType.MOBILE) {
                    currSrcs[currSrcs.length - 1] = `${type}.${imgTypes[imgTypes.length - 1]}`;
                    paths[paths.length - 1] = currSrcs.join('-');
                    let imgSrc = paths.join('/');
                    if (isImageExists(imgSrc)) {
                        banner.src = imgSrc;
                    }
                }
            }
        })
    }
}

function isImageExists(imageUrl) {
    var image = new Image();
    image.src = imageUrl;
    if (image.width == 0) {
        return false;
    } else {
        return true;
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

function initMenuLevel2() {
    let menu2Left = $('.link-menu2');
    if (menu2Left.length > 0) {
        $('.link-menu2').each((index, elm) => {
            if (elm.nextElementSibling) {
                $(elm).append('<i class="fa fa-chevron-right top-menu"></i>');
            }
        })
    }
}

let solutionSlides = $('.solution-slider').length > 0 ? $('.solution-slider')[0].cloneNode(true) : null;
function showProducts() {
    if (!solutionSlides) {
        return;
    }

    let owl = $('.solution-slider').find('.owl-stage-outer');
    if (window.innerWidth > 450) {
        if (owl.length == 0) {
            $('.solution-slider').owlCarousel({
                items: 1,
                autoplay: false,
                autoplayTimeout: 3000,
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
        }
    }
    else {
        $('.product-slide').html('');
        $('.product-slide').append(solutionSlides);
        $('.solution-slider').css('display', 'block');
    }
}

function showBorrowOptions() {
    let amount = $('.head-amount');
    if (amount.length == 0) {
        return;
    }

    if (window.innerWidth <= 450) {
        let headItems = $('.head-item');
        $(headItems[0]).append($('.row-detail'));
    }
    else {
        $(amount).after($('.row-detail'));
    }
}