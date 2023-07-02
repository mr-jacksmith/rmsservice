let windowInnerWidthActiveSubMenu = window.innerWidth;

const navActiveItems = document.querySelectorAll('.nav-active-item')

const activeItem = (n) => {
    windowInnerWidthActiveSubMenu = window.innerWidth;
    if (windowInnerWidthActiveSubMenu < 1200) {
        if (navActiveItems[n-1].classList.contains('active')) {
            navActiveItems[n-1].classList.remove('active')
        } else {
            navActiveItems[n-1].classList.add('active')
            navActiveItems[n%2].classList.remove('active')
        }
    }
}