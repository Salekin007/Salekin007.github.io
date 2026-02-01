# Personal Portfolio Website

## QA Playbook (Lead SQA)
This site includes a dedicated **QA Hub** with downloadable, professional test plans for featured projects (HIS, LMS, Exam Automation System). Each test plan includes scenarios, test data guidance, acceptance criteria, automation strategy, and artifacts.

**CI / Automation**
- Playwright tests scaffolded in `tests/e2e/` (smoke tests run in CI).
- GitHub Actions workflow: `.github/workflows/playwright.yml` runs Playwright on push/PR to `main` and uploads the HTML report.

Quick commands (example):
- Run Playwright smoke: `npm ci && npx playwright test`
- Show report: `npx playwright show-report`

See `test-plans/` for full test plan markdown files.

[![Playwright Tests](https://github.com/Salekin007/Salekin007.github.io/actions/workflows/playwright.yml/badge.svg)](https://github.com/Salekin007/Salekin007.github.io/actions/workflows/playwright.yml)
