import { test } from '@playwright/test';
import { WikipediaPage } from '../pages/wikipedia.page';

/** Playwright test for searching Wikipedia and checking the recorded result. */
test('Wikipedia search shows the Early playwrights result', async ({ page }) => {
  const wikipediaPage = new WikipediaPage(page);

  /** Opens Wikipedia as the starting point for the search flow. */
  await test.step('Navigate to Wikipedia', async () => {
    await wikipediaPage.navigateToWikipedia();
  });

  /** Searches Wikipedia for the recorded Playwright query. */
  await test.step('Search for Playwright', async () => {
    await wikipediaPage.searchFor('Playwright');
  });

  /** Submits the search using the page object's recorded action. */
  await test.step('Submit the search', async () => {
    await wikipediaPage.submitSearch();
  });

  /** Checks visibility of the specific result link recorded by the test. */
  await test.step('Verify the Early playwrights result', async () => {
    await wikipediaPage.verifyEarlyPlaywrightsLinkVisible();
  });
});
