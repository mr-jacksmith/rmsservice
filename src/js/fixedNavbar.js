window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.fixed');
    var scrollTop = document.documentElement.scrollTop;
  
    if (scrollTop > 300) {
      navbar.classList.add('pp');
    } else {
      navbar.classList.remove('pp');
    }
  });