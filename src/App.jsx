import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import About from './components/About/About';
import Expertise from './components/Expertise/Expertise';
import Leadership from './components/Leadership/Leadership';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import QA from './components/QA/QA';
import Modals from './components/Modals/Modals';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {
  useScrollAnimations,
  useSkillBarAnimations,
  useParallaxEffect,
  useProjectCardTilt,
} from './hooks/useScrollAnimations';
import './assets/styles/style.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Initialize scroll animations
  useScrollAnimations();
  useSkillBarAnimations();
  useParallaxEffect();
  useProjectCardTilt();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewTestPlan = (projectId) => {
    setActiveModal(projectId);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <Loading />
      <Header />
      <div className="scroll-progress" id="scroll-progress"></div>

      <main>
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Leadership />
        <Skills />
        <Experience />
        <Projects onViewTestPlan={handleViewTestPlan} />
        <QA onViewTestPlan={handleViewTestPlan} />
        <Modals activeModal={activeModal} onClose={handleCloseModal} />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {showBackToTop && (
        <button className="back-to-top visible" onClick={scrollToTop} aria-label="Back to top">
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default App;
