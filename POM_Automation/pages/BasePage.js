export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    async waitForElement(locator, timeout = 5000) {
        await this.page.waitForSelector(locator, { timeout });
    }

    async isElementVisible(locator) {
        return await this.page.locator(locator).isVisible();
    }

    async getElementText(locator) {
        return await this.page.locator(locator).textContent();
    }
}