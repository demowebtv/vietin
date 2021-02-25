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

        $(".icon-contact svg").on('click', function (e) {
            var currIconClass = $(e.currentTarget)[0];
            if ($(`.${currIconClass.id}-detail`)[0].classList.contains('hide')) {
                $(`.${currIconClass.id}-detail`).removeClass('hide');
            }
            else {
                $(`.${currIconClass.id}-detail`).addClass('hide');
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
            var currSrcs = val.src.split('-');
            var imgTypes = currSrcs[2].split('.');
            currSrcs[2] = type + '.' + imgTypes[1];
            banners[i].src = currSrcs.join('-');
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
    $('.nice-select').on('change', () => {
        var selected = $("#banking-select").val();
        if (selected == 0) {
            $('.nice-select').removeClass('flex-item');
        }
        else {
            $('.selected-nice').remove();
            var selectLiTag = $('.banking').find('li')[selected];
            var img = $(selectLiTag).find('img')[0].cloneNode(true);
            $(img).addClass('selected-nice');
            $('.current').after($(img))
            $('.nice-select').removeClass('flex-item').addClass('flex-item');
        }

    })
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.height = '40px';
    div.style.width = '1px';
    div.style.top = '0px';
    div.style.right = '30px';
    div.style.backgroundColor = '#eee';
    $('.nice-select').append(div);

    var selectLiTags = $('.banking').find('li');
    $(selectLiTags[1]).append('<img class="option-icon" src="images/Icon/right_box/Asset31.png" />');
    $(selectLiTags[2]).append('<img class="option-icon" src="images/Icon/right_box/Asset32.png" />');
    $(selectLiTags[3]).append('<img class="option-icon" src="images/Icon/right_box/Asset33.png" />');
    $(selectLiTags[4]).append('<img class="option-icon" src="images/Icon/right_box/Asset38.png" />');

    setTimeout(function () {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000);

})(jQuery);
