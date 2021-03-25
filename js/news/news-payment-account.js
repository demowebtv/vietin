const breadCum = [
]

$(document).on('ready', function () {
    $('.branch-tab a').on('click', (e) => {
        var index = $(e.currentTarget).data('index');
        markBorderTab(index);
        loadFeeTable(index);
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

    $('.child-menu li a').on('click', (e) => {
        let index = $(e.target).data('index');
        loadFeeTable(index);
        loadIntro(index);
        setTabDisplay(index);
        markBorderTab(index);
        loadBorderNav();

        $('.child-menu').removeClass('block');
        $('.child-menu').toggleClass('hide');
    })

    loadFeeTable(11);
    markBorderTab(11);
    setTabDisplay(11);
    loadIntro(11);
    loadBorderNav();
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
    $('.nav-border2').removeClass('bg-blue-top');
    let prefix = `${index}`.substring(0, 1);
    var border = $('.nav-border');
    for (var i = 0; i < border.length; i++) {
        let currIndex = $(border[i]).data('index');
        if (!`${currIndex}`.startsWith(prefix)) {
            $(border[i]).addClass('hide');
        }
        else if (currIndex == index) {
            $(border[i]).removeClass('hide');
            $(border[i]).find('.nav-border2').addClass('bg-blue-top');
            break;
        }
    }
}

function setTabDisplay(index) {
    let itemIndex = `${index} `.substring(0, 1);
    var border = $('.nav-border');

    for (var i = 0; i < border.length; i++) {
        let currIndex = `${$(border[i]).data('index')}`;

        if (currIndex.startsWith(itemIndex)) {
            $(border[i]).removeClass('hide');
        } else {
            $(border[i]).addClass('hide');
        }
    }

    var tabs = $('.branch-tab li');

    for (var i = 0; i < tabs.length; i++) {
        let tabContent = $(tabs[i]).find('a')[0];

        if (`${$(tabContent).data('index')} `.startsWith(itemIndex)) {
            $(tabs[i]).removeClass('hide');
        } else {
            $(tabs[i]).addClass('hide');
        }
    }
}

function loadBorderNav() {
    let allWidth = 0;
    $('.branch-tab li').each((i, elm) => {
        let a = $(elm).find('a')[0];
        allWidth += a.offsetWidth;
    })

    $('.branch-tab').css('min-width', allWidth);
    $('.nav-bot').css('min-width', allWidth);

    $('.branch-tab li').each((i, elm) => {
        let a = $(elm).find('a')[0];
        let border = $('.nav-border')[i];
        if (a.dataset.index == 15 || a.dataset.index == 23) {
            $(border).width(a.offsetWidth - 30);
        }
        else {
            $(border).width(a.offsetWidth - 20);
        }
    })
}

