(function ($) {
    "use strict";
    $(document).on('ready', function () {
        window.onresize = windowResize;
    });
    initLanguageSelect();
})(jQuery);
function windowResize() {
    initLanguageSelect();
}
function initLanguageSelect() {
    if (window.innerWidth < 768) {
        //append image to each option on change event
        $('.lang-select-priority .current').html('<img class="lang-select-icon" src="images/icon/priority_en.png" /><img class="priority-icon" src="images/icon/icon.png" />')
        $('.lang-select-priority .nice-select').on('change', () => {
            $('.lang-select .current .lang-select-icon').remove();
            let selected = $("#lang-select-priority").val();
            let selectLiTag = $('.lang-select-priority').find('li')[selected];
            let img = $(selectLiTag).find('img')[0].cloneNode(true);
            $('.lang-select-priority .current').html($(img));
            $('.lang-select-priority .current').append('<img class="priority-icon" src="images/icon/icon.png" />');
        })
        let langSelectLiTags = $('.lang-select-priority').find('li');
        $(langSelectLiTags[0]).html('<img class="lang-select-icon" src="images/icon/priority_en.png" />');
        $(langSelectLiTags[1]).html('<img class="lang-select-icon" src="images/icon/priority_vi.png" />');
    } else {
        $('.lang-select-priority .current').html('<img class="lang-select-icon" src="images/icon/priority_en.png" /><img class="priority-icon" src="images/icon/icon.png" />ENG')
        $('.lang-select-priority .nice-select').on('change', () => {
            $('.lang-select .current .lang-select-icon').remove();
            let selected = $("#lang-select-priority").val();
            let selectLiTag = $('.lang-select-priority').find('li')[selected];
            let img = $(selectLiTag).find('img')[0].cloneNode(true);
            $('.lang-select-priority .current').html($(img))
            $('.lang-select-priority .current').append(selectLiTag.innerText);
        })
        let langSelectLiTags = $('.lang-select-priority').find('li');
        $(langSelectLiTags[0]).html('<img class="lang-select-icon" src="images/icon/priority_en.png" /> ENG');
        $(langSelectLiTags[1]).html('<img class="lang-select-icon" src="images/icon/priority_vi.png" /> VIE');
    }
}
