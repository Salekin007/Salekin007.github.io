import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { id: 'home', icon: 'fa-home', label: 'Home' },
  { id: 'about', icon: 'fa-user', label: 'About' },
  { id: 'impact', icon: 'fa-chart-line', label: 'Impact' },
  { id: 'expertise', icon: 'fa-star', label: 'Expertise' },
  { id: 'skills', icon: 'fa-cogs', label: 'Skills' },
  { id: 'experience', icon: 'fa-briefcase', label: 'Experience' },
  { id: 'qa', icon: 'fa-vial', label: 'QA' },
  { id: 'projects', icon: 'fa-rocket', label: 'Projects' },
  { id: 'live-proof', icon: 'fa-chart-bar', label: 'Live Proof' },
  { id: 'certifications', icon: 'fa-certificate', label: 'Certifications' },
  { id: 'contact', icon: 'fa-paper-plane', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return true;
  });

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    const handleResize = () => {
      // Close mobile menu when resizing to desktop
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (e) => {
      // Close mobile menu on ESC key
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';

    // Toggle hamburger active class
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      if (newState) {
        hamburger.classList.add('active');
      } else {
        hamburger.classList.remove('active');
      }
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';

    // Remove hamburger active class
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      hamburger.classList.remove('active');
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Get the current route path
  const getPath = (id) => {
    return id === 'home' ? '/' : `/${id}`;
  };

  // Check if the current route is active
  const isActive = (id) => {
    const path = getPath(id);
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/profile.jpg" alt="Profile" className="logo-img" />
        </Link>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navItems.map(item => (
            <li key={item.id} data-nav={item.id}>
              <Link
                to={getPath(item.id)}
                className={`nav-link ${isActive(item.id) ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <i className={`fas ${item.icon}`}></i> {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <Link to="/contact" className="nav-cta">
            <span>Let's Talk</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
          <button
            className="hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
}
