import { BasePage } from '../BasePage.js';

export class BrokenLinksPage extends BasePage {
    constructor(page) {
        super(page);
        
        // Text locators for image labels
        this.validImageText = page.locator('p:has-text("Valid image")');
        this.brokenImageText = page.locator('p:has-text("Broken image")');
        
        // Actual image locators (the images near the text)
        this.validImage = page.locator('img[src="/images/Toolsqa.jpg"]').first();
        this.brokenImage = page.locator('img[src="/images/Toolsqa_1.jpg"]');
        
        // Link locators
        this.validLink = page.locator('a:has-text("Click Here for Valid Link")');
        this.brokenLink = page.locator('a:has-text("Click Here for Broken Link")');
    }

    async isValidImageTextVisible() {
        return await this.validImageText.isVisible();
    }

    async isBrokenImageTextVisible() {
        return await this.brokenImageText.isVisible();
    }

    async isValidImageVisible() {
        return await this.validImage.isVisible();
    }

    async isBrokenImageVisible() {
        return await this.brokenImage.isVisible();
    }

    async clickValidLink() {
        await this.validLink.click();
        await this.page.waitForLoadState();
    }

    async clickBrokenLink() {
        await this.brokenLink.click();
    }

    async getCurrentUrl() {
        return this.page.url();
    }

    async waitForPageLoad(timeout = 10000) {
        await this.page.waitForLoadState('domcontentloaded', { timeout });
    }
}