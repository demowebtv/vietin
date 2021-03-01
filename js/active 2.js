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


    setTimeout(() => {
        //After 2s, the no-scroll class of the body will be removed
        $('body').removeClass('no-scroll');
    }, 2000);

})(jQuery);
