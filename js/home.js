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

