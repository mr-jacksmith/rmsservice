let cardsDoors = document.getElementsByClassName('card-door');

const openCard = (n) => {
    cardsDoors[n-1].classList.toggle('active');
}