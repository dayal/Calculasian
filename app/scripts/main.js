'use strict';

function showEn() {
    document.title = "Calculasian Official Website";
    $('.btn-default.video-link').text("play");
    $('.cn').hide();
    $('.en').show();
}

function showCn() {
    document.title = "Calculasian 官方网站";
    $('.btn-default.video-link').text("播放");
    $('.en').hide();
    $('.cn').show();
}

$(function() {
    // language
    var browserLanguage = navigator.language || navigator.userLanguage;
    if (browserLanguage.substr(0, 3) == "zh-") {
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
});
