import { test } from '@playwright/test';
import { SauceDemoPage } from '../src/pages/saucedemo.page';

/** Runs the SauceDemo login flow and verifies the recorded inventory title. */
test('SauceDemo user can log in', async ({ page }) => {
  const username = process.env.SAUCEDEMO_USERNAME;
  const password = process.env.SAUCEDEMO_PASSWORD;

  if (!username || !password) {
    throw new Error('Set SAUCEDEMO_USERNAME and SAUCEDEMO_PASSWORD to run this test.');
  }

  const sauceDemoPage = new SauceDemoPage(page);

  await test.step('Navigate to SauceDemo login page', async () => {
    await sauceDemoPage.navigateToLogin();
  });
  await test.step('Enter username', async () => {
    await sauceDemoPage.enterUsername(username);
  });
  await test.step('Enter password', async () => {
    await sauceDemoPage.enterPassword(password);
  });
  await test.step('Submit login', async () => {
    await sauceDemoPage.submitLogin();
  });
  await test.step('Verify inventory title visibility', async () => {
    await sauceDemoPage.assertInventoryTitleVisible();
  });
});
