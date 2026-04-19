# Hospital Information System (HIS) — Test Plan

**Author:** Md. Sirajus Salekin
**Role:** Lead SQA Engineer
**Date:** 2026-02-01

---

## 1. Overview
Enterprise HIS for OPD, IPD, Billing, EMR, LIS & Pharmacy. High availability and strong regulatory and data privacy requirements.

## 2. Test Objectives
- Validate functional correctness of core workflows.
- Verify data integrity and privacy across modules.
- Ensure system performance under expected and peak loads.
- Validate integration points (lab devices, payment gateways, third-party APIs).

## 3. Scope
In-Scope:
- Patient registration, billing, lab orders/results, EMR flows, pharmacy dispensing, and reporting.
- API contract tests and CI integration.

Out-of-Scope:
- Legacy batch migration scripts (handled by separate team under migration plan).

## 4. Environments
- QA (staging) — feature validation
- Pre-prod — release validation (mirrors production scale)
- Load Lab — performance testing
- CI-runner — automated tests (Playwright & API suite)

## 5. Test Data and Privacy
- Use synthetic anonymized patient data only.
- Data seeding scripts: tests/data/seed_his.json
- For security testing use masked PII and test keys only.

## 6. Test Types and Tools
- Functional: Manual + Playwright (Python)
- API: Postman Collections + automated Newman runs in CI
- Performance: k6 and JMeter
- Security: OWASP Top 10 + Burp (spot checks)
- Accessibility: Axe-core

## 7. Acceptance Criteria
- Critical business flows (patient registration, billing, order-to-result) pass 100% of smoke tests.
- API contract tests have 0 regressions vs baseline on PR.
- Response times: 95th percentile < 800ms for critical endpoints in pre-prod at 1000 concurrent users.
- No high-severity OWASP findings; medium severity must have mitigations and tracked tickets.

## 8. Priority Test Scenarios (Samples)
1. Patient creation: mandatory fields, duplicate detection, data persistence, audit trails.
2. Billing: create invoice, apply insurance, partial payments, refunds, invoice reconciliation.
3. Lab integration: order creation from EMR, external lab callback processing, result accuracy.
4. Concurrency: multiple users updating records, optimistic locking and conflict resolution.
5. Role-based access: verify user roles, data visibility, and permission enforcement.

For each scenario include: Preconditions, Test Steps, Expected Result, Test Data Reference, Test Case ID.

## 9. Test Case Template
- TC-ID: HIS-FUNC-001
- Title: Patient Registration - valid data
- Preconditions: QA DB seeded with clinic records
- Steps: 1) Navigate to Registration 2) Enter valid details 3) Submit 4) Verify patient record created
- Expected: Patient record created and service returns 201 with patientId
- Test Data: tests/data/patient_valid_01.json
- Automatable: Yes (Playwright)

## 10. Automation Strategy
- Playwright (Python) for E2E critical paths and regression.
- Postman/Newman for API contract and integration tests.
- Use Page Object Model and data-driven tests for maintainability.
- CI integration: on PR run smoke + API contract; nightly full regression run.

### Example Commands
- Run UI smoke: pytest tests/e2e/smoke --workers=4
- Run API: newman run collections/his_api_collection.json

## 11. Performance Plan
- Baseline: 1000 concurrent users with 95th percentile response <800ms.
- Scripts: k6 scripts in perf/his_load.js
- Thresholds: error rate < 0.5%, 95p latency < target.

## 12. Security Checks
- OWASP Top 10 checklist
- Verify input validation, auth token management, CSRF, secure cookies
- Penetration testing for high-risk flows prior to prod release

## 13. Regression & Release Checklist
- All critical and high test cases automated and green in CI
- Performance tests passed in pre-prod within thresholds
- Security scan completed and findings triaged
- Stakeholder sign-off recorded in release notes

## 14. Artifacts
- Playwright repo: https://github.com/Salekin007/his-playwright (example)
- Postman collection: /collections/his_api_collection.json
- Seed data: /tests/data/seed_his.json
- Screenshots: /screenshots/his-*.png

## 15. Reporting & Metrics
- Automation coverage: #tests automated / total critical tests
- Defect density during release window
- Mean time to detect/resolve critical defects

---

*Notes: Place screenshots in `/screenshots/` and reference them in test cases. Use synthetic/anonymized data for reproducible results.*
