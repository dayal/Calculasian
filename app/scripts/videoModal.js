'use strict';
function setModalHeight() {
    $('.modal-dialog, .ratio').css({
        'height': $(window).width() * 0.45 + 'px'
    });
}

$(function() {

    var videoLink;
    $(document).on('click', '.video-link', function () {
        videoLink = $(this).data('video-link');
    });

    // Load iframe using url from data-video-link attribute
    $('#video-modal').on('shown.bs.modal', function() {
        $('#video-modal .modal-body').append('<iframe id="videoPlayer" src="' + videoLink + '?rel=0&showinfo=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    });

    // Remove iframe when modal is closed
    $('#video-modal').on('hidden.bs.modal', function() {
        $('#video-modal .modal-body').children('iframe').remove();
    });

    $(window).resize(function() {
        setModalHeight();
    });

    setModalHeight();
});
