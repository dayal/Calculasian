'use strict';
$(function() {

    configureKwicks();

});

function configureKwicks() {
    var $kwicks = $('.kwicks').kwicks({
        // TODO: show full image
        maxSize: '50%',
        behavior: 'menu',
        duration: 1000
    });

    // set height, imageWidth, imageMargin during initialization and window resizing
    setImageStyle($kwicks);

    $(window).resize(function() {
        setImageStyle($kwicks);
    });

    // clear margin when image is expanded
    $kwicks.on('expand.kwicks', function(e, data) {
        if (data.expanded) {
            // reset margin except the expanded image
            setImageMargin();
            $(data.expanded).find('img').css({
                // TODO: needs to be set for smaller screen sizes
                'margin-left': 0
            });
        } else {
            // reset margin
            setImageMargin();
        }
    });

}

function setImageStyle($kwicks) {
    var kwicksWidth;
    kwicksWidth = $kwicks.width();
    $('.kwicks > li > figure > img').css({
        'height': (200 + kwicksWidth / 5) + 'px'
    });
    setImageMargin();
}

function setImageMargin() {
    var imageWidth = $('.kwicks > li > figure > img').width();
    $('#zhiyao').css({
        'margin-left': imageWidth * -0.25 + 'px'
    });
    $('#chen').css({
        'margin-left': imageWidth * -0.25 + 'px'
    });
    $('#ziming').css({
        'margin-left': imageWidth * -0.6 + 'px'
    });
    $('#xu').css({
        'margin-left': imageWidth * -0.5 + 'px'
    });
    $('#bob').css({
        'margin-left': imageWidth * -0.45 + 'px'
    });
    $('#david').css({
        'margin-left': imageWidth * -0.6 + 'px'
    });
    $('#yifei').css({
        'margin-left': imageWidth * -0.3 + 'px'
    });
}
