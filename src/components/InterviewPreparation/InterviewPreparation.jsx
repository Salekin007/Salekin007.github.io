import { useState, useEffect } from 'react';
import './InterviewPreparation.css';

// Manual Testing Q&A Data
const manualTestingData = [
  // BASIC (1-15)
  {
    id: 1,
    level: 'basic',
    cat: 'Fundamentals',
    q: 'What is manual testing and why is it still important even when you have automation?',
    tags: ['Fundamentals', 'Senior mindset'],
    tagColors: ['tb', 'tg'],
    ans: 'Manual testing is the process of evaluating software by a human tester without using automation tools. It remains critical because automation cannot replace human judgment. Machines verify what you tell them to verify — they cannot intuitively notice that a UI looks wrong, a user journey feels confusing, or that a business rule is being followed technically but makes no practical sense. At senior level, I use manual testing for exploratory testing, UAT, usability assessment, and any scenario requiring human interpretation of "correct."',
    proj: 'On IEIMS, automated tests verified that the student search returned results. Manual exploratory testing found that search results were displayed in a confusing order — alphabetical by first name instead of by registration number. The system was technically correct but practically unusable. No automated test would have flagged that.'
  },
  {
    id: 2,
    level: 'basic',
    cat: 'Fundamentals',
    q: 'What is the difference between verification and validation?',
    tags: ['Always asked', 'Concepts'],
    tagColors: ['tb', 'tp'],
    ans: 'Verification = "Are we building it right?" — checking that the product matches specifications. Done through reviews, walkthroughs, and inspections. The software does not need to run. Validation = "Are we building the right thing?" — checking that the product meets actual business needs and user expectations. Done by running and testing the software. A system can pass verification (matches the spec exactly) but fail validation (the spec was wrong, users hate it).',
    proj: 'On HIMS, verification included reviewing the SRS before coding started — I found the discharge process was underspecified (no mention of what happens with outstanding bills). Raising this in verification saved 2 weeks of rework that would have happened post-development.'
  },
  {
    id: 3,
    level: 'basic',
    cat: 'Fundamentals',
    q: 'What is the STLC? Name all phases and what you deliver at each.',
    tags: ['Must know', 'Process'],
    tagColors: ['tb', 'tg'],
    ans: 'Software Testing Life Cycle has 6 phases: 1. Requirement Analysis — Review SRS, identify testable requirements, build RTM. Deliverable: RTM draft. 2. Test Planning — Define scope, tools, schedule, resources. Deliverable: Test Plan. 3. Test Case Design — Write test cases, prepare test data. Deliverable: Test case document. 4. Environment Setup — Configure test environments, tools, data. Deliverable: Ready environment. 5. Test Execution — Execute tests, log defects. Deliverable: Execution report, defect logs. 6. Test Closure — Metrics analysis, lessons learned, sign-off. Deliverable: Test summary report.',
    proj: 'On IEIMS with 10+ modules, skipping Requirement Analysis caused rework on 3 modules where requirements were ambiguous. After that, I enforced formal requirement review as a mandatory STLC entry — raising ambiguities before development started.'
  },
  {
    id: 4,
    level: 'basic',
    cat: 'Fundamentals',
    q: 'What is the difference between Smoke, Sanity, and Regression testing?',
    tags: ['Always asked', 'Core'],
    tagColors: ['tb', 'tg'],
    ans: 'Smoke testing: Is the build stable enough to test at all? Runs 10–15 critical test cases after every new build. If smoke fails, reject the build immediately — no deep testing. Sanity testing: After a specific bug fix or change, test that exact area and 2–3 adjacent flows. Narrow and focused. Not a full suite. Regression testing: Before every release, verify that recent changes have not broken existing functionality. Broad coverage — can be automated. The goal is catching unintended side effects.',
    proj: 'On LMS: after a developer fixed a quiz submission bug, I ran sanity on the quiz module (10 min). For the weekly release, I ran full Playwright regression (25 min in CI). Different tools for different purposes.'
  },
  {
    id: 5,
    level: 'basic',
    cat: 'Fundamentals',
    q: 'What is the difference between severity and priority? Give a conflict example.',
    tags: ['Always asked', 'Conflict'],
    tagColors: ['tb', 'tr'],
    ans: 'Severity = how badly does this break the system? Set by QA based on technical impact. Scale: Critical, High, Medium, Low. Priority = how urgently should this be fixed? Set by PM based on business needs. Scale: P1, P2, P3. They often conflict: High Severity / Low Priority: System crashes when 10,000 characters entered in a comment field — technically severe, but virtually impossible in real use. Fix eventually. Low Severity / High Priority: CEO\'s name misspelled on the login page. Minor cosmetic bug — but must be fixed before the investor demo tomorrow.',
    proj: 'On HIMS: the hospital director noticed a wrong phone number in the footer — cosmetic (Low severity) but the hospital director wanted it fixed before an inspection (P1 priority). I classify both separately in Jira so the PM makes the priority call with full context.'
  },
  {
    id: 6,
    level: 'basic',
    cat: 'Test Design',
    q: 'Explain Equivalence Partitioning with a real example from your project.',
    tags: ['EP', 'Core technique'],
    tagColors: ['tb', 'tg'],
    ans: 'Equivalence Partitioning divides input data into groups where all values in a group behave identically. Test one value per partition — no need to test every value. Partitions: Invalid below range, Valid range, Invalid above range. For each partition you only need one representative test value.',
    proj: 'IEIMS student age field accepted 5–18. Partitions: below 5 (invalid), 5–18 (valid), above 18 (invalid). Test values: 2, 10, 22. Testing with value 2 found that the system accepted it and created a student record with age 2 — lower bound validation was missing on the backend. EP with just 3 values caught a bug that 100 random values in the valid range would never have found.'
  },
  {
    id: 7,
    level: 'basic',
    cat: 'Test Design',
    q: 'What is Boundary Value Analysis and why do defects cluster at boundaries?',
    tags: ['BVA', 'Defects hide here'],
    tagColors: ['tb', 'tr'],
    ans: 'BVA tests at the exact edges of valid ranges: just below minimum, at minimum, at maximum, just above maximum. Defects cluster here because developers often write off-by-one errors. For range 5–18: test values 4, 5, 18, 19. BVA and EP are always used together — EP finds the partitions, BVA tests the exact edges.',
    proj: 'HIMS blood pressure field accepted 60–250 mmHg. BVA at exactly 250 found a false critical alert — developer wrote < 250 instead of <= 250. A value of 250 is clinically valid but was triggering an emergency warning. EP alone (using 150) would have passed every time.'
  },
  {
    id: 8,
    level: 'basic',
    cat: 'Test Design',
    q: 'What is a test case? What are all the fields a good test case must have?',
    tags: ['Fundamentals', 'Documentation'],
    tagColors: ['tb', 'tg'],
    ans: 'A test case is a documented set of conditions and steps to verify a specific behavior. Required fields: Test Case ID (linked to requirement), Title (action-based), Preconditions (what must be true before execution), Test Steps (numbered, atomic, reproducible), Test Data (exact values), Expected Result (precise observable outcome), Actual Result (filled during execution), Status (Pass/Fail/Blocked/Skipped), Linked Requirement ID.',
    proj: '',
    warn: 'Never write vague expected results like "user logs in successfully." Be precise: "User is redirected to /dashboard, username appears in header, session token stored in cookie." Vague expected results create disagreements about whether a test passed.'
  },
  {
    id: 9,
    level: 'basic',
    cat: 'Test Design',
    q: 'What is exploratory testing? How is it different from ad-hoc testing?',
    tags: ['Senior skill', 'Important'],
    tagColors: ['tg', 'tp'],
    ans: 'Exploratory testing is structured, intentional, and documented. It uses a charter (defined goal and time-box) and takes session notes during execution. It is guided by tester skill and domain knowledge. Ad-hoc testing is random clicking with no plan, no charter, no documentation. Exploratory testing is a professional technique. Ad-hoc is not repeatable and should not be in a QA strategy.',
    proj: 'IEIMS report generation — charter: "Explore report module focusing on large datasets and special characters — 60 minutes." This session found 4 bugs including Bengali character corruption in PDF exports. Ad-hoc testing with no focus would have tested the obvious happy path and stopped.'
  },
  {
    id: 10,
    level: 'basic',
    cat: 'Test Design',
    q: 'What is the Test Pyramid and how do you apply it?',
    tags: ['Strategy', 'Architecture'],
    tagColors: ['tb', 'tg'],
    ans: 'The Test Pyramid has 3 layers: Unit tests (base — most): Fast, cheap, isolated. Written by developers. Thousands of them. Integration/API tests (middle): Test interactions between components. Hundreds. Slower than unit tests. E2E/UI tests (top — least): Slow, expensive, brittle. Cover only critical user journeys. The pyramid shape means you should have the most unit tests and fewest E2E tests.',
    proj: 'On IEIMS my Playwright suite was the top layer — 150 E2E tests covering only critical paths. Postman API tests covered the middle layer. Unit tests were the developers\' responsibility. I avoided automating every UI path — only the ones where E2E coverage adds unique value that API tests can\'t provide.'
  },
  {
    id: 11,
    level: 'basic',
    cat: 'Process',
    q: 'What is an RTM (Requirement Traceability Matrix) and how did you use it?',
    tags: ['Documentation', 'Traceability'],
    tagColors: ['tb', 'tg'],
    ans: 'RTM maps every business requirement to one or more test cases, and tracks their execution status and linked defects. Columns: Requirement ID, Requirement description, Test Case ID(s), Test status, Defect ID(s). Purpose: Ensure no requirement is untested. Prove test coverage. Identify gaps before release. Answer stakeholder questions about coverage instantly.',
    proj: 'IEIMS had government audit requirements — I maintained RTM in Google Sheets updated every sprint. Before each release I ran a coverage check: any requirement with no green test case was raised as a release risk. During a ministry audit, the RTM proved 100% requirement coverage — something the previous team couldn\'t demonstrate.'
  },
  {
    id: 12,
    level: 'basic',
    cat: 'Process',
    q: 'What are entry and exit criteria? Why are they important?',
    tags: ['Process', 'Often missed'],
    tagColors: ['tb', 'ta'],
    ans: 'Entry criteria — conditions that must be met before testing begins: build deployed to test environment, requirements signed off, test data prepared, no P1 blockers from development. Exit criteria — conditions that define when testing is complete: 100% test cases executed, zero Critical bugs open, 95%+ test pass rate, all High bugs fixed or formally accepted, UAT sign-off received. Without these, release decisions are subjective opinions — with them, they are objective facts.',
    proj: 'Before HIMS go-live, the PM wanted to start UAT 2 days early. My entry criteria said the test environment must match production config. The current env was missing the production database replication setup. I held UAT until it matched — which was the right call: 3 bugs found in UAT that would have been environment-specific misses otherwise.'
  },
  {
    id: 13,
    level: 'basic',
    cat: 'Process',
    q: 'What is defect lifecycle? Walk through all states.',
    tags: ['Defect management', 'Process'],
    tagColors: ['tb', 'tg'],
    ans: 'New → QA logs the bug. Assigned → PM/lead assigns to developer. Open/In Progress → Developer is working on it. Fixed → Developer marks it resolved. Ready for Retest → Deployed to test env for QA to verify. Retest/Verified → QA confirms fix works. Closed → Bug resolved. Reopened → Fix didn\'t work, bug persists — goes back to Open. Rejected → Developer disputes it (not a bug, by design, duplicate). Deferred → Valid bug but not fixing in this release.',
    proj: 'On IEIMS I tracked 1,200+ defects through this lifecycle in Jira. The most important state I managed carefully was Rejected — if I disagreed with a rejection, I\'d bring the requirement document and re-open with evidence. Defects shouldn\'t be closed by developer opinion alone.'
  },
  {
    id: 14,
    level: 'basic',
    cat: 'Process',
    q: 'What is the difference between functional and non-functional testing?',
    tags: ['Concepts', 'Fundamentals'],
    tagColors: ['tb', 'tp'],
    ans: 'Functional testing verifies what the system does — does it perform the specified functions correctly? Login works, data saves, calculations are correct. Validates business requirements. Non-functional testing verifies how the system performs — speed, security, reliability, usability. Performance testing (k6, JMeter), security testing (OWASP ZAP), load testing — all non-functional. Both are required for production-ready software.',
    proj: 'IEIMS functional: student enrollment saves correctly, exam results display accurately. IEIMS non-functional: system handles 1,000 concurrent users (performance), JWT tokens cannot be tampered (security), system uptime during exam result day (reliability). My QA strategy covered both.'
  },
  {
    id: 15,
    level: 'basic',
    cat: 'Process',
    q: 'What is UAT and what is your role in it as a senior QA?',
    tags: ['UAT', 'Stakeholder'],
    tagColors: ['tb', 'tg'],
    ans: 'User Acceptance Testing is the final validation phase where business stakeholders test the software to confirm it meets their needs before go-live. QA\'s role in UAT at senior level: Prepare UAT test scenarios (business-language, not technical). Set up the UAT environment. Train business users on how to test. Support during execution — answer questions, log issues they find. Triage UAT defects — assess severity and go-live impact. Facilitate the sign-off process.',
    proj: 'HIMS UAT: I prepared 40 UAT scenarios in plain Bengali/English for clinical staff who are not technically trained. Conducted a 2-hour walkthrough session with the hospital operations team. During UAT, a nurse found that the patient admission form didn\'t auto-populate the referring doctor\'s name — a workflow requirement missed in the SRS. UAT by real users catches what QA can\'t.'
  },
  // INTERMEDIATE (16-35)
  {
    id: 16,
    level: 'intermediate',
    cat: 'Test Design',
    q: 'Explain Decision Table testing with a real example. When do you use it?',
    tags: ['Complex logic', 'Business rules'],
    tagColors: ['tp', 'tb'],
    ans: 'Decision tables are used when multiple input conditions combine to produce different outcomes. Structure: rows = conditions (Y/N), columns = all combinations, bottom = expected action. For N conditions, you have 2^N combinations to cover systematically.',
    proj: 'LMS quiz access: 3 conditions — enrolled (Y/N), prerequisite done (Y/N), instructor unlocked (Y/N) = 8 combinations. Without a decision table, developers test Y/Y/Y and N/N/N. My table found that Y/N/Y (enrolled, prereq not done, unlocked) showed a generic "Access denied" instead of "Complete prerequisite module first." Students had no actionable guidance. Decision table was the only way to systematically cover all 8 paths.'
  },
  {
    id: 17,
    level: 'intermediate',
    cat: 'Test Design',
    q: 'What is State Transition testing? Walk through a real example.',
    tags: ['Workflows', 'State machine'],
    tagColors: ['tt', 'tb'],
    ans: 'State Transition testing maps all states a system can be in, and tests both valid transitions (allowed) and invalid transitions (should be blocked). It\'s essential for any feature with a lifecycle: order processing, patient records, account status, ticket management.',
    proj: 'HIMS patient lifecycle: Registered → Admitted → Under Treatment → Discharged → Archived. I tested invalid transitions: can a Registered patient be Discharged (skipping Admission and Treatment)? Yes — the API accepted it and created a discharge record with empty admission and treatment fields. A corrupted medical record. State transition testing of invalid paths found a data integrity defect that functional happy-path testing completely missed.'
  },
  {
    id: 18,
    level: 'intermediate',
    cat: 'Test Design',
    q: 'What is the difference between black-box, white-box, and grey-box testing?',
    tags: ['Core concepts', 'Test types'],
    tagColors: ['tb', 'tp'],
    ans: 'Black-box testing: Tester has no knowledge of internal code. Tests based on requirements and expected behavior only. All manual functional testing, API testing, UAT. White-box testing: Tester has full code access. Tests internal logic, code paths, coverage. Typically done by developers (unit tests). Grey-box testing: Partial code knowledge. Tester knows the architecture and database structure but not implementation details. API testing with knowledge of the data model is grey-box.',
    proj: 'IEIMS API testing was grey-box: I knew the database schema (student table, enrollment table, foreign keys) without access to the source code. This let me test data integrity: after creating a student via API, I queried the DB directly to confirm the record was created with correct foreign key relationships — something black-box testing can\'t do.'
  },
  {
    id: 19,
    level: 'intermediate',
    cat: 'Test Design',
    q: 'What is risk-based testing and how do you build a risk matrix?',
    tags: ['Senior strategy', 'Priority'],
    tagColors: ['tr', 'tb'],
    ans: 'Risk-based testing allocates testing effort proportional to business risk. Risk = Likelihood of failure × Business impact. Score both on 1–5. Modules above score 15 get full regression + exploratory. Score 6–14 get regression only. Below 6 get smoke or are deferred. Factors that increase likelihood: new code, complex logic, recently changed module, integration points. Factors that increase impact: user-facing, financial, compliance, high traffic volume.',
    proj: 'HIMS risk matrix: Patient billing (Likelihood 5 × Impact 5 = 25) → full coverage. Patient profile update (Likelihood 2 × Impact 3 = 6) → smoke only. This directed 3 of 5 testing days to billing and discharge. The billing module had 2 critical bugs that would have caused direct financial loss. The profile update module had zero bugs. Risk-based allocation was correct.'
  },
  {
    id: 20,
    level: 'intermediate',
    cat: 'Defect Management',
    q: 'What makes a great bug report? What must it include?',
    tags: ['Quality', 'Best practice'],
    tagColors: ['tb', 'tg'],
    ans: 'A great bug report enables any developer to reproduce the bug in under 2 minutes without asking a single clarifying question. Must include: Clear title with module name, Environment (browser, OS, server, build version), Severity AND priority with justification, Numbered reproducible steps, Exact test data used, Expected result (from requirement), Actual result (what actually happened), Evidence (screenshot, video, network log), Business impact (who is affected and what is the consequence).',
    proj: 'IEIMS JWT tampering bug report: I included the exact modified token value, a video of the reproduction, the OWASP A02 category reference, and the business impact: "Any authenticated student can access all 47 admin accounts\' data." That business impact line made it impossible to downgrade the severity. The fix was deployed within 4 hours.'
  },
  {
    id: 21,
    level: 'intermediate',
    cat: 'Process',
    q: 'What is shift-left testing and how do you practice it in Agile/Scrum?',
    tags: ['Modern practice', 'Agile'],
    tagColors: ['tb', 'tg'],
    ans: 'Shift-left means moving testing activities earlier in the SDLC — finding defects in requirements and design before code is written. Practical activities: Attend sprint planning, review user stories before dev starts, challenge vague acceptance criteria, write test cases alongside development (not after), participate in design reviews, raise ambiguities immediately. The cost of fixing a defect found in requirements is ~1x. Found in production: ~100x.',
    proj: 'IEIMS sprint planning: I reviewed a user story for exam result publication. The acceptance criteria said "notify students when results are published." I asked: via email, SMS, or in-app? If it fails, is it silent or retried? These questions found 2 missing requirements before a single line of code was written. Without shift-left, those gaps would have become production bugs.'
  },
  {
    id: 22,
    level: 'intermediate',
    cat: 'Process',
    q: 'How do you write test cases from requirements that are vague or incomplete?',
    tags: ['Real challenge', 'Senior skill'],
    tagColors: ['ta', 'tb'],
    ans: 'Step 1: Identify all ambiguities — document every "what happens if...?" question. Step 2: Raise them with the BA/PM before dev starts (shift-left). Step 3: For still-ambiguous areas, test the most common user behavior as the happy path and test all reasonable interpretations as negative cases. Step 4: Mark ambiguous test cases clearly in the RTM so stakeholders know they need confirmation. Never assume — always document your assumption.',
    proj: 'HIMS discharge requirement said "validate patient is ready for discharge." No criteria defined for "ready." I listed questions: Does ready mean no outstanding bills? Minimum hospital stay met? Doctor sign-off received? I tested all 3 — and found that only doctor sign-off was validated. Bill clearance and minimum stay were not. Two of my three test cases failed — revealing two gaps in implementation that matched two gaps in the requirement.'
  },
  {
    id: 23,
    level: 'intermediate',
    cat: 'Process',
    q: 'How do you handle testing when the deadline is tight and you cannot test everything?',
    tags: ['Pressure', 'Decision making'],
    tagColors: ['ta', 'tb'],
    ans: 'Step 1: Apply risk-based testing immediately — identify the top 20% of functionality that covers 80% of business risk. Step 2: Prioritize: Critical path first, regression on recently changed areas, skip low-risk stable modules. Step 3: Use automation for stable regression — run it in CI while doing manual exploratory in parallel. Step 4: Document what was NOT tested and communicate the risk to the PM in writing. Never silently skip testing — always make the risk visible and let stakeholders make the informed decision.',
    proj: 'IEIMS had a hard government deadline — 5 days cut to 3 days by client scope addition. I built a risk matrix in 30 minutes, identified 5 critical modules, tested those fully, ran smoke on 4 low-risk modules, and skipped 2 stable modules that hadn\'t been touched in 2 sprints. Sent PM a written list of untested areas with risk assessment. No critical production issue from untested areas.'
  },
  {
    id: 24,
    level: 'intermediate',
    cat: 'Process',
    q: 'What is test coverage and how do you measure it?',
    tags: ['Metrics', 'Quality'],
    tagColors: ['tb', 'tg'],
    ans: 'Requirement coverage: Requirements tested / Total requirements × 100. Measured via RTM. Test case coverage: Test cases executed / Total test cases × 100. Tracked in test execution report. Code coverage: Lines of code exercised by tests / Total lines × 100. Measured by developer tools (not QA). Risk coverage: High-risk items tested / Total high-risk items × 100. Most important metric. Coverage numbers without context are misleading — 95% test pass rate means nothing if the 5% failures are in the most critical module.',
    proj: 'IEIMS pre-release: 100% requirement coverage (all RTM rows green), 97% test pass rate, 3 remaining failures were low-risk cosmetic issues. I reported this as "Ready for release with 3 known cosmetic issues to be fixed in next sprint." Not just a number — a decision-ready statement.'
  },
  {
    id: 25,
    level: 'intermediate',
    cat: 'Process',
    q: 'What are the different types of testing in your test strategy? Which types did you use on IEIMS?',
    tags: ['Strategy', 'Coverage'],
    tagColors: ['tb', 'tg'],
    ans: 'Functional: Unit, Integration, System, UAT. Non-functional: Performance, Load, Stress, Security, Usability. Maintenance: Regression, Smoke, Sanity. Structural: White-box, API-level validation.',
    proj: 'IEIMS full strategy: Functional (900+ test cases across all modules), Integration (API chaining with Postman — student create → enroll → document upload), System (end-to-end journeys through all roles), UAT (with ministry staff), Regression (Playwright automation — 150 cases), Performance (k6 — 1,000+ concurrent users before exam result day), Security (OWASP ZAP basic scan, JWT manipulation testing, RBAC validation). All 8 types run at different stages.'
  },
  {
    id: 26,
    level: 'intermediate',
    cat: 'Defect Management',
    q: 'A developer marks your bug as "Cannot Reproduce." What do you do?',
    tags: ['Conflict', 'Real situation'],
    tagColors: ['ta', 'tr'],
    ans: 'Step 1: Check if the environment matches. The bug might be environment-specific. Step 2: Provide a video recording of the reproduction — no more "cannot reproduce" arguments possible with a video. Step 3: Document exact test data, browser, OS, and user account used. Step 4: Re-produce it on developer\'s machine if possible, or ask them to watch while you reproduce. Step 5: If it\'s intermittent, run it 10+ times to capture the pattern and frequency. Never close a bug because a developer says "I can\'t reproduce it" without thorough investigation.',
    proj: 'IEIMS login test: I reported an intermittent session timeout bug. Developer said cannot reproduce. I ran the scenario 20 times, captured it happening 7 times, and recorded all 7 as a video with timestamps. Developer then confirmed it was a race condition in session management. Video evidence is the most effective tool against "cannot reproduce."'
  },
  {
    id: 27,
    level: 'intermediate',
    cat: 'Defect Management',
    q: 'What is a showstopper and when do you escalate to block a release?',
    tags: ['Critical decision', 'Release gate'],
    tagColors: ['tr', 'tb'],
    ans: 'A showstopper is a Critical defect that must be fixed before any release. Criteria to block: affects core user journeys (login, primary workflow, data submission), causes data loss or corruption, is a security vulnerability, or violates regulatory/compliance requirements. Escalation process: Raise as Critical blocker in Jira, document the business impact clearly, notify PM directly (not just in Jira), propose options (delay, partial release, hotfix plan). Present options, not just problems — always recommend a path forward.',
    proj: 'Two hours before IEIMS go-live, I found a dashboard showing incorrect student count — 48,230 vs actual 53,410. Ministry officials would see this in 2 hours. I immediately documented, notified PM with 3 options and a recommendation. Option chosen: 1-hour delay while dev investigated. Root cause: stale cache. Fixed in 40 minutes. Released on time with correct data. Blocking was the right call.'
  },
  {
    id: 28,
    level: 'intermediate',
    cat: 'Defect Management',
    q: 'What is a regression defect? How do you prevent it?',
    tags: ['Regression', 'Quality'],
    tagColors: ['tb', 'tg'],
    ans: 'A regression defect is a bug in previously working functionality that was broken by a new code change. They occur when developers fix one thing and accidentally break another. Prevention: Automation regression suite run on every PR (catches regression instantly), code reviews that include test impact analysis, clear Definition of Done that includes regression testing, and maintaining good test coverage on stable features.',
    proj: 'IEIMS: a developer fixed a student search performance issue by modifying the query. The fix broke the search filter for district-level admin (different WHERE clause). Our Playwright automation caught this regression 12 minutes after the PR was opened — before anyone reviewed the code. Without automation, this would have been found in UAT or production.'
  },
  {
    id: 29,
    level: 'intermediate',
    cat: 'Process',
    q: 'How do you test a feature that has no written requirements?',
    tags: ['Real challenge', 'Judgment'],
    tagColors: ['ta', 'tg'],
    ans: 'Step 1: Use the existing product behavior as the baseline — test that the new feature matches the established UX patterns. Step 2: Interview the developer or PM to understand the intended behavior — document their answers as informal requirements. Step 3: Apply domain knowledge — for a hospital system, you know patient data must be protected, discharge requires billing clearance, etc. Step 4: Use exploratory testing with heuristics: SFDIPOT (Structure, Function, Data, Integration, Platform, Operations, Time). Step 5: Flag the missing requirements to management formally — you cannot be held responsible for bugs in undocumented behavior.',
    proj: 'HIMS had an appointment rescheduling feature added mid-sprint with no written requirements. I interviewed the doctor who requested it, wrote informal acceptance criteria, tested against those, and formally noted in the test report that this feature had no SRS coverage. Protected myself professionally while still testing thoroughly.'
  },
  {
    id: 30,
    level: 'intermediate',
    cat: 'Test Design',
    q: 'What is the difference between test cases and test scenarios?',
    tags: ['Terminology', 'Concepts'],
    tagColors: ['tb', 'tp'],
    ans: 'Test scenario: High-level "what to test" — describes the feature or functionality to be tested without detailed steps. Example: "Verify student can enroll in a school." Test case: Detailed "how to test" — specific steps, test data, preconditions, and expected results. Multiple test cases cover one scenario. Test scenarios come first (from requirements), test cases expand each scenario into concrete, executable steps.',
    proj: 'IEIMS scenario: "Verify student enrollment process." Test cases from this scenario: TC-001 Enroll with valid data (happy path), TC-002 Enroll without selecting school (validation), TC-003 Enroll duplicate student (uniqueness check), TC-004 Enroll as unauthorized role (access control). One scenario, four distinct test cases.'
  },
  {
    id: 31,
    level: 'intermediate',
    cat: 'Process',
    q: 'How do you manage test data? What are the challenges?',
    tags: ['Test data', 'Practical'],
    tagColors: ['tb', 'ta'],
    ans: 'Test data challenges: Production data cannot be used in test environments (privacy). Test data becomes stale as the product evolves. Multiple testers sharing data causes conflicts. Special cases (edge values, boundary data) need to be created manually. Best practices: Create test data via API (faster, more reliable than UI), isolate data per test (each test creates and teardown its own data), maintain a test data catalog for complex scenarios, use realistic but fictional data.',
    proj: 'IEIMS: 3.2 million student records in production — I could not use any of them in testing. I built a test data set of 500 synthetic students covering all districts, school types, and grade levels. Used Postman to create them via API before test cycles, and a cleanup collection to delete them after. This meant every test run started with a known, clean state.'
  },
  {
    id: 32,
    level: 'intermediate',
    cat: 'Process',
    q: 'What is a test plan and what must it contain at senior level?',
    tags: ['Documentation', 'Leadership'],
    tagColors: ['tb', 'tg'],
    ans: 'A test plan defines the scope, strategy, resources, timeline, and approach for a testing effort. 8 mandatory sections: Scope (in/out of scope), Objectives (what QA will achieve), Strategy (testing types, tools, automation approach), Resources (team, environments, data), Schedule (phases aligned to sprint/release), Entry/Exit criteria (when to start/stop), Risk & Mitigation (known risks and contingencies), Deliverables (reports, metrics, sign-offs).',
    proj: 'IEIMS test plan was a 12-page document covering all 10+ modules. It included a risk matrix, automation coverage targets, and explicit entry criteria for UAT. The ministry required the test plan as part of project documentation for audit purposes. Having a formal test plan meant the QA process was defensible and auditable.'
  },
  {
    id: 33,
    level: 'intermediate',
    cat: 'Defect Management',
    q: 'What metrics do you track as a senior QA? How do you use them?',
    tags: ['Metrics', 'Leadership'],
    tagColors: ['tb', 'tg'],
    ans: '6 key metrics: Defect Escape Rate (bugs in production / total bugs) — QA effectiveness. Test Pass Rate (passed / executed) — release readiness. Defect Detection Rate (QA found / total found) — how much we catch before users. Test Coverage (requirements tested / total) — gap identification. Automation Coverage (automated / total test cases) — automation ROI. Defect Resolution Time — dev-QA velocity. Report trends not snapshots — "pass rate improved from 88% to 97% this sprint" is more useful than just "97%."',
    proj: 'IEIMS weekly QA report: Pass rate 94% (up from 87% last sprint), Defect escape rate 0% (third consecutive release), 12 new defects this sprint (8 High, 3 Medium, 1 Low), automation coverage 62% of regression suite. PM used this to communicate quality status to the ministry client without technical jargon.'
  },
  {
    id: 34,
    level: 'intermediate',
    cat: 'Process',
    q: 'What is the difference between integration testing and system testing?',
    tags: ['Test types', 'Concepts'],
    tagColors: ['tb', 'tp'],
    ans: 'Integration testing: Tests interactions between 2 or more specific modules. Narrow scope. Goal: verify that modules communicate correctly — data passed from Module A is correctly received and processed by Module B. System testing: Tests the entire application as a complete system against requirements. Broad scope. Goal: verify the complete product meets its specification. System testing comes after integration testing — you can\'t test the whole system if the module connections are broken.',
    proj: 'HIMS integration testing: Billing module → Discharge module integration. Does outstanding balance in billing prevent discharge in the discharge module? (Answer: initially it didn\'t — that was an integration bug.) System testing: complete patient journey from registration through admission, treatment, billing, and discharge — the full workflow across all 5 modules working together.'
  },
  {
    id: 35,
    level: 'intermediate',
    cat: 'Process',
    q: 'How do you ensure quality in an Agile/Scrum team with fast release cycles?',
    tags: ['Agile', 'CI/CD'],
    tagColors: ['tb', 'tg'],
    ans: '5 practices for Agile quality: 1. Test within the sprint — start testing the moment a feature is dev-complete, not at sprint end. 2. Automate regression — CI catches breakage on every PR. 3. Shift-left — review requirements in sprint planning, not after dev. 4. Definition of Done includes QA-verified — no story is Done until tested. 5. Daily sync — communicate test status in standup, raise blockers same day. Sprint velocity is not your concern — quality is.',
    proj: 'IEIMS: 2-week sprints with 8–10 stories per sprint. I started testing on day 3 (when first features were dev-complete) — not day 14. Playwright CI caught regressions same day they were introduced. Definition of Done strictly required QA sign-off. In 8 consecutive sprints, zero Critical bugs reached UAT.'
  },
  // ADVANCED (36-50)
  {
    id: 36,
    level: 'advanced',
    cat: 'Strategy',
    q: 'How do you define a QA strategy for a large government platform from scratch?',
    tags: ['Senior leadership', 'Strategy'],
    tagColors: ['tr', 'tb'],
    ans: 'Step 1 — Understand the system: Read SRS, architecture diagrams, user roles, regulatory requirements. Step 2 — Risk mapping: Classify all modules by likelihood × impact. Step 3 — Define testing types: For each module, decide which testing types apply. Step 4 — Automation decision: What to automate (stable, high-risk, repetitive) vs keep manual. Step 5 — Define quality gates: What must be true before each phase starts and ends. Step 6 — Resource planning: How many test cycles, how many testers, what tools. Step 7 — Stakeholder communication: How will you report status and what does a release recommendation look like?',
    proj: 'IEIMS strategy from scratch: mapped 10+ modules, identified exam results and student enrollment as highest risk (government data, millions of users). Defined 4 testing layers (functional, API, performance, UAT). Quality gates: no UAT until regression green, no go-live until performance thresholds met and ministry UAT signed. Strategy document was 15 pages and became the QA framework used across subsequent government projects at the company.'
  },
  {
    id: 37,
    level: 'advanced',
    cat: 'Strategy',
    q: 'What is test debt and how do you manage it?',
    tags: ['Senior concept', 'Long term'],
    tagColors: ['tr', 'ta'],
    ans: 'Test debt is the accumulation of untested code, outdated test cases, flaky tests, and inadequate coverage that builds up when testing shortcuts are taken to meet deadlines. Like technical debt, it compounds — deferred testing becomes harder to address as the codebase grows. Management strategies: Track it explicitly (a backlog item, not invisible work), allocate 20% of each sprint to debt reduction, prioritize by risk (fix debt on high-risk modules first), automate test case maintenance by keeping tests tied to requirements, and make debt visible to PM so it\'s a business decision to incur it.',
    proj: 'After 6 months on IEIMS, we had 80+ outdated test cases and 15 flaky automated tests — accumulated from fast sprints. I dedicated 1 sprint to test debt: deleted 30 obsolete cases, updated 50, fixed all 15 flaky tests (found root causes for each). Pass rate in CI went from 87% to 99%. The sprint felt like "lost velocity" but the next 3 sprints had zero false-positive failures in CI.'
  },
  {
    id: 38,
    level: 'advanced',
    cat: 'Strategy',
    q: 'How do you test APIs for security? What specific vulnerabilities do you check?',
    tags: ['Security', 'OWASP'],
    tagColors: ['tr', 'tp'],
    ans: 'Authentication vulnerabilities: No token (should get 401), expired token (401), tampered JWT payload (401 — verify signature check), revoked token still working (401). Authorization vulnerabilities: IDOR — change resource ID to another user\'s, Privilege escalation — use lower-role token on higher-role endpoint, Horizontal access — access another user\'s data with valid token. Input vulnerabilities: SQL injection in query params, XSS payloads in form fields, oversized payloads causing server errors. Information disclosure: Error messages revealing stack traces, internal IPs, database structure.',
    proj: 'IEIMS JWT tampering: modified the role field in the JWT payload from "student" to "admin" and re-sent. API returned 200 with full admin data — server wasn\'t verifying the JWT signature, only decoding the payload. HIMS IDOR: changed patient ID in GET /patients/{id}/records from my patient ID to another patient\'s ID — returned that patient\'s complete medical history. Both Critical security bugs found through systematic API security testing.'
  },
  {
    id: 39,
    level: 'advanced',
    cat: 'Strategy',
    q: 'How do you coordinate testing across a team of 20+ developers with multiple modules being developed simultaneously?',
    tags: ['Lead role', 'Coordination'],
    tagColors: ['tb', 'tg'],
    ans: 'Module ownership model: Each developer group has a designated QA contact for their module that sprint. Dependency mapping: Identify integration points between modules being developed in parallel — test those integrations explicitly. Feature flags: If a feature isn\'t ready for full testing, use a flag to isolate it from regression. Staged readiness: Modules are "QA-ready" in batches — don\'t wait for all 20 developers to finish. Test as features complete. CI as coordination: GitHub Actions PR tests catch cross-module regressions automatically — no manual coordination needed for regression.',
    proj: 'IEIMS had 5 developer teams working on 5 modules simultaneously. I created a daily "QA status board" in Jira showing: which features were QA-ready, which were blocked, which had open critical bugs. Each team lead had a 10-minute slot with me every 2 days. The board removed the need for everyone to attend the same meetings — each team saw only their status.'
  },
  {
    id: 40,
    level: 'advanced',
    cat: 'Process',
    q: 'Describe your complete testing process for a new feature from requirement to sign-off.',
    tags: ['End to end', 'Process'],
    tagColors: ['tg', 'tb'],
    ans: 'Stage 1 — Requirement (Sprint planning): Review user story, challenge acceptance criteria, raise ambiguities, estimate QA effort. Stage 2 — Test design (During dev): Write test cases, prepare test data, update RTM. Stage 3 — Smoke (Feature dev-complete): 5-minute smoke — is it stable enough to test? Stage 4 — Functional (Day 1–2): Execute all test cases, log defects with business impact. Stage 5 — Integration (Day 2–3): Test this feature\'s interaction with all dependent modules. Stage 6 — Regression (Before release): Run automated suite — confirm no regressions introduced. Stage 7 — UAT (If applicable): Support stakeholder validation. Stage 8 — Sign-off: Document pass/fail metrics, open issues, release recommendation.',
    proj: 'HIMS patient discharge feature: Day 0 — found billing gap in requirements (raised before dev). Day 3 — feature dev-complete, smoke passed. Day 4-5 — 40 test cases executed, 3 bugs found. Day 6 — integration tested with billing module (found the outstanding balance bug — discharge allowed without payment). Day 7 — bug fixed, re-tested, integration re-passed. Day 8 — automated regression green. Go-live recommendation issued with zero open High/Critical bugs.'
  },
  {
    id: 41,
    level: 'advanced',
    cat: 'Defect Management',
    q: 'How do you prioritize which bugs to fix when there are 50 open bugs and only 3 days to release?',
    tags: ['Triage', 'Decision making'],
    tagColors: ['tr', 'tb'],
    ans: '4-step triage process: Step 1 — Classify by release-blocking criteria: Critical bugs = fix or delay release. High bugs affecting core journeys = fix or get formal PM acceptance. Medium/Low = document and defer. Step 2 — Group by effort: Some High bugs take 30 minutes to fix. Prioritize the high-impact, low-effort ones. Step 3 — Check dependencies: Does bug A need to be fixed before bug B can be retested? Sequence accordingly. Step 4 — Communicate openly: Give PM a clear picture — "5 bugs must be fixed, 20 are safe to defer, 25 are cosmetic backlog items."',
    proj: 'IEIMS pre-release with 47 open bugs and 3 days to go-live: I ran triage in 1 hour. 3 Critical — mandatory fix. 8 High — 5 were core journey bugs (fix), 3 were edge cases (PM accepted risk in writing). 36 Medium/Low — deferred to next sprint. Communicated a "release readiness report" to PM with exactly this breakdown. Release went ahead, zero production Critical incidents from the 3 deferred High bugs.'
  },
  {
    id: 42,
    level: 'advanced',
    cat: 'Process',
    q: 'How do you handle testing of a feature that involves third-party integrations?',
    tags: ['Integration', 'Advanced'],
    tagColors: ['tb', 'ta'],
    ans: 'Step 1 — Identify the integration boundary: What data do we send, what do we expect to receive? Step 2 — Mock the third party for unit/integration testing: Use a mock server to test your code\'s behavior without relying on the third party. Step 3 — Test with sandbox environment: Most third parties provide a sandbox. Test all scenarios there. Step 4 — Test failure scenarios: What happens when the third party is down? Times out? Returns unexpected data? Your system must handle these gracefully. Step 5 — Monitor in production: Third-party integrations fail in ways you can\'t predict. Set up alerts.',
    proj: 'HIMS SMS notification integration (patient appointment reminders via third-party SMS gateway): I tested with the gateway\'s sandbox. Happy path (SMS sent), invalid number (graceful error, not crash), gateway timeout (system queued the message and retried), gateway returns 500 (error logged, patient not notified but system continued). The timeout test found that the UI hung indefinitely waiting for gateway response — a UX blocking bug.'
  },
  {
    id: 43,
    level: 'advanced',
    cat: 'Process',
    q: 'What do you do when you find a bug in production that should have been caught in testing?',
    tags: ['Post-mortem', 'Accountability'],
    tagColors: ['tr', 'ta'],
    ans: 'Immediate (same day): Document the bug thoroughly. Communicate impact — how many users affected, what data at risk. Support the hotfix — be available for immediate re-testing. Within 48 hours: Root cause analysis — why did this escape? Was there a test case for this? Was it executed? Did it pass incorrectly? Process improvement: Add or fix the test case. If the test case existed but the scenario wasn\'t covered, update the test design. If the test wasn\'t executed due to time pressure, review prioritization. Never blame: Focus on the process gap, not the person.',
    proj: 'LMS: Bengali-character filenames corrupted on Windows download — reached production. Root cause: test data only used English filenames. I added Unicode filename test cases to the upload/download suite and added a cross-platform download check to the test plan template. Next 6 months: zero file encoding bugs in production. Process fixed, not just the bug.'
  },
  {
    id: 44,
    level: 'advanced',
    cat: 'Strategy',
    q: 'How do you measure QA ROI? How do you justify the value of testing to management?',
    tags: ['Business value', 'Senior skill'],
    tagColors: ['tb', 'tg'],
    ans: 'Quantitative metrics: Defect escape rate (bugs found in production vs in testing), cost of a production bug vs a test-phase bug, regression time saved by automation (hours saved × engineer cost), reduced hotfix deployments. Business language metrics: "Our automation suite saves 32 person-hours per release cycle." "Defect escape rate dropped from 8% to 0% in 3 consecutive releases." "Performance testing prevented a potential outage that would have affected 1.2 million users." Key principle: Never say "we found 200 bugs." Say "we prevented 200 defects from reaching users — of which 15 were Critical security or data issues."',
    proj: 'IEIMS QA ROI presented to management: Playwright automation saves 32 person-hours/release = ~80,000 BDT/month in testing cost. Defect escape rate: 0% last 3 releases (was 12% before structured QA). JWT tampering bug caught pre-release: potential national data breach of 3.2 million student records prevented. That last point alone justified the entire QA program to the ministry.'
  },
  {
    id: 45,
    level: 'advanced',
    cat: 'Strategy',
    q: 'What is your approach to testing microservices architecture?',
    tags: ['Architecture', 'Modern systems'],
    tagColors: ['tb', 'tp'],
    ans: 'Microservices testing is complex because failures cascade across service boundaries. Testing layers: Unit test each service independently (developers). Contract testing — verify the API contract between services matches expectations (consumer-driven contract testing). Integration testing — test actual service-to-service communication. End-to-end testing — test complete business flows that span multiple services. Key challenges: Data consistency across services, network failures between services, version mismatches when one service updates its API.',
    proj: 'IEIMS was microservices-based: student service, enrollment service, result service, notification service. API chain testing in Postman tested inter-service communication. Key finding: student creation in student-service had 500ms replication lag before enrollment-service could see the new student. Integration-level test caught this timing bug — unit tests for each service individually would have missed it entirely.'
  },
  {
    id: 46,
    level: 'advanced',
    cat: 'Process',
    q: 'How do you test for data integrity across a complex system?',
    tags: ['Data quality', 'Critical'],
    tagColors: ['tb', 'tr'],
    ans: '5 data integrity checks: Referential integrity: When a student is deleted, are all enrollment records also deleted/orphaned correctly? Uniqueness constraints: Can the same student be enrolled twice? Can duplicate email addresses exist? Cascade behavior: Does deleting a school cascade correctly to all student records? Transaction atomicity: If step 3 of a 5-step process fails, are steps 1–2 rolled back? Concurrent access: Can two users edit the same record simultaneously? Which save wins? Is data corrupted?',
    proj: 'IEIMS concurrent edit test: I opened the same student record in 2 browser sessions simultaneously. Both made different edits. Both saved. The second save silently overwrote the first with no conflict warning — data loss. This was a data integrity failure in a government system where student records are legal documents. Found through deliberate concurrency testing — something that never appears in scripted happy-path tests.'
  },
  {
    id: 47,
    level: 'advanced',
    cat: 'Strategy',
    q: 'How do you test usability — and does it belong in QA?',
    tags: ['Usability', 'UX'],
    tagColors: ['tp', 'tg'],
    ans: 'Yes, usability belongs in QA — though it\'s often overlooked. Usability testing checks: Is the error message clear and actionable? (Not "Error 500" — but "Unable to save record. Please try again.") Is the navigation logical for the target user? Are loading states communicated? Are forms labeled clearly? Does the critical path require minimum clicks? At senior QA level, you\'re not just verifying "does it work" but "can a real user accomplish their goal efficiently."',
    proj: 'IEIMS is used by district education officials — many are non-technical. I added usability checks to my test cases: does each error message tell the user what to do next? Are confirmation dialogs specific ("Are you sure you want to delete student record #4521 Rahim Uddin?") vs generic ("Are you sure?")? Found 12 usability issues that were technically "passing" tests but practically confusing. All 12 were fixed before government rollout.'
  },
  {
    id: 48,
    level: 'advanced',
    cat: 'Strategy',
    q: 'Explain the concept of "testing is a risk management activity." How does this change your approach?',
    tags: ['Philosophy', 'Senior mindset'],
    tagColors: ['tr', 'tb'],
    ans: 'Viewing testing as risk management means: you cannot test everything, so you test the things that matter most. Every testing decision is a risk decision. "Should I test this module deeply or do a smoke?" = "How much risk am I willing to accept if this module has bugs?" This shifts the conversation from "we tested X% of features" to "we covered X% of business risk." It also means communicating untested areas as accepted risk — not invisible gaps. Management can then make informed release decisions rather than assuming everything was tested.',
    proj: 'IEIMS: I never claimed to test every possible scenario. I framed it as: "We have covered 100% of Critical-risk scenarios and 95% of High-risk scenarios. 3 Low-risk modules had smoke-only coverage this sprint." This gave the PM a real risk picture. When they asked "are we safe to release?" the answer was "yes for the covered scenarios — here\'s the residual risk on the 3 smoke-only modules." Honest, professional, and defensible.'
  },
  {
    id: 49,
    level: 'advanced',
    cat: 'Process',
    q: 'How do you test a system that must comply with government regulations or healthcare standards?',
    tags: ['Compliance', 'High stakes'],
    tagColors: ['tr', 'tb'],
    ans: 'Step 1 — Know the regulations: What data must be protected? What audit trails are required? What access controls are mandated? Step 2 — Map requirements to regulations: Each regulatory requirement becomes a test case in the RTM. Step 3 — Compliance-specific test cases: Audit log completeness (every action logged with user, timestamp, IP), data access controls (only authorized roles access sensitive data), data retention (records kept for mandated period), encryption (sensitive data encrypted at rest and in transit). Step 4 — Document evidence: Compliance requires proof — test execution reports become audit evidence.',
    proj: 'HIMS healthcare compliance testing: verified that every patient record access was logged with doctor ID, timestamp, action type. Tested that deleted records were archived (not hard-deleted) per healthcare data retention law. Verified patient data was not visible in server error responses (information disclosure). The HIMS compliance test suite was 45 test cases specifically covering data protection and audit requirements — separate from functional testing.'
  },
  {
    id: 50,
    level: 'advanced',
    cat: 'Strategy',
    q: 'If you were starting a new QA role tomorrow, what would you do in your first 30 days?',
    tags: ['Leadership', 'Senior mindset'],
    tagColors: ['tg', 'tb'],
    ans: 'Week 1 — Understand the product and people: Use the product as a real user. Meet developers, PMs, and stakeholders. Understand the release cadence and pain points. Read existing test cases and bug history — patterns reveal systemic problems. Week 2 — Assess the QA process: What testing happens? What\'s missing? What\'s the defect escape rate? Is there automation? What\'s the CI pipeline like? Document findings without judging. Week 3 — Quick wins: Fix the most obvious gaps (flaky tests, missing smoke tests, wrong severity classifications). Don\'t try to rebuild everything. Week 4 — Present findings: Share a QA health assessment with the PM — what\'s working, what needs investment, what the risk is if gaps remain. Propose a 90-day improvement plan.',
    proj: 'When I joined Ethics Advance, I spent week 1 using IEIMS as a student, teacher, and admin. Found 3 bugs just as a user before writing a single formal test case. Week 2: discovered no API testing existed and no performance testing was planned before a 500,000-user launch. Week 3: set up Postman collections for the top 20 APIs. Week 4: presented a gap analysis showing performance risk with a k6 proof-of-concept showing the system crashed at 800 users. That presentation got the k6 testing program approved within the same week.'
  }
];

