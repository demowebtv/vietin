$(document).on('ready', function () {
    collapseNews();
    showTabletProducts();

    $('.nav-link').on('click', (e) => {
        if (e.currentTarget.classList.contains('rate1')) {
            $('.r-1').css('background', '#005993');
            $('.r-2').css('background', 'transparent');
        }
        else {
            $('.r-1').css('background', 'transparent');
            $('.r-2').css('background', '#005993');
        }
    })

    document.onclick = (elm) => {
        let otherService = document.getElementById('other-services');
        let elmClass = elm.target.classList;
        if (!otherService.classList.contains('hide') && !elmClass.contains('otherx')) {
            $(otherService).addClass('hide');
            $('.other-product').removeClass('bt-2').addClass('pb-2px');
            $('#service-carousel').trigger('play.owl.autoplay');
        }
    }

    /*=======================
      Home Slider JS
    =========================*/
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

    $(".sale-slide").owlCarousel({
        navigation: true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideSpeed: 100,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop: true,
        items: 1,
        itemsDesktop: true,
        itemsDesktopSmall: true,
        itemsTablet: true,
        itemsMobile: true
    });

    //append image to each option on change event
    $('.banking .nice-select').on('change', () => {
        let selected = $("#banking-select").val();
        $('.selected-nice').remove();
        if (selected == 0) {
            $('.banking .nice-select').removeClass('flex-item');
        }
        else {
            let selectLiTag = $('.banking').find('li')[selected];
            let img = $(selectLiTag).find('img')[0].cloneNode(true);
            $(img).addClass('selected-nice');
            $('.banking .current').after($(img))
            $('.banking .nice-select').addClass('flex-item');
        }
    })

    var firstSelectOption = $('.banking .nice-select .option')[0];
    if (firstSelectOption.classList.contains('selected')) {
        $('.banking .nice-select .current').css('text-align', 'center');
    }

    $('.banking .nice-select .list li').on('click', (e) => {
        $('.banking .nice-select .current').css('text-align', 'left');
    })

    $('.banking .nice-select .current').on('click', (e) => {
        setOffsetSelectWidth();
    })

    //append image to each option
    let selectLiTags = $('.banking').find('li');
    $(selectLiTags[1]).append('<img class="option-icon" src="images/icon/right_box/Asset31.png" />');
    $(selectLiTags[2]).append('<img class="option-icon" src="images/icon/right_box/Asset32.png" />');
    $(selectLiTags[3]).append('<img class="option-icon" src="images/icon/right_box/Asset33.png" />');
    $(selectLiTags[4]).append('<img class="option-icon" src="images/icon/right_box/Asset38.png" />');
});



function showOtherServices(elm) {
    let service = document.getElementById('other-services');
    if (service.classList.contains('hide')) {
        $(service).removeClass('hide');
        $(elm).removeClass('pb-2px').addClass('bt-2');
        $('#service-carousel').trigger('stop.owl.autoplay');
    }
    else {
        $(service).addClass('hide');
        $(elm).removeClass('bt-2').addClass('pb-2px');
        $('#service-carousel').trigger('play.owl.autoplay');
    }
}

function collapseNews() {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            let index = this.dataset.index;
            if (`${index}`.indexOf('.') > -1) {
                $(".collapsible").each((i, elm) => {
                    if (elm.dataset.index != index && elm.dataset.index.indexOf('.') > -1 && `${elm.dataset.index}`.split('.')[0] == index.split('.')[0]) {
                        $(elm).removeClass('active');
                        let content = elm.nextSibling.nextElementSibling;
                        content.style.maxHeight = null;
                    }
                })

                this.classList.toggle("active");
                let content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
            else {
                $(".collapsible").each((i, elm) => {
                    if ($(elm).data('index') != index) {
                        $(elm).removeClass('active');
                        let content = elm.nextSibling.nextElementSibling;
                        content.style.maxHeight = null;
                    }
                })

                this.classList.toggle("active");
                let content = this.nextElementSibling;
                let maxHeight = 0;
                $(content).find('.table-content tbody tr').each((i, elm) => {
                    var contentTbl = $(elm).find('td .content .table-content');
                    if (contentTbl.length > 0 && (contentTbl[0]).clientHeight > maxHeight) {
                        maxHeight = (contentTbl[0]).clientHeight;
                    }
                });

                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = (content.scrollHeight + maxHeight) + "px";
                }
            }


        });
    }
}

