import { useEffect, useRef, useState } from 'react';

const impactMetrics = [
  {
    icon: 'fa-bolt',
    value: '60',
    suffix: '%',
    label: 'Regression Time Reduced',
    color: '#FFD700',
    description: 'Through automation framework'
  },
  {
    icon: 'fa-bug',
    value: '1000',
    suffix: '+',
    label: 'Critical Bugs Prevented',
    color: '#FF6B6B',
    description: 'Before reaching production'
  },
  {
    icon: 'fa-users',
    value: '1000',
    suffix: '+',
    label: 'Concurrent Users Tested',
    color: '#4ECDC4',
    description: 'Load testing with k6'
  },
  {
    icon: 'fa-rocket',
    value: '99.9',
    suffix: '%',
    label: 'Production Uptime',
    color: '#95E1D3',
    description: 'Zero critical defects'
  },
  {
    icon: 'fa-clock',
    value: '70',
    suffix: '%',
    label: 'Release Cycle Accelerated',
    color: '#A8E6CF',
    description: '2 weeks → 3 days'
  },
  {
    icon: 'fa-code-branch',
    value: '95',
    suffix: '%',
    label: 'CI/CD Success Rate',
    color: '#74B9FF',
    description: 'Automated pipeline'
  }
];

const impactHighlights = [
  {
    icon: 'fa-trophy',
    title: 'Zero Critical Releases',
    description: 'Maintained zero critical defects in production for 2+ years across enterprise platforms'
  },
  {
    icon: 'fa-chart-line',
    title: 'Scaled to Millions',
    description: 'Quality systems serving 50,000+ daily users and 650+ institutions nationwide'
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Team Leadership',
    description: 'Led and trained QA teams of 8-20 engineers, establishing testing best practices'
  },
  {
    icon: 'fa-puzzle-piece',
    title: 'Framework Architect',
    description: 'Built scalable automation frameworks from scratch using Playwright, Selenium, and k6'
  }
];

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      const targetValue = parseFloat(value);
      const increment = targetValue / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const displayValue = Number.isInteger(parseFloat(value))
    ? Math.floor(count)
    : count.toFixed(1);

  return (
    <span ref={elementRef}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Impact Delivered</span>
          <h2 className="section-title">🚀 Measurable Results</h2>
          <p className="section-subtitle">
            Data-driven impact across enterprise platforms and teams
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="impact-metrics-grid">
          {impactMetrics.map((metric, index) => (
            <div key={index} className="impact-metric-card">
              <div className="metric-icon-wrapper" style={{ backgroundColor: `${metric.color}20` }}>
                <i className={`fas ${metric.icon}`} style={{ color: metric.color }}></i>
              </div>
              <div className="metric-value">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="metric-label">{metric.label}</div>
              <div className="metric-description">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Impact Highlights */}
        <div className="impact-highlights">
          {impactHighlights.map((highlight, index) => (
            <div key={index} className="impact-highlight-card">
              <div className="highlight-icon">
                <i className={`fas ${highlight.icon}`}></i>
              </div>
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="impact-cta">
          <p>
            <i className="fas fa-quote-left"></i>
            My approach combines technical expertise with strategic thinking to deliver
            measurable business impact through quality engineering
            <i className="fas fa-quote-right"></i>
          </p>
        </div>
      </div>
    </section>
  );
}
