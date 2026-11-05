const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburgerBtn.addEventListener('click', function () {
  hamburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('open');
});

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('open');
  });
});