import Experience from '../../components/Experience/Experience';
import {
  useScrollAnimations,
} from '../../hooks/useScrollAnimations';

export default function ExperiencePage() {
  useScrollAnimations();

  return (
    <section id="experience" className="section experience">
      <Experience />
    </section>
  );
}
