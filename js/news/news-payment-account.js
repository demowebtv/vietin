const breadCum = [
]

$(document).on('ready', function () {
    $('.branch-tab a').on('click', (e) => {
        var index = $(e.currentTarget).data('index');
        markBorderTab(index);
    })

    $('.fee-item').on('mouseover', (e) => {
        $(e.currentTarget).find('.fee-options').css('display', 'block');
    })

    $('.fee-item').on('mouseleave', (e) => {
        $('.fee-options').css('display', 'none');
    })

    $('.fee-options li a').on('click', (e) => {
        $('.fee-options').css('display', 'none');
        loadFeeTable($(e.target).data('index'));
    })

    $('.personal-customer').on('click', (e) => {

    })
    $('.child-menu li a').on('click', (e) => {
        let index = $(e.target).data('index');
        loadFeeTable(index);
        loadIntro(index);
        setTabDisplay(index);

        $('.child-menu').removeClass('block');
        $('.child-menu').toggleClass('hide');
    })

    $('.enterprise-customer').on('click', (e) => {

    })

    loadFeeTable(11);
    markBorderTab(11);
    setTabDisplay(11);
    loadIntro(11);
});

function loadIntro(index) {
    var intros = $('.intro-options');
    for (var i = 0; i < intros.length; i++) {
        if ($(intros[i]).data('index') == index) {
            $(intros[i]).removeClass('hide');
        }
        else {
            $(intros[i]).addClass('hide');
        }

    }
}

function loadFeeTable(index) {
    $('.tbl-fee').css('display', 'none');
    var tblFee = $('.tbl-fee');
    for (var i = 0; i < tblFee.length; i++) {
        if ($(tblFee[i]).data('index') == index) {
            $(tblFee[i]).css('display', 'block');
            break;
        }
    }
}

function markBorderTab(index) {
    $('.nav-border').removeClass('bg-blue-top');
    var border = $('.nav-border');
    for (var i = 0; i < border.length; i++) {
        if ($(border[i]).data('index') == index) {
            $(border[i]).addClass('bg-blue-top');
            break;
        }
    }
}

function setTabDisplay(index) {
    let itemIndex = `${index}`.substring(0, 1);
    var border = $('.nav-border');

    for (var i = 0; i < border.length; i++) {
        if (`${$(border[i]).data('index')}`.startsWith(itemIndex)) {
            $(border[i]).removeClass('hide');
        } else {
            $(border[i]).addClass('hide');
        }
    }

    var tabs = $('.branch-tab li');

    for (var i = 0; i < tabs.length; i++) {
        let tabContent = $(tabs[i]).find('a')[0];

        if (`${$(tabContent).data('index')}`.startsWith(itemIndex)) {
            $(tabs[i]).removeClass('hide');
        } else {
            $(tabs[i]).addClass('hide');
        }
    }
}

