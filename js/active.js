/* =====================================
Template Name: Eshop
Author Name: Naimur Rahman
Author URI: http://www.wpthemesgrid.com/
Description: Eshop - eCommerce HTML5 Template.
Version:1.0
========================================*/
/*=======================================
[Start Activation Code]
=========================================
	01. Mobile Menu JS
	02. Sticky Header JS
	03. Search JS
	04. Slider Range JS
	05. Home Slider JS
	06. Popular Slider JS
	07. Quick View Slider JS
	08. Home Slider 4 JS
	09. CountDown
	10. Flex Slider JS
	11. Cart Plus Minus Button
	12. Checkbox JS
	13. Extra Scroll JS
	14. Product page Quantity Counter
	15. Video Popup JS
	16. Scroll UP JS
	17. Nice Select JS
	18. Others JS
	19. Preloader JS
=========================================
[End Activation Code]
=========================================*/
(function ($) {
    "use strict";
    $(document).on('ready', function () {
        showTabletMenu();
		/*====================================
		03. Sticky Header JS
		======================================*/
        jQuery(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('.header').addClass("sticky");
            } else {
                $('.header').removeClass("sticky");
            }
        });

		/*=======================
		  Search JS JS
		=========================*/
        $('.top-search a').on("click", function () {
            $('.search-top').toggleClass('active');
        });

		/*=======================
		  Slider Range JS
		=========================*/
        //$(function () {
        //    $("#slider-range").slider({
        //        range: true,
        //        min: 0,
        //        max: 500,
        //        values: [120, 250],
        //        slide: function (event, ui) {
        //            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        //        }
        //    });
        //    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        //        " - $" + $("#slider-range").slider("values", 1));
        //});

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

		/*=======================
		  Popular Slider JS
		=========================*/
        $('.popular-slider').owlCarousel({
            items: 1,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 400,
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
                    items:4,
                },
                1170: {
                    items: 6,
                },
            }
        });

		/*===========================
		  Quick View Slider JS
		=============================*/
        $('.quickview-slider-active').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            nav: true,
            loop: true,
            merge: true,
            dots: false,
            navText: ['<i class=" ti-arrow-left"></i>', '<i class=" ti-arrow-right"></i>'],
        });

		/*===========================
		  Home Slider 4 JS
		=============================*/
        $('.home-slider-4').owlCarousel({
            items: 1,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 400,
            autoplayHoverPause: true,
            nav: true,
            loop: true,
            merge: true,
            dots: false,
            navText: ['<i class=" ti-arrow-left"></i>', '<i class=" ti-arrow-right"></i>'],
        });

		/*====================================
		16. Flex Slider JS
		======================================*/
        (function ($) {
            'use strict';
            $('.flexslider-thumbnails').flexslider({
                animation: "slide",
                controlNav: "thumbnails",
            });
        })(jQuery);

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

		/*==================================
		 12. Product page Quantity Counter
		 ===================================*/
        $('.qty-box .quantity-right-plus').on('click', function () {
            var $qty = $('.qty-box .input-number');
            var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal)) {
                $qty.val(currentVal + 1);
            }
        });
        $('.qty-box .quantity-left-minus').on('click', function () {
            var $qty = $('.qty-box .input-number');
            var currentVal = parseInt($qty.val(), 10);
            if (!isNaN(currentVal) && currentVal > 1) {
                $qty.val(currentVal - 1);
            }
        });

		/*=====================================
		15.  Video Popup JS
		======================================*/
        $('.video-popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    });

    function showTabletMenu() {
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


	/*====================================
	18. Nice Select JS
	======================================*/
    $('select').niceSelect();
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


	/*=====================================
	 Others JS
	======================================*/
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 500,
            values: [0, 500],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });

	/*=====================================
	  Preloader JS
	======================================*/
    //After 2s preloader is fadeOut
    //$('.preloader').delay(2000).fadeOut('slow');
    setTimeout(function () {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000); //Here you can change preloader time

})(jQuery);
