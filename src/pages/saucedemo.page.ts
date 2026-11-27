import { expect, Page } from '@playwright/test';

/** Page object for the SauceDemo login and inventory page. */
export class SauceDemoPage {
  /** Creates the page object for the active Playwright page. */
  constructor(private readonly page: Page) {}

  /** Opens the SauceDemo login page. */
  async navigateToLogin(): Promise<void> {
    console.log('Step 1: Navigate to SauceDemo login page');
    await this.page.goto('https://www.saucedemo.com/');
  }

  /** Enters a configured username without logging its value. */
  async enterUsername(username: string): Promise<void> {
    console.log('Step 2: Enter username');
    await this.page.locator('[data-test="username"]').fill(username);
  }

  /** Enters a configured password without logging its value. */
  async enterPassword(password: string): Promise<void> {
    console.log('Step 3: Enter password');
    await this.page.locator('[data-test="password"]').fill(password);
  }

  /** Submits the login form using the recorded login button. */
  async submitLogin(): Promise<void> {
    console.log('Step 4: Submit login');
    await this.page.locator('[data-test="login-button"]').click();
  }

  /** Verifies visibility of the recorded inventory title element. */
  async assertInventoryTitleVisible(): Promise<void> {
    console.log('Step 5: Verify inventory title visibility');
    await expect(this.page.locator('[data-test="title"]')).toBeVisible();
  }
}
