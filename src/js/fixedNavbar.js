window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.fixed');
    var scrollTop = document.documentElement.scrollTop;
    const windowInnerHeight = window.innerHeight
  
    if (scrollTop > 200) {
      navbar.classList.add('pp');
    } else {
      navbar.classList.remove('pp');
    }
  });