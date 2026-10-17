// Script: small helpers for nav and site behaviour
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');
if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    primaryNav.classList.toggle('show');
  });
}

// Smooth-scrolling for internal links (improves accessibility)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile nav after click
      if (primaryNav && primaryNav.classList.contains('show')) {
        primaryNav.classList.remove('show');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});
