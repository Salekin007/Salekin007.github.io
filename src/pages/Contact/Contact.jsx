import Contact from '../../components/Contact/Contact';
import {
  useScrollAnimations,
} from '../../hooks/useScrollAnimations';

export default function ContactPage() {
  useScrollAnimations();

  return (
    <section id="contact" className="section contact">
      <Contact />
    </section>
  );
}
