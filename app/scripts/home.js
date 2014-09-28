'use strict';

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

function setKwicksStyle($kwicks) {
    var kwicksWidth;
    kwicksWidth = $kwicks.width();
    $('.kwicks > li > figure > img').css({
        'height': (200 + kwicksWidth / 5) + 'px'
    });
    setImageMargin();
    $('.about-section').css({
        'height': $('.kwicks > li').height() + $('.about-section > h2').outerHeight(true) + $('.about-section > p').outerHeight(true) + 80 + 'px'
    });

}

function configureKwicks() {
    var $kwicks = $('.kwicks').kwicks({
        // TODO: show full image
        maxSize: '50%',
        behavior: 'menu',
        duration: 1000
    });

    // set height, imageWidth, imageMargin during initialization and window resizing
    setKwicksStyle($kwicks);

    $(window).resize(function() {
        setKwicksStyle($kwicks);
    });

    // clear margin when image is expanded
    $kwicks.on('expand.kwicks', function(e, data) {
        if (data.expanded) {
            // reset margin except the expanded image
            setImageMargin();
            // shift images to the left for smaller screens
            if ($(window).width() < 1200) {
                $(data.expanded).find('#zhiyao, #chen, #yifei').css({
                    'margin-left': '-50px'
                });
                $(data.expanded).find('#xu, #bob').css({
                    'margin-left': '-150px'
                });
                $(data.expanded).find('#david, #ziming').css({
                    'margin-left': '-200px'
                });
            } else {
                $(data.expanded).find('img').css({
                    'margin-left': 0
                });
            }
        } else {
            // reset margin
            setImageMargin();
        }
    });

}

$(function() {
    configureKwicks();
});