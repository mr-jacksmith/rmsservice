let slideIndexDoor = 1;
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth < 768)
    showSlidesDoor(slideIndexDoor);

function plusSlidesDoor(n) {
    showSlidesDoor(slideIndexDoor += n);
}

function currentSlideDoor(n) {
    showSlidesDoor(slideIndexDoor = n)
}

function showSlidesDoor(n) {
    let i;
    let slides = document.getElementsByClassName('door');
    let dots = document.getElementsByClassName('dot-doors');
    let maxheight = 0

    if (n > slides.length) {
        slideIndexDoor = 1
    }

    if (n < 1) {
        slideIndexDoor = slides.length
    }

    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "grid";
        slides[i].style.height = "auto";
        currentHeight = parseFloat (window.getComputedStyle(slides[i], null).height)
        if (currentHeight > maxheight){
            maxheight = currentHeight
        }
        slides[i].style.display = "none";
    }
    
    for (i=0; i<dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexDoor-1].style.display = "grid";
    slides[slideIndexDoor-1].style.height = maxheight + "px"
    dots[slideIndexDoor-1].className += " active";
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
        showSlidesDoor(slideIndexDoor);
    }
}