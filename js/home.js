﻿function showSearchBox() {
    $('.search-left').addClass('hide');
    $('.search-full').removeClass('hide');
    $('.search-box').focus();
}

function showSearchLeft() {
    $('.search-left').removeClass('hide');
    $('.search-full').addClass('hide');
    $('.search-box').val('');
}

function showOtherServices() {
    var $service = $('.other-service')[0];
    if ($service.classList.contains('hide')) {
        $('.other-service').removeClass('hide');
    }
    else {
        $('.other-service').addClass('hide');
    }
}

