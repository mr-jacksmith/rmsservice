let menuBtn = document.querySelector('#burger');
let hideMenu = document.querySelector('#hide-menu');
let logo = document.querySelector('#logo');
let nav = document.querySelector('#navigation');
let navDecendent = document.querySelector('nav');
let blackBg = document.querySelector('#black-bg');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    hideMenu.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');
    navDecendent.classList.toggle('active');
    blackBg.classList.toggle('active');
})