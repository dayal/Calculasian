'use strict';
$(function() {

    $('#videoModal').on('shown.bs.modal', function() {
        if ($('#videoModal iframe').size() === 0) {
            $('#videoModal .modal-body').append('<iframe id="videoPlayer" src="https://youtube.com/embed/czXUyd10soY?enablejsapi=1&autoplay=0&amp;controls=1&amp;showinfo=0&amp;autohide=1" frameborder="0" width="853px" height="480px"></iframe>');
        }
    });

    // Pause video when modal is closed
    $('#videoModal').on('hidden.bs.modal', function() {
        $('#videoPlayer')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');   
    });
});
