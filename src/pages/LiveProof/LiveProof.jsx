import LiveProof from '../../components/LiveProof/LiveProof';
import {
  useScrollAnimations,
} from '../../hooks/useScrollAnimations';

export default function LiveProofPage() {
  useScrollAnimations();

  return (
    <LiveProof />
  );
}
