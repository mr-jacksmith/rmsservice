let windowInnerWidthActiveSubMenu = window.innerWidth;

const navActiveItems = document.querySelectorAll('.nav-active-item')

function activeItem (n) {
    windowInnerWidthActiveSubMenu = window.innerWidth;
    if (windowInnerWidthActiveSubMenu < 1200) {
        if (navActiveItems[n-1].classList.contains('active')) {
            navActiveItems[n-1].classList.remove('active')
        } else {
            navActiveItems[n-1].classList.add('active')
        }
    }
}