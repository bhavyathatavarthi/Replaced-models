/**
 * Page object for Wikipedia search and article-result verification.
 * Locator selection requires confirmation from an approved source before use.
 */
export class WikipediaSearchPage {
  /**
   * Navigate to the provided Wikipedia URL.
   * @param url Wikipedia application URL.
   */
  async navigateTo(url: string): Promise<void> {
    throw new Error(`Cannot navigate to ${url}: browser framework and approved navigation API are not configured.`);
  }

  /**
   * Enter the requested term in Wikipedia's search input.
   * @param searchTerm Term to search for.
   */
  async enterSearchTerm(searchTerm: string): Promise<void> {
    throw new Error(`Cannot enter search term: search input selector and browser framework are unverified.`);
  }

  /**
   * Activate Wikipedia's Search button.
   */
  async activateSearch(): Promise<void> {
    throw new Error('Cannot activate Search: button selector and browser framework are unverified.');
  }

  /**
   * Check that the result or article header contains the requested text.
   * @param expectedText Text expected in a search result or article header.
   * @returns Whether the displayed result/header contains the expected text.
   */
  async resultOrHeaderContains(expectedText: string): Promise<boolean> {
    throw new Error(`Cannot verify ${expectedText}: result/header selector and assertion framework are unverified.`);
  }
}
