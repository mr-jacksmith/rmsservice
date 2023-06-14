let slideIndexWindow = 1;
let windowInnerWidthWindow = window.innerWidth;
if (windowInnerWidthWindow < 768)
    showSlidesWindow(slideIndexWindow);

function plusSlidesWindow(n) {
    showSlidesWindow(slideIndexWindow += n);
}

function currentSlideWindow(n) {
    showSlidesWindow(slideIndexWindow = n)
}

function showSlidesWindow(n) {
    let i;
    let slides = document.getElementsByClassName('window');
    let dots = document.getElementsByClassName('dot-windows');
    let maxheight = "0"

    if (n > slides.length) {
        slideIndexWindow = 1
    }

    if (n < 1) {
        slideIndexWindow = slides.length
    }

    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "grid";
        slides[i].style.height = "auto";
        currentHeight = parseFloat(window.getComputedStyle(slides[i], null).height)
        if (currentHeight > maxheight){
            maxheight = currentHeight
        }
        slides[i].style.display = "none";
    }
    
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexWindow-1].style.display = "grid";
    slides[slideIndexWindow-1].style.height = maxheight + "px"
    dots[slideIndexWindow-1].className += " active";
}

window.addEventListener('resize', start);

function start() {
    windowInnerWidthWindow = window.innerWidth;
    if (windowInnerWidthWindow > 768) {
        let slides = document.getElementsByClassName('window');

        for (i=0; i<slides.length; i++) {
            slides[i].style.display = "grid";
            slides[i].style.height = "auto"
        }
    }
    else {
        showSlidesWindow(slideIndexWindow);
    }
}