import Skills from '../../components/Skills/Skills';
import {
  useScrollAnimations,
  useSkillBarAnimations,
} from '../../hooks/useScrollAnimations';

export default function SkillsPage() {
  useScrollAnimations();
  useSkillBarAnimations();

  return (
    <section id="skills" className="section skills">
      <Skills />
    </section>
  );
}
