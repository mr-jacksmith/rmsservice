let slideIndexCardDoor = 1;
let windowInnerWidthCardDoor = window.innerWidth;

window.addEventListener('load', (event) => {
    if (windowInnerWidthCardDoor < 1441) {
        showSlideCardDoor(slideIndexCardDoor);
    }
})

function plusSlideCardDoor(n) {
    showSlideCardDoor(slideIndexCardDoor += n);
}

function currentSlideCardDoor(n) {
    showSlideCardDoor(slideIndexCardDoor = n)
}

function showSlideCardDoor(n) {
    let i;
    let slides = document.getElementsByClassName('card-door');
    let dots = document.getElementsByClassName('dot-card-door');

    if (n > slides.length) {
        slideIndexCardDoor = 1
    }

    if (n < 1) {
        slideIndexCardDoor = slides.length
    }

    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexCardDoor-1].style.display = "flex";
    dots[slideIndexCardDoor-1].className += " active";
}

window.addEventListener('resize', startCardDoor);

function startCardDoor() {
    windowInnerWidthCardDoor = window.innerWidth;
    if (windowInnerWidthCardDoor > 1440) {
        let slides = document.getElementsByClassName('card-door');

        for (i=0; i<slides.length; i++) {
            slides[i].style.display = "flex";
            slides[i].style.height = "72vh"
        }
    }
    else {
        showSlideCardDoor(slideIndexCardDoor);
    }
}