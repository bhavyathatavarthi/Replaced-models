import { expect, Locator, Page } from '@playwright/test';

/** Page object for Wikipedia search and the resulting article content. */
export class WikipediaPage {
  /** Creates the Wikipedia page object for the active browser page. */
  constructor(private readonly page: Page) {}

  private get searchInput(): Locator {
    return this.page.getByRole('searchbox', { name: 'Search Wikipedia' });
  }

  private get searchButton(): Locator {
    return this.page.getByRole('button', { name: 'Search' });
  }

  private get earlyPlaywrightsLink(): Locator {
    return this.page.getByRole('link', { name: 'Early playwrights' });
  }

  /** Navigates to Wikipedia's main page. */
  async navigateToWikipedia(): Promise<void> {
    await this.page.goto('https://www.wikipedia.org/');
  }

  /** Enters the supplied term into Wikipedia's search box. */
  async searchFor(searchTerm: string): Promise<void> {
    await this.searchInput.fill(searchTerm);
  }

  /** Submits the current search using the recorded Search button. */
  async submitSearch(): Promise<void> {
    await this.searchButton.click();
  }

  /** Verifies that the recorded Early playwrights result link is visible. */
  async verifyEarlyPlaywrightsLinkVisible(): Promise<void> {
    await expect(this.earlyPlaywrightsLink).toBeVisible();
  }
}
