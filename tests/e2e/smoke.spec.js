const { test, expect } = require('@playwright/test');

test('homepage loads, components initialized, and HIS test plan modal works', async ({ page }) => {
  // Navigate to the baseURL (set in playwright.config.js)
  await page.goto('/');
  await expect(page).toHaveTitle(/Lead SQA Engineer/);

  // The site uses a client-side component loader; ensure the QA hub is available
  await page.waitForSelector('#qa', { state: 'visible', timeout: 7000 });

  // Ensure any loading screen has been dismissed (either removed or hidden)
  await page.waitForSelector('#loading-screen', { state: 'detached', timeout: 7000 });

  // The QA card for HIS should be present
  await expect(page.locator('#qa .qa-card h3')).toContainText('Hospital Information System');

  // Simulate navigation: click QA in the header
  await page.click('a[data-test-id="nav-qa"]');

  // Select the HIS card and interact with it
  const hisCard = page.locator('#qa .qa-card', { hasText: 'Hospital Information System' }).first();
  await expect(hisCard).toBeVisible();

  // The view-testplan button should open the HIS modal
  const openBtn = hisCard.locator('.view-testplan');
  await expect(openBtn).toHaveAttribute('aria-controls', 'modal-his');
  await openBtn.click();

  const hisModal = page.locator('#modal-his');
  await expect(hisModal).toBeVisible();

  // Confirm a priority test scenario is present
  await expect(hisModal.locator('li[data-test-id="his-s1"]')).toContainText('Patient registration');

  // Download link should exist
  await expect(hisModal.locator('a[href="test-plans/his-test-plan.md"]')).toBeVisible();

  // Close the modal using the close control and verify it's hidden
  await hisModal.locator('[data-close]').click();
  await expect(hisModal).toBeHidden();
});