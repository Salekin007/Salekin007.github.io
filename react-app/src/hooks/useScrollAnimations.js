import { useEffect, useRef } from 'react';

export function useScrollAnimations() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.tool-card, .cert-card, .timeline-item, .project-card, .contact-card, .expertise-card, .qa-card'
    );

    animatedElements.forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.transitionDelay = `${Math.min(index * 0.05, 0.3)}s`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

export function useSkillBarAnimations() {
  useEffect(() => {
    const skillBars = document.querySelectorAll('.skill-progress');

    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fillBar 1.5s ease forwards';
          }
        });
      },
      { threshold: 0.5 }
    );

    skillBars.forEach((bar) => skillObserver.observe(bar));

    return () => skillObserver.disconnect();
  }, []);
}

export function useParallaxEffect() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const particles = document.querySelectorAll('.particle');
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      particles.forEach((particle, index) => {
        const factor = (index + 1) * 0.5;
        particle.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
}

export function useProjectCardTilt() {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    };

    const handleMouseLeave = (card) => {
      card.style.transform = '';
    };

    projectCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
      card.addEventListener('mouseleave', () => handleMouseLeave(card));
    });

    return () => {
      projectCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
