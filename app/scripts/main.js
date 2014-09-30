'use strict';

function showEn() {
    document.title = 'Calculasian Official Website';
    $('.cn').hide();
    $('.en').show();
}

function showCn() {
    document.title = 'Calculasian 官方网站';
    $('.en').hide();
    $('.cn').show();
}

$(function() {

    $('body').show();

    // language
    var browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.toLowerCase() === 'zh-cn') {
        showCn();
    } else {
        showEn();
    }
    $(document).on('click', '.language-cn', function() {
        showCn();
    });
    $(document).on('click', '.language-en', function() {
        showEn();
    });

    // donate button

    $(document).on('click', '.donate-paypal', function() {
        $('.donate-paypal-form').submit();
    });
});
