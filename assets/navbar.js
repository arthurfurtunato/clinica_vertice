const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
console.log('Menu toggle:', menuToggle);
menuToggle.addEventListener('click', () => {
  console.log('Menu toggle clicked', menuToggle);
  navLinks.classList.toggle('open');
});