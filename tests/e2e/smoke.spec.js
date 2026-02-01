const { test, expect } = require('@playwright/test');

test('homepage loads and QA Hub opens HIS test plan', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Lead SQA Engineer/);

  // navigate to QA hub and verify cards
  await page.click('a[data-test-id="nav-qa"]');
  await expect(page.locator('#qa .qa-card h3')).toBeVisible();

  // Open HIS test plan modal
  await page.click('.view-testplan[data-project="his"]');
  await expect(page.locator('#modal-his')).toBeVisible();
  await expect(page.locator('#modal-his')).toContainText('Patient registration');

  // Close modal
  await page.click('#modal-his .modal-close');
  await expect(page.locator('#modal-his')).not.toBeVisible();
});