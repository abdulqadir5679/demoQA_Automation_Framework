import { BasePage } from '../BasePage.js';

export class LinksPage extends BasePage {
    constructor(page) {
        super(page);
        
        // External link locators
        this.simpleLink = page.locator('#simpleLink');
        this.dynamicLink = page.locator('#dynamicLink');
        
        // API call link locators
        this.createdLink = page.locator('#created');
        this.noContentLink = page.locator('#no-content');
        this.movedLink = page.locator('#moved');
        this.badRequestLink = page.locator('#bad-request');
        this.unauthorizedLink = page.locator('#unauthorized');
        this.forbiddenLink = page.locator('#forbidden');
        this.invalidUrlLink = page.locator('#invalid-url');
        
        // Response locator
        this.linkResponse = page.locator('#linkResponse');
    }

    async clickSimpleLink() {
        await this.simpleLink.click();
    }

    async clickDynamicLink() {
        await this.dynamicLink.click();
    }

    async clickCreatedLink() {
        await this.createdLink.click();
    }

    async clickNoContentLink() {
        await this.noContentLink.click();
    }

    async clickMovedLink() {
        await this.movedLink.click();
    }

    async clickBadRequestLink() {
        await this.badRequestLink.click();
    }

    async clickUnauthorizedLink() {
        await this.unauthorizedLink.click();
    }

    async clickForbiddenLink() {
        await this.forbiddenLink.click();
    }

    async clickInvalidUrlLink() {
        await this.invalidUrlLink.click();
    }

    async getLinkResponseText() {
        return await this.linkResponse.textContent();
    }

    async waitForNewPageAndClose(context, clickAction) {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            clickAction()
        ]);
        await newPage.waitForLoadState();
        const url = newPage.url();
        await newPage.close();
        return url;
    }
}