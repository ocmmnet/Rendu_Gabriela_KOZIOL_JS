const overlay = document.querySelector('.overlay');
const menu = document.getElementById('menu');
const burgerIcon = document.getElementById("burger-icon")
burgerIcon.addEventListener('click', function(){
    menu.classList.toggle('actif');
    overlay.classList.toggle('visible-overlay')
});