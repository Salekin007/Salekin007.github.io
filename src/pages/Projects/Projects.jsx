import Projects from '../../components/Projects/Projects';
import {
  useScrollAnimations,
  useProjectCardTilt,
} from '../../hooks/useScrollAnimations';

export default function ProjectsPage({ onViewTestPlan }) {
  useScrollAnimations();
  useProjectCardTilt();

  return (
    <section id="projects" className="section projects">
      <Projects onViewTestPlan={onViewTestPlan} />
    </section>
  );
}
