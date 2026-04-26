import Hero from '../../components/Hero/Hero';
import {
  useScrollAnimations,
  useParallaxEffect,
} from '../../hooks/useScrollAnimations';

export default function Home() {
  // Initialize scroll animations
  useScrollAnimations();
  useParallaxEffect();

  return (
    <section id="home" className="hero">
      <Hero />
    </section>
  );
}
