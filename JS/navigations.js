$(document).ready(function () {
    const hideAll = () => {
        $('#home').css('display', 'none');
        $('#customers').css('display', 'none');
        $('#items').css('display', 'none');
        $('#orders').css('display', 'none');
        $('#orderDetails').css('display', 'none');
    };

    hideAll();
    $('#home').css('display', 'block');

    $('#btnHome').click(function () {
        hideAll();
        $('#home').css('display', 'block');
    });

    $('#btnCustomers').click(function () {
        hideAll();
        $('#customers').css('display', 'block');
    });

    $('#btnItems').click(function () {
        hideAll();
        $('#items').css('display', 'block');
    });

    $('#btnOrders').click(function () {
        hideAll();
        $('#orders').css('display', 'block');
    });

    $('#btnOrderDetails').click(function () {
        hideAll();
        $('#orderDetails').css('display', 'block');
    });
});