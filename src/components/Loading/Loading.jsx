import { useEffect, useState } from 'react';
import './Loading.module.css';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'hidden' : ''}`} id="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <span>SS</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
        <p className="loading-text">Loading Portfolio...</p>
      </div>
    </div>
  );
}
