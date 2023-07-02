window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.fixed');
    let scrollTop = document.documentElement.scrollTop;
    const soffMain = document.querySelector('.soff-main');
    const fixed = document.querySelector('.fixed');
    const heightFixed = parseFloat(window.getComputedStyle(fixed, null).height)
    const generalHeight = parseFloat(window.getComputedStyle(soffMain, null).height) + heightFixed
  
    if (scrollTop > generalHeight) {
      navbar.classList.add('pre-pp');
    } else {
      navbar.classList.remove('pre-pp');
    }

    if (scrollTop > (heightFixed*2)) {
      navbar.classList.add('pp');
    } else {
      navbar.classList.remove('pp');
    }
  });