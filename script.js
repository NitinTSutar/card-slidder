let imageCounter = 11; 

const swiper = new Swiper('.slider-wrapper', {
    loop: false,
    grabCursor: false,
    spaceBetween: 30,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        620: {
            
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});

const addNewCard = () => {

    const newCard = document.createElement('div');
    newCard.className = 'card-item swiper-slide';

    const img = document.createElement('img');
    img.src = `https://picsum.photos/600/280?random=${imageCounter++}`;
    img.alt = 'Image';
    img.className = 'image';

    newCard.appendChild(img);

    const cardList = document.querySelector('.card-list');
    cardList.appendChild(newCard);

    swiper.update();
};

document.querySelector('.swiper-button-next').addEventListener('click', addNewCard);

setTimeout(function() {
    document.querySelector('.tip').remove();
}, 5000);