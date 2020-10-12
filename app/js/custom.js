$(function () {


//smooth scroll
    $(".navigate-btn").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        $('.hidden-menu').removeClass('show-menu');
        $('.menu-burger').toggleClass('hidden');
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });


//left side menu
    $(".mob-menu-link").on("click", function (event) {
        $('.slide-menu-left').toggleClass('active');
        $('.overlay-slide-form').toggleClass('active');
        $('body').addClass('lock');
    });
    $(".slide-menu-close").on("click", function (event) {
        $('.slide-menu-left').removeClass('active');
        $('.overlay-slide-form').removeClass('active');
        $('body').removeClass('lock');
    });
    $(".overlay-slide-form").on("click", function (event) {
        $('.slide-menu-left').removeClass('active');
        $('.overlay-slide-form').removeClass('active');
        $('body').removeClass('lock');
    });


//1 slide full width. Autoplay after 3 seconds
    $('.main-page-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });




});


