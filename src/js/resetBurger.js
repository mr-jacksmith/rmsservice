const fixedObject4reset = document.querySelector('#fixed')
const burger4reset = document.querySelector('#burger')
// const windowInnerWidthResetBurger = window.innerWidth;

document.addEventListener('click', e => {
    windowInnerWidthActiveSubMenu = window.innerWidth;
    if (windowInnerWidthActiveSubMenu < 1200) {
        if (! fixedObject4reset.contains(e.target)) {
            burger4reset.classList.remove('active')
            navigation.style.height = "0px";
            navigation.style.overflow = "hidden"
            navActiveItems.forEach(el => el.classList.remove('active'))
            navigation.style.display = "none";
        }
    }
})