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

        $('.menu').slicknav({
            prependTo: ".mobile-nav",
            duration: 300,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            closeOnClick: true,
        });
		/*=======================
		  Extra Scroll JS
		=========================*/
        $('#scrollUp').on("click", (e) => {
            var anchor = $(this);
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

    var selectLiTags = $('.banking').find('li');
    $(selectLiTags[1]).append('<img class="option-icon" src="images/Icon/right_box/Asset31.png" />');
    $(selectLiTags[2]).append('<img class="option-icon" src="images/Icon/right_box/Asset32.png" />');
    $(selectLiTags[3]).append('<img class="option-icon" src="images/Icon/right_box/Asset33.png" />');
    $(selectLiTags[4]).append('<img class="option-icon" src="images/Icon/right_box/Asset38.png" />');


    //append image to each option on change event
    $('.lang-select .current').prepend('<img class="lang-select-icon" src="images/Icon/eng.jpg" />')
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
    $(langSelectLiTags[0]).prepend('<img class="lang-select-icon" src="images/Icon/eng.jpg" />');
    $(langSelectLiTags[1]).prepend('<img class="lang-select-icon" src="images/Icon/vi.jpg" />');



    setTimeout(() => {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000);

})(jQuery);
