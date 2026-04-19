import { useEffect } from 'react';

const modalContent = {
  his: {
    title: 'Hospital Information System — Test Plan',
    downloadUrl: '/test-plans/his-test-plan.md',
    summary: {
      scope: 'OPD, IPD, Billing, EMR, LIS, Pharmacy modules.',
      environments: 'QA (staging), Pre-prod, CI-runner.',
      keyRisks: 'Data privacy, multi-tenancy isolation, peak load handling.',
    },
    scenarios: [
      'Patient registration — create patient record, validate mandatory fields, duplicate prevention.',
      'Billing flow — create invoice, discount logic, insurance claims, end-to-end reconciliation.',
    ],
  },
  lms: {
    title: 'LMS — Test Plan',
    downloadUrl: '/test-plans/lms-test-plan.md',
    summary: {
      scope: 'Virtual classrooms, assessments, progress tracking.',
      environments: 'QA staging, Pre-prod.',
      keyRisks: 'Data integrity during live sessions, concurrent user handling.',
    },
    scenarios: [
      'User enrollment — course registration, payment integration, access granting.',
      'Live session — video streaming stability, interaction features, recording.',
    ],
  },
  ieims: {
    title: 'Integrated Education Information Management System — Test Plan',
    downloadUrl: '/test-plans/lms-test-plan.md',
    summary: {
      scope: 'Nationwide academic operations, reporting, user management.',
      environments: 'QA staging, Pre-prod, Production monitoring.',
      keyRisks: 'Data security, scalability for millions of records, reporting accuracy.',
    },
    scenarios: [
      'Institution setup — profile creation, user hierarchy, permission configuration.',
      'Academic reporting — data aggregation, validation, export functionality.',
    ],
  },
};

export default function Modals({ activeModal, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeModal) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = activeModal ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const content = modalContent[activeModal] || modalContent.his;

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={onClose}
      ></div>
      <div
        className="modal"
        id={`modal-${activeModal}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${activeModal}-title`}
      >
        <div className="modal-panel" role="document">
          <button
            className="modal-close"
            aria-label="Close modal"
            onClick={onClose}
          >
            ×
          </button>
          <div className="modal-header">
            <h3 id={`modal-${activeModal}-title`}>{content.title}</h3>
            <a href={content.downloadUrl} download className="btn btn-primary">
              Download Test Plan
            </a>
          </div>
          <div className="modal-body">
            <section className="test-plan-summary">
              <p>
                <strong>Scope:</strong> {content.summary.scope}
              </p>
              <p>
                <strong>Environments:</strong> {content.summary.environments}
              </p>
              <p>
                <strong>Key Risks:</strong> {content.summary.keyRisks}
              </p>
            </section>

            <section className="test-scenarios">
              <h4>Priority Test Scenarios (examples)</h4>
              <ol>
                {content.scenarios.map((scenario, index) => (
                  <li key={index} data-test-id={`${activeModal}-s${index + 1}`}>
                    {scenario}
                  </li>
                ))}
              </ol>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
