$(document).on('ready', function () {
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

    var video = document.getElementById("intro-video");
    video.onpause = function () {
        $('.video-play').removeClass('hide');
        $('.intro').removeClass('hide').addClass('hide');
        $('.video-info').removeClass('hide');
    };

});

function playVideo() {
    var video = document.getElementById("intro-video");
    $('.intro').removeClass('hide');
    $('.video-play').removeClass('hide').addClass('hide');
    $('.video-info').removeClass('hide').addClass('hide');
    $(video).removeClass('video-bg').addClass('video-bg');
    video.play();
}