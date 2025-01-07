let imageCounter = 11; // Start from 5 since 1 to 4 are already used

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
    // Create a new card-item div
    const newCard = document.createElement('div');
    newCard.className = 'card-item swiper-slide';

    // Add image to the card with incremented random number
    const img = document.createElement('img');
    img.src = `https://picsum.photos/600/280?random=${imageCounter++}`;
    img.alt = 'Image';
    img.className = 'image';

    newCard.appendChild(img);

    // Append the new card to the card-list
    const cardList = document.querySelector('.card-list');
    cardList.appendChild(newCard);

    // Update Swiper
    swiper.update();
};

// Add event listener to the next button
document.querySelector('.swiper-button-next').addEventListener('click', addNewCard);

setTimeout(function() {
    document.querySelector('.tip').remove();
}, 5000);