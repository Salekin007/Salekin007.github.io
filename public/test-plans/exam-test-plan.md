# Exam Automation System — Test Plan

**Author:** Md. Sirajus Salekin
**Role:** Lead SQA Engineer
**Date:** 2026-02-01

---

## 1. Overview
High-stakes exam platform with automated question generation, AI proctoring, and real-time result processing. Focus on reliability, integrity, and scale.

## 2. Key Objectives
- Ensure secure proctoring and anti-cheat capabilities.
- Validate system can handle expected peak loads (5000+ concurrent examinees).
- Verify correctness of scoring and result processing.

## 3. Tools & Environments
- Load testing: k6, JMeter
- Functional UI: Playwright
- Proctoring validations: custom logs + video snapshots
- Staging environments mimicking production scale for load tests

## 4. Priority Scenarios
- Proctoring detection: screen overlays, multiple devices, suspicious activity
- Load: 5000 concurrent users with 99% of critical API calls under 1s
- Recovery: simulate network partition and graceful reconnect
- Scoring: verify grading accuracy, tie-breaking, export of results

## 5. Automation & CI
- Automate stability and scoring checks in Playwright for smoke tests
- CI pipeline triggers nightly load tests for baseline stability

## 6. Security
- Attack surface review for authentication, token expiration, session handling
- Pen-testing focused on proctoring bypass attempts and data exfiltration

## 7. Acceptance Criteria
- No critical security findings prior to production rollout
- Performance: 95p latency < 1s at target load; error rate < 0.2%
- All core scenarios covered in regression suites before release

## 8. Artifacts & Evidence
- Load reports: /perf/exam_2026-02-01.json
- Proctoring logs and screenshots: /screenshots/exam-*.png
- Playwright tests: /tests/exam/

---
*Include clear screenshots and logs for proctoring edge cases; annotate screenshots when filing bugs.*
