import Certifications from '../../components/Certifications/Certifications';
import {
  useScrollAnimations,
} from '../../hooks/useScrollAnimations';

export default function CertificationsPage() {
  useScrollAnimations();

  return (
    <section id="certifications" className="section certifications">
      <Certifications />
    </section>
  );
}
