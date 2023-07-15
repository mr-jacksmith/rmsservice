let slideIndexEliteDoor = 1;
let slideIndexComfortDoor = 1;
let slideIndexTermospaceDoor = 1;

showSlideTechDoor("elite", slideIndexEliteDoor);
showSlideTechDoor("comfort", slideIndexComfortDoor);
showSlideTechDoor("termospace", slideIndexTermospaceDoor);

function plusSlideTechDoor(type, n) {
    if (type == 'elite') {
        showSlideTechDoor(type, slideIndexEliteDoor += n);
    } else if (type == 'comfort') {
        showSlideTechDoor(type, slideIndexComfortDoor += n);
    } else {
        showSlideTechDoor(type, slideIndexTermospaceDoor += n);
    }
}

function showSlideTechDoor(type, n) {
    if (type == "elite") {
        let slidesElite = document.getElementsByClassName('elite-door');
        if (n > slidesElite.length) {
            slideIndexEliteDoor = 1
        }
    
        if (n < 1) {
            slideIndexEliteDoor = slidesElite.length
        }
    
        for (i=0; i<slidesElite.length; i++) {
            slidesElite[i].style.display = "none";
        }
    
        slidesElite[slideIndexEliteDoor-1].style.display = "block";

    } else if (type == "comfort") {
        let slidesComfort = document.getElementsByClassName('comfort-door');
        if (n > slidesComfort.length) {
            slideIndexComfortDoor = 1
        }
    
        if (n < 1) {
            slideIndexComfortDoor = slidesComfort.length
        }
    
        for (i=0; i<slidesComfort.length; i++) {
            slidesComfort[i].style.display = "none";
        }
    
        slidesComfort[slideIndexComfortDoor-1].style.display = "block";

    } else {
        let slidesTermospace = document.getElementsByClassName('termospace-door');
        if (n > slidesTermospace.length) {
            slideIndexTermospaceDoor = 1
        }
    
        if (n < 1) {
            slideIndexTermospaceDoor = slidesTermospace.length
        }
    
        for (i=0; i<slidesTermospace.length; i++) {
            slidesTermospace[i].style.display = "none";
        }
    
        slidesTermospace[slideIndexTermospaceDoor-1].style.display = "block";

    }
}