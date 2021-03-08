const options = {
    VAY_VON_LUU_DONG: 0,
    VAY_THAU_CHI: 1,
    VAY_TUAN_HOAN: 2,
    VAY_XOAY_VONG: 3
}

const loanOptions = [
    {
        id: options.VAY_VON_LUU_DONG,
        benefit: [
            'Khách hàng được đáp ứng vốn lưu động kịp thời để thực hiện Kế hoạch sản xuất kinh doanh;',
            'Khách hàng được tư vấn tận tình thủ tục, các thông tin cần thiết khi giao dịch vay vốn lưu động tại VietinBank;'
        ],
        characteristic: [
            'Loại tiền cho vay: VND và ngoại tệ theo quy định;',
            'Thời hạn cho vay: Tối đa 12 tháng;',
            'Phương thức cho vay: Hạn mức, hạn mức tuần hoàn, hạn mức quay vòng, từng lần;',
            'Số tiền cho vay: phụ thuộc vào nhu cầu của khách hàng, nguồn trả nợ, vốn tự có tham gia của Khách hàng, tài sản đảm bảo;',
        ],
        useCondition: [
            'Khách hàng đáp ứng đầy đủ các điều kiện cho vay theo quy định hiện hành của VietinBank;'
        ]
    },
    {
        id: options.VAY_THAU_CHI,
        benefit: [
            '2Khách hàng được đáp ứng vốn lưu động kịp thời để thực hiện Kế hoạch sản xuất kinh doanh;',
            '2Khách hàng được tư vấn tận tình thủ tục, các thông tin cần thiết khi giao dịch vay vốn lưu động tại VietinBank;'
        ],
        characteristic: [
            '2Loại tiền cho vay: VND và ngoại tệ theo quy định;',
            '2Thời hạn cho vay: Tối đa 12 tháng;',
            '2Phương thức cho vay: Hạn mức, hạn mức tuần hoàn, hạn mức quay vòng, từng lần;',
            '2Số tiền cho vay: phụ thuộc vào nhu cầu của khách hàng, nguồn trả nợ, vốn tự có tham gia của Khách hàng, tài sản đảm bảo;',
        ],
        useCondition: [
            '2Khách hàng đáp ứng đầy đủ các điều kiện cho vay theo quy định hiện hành của VietinBank;'
        ]
    },
    {
        id: options.VAY_TUAN_HOAN,
        benefit: [
            '3Khách hàng được đáp ứng vốn lưu động kịp thời để thực hiện Kế hoạch sản xuất kinh doanh;',
            '3Khách hàng được tư vấn tận tình thủ tục, các thông tin cần thiết khi giao dịch vay vốn lưu động tại VietinBank;'
        ],
        characteristic: [
            '3Loại tiền cho vay: VND và ngoại tệ theo quy định;',
            '3Thời hạn cho vay: Tối đa 12 tháng;',
            '3Phương thức cho vay: Hạn mức, hạn mức tuần hoàn, hạn mức quay vòng, từng lần;',
            '3Số tiền cho vay: phụ thuộc vào nhu cầu của khách hàng, nguồn trả nợ, vốn tự có tham gia của Khách hàng, tài sản đảm bảo;',
        ],
        useCondition: [
            '3Khách hàng đáp ứng đầy đủ các điều kiện cho vay theo quy định hiện hành của VietinBank;'
        ]
    },
    {
        id: options.VAY_XOAY_VONG,
        benefit: [
            '4Khách hàng được đáp ứng vốn lưu động kịp thời để thực hiện Kế hoạch sản xuất kinh doanh;',
            '4Khách hàng được tư vấn tận tình thủ tục, các thông tin cần thiết khi giao dịch vay vốn lưu động tại VietinBank;'
        ],
        characteristic: [
            '4Loại tiền cho vay: VND và ngoại tệ theo quy định;',
            '4Thời hạn cho vay: Tối đa 12 tháng;',
            '4Phương thức cho vay: Hạn mức, hạn mức tuần hoàn, hạn mức quay vòng, từng lần;',
            '4Số tiền cho vay: phụ thuộc vào nhu cầu của khách hàng, nguồn trả nợ, vốn tự có tham gia của Khách hàng, tài sản đảm bảo;',
        ],
        useCondition: [
            '4Khách hàng đáp ứng đầy đủ các điều kiện cho vay theo quy định hiện hành của VietinBank;'
        ]
    },
]

function loadLoanOptions(loanId) {
    var loanInfo = loanOptions[loanId];

    var benefit = document.getElementById('benefit');
    var characteristic = document.getElementById('characteristic');
    var useCondition = document.getElementById('use-condition');
    $(benefit).html('');
    $(characteristic).html('');
    $(useCondition).html('');
    $.each(loanInfo.benefit, (i, value) => {
        $(benefit).append(`<li>${value}</li>`);
    });

    $.each(loanInfo.characteristic, (i, value) => {
        $(characteristic).append(`<li>${value}</li>`);
    });

    $.each(loanInfo.useCondition, (i, value) => {
        $(useCondition).append(`<li>${value}</li>`);
    });
}


$(document).on('ready', function () {
    let arrow = $('.down-arrow');
    $(arrow[0]).removeClass('hide');

    $('.head-option').on('click', (e) => {
        let index = $(e.currentTarget).data('index');
        $(arrow).removeClass('hide').addClass('hide');
        $(arrow[index]).removeClass('hide');
        //switch (index) {
        //    case VAY_VON_LUU_DONG:

        //        break;
        //    case VAY_THAU_CHI:

        //        break;
        //    case VAY_TUAN_HOAN:

        //        break;
        //    case VAY_XOAY_VONG:

        //        break;
        //}

        loadLoanOptions(index);
    });
});