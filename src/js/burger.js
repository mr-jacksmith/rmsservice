let menuBtn = document.getElementsByClassName('burger');
let hideMenu = document.querySelector('#hide-menu');
let nav = document.querySelector('#navigation');
let navDecendent = document.querySelector('.nav');
let blackBg = document.querySelector('#black-bg');

for (let i=0; i<menuBtn.length; i++) {
    menuBtn[i].addEventListener('click', function(){
        for (let k=0; k<menuBtn.length; k++) {
            menuBtn[k].classList.toggle('active');
        }
        hideMenu.classList.toggle('active');
        nav.classList.toggle('active');
        navDecendent.classList.toggle('active');
        blackBg.classList.toggle('active');
    })
}

