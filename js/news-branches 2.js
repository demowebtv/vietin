const breadCum = [
]

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
});
