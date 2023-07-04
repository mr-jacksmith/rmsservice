let slideIndexMetalCardDoor = 1;
let slideIndexAlumCardDoor = 1;
let windowInnerWidthCardDoor = window.innerWidth;


showSlideCardDoor('metall', slideIndexMetalCardDoor);
showSlideCardDoor('alum', slideIndexAlumCardDoor);


function plusSlideCardDoor(type, n) {
    if (type == 'metall') {
        showSlideCardDoor(type, slideIndexMetalCardDoor += n);
    } else {
        showSlideCardDoor(type, slideIndexAlumCardDoor += n);
    }
}


function showSlideCardDoor(type, n) {
    let i;

    if (type == 'metall') {
        let wl1 = document.getElementsByClassName('wrapped-loop-1');

        if (n > wl1.length) {
            slideIndexMetalCardDoor = 1
        }
    
        if (n < 1) {
            slideIndexMetalCardDoor = wl1.length
        }
    
        for (i=0; i<wl1.length; i++) {
            wl1[i].style.display = "none";
            wl1[i].style.height = "auto"
        }
    
        wl1[slideIndexMetalCardDoor-1].style.display = "flex";
        wl1[slideIndexMetalCardDoor-1].style.height = "100%"
    } else {
        let wl2 = document.getElementsByClassName('wrapped-loop-2');

        if (n > wl2.length) {
            slideIndexAlumCardDoor = 1
        }
    
        if (n < 1) {
            slideIndexAlumCardDoor = wl2.length
        }
    
        for (i=0; i<wl2.length; i++) {
            wl2[i].style.display = "none";
            wl2[i].style.height = "auto"
        }
    
        wl2[slideIndexAlumCardDoor-1].style.display = "flex";
        wl2[slideIndexAlumCardDoor-1].style.height = "100%"
    }
}

// window.addEventListener('resize', startCardDoor);

// function startCardDoor() {
//     windowInnerWidthCardDoor = window.innerWidth;
//     if (windowInnerWidthCardDoor > 1440) {
//         let slides = document.getElementsByClassName('card-door');

//         for (i=0; i<slides.length; i++) {
//             slides[i].style.display = "flex";
//             slides[i].style.height = "72vh"
//         }
//     }
//     else {
//         showSlideCardDoor(slideIndexCardDoor);
//     }
// }