let slideIndex = 1;
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth < 768)
    showSlidesDoor(slideIndex);

function plusSlides(n) {
    showSlidesDoor(slideIndex += n);
}

function currentSlide(n) {
    showSlidesDoor(slideIndex = n)
}

function showSlidesDoor(n) {
    let i;
    let slides = document.getElementsByClassName('door');
    let dots = document.getElementsByClassName('dot-doors');
    let maxheight = "0"

    if (n > slides.length) {
        slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "grid";
        slides[i].style.height = "auto";
        currentHeight = window.getComputedStyle(slides[i], null).height
        if (currentHeight > maxheight){
            maxheight = currentHeight
        }
        slides[i].style.display = "none";
    }
    
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "grid";
    slides[slideIndex-1].style.height = maxheight
    dots[slideIndex-1].className += " active";
}

window.addEventListener('resize', start);

function start() {
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 768) {
        let slides = document.getElementsByClassName('door');

        for (i=0; i<slides.length; i++) {
            slides[i].style.display = "grid";
            slides[i].style.height = "auto"
        }
    }
    else {
        showSlidesDoor(slideIndex);
    }
}