window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.scrollY;
  
    if (scrolled > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });
