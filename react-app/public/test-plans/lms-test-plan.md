# Learning Management System (LMS) — Test Plan

**Author:** Md. Sirajus Salekin
**Role:** Lead SQA Engineer
**Date:** 2026-02-01

---

## 1. Overview
EdTech LMS featuring live classes, assessments, user progress, certification, and mobile apps.

## 2. Test Objectives
- Validate real-time session stability for live classes.
- Ensure assessment reliability and autosave under network flakiness.
- Verify payment and certification workflows.

## 3. Environments
- QA (staging)
- Mobile Lab: iOS + Android devices/emulators
- Pre-prod for final validation

## 4. Test Types & Tools
- Functional: Playwright + manual exploratory
- Live streaming: WebRTC smoke & monitoring
- API: Postman collections
- Performance: k6 for concurrency and live loads
- Security: Payment PCI DSS checks (sandbox)

## 5. Priority Scenarios
- Live class joining, reconnect, multi-stream stability
- Assessment creation, submission, autosave, edge case timeouts
- Payments: success, failure, rollback and reconciliation
- Mobile: UI/UX checks, orientation changes, push notifications

## 6. Test Data
- Student, instructor accounts with various roles and permissions
- Payment sandbox accounts
- Predefined course content and test banks

## 7. Acceptance Criteria
- Live sessions: <1% disconnection rate for 500 concurrent users
- Assessment integrity: autosave within 10s, no data loss on reconnect
- Payment flows: successful payments reconciled within 5 minutes

## 8. Automation Strategy
- Automate core student/instructor flows (Playwright)
- API tests with Postman + CI checks
- Integrate health checks for streaming services into monitoring

## 9. Security & Privacy
- PCI sandbox test flows included in automation where possible
- Data privacy: do not use real PII

## 10. Reporting & Artifacts
- Playwright repo: https://github.com/Salekin007/lms-playwright (example)
- Collections: /collections/lms_api_collection.json
- Screenshots: /screenshots/lms-*.png

---
*Include annotated screenshots and short video captures for live class issues.*
