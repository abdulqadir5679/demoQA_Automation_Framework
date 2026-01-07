import { BasePage } from '../BasePage.js';

export class BrowserWindowsPage extends BasePage {
    constructor(page) {
        super(page);
        
        this.tabButton = page.locator('#tabButton');
        this.windowButton = page.locator('#windowButton');
        this.messageWindowButton = page.locator('#messageWindowButton');
    }

    async clickTabButton() {
        return await Promise.all([
            this.page.context().waitForEvent('page'),
            this.tabButton.click()
        ]);
    }

    async clickWindowButton() {
        return await Promise.all([
            this.page.context().waitForEvent('page'),
            this.windowButton.click()
        ]);
    }

    async clickMessageWindowButton() {
        return await Promise.all([
            this.page.context().waitForEvent('page'),
            this.messageWindowButton.click()
        ]);
    }
}