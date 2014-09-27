'use strict';
$(function() {

    var videoLink;
    $(document).on('click', '.btn-default', function () {
        videoLink = $(this).data('video-link');
        console.log(videoLink);

    });

    // Load iframe using url from data-video-link attribute
    $('#videoModal').on('shown.bs.modal', function() {
        $('#videoModal .modal-body').append('<iframe id="videoPlayer" src="' + videoLink + '" frameborder="0" width="853px" height="480px"></iframe>');

    });

    // Remove iframe when modal is closed
    $('#videoModal').on('hidden.bs.modal', function() {
        $('#videoModal .modal-body').children("iframe").remove();
    });

});
