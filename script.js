// Fade-in on scroll for sections
const fadeSections = document.querySelectorAll('.fade-section');
const fadeInObserver = new window.IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
fadeSections.forEach(section => fadeInObserver.observe(section));
// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple form handler (no backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
  alert('Thank you for reaching out! I will get back to you soon.');
});

// Subtle hover effect for skills
document.querySelectorAll('.skills-grid span').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.08)';
    skill.style.boxShadow = '0 2px 12px #7fd1b955';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
    skill.style.boxShadow = 'none';
  });
});
