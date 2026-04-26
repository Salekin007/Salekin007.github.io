import About from '../../components/About/About';
import {
  useScrollAnimations,
} from '../../hooks/useScrollAnimations';

export default function AboutPage() {
  useScrollAnimations();

  return (
    <section id="about" className="section about">
      <About />
    </section>
  );
}
