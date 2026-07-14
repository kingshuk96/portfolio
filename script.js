// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navlinks = document.getElementById('navlinks');

if (menuToggle && navlinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navlinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navlinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal sections on scroll
const revealTargets = document.querySelectorAll('.section, .hero');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

revealTargets.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Hero renders immediately (avoid blank first paint)
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(() => {
      hero.style.opacity = '1';
      hero.style.transform = 'none';
    });
  }
});
