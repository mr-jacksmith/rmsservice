let slideIndexTechDoor = 1;

showSlideTechDoor(slideIndexTechDoor);

function plusSlideTechDoor(n) {
    showSlideTechDoor(slideIndexTechDoor += n);
}

function currentSlideTechDoor(n) {
    showSlideTechDoor(slideIndexTechDoor = n)
}

function showSlideTechDoor(n) {
    let i;
    let slides = document.getElementsByClassName('tech-door');

    if (n > slides.length) {
        slideIndexTechDoor = 1
    }

    if (n < 1) {
        slideIndexTechDoor = slides.length
    }

    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndexTechDoor-1].style.display = "block";
}