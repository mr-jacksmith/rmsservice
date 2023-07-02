let slideIndexService = 3;
let windowInnerWidthService = window.innerWidth;
let maxheightDetService = NaN

window.addEventListener('load', (event) => {
    if (windowInnerWidthService < 768) {
        showSlidesService(slideIndexService);
    }
})

function plusSlidesService(n) {
    showSlidesService(slideIndexService += n);
}

function currentSlideService(n) {
    showSlidesService(slideIndexService = n)
}

function showSlidesService(n) {
    let i;
    let slides = document.getElementsByClassName('service');
    let dots = document.getElementsByClassName('dot-service');
    let maxheight = 0

    if (n > slides.length-2) {
        slideIndexService = 3
    }

    if (n < 3) {
        slideIndexService = slides.length-2
    }

    for (i=2; i<slides.length-2; i++) {
        if (isNaN(maxheightDetService)) {
            slides[i].style.display = "flex";
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
    slides[slideIndexService-1].style.display = "flex";
    slides[slideIndexService-1].style.height = maxheightDetService + "px"
    dots[slideIndexService-3].className += " active";
}

window.addEventListener('resize', startService);

function startService() {
    windowInnerWidthService = window.innerWidth;
    if (windowInnerWidthService > 768) {
        let slides = document.getElementsByClassName('service');

        for (i=2; i<slides.length-2; i++) {
            slides[i].style.display = "flex";
            slides[i].style.height = "auto"
        }
    }
    else {
        showSlidesService(slideIndexService);
    }
}