const items = [
  'Test Automation',
  'API Testing',
  'Performance Testing',
  'CI/CD Pipeline',
  'Quality Strategy',
  'Test Architecture',
  'AI-Assisted Testing',
  'Agile & Scrum',
];

export default function Marquee() {
  return (
    <section className="marquee-section">
      <div className="marquee-content">
        {items.map((item, index) => (
          <>
            <span key={`item-${index}`} className="marquee-item">
              {item}
            </span>
            {index < items.length - 1 && (
              <span key={`sep-${index}`} className="marquee-separator">
                •
              </span>
            )}
          </>
        ))}
      </div>
    </section>
  );
}
