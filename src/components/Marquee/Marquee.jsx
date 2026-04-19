const items = [
  'Test Automation',
  'API Testing',
  'Performance Testing',
  'CI/CD Pipeline',
  'Team Leadership',
  'Quality Strategy',
  'Test Architecture',
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
