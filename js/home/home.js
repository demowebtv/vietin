$(document).on('ready', function () {
    showTabletProducts();
    initCollapseTool();

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
            $('.other-product').removeClass('bt-2').addClass('pb-2px');
            $('#service-carousel').trigger('play.owl.autoplay');
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

    initInternetBankingOptions();
});

function initInternetBankingOptions() {
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

    var firstSelectOption = $('.banking .nice-select .option')[0];
    if (firstSelectOption.classList.contains('selected')) {
        $('.banking .nice-select .current').css('text-align', 'center');
    }

    $('.banking .nice-select .list li').on('click', (e) => {
        $('.banking .nice-select .current').css('text-align', 'left');
    })

    $('.banking .nice-select .current').on('click', (e) => {
        setOffsetSelectWidth();
    })

    //append image to each option
    let selectLiTags = $('.banking').find('li');
    $(selectLiTags[1]).append('<img class="option-icon" src="images/icon/right_box/Asset31.png" />');
    $(selectLiTags[2]).append('<img class="option-icon" src="images/icon/right_box/Asset32.png" />');
    $(selectLiTags[3]).append('<img class="option-icon" src="images/icon/right_box/Asset33.png" />');
    $(selectLiTags[4]).append('<img class="option-icon" src="images/icon/right_box/Asset38.png" />');
}


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

function initCollapseTool() {
    $('.tool-all li').each((i, elm) => {
        if ($(elm).find('.lvl2-tool').length > 0) {
            $(elm).find('.lvl1-tool').append('<svg class="right-small" fill="#93d5f6" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10.08"><defs></defs><title>Asset 6ldpi</title><g id="Layer_2" data-name="Layer 2"><g id="body"><path class="cls-1" d="M.28,9.8h0a1,1,0,0,1,0-1.36L3,5.72A1,1,0,0,0,3,4.36L.28,1.64A1,1,0,0,1,.28.28h0a1,1,0,0,1,1.36,0L5.72,4.36a1,1,0,0,1,0,1.36L1.64,9.8A1,1,0,0,1,.28,9.8Z"/></g></g></svg>');
        }
    })
    
    $('.lvl2-tool li').each((i, elm) => {
        if ($(elm).find('.lvl3-tool').length > 0) {
            $(elm).find('.lvl2-title').append('<svg class="right-small" fill="#93d5f6" width="10px" height="10px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 10.08"><defs></defs><title>Asset 6ldpi</title><g id="Layer_2" data-name="Layer 2"><g id="body"><path class="cls-1" d="M.28,9.8h0a1,1,0,0,1,0-1.36L3,5.72A1,1,0,0,0,3,4.36L.28,1.64A1,1,0,0,1,.28.28h0a1,1,0,0,1,1.36,0L5.72,4.36a1,1,0,0,1,0,1.36L1.64,9.8A1,1,0,0,1,.28,9.8Z"/></g></g></svg>');
        }
    })

    $('.lvl1-tool').on('click', (elm) => {
        if (elm.target.nextElementSibling) {
            $(elm.target.nextElementSibling).toggleClass('hide');
        }
    })

    $('.lvl2-title').on('click', (elm) => {
        if (elm.target.nextElementSibling) {
            $(elm.target.nextElementSibling).toggleClass('hide');
        }
    })
}


