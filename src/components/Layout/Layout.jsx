import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

export default function Layout({ children }) {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  return (
    <>
      <Loading />
      <Header />
      <div className="scroll-progress" id="scroll-progress"></div>

      <main>
        {children}
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
