import { useState, useEffect, useRef } from 'react';

const impactCards = [
  {
    icon: 'fa-chart-pie',
    title: 'Quality Transformation',
    description: 'Led the transformation from manual testing to 70% automation, reducing regression testing time by 60% and increasing defect detection rate by 45%.',
    metrics: [
      { value: '70%', label: 'Automation' },
      { value: '60%', label: 'Time Saved' },
    ],
  },
  {
    icon: 'fa-users',
    title: 'Team Building',
    description: 'Built and led a team of 15 QA engineers, establishing best practices, conducting training programs, and fostering a culture of continuous learning.',
    metrics: [
      { value: '15+', label: 'Team Members' },
      { value: '25+', label: 'Training Sessions' },
    ],
  },
  {
    icon: 'fa-rocket',
    title: 'Process Excellence',
    description: 'Implemented standardized QA processes, reducing production defects by 40% and improving customer satisfaction scores by 35%.',
    metrics: [
      { value: '40%', label: 'Defect Reduction' },
      { value: '35%', label: 'CSAT Increase' },
    ],
  },
  {
    icon: 'fa-tachometer-alt',
    title: 'Performance Optimization',
    description: 'Identified and resolved critical performance bottlenecks, improving application response time by 50% and handling 10x more concurrent users.',
    metrics: [
      { value: '50%', label: 'Faster Response' },
      { value: '10x', label: 'User Load' },
    ],
  },
];

const achievements = [
  {
    icon: 'fa-trophy',
    title: 'Best QA Team',
    description: 'Awarded for outstanding quality leadership in 2024',
    type: 'gold',
  },
  {
    icon: 'fa-medal',
    title: 'Innovation Award',
    description: 'For implementing AI-powered test selection',
    type: 'silver',
  },
  {
    icon: 'fa-star',
    title: 'Process Excellence',
    description: 'Certified in Six Sigma methodologies',
    type: 'bronze',
  },
];

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="stat-number">
      {count}+
    </span>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="section leadership">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">Leadership & Impact</h2>
          <p className="section-subtitle">
            Driving quality transformation and delivering measurable business results
          </p>
        </div>

        <div className="leadership-grid">
          {impactCards.map((card, index) => (
            <div key={index} className="impact-card">
              <div className="impact-icon">
                <i className={`fas ${card.icon}`}></i>
              </div>
              <div className="impact-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="impact-metrics">
                  {card.metrics.map((metric, i) => (
                    <div key={i} className="impact-metric">
                      <span className="metric">{metric.value}</span>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="achievements-section">
          <h3>Key Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className={`achievement-icon ${achievement.type}`}>
                  <i className={`fas ${achievement.icon}`}></i>
                </div>
                <div className="achievement-text">
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
