const cardsContainer = document.querySelector('.cards');
const leftBtn = document.querySelector('.left-handle');
const rightBtn = document.querySelector('.right-handle');

rightBtn.addEventListener('click', () => {
    cardsContainer.scrollLeft += cardsContainer.offsetWidth - 100;
});

leftBtn.addEventListener('click', () => {
    cardsContainer.scrollLeft -= cardsContainer.offsetWidth - 100;
});



 