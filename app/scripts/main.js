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

    showEn();
    // language toggle
    $(document).on('click', '.language-cn', function() {
        showCn();
    });
    $(document).on('click', '.language-en', function() {
        showEn();
    });
});
