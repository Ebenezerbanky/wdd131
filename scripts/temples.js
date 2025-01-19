// Dynamic footer updates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  hamburger.textContent = navMenu.classList.contains('show-menu') ? '✖' : '☰';
});

// CSS for the hamburger menu (add to temples.css)
document.styleSheets[0].insertRule(`
  .show-menu {
    display: block !important;
  }
`, document.styleSheets[0].cssRules.length);
