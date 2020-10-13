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


    // при нажатии на кнопку scrollup
    $('.scrollup').click(function () {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

// при прокрутке окна (window)
    $(window).scroll(function () {
        // если пользователь прокрутил страницу более чем на 200px
        if ($(this).scrollTop() > 300) {
            // то сделать кнопку scrollup видимой
            $('.scrollup').fadeIn();
        }
        // иначе скрыть кнопку scrollup
        else {
            $('.scrollup').fadeOut();
        }
    });


 //accordion faq
    $('body').on('click', '.faq-item', function (e) {
        e.preventDefault();

        let parent = $(this).closest('.faq-item');
        let accordion = $(this).closest('.faq-accordion');

        if (parent.hasClass('active')) {
            parent.removeClass('active');
            parent.find('.faq-data').slideUp(300)
        } else {
            accordion.find('.faq-item').removeClass('active');
            accordion.find('.faq-data').slideUp(300);

            parent.addClass('active');
            parent.find('.faq-data').slideDown(300)
        }
    })

});


