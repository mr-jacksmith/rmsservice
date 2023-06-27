let slideIndexService = 1;
let windowInnerWidthWindow = window.innerWidth;
let maxheightDetService = NaN

window.addEventListener('load', (event) => {
    if (windowInnerWidthWindow < 768) {
        showSlidesWindow(slideIndexService);
    }
})

function plusSlidesWindow(n) {
    showSlidesWindow(slideIndexService += n);
}

function currentSlideWindow(n) {
    showSlidesWindow(slideIndexService = n)
}

function showSlidesWindow(n) {
    let i;
    let slides = document.getElementsByClassName('window');
    let dots = document.getElementsByClassName('dot-windows');
    let maxheight = 0

    if (n > slides.length) {
        slideIndexService = 1
    }

    if (n < 1) {
        slideIndexService = slides.length
    }

    for (i=0; i<slides.length; i++) {
        if (isNaN(maxheightDetService)) {
            slides[i].style.display = "grid";
            slides[i].style.height = "auto";
            currentHeight = parseFloat(window.getComputedStyle(slides[i], null).height)
            if (currentHeight > maxheight){
                maxheight = currentHeight
            }
        }
        slides[i].style.display = "none";
    }
    
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (isNaN(maxheightDetService)) {
        maxheightDetService = maxheight
    }
    slides[slideIndexService-1].style.display = "grid";
    slides[slideIndexService-1].style.height = maxheightDetService + "px"
    dots[slideIndexService-1].className += " active";
}

window.addEventListener('resize', startWindow);

function startWindow() {
    windowInnerWidthWindow = window.innerWidth;
    if (windowInnerWidthWindow > 768) {
        let slides = document.getElementsByClassName('window');

        for (i=0; i<slides.length; i++) {
            slides[i].style.display = "grid";
            slides[i].style.height = "auto"
        }
    }
    else {
        showSlidesWindow(slideIndexService);
    }
}