// Categories for tabs
const categories = [
  { id: 'manual-testing', label: 'Manual Testing', icon: 'fa-hand-pointer' },
  { id: 'automation-testing', label: 'Automation Testing', icon: 'fa-robot' },
  { id: 'k6', label: 'K6', icon: 'fa-bolt' },
  { id: 'postman', label: 'Postman', icon: 'fa-paper-plane' },
  { id: 'playwright', label: 'Playwright', icon: 'fa-theater-masks' },
  { id: 'api-testing', label: 'API Testing', icon: 'fa-plug' }
];

export default function InterviewPreparation() {
  const [activeCategory, setActiveCategory] = useState('manual-testing');
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentSearch, setCurrentSearch] = useState('');
  const [markedQuestions, setMarkedQuestions] = useState(new Set());
  const [openQuestion, setOpenQuestion] = useState(null);

  // Load marked questions from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('marked-questions');
    if (saved) {
      setMarkedQuestions(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save marked questions to localStorage
  useEffect(() => {
    localStorage.setItem('marked-questions', JSON.stringify([...markedQuestions]));
  }, [markedQuestions]);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const toggleMarked = (e, id) => {
    e.stopPropagation();
    const newMarked = new Set(markedQuestions);
    if (newMarked.has(id)) {
      newMarked.delete(id);
    } else {
      newMarked.add(id);
    }
    setMarkedQuestions(newMarked);
  };

  const getFilteredQuestions = () => {
    return manualTestingData.filter(q => {
      const matchesFilter = currentFilter === 'all' || q.level === currentFilter ||
        (currentFilter === 'marked' && markedQuestions.has(q.id));
      const matchesSearch = currentSearch === '' ||
        q.q.toLowerCase().includes(currentSearch.toLowerCase()) ||
        q.ans.toLowerCase().includes(currentSearch.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const getTagColorClass = (colorCode) => {
    const colorMap = {
      'tb': 'tag-blue',
      'tg': 'tag-green',
      'ta': 'tag-amber',
      'tr': 'tag-red',
      'tp': 'tag-purple',
      'tt': 'tag-teal'
    };
    return colorMap[colorCode] || 'tag-blue';
  };

  const getLevelColorClass = (level) => {
    const colorMap = {
      'basic': 'level-basic',
      'intermediate': 'level-intermediate',
      'advanced': 'level-advanced'
    };
    return colorMap[level] || 'level-basic';
  };

  const filteredQuestions = getFilteredQuestions();
  const progressPercent = Math.round((markedQuestions.size / manualTestingData.length) * 100);

  const renderContent = () => {
    switch (activeCategory) {
      case 'manual-testing':
        return (
          <div className="qa-container">
            {/* Progress Bar */}
            <div className="progress-wrap">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>
              <div className="progress-text">{markedQuestions.size} / {manualTestingData.length} reviewed</div>
            </div>

            {/* Search */}
            <input
              className="search-box"
              placeholder="Search questions..."
              value={currentSearch}
              onChange={(e) => setCurrentSearch(e.target.value)}
            />

            {/* Filters */}
            <div className="filters">
              <button
                className={`ftab ${currentFilter === 'all' ? 'on' : ''}`}
                onClick={() => setCurrentFilter('all')}
              >
                All ({manualTestingData.length})
              </button>
              <button
                className={`ftab ${currentFilter === 'basic' ? 'on' : ''}`}
                onClick={() => setCurrentFilter('basic')}
              >
                Basic (15)
              </button>
              <button
                className={`ftab ${currentFilter === 'intermediate' ? 'on' : ''}`}
                onClick={() => setCurrentFilter('intermediate')}
              >
                Intermediate (20)
              </button>
              <button
                className={`ftab ${currentFilter === 'advanced' ? 'on' : ''}`}
                onClick={() => setCurrentFilter('advanced')}
              >
                Advanced (15)
              </button>
              <button
                className={`ftab ${currentFilter === 'marked' ? 'on' : ''}`}
                onClick={() => setCurrentFilter('marked')}
              >
                Reviewed ✓
              </button>
            </div>

            {/* Questions */}
            <div className="questions-list">
              {filteredQuestions.length === 0 ? (
                <div className="no-results">No questions match your search.</div>
              ) : (
                ['basic', 'intermediate', 'advanced'].map(level => {
                  const levelQuestions = filteredQuestions.filter(q => q.level === level);
                  if (levelQuestions.length === 0) return null;

                  const levelLabels = {
                    basic: '🟢 Basic Level (Q1–15)',
                    intermediate: '🟡 Intermediate Level (Q16–35)',
                    advanced: '🔴 Advanced Level (Q36–50)'
                  };

                  return (
                    <div key={level}>
                      <div className="cat-label">{levelLabels[level]}</div>
                      {levelQuestions.map(q => (
                        <div
                          key={q.id}
                          className={`qcard ${openQuestion === q.id ? 'open' : ''} ${markedQuestions.has(q.id) ? 'done-card' : ''}`}
                        >
                          <div className="qhead" onClick={() => toggleQuestion(q.id)}>
                            <div className={`qnum ${getLevelColorClass(q.level)}`}>{q.id}</div>
                            <div className="qtext">{q.q}</div>
                            <span className={`qarr ${openQuestion === q.id ? 'open' : ''}`}>▼</span>
                          </div>
                          {openQuestion === q.id && (
                            <div className="abody show">
                              <div className="atags">
                                {q.tags.map((tag, i) => (
                                  <span key={i} className={`tag ${getTagColorClass(q.tagColors[i])}`}>
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <div className="ans" dangerouslySetInnerHTML={{ __html: q.ans }}></div>
                              {q.proj && (
                                <div className="proj-box">
                                  <div className="proj-label">Real project example</div>
                                  {q.proj}
                                </div>
                              )}
                              {q.warn && (
                                <div className="warn">
                                  <i className="fas fa-exclamation-triangle"></i>
                                  {q.warn}
                                </div>
                              )}
                              <button
                                className={`done-btn ${markedQuestions.has(q.id) ? 'marked' : ''}`}
                                onClick={(e) => toggleMarked(e, q.id)}
                              >
                                {markedQuestions.has(q.id) ? '✓ Reviewed' : 'Mark as reviewed'}
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="coming-soon">
            <div className="coming-soon-icon">
              <i className={`fas ${categories.find(c => c.id === activeCategory)?.icon || 'fa-tools'}`}></i>
            </div>
            <h3>{categories.find(c => c.id === activeCategory)?.label || 'Coming Soon'}</h3>
            <p>This section is under development. More interview questions and answers will be added soon.</p>
            <div className="coming-soon-features">
              <div className="feature-item">
                <i className="fas fa-question-circle"></i>
                <span>Comprehensive Q&A</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-code"></i>
                <span>Code Examples</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-project-diagram"></i>
                <span>Real Projects</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-tasks"></i>
                <span>Practice Problems</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="interview-prep" className="section interview-prep">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Growth</span>
          <h2 className="section-title">Interview Preparation</h2>
          <p className="section-subtitle">
            Comprehensive QA interview questions and answers with real project examples
          </p>
        </div>

        <div className="interview-tabs">
          <div className="tabs-header">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={`fas ${cat.icon}`}></i>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="tabs-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
}
