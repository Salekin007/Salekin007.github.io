import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { id: 'home', icon: 'fa-home', label: 'Home' },
  { id: 'about', icon: 'fa-user', label: 'About' },
  { id: 'expertise', icon: 'fa-star', label: 'Expertise' },
  { id: 'leadership', icon: 'fa-users-cog', label: 'Leadership' },
  { id: 'skills', icon: 'fa-cogs', label: 'Skills' },
  { id: 'experience', icon: 'fa-briefcase', label: 'Experience' },
  { id: 'qa', icon: 'fa-vial', label: 'QA' },
  { id: 'projects', icon: 'fa-rocket', label: 'Projects' },
  { id: 'contact', icon: 'fa-paper-plane', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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

      // Update active section based on scroll position
      const sections = document.querySelectorAll('.section, .hero');
      const scrollPosition = window.pageYOffset + 150;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="nav-logo"
        >
          <img src="/profile.jpg" alt="Profile" className="logo-img" />
        </Link>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="nav-cta"
          >
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
