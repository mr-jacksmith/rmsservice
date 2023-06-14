let menuBtn = document.getElementById('burger');
let nav = document.querySelector('.navbar');
// let blackBg = document.querySelector('#black-bg');


menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    nav.classList.toggle('active');
    // blackBg.classList.toggle('active');
})
