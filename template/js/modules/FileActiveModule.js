export default function FileActiveModule() {


    $('.tab-link-mobi').on('click', function () {
        $('.tab-link').slideToggle();
    });

    if ($('.questions').length) {
        $('.ques-tt').on('click', function () {
            $(this).parent('.ques-box').toggleClass('active');
            $(this).next('.ques-cont').slideToggle();
        });
    }

    if ($('.bx-video').length) {
        let videos = document.querySelectorAll('.s-video');

        if (videos) {
            for (let video of videos) {
                video.onplay = function () {
                    video.parentElement.classList.add('playing');
                }
                video.onpause = function () {
                    video.parentElement.classList.remove('playing');
                }
            }

        }

    }

    if ($('.vd-catalog').length) {
        const $main = $('.vd-catalog');

        $(document).mouseup(function (e) {
            if (!$main.is(e.target) && $main.has(e.target).length === 0) {
                $main.removeClass('active');
            }
        });

        $('.vd-title').on('click', function () {
            $main.toggleClass('active');
        });

        $('.v-title').on('click', function () {
            $(this).parent('.vd-item').toggleClass('active');
            $(this).closest('.vd-item').siblings().removeClass('active');
        });

    }

    if ($('.header-user').length) {
        const $main = $('.header-user');
        $(document).mouseup(function (e) {
            if (!$main.is(e.target) && $main.has(e.target).length === 0) {
                $main.removeClass('active');
            }
        });

        $('.user-title').on('click', function () {
            $main.toggleClass('active')
        });
    }

    $('#test-tt').attr('data-content');

    const width = $(window).width();
    if ($('.header-cate-mobi').length > 0 && width < 1200) {
        $('.header-catalog').prependTo('.header-cate-mobi');


        $('.cate-title').on('click', function (e) {
            // $('.header-catalog').toggleClass('active');


        });

        const $main = $('.header-catalog');

        $(document).mouseup(function (e) {
            if (!$main.is(e.target) && $main.has(e.target).length === 0) {
                $main.removeClass('active');
                $main.find(".cate-content").slideUp();
            }
        });

        $('.cate-title').on('click', function () {
            $main.toggleClass('active');
            $main.find(".cate-content").slideToggle();
        });



        $('.cate-item img').on('click', function () {
            $(this).toggleClass('active');
            // $(this).closest('.drop').find('.sub-cate').slideToggle();
            $(this).parent().next('.sub-cate').stop().slideToggle();
        });

    }

}