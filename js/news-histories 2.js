$(document).on('ready', function () {
    $('.tab-lead').on('click', (e) => {
        $('.tab-lead').removeClass('blue-top');
        $(e.currentTarget).addClass('blue-top')
        var index = $(e.currentTarget).data('index');
        $('.bot-border2').removeClass('bg-blue-top');
        let currBorder = $('.bot-border2');
        $(currBorder[index]).addClass('bg-blue-top');
    })
});