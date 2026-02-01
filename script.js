// Wrap site initialization so we can run it after components are loaded
function initSite() {
  // ============================================
  // NAVIGATION FUNCTIONALITY
  // ============================================

  const navbar = document.getElementById('navbar');
  const navMenu = document.getElementById('nav-menu');
  const hamburger = document.getElementById('hamburger');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTop = document.getElementById('back-to-top');

  // Toggle mobile menu
  function toggleMenu() {
    if (!hamburger || !navMenu || !mobileOverlay) return;
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  }

  if (hamburger) hamburger.addEventListener('click', toggleMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMenu);

  // Close mobile menu when clicking on a nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Add scrolled class to navbar on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove scrolled class
    if (navbar) {
      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTop) {
      if (currentScroll > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }

    lastScroll = currentScroll;
  });

  // Back to top functionality
  if (backToTop) backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Active link highlighting based on scroll position
  const sections = document.querySelectorAll('.section, .hero');

  function updateActiveLink() {
    let current = '';
    const scrollPosition = window.pageYOffset + 150;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Initial call

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offset = 80; // Navbar height
          const targetPosition = target.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================

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

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(
    '.tool-card, .cert-card, .timeline-item, .project-card, .contact-card, .expertise-card'
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${Math.min(index * 0.05, 0.3)}s`;
    observer.observe(el);
  });

  // ============================================
  // SKILL BAR ANIMATIONS
  // ============================================

  const skillBars = document.querySelectorAll('.skill-progress');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fillBar 1.5s ease forwards';
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });

  // ============================================
  // COUNTER ANIMATION FOR STATS
  // ============================================

  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current) + '+';
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target + '+';
      }
    };

    updateCounter();
  }

  const statNumbers = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.textContent);
        entry.target.classList.add('counted');
        animateCounter(entry.target, target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => statsObserver.observe(stat));

  // ============================================
  // PARALLAX EFFECT (OPTIONAL)
  // ============================================

  // Add subtle parallax effect to hero particles
  document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    particles.forEach((particle, index) => {
      const factor = (index + 1) * 0.5;
      particle.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
  });

  // ============================================
  // PROJECT CARD TILT EFFECT
  // ============================================

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ============================================
  // TESTIMONIAL SLIDER (AUTO-ROTATE)
  // ============================================

  // Testimonials section removed - placeholder for future implementation

  // ============================================
  // CONTACT CARD COPY TO CLIPBOARD
  // ============================================

  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      // Just allow default behavior - opens email client
    });
  }

  // ============================================
  // SKILL CARD INTERACTIONS
  // ============================================

  const toolCards = document.querySelectorAll('.tool-card');

  toolCards.forEach(card => {
    card.addEventListener('click', function() {
      // Add click feedback
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 150);
    });
  });

  // ============================================
  // PREVENT DEFAULT FOR EMPTY LINKS
  // ============================================

  document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => e.preventDefault());
  });

  // ============================================
  // MODAL (TEST PLAN) HANDLERS - Lead SQA interactions
  // ============================================

  const modalButtons = document.querySelectorAll('.view-testplan');
  const modals = document.querySelectorAll('.modal');

  function openModal(id, triggerButton) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.removeAttribute('hidden');
    modal.setAttribute('aria-hidden', 'false');
    triggerButton && triggerButton.setAttribute('aria-expanded','true');
    // minimal focus management
    const focusable = modal.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
    if (focusable.length) focusable[0].focus();
  }

  function closeModal(modal, triggerButton) {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    modal.setAttribute('aria-hidden', 'true');
    triggerButton && triggerButton.setAttribute('aria-expanded','false');
    triggerButton && triggerButton.focus();
  }

  modalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const project = btn.getAttribute('data-project');
      openModal(`modal-${project}`, btn);
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target.matches('[data-close], .modal-backdrop')) {
        const btn = document.querySelector(`.view-testplan[data-project="${modal.id.replace('modal-','')}"]`);
        closeModal(modal, btn);
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modals.forEach(modal => {
        if (!modal.hasAttribute('hidden')) {
          const btn = document.querySelector(`.view-testplan[data-project="${modal.id.replace('modal-','')}"]`);
          closeModal(modal, btn);
        }
      });
    }
  });


}

// Initialize when components are ready or on DOMContentLoaded
const hasComponents = !!document.querySelector('[data-component], [data-src]');
if (hasComponents) {
  document.addEventListener('components:loaded', initSite, { once: true });
} else {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite, { once: true });
  } else {
    initSite();
  }
}

// Robust loading-screen dismiss: works whether loading component is present before or after components load
function hideLoadingScreenIfPresent() {
  const loadingScreen = document.getElementById('loading-screen');
  if (!loadingScreen) return;
  loadingScreen.classList.add('hidden');
  setTimeout(() => {
    if (loadingScreen.parentNode) loadingScreen.parentNode.removeChild(loadingScreen);
  }, 700);
}

// Call on window load
window.addEventListener('load', () => setTimeout(hideLoadingScreenIfPresent, 600));
// Call when components loaded (in case the loading component was injected)
document.addEventListener('components:loaded', hideLoadingScreenIfPresent, { once: true });
// Safety fallback
setTimeout(hideLoadingScreenIfPresent, 5000);

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 14px; color: #6b7280;');
console.log('%cInterested in my work? Let\'s connect!', 'font-size: 12px; color: #6b7280;');
