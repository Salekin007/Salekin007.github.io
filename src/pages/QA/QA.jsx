import QA from '../../components/QA/QA';
import {
  useScrollAnimations,
  useProjectCardTilt,
} from '../../hooks/useScrollAnimations';

export default function QAPage({ onViewTestPlan }) {
  useScrollAnimations();
  useProjectCardTilt();

  return (
    <section id="qa" className="section qa">
      <QA onViewTestPlan={onViewTestPlan} />
    </section>
  );
}
