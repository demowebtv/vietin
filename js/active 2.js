(function ($) {
    "use strict";
    $(document).on('ready', function () {
        showTabletMenu();
        showTabletProducts();
		/*====================================
		03. Sticky Header JS
		======================================*/
        jQuery(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass("sticky");
            }
            else {
                $('.header').removeClass("sticky");
            }
        });

        $(".icon-contact svg").on('mouseover', function (e) {
            var currIconClass = $(e.currentTarget)[0];
            $(`.${currIconClass.id}-detail`).removeClass('hide');
        });
        $(".icon-contact svg").on('mouseout', function (e) {
            var currIconClass = $(e.currentTarget)[0];
            $(`.${currIconClass.id}-detail`).removeClass('hide').addClass('hide');
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


		/*=======================
		  Extra Scroll JS
		=========================*/
        $('#scrollUp').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 0
            }, 900);
            e.preventDefault();
        });

		/*===============================
		10. Checkbox JS
		=================================*/
        $('input[type="checkbox"]').change(function () {
            if ($(this).is(':checked')) {
                $(this).parent("label").addClass("checked");
            } else {
                $(this).parent("label").removeClass("checked");
            }
        });

    });


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
                var arrow = this.children[0];
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
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

    window.onresize = showTabletMenu;


    /*====================================
    18. Nice Select JS
    ======================================*/
    $('select').niceSelect();
    //append image to each option on change event
    $('.banking .nice-select').on('change', () => {
        var selected = $("#banking-select").val();
        $('.selected-nice').remove();
        if (selected == 0) {
            $('.banking .nice-select').removeClass('flex-item');
        }
        else {
            var selectLiTag = $('.banking').find('li')[selected];
            var img = $(selectLiTag).find('img')[0].cloneNode(true);
            $(img).addClass('selected-nice');
            $('.banking .current').after($(img))
            $('.banking .nice-select').removeClass('flex-item').addClass('flex-item');
        }
    })

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


    //append image to each option on change event
    $('.lang-select .current').prepend('<img class="lang-select-icon" src="images/Icon/flag/united-kingdom.svg" />')
    $('.lang-select .nice-select').on('change', () => {
        $('.lang-select .current .lang-select-icon').remove();
        var selected = $("#lang-select").val();
        var selectLiTag = $('.lang-select').find('li')[selected];
        var img = $(selectLiTag).find('img')[0].cloneNode(true);
        $('.lang-select .current').prepend($(img))
    })

    var lang = document.createElement('div');
    lang.style.position = 'absolute';
    lang.style.height = '40px';
    lang.style.width = '1px';
    lang.style.top = '0';
    lang.style.left = '0';
    $('.lang-select .nice-select').append(lang);

    var langSelectLiTags = $('.lang-select').find('li');
    $(langSelectLiTags[0]).prepend('<img class="lang-select-icon" src="images/Icon/flag/united-kingdom.svg" />');
    $(langSelectLiTags[1]).prepend('<img class="lang-select-icon" src="images/Icon/flag/vietnam.svg" />');

    setTimeout(function () {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000);

})(jQuery);
