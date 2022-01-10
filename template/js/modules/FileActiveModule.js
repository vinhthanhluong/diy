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
    
}