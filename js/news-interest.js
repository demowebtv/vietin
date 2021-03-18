$(document).on('ready', function () {
    $('.branch-tab a').on('click', (e) => {
        var index = $(e.currentTarget).data('index');
        $('.nav-border').removeClass('bg-blue-top');
        let currBorder = $('.nav-border')[index];
        $(currBorder).addClass('bg-blue-top');
    })

    $('address-select').niceSelect();
    $('city-select').niceSelect();
    $('branch-select').niceSelect();

    $('address-select2').niceSelect();
    $('city-select2').niceSelect();
    $('branch-select2').niceSelect();

    $('.child-menu li a').on('click', (e) => {
        $('#top-intro-mobile').text(e.target.innerHTML);
        $('.child-menu').toggleClass('hide');
        $('.child-menu').toggleClass('block');
        let index = $(e.currentTarget).data('index');
        $('.tab-pane').removeClass('active').removeClass('show');
        $($('.tab-pane')[index]).addClass('active').addClass('show');
    })
});
