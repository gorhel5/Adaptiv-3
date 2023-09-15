const navButton = document.querySelector('.nav-button');
const nav = document.querySelector('.nav');
const navImg = document.querySelector('.nav-button-img');


navButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    if (navButton.classList.toggle('open')) {
        navImg.src = './img/nav-close.svg'; 
    } else {
        navImg.src = './img/nav-open.svg';
    }
} );