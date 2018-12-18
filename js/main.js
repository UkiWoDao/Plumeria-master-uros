window.onbeforeunload = function () {
    scrollWindow();
}

function scrollWindow() {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    var slider = $('.slider').bxSlider({
        nextSelector: '.next',
        prevSelector: '.prev',
        nextText: '',
        prevText: '',
        slideSelector: 'div.slide',
        // infiniteLoop: true,
        adaptiveHeight: true,
        keyboardEnabled: false,
        touchEnabled: false,
        wrapperClass: '.main_slider',
        pager: false,
        // auto: true,
        easing: 'ease-out',
        // pause: 4000
    });

    // ***************************Slider Collage first************************************************************

    var collage_slider_left = $('.collage_slider.left').bxSlider({
        nextText: '',
        prevText: '',
        // infiniteLoop: true,
        adaptiveHeight: true,
        keyboardEnabled: false,
        pager: false,
        auto: false,
        easing: 'ease-out',
        // pause: 4000
        slideSelector: 'div.collage_slide',
        wrapperClass: '.main_collage_slider'
    });

    var collage_slider_right = $('.collage_slider.right').bxSlider({
        nextText: '',
        prevText: '',
        // infiniteLoop: true,
        adaptiveHeight: true,
        keyboardEnabled: false,
        pager: false,
        auto: false,
        easing: 'ease-out',
        // pause: 4000
        slideSelector: 'div.collage_slide',
        wrapperClass: '.main_collage_slider'
    });

    $('.collage_next').click(function (e) {
        e.preventDefault();
        collage_slider_left.goToNextSlide();
        collage_slider_right.goToNextSlide();
    });

    $('.collage_prev').click(function (e) {
        e.preventDefault();
        collage_slider_left.goToPrevSlide();
        collage_slider_right.goToPrevSlide();
    });

    // ***************************Slider collage second**********************************

    var v_collage_slider_left = $('.v_collage_slider.left').bxSlider({
        nextText: '',
        prevText: '',
        // infiniteLoop: true,
        adaptiveHeight: true,
        keyboardEnabled: false,
        pager: false,
        auto: false,
        easing: 'ease-out',
        // pause: 4000
        slideSelector: 'div.v_collage_slide',
        wrapperClass: '.v_main_collage_slider'
    });

    var v_collage_slider_right = $('.v_collage_slider.right').bxSlider({
        nextText: '',
        prevText: '',
        // infiniteLoop: true,
        adaptiveHeight: true,
        keyboardEnabled: false,
        pager: false,
        auto: false,
        easing: 'ease-out',
        // pause: 4000
        slideSelector: 'div.collage_slide',
        wrapperClass: '.main_collage_slider'
    });

    var count = 1;

    $('.v_collage_next').click(function (e) {
        e.preventDefault();
        if (count == 3) {
            count = 1
        } else {
            count += 1;
        }
        $('.pager .numbers').text('0' + count + ' / 03');
        v_collage_slider_left.goToNextSlide();
        v_collage_slider_right.goToNextSlide();
    });

    $('.v_collage_prev').click(function (e) {
        e.preventDefault();
        if (count == 1) {
            count = 3
        } else {
            count -= 1;
        }
        $('.pager .numbers').text('0' + count + ' / 03');
        v_collage_slider_left.goToPrevSlide();
        v_collage_slider_right.goToPrevSlide();
    });

    // ***************************************************************************************

    // $('.bar').velocity({
    //     width: "0"
    // }, {
    //     duration: 4000,
    //     loop: true
    // });

    $('.card').hover(
        function () {
            if (!$('body').hasClass('page_style')) {
                slider.stopAuto();
                $('.card.first').css('transform', 'translateX(50%)');
                $('.card.last').css('transform', 'translateX(-50%)');
                $('.card').addClass('hover');
                // $('.bar').velocity('pause', true);
            }
        },
        function () {
            if (!$('body').hasClass('page_style')) {
                slider.startAuto();
                $('.card.first').css('transform', 'translateX(10%)');
                $('.card.last').css('transform', 'translateX(-10%)');
                $('.card').removeClass('hover');
                // $('.bar').velocity('resume', true);
            }
        });

    function getToSlide(pageData) {
        
        var slide_index = 0;
        switch (pageData) {
            case 'page_one':
                slide_index = 0
                break;
            case 'page_two':
                slide_index = 1
                break;
            case 'page_three':
                slide_index = 2
                break;
            case 'page_four':
                slide_index = 3
                break;
        }
        slider.goToSlide(slide_index);
    }

    function back(e) {
        e.preventDefault();
        var p = $(e.target).attr('data-page');
        if ($('body').hasClass('page_style')) {
            deactivate();
            scrollWindow();
            $('.page').removeClass('page_style');
            $('body').removeClass('page_style');
            if ($(e.target).attr('class') == 'nav')
                back(e);
            else
                slider.startAuto();
        } else {
            if ($(e.target).attr('class') == 'nav')
                getToSlide(p);
            $('body').addClass('page_style');
            $('.card[data-page='+p+']').addClass('page_style');
            $('.page#' + p).addClass('page_style');
            slider.stopAuto();
        }
    };

    $('.card.middle').click(function (e) {back(e)});
    $('.back').click(function (e) {back(e)});
    $('footer .nav').click(function (e) {back(e)});

    $('.darrow').click(function (e) {
        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        window.scroll({
            top: height, 
            left: 0, 
            behavior: 'smooth'
          });
    })

    // Kontrola footera //

    $('.fTab').on('click', function () {
        $(this).toggleClass('active');
    });

    function deactivate() {
        $('.fTab').removeClass('active');
    }

    $(document.body).click( function() {
        deactivate();
    });
    
    $(".fTab").click( function(e) {
        e.stopPropagation();
    });

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
            if(!$('.fTab').hasClass('active'))
                $('.fTab:first').addClass('active');
        }
    });


});

window.onscroll( function () {
    var line = $('.horizontal_divider').offset().top;
});