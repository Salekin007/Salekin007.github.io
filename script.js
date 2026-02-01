// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

// Get DOM elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Add scrolled class to navbar on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active link highlighting based on scroll position
const sections = document.querySelectorAll('.section, .hero');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

// Add fade-in animation on scroll for cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards for animation
const animatedElements = document.querySelectorAll(
  '.about-card, .skill-card, .project-card, .contact-card, .experience-card'
);

animatedElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ============================================
// DYNAMIC TYPING EFFECT FOR HERO TITLE (OPTIONAL)
// ============================================

// Add subtle parallax effect to hero blobs
document.addEventListener('mousemove', (e) => {
  const blobs = document.querySelectorAll('.gradient-blob');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 20;
    blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// ============================================
// SKILL CARD CLICK EFFECT
// ============================================

document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', function() {
    // Add ripple effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// ============================================
// PREVENT DEFAULT BEHAVIOR FOR EMPTY LINKS
// ============================================

document.querySelectorAll('a[href="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => e.preventDefault());
});

console.log('Portfolio website loaded successfully!');
