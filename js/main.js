$(function(){

    //слайдеры
    $('.header-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>',

        responsive: [ //adaptive
            {
                breakpoint: 361, //width
                settings: {
                    dots: false,
                    arrows: false,
                    autoplay: true, //автопереключение слайдера
                    autoplaySpeed: 2000,
                }
            }
        ]
    });


    $('.ordering__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.ordering__content',
        vertical: true, //слайдер по вертикали
        prevArrow: '<button type="button" class="ordering-prev"><img src="images/arrow-prev-order.svg" alt=""></button>',
        nextArrow: '<button type="button" class="ordering-next"><img src="images/arrow-next-order.svg" alt=""></button>',

        responsive: [
            {
                breakpoint: 891, //screen width
                settings: {
                    vertical: false,
                    slidesToShow: 3,
                    arrows: false,
                    //centerMode: true
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    vertical: false,
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 430,
                settings: {
                    vertical: false,
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            },
        ]
    });

    $('.ordering__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.ordering__name',
        fade: true,
        arrows: false,
    });
    
    //бургер
    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active'); //при переключении добавлять класс
        $('.menu__btn').toggleClass('menu__btn--active'); //смена анимации при нажатии на кнопку бургера
    });




});