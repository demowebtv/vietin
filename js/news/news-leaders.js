const leader = {
    leaders: {
        id: 0,
        title: 'Ban lãnh đạo',
        members: [
            {
                name: 'Ông Lê Đức Thọ',
                position: 'Chủ tịch HĐQT',
                img: 'images/news/leaders/le-duc-tho.jpg'
            },
            {
                name: 'Ông Trần Minh Bình',
                position: 'Thành viên HĐQT',
                img: 'images/news/leaders/tran-minh-binh.jpg'
            },
            {
                name: 'Ông Trần Văn Tần',
                position: 'Thành viên HĐQT',
                img: 'images/news/leaders/tran-van-tan.jpg'
            },
            {
                name: 'Bà Trần Thu Huyền',
                position: 'Thành viên HĐQT',
                img: 'images/news/leaders/tran-thu-huyen.jpg'
            }
        ]
    },
    operators: {
        id: 1,
        title: 'Ban điều hành',
        members:
            [
                {
                    name: 'Ông Lê Đức Thọ2',
                    position: 'Chủ tịch HĐQT2',
                    img: 'images/news/leaders/le-duc-tho.jpg'
                },
                {
                    name: 'Ông Trần Minh Bình2',
                    position: 'Thành viên HĐQT2',
                    img: 'images/news/leaders/tran-minh-binh.jpg'
                },
                {
                    name: 'Ông Trần Văn Tần',
                    position: 'Thành viên HĐQT2',
                    img: 'images/news/leaders/tran-van-tan.jpg'
                },
                {
                    name: 'Bà Trần Thu Huyền2',
                    position: 'Thành viên HĐQT2',
                    img: 'images/news/leaders/tran-thu-huyen.jpg'
                }
            ]
    },
    controls: {
        id: 2,
        title: 'Ban kiểm soát',
        members: [
            {
                name: 'Ông Lê Đức Thọ3',
                position: 'Chủ tịch HĐQT3',
                img: 'images/news/leaders/le-duc-tho.jpg'
            },
            {
                name: 'Ông Trần Minh Bình3',
                position: 'Thành viên HĐQT3',
                img: 'images/news/leaders/tran-minh-binh.jpg'
            },
            {
                name: 'Ông Trần Văn Tần3',
                position: 'Thành viên HĐQT3',
                img: 'images/news/leaders/tran-van-tan.jpg'
            },
            {
                name: 'Bà Trần Thu Huyền3',
                position: 'Thành viên HĐQT3',
                img: 'images/news/leaders/tran-thu-huyen.jpg'
            }
        ]
    }
}

$(document).on('ready', function () {
    $('.tab-lead').on('click', (e) => {
        $('.tab-lead').removeClass('blue-top');
        $(e.currentTarget).addClass('blue-top')
        var index = $(e.currentTarget).data('index');
        $('.bot-border2').removeClass('bg-blue-top');
        let currBorder = $('.bot-border2');
        $(currBorder[index]).addClass('bg-blue-top');

        loadLeaders(index);
    })
});

function loadLeaders(index) {
    $('.leader-content').html('');
    switch (index) {
        case leader.leaders.id:
            $('#lead-title').html(leader.leaders.title);
            $.each(leader.leaders.members, (i, value) => {
                loadLeaderHtml(index, value);
            })
            break;
        case leader.operators.id:
            $('#lead-title').html(leader.operators.title);
            $.each(leader.operators.members, (i, value) => {
                loadLeaderHtml(index, value);
            })
            break;
        case leader.controls.id:
            $('#lead-title').html(leader.controls.title);
            $.each(leader.controls.members, (i, value) => {
                loadLeaderHtml(index, value);
            })
            break;
    }
}

function loadLeaderHtml(index, leader) {
    let html = '<div class="col-lg-3 col-md-3 col-6 text-center leader">';
    html += `<img src="${leader.img}" />`;
    html += `<span class="pro-bold fs-16 blue-top block text-left pt-15px">${leader.name}</span>`
    html += `<span class="fs-16 blue-top block text-left">${leader.position}</span>`
    html += '</div>';
    $('.leader-content').append(html);
}