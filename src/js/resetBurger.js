const fixedObject4reset = document.querySelector('#fixed')
const burger4reset = document.querySelector('#burger')

document.addEventListener('click', e => {
    if (! fixedObject4reset.contains(e.target)) {
        burger4reset.classList.remove('active')
        navigation.style.height = "0px";
        navigation.style.overflow = "hidden"
        navActiveItems.forEach(el => el.classList.remove('active'))
        
        setTimeout(() => {
        navigation.style.display = "none";
        }, 10);
    }
})