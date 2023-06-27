window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.fixed');
    var scrollTop = document.documentElement.scrollTop;
  
    if (scrollTop > 1000) {
      navbar.classList.add('pp');
    } else {
      navbar.classList.remove('pp');
    }
  });