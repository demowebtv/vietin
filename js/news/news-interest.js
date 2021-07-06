$(document).on('ready', function () {
    $('.branch-tab a').on('click', (e) => {
        var index = $(e.currentTarget).data('index');
        $('.nav-border').removeClass('bg-blue-top');
        let currBorder = $('.nav-border')[index];
        $(currBorder).addClass('bg-blue-top');
    })

    $(`.calculate1`).on('click', (e) => {
        $(`.rate-result1`).removeClass('hide');
    })

    $(`.calculate2`).on('click', (e) => {
        $(`.rate-result2`).removeClass('hide');
    })

    $(`.calculate3`).on('click', (e) => {
        $(`.rate-result3`).removeClass('hide');
    })
    
    $(`.calculate4`).on('click', (e) => {
        $(`.rate-result4`).removeClass('hide');
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

    $('.interest-select.nice-select').on('change', () => {
        let selected = $("#interest-select").val();
        if (selected == 3) {
            $('.pay-interest').removeClass('hide');
        }
        else {
            $('.pay-interest').addClass('hide');
        }
    })
});
