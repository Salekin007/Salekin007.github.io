import Expertise from '../../components/Expertise/Expertise';
import {
  useScrollAnimations,
  useProjectCardTilt,
} from '../../hooks/useScrollAnimations';

export default function ExpertisePage() {
  useScrollAnimations();
  useProjectCardTilt();

  return (
    <section id="expertise" className="section expertise">
      <Expertise />
    </section>
  );
}
