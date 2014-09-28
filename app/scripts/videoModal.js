'use strict';
$(function() {

    var videoLink;
    $(document).on('click', '.btn-default', function () {
        videoLink = $(this).data('video-link');
        console.log(videoLink);

    });

    // Load iframe using url from data-video-link attribute
    $('#video-modal').on('shown.bs.modal', function() {
        $('#video-modal .modal-body').append('<iframe id="videoPlayer" src="' + videoLink + '" frameborder="0" width="853px" height="480px"></iframe>');

    });

    // Remove iframe when modal is closed
    $('#video-modal').on('hidden.bs.modal', function() {
        $('#video-modal .modal-body').children("iframe").remove();
    });

});
