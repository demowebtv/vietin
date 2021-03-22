$(document).on('ready', function () {
    loadSelect1();
    loadSelect2();
});

function loadSelect1() {
    $('.transfer1 .current').prepend('<img class="transfer-icon" src="images/icon/flag/united-states.svg" />')
    $('.transfer1').on('change', () => {
        $('.transfer1 .current .transfer-icon').remove();
        let selected = $("#transfer1").val();
        let selectLiTag = $('.transfer1').find('li')[selected];
        let img = $(selectLiTag).find('img')[0].cloneNode(true);
        $('.transfer1 .current').prepend($(img))
    })

    let langSelectLiTags = $('.transfer1').find('li');
    $(langSelectLiTags[0]).prepend('<img class="transfer-icon" src="images/icon/flag/united-states.svg" />');
    $(langSelectLiTags[1]).prepend('<img class="transfer-icon" src="images/icon/flag/canada.svg" />');
    $(langSelectLiTags[2]).prepend('<img class="transfer-icon" src="images/icon/flag/vietnam.svg" />');
}

function loadSelect2() {
    $('.transfer2 .current').prepend('<img class="transfer-icon" src="images/icon/flag/canada.svg" />')
    $('.transfer2').on('change', () => {
        $('.transfer2 .current .transfer-icon').remove();
        let selected = $("#transfer2").val();
        let selectLiTag = $('.transfer2').find('li')[selected];
        let img = $(selectLiTag).find('img')[0].cloneNode(true);
        $('.transfer2 .current').prepend($(img))
    })

    let langSelectLiTags = $('.transfer2').find('li');
    $(langSelectLiTags[0]).prepend('<img class="transfer-icon" src="images/icon/flag/canada.svg" />');
    $(langSelectLiTags[1]).prepend('<img class="transfer-icon" src="images/icon/flag/united-states.svg" />');
    $(langSelectLiTags[2]).prepend('<img class="transfer-icon" src="images/icon/flag/vietnam.svg" />');
}