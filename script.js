const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceButton: 30,

    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0: {
            slidesPerView:1
        },
        620: {
            slidesPerView:1
        },
        1024:{
            slidesPerView: 1
        }
    }
});