$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        $('.meny__link').toggleClass('active');
    });    
});

//слайдер
new Swiper('.slaider_img', {
    //стрелки
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    //буллеты
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    
});

//слайдер товары
new Swiper('.container_tovars', {
    //стрелки
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },
    //колличество склайдеров
    
    breakpoints:{
        280:{
            slidesPerView:1,
        },
        538:{
            slidesPerView:2,
        },
        900:{
            slidesPerView:3,
        },
        1200:{
            slidesPerView:4,
        }
    },

    //slidesPerView:3,
    loop: true,
    //автоподкрутка
    autoplay: {
        //пауза между прокруткой
        delay:2000,
    }
});

//акардион
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active1");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